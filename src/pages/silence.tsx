import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Silence: NextPage = () => {
  return (
    <div className="silence-page">
      <Link href="/">Home</Link>
      <h1 className="title">Silence Test</h1>
      <Image
        src="/images/avatar.png"
        alt="Silence"
        width={200}
        height={200}
        quality={100}
      ></Image>
    </div>
  )
}

export default Silence
