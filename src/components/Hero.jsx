import GetStarted from "./GetStarted";

import { discount, robot } from "../assets";

import styles from "../styles";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingX}`}
    >
      <div
        className={`flex-1 flex-col px-6 xl:px-0 sm:px-16 ${styles.flexStart}`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`ml-2 ${styles.paragraph}`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[72px] text-[52px] text-white">
            The Next <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[72px] text-[52px] text-white w-full">
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="z-[0] absolute w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="z-[1] absolute w-[80%] h-[80-%] rounded-full bottom-40 white__gradient"></div>
        <div className="z-[0] absolute w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;