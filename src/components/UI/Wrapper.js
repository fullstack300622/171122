function Wrapper(props) {
    return (
        <div style={{ background: 'red' }}>{props.children}</div>
    )
}

export default Wrapper;