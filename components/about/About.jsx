window.About = function () {
 return (
  <main>
   <div className="auto-1080 main-wrapper">

    <div className="page-title">기관소개</div>

    <nav className="scroll-nav">
     <ul>
      <li><a href="#greeting">인사말</a></li>
      <li><a href="#vision">설립취지 및 연혁</a></li>
      <li><a href="#org">조직도</a></li>
      <li><a href="#ci">CI 안내</a></li>
      <li><a href="#map">오시는 길</a></li>
     </ul>
    </nav>

    <section className="about-section" id="greeting">
     <div className="about-item-greeting">
      <div className="greeting-img">
       <img src="../../imgs/about-page/greeting-photo.png" alt="협회장 프로필" />
      </div>
      <div className="greeting-text">
       <p className="highlight">
        행복한사회복지관! 행복한서울시민!<br />
        서울시민의 복지와 행복을 위해 사회복지관이 곁에 있습니다.
       </p>
       <p>
        최근 서울시사회복지관은 복지 사각지대 해소, 초고령사회 대비, 고립가구,1인가구 발굴과
        지원, 지역사회 정신건강서비스 확대, 사례관리 전문성의 강화 등 복지환경 변화에 따라
        사회복지관의 역할과 기능에 대해 혁신과 변화를 요구받고 있습니다. 이에 사회복지관은
        코로나19 이후 지역밀착형 사업을 시행하며 공공과의 협력을 강화하고, 사회적 고립가구의
        발굴과 지원을 활발히 전개하는 등 외부환경의 변화에 능동적으로 대응해 왔습니다. 앞으로도 서울시사회복지관협회는 서울시 등 유관기관 및 단체와의 협력을 더욱 강화하고,
        회원기관들과의 긴밀한 소통과 통합의 리더십을 발휘해 서울시 사회복지관의 발전을 선도해 나가야 합니다.
       </p>
       <p>
        100년의 역사를 가진 서울시사회복지관의 역량과 자원을 힘있게 결집해 사회복지관이
        서울시와 서울시민들에게 꼭 필요한 기관으로 인정받고, 임직원들이 자긍심을 갖고 일할 수
        있는 복지 일터를 만드는 데 앞장서겠습니다. 오늘도 서울시민들의 복지증진을 위해 사회복지 최일선에서 고생하시는 99개 사회복지관 관장님들과 직원 여러분들의 건강과 행복을
        기원합니다. 감사합니다.
       </p>
       <p className="signature">
        <span className="title">아름드리 협회장</span>
        <span className="name">김철수</span>
       </p>
      </div>
     </div>
    </section>

    <section className="about-section" id="vision">
     <div className="about-item-vision">
      <h2>설립취지 및 연혁</h2>
      <ul>
       <li><strong>2022년</strong> – 아름드리 창립</li>
       <li><strong>2021년</strong> – 아름드리 창립</li>
      </ul>
     </div>
    </section>

    <section className="about-section" id="org">
     <div className="about-item-org">
      <h2>조직도</h2>
     </div>
    </section>

    <section className="about-section" id="ci">
     <div className="about-item-ci">
      <h2>CI 안내</h2>
      <p>아름드리의 CI</p>
     </div>
    </section>

    <section className="about-section" id="map">
     <div className="about-item-map">
      <h2>오시는 길</h2>
     </div>
    </section>

   </div>
  </main>
 )
}
