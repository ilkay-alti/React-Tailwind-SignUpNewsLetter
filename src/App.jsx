import React from "react";

const App = () => {
  const [count, setCount] = React.useState(957);
  return (
    <div className="min-h-screen bg-primary text-quaternary justify-between flex flex-col pb-10 ">
      <div className="text-center m-auto ">
        <div className=" text-2xl md:text-4xl lg:text-6xl uppercase">
          WELCOME TO
        </div>
        <div className=" font-extrabold uppercase text-3xl md:text-6xl lg:text-8xl">
          THE CODING CLUB
        </div>
        <div className=" font-bold md:text-lg tracking-[.13em] text-opacity-90 mt-5 ">
          A place for developers to code in peace without thosepesky project
          managers!
        </div>

        <div className="  text-lg text-2xl md:text-3xl lg:text-4xl py-2 px-4 md:py-4 md:px-6 lg:py-6 lg:px-8 w-fit mx-auto bg-white/10 font-bold rounded-full my-8">
          {count} members
        </div>

        <form
          action="https://www.getrevue.co/profile/ilkay_alti/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
          <div className="text-lg text-2xl md:text-3xl lg:text-4xl py-2 px-4 md:py-4 md:px-6 lg:py-6 lg:px-8 flex w-fit mx-auto h-28">
            <input
              name="member[email]"
              id="member_email"
              class="revue-form-field"
              type="email"
              placeholder="Your email address..."
              className="bg-tertiary/30 w-full  px-12 md:text-xl rounded-l-full"
            />
            <button
              name="member[subscribe]"
              id="member_submit"
              type="submit"
              className="bg-secondary/90  w-2/3  md:text-2xl font-bold  rounded-r-full"
            >
              JOIN TODAY
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col  mx-auto md:flex-row">
        <p className="md:mx-16">Built with 💖 by İlkay Altınışık</p>
        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-75 duration-150">
            About us
          </a>
          <a href="#" className="mx-3 hover:opacity-75 duration-150">
            Privacy
          </a>
          <a href="#" className="mx-3 hover:opacity-75 duration-150">
            Contant
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
