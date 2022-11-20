import styles from './RightHeader.module.scss';
import clsx from 'clsx';
import $ from 'jquery';
import MobileMenu from './MobileMenu/MobileMenu';

function RightHeader() {
  function handleClickSearch() {
    $('#searchInput').val('');
  }

  return (
    <>
      <div className={clsx(styles.RightHeader)}>
        <div className={clsx(styles.RightHeaderBtn, styles.SearchBtn)}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <div className={clsx(styles.searchBox)}>
            <input type="text" placeholder="Search..." id="searchInput" />
            <i className="fa-solid fa-magnifying-glass" onClick={handleClickSearch}></i>
          </div>
        </div>
        <div className={clsx(styles.RightHeaderBtn, styles.UserBtn)}>
          <i className="fa-regular fa-user"></i>
          <ul>
            <li>
              Đăng nhập
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </li>
            <li>
              Đăng kí
              <i className="fa-solid fa-check"></i>
            </li>
          </ul>
        </div>
      </div>
      {/* mobile Menu */}
      <MobileMenu />
    </>
  );
}

export default RightHeader;
