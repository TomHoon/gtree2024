window.Detail = function () {
  const { useEffect, useRef, useState } = React;

  const detailRef = useRef(null);
  const [detailInfo, setDetailInfo] = useState({});
  const [isExtend, setIsExtend] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`${window.$api_url}/api/v1/board/${window.detailNo}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { data } = await res.json();

      setDetailInfo({ ...data });

      detailRef.current.innerHTML = data.content || '통신에러';
    };

    fetchApi();

    const id = localStorage.getItem('loginId');
    setUserInfo({ ...userInfo, id });
  }, []);

  return (
    <main>
      <div className="auto-1080 main-wrapper">
        <div className="page-title">{/* 알림마당 */}</div>
        <div className="detail-container">
          <div className="detail-title">
            <h2>{detailInfo.title}</h2>
          </div>

          <div className="profile-area">
            <ul className="profile-area-wrapper">
              <li className="profile-image">
                <img src="../../imgs/logo/commonLogo.png" alt="" />
              </li>

              <li>
                <ul className="profile-subinfo">
                  <li>
                    <span className="nickname">{userInfo.id}</span>
                    <span className="degree">관리자</span>
                  </li>
                  <li>
                    <span className="regi-date">{detailInfo.createdAt}</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="detail-content-wrapper">
            {detailInfo.files && (
              <div className="detail-attach-area">
                <span className="detail-attach-span" onClick={() => setIsExtend(!isExtend)}>
                  <i class="bxr  bx-folder-check attach-icon" />
                  첨부파일
                </span>
                {isExtend && (
                  <div className="detail-attach-extend">
                    <ul>
                      {detailInfo.files.map((item) => (
                        <li>
                          <span>{item.fileName}</span>
                          <a href={`${window.$api_url}/${item.filePath}`} download={item.fileName}>
                            다운로드
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            <div ref={detailRef}></div>
          </div>
        </div>
      </div>
    </main>
  );
};
