import ContainerDivLogo from "../../components/home/container-div-logo";
import IconLinkSite from "../../components/icon-component/icon-link-site-component";
import { FaEarthAmericas } from "react-icons/fa6";
import '../../style/index.scss'

const Home = () => {

    return (

        <header>
            <div id="Conatiner_headerHome">
                <span id="ContainerDivLogo_headerHome">
                    <ContainerDivLogo Icon={'/img/logo.svg'} />
                </span>
                <span id="ConatinerIconLinkSite_headerHome">
                    <IconLinkSite Icon={<FaEarthAmericas />} Text={'Destino'} />
                    <IconLinkSite Icon={<FaEarthAmericas />} Text={'Destino'} />
                    <IconLinkSite Icon={<FaEarthAmericas />} Text={'Destino'} />
                </span>
            </div>
            <div id="ContainerBanner_Slade_headerHome">
                <span id="ContainerBanner_headerHome"></span>
            </div>
        </header>


    );
}


export default Home;