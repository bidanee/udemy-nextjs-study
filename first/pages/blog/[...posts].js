import { useRouter } from "next/router"

export default function BlogPostsPage() {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>블로그 포스트</h1>
    </div>
  )
}
