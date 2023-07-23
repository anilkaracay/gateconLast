import Partner1 from "./Partner1";
import Partner2 from "./Partner2";

const TrustedPartner = () => {
  return (
    <>
      {/* <!-- Partners --> */}
      <section className="overflow-hidden py-24 dark:bg-jacarta-900">
        <div className="container">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <h1 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              Partners
            </h1>
            <p className="text-lg dark:text-jacarta-300">
              Our valuable partners
            </p>
          </div>
        </div>
        <div className="mb-8 flex animate-marqueeRight space-x-8">
          <Partner1 />
        </div>
        {/* End .animate-marqueeRight */}

        <div className="flex animate-marquee space-x-8">
          <Partner2 />
        </div>
        {/* animate-marquee */}
      </section>
      {/* <!-- end partners -->  */}
    </>
  );
};

export default TrustedPartner;
