

const Button = (props) => {
    return (
        <>
            <button
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: props.color }}
                onClick={props.onClick}
            >
                {props.color}
            </button>
        </>
    )
}

export default Button