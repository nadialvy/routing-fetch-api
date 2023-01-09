import { useRouter } from 'next/router'

export default function About(){
    const router = useRouter()

    return(
        <div className="p-6">
            <p onClick={() => router.back()} className="text-2xl">
                ←
            </p>
            <p>About page</p>
        </div>
    );
}