import Text from "./text"

const Layout = (props) => {

    console.log(props)

    if(!props.children.props.page) { 
        return <h1>404</h1>
    }


    const switchHandle = (component) => {
        switch (component.component) {
            case 'text':
                return <Text fields={component} />
        }
    }

    return(
        <>
            <h1>Header</h1>
            <h1>{process.env.TEST === "true" ? "its true" : "its false"}</h1>
            
                {props.children.props.page.data.story.content.body.map((component, i) => {
                    return(
                        <div key={i}>
                            {switchHandle(component)}
                        </div>
                    )
                })}
            <h1>FEATURE BRANCH</h1>
            <h1>Footer</h1>
        </>
    )
}

export default Layout