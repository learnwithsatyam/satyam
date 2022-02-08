import PostTitle from "./postTitle";
import PostAuthor from "./PostAuthor";
import PostContent from "./PostContent";
function Post({title , content , author , publishedDate}){
    return (
        <div className="grid grid-cols-1 mt-20 md:grid-cols-5 max-w-6xl lg:mx-auto my-6">
            <div className=" hidden w-full md:block col-span-1">
                
            </div>
            <div className="w-full mx-auto col-span-1 space-y-4 md:col-span-3">
                <PostTitle title={title} />
                <PostAuthor author={author} publishedDate= {publishedDate} />
                <PostContent content={content} />
            </div>
            <div className="text-right w-full hidden md:block col-span-1">
                
            </div>
        </div>
    )
}

export default Post;

/**
 * {
 *      title: 'this is title',
 *      content: 'this is conent',
 *      author : {
 *                  name : 'authorname',
 *                  profile: 'profile_handle',
 *                  img: 'image of author'
 *              },
 *      publishedDate:'this is publish date',   
 * }
 * 
 */

