import { Handlers, PageProps } from "$fresh/server.ts"
import { loadPost } from "../../services/posts.ts"
import { CSS } from "https://deno.land/x/gfm@0.1.26/mod.ts"
import Button from "../../islands/Button.tsx"

export const handler: Handlers = {
    async GET(request, contex){
        const { id } = contex.params
        const post = await loadPost(id)
        return contex.render({ post })
    }
}
export default function PagePost(props: PageProps){
    const { post } = props.data
    return (
        <article class="p-4">
            <header>                
                <h1 class="text-2xl font-bold">{post.title}</h1>
                <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
            </header>
            <Button />
            <style dangerouslySetInnerHTML={{__html: CSS}}/>
            <div class="markdown-body" dangerouslySetInnerHTML={{__html: post.body}}/>
        </article>
    )
}