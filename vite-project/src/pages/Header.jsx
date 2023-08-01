import { HiOutlineLightBulb} from "react-icons/hi";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div>
          <HiOutlineLightBulb className="icon" />
          <h1>Keep</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
