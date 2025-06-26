window.Header = function Header({ path, setPath }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('isLoggedIn', isLoggedIn);
    setIsLoggedIn(isLoggedIn);
  }, [path]);

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setPath('/');
  };

  const login = () => {
    setPath('login');
  };

  const 기관소개리스트 = [
    { pageName: 'about', title: '기관소개' },
    { pageName: 'biz', title: '주요사업' },
    { pageName: 'donate', title: '연간 기부금 모금액 및 활용실적' },
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
                {isLoggedIn ? (
                  <button onClick={() => logout()}>로그아웃</button>
                ) : (
                  <button onClick={() => login()}>로그인</button>
                )}
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
