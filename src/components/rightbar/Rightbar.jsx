import "./rightbar.css";

export default function Rightbar() {
  return (
    <div>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img
              className="birthdayImg"
              src="../../../public/assets/gift.png"
              alt=""
            />
            <span className="birthdayText">
              <b>Arsyad</b> dan <b>3 teman lainnya</b> sedang berulang tahun
            </span>
          </div>
          <img
            src="../../../public/assets/ad.png"
            alt=""
            className="rightbarAd"
          />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendsList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img
                  src="../../../public/assets/person/3.jpeg"
                  alt=""
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Puji Ayu Lestari</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
