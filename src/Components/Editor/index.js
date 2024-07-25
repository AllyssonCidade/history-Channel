import { useContext, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import FormularioContext from '../../Contexts/FormularioContext';
import TurndownService from 'turndown';


export default function TextEditor({ onContentChange }) {
    const { dadosDoFormulario, setDadosDoFormulario } = useContext(FormularioContext);
    const editorRef = useRef(null);

    const handleEditorChange = (content) => {
      if (typeof onContentChange === 'function') {
        onContentChange(content);
      } else {
        console.error('onContentChange não é uma função');
      }
    };

  return (
    <>
      <Editor
        apiKey='pnrn1pr0zrh2v3r2c4uu12icjtpdg64o5af6dk6fodlkude6'
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue={dadosDoFormulario.conteudo || ""}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          newline_behavior: 'invert',
          forced_root_block: false,
          setup: (editor) => {
            editor.on('change', () => {
              handleEditorChange(editor.getContent());
            });

        },
      }}
      />
    </>
  );
}
