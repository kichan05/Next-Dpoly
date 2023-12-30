import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>메인</h1>
      <button><Link href="/add">Add 가기</Link></button>
      <button><Link href="/create">Create 가기</Link></button>
    </>
  )
}
