import {config} from 'lib/config'
import Link from 'next/link'
import {useRouter} from 'next/router'
import * as React from 'react'

export default function Footer({brandName}: {brandName: string}) {
  const router = useRouter()
  const isLandingPage = router.pathname === '/'

  if (brandName === config.lifestyleBrand) {
    return (
      <div
        className={`${
          !isLandingPage && `border-t border-gray-200 dark:border-gray-900`
        }`}
      >
        <div
          className={`mx-auto flex max-w-5xl flex-col p-4 text-2xl font-extrabold leading-none tracking-tight sm:text-2xl sm:text-3xl md:p-5 lg:px-6`}
        >
          <Link className="mx-auto hover:text-purple-300" href="/">
            <span className="text-purple-300">●</span> Reach
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`${
        !isLandingPage && `border-t border-gray-200 dark:border-gray-900`
      }`}
    >
      <div
        className={`mx-auto max-w-5xl p-4 text-2xl font-extrabold leading-none tracking-tight sm:text-3xl md:p-5 md:text-4xl lg:px-6`}
      >
        <Link className="hover:text-blue-500" href="/">
          ● Media
        </Link>
      </div>
    </div>
  )
}
