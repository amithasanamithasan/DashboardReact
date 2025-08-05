import img1 from "../assets/book.jpg";
import img2 from "../assets/book1.jpg";
import img3 from "../assets/book2.jpg";
import img4 from "../assets/cover.jpg";
import img5 from "../assets/cover.jpg";
const Banner = () => {
  return (
    <div className="carousel  w-[1900px] h-[800px]  rounded-xl mx- auto">
      <div id="slide1" className="carousel-item relative w-full  object-cover ">
        <img src={img1} className="w-[1900px] h-[800px] rounded  " />
        <div
          className="absolute  rounded flex items-center left-0 
          top-0 bottom-0 bg-gradient-to-r from-[#55b4cb] to-[rgb(21,21,21,0)] "
        >
          <div className="  space-y-7 text-white  w-1/2  font-bold  ml-20  ">
            <h1 className="md:text-4xl  text-green-600 ">Book is Valuable</h1>
            <p className=" font-bold  text-green-100 md:text-2xl lg:text-3xl">
              There are many Valuable Books Here
            </p>
            <div className=" py-10  flex">
              <button className="btn btn-active btn-success mr-4">
                New Book Items{" "}
              </button>
              <button className="btn btn-outline btn-warning">Read More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full  rounded-xl " />
        <div className="absolute   rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full  rounded-xl " />
        <div className="absolute  rounded-xl  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle bg-zinc-950 mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-red-600 ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img5} className="w-full  rounded-xl " />
        <div className="absolute   rounded-xl  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img4} className="w-full  rounded-xl " />
        <div className="absolute  rounded-xl  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
