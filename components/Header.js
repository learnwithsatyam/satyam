import { MenuIcon , SearchIcon, XIcon } from '@heroicons/react/solid'
import {useRecoilState} from 'recoil'
import { sidenavState } from '../atom/sidenavAtom';
import GoogleSearchBar from './GoogleSearchBar';
import { googleSearchBarState } from '../atom/googleSearchBarAtom';

function Header(){

    const [sidenav , setSidenav] = useRecoilState(sidenavState)

    const [googleSearchBar, setGoogleSearchBar] = useRecoilState(googleSearchBarState)

    return (
        <nav className='shadow-sm border-b w-full bg-white sticky top-0 z-40 py-4'>
            <div className='flex justify-between items-center max-w-6xl mx-5 lg:mx-auto'>
                {/** menu icon */}
                <div className={ `relative  w-fit text-center ${googleSearchBar ? 'invisible' : ''} `} onClick={()=>sidenav ? setSidenav(false) : setSidenav(true)}>
                    <MenuIcon className="h-6 text-black hover:text-gray-700" />
                </div>

                {/** Website name = LWS */}
                <div className={`relative text-lg text-center transition duration-300 ease-in-out flex-grow font-bold`}>
                    <span className={` ${googleSearchBar ? 'hidden':''} ${sidenav ? 'text-transparent':'text-black'}  `}>
                        LearnWithSatyam
                    </span>
                    <div className={`${googleSearchBar ? '' : 'hidden'} px-10`}>
                        <GoogleSearchBar />
                    </div>
                </div>

                {/** Search Icon */}
                <div className={`relative flex items-center justify-end inset-y-0 w-fit` } >
                    <span className={`${googleSearchBar ? 'hidden' : ''} `} onClick={()=> { 
                        googleSearchBar ? setGoogleSearchBar(false) : setGoogleSearchBar(true);
                    } }>
                        <SearchIcon className={`h-6 text-black focus:text-gray-700`}  />
                    </span>
                    <span className={`${googleSearchBar ? '' : 'hidden'} `} onClick={()=> { 
                        googleSearchBar ? setGoogleSearchBar(false) : setGoogleSearchBar(true);
                        }} >
                        <XIcon className={`h-6 text-black focus:text-gray-700`} />
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Header;