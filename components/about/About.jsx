const { useRef, useEffect, useState } = React;

const 연혁리스트 = [
  { date: '2020년 9월 1일', content: '아름드리 네이버카페 개설' },
  { date: '2020년 9월 1일 ~ 현재', content: '구직상담, 취업알선, 적응지원 등 직업재활사업 시행' },
  { date: '2022년 1월 12일', content: '법인 설립을 위한 1차 임원회의' },
  { date: '2022년 3월 27일', content: '청각장애인 택시운전사 자조모임' },
  { date: '2023년 10월 10일', content: '법인 설립을 위한 2차 임원회의 설립총회 일정 논의' },
  {
    date: '2023년 10월 27일',
    content: '사무실 임대(서울시 도봉구 쌍문동 81-22 삼일씨티빌 B동 102호)',
  },
  { date: '2023년 10월 28일', content: '사단법인 아름드리 설립총회' },
  { date: '2024년 4월 2일', content: '고용노동부 법인 설립 허가' },
  { date: '2024년 4월 29일', content: '무료직업소개사업 설치' },
  { date: '2020년 9월 1일', content: '아름드리 네이버카페 개설' },
  { date: '2020년 9월 1일', content: '아름드리 네이버카페 개설' },
  { date: '2020년 9월 1일', content: '아름드리 네이버카페 개설' },
  { date: '2020년 9월 1일', content: '아름드리 네이버카페 개설' },
  { date: '2020년 9월 1일', content: '아름드리 네이버카페 개설' },
  { date: '2020년 9월 1일', content: '아름드리 네이버카페 개설' },
  { date: '2020년 9월 1일', content: '아름드리 네이버카페 개설' },
  { date: '2020년 9월 1일', content: '아름드리 네이버카페 개설' },
];

window.About = function () {
  const targetNodes = useRef([]);
  // const tabList = useRef(['인사말', '설립취지 및 연혁', '조직도', 'CI안내', '오시는 길']);
  const tabList = useRef(['인사말', '설립취지 및 연혁', '조직도', '오시는 길']);
  const [activeTab, setActiveTab] = useState('greeting');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    targetNodes.current.forEach((el) => {
      el && observer.observe(el);
    });
    return () => observer.disconnect();
  }, [targetNodes]);

  const goTab = (탭이름) => {
    setActiveTab(탭이름);

    for (let cur of targetNodes.current) {
      if (cur.id == 탭이름) {
        setTimeout(() => {
          cur.scrollIntoView();
        }, 0);
        break;
      }
    }
  };

  return (
    <main>
      <div className="auto-1080 main-wrapper">
        <div className="page-title">기관소개</div>

        <nav className="scroll-nav">
          <ul>
            {tabList.current.map((탭이름) => (
              <li key={탭이름} onClick={() => goTab(탭이름)}>
                <a className={activeTab == 탭이름 ? 'active' : ''} href="#인사말">
                  {탭이름}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="about-section" id="인사말" ref={(el) => (targetNodes.current[0] = el)}>
          <div className="about-item-greeting">
            <div className="greeting-img">
              <img src="../../imgs/about-page/greeting-photo.png" alt="협회장 프로필" />
            </div>
            <div className="greeting-text">
              <p className="highlight">
                행복한사회복지관! 행복한서울시민!
                <br />
                서울시민의 복지와 행복을 위해 사회복지관이 곁에 있습니다.
              </p>
              <p>
                최근 서울시사회복지관은 복지 사각지대 해소, 초고령사회 대비, 고립가구,1인가구 발굴과
                지원, 지역사회 정신건강서비스 확대, 사례관리 전문성의 강화 등 복지환경 변화에 따라
                사회복지관의 역할과 기능에 대해 혁신과 변화를 요구받고 있습니다. 이에 사회복지관은
                코로나19 이후 지역밀착형 사업을 시행하며 공공과의 협력을 강화하고, 사회적 고립가구의
                발굴과 지원을 활발히 전개하는 등 외부환경의 변화에 능동적으로 대응해 왔습니다.
                앞으로도 서울시사회복지관협회는 서울시 등 유관기관 및 단체와의 협력을 더욱 강화하고,
                회원기관들과의 긴밀한 소통과 통합의 리더십을 발휘해 서울시 사회복지관의 발전을
                선도해 나가야 합니다.
              </p>
              <p>
                100년의 역사를 가진 서울시사회복지관의 역량과 자원을 힘있게 결집해 사회복지관이
                서울시와 서울시민들에게 꼭 필요한 기관으로 인정받고, 임직원들이 자긍심을 갖고 일할
                수 있는 복지 일터를 만드는 데 앞장서겠습니다. 오늘도 서울시민들의 복지증진을 위해
                사회복지 최일선에서 고생하시는 99개 사회복지관 관장님들과 직원 여러분들의 건강과
                행복을 기원합니다. 감사합니다.
              </p>
              <p className="signature">
                <span className="title">아름드리 협회장</span>
                <span className="name">김철수</span>
              </p>
            </div>
          </div>
        </section>

        <section
          className="about-section"
          id="설립취지 및 연혁"
          ref={(el) => (targetNodes.current[1] = el)}
        >
          <div className="about-item-vision">
            <h2>설립취지 및 연혁</h2>

            <div className="about-vision-area">
              <img src="../../imgs/about-page/설립취지.jpeg" alt="" />
              <p>
                한국사회가 눈부신 경제성장을 이루면서 각종 복지정책 및 고용정책들이 활성화 되고
                있으나 장애인 및 취약계층은 장애 및 사회적 편견 안에서 여전히 소통의 어려움과 다양한
                <br />
                차별요소로 인해 소외를 느끼며 상실감에 휩싸여 살아가고 있다. 이에 장애인 및 취업
                취약계층에게 재취업 및 창업, 생애설계지원 등의 종합 일자리 목적으로 구인 구직서비스,
                <br />
                재취업교육, 취업박람회 등을 제공하고, 취업지원서비스를 제공하는 공공기관과
                민간기관의 고용서비스 간의 상호 연계 및 보완을 통해 장애인 및 취약계층의 취업촉진 및
                <br />
                자립지원 도모한다. 또한 장애인 및 취약계층을 지원하는 활동보조인, 근로지원인,
                직무지도원, 사회복지사, 수어통역사와 이용자와의 갈등요소를 파악하여 서로의 입장을
                <br />
                이해하고 관계 개선을 통해 공감하며 화합의 장을 마련하여 사회통합을 이룬다.
                <br />
              </p>
            </div>

            <hr />

            <ul>
              {연혁리스트.map((item, idx) => {
                return (
                  <li key={idx}>
                    <strong>{item.date}</strong>- {item.content}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="about-section" id="조직도" ref={(el) => (targetNodes.current[2] = el)}>
          <div className="about-item-org">
            <h2>조직도</h2>
            <div className="about-org-img">
              <img src="../../imgs/about-page/조직도.png" alt="" />
            </div>
          </div>
        </section>

        {/* <section className="about-section" id="CI안내" ref={(el) => (targetNodes.current[3] = el)}>
          <div className="about-item-ci">
            <h2>CI 안내</h2>
            <p>아름드리의 CI</p>
          </div>
        </section> */}

        <section
          className="about-section"
          id="오시는 길"
          ref={(el) => (targetNodes.current[4] = el)}
        >
          <div className="about-item-map">
            <h2>오시는 길</h2>
          </div>
        </section>
      </div>
    </main>
  );
};
