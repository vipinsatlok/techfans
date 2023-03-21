import Image from 'next/image'
import { useRouter } from 'next/router'

const Card = ({ title, description, slug, icon }) => {

    const router = useRouter()

    return (
        <div className='grid gap-3 rounded-xl p-5 bg-white'>
            {/* svg */}
            <div>
                <Image width={40} height={40} alt="Icon" src={icon} />
            </div>

            {/* title and dis */}
            <div>
                <h3 className='text-gray-900 font-medium text-xl'>{title}</h3>
                <p className='text-gray-500 text-xs'>{description}</p>
            </div>

            {/* redirect or more buttons */}
            <div>
                <button onClick={() => router.push(`/tools/${slug}`)} className='rounded-full bg-blue-600 p-0.5 w-8 h-8 text-sm'>B</button>
            </div>
        </div>
    )
}

export default Card