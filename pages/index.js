import Link from 'next/link';
import { Provider } from 'react-redux';
import store from '../src/store';

export default function Home() {
  return (
    // <Provider store={store}> //error here
      <div className="px-24 py-12">
        <Link
          href="/cities/"
        >See List Cities</Link>
      </div>
    // </Provider>
  )
}

