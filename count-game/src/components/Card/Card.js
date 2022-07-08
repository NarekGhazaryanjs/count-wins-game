

const Card = (props) => {
    return (
        <section onClick={props.onClick} className={props.className}>
            {props.children}
        </section>
    )
}

export default Card