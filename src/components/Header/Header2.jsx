import './Header.css';
import ProfilePic from '../../assets/jisunprofile.png';


function Header2() {5
  return(
    <header>
      <img src={ProfilePic} alt="황지선 프로필" />
      <h1>안녕하세요, <br />백앤드 개발자 황지선입니다.</h1>
      <p>
      "사용자 경험을 고려한 안정적인 시스템 설계를 바탕으로, 확장성과 유지보수성을 갖춘 백엔드 개발을 전문으로 합니다.<br />
      프론트엔드와의 원활한 연계를 통해 서비스 전반의 품질을 높이고, 비즈니스 요구에 맞는 최적의 기술 솔루션을 구현합니다."
      </p>
    </header>
  );
}

export default Header2;