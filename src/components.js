/* eslint-disable no-restricted-syntax */
import Logo from './assets/images/mAZEFLIX.gif';

export const Nav = () => `
  <nav>
    <div class="logo">
      <img src=${Logo} alt="site logo" />
    </div>
    <div class="form-container">
      <form>
        <input type="search" placeholder="search" id="search"/>
        <div>
          <button type="submit" id="submit-btn">Search <span class="spinner"></span></button>
        </div>
      </form>
    </div>
    <ul>
      <li>
        <a href="#" class="links active" data-content="#books">TV Shows</a>
      </li>
    </ul>
  </nav>
  `;
const ids = (args) => {
  let ans = '';
  for (const [key, value] of Object.entries(args)) {
    if (value != null) {
      ans = `${key}=${value}`;
    }
  }
  return ans;
};

export const List = ({ show } = {}, likesNum = 0) => `
  <li>
    <div class="show-img">
      <img src=${show.image.medium} alt="show image">
    </div>
    <div class="tv-title">
      <p>${show.name}</p>
      <p><i class="fas fa-thumbs-up" id="likes-btn" data-id=${show.id}></i><span  data-id=${show.id} class="likes-num">${likesNum}</span> likes</p>
    </div>
    <button type="button" class="btn comment-btn" data-id=${ids(show.externals)}>Comments</button>
  </li>
`;

export const Heading = (type, count = 5) => `
  <h1>Title ${type}: TV Shows(${count})</h1>
`;
