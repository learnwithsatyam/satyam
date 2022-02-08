import { useState } from "react";
import { useRecoilState } from 'recoil'
import { sidenavState } from "../atom/sidenavAtom";
import SidenavHeader from "./SidenavHeader";
import SidenavItems from "./SidenavItems";

const sidenavDataFromDatabase = [
         {
             group : 'first group',
             items : [
                 {
                     itemName : 'key 1',
                     link : 'https://www.google.com'
                 },
                 {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                },
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                },
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                },
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                },
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                },
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                },
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                },
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                },
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                },
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                },
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                }
             ]
         },

         {
            group : 'first group',
            items : [
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                }
            ]
        },

        {
            group : 'first group',
            items : [
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                }
            ]
        },

        {
            group : 'first group',
            items : [
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                }
            ]
        },

        {
            group : 'first group',
            items : [
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                }
            ]
        },

        {
            group : 'first group',
            items : [
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                }
            ]
        },

        {
            group : 'first group',
            items : [
                {
                    itemName : 'key 1',
                    link : 'https://www.google.com'
                }
            ]
        }
     ]
let sidenavCounter = 0;
function Sidenav(){
    const [sidenav , setSidenav] = useRecoilState(sidenavState);
    return(
        <div className={`w-full h-full md:w-3/6 xl:w-1/4 bg-white overflow-hidden overflow-y-scroll transform left-0 transition duration-200 ease-in-out absolute z-50 ${sidenav ? '':'-translate-x-full'}`}>
            <SidenavHeader />
            <div className="border border-r-4 pl-4 border-r-orange-600">
                {sidenavDataFromDatabase.map(({group , items}) => {
                    sidenavCounter = sidenavCounter + 1;
                    return <SidenavItems key={group + sidenavCounter} group={group} items={items} />
                })}
            </div>
        </div>
    )
}

export default Sidenav;