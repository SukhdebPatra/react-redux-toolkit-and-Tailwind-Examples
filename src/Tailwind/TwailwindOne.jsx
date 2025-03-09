import React from "react";

function TwailwindOne() {
  return (
    <>
      {/* <div className="container">
        The container class sets the max-width of an element to match the
        min-width of the current breakpoint. This is useful if you’d prefer to
        design for a fixed set of screen sizes instead of trying to accommodate
        a fully fluid viewport. Note that unlike containers you might have used
        in other frameworks, Tailwind’s container does not center itself
        automatically and does not have any built-in horizontal padding.
      </div> */}
      <br />
      {/* <div className="container mx-auto px-4">
        To center a container, use the mx-auto utility: To add horizontal
        padding, use the px-* utilities:
      </div> */}
      <br />
      {/* <div className="md:container md:mx-auto">
        Responsive variants The container class also includes responsive
        variants like md:container by default that allow you to make something
        behave like a container at only a certain breakpoint and up:
      </div> */}
      <br />
      <div className="columns-8">
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id animi
          dolore vel quam ea eius ducimus natus provident cupiditate
          consequuntur alias, modi molestias itaque, voluptatem saepe? Deleniti
          quia sed consequatur!
        </span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          dolorum, assumenda veniam doloribus perferendis molestias reiciendis
          quos quia enim, autem officia consequatur dolores? Enim maxime quo
          cum, odit beatae ducimus!
        </span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          temporibus distinctio praesentium nihil magni aliquid officia
          cupiditate, corporis excepturi esse quos modi odit tenetur dolore
          doloribus fuga laudantium maiores aspernatur.
        </span>
      </div>
      <br />
      {/* <div class="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p class="break-after-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div> */}
      <br />
      {/* <div className="box-border h-32 w-32 p-4 border-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad facilis
        voluptas laborum error! Nam mollitia, architecto, dolor porro tenetur,
        consequatur molestias incidunt sed a labore necessitatibus nemo magni
        non quia!
      </div>
      <br />
      <div class="box-content h-32 w-32 p-4 border-4 ...">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
        doloremque porro quidem, eos obcaecati incidunt possimus sit nesciunt
        nihil ipsam atque voluptates laudantium exercitationem doloribus.
        Voluptate, facere. Aperiam, iusto at!
      </div> */}

      <br />
      {/* <div>
        When controlling the flow of text, using the CSS property
        <span class="inline">display: inline</span>
        will cause the text inside the element to wrap normally. While using the
        property <span class="inline-block">display: inline-block</span>
        will wrap the element to prevent the text inside from extending beyond
        its parent. Lastly, using the property{" "}
        <span class="block">display: block</span>
        will put the element on its own line and fill its parent.
      </div> */}

      {/* <div class="p-4">
  <div class="flow-root ...">
    <div class="my-4 ...">Well, let me tell you something, ...</div>
  </div>
  <div class="flow-root ...">
    <div class="my-4 ...">Sure, go ahead, laugh if you want...</div>
  </div>
</div> */}

      {/* <div class="flex items-center">
  <img src="https://images.unsplash.com/photo-1741082212669-4566cf0077f1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"/>
  <div>
    <strong>Andrew Alfred</strong>
    <span>Technical advisor</span>
  </div>
</div> */}

      <button className="bg-sky-500 rounded-full p-2 ml-2 hover:bg-red-400 ">
        Button{" "}
      </button>

      <div className="bg-clip-border p-6"></div>
      {/* <div className="bg-origin-border p-4 border-dashed border-4 border-box">
        <img
          className="bg-contain bg-center rounded-full"
          src="https://plus.unsplash.com/premium_photo-1664302180868-7d4be774ea23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"
          alt=""
        />
      </div> */}
      <div className="border w-16 border-red-900 ">content</div>

      <input
        type="text"
        className="border-2 mt-2 border-rose-600"
        name=""
        id=""
      />
      <button className="border-solid ml-2 border-2 border-indigo-400">
        button
      </button>
      <button className="border-dotted border-red-400 border-2 ml-2">
        btn2
      </button>
      <button class="border-none">Save Changes</button>
    </>
  );
}

export default TwailwindOne;
