import Link from "next/link"

export default function ClientsPage() {
  const clients = [
    { id: "dan", name: "bidanee" },
    { id: "lee", name: "leeyoung" },
    { id: "max", name: "parkji" },
  ]
  return (
    <div>
      <h1>유저 페이지</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
