function Photocard(props){
    return(
        <div className="col-span-1 md:pl-1 md:pr-1 space-y-4 mb-6">
            <div className="w-full h-auto aspect-w-16 aspect-h-9">
                <img src={props.thumbnail} className="" alt="" />
            </div>
            <div className="grid grid-cols-5 w-full h-auto items-center justify-between">
                <div className="col-span-1 flex items-start justify-center h-full w-full">
                    <img src="https://wallpapercave.com/wp/wp6295347.jpg" className="rounded-full text-center h-10 w-10" />
                </div>
                <div className="col-span-4">
                    <div className="grid grid-cols-1 items-start space-y-2">
                        <div className="col-span-1 font-bold line-clamp-2 leading-tight">
                            This is the title of the post here. I hope that the image get tings done.
                        </div>
                        <div className="col-span-1 text-xs text-gray-400">
                            1 Feb 2022
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photocard;