import { Partners } from "../../components/component";
import DownloadAppBanner from "../../components/crypto/DownloadAppBanner";
import FancyBlock from "../../components/crypto/FancyBlock";
import Feature from "../../components/crypto/feature";
import WalletFeature from "../../components/crypto/wallet-feature";
import NeedHelpBlock from "../../components/crypto/nee-help-block";
import Hero_10 from "../../components/hero/hero_10";
import Process from "../../components/blog/process";
import Meta from "../../components/Meta";
import Testimonial from "../../components/testimonial/Testimonial";
import TrustedPartner from "../../components/dao/TrustedPartner";
import Services from "../../components/services/services";

const Home_1 = () => {
  return (
    <main>
      <Meta title="gatecon" />
      <Hero_10 />

      <Feature />
      <Process />
      <FancyBlock />
      <TrustedPartner />
      {/* <Partners /> */}
      <Services />
      {/* <WalletFeature /> */}
      {/* <Testimonial /> */}
      <DownloadAppBanner />
      {/* <NeedHelpBlock /> */}
    </main>
  );
};

export default Home_1;
