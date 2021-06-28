import "./post.css"
import {MoreVert} from "@material-ui/icons"

export default function Post() {
    return (
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src="../../../public/assets/Profile1.jpg" alt="" />
              <span className="postUserName">Rizal Junaedi</span>
              <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
          </div>
          <div className="postCenter">
              <span className="postText">Hallo ini Postingan Pertama Saya</span>
              <img className="postImg" src="../../../public/assets/person/1.jpeg" alt="" />
          </div>
          <div className="postBottom">
              <div className="postBottomLeft">
                  <img clasName="likeIcon"src="../../../public/assets/like.png" alt=""/>
                  <img clasName="likeIcon"src="../../../public/assets/heart.png" alt=""/>
                  <span className="postLikeCounter">32 orang menyukai ini</span>
              </div>
              <div className="postBottomRight">
                  <span className="postCommentText">9 comments</span>
              </div>
          </div>
        </div>
      </div>
    );
}
