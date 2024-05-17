import { useRouter } from "next/router"

export default function ClientProjectsPage() {
  const router = useRouter()
  console.log(router.query)
  const loadProjectHandler = () => {
    // router.push("clients/dan/project1")
    router.replace("/clients/dan/project1")
  }
  return (
    <div>
      <h1>사용자의 프로젝트</h1>
      <button onClick={loadProjectHandler}>프로젝트1</button>
    </div>
  )
}
