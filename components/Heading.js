import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/reac'

export default function Heading() {
  const router = useRouter()
  const { data: session, status } = useSession()

  const loading = status === 'loading'

  if (loading) {
    return null
  }

  return (
    <header className='flex px-5 pt-5 pb-2 h-14'>
      <div className='text-xl'>
        {router.asPath === '/' ? (
          <p>YouTube clone</p>
        ) : (
          <Link href={`/`} className='underline'>
            Home
          </Link>
        )}
      </div>

      <div className='ml-10 -mt-1 grow'></div>

      {session &&
        (router.asPath === '/subscriptions' ? (
          <a className='flex'>
            <p className='mr-3 font-bold'>Subscriptions</p>
          </a>
        ) : (
          <Link href={`/subscriptions`} className='flex'>
            <p className='mr-3 underline'>Subscriptions</p>
          </Link>
        ))}

      {session && (
        <Link href={`/channel/${session.user.username}`} className='flex'>
          <img
            src={session.user.image}
            className='w-8 h-8 mb-2 mr-2 -mt-1 rounded-full'
          />
          <p className='mr-3'>{session.user.name}</p>
        </Link>
      )}
      <a
        className='px-4 font-bold border rounded-full flex-l'
        href={session ? '/api/auth/signout' : '/api/auth/signin'}>
        {session ? 'logout' : 'login'}
      </a>
    </header>
  )
}
