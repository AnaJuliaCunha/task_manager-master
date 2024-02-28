import styles from './Home.module.css';
//Importar imagem

import LinkButton from '../../Components/LinkButton/LinkButton';

function Home(){
    return(
        <section>
            <h1>
                Bem-vindo ao <span>WorkOut</span>
            </h1>
            <p>Comece a gerenciar os seus projetos de forma eficiente</p>
            <LinkButton to="/newproject" text="Começar"/>
            //imagem
        </section>
    );
};

export default Home;