import '../../style/index.scss';
import IconComponent from '../icon-component/icon-component';

const ContainerDivLogo = ({ Icon, className, classNameIcon }) => {

    return (

        <div className={className ? className : "ContainerDivLogo"}>
            <span className={classNameIcon ? "Container-Icon-Logo" : classNameIcon}><IconComponent Icon={Icon} /></span>
        </div>
    );
}


export default ContainerDivLogo;