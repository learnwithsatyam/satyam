function SidenavLinks({itemName, link}){
    return (
        <div className=" text-black font-medium text-sm hover:bg-orange-200 w-full cursor-pointer focus:bg-orange-300 transition duration-200 ease-in-out border border-transparent hover:border-orange-300">
            <div className="px-4 py-4">   
                <a href={link} >
                    {itemName}
                </a>
            </div> 
        </div>
    )
}

export default SidenavLinks;