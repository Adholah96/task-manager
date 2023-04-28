import Logo from '../assets/logo.svg';
export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Task Manager logo" />
        <span>TaskManager</span>
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gradientOne"></span>
        <span className="gradientTwo"></span>
        <span className="gradientThree"></span>
      </div>
    </header>
  );
};
