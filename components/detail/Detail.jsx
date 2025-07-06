window.Detail = function () {
  const { useEffect, useRef, useState } = React;

  const detailRef = useRef(null);
  const [detailInfo, setDetailInfo] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`${window.$api_url}/api/v1/board/7`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { data } = await res.json();

      setDetailInfo({...data});

      console.log('data.content > ', data.content);
      detailRef.current.innerHTML = data.content || '통신에러';
    };

    fetchApi();
    
    
  }, []);

  return (
    <main>
      <div className="auto-1080 main-wrapper">
        <div className="page-title">알림마당</div>
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
                    <span className="nickname"></span>
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
            <div ref={detailRef}></div>
          </div>
        </div>
      </div>
    </main>
  );
};
