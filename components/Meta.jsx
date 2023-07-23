import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>{title} || WEB3 SOCIAL GAMING PLATFORM</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "gatecon | WEB3 SOCIAL GAMING PLATFORM",
  keyword:
    "web3 game, gaming, web3 gaming, blockchain game,bitcoin, blockchain, crypto, crypto collectibles, crypto makretplace, cryptocurrency, digital items, market, nft, nft marketplace, nft next js, NFT react, non-fungible tokens, virtual asset, wallet",
  desc: "Play WEB3 games the way you're used to",
};

export default Meta;
