import Text from "./text"

const Layout = (props) => {

    // console.log(props)

    if(!props.children.props.page) { 
        return <h1>404</h1>
    }


    const switchHandle = (component) => {
        switch (component.component) {
            case 'text':
                return <Text fields={component} />
        }
    }

    // console.log(props.children.props.page.data.story.content)

    return(
        <>
            <h1>Header</h1>
                {props.children.props.page.data.story.content.body.map(component => {
                    return(
                        <div>
                            {switchHandle(component)}
                        </div>
                    )
                })}
            <h1>Footer</h1>
        </>
    )
}

export default Layout