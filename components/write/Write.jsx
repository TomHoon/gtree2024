window.Write = function ({ setPath }) {
  const fileRef = React.useRef('');

  const addFile = () => {
    console.log('...', fileRef.current.click());
  }

  const uploadFile = (e) => {
    console.log('e>>>> ', e);
  }

  return (
    <main>
      <div className="auto-1080 main-wrapper">
        <div className="page-title">글쓰기</div>

        <div className="write-container">
          
          <div className="title-area">
            <select>
              <option value="공지사항">공지사항</option>
              <option value="구인정보">구인정보</option>
              <option value="언론보도">언론보도</option>
              <option value="갤러리">갤러리</option>
              <option value="자유게시판">자유게시판</option>
            </select>
            <input type="text" placeholder="제목을 입력하세요"/>
          </div>

          <div className="tools-area">
            <i className='bxr  bx-images file-image'></i> 
            <h5 onClick={addFile}>파일추가</h5>
            <input type="file" ref={ fileRef } className="file-input" hidden onChange={(e) => uploadFile(e)}/>
          </div>

          <div className="editor" contentEditable>
            <span className="placeholder">게시글을 여기에 작성해주세요</span>
          </div>

          <div className="button-group">
            <button className="write-button">등록</button>
          </div>
        </div>
      </div>
    </main>
  )
}