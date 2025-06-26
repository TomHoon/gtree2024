window.NotionDetail = function () {

 return (
  <main>
   <div className="auto-1080 main-wrapper">

    <div className="page-title">알림마당</div>
    <div className="detail-container">
     <div className="detail-title">
      <h2>취업지원서비스 실시</h2>
     </div>

     <div className="profile-area">
      <ul>
       <li className="profile-image">
        <img src="../../imgs/logo/commonLogo.png" alt="" />
       </li>
       <li>
        <ul className="profile-subinfo">
         <li>
          <span className="nickname">굿싸인</span>
          <span className="degree">홈피매니저</span>
         </li>
         <li>
          <span className="regi-date">2025.06.25</span>
         </li>
        </ul>
       </li>
      </ul>
     </div>

     <div className="notion-detail-content">
      <div contentEditable="true"></div>
     </div>
    </div>
   </div>
  </main>
 )
}