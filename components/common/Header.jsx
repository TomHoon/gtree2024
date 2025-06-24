window.Header = function Header({ setPath }) {
  const 기관소개리스트 = [
    { pageName: 'about', title: '기관소개' },
    { pageName: 'biz', title: '주요사업' },
    { pageName: 'donate', title: '연간 기부금 모금액 및 활용실적' },
    { pageName: 'notion', title: '나눔마당' },
    { pageName: 'notion', title: '알림마당' },
  ];
  return (
    <header>
      <div className="auto">
        <ul className="header-container">
          <li className="logo" onClick={() => setPath('')}>
            <img src="../../imgs/logo/mainLogo.png" alt="" />
          </li>

          <li>
            <ul className="menu-list">
              {기관소개리스트.map((info) => (
                <li key={info.title} onClick={() => setPath(info.pageName)}>
                  {info.title}
                </li>
              ))}
            </ul>
          </li>

          <li className="mobile">
            <button className="menu-btn">
              <i className="bx bx-menu"></i>
            </button>
          </li>

          <li className="pc">
            <ul className="login-wrapper">
              <li>
                <button onClick={() => setPath('login')}>로그인</button>
              </li>
              <li>
                <button>
                  <i className="bx bx-search"></i>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};
