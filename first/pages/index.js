import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <h1>홈페이지</h1>
      <ul>
        <li>
          <Link href="/portfolio">포트폴리오</Link>
        </li>
        <li>
          <Link href="/clients">유저</Link>
        </li>
      </ul>
    </div>
  )
}
