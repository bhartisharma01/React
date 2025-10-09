
const Button = ({ children,
    type = "button",
    className = '',
    bgColor = "bg-blue-600",
    hbgColor="hover:bg-blue-500",
    textColor = "text-white",
    ...props
}) => {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} ${hbgColor}`} {...props}>{children}</button>
    )
}

export default Button

