import React from 'react';

const moreInfor = ({  }) => {
    const infos = 
        (<div>
            <div className="col s12 m6 l6">
                <h2 className="black-text">Biografia</h2>
                <p>Nascido em 25/11/1997 na cidade de Marília interior de São Paulo e teve uma infância tranquila em sua terra natal.
                    Com 12 anos teve o primeiro computador em casa e assim nasceu a paixão pela computação. Em pouco tempo sabia
                    que queria trabalhar nessa área.<br />
                    Frequentou a escola SESI em Marília completando o ensino fundamental na escola. Fez o ensino médio na ETEC Antonio Devisate
                    também em Marília. Para graduação, escolheu a UTFPR-CP para cursar Engenharia de Software, desde então vem participando
                    em projetos de desenvolvimento em matérias, em projetos de iniciação científica e projetos sociais (ELLP).
                </p>
            </div>
            <div className="col s12 m6 l6">
                <h2 className="black-text">Contato com a profissão</h2>
                <p>
                    Começou o contato com a profissão em 2018 sendo estagiário na Empresa Yankton em Cornélio
                    Procópio. Nesse estágio, está encarando o desenvolvimento WEB utilizando diversas tecnologias que
                    foram até o momento: Javascript, CSS, HTML, Angular 2, .NET, MongoDB, SQLServer e pronto para mais
                    desafios.
                </p>
            </div>
        </div>
        )

    return (
        <div className="row grey lighten-1" id="history">
            <h2 className="blue-text lighten-1 center">Mais Informações</h2>
            {infos}
        </div>
    );
};

export default moreInfor;