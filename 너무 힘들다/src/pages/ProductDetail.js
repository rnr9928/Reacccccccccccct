import {useState} from 'react';
import '../styles/App.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Parser from 'html-react-parser';

function App() {
  const [movieContent, setMovieContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  const getValue = e => {
    const { name, value } = e.target;
    setMovieContent({
      ...movieContent,
      [name]: value
    })
    console.log(movieContent);
  };

  return (
    <div className="App">
      <h1></h1>
      <div className='movie-container'>
        {viewContent.map(e =>
          <div> 
        <h2>{e.title}</h2>
        <div>
          {Parser(e.content)}
        </div>
      </div>
            )}
      </div>
      <div className='form-wrapper'>
      <input className="title-input"
	type='text'
    placeholder='제목'
    onChange={getValue}
    name='title'
/>
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setMovieContent({
              ...movieContent,
              content: data
            })
            console.log(movieContent);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button" onClick={() =>{
        setViewContent(viewContent.concat({...movieContent}));
      }}>입력</button>
    </div>
  );
}

export default App;

// 설치
// npm install --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic
//  npm i html-react-parser --save