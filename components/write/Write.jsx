window.Write = function ({ setPath }) {
  const fileRef = React.useRef("");
  const editorRef = React.useRef("");
  const [param, setParam] = React.useState({ category: "자유게시판" });

  const addFile = () => {
    console.log("...", fileRef.current.click());
  };

  const uploadFile = async (e) => {
    console.log("e >>> ", e.target.files[0]);

    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${window.$api_url}/api/v1/file/upload`, {
      method: "POST",
      body: formData,
    });

    const { imageUrl } = await res.json();

    const imgTag = document.createElement("img");
    imgTag.src = `${window.$api_url}/${imageUrl}`;
    imgTag.classList.add("write-image");

    editorRef.current.appendChild(imgTag);
  };

  const goWrite = async () => {
    console.log("param >>> ", param);

    const res = await fetch(`${window.$api_url}/api/v1/board/write`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...param, content: editorRef.current.innerHTML }),
    });

    const { status } = await res.json();

    if (status === "success") {
      setPath("/");
    } else {
      alert("서버 에러");
    }

    console.log(editorRef.current.innerHTML);
    console.log(param);
  };

  const changeA = (e) => {
    setParam({ ...param, category: e.target.value });
  };

  return (
    <main>
      <div className="auto-1080 main-wrapper">
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
      </div>
    </main>
  );
};
