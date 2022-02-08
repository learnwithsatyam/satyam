import { XIcon , SearchIcon } from '@heroicons/react/solid'
import { useRecoilState } from "recoil";
import { sidenavState } from "../atom/sidenavAtom";
function SidenavHeader(){
    const [sidenav , setSidenav] = useRecoilState(sidenavState)  
    return(
        <nav className='shadow-sm pl-4 border-b w-full bg-white sticky top-0 z-40 py-4'>
            <div className='flex justify-between items-center max-w-6xl mx-5 lg:mx-auto space-x-2'>
                {/** menu icon */}
                <div className='relative px-2 w-fit text-center' onClick={()=>sidenav ? setSidenav(false) : setSidenav(true)}>
                    <XIcon className="h-6 text-black hover:text-gray-700" />
                </div>

                {/** Website name = LWS */}
                <div className='relative text-lg text-center md:text-left flex-grow text-black font-bold'>
                    LearnWithSatyam
                </div>
            </div>
        </nav>
    )
}

export default SidenavHeader;