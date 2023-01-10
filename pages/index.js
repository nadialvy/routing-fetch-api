import Link from 'next/link';

export default function Home() {
  return (
    <div className="px-24 py-12">
      <Link
        href="/cities/"
      >See List Cities</Link>
    </div>
  )
}

