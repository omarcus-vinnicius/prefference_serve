
const IconComponent = ({ Icon, className }) => {

    return (
        <span className={className ? className : "container_IconComponent"}>
            <img className="iconComponent" src={Icon} />
        </span>
    )

}


export default IconComponent;