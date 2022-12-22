import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts"
import { listPosts } from "../services/posts.ts"
import { Post } from "../types.d.ts";

export const handler:Handlers = {
  async GET(request, contex){
    return contex.render(await listPosts())
  }
}

export default function Home(props:PageProps) {
  const {data} = props
  return (
    <main class="p-4">
      <h1 class="text-4xl font-bold">Mi blog</h1> 
      {
        data.map((post:Post) => (
          <article class="p-4">
            <h2 class="text-2xl font-bold"><a class="hover:text-blue-400" href={`/blog/${post.id}`}>{post.title}</a></h2>
            <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
          </article>
        ))
      }

    </main>
    
  );
}
