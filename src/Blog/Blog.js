import React from 'react';
import './Blog.css'
const Blog = ({ post }) => {

    const posts = post.length ?
        (
            post.map(p => {
                return (
                    < div className="col s12 m6 l6" >
                        <div className="card">
                            <div className="card-image">
                                <img className="responsive-img imagens" src={p.image} alt="imagem noticia"></img>
                            </div>
                            <div className="card-content">
                                <span className="card-title blue-text">{p.title}</span>
                                <h6 className="black-text">Criado em {p.data} por Gabriel Romero</h6>
                                <p><br />{p.content}</p>
                            </div>
                            <div className="card-action">
                                <a href={ p.url }>VEJA MAIS</a>
                            </div>
                        </div>
                    </div >
                )
            })
        ) : (
            <p className="center">Sem postagens ainda</p>
        );

    return (
        <div className="row grey lighten-1" id="blog">
            {posts}
        </div>
    );
};

export default Blog;