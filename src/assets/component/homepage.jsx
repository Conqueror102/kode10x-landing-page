import React from "react";

const Homepage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex justify-between w-full items-center h-[70px] shadow-md px-20 fixed right-0 top-0 left-0 bg-white z-10">
        <div>Logo</div>
        <div className="flex font-semibold text-lg gap-5 ">
          <nav className="cursor-pointer hover:bg-yellow-400 transition-all duration-1000 ease-in-out">
            Course
          </nav>
          <nav className="cursor-pointer">Our Team</nav>
          <nav className="cursor-pointer">Gallery</nav>
          <nav className="cursor-pointer">Contact Us</nav>
          <nav className="cursor-pointer">Hire Talent</nav>
        </div>
      </div>
      <div className="w-full h-[100vh] bg-[#E1E9FF] px-20  flex">
        <div className="w-[45%]  mt-40 ">
          <p className="mb-5 text-[55px] font-extrabold leading-[63px] text-[#0B163F]">
            {" "}
            Unlock Your{" "}
            <span className="text-[#58AD90]  bg-[#C6DDE9] rounded-md px-4 ">
              Path
            </span>{" "}
            to Becoming a World-Class Software Engineer
          </p>
          <p className="text-[1rem] leading-[20px] text-[#0B163F] mb-5">
            Enroll in Kode10x's exclusive training program and become highly
            sought after by both local and international companies.
          </p>
          <button className="px-8 py-3 bg-[#58AD90] text-white rounded-md font-medium">
            Apply now
          </button>
        </div>
        <div className="w-[55%]  flex gap-x-4 justify-end items-center mt-20">
          <div className="gap-4 flex flex-col">
            <div className="w-[240px] h-[289px] bg-white rounded-md overflow-hidden ">
              <img
                className="w-full h-fit"
                src="https://www.kode10x.com/IMG_4685.jpg"
                alt=""
              />
            </div>
            <div className="w-[240px] h-[200px] bg-slate-950  rounded-md mb-9 "></div>
          </div>
          <div className="gap-4 flex flex-col">
            <div className="w-[240px] h-[200px] bg-slate-950  rounded-md mt-9 overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src="https://www.kode10x.com/IMG-20231027-WA0007.jpg"
                alt=""
              />
            </div>
            <div className="w-[240px] h-[289px] bg-white rounded-md "></div>
          </div>
        </div>
      </div>

      <div className="p-12  items-center flex flex-col w-full ">
        <p className="pb-12 text-[40px] font-bold text-[#0B163F]">
          Why <span className="text-[#58AD90]"> Kode10X </span> is the #1 choice
          for you
        </p>
        <div className=" flex gap-4 ">
          <div className="w-[387px] h-[430px] bg-[#C6DDE9] rounded-md p-[16px] ">
            <div className="w-[full] h-[200px]  bg-white rounded-md"></div>
            <h2 className="my-4 text-xl font-bold text-balance">Our Mission</h2>

            <p>
              We empower individuals for career development transition into the
              tech space, with little or zero knowledge. We groom and nurture
              these talents with technical and non-technical skills, soft skills
              and transformational Leadership skills suited for industry
              standard.
            </p>
          </div>
          <div className="w-[387px] h-[430px] bg-[#C6DDE9] rounded-md p-[16px] ">
            <div className="w-[full] h-[200px]  bg-white rounded-md"></div>
            <h2 className="my-4 text-xl font-bold text-balance">Our Vision</h2>

            <p>
              Kode10x is Africa's go to tech hub for everything talent
              management, product development and youth entrepreneurship
              engagement.
            </p>
          </div>
          <div className="w-[387px] h-[430px] bg-[#C6DDE9] rounded-md p-[16px] ">
            <div className="w-[full] h-[200px]  bg-white rounded-md"></div>
            <h2 className="my-4 text-xl font-bold text-balance">Why Kode10x</h2>

            <p>
              Because we believe in the limitless power of innovation and the
              boundless possibilities it brings to Africa's tomorrow.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] bg-[#C6DDE9] p-12 flex flex-col items-center ">
        <p className="pb-12 text-[40px] font-bold text-[#0B163F]">
          Course We <span className="text-[#58AD90]"> Offer </span>
          for you
        </p>

        <div className="flex flex-wrap  gap-5 w-[100%] justify-center">
          <div className="w-[383px] h-[200px] rounded-md bg-purple-50 items-center flex px-3">
            <p className="text-[30px] font-bold ">Fontend Developer</p>
          </div>
          <div className="w-[383px] h-[200px] rounded-md bg-purple-50 items-center flex px-3">
            <p className="text-[30px] font-bold ">Backend Development</p>
          </div>
          <div className="w-[383px] h-[200px] rounded-md bg-purple-50 items-center flex px-3">
            <p className="text-[30px] font-bold ">Product Desige</p>
          </div>
          <div className="w-[383px] h-[200px] rounded-md bg-purple-50 items-center flex px-3">
            <p className="text-[30px] font-bold ">Product Management</p>
          </div>
          <div className="w-[383px] h-[200px] rounded-md bg-purple-50 items-center flex px-3">
            <p className="text-[30px] font-bold ">CyberSecurity</p>
          </div>
          <div className="w-[383px] h-[200px] rounded-md bg-purple-50 items-center flex px-3">
            <p className="text-[30px] font-bold ">Project Management</p>
          </div>
        </div>
      </div>

      <div className="w-[100%] p-12 flex flex-col items-center">
        <div className="pb-12 text-center">
          <p className=" text-[40px] font-bold text-[#0B163F] ">
            Our <span className="text-[#58AD90]"> Testimonial </span>{" "}
          </p>
          <p>What people say about us...</p>
        </div>
        <div className="flex w-full px-20 justify-center gap-4">
          <div className="w-[300px] h-[300px] rounded-[100%] ]">
            <img className="" src="../../../public/Ellipse 20.png" alt="" />
          </div>
          <div className="text-center w-[500px]  ">
            <h1 className="text-4xl  font-bold ">Linda Ogbotobo</h1>
            <h3 className="text-2xl  font-semibold text-[#58AD90]">
              Backend Developer Kode10x
            </h3>
            <p className="text-lg font-medium">Alumi</p>
            <p className="text-lg mt-5">
              We empower individuals for career development transition into the
              tech space, with little or zero knowledge. We groom and nurture
              these talents with technical and non-technical skills, soft skills
              and transformational Leadership skills suited for industry
              standard.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#E1E9FF] w-full px-20 py-14">
        <h1 className="text-[40px] text-center font-bold mb-12">
          Familiarize yourself With Some Of Our Tech{" "}
          <span className="text-[#58AD90]">Stack</span>
        </h1>
        <div className="flex justify-center items-center gap-7 flex-wrap">
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s1.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s3.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s4.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s5.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s6.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s7.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s8.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s9.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s10.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s11.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s12.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s13.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s14.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s15.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s16.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s17.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s18.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s19.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s20.png"
              alt=""
            />
          </div>
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-xl drop-shadow-lg p-4">
            <img
              className="w-full object-contain"
              src="../../../public/s21.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="px-20 py-10 pb-14 bg-[#0B163F] text-[40px] font-bold w-full">
        <h1 className="text-white text-center mb-12">
          Our <span className="text-[#8ED8BF]">Partners</span>
        </h1>
        <div className="flex px-48 ">
          <div className="mx-auto hover:shadow-md h-[120px] bg-white p-2 rounded-md w-auto">
            <img
              className="w-full h-full object-contain"
              src="../../../public/CRB.jpg"
              alt=""
            />
          </div>

          <div className="mx-auto hover:shadow-md h-[120px] bg-white p-2 rounded-md w-auto ">
            <img
              className="w-full h-full object-contain"
              src="../../../public/AGHS.jpg"
              alt=""
            />
          </div>
          <div className="mx-auto hover:shadow-md h-[120px] bg-white p-2 rounded-md w-auto ">
            <img
              className="w-full h-full object-contain"
              src="../../../public/midview.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="p-20 w-full ">
        <div className="w-full flex justify-between">
       <div className="w-[580px] h-[320px] relative rounded-lg overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="../../../public/class.jpg"
              alt=""
            />
            <div className="w-full h-full p-8 bg-[#0c091154] absolute right-0 left-0 top-0 text-white flex flex-col justify-center">
              <h1 className=" w-[300px] text-[2rem] font-bold ">
                JOIN OUR ONLINE CLASSES
              </h1>
              <p className="w-[350px] font-medium text-[16px]">
                Enroll in Kode10x's exclusive training program and become highly
                sought after by both local and international companies.
              </p>

              <button className="px-7 py-4 bg-[#58AD90] rounded-md text-xl font-semibold mt-3 w-[150px]">
                Register
              </button>
            </div>
          </div>    <div className="w-[580px] h-[320px] relative rounded-md overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="../../../public/community.jpg"
              alt=""
            />
            <div className="w-full h-full p-8 bg-[#0c091154] absolute right-0 left-0 top-0 text-white flex flex-col justify-center">
              <h1 className=" w-[300px] text-[2rem] font-bold mb-3">
              JOIN OUR COMMUNITY
              </h1>
              <p className=" font-medium text-[16px] w-[450px]">
                Discover the power of Kode10x's vibrant community, where
                like-minded professionals gather to unlock exclusive training
                opportunities and forge valuable connections with local and
                international industry leaders.
              </p>

              <button className="px-7 py-4 bg-[#58AD90] rounded-md text-xl font-semibold mt-3 w-[180px] ">
              Be a member
              </button>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Homepage;
