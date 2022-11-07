import Link from "next/link"
import useSWR from "swr"
import { User } from "../@types/user"


const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR<User[]>("/api/users", fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading</div>

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Link href="/user/[id]" as={`/user/${user.id}`} legacyBehavior>
              {`User ${user.id}`}
            </Link>
          </li>

        ))}
      </ul>
    </div>
  )
}
