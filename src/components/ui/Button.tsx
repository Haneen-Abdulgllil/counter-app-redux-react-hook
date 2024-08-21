interface IProps {
    children: React.ReactNode;
    className?: string;
    width: "w-full" | "w-fit";
}

const Button = ({children,className, width = "w-fit" ,...rest } : IProps) => {

    return(
        <button className={` ${className} ${width} rounded-md text-white p-2` } {...rest} >
            {children}
        </button>
    )

}

export default Button