import { useRouter } from "next/router";

function PostAuthor(props){
    const author = JSON.parse(props.author)
    const router = useRouter()
    return(
        <div className="flex items-center py-6 justify-between border-b-0 border-gray-200">
            <div className="flex items-center justify-start space-x-2 flex-grow">
                <div className="w-fit">
                    <img className="w-6 h-6 rounded-full" src={author.img} />
                </div>
                <span className="w-fit text-sm text-orange-600" onClick={()=> router.push('/author/'+author.profile_handle)}>
                    {author.name} . 
                </span>
                <span className="text-xs text-gray-400">
                    {props.publishedDate}
                </span>
            </div>
            <div className="text-black space-x-3 text-base">
                <a>
                    <i className="bi bi-facebook"></i>
                </a>
                <a>
                    <i className="bi bi-twitter"></i>
                </a>
                <a>
                    <i className="bi bi-linkedin"></i>
                </a>
                <a>
                    <i className="bi bi-link-45deg"></i>
                </a>
                <a>
                    <i className="bi bi-bookmark-plus"></i>
                </a>
            </div>
        </div>
    )
}

export default PostAuthor;