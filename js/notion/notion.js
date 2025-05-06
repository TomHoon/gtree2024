// ✅ 게시판 테이블 내용 (notion-table)
document.addEventListener("DOMContentLoaded", () => {
const tabs = document.querySelectorAll(".tab-menu li");
const tableBody = document.querySelector(".notion-table tbody");

const tableData = {
    notion: [
        ["공지", "사단법인 아름드리 후원나눔 안내", "2024.10.04"],
        ["공지", "취업지원서비스 실시 및 회원가입 기간 연장 안내", "2024.10.04"],
        ["공지", "사단법인 아름드리 설립허가 및 회원가입 안내", "2024.10.04"],
        ["공지", "(가칭) 사단법인 아름드리 설립총회 자료집", "2024.10.04"],
        ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
        ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
        ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
        ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
        ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
        ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
        ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
        ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
        ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
        ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
      ],
    jobs: [
    ["채용", "복지관 행정직 채용", "2024.10.04"],
    ["채용", "사회복지사 모집", "2024.10.04"]
    ],
    press: [
    ["보도", "언론에 소개된 아름드리", "2024.10.04"],
    ["보도", "지역 뉴스 보도자료", "2024.10.04"]
    ],
    gallery: [
    ["갤러리", "행복소통위원회 활동", "2024.10.04"]
    ],
    free: [
    ]
};

function renderTable(data = []) {
    const rows = [];

    if (data.length === 0) {
        // 데이터가 없을 때 첫 행에 안내 문구
    rows.push(`
        <tr>
          <td colspan="3" style="text-align: center; color: #999;">
            데이터가 없습니다.
          </td>
        </tr>
      `);
      // 나머지 9칸은 빈 줄로 채우기
      for (let i = 1; i < 10; i++) {
        rows.push(`<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>`);
      }
      } else {
        for (let i = 0; i < 10; i++) {
          if (data[i]) {
            const [type, title, date] = data[i];
            rows.push(`<tr><td>${type}</td><td>${title}</td><td style="text-align:right;">${date}</td></tr>`);
          } else {
            rows.push(`<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>`);
          }
        }
      }

    tableBody.innerHTML = rows.join("");
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const type = tab.getAttribute("data-type");
      renderTable(tableData[type]);
    });
  });

  // 초기 탭 로딩 (예: notion)
  renderTable(tableData.notion);
});



// ✅ 페이지네이션(pagination)
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-menu li");
    const tableBody = document.querySelector(".notion-table tbody");
    const pagination = document.querySelector(".pagination");
  
    const ITEMS_PER_PAGE = 10;
    let currentTab = "notion";
    let currentPage = 1;
  
    const tableData = {
        notion: [
            ["공지", "사단법인 아름드리 후원나눔 안내", "2024.10.04"],
            ["공지", "취업지원서비스 실시 및 회원가입 기간 연장 안내", "2024.10.04"],
            ["공지", "사단법인 아름드리 설립허가 및 회원가입 안내", "2024.10.04"],
            ["공지", "(가칭) 사단법인 아름드리 설립총회 자료집", "2024.10.04"],
            ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
            ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
            ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
            ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
            ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
            ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
            ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
            ["공지", "(가칭) 사단법인 아름드리 설립을 위한 창립총회 소집 안내", "2024.10.04"],
          ],
          jobs: [
            ["채용", "복지관 행정직 채용", "2024.10.04"],
            ["채용", "사회복지사 모집", "2024.10.04"],
          ],
          press: [
            ["보도", "언론에 소개된 아름드리", "2024.10.04"],
            ["보도", "지역 뉴스 보도자료", "2024.10.04"],
          ],
          gallery: [
            ["갤러리", "행복소통위원회 활동", "2024.10.04"],
          ],
          free: [],
        };
  
    function renderTable(data, page) {
      const rows = [];
      const start = (page - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      const pageData = data.slice(start, end);

      if (data.length === 0) {
        rows.push(`
          <tr>
            <td colspan="3" style="text-align: center; color: #999;">
              데이터가 없습니다.
            </td>
          </tr>
        `);
        
        for (let i = 1; i < 10; i++) {
            rows.push(`<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>`);
          }
        } else {
          for (let i = 0; i < ITEMS_PER_PAGE; i++) {
            if (pageData[i]) {
              const [type, title, date] = pageData[i];
              rows.push(`<tr><td>${type}</td><td>${title}</td><td>${date}</td></tr>`);
            } else {
              rows.push(`<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>`);
            }
          }
        }
    
        tableBody.innerHTML = rows.join("");
      }
  
    function renderPagination(data, current) {
      const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
      let buttons = `
        <button class="first-page" ${current === 1 ? "disabled" : ""}>&laquo;</button>
        <button class="prev-page" ${current === 1 ? "disabled" : ""}>&lsaquo;</button>
      `;
  
      for (let i = 1; i <= totalPages; i++) {
        buttons += `<button class="page-number ${i === current ? "active" : ""}">${i}</button>`;
      }
  
      buttons += `
        <button class="next-page" ${current === totalPages ? "disabled" : ""}>&rsaquo;</button>
        <button class="last-page" ${current === totalPages ? "disabled" : ""}>&raquo;</button>
      `;
  
      pagination.innerHTML = buttons;
  
      pagination.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
          if (btn.classList.contains("page-number")) {
            changePage(Number(btn.textContent));
          } else if (btn.classList.contains("first-page")) {
            changePage(1);
          } else if (btn.classList.contains("prev-page")) {
            changePage(current - 1);
          } else if (btn.classList.contains("next-page")) {
            changePage(current + 1);
          } else if (btn.classList.contains("last-page")) {
            changePage(totalPages);
          }
        });
      });
    }
  
    function changePage(page) {
      currentPage = page;
      renderTable(tableData[currentTab], currentPage);
      renderPagination(tableData[currentTab], currentPage);
    }
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
  
        currentTab = tab.getAttribute("data-type");
        currentPage = 1;
  
        renderTable(tableData[currentTab], currentPage);
        renderPagination(tableData[currentTab], currentPage);
      });
    });
  
    renderTable(tableData.notion, 1);
    renderPagination(tableData.notion, 1);
  });
  