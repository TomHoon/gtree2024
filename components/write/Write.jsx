window.Write = function ({ setPath }) {
  const { useRef, useEffect, useState } = React;

  const fileRef = useRef('');
  const editorRef = useRef('');
  const attachFileRef = useRef('');
  const [param, setParam] = useState({ category: '공지사항' });
  const [attachedList, setAttachedList] = useState([]);

  const uploadAttachFile = (e) => {
    console.log('files >>> ', e.target.files[0]);
    setAttachedList([...attachedList, e.target.files[0]]);
  };

  const clickAttachFileInput = (e) => {
    attachFileRef.current.click();
  };

  const addFile = () => {
    console.log('...', fileRef.current.click());
  };

  const uploadFile = async (e) => {
    console.log('e >>> ', e.target.files[0]);

    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(`${window.$api_url}/api/v1/file/upload`, {
      method: 'POST',
      body: formData,
    });

    const { imageUrl } = await res.json();

    const imgTag = document.createElement('img');
    imgTag.src = `${window.$api_url}/${imageUrl}`;
    imgTag.classList.add('write-image');

    editorRef.current.appendChild(imgTag);
  };

  const goWrite = async () => {
    const writer = localStorage.getItem('loginId');

    const formData = new FormData();
    const jsonStr = JSON.stringify({ ...param, content: editorRef.current.innerHTML, writer });

    formData.append('board', new Blob([jsonStr], { type: 'application/json' }));

    console.log('formData >> ', formData);

    attachedList.forEach((item) => {
      formData.append('attachList', item);
    });

    const res = await fetch(`${window.$api_url}/api/v1/board/write`, {
      method: 'POST',
      body: formData,
    });

    const { status } = await res.json();

    if (status === 'success') {
      setPath('write');
    } else {
      alert('서버 에러');
    }
  };

  return (
    <main>
      <div className="auto-1080 main-wrapper">
        <div className="page-title">글쓰기</div>

        <div className="write-container">
          {/* 제목 group */}
          <div className="write-title-wrapper">
            <div className="write-title-item">
              <label htmlFor="">제목</label>
              <input
                type="text"
                className="write-title-input"
                onChange={(e) => setParam({ ...param, title: e.target.value })}
              />
            </div>
            <div className="write-writer-item">
              <label htmlFor="">작성자</label>
              <input type="text" className="write-writer-input" disabled value="관리자" />
            </div>
            <div className="write-isopen-item">
              <label htmlFor="">카테고리</label>
              <select
                name=""
                id=""
                onChange={(e) => setParam({ ...param, category: e.target.value })}
              >
                <option value="공지사항">공지사항</option>
                <option value="구인정보">구인정보</option>
                <option value="언론보도">언론보도</option>
                <option value="갤러리">갤러리</option>
                <option value="자유게시판">자유게시판</option>
              </select>
            </div>
          </div>

          {/* 내용작성group */}
          <div className="write-content-wrapper">
            <label htmlFor="">내용작성</label>
            <div className="editor" ref={editorRef} contentEditable></div>
          </div>

          {/* 첨부파일group */}
          <div className="write-file-wrapper">
            <label htmlFor="">첨부파일</label>

            <ul className="write-file-list">
              <li className="active">
                <span>선택된 파일명</span>
                <i class="bxr  bx-x-square image-cancel-btn"></i>
              </li>
              <li>
                <span>선택된 파일명</span>
                <i class="bxr  bx-x-square image-cancel-btn"></i>
              </li>
            </ul>

            <div className="write-file-addbtn-group">
              <input
                type="file"
                ref={fileRef}
                className="file-input"
                hidden
                onChange={(e) => uploadFile(e)}
              />
              <input
                type="file"
                ref={attachFileRef}
                className="file-input"
                hidden
                onChange={(e) => uploadAttachFile(e)}
              />
              {/* <i class='bxr  bx-image-plus image-add-btn' onClick={addFile}></i>  */}
              <button className="image-add-btn2" onClick={addFile}>
                사진 추가
              </button>
              <button className="file-add-btn" onClick={clickAttachFileInput}>
                파일 추가
              </button>
              {/* <button className="file-del-btn">파일 삭제</button> */}
            </div>
          </div>

          {/* 등록취소group */}
          <div className="write-enroll-warpper">
            <button className="cancel-btn" onClick={() => setPath('/')}>
              취소
            </button>
            <button className="enroll-btn" onClick={goWrite}>
              등록
            </button>
          </div>
        </div>
      </div>
      {/* <div className="auto-1080 main-wrapper">
        <div className="page-title">글쓰기</div>

        <div className="write-container">
          <div className="title-area">
            <select
              onChange={(e) => setParam({ ...param, category: e.target.value })}
              // onChange={(e) => changeA(e)}
            >
              <option value="공지사항">공지사항</option>
              <option value="구인정보">구인정보</option>
              <option value="언론보도">언론보도</option>
              <option value="갤러리">갤러리</option>
              <option value="자유게시판">자유게시판</option>
            </select>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              onChange={(e) => setParam({ ...param, title: e.target.value })}
              // onChange={(e) => changeA(e)}
            />
          </div>

          <div className="tools-area">
            <i className="bxr  bx-images file-image"></i>
            <h5 onClick={addFile}>파일추가</h5>
            <input
              type="file"
              ref={fileRef}
              className="file-input"
              hidden
              onChange={(e) => uploadFile(e)}
            />
          </div>

          <div className="editor" ref={editorRef} contentEditable>
            <span className="placeholder">게시글을 여기에 작성해주세요</span>
          </div>

          <div className="button-group">
            <button className="write-button" onClick={goWrite}>
              등록
            </button>
          </div>
        </div>
      </div> */}
    </main>
  );
};
