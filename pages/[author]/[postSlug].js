import { useRouter } from "next/router";
import Header from "../../components/Header";
import Post from "../../components/post/Post";

function PostPage(){

    const router = useRouter();
    const {author , postSlug} = router.query;
    const demoContentData = {
        "time": 1644058414879,
        "blocks": [
        {
        "id": "jNWcX7kIIH",
        "type": "header",
        "data": {
        "text": "Editor.js",
        "level": 2
        }
        },
        {
        "id": "ApKWwn4fb9",
        "type": "paragraph",
        "data": {
        "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
        }
        },
        {
        "id": "PxTTgvK-Wp",
        "type": "header",
        "data": {
        "text": "Key features",
        "level": 3
        }
        },
        {
        "id": "eh_31q06Q5",
        "type": "list",
        "data": {
        "style": "unordered",
        "items": [
        "It is a block-styled editor",
        "It returns clean data output in JSON",
        "Designed to be extendable and pluggable with a simple API"
        ]
        }
        },
        {
        "id": "_DXQ5xSxhz",
        "type": "header",
        "data": {
        "text": "What does it mean «block-styled editor»",
        "level": 3
        }
        },
        {
        "id": "TLw-tjIqrw",
        "type": "paragraph",
        "data": {
        "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
        }
        },
        {
        "id": "woUflRntE7",
        "type": "paragraph",
        "data": {
        "text": "There are dozens of <a href=\"https://github.com/editor-js\">ready-to-use Blocks</a> and the <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."
        }
        },
        {
        "id": "AY8GV99AY3",
        "type": "header",
        "data": {
        "text": "What does it mean clean data output",
        "level": 3
        }
        },
        {
        "id": "nQ-djbl73z",
        "type": "paragraph",
        "data": {
        "text": "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
        }
        },
        {
        "id": "qVz6JvjuD3",
        "type": "paragraph",
        "data": {
        "text": "Given data can be used as you want: render with HTML for <code class=\"inline-code\">Web clients</code>, render natively for <code class=\"inline-code\">mobile apps</code>, create markup for <code class=\"inline-code\">Facebook Instant Articles</code> or <code class=\"inline-code\">Google AMP</code>, generate an <code class=\"inline-code\">audio version</code> and so on."
        }
        },
        {
        "id": "iPuOdl5xz5",
        "type": "paragraph",
        "data": {
        "text": "Clean data is useful to sanitize, validate and process on the backend."
        }
        },
        {
        "id": "-Vyt6ipOg-",
        "type": "delimiter",
        "data": {}
        },
        {
        "id": "YCsLvXS6j0",
        "type": "paragraph",
        "data": {
        "text": "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
        }
        },
        {
        "id": "WmSK-sn9cW",
        "type": "image",
        "data": {
        "file": {
        "url": "https://codex.so/public/app/img/external/codex2x.png"
        },
        "caption": "",
        "withBorder": false,
        "stretched": false,
        "withBackground": false
        }
        }
        ],
        "version": "2.22.2"
        }


    const demoAuthorData = {
        name: 'satyam',
        profile_handle: '@satyam',
        img: 'https://wallpapercave.com/wp/wp6295347.jpg'
    }
    return(
        <>
            <Header />
            <Post title="This is the demo title of the post" 
                   content={JSON.stringify(demoContentData)}
                   author={JSON.stringify(demoAuthorData)}
                   publishedDate="9 Feb"
            />
        </>
    )
}

export default PostPage;