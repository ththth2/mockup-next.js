import React from 'react'

type Props = {
    posts: Array<any>
}

function posts({ posts  }: Props) {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    }
  }

export default posts