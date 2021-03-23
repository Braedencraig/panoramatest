import image from '../assets/download.jpeg'

export default function About() {
    return (
      <div className="fullpage">
       <div className="about-title">
         <h2>The Advantages Of Tender Loving Care</h2>
       </div>
       <div className="about-blurb">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi omnis corporis maiores accusantium? Pariatur voluptates dolor labore minus? Vel earum quia aspernatur, cupiditate voluptatum assumenda itaque recusandae molestiae et sint. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita illo dicta officiis aut voluptatum, quos quasi saepe exercitationem quia quae eveniet iusto, nemo delectus error assumenda impedit, pariatur temporibus fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto labore veniam eius hic laborum vel laboriosam. Tempore vitae nam officia soluta, magni odio, commodi modi consequatur cupiditate rem architecto reprehenderit.</p>
       </div>
       <div className="about-artist">
         <div className="flex-left">
          <img src={image} alt="The artist, Laura Kay Keeling"/>
         </div>
         <div className="flex-right">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minus provident, repellat similique suscipit nihil voluptate animi, dolores non molestias maxime molestiae amet excepturi hic distinctio quos sint, doloremque magni?</p>
           <div className="socials">
             <span>Twitter</span>
             <span>Instagram</span>
           </div>
         </div>
       </div>
       <div className="mailing-list">
         {/* USE PREVIOUS MOCK I DID FOR SETTING UP MAILING LISTS */}
         <p>Sign Up For Mailing List</p>
         <input type="text"/>
         <button>sign up</button>
       </div>
      </div>
    );
  }