import Image from "next/image";

const FancyBlock = () => {
  const fancyList = [
    ` Easy Onboarding`,
    `  User Friendly Experience`,
    ` No crypto required`,
    ` No paying gas fees`,
    ` No signing transactions`,
  ];

  return (
    <>
      {/* <!-- Promo --> */}
      <section className="relative py-24 dark:bg-jacarta-800">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image
            width={1519}
            height={773}
            priority
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="pr-[calc((100%_-_1170px)/2)]">
          <div className="lg:flex lg:justify-between">
            {/* <!-- Image --> */}
            <div className="relative mb-8 pr-6 lg:w-[63%]">
              <div className="flex items-center space-x-7">
                <Image
                  width={823}
                  height={562}
                  className="w-full h-full object-cover"
                  src="/images/crypto-app/promo_crypto_app.png"
                  alt="crypto app"
                />
              </div>
            </div>

            {/* <!-- Info --> */}
            <div className="py-10 px-6 lg:w-[37%] lg:pl-28">
              <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
                Modular Gaming Platform
              </h2>
              <p className="mb-12 text-lg leading-normal dark:text-jacarta-300">
                Gamers will be able to transition between Web2 and Web3 at their
                convenience. This ease of transition will allow them to utilize
                the advantages of blockchain in the gaming world. <br />
                Thanks to the social features of the platform, players will be
                able to stay in touch with each other at any time.
              </p>

              {fancyList.map((val, i) => (
                <div className="mb-3 flex space-x-4" key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-8 w-8 shrink-0 fill-accent"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                  </svg>
                  <div>
                    <span className="mb-3 mt-2 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                      {val}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end promo -->  */}
    </>
  );
};

export default FancyBlock;
