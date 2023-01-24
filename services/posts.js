import type { Post } from "../types.d.ts"
import { extract } from "$std/encoding/front_matter.ts"
import { render } from "https://deno.land/x/gfm@0.1.26/mod.ts"

export const loadPost = (id: string): Promise<Post | null> => {
    return Deno.readTextFile(`./content/posts/${id}.md`)
    .then(raw => {
        const { attrs, body} = extract(raw)    
        const params = attrs as Record<string, string>
        const post : Post = {
            id,
            title: params.title,
            body: render(body),
            date: new Date(params.date),
            excerpt: params.excerpt
        }
        return post
    })
    .catch(() => null)
}

export const listPosts = async ():Promise<Post[]> => {
    const promises = []
    for await (const entry of Deno.readDir("./content/posts")){
        const {name} = entry
        const [id] = name.split(".")
        if(id) promises.push(loadPost(id))
    }
    const posts = await Promise.all(promises) as Post[]
    posts.sort((a,b) => b.date.getTime() - a.date.getTime())
    return posts
}