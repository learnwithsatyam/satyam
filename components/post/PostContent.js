import Header from "./content/Header";
import Code from "./content/Code"
import Delimiter from './content/Delimiter'

function PostContent(props){
    const content = JSON.parse(props.content)
    return(
        <div>
            {
                content.blocks.map((block) => {
                    if(block.type === 'header'){
                        return (
                            <Header key={block.id} block = {JSON.stringify(block)} />
                        )
                    }
                    else if( block.type === 'code'){
                        return (
                            <Code key={block.id} block={JSON.stringify(block)} />
                        )
                    }
                    else if( block.type === 'delimiter'){
                        return(
                            <Delimiter key={block.id} block={JSON.stringify(block)} />
                        )
                    }

                    else if( block.type === 'embed'){
                        return(
                            <Embed key={block.id} block={JSON.stringify(block)} />
                        )
                    }
                    else if( block.type === 'rawTool'){ {/** for HTML block */}
                        return(
                            <HTML key={block.id} block={JSON.stringify(block)} />
                        )
                    }
                    else if( block.type === 'image'){
                        return(
                            <Image key={block.id} block={JSON.stringify(block)} />
                        )
                    }

                    else if( block.type === 'linkTool'){
                        return(
                            <Link key={block.id} block={JSON.stringify(block)} />
                        )
                    }
                    else if( block.type === 'list'){
                        return(
                            <List key={block.id} block={JSON.stringify(block)} />
                        )
                    }
                    else if( block.type === 'quote'){
                        return(
                            <Quote key={block.id} block={JSON.stringify(block)} />
                        )
                    }
                    else if( block.type === 'table'){
                        return(
                            <Table key={block.id} block={JSON.stringify(block)} />
                        )
                    }
                    else if( block.type === 'warning'){
                        return(
                            <Warning key={block.id} block={JSON.stringify(block)} />
                        )
                    }
                })
            }
        </div>
    )
}

export default PostContent;
