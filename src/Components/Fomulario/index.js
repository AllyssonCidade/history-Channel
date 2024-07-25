import styles from './Formulario.module.css';
import React, { useContext, useRef, useState } from 'react';
import FormularioContext from '../../Contexts/FormularioContext';
import TextEditor from '../Editor'

export default function Formulario({ children, onClick }) {
    const { dadosDoFormulario, setDadosDoFormulario } = useContext(FormularioContext);
    const [editorContent, setEditorContent] = useState('');

    const handleContentChange = (content) => {
        setEditorContent(content);
        setDadosDoFormulario({...dadosDoFormulario, conteudo: content });
      };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDadosDoFormulario({...dadosDoFormulario, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onClick(dadosDoFormulario);
    };
    
    return (
        <div className={styles.formulario__container}>
            <h2 className={styles.formulario__titulo}>{children}</h2>
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <label>Título</label>
                <input 
                    className={styles.formulario__input} 
                    type="text" 
                    placeholder="Digite o Título" 
                    name="titulo"
                    value={dadosDoFormulario.titulo || ""}
                    onChange={handleInputChange}
                />

                <label>Conteúdo</label>
                <TextEditor
                value={dadosDoFormulario.conteudo || ""}
                onContentChange={handleContentChange}
                 />
        
                <label>Capa</label>
                <input 
                    className={styles.formulario__input} 
                    type="text" 
                    placeholder="Digite a URL da imagem" 
                    name='capa'
                    value={dadosDoFormulario.capa || ''}
                    onChange={handleInputChange}
                />

                <button className={styles.botao__formulario} type="submit">{children}</button>
            </form>
        </div>
    );
}
