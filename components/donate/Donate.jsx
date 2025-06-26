window.Donate = function () {
  const { useState } = React;

  const ITEMS_PER_PAGE = 10;

  const tableData = {
    notion: [
      ['공지', '사단법인 아름드리 후원나눔 안내', '2024.10.04'],
      ['공지', '취업지원서비스 실시 및 회원가입 기간 연장 안내', '2024.10.04'],
      ['공지', '사단법인 아름드리 설립허가 및 회원가입 안내', '2024.10.04'],
      ['공지', '(가칭) 사단법인 아름드리 설립총회 자료집', '2024.10.04'],
      ['공지', '(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내', '2024.10.04'],
      ['공지', '(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내', '2024.10.04'],
      ['공지', '(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내', '2024.10.04'],
      ['공지', '(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내', '2024.10.04'],
      ['공지', '(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내', '2024.10.04'],
      ['공지', '(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내', '2024.10.04'],
      ['공지', '(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내', '2024.10.04'],
      ['공지', '(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내', '2024.10.04'],
      ['공지', '(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내', '2024.10.04'],
      ['공지', '(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내', '2024.10.04'],
    ],
    jobs: [
      ['채용', '복지관 행정직 채용', '2024.10.04'],
      ['채용', '사회복지사 모집', '2024.10.04'],
    ],
    press: [
      ['보도', '언론에 소개된 아름드리', '2024.10.04'],
      ['보도', '지역 뉴스 보도자료', '2024.10.04'],
    ],
    gallery: [['갤러리', '행복소통위원회 활동', '2024.10.04']],
    free: [],
  };

  const [currentTab, setCurrentTab] = useState('notion');
  const [currentPage, setCurrentPage] = useState(1);

  const currentList = tableData[currentTab] || [];
  const totalPages = Math.ceil(currentList.length / ITEMS_PER_PAGE);
  const pagedData = currentList.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    setCurrentPage(1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <main>
      <div className="auto-1080 main-wrapper">
        <div className="page-title">연간기부금 모금액 및 활용실적</div>

        {/* ✅ 탭 */}
        <div className="notion-container">
          <div className="tab-menu">
            <ul>
              <li
                key={tab}
                data-type={tab}
                className={tab === currentTab ? 'active' : ''}
                onClick={() => handleTabClick(tab)}
              >
                연간 기부금 모금액 및 활용실적
              </li>
            </ul>
          </div>

          {/* ✅ 테이블 */}
          <div className="notion-table">
            <table>
              <tbody>
                {pagedData.length === 0 ? (
                  <React.Fragment>
                    <tr>
                      <td colSpan="3" style={{ textAlign: 'center', color: '#999' }}>
                        글이 없습니다.
                      </td>
                    </tr>
                    {[...Array(9)].map((_, i) => (
                      <tr key={i}>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ) : (
                  [...Array(ITEMS_PER_PAGE)].map((_, i) => {
                    const row = pagedData[i];
                    return row ? (
                      <tr key={i}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td style={{ textAlign: 'right' }}>{row[2]}</td>
                      </tr>
                    ) : (
                      <tr key={i}>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ✅ 페이지네이션 */}
        <div className="pagination">
          <button disabled={currentPage === 1} onClick={() => handlePageClick(1)}>
            &laquo;
          </button>
          <button disabled={currentPage === 1} onClick={() => handlePageClick(currentPage - 1)}>
            &lsaquo;
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`page-number ${page === currentPage ? 'active' : ''}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageClick(currentPage + 1)}
          >
            &rsaquo;
          </button>
          <button disabled={currentPage === totalPages} onClick={() => handlePageClick(totalPages)}>
            &raquo;
          </button>
        </div>
      </div>
    </main>
  );
};
