const NavIcon = (props) => {
  return (
    <>
      <li className={props.className + " max-w-sm"} onClick={props.clickFun}>
        <a
          href={props.link}
          className="flex-row text-center items-center max-w-sm text-gray-500 focus:text-black hover:text-black"
        >
          <div className="flex justify-center">{props.children}</div>
          <p className="text-xs">{props.title}</p>
        </a>
      </li>
    </>
  );
};

export default NavIcon;
