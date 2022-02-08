import SidenavLinks from "./SidenavLinks";
function SidenavItems({group , items}){
    let linkCounter = 0;
    return(
        <div className="max-w-6xl mx-5 text-center md:text-left lg:mx-auto">
            <div className="px-2 font-bold text-gray-700 py-2 text-base">
                {group}
            </div>
            <div className="w-full mb-4">
                {items.map(({itemName , link}) => {
                    linkCounter = linkCounter + 1;
                    return(
                        <SidenavLinks 
                            key = {itemName + link + linkCounter}
                            itemName = {itemName}
                            link = {link}
                        />
                        )
                    })}
            </div>
            <hr />
        </div>
    )
}

export default SidenavItems;

// [
//     {
//         group : 'first group',
//         items : [
//             {
//                 itemName : 'key 1',
//                 link : 'https://www.google.com'
//             }
//         ]
//     }
// ]