<script>
  import {onMount} from "svelte";
  import {getTotalStats, getTableData, getAvaxPriceStats} from "$utils";
  import FAQItem from "$components/FAQItem.svelte";

  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  let stats = {
    totalLiquidityAVAX: 0,
    totalVolumeAVAX: 0,
  };

  let avaxPrice = {
    now: 0,
    history: 0,
  };

  let tableData = [];

  onMount(async () => {
    getAvaxPriceStats().then(({usd, usd_24h_change}) => {
      avaxPrice = {
        now: usd,
        history: ((100 - usd_24h_change) * usd) / 100,
      };
    });
    stats = await getTotalStats();
    tableData = await getTableData();
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://api.coingecko.com" crossorigin="true" />
  <link rel="preconnect" href="https://graph-node.avax.network" crossorigin="true" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:url" content="https://pangolin.exchange/" />
  <meta property="og:type" content="article" />
  <meta name="twitter:image" content="https://pangolin.exchange/OGImage.png" />
  <meta property="og:image" content="https://pangolin.exchange/OGImage.png" />
  <meta
    name="twitter:description"
    content="A community-driven decentralized exchange for Avalanche and Ethereum assets with fast settlement, low transaction fees, and a democratic distribution–powered by Avalanche."
  />
  <meta
    property="og:description"
    content="A community-driven decentralized exchange for Avalanche and Ethereum assets with fast settlement, low transaction fees, and a democratic distribution–powered by Avalanche."
  />
  <meta name="twitter:title" content="Pangolin - Scale Your DeFi Trading" />
  <meta property="og:title" content="Pangolin - Scale Your DeFi Trading" />
  <title>Snowball Finance - Yield Optimizer</title>
</svelte:head>

<section class="container mx-auto md:px-12 sm:px-2 max-w-screen-lg mt-8 xl:max-w-screen-xl ">
  <div>
    <h1
      class="mt-10 mb-8 max-w-screen-lg text-5xl font-sans font-bold tracking-tight leading-none text-darkblue sm:mb-10 sm:mt-14 sm:text-5xl lg:text-5xl">
      Welcome to Snowball Finance
    </h1>

    <p class="mb-10 max-w-screen-lg text-lg font-regular text-gray-700 sm:mb-11 sm:text-1xl sm:leading-10 whitespace-pre	">
      This is a tool for interacting with the Snowball Finance smart contracts. 
Stake your LP tokens from Pangolin Exchange on the Staking page to earn Snowball token rewards.
    </p>


    <div class="flex my-10 space-x-12">
      <div class="bg-btn1 flex flex-col justify-center py-4 px-16 bg-snowball-blue rounded-xl md:w-6/12 h-52 sm:w-12/12">
        <span class="font-normal text-white	text-2xl">Total Value Locked</span>
        <span class="text-4xl font-semibold text-gray-100">
          $2,100,000.00+

          <!-- ${(stats.totalLiquidityAVAX * avaxPrice.now) / 1e6}M+ -->
        </span>
      </div>
      <div class="bg-btn2 flex flex-col justify-center py-4 px-16 bg-snowball-darkblue rounded-xl md:w-6/12 h-52 sm:w-12/12">
        <span class="font-normal text-white text-2xl">Total Supply Snowball</span>
        <span class="text-4xl font-semibold text-gray-100">
          $2,661,636.18
          <!-- ${Math.floor((parseFloat(stats.totalLiquidityAVAX) * avaxPrice.now) / 1e6)}M+ -->
        </span>
      </div>
    </div>

    <div class="flex flex-wrap space-y-4 text-center sm:space-x-4 sm:space-y-0">
      <a
        class="flex-none py-5 px-6 w-full text-lg font-semibold leading-6 text-white bg-snowball-blue rounded-xl border border-transparent transition-colors duration-200 hover:bg-snowball-darkblue focus:outline-none focus:ring-orange-900 focus:ring-offset-white focus:ring-offset-2 focus:ring-2 sm:inline sm:w-auto"
        href="https://app.pangolin.exchange"
        target="_blank"
      >
        Launch App
      </a>

      <a
        class="flex-none py-5 px-6 w-full text-lg font-semibold leading-6 text-darkblue bg-white rounded-xl border border-snowball-darkblue transition-colors duration-200 hover:text-gray-700 hover:bg-snowball-lightblue hover:border-transparent focus:outline-none focus:ring-gray-900 focus:ring-offset-white focus:ring-offset-2 focus:ring-2 sm:w-auto"
        href="/litepaper">
        Litepaper
      </a>
    </div>
  </div>

  <article class="flex flex-col mt-16">
    <div style="font-size:32px;font-family='Montserrat'">FAQ ❤️</div>
    <div class="pt-10 overflow-x-auto ">
      <div class="divide-y-2 divide-solid">
        <FAQItem>
          <span slot="question">Can I send my Avalanche assets from Metamask to an Exchange or an ETH address?</span>
          <span slot="answer">
            No, you cannot send assets across networks from Avalanche to Ethereum or vice versa. You need to use the <a
              class="hover:no-underline"
              href="https://aeb.xyz/#/transfer">Avalanche-Ethereum Bridge</a
            > every time you want to send assets between networks.
          </span>
        </FAQItem>
    
        <FAQItem>
          <span slot="question">My transaction is pending on Metamask for some time now, what can I do?</span>
          <span slot="answer">
            First check that your gas fee is set to exactly: 470 gwei. If it is, retry the transaction.
            <br />
            <br />
            If it doesn’t go through, try resetting your Metamask by Clicking the account icon on the top-right corner of MetaMask
            → Select Settings → Select Advanced → Scroll down and click Reset Account.
            <br />
            <br />
            Please note, resetting your account <u>will not</u> disrupt your funds or wallet address.
          </span>
        </FAQItem>

        <FAQItem>
          <span slot="question">Why isn’t my ERC-20 token showing in my Metamask wallet?</span>
          <span slot="answer">
            This is due to the token address changing. When you transfer ERC-20’s across the <a
              class="hover:no-underline"
              href="https://aeb.xyz/#/transfer">Avalanche-Ethereum Bridge</a
            >, the Token contract address changes. Token contract addresses are different on Ethereum and Avalanche despite
            being the same represented token.
            <br />
            <br />
            To import the Avalanche token address of any Avalanche supported ERC-20 follow these steps:
            <ol>
              <li>Open Metamask</li>
              <li>Scroll down to "Add Token"</li>
              <li>Tap on the "Custom Token" tab</li>
              <li>
                Navigate to: the <a
                  class="hover:no-underline"
                  href="https://tokenlists.org/token-list?url=https://raw.githubusercontent.com/pangolindex/tokenlists/main/aeb.tokenlist.json"
                  >Avalanche Token List</a
                >
              </li>
              <li>Find the token you wish to import and copy the contract address</li>
              <li>Paste the contract address inside Metamask</li>
              <li>Tap Next</li>
              <li>Done!</li>
            </ol>
          </span>
        </FAQItem>
    
        <FAQItem>
          <span slot="question">Why are my fees displayed in ETH on MetaMask?</span>
          <span slot="answer">
            MetaMask is originally built for Ethereum and does not support the native tokens of other blockchain networks.
            The ETH units displayed are actually AVAX units when on the Avalanche network. Therefore, to get the true cost
            of transactions, you need to multiply the units by the current market rate of AVAX.
          </span>
        </FAQItem>
    
        <FAQItem>
          <span slot="question">Why do I have to make two transactions sometimes using MetaMask?</span>
          <span slot="answer">
            MetaMask will ask you to first approve the Pangolin app to interact with your tokens. Afterwards, you will then
            be able to confirm the transaction.
          </span>
        </FAQItem>
    
        <FAQItem>
          <span slot="question">Am I able to use my Ethereum wallet on Avalanche?</span>
          <span slot="answer">
            Yes - that is the power of Avalanche! It allows you to use your same wallet that you use on Ethereum.
          </span>
        </FAQItem>
    
        <FAQItem>
          <span slot="question">What is PNG?</span>
          <span slot="answer">
            PNG is the Pangolin governance token. Learn more about PNG governance <a
              class="hover:no-underline"
              href="/litepaper">here</a
            >.
          </span>
        </FAQItem>
    
        <FAQItem>
          <span slot="question">Why does my liquidity not show up on the pools page?</span>
          <span slot="answer">
            If you deposit your PGL tokens, your liquidity won’t show up on the pools page until you withdraw your PGL
            tokens. Technically, you are handing ownership of your liquidity to the staking pools and you can’t claim your
            liquidity until you withdraw your PGL tokens.
          </span>
        </FAQItem>
    
        <FAQItem>
          <span slot="question">Do I still get fees when staking PGL to mine PNG?</span>
          <span slot="answer">
            Yes. Fees are added to the pool and are extracted proportionally when you withdraw your PGL.
          </span>
        </FAQItem>
    
        <FAQItem>
          <span slot="question">
            Do I need to have the original SUSHI or UNI tokens from my wallet to claim the airdrop?
          </span>
          <span slot="answer">
            No. You just need the wallet that held SUSHI or UNI on December 7th, 2020. However, in order to claim the
            airdrop, you will only need one SUSHI or UNI.
          </span>
        </FAQItem>
      </div>
    </div>
  </article>
</section>
