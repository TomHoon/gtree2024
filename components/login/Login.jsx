window.Login = function Login() {
  return (
    <main>
      <div className="auto-1080 main-wrapper">
        <div className="login-container">
          <div className="login-form">
            <div className="logo-area">
              <img src="../../imgs/logo/mainLogo.png" alt="" />
            </div>

            <div className="input-area">
              <input type="text" className="userid" placeholder="아이디" />
              <input type="password" className="userpw" placeholder="비밀번호" />
            </div>

            <div className="button-area">
              <button>로그인</button>
            </div>

            <div className="social-area">
              <img src="../../imgs/login/카카오로그인.png" className="social-btn-kakao" alt="" />
              <img src="../../imgs/login/구글로그인.png" className="social-btn-google" alt="" />
            </div>

            <div className="function-area">
              <span className="join">회원가입</span>
              <span className="search-account">아이디 찾기 / 비밀번호 바꾸기</span>
              <span className="request">문의하기</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
