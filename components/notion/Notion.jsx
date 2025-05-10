window.Notion = function () {
 return (

  <main>
   <div className="auto-1080 main-wrapper">
    <div className="page-title">알림마당</div>

    <div className="notion-container">
     <div className="tab-menu">
      <ul>
       <li data-type="notion" className="active">공지사항</li>
       <li data-type="jobs">구인정보</li>
       <li data-type="press">언론보도</li>
       <li data-type="gallery">갤러리</li>
       <li data-type="free">자유게시판</li>
      </ul>
     </div>

     <div className="notion-table">
      <table>
       <tbody>
       </tbody>
      </table>
     </div>
    </div>

    <div className="pagination">
     <button className="first-page">&laquo;</button>
     <button className="prev-page">&lsaquo;</button>

     <button className="page-number active">1</button>
     <button className="page-number">2</button>
     <button className="page-number">3</button>
     <button className="page-number">4</button>

     <button className="next-page">&rsaquo;</button>
     <button className="last-page">&raquo;</button>
    </div>

   </div>
  </main>
 )

}