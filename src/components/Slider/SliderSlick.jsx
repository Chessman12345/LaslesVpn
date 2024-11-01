import Slider from "react-slick";
import "./SliderSlick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import userIconOne from "../../icon/iconUserOne.svg";
import userIconTwo from "../../icon/iconUserTwo.svg";
import userIconTree from "../../icon/iconUserTree.svg";
import GradeStar from "../../icon/gradeIcon.svg";

const data = [
  {
    icon: userIconOne,
    name: "Viezh Robert",
    lives: "Warsaw Poland",
    grade: "4,5",
    gradeIcon: GradeStar,
    review:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  },
  {
    icon: userIconTwo,
    name: "Yessica Christy",
    lives: "Shanxi, China",
    grade: "4,5",
    gradeIcon: GradeStar,
    review:
      "“I like it because I like to travel far and still can connect with high speed.”.",
  },
  {
    icon: userIconTree,
    name: "Kim Young Jou",
    lives: "Seoul, South Korea",
    grade: "4,5",
    gradeIcon: GradeStar,
    review:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
  },
  {
    icon: userIconOne,
    name: "Max Jou",
    lives: "Moscow",
    grade: "4,5",
    gradeIcon: GradeStar,
    review:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
  },
];

const SliderSlick = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="slider">
        <div className="container">
          <div className="slider__inner">
            <div className="slider__title">
              <h2>Trusted by Thousands of Happy Customer</h2>
              <p>
                These are the stories of our customers who have joined us with
                great pleasure when using this crazy feature.
              </p>
            </div>
          </div>
        </div>
        <div className="slider__container-inner">
          <div className="slider__container">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index} className="cards__inner">
                  <div id="slider__boxes" className="cards">
                    <div className="cards__title">
                      <div className="cards__user-title">
                        <div className="cards__user-title-icon">
                          <img src={item.icon} alt="" />
                        </div>
                        <div className="cards__user-title-text">
                          <h2>{item.name}</h2>
                          <p>{item.lives}</p>
                        </div>
                      </div>
                      <div className="cards__user-title-grade">
                        <div className="cards__user-title-grade-text">
                          <h2>{item.grade}</h2>
                        </div>
                        <div className="cards__user-title-grade-icon">
                          <img src={item.gradeIcon} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="cards__review">
                      <p>{item.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderSlick;
