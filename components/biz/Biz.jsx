const 비즈리스트 = [
  {
    title: '정책제안 사업',
    content: '청각장애인 택시기사 카카오T블루 앱 개선 제안',
    image: '../../imgs/biz/정책사업제안.jpeg',
  },
  {
    title: '장애인 직업지원서비스',
    content: '구직상담, 구인상담(사업체), 취업알선, 취업적응지원',
    image: '../../imgs/biz/직업지원서비스.jpeg',
  },
  {
    title: '자조모임지원사업',
    content: '의사소통서비스, 자조모임지원사업, 지역사회자원개발사업',
    image: '../../imgs/biz/자조모임지원사업.jpeg',
  },
];

window.Biz = function Biz() {
  return (
    <main>
      <div className="auto-1080 main-wrapper">
        <div className="page-title">주요사업</div>

        <div className="biz-container">
          {/* ✅ item */}
          {비즈리스트.map((item, idx) => {
            return (
              <div className="biz-item" key={idx}>
                <h4 className="biz-subtitle">{item.title}</h4>
                <p>{item.content}</p>
                <img src={item.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
