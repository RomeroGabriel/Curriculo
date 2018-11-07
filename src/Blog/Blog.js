import React from 'react';

const Blog = ({ post }) => {

    const posts = post.length ?
        (
            post.map(p => {
                return (
                    < div className="col s12 m12 l12" >
                        <div className="card horizontal">
                            <div className="card-image">
                                <img className="responsive-img" src={p.image} alt="imagem noticia"></img>
                            </div>
                            <div className="card-content">
                                <span className="card-title blue-text">{p.title}</span>
                                <p>{p.content}</p>
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
            <h2 className="blue-text lighten-1">Blog</h2>
            {posts}
        </div>
    );
};

export default Blog;