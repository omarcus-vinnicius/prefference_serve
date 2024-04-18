import '../../style/index.scss'

const IconLinkSite = ({ Icon, Text, className, Repet }) => {

    return (
        <span className={className ? className : "ContainerIconLinkSite"}>
            <span className="iconLogo">{Icon}</span>
            <p className='IconLinkSiteTexrt'>{Text}</p>
        </span>
    );

}


export default IconLinkSite;