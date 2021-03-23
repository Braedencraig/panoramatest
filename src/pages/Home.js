import { useState } from 'react'

export default function Home() {
    const [show, setShow] = useState(true)
    
    return (
      <div className={`fullpage ${show ? '' : 'hide'}`}>
          <div className="intro-title">
            <h1>The Advantages Of Tender Loving Care By Laura Kay Keeling</h1>
            <h2>Contact 2021 Featured Exhibtion</h2>
          </div>
          <div className="intro-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt vero laudantium eaque, voluptates voluptatum autem neque quisquam suscipit. Excepturi, reprehenderit? At blanditiis perferendis animi sequi quas quasi velit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga maiores ex eveniet culpa enim molestiae nesciunt eligendi? A provident similique hic voluptas eius corrupti voluptatibus eveniet cumque dignissimos itaque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quae esse repellat accusamus, odio cumque recusandae necessitatibus quasi hic molestias itaque odit facere consequatur aperiam reprehenderit tempora. Error, velit cum!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt vero laudantium eaque, voluptates voluptatum autem neque quisquam suscipit. Excepturi, reprehenderit? At blanditiis perferendis animi sequi quas quasi velit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga maiores ex eveniet culpa enim molestiae nesciunt eligendi? A provident similique hic voluptas eius corrupti voluptatibus eveniet cumque dignissimos itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error optio ex reprehenderit a, quibusdam labore esse consectetur animi facere eum eos libero repudiandae, quas veritatis iste repellat maxime, reiciendis quod.</p>
          </div>
          <div className="cyoa-buttons">
            <button onClick={() => setShow(false)}>See Yourself Around</button>
            <button onClick={() => setShow(false)}>Take The Guided Tour</button>
          </div>
      </div>
    );
  }