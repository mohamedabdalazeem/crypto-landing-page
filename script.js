fetch('https://newsapi.org/v2/everything?q=crypto&sortBy=popularity&apiKey=14733153d5d0416d8505da08f0382577')
.then(res => res.json())
.then(data => {
  console.log(data.articles)
  let articles
  if(data.articles){
     articles = data.articles.sort(() => Math.random() - 0.5).slice(0, 3);
     renderArticles(articles)
  }else {
     articles = reservedArticles
     articles = data.articles.sort(() => Math.random() - 0.5).slice(0, 3);
     renderArticles(articles)
  }
  
})
.catch(error => {
  console.log(error)
  
});

const renderArticles = (articles) => {
  articles.forEach(article => {
    const {title, url, urlToImage} = article;
    const articleContainer = document.createElement('div');
    articleContainer.classList.add('article-container');

    const articleImage = document.createElement('img');
    if(urlToImage) {
      articleImage.src = urlToImage;
    }else {
      articleImage.src = './images/placeholder.jpg'
    }
    articleImage.alt = title;
    articleImage.classList.add('article-image');
    articleContainer.appendChild(articleImage);

    const articleTitle = document.createElement('h3');
    articleTitle.textContent = title;
    articleTitle.classList.add('article-title');
    articleContainer.appendChild(articleTitle);

    const articleLink = document.createElement('a');
    articleLink.href = url;
    articleLink.textContent = 'Read More';
    articleLink.classList.add('article-link');
    articleContainer.appendChild(articleLink);

    document.getElementById('news-feed').appendChild(articleContainer);
  });
}





const reservedArticles =
[
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "Tim Adams",
      "title": "Farage, Fox and rolling outrage: the inside story of GB news",
      "description": "It’s the channel that loves to whip up anger, where hosts promote conspiracy theories and scaremongering, and its editors are convinced it is the voice of the peopleIf you have not been watching GB News as much as I have in the past week, you may well not hol…",
      "url": "https://www.theguardian.com/media/2023/mar/11/farage-fox-and-rolling-outrage-the-inside-story-of-gb-news",
      "urlToImage": "https://i.guim.co.uk/img/media/d74971e19e91f7cf9809f02a137d5ce208e4cbf5/0_117_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=82443b3847313a448f7bb0ec322e02da",
      "publishedAt": "2023-03-11T15:42:32Z",
      "content": "If you have not been watching GB News as much as I have in the past week, you may well not hold the belief that a principal focus of the worlds current affairs is the village of Kegworth in Leicester… [+13432 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "Sophie Elmhirst",
      "title": "‘One billionaire at a time’: inside the Swiss clinics where the super-rich go for rehab",
      "description": "For the ultra-wealthy and the super-famous, regular therapy won’t doIf the sky is clear, it is possible to lean out of the windows of Paracelsus Recovery, a luxury rehabilitation clinic in Zurich, and gaze along the lake to the Alps in the distance. It is the…",
      "url": "https://www.theguardian.com/society/2023/feb/23/one-billionaire-at-a-time-swiss-clinics-super-rich-rehab-therapy-paracelsus-kusnacht",
      "urlToImage": "https://i.guim.co.uk/img/media/8b7b9deb5ce8eaff83d8f7e250f225b1cf1e5e2e/0_1_4996_2998/master/4996.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d5a4b345c02d24e513e506989179b58a",
      "publishedAt": "2023-02-23T06:00:46Z",
      "content": "If the sky is clear, it is possible to lean out of the windows of Paracelsus Recovery, a luxury rehabilitation clinic in Zurich, and gaze along the lake to the Alps in the distance. It is the kind of… [+28810 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "Elle Hunt",
      "title": "‘Don’t make Frasier best friends with Elon Musk!’ Writers and comics offer their reboot tips",
      "description": "The pompous, sherry-sipping, opera-loving Freudian will soon return. But with Niles out, Seattle abandoned and the star an avowed Trumpist, how can the beloved show recapture its magic? We asked the sitcom’s superfansTwo decades after his beloved character si…",
      "url": "https://www.theguardian.com/tv-and-radio/2023/feb/27/frasier-reboot-kelsey-grammer-elon-musk-seattle-niles-trumpist",
      "urlToImage": "https://i.guim.co.uk/img/media/82a1880cfc94d3a4d692727b7c814d80559b595f/161_79_2769_1662/master/2769.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=12c7106fbe747abca3dffc9008c83c2f",
      "publishedAt": "2023-02-27T06:00:42Z",
      "content": "Two decades after his beloved character signed off the airwaves, Kelsey Grammer is finally serving up second helpings of tossed salad and scrambled eggs. The Frasier revival is now in production, aft… [+9482 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "zsalfiti@insider.com (Zinya Salfiti)",
      "title": "FTX-linked Silvergate's shares plunge 48% after the crypto bank flags doubts about its survival",
      "description": "Silvergate shares tumbled almost 48% after the crypto lender delayed filing its annual report as it evaluates \"its ability to continue as a going concern\"",
      "url": "https://markets.businessinsider.com/news/stocks/silvergate-stock-price-ftx-crypto-bank-doubts-survival-delay-filing-2023-3",
      "urlToImage": "https://i.insider.com/64008e7bce4a630019955783?width=1200&format=jpeg",
      "publishedAt": "2023-03-02T14:48:23Z",
      "content": "Silvergate Capital's shares plunged over 48% Thursday after the FTX-linked lender delayed filling its annual report with the Securities and Exchange Commission and flagged doubts about its business s… [+2128 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "sbhaimiya@insider.com (Sawdah Bhaimiya)",
      "title": "FTX's former chief engineer hands over his $3.7 million vacation home to the US government as it's believed to be linked to his crimes, report says",
      "description": "Nishad Singh bought the $3.7 million vacation home in Washington state just weeks before the crypto exchange's collapse, Bloomberg reported.",
      "url": "https://www.businessinsider.com/ftx-ex-chief-engineer-nishad-singh-forfeits-vacation-home-2023-3",
      "urlToImage": "https://i.insider.com/63a4e04b83bbf400195ad5c1?width=1200&format=jpeg",
      "publishedAt": "2023-03-10T11:40:00Z",
      "content": "FTX's former chief engineer Nishad Singh relinquished a $3.7 million vacation home in the Pacific Northwest to the US government because prosecutors believe it's tied to his crimes, Bloomberg reporte… [+1879 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "Rob Davies",
      "title": "Football is firmly in gambling’s grip as it hypocritically clamps down on Ivan Toney | Rob Davies",
      "description": "Brentford striker faces a lengthy suspension but bookmakers own some clubs and sponsor the shirts of othersHaving owned up to multiple breaches of Football Association betting rules, the Brentford striker Ivan Toney faces a lengthy ban. The episode heralds a …",
      "url": "https://www.theguardian.com/football/2023/mar/02/football-gambling-hypocritically-clamps-down-ivan-toney",
      "urlToImage": "https://i.guim.co.uk/img/media/b725cf61d4ef12106f84b4896046364b2ae1d111/0_98_1561_937/master/1561.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=961a316b6a464abbe74da0c2f8b45fab",
      "publishedAt": "2023-03-02T08:00:04Z",
      "content": "Having owned up to multiple breaches of Football Association betting rules, the Brentford striker Ivan Toney faces a lengthy ban. The episode heralds a sad fall from grace for the talented 26-year-ol… [+7347 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "gglover@insider.com (George Glover)",
      "title": "Winklevoss twin says US crypto could be left behind by Asia when the next bull run explodes, thanks to the muddled crackdown",
      "description": "Gemini cofounder Cameron Winklevoss said, \"The next bull run is going to start in the East,\" as he warned the US had to embrace crypto or be left behind.",
      "url": "https://markets.businessinsider.com/news/currencies/crypto-cameron-winklevoss-bull-run-asia-sec-crackdown-left-behind-2023-2",
      "urlToImage": "https://i.insider.com/63f33dc95ca81e00185576ad?width=1200&format=jpeg",
      "publishedAt": "2023-02-20T10:25:17Z",
      "content": "The US crypto industry will be left behind if the country's markets regulator doesn't start laying out clearer rules on dealing with digital assets, according to Cameron Winklevoss.\r\nThe Gemini cofou… [+1892 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "jsor@insider.com (Jennifer Sor)",
      "title": "Authorities seek arrest of man who allegedly mined crypto under a high school and stole $18,000 of electricity",
      "description": "In December 2021, a town found a secret crypto mining operation underneath a Massachusetts high school.",
      "url": "https://markets.businessinsider.com/news/currencies/crypto-mining-operation-crime-secret-regulators-massachusetts-bitcoin-hash-2023-2",
      "urlToImage": "https://i.insider.com/63f91472ae0bf0001824a7e0?width=1200&format=jpeg",
      "publishedAt": "2023-02-24T19:53:59Z",
      "content": "Authorities are looking to arrest a former city employee in Massachusetts who set up a secret crypto mining operation under a high school two years ago, according to reports from local news outlets.\r… [+1311 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "mchittum@insider.com (Morgan Chittum)",
      "title": "FTX's collapse wiped out $200 billion in the total value of the cryptocurrency market, and it hit retail investors in emerging economies the hardest",
      "description": "Larger crypto investors \"tended to sell their coins right before steep price declines, while smaller investors were still buying,\" a new study found.",
      "url": "https://markets.businessinsider.com/news/currencies/crypto-market-retail-investors-ftx-sbf-emerging-economies-bitcoin-ethereum-2023-2",
      "urlToImage": "https://i.insider.com/63f4d2c25ca81e00185586e9?width=1200&format=jpeg",
      "publishedAt": "2023-02-21T15:48:35Z",
      "content": "Cryptocurrency markets lost $200 billion in value in the wake of FTX's downfall in November, a new report found, but losses weren't the same for investors across the board.\r\nRetail investors in emerg… [+1881 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "rhogg@insider.com (Ryan Hogg)",
      "title": "Binance expects to pay a fine to get regulators off its back after Kraken stumped up $30 million for just that",
      "description": "In an interview with the WSJ, Binance's chief strategy officer decried a \"very confusing time\" for the crypto industry, but that it would pay fines if necessary.",
      "url": "https://markets.businessinsider.com/news/currencies/binance-ready-for-fines-to-get-regulators-off-back-report-2023-2",
      "urlToImage": "https://i.insider.com/63b6d194bd71df0019b994cb?width=1200&format=jpeg",
      "publishedAt": "2023-02-16T11:30:05Z",
      "content": "Binance expects to pay a fine to settle an investigation by law enforcement and regulators, a report says, as one of its executives decried a \"very confusing time\" for the industry.\r\nIn an interview … [+2048 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "msmash",
      "title": "Hedge Fund Galois Closes After Half of Assets Trapped on Crypto Exchange FTX",
      "description": "A hedge fund that was one of the highest-profile victims of the FTX scandal when half its assets were trapped on the collapsed cryptocurrency exchange has decided to close and return its remaining money to investors. From a report: Galois Capital, which last …",
      "url": "https://news.slashdot.org/story/23/02/20/1345226/hedge-fund-galois-closes-after-half-of-assets-trapped-on-crypto-exchange-ftx",
      "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
      "publishedAt": "2023-02-20T15:00:00Z",
      "content": "Galois Capital, which last year had been managing about $200mn in assets and was one of the biggest crypto-focused quantitative funds, told investors that it had halted all trading and unwound all it… [+934 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "CNET"
      },
      "author": "Steven Musil",
      "title": "Meta to Wind Down NFT Support on Facebook, Instagram - CNET",
      "description": "Move comes less than a year after the company dove into the market for the digital assets.",
      "url": "https://www.cnet.com/personal-finance/crypto/meta-to-wind-down-nft-support-on-facebook-instagram/",
      "urlToImage": "https://www.cnet.com/a/img/resize/c771e53146e660614a896650b73655205552d702/hub/2019/08/29/584babb8-d3ec-4cc6-ae27-31684372d09c/facebook-instagram-logos-phones-2.jpg?auto=webp&fit=crop&height=630&width=1200",
      "publishedAt": "2023-03-13T23:24:00Z",
      "content": "Meta plans to end support for NFTs on Facebook and Instagram, less than a year after jumping on the digital asset bandwagon.\r\nThe move was announced Monday by Meta commerce and fintech lead Stephane … [+1979 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "msmash",
      "title": "Coinbase To Halt Trading of Binance USD for Not Meeting Listing Standards",
      "description": "Coinbase will suspend trading of Binance USD (BUSD) on March 13 at around noon EST. From a report: The crypto exchange said the decision was based on its most recent review of the stablecoin, which Paxos recently stopped issuing following an order from a New …",
      "url": "https://slashdot.org/story/23/02/27/1846235/coinbase-to-halt-trading-of-binance-usd-for-not-meeting-listing-standards",
      "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
      "publishedAt": "2023-02-27T21:20:00Z",
      "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "insider@insider.com (Carla Mozée)",
      "title": "Visa and Mastercard are reportedly pressing pause on new crypto partnerships in the wake of stunning industry collapses",
      "description": "Visa and Mastercard want to see improvement in the crypto market and the regulatory landscape, Reuters reports.",
      "url": "https://markets.businessinsider.com/news/currencies/visa-mastercard-pause-new-crypto-partnerships-industry-collapses-ftx-bankruptcy-2023-2",
      "urlToImage": "https://i.insider.com/60f01a63bb790e0018207b07?width=1200&format=jpeg",
      "publishedAt": "2023-02-28T18:26:27Z",
      "content": "Visa and Mastercard are holding off on forging new partnerships with crypto firms after a run of major collapses rattled faith in the industry, Reuters reported Tuesday. \r\nThe payment giants have eac… [+1253 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "gglover@insider.com (George Glover)",
      "title": "Binance boss CZ distances his exchange from the dollar-pegged token under fire from the SEC: 'That's not something we created'",
      "description": "The SEC has ordered Paxos to stop minting a Binance-branded token pegged to $1 as part of its ongoing crypto crackdown.",
      "url": "https://markets.businessinsider.com/news/currencies/binance-cz-changpeng-zhao-paxos-busd-stablecoin-sec-crypto-crackdown-2023-2",
      "urlToImage": "https://i.insider.com/63ecba2aeeb52e001886928d?width=1200&format=jpeg",
      "publishedAt": "2023-02-15T12:11:10Z",
      "content": "Binance chief Changpeng Zhao has downplayed the link between his exchange and a token carrying its branding that's currently under fire from the Securities and Exchange Commission.\r\nZhao, who's frequ… [+1740 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "gglover@insider.com (George Glover)",
      "title": "Crypto giant Tether faked key documents to set up bank accounts – and terrorists then used one of them to launder money, report says",
      "description": "Tether is a key player in crypto because it is the issuer of a dollar-pegged stablecoin with a $71 billion valuation.",
      "url": "https://markets.businessinsider.com/news/currencies/crypto-tether-stablecoin-issuer-money-laundering-turkish-terrorists-shell-companies-2023-3",
      "urlToImage": "https://i.insider.com/6405c031934c2c001802b4b2?width=1200&format=jpeg",
      "publishedAt": "2023-03-06T12:06:05Z",
      "content": "Crypto giant Tether used faked documents and shell companies to set up bank accounts in 2018  and one of those was then accessed by terrorists, according to a report.\r\nThe Wall Street Journal said Fr… [+2344 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "mchittum@insider.com (Morgan Chittum)",
      "title": "Crypto just lost 3 of its most important banking partners in a week. Here's what experts say the impact will be on the industry.",
      "description": "Insider asked crypto execs and various experts where the industry will go after a slew of critical partners have been wiped out.",
      "url": "https://markets.businessinsider.com/news/currencies/crypto-market-outlook-banking-crisis-expert-forecasts-svb-signature-silvergate-2023-3",
      "urlToImage": "https://i.insider.com/636edce2f5877200181c958f?width=1200&format=jpeg",
      "publishedAt": "2023-03-13T19:55:07Z",
      "content": "Crypto is facing a banking problem, with three of the industry's crucial financial partners shuttering in the past week.\r\nSilicon Valley Bank, Silvergate Capital, and Signature all closed, and each h… [+3685 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "mchittum@insider.com (Morgan Chittum)",
      "title": "A top exec at the world's largest crypto exchange breaks down the single-biggest risk for the market in 2023",
      "description": "Binance Chief Strategy Officer Patrick Hillmann explained how poor regulation will lead to increased crypto market volatility.",
      "url": "https://markets.businessinsider.com/news/currencies/crypto-market-outlook-binance-exec-exchange-sec-regulation-stablecoin-2023-2023-2",
      "urlToImage": "https://i.insider.com/63ed3b49dd6fcf00194a8a3e?width=1200&format=jpeg",
      "publishedAt": "2023-02-20T13:15:00Z",
      "content": "Cryptocurrency markets have made significant strides to recover from 2022' crises, with bitcoin soaring about 50% since the start of the year and the total crypto market value edging back above $1 tr… [+3595 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "BeauHD",
      "title": "Spotify Is Testing Playlists That Could Be Unlocked By NFT Holders",
      "description": "Unlocking exclusive access has been a long-held promise of a lot of NFT-based communities. And now, Spotify is helping some of them realize that claim with token-gated playlists. TechCrunch reports: According to a series of tweets by Kingship, a metaverse ban…",
      "url": "https://entertainment.slashdot.org/story/23/02/24/221241/spotify-is-testing-playlists-that-could-be-unlocked-by-nft-holders",
      "urlToImage": "https://a.fsdn.com/sd/topics/music_64.png",
      "publishedAt": "2023-02-25T02:02:00Z",
      "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "zsalfiti@insider.com (Zinya Salfiti)",
      "title": "Coinbase, Gemini and other big crypto names have rushed to ditch Silvergate after the bank warned of building troubles",
      "description": "Some of the biggest names in crypto have backed away from lender Silvergate Capital after the key digital-currency player warned it's having to evaluate its ability to survive.",
      "url": "https://markets.businessinsider.com/news/stocks/crypto-silvergate-coinbase-gemini-circle-ditch-lender-payments-financial-troubles-2023-3",
      "urlToImage": "https://i.insider.com/6401c05bbf7e0e001b7948aa?width=1200&format=jpeg",
      "publishedAt": "2023-03-03T11:16:36Z",
      "content": "Some of the biggest names in crypto have backed away from lender Silvergate Capital after the key digital-currency player warned it's having to evaluate its ability to survive.\r\nCoinbase, Paxos Trust… [+2889 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "insider@insider.com (Sindhu Sundar)",
      "title": "Nishad Singh is the latest member of Sam Bankman-Fried's inner circle to plead guilty in FTX case",
      "description": "Nishad Singh, a top engineer at FTX who helped launch the crypto exchange with Sam Bankman-Fried, is cooperating with federal prosecutors.",
      "url": "https://www.businessinsider.com/nishad-singh-launch-ftx-sam-bankman-fried-pleads-guilty-fraud-2023-2",
      "urlToImage": "https://i.insider.com/63fe60fec437990018867e96?width=1200&format=jpeg",
      "publishedAt": "2023-02-28T21:08:07Z",
      "content": "Nishad Singh is the latest top executive from Sam Bankman-Fried's crumbled crypto enterprise to plead guilty to criminal charges stemming from the fall of FTX. \r\nSingh pleaded guilty to six counts, i… [+2604 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "BeauHD",
      "title": "Vast Acquires Launcher In Quest To Build Artificial Gravity Space Stations",
      "description": "An anonymous reader quotes a report from TechCrunch: Vast Space, a company that emerged from stealth last September with the aim of building artificial gravity space stations in low Earth orbit, has acquired space tug startup Launcher, TechCrunch has exclusiv…",
      "url": "https://slashdot.org/story/23/02/23/0535205/vast-acquires-launcher-in-quest-to-build-artificial-gravity-space-stations",
      "urlToImage": "https://a.fsdn.com/sd/topics/iss_64.png",
      "publishedAt": "2023-02-23T13:00:00Z",
      "content": "An anonymous reader quotes a report from TechCrunch: Vast Space, a company that emerged from stealth last September with the aim of building artificial gravity space stations in low Earth orbit, has … [+1888 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "msmash",
      "title": "SEC Proposal Could Bar Investment Advisers From Keeping Assets at Crypto Firms",
      "description": "The U.S. Securities and Exchange Commission (SEC) proposed a rule that would effectively require registered investment advisors (RIA) to go outside the crypto industry for storing digital assets, according to its first formal policy push that leans heavily in…",
      "url": "https://news.slashdot.org/story/23/02/15/1933242/sec-proposal-could-bar-investment-advisers-from-keeping-assets-at-crypto-firms",
      "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
      "publishedAt": "2023-02-15T22:00:00Z",
      "content": "The rule, approved in a 4-1 vote by the SEC on Wednesday, would expand the agency's existing regulations that say an investment adviser needs to keep customers' money and securities with a \"qualified… [+993 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "Kalyeena Makortoff Banking correspondent",
      "title": "Credit Suisse: what is happening at Swiss bank and should we be worried?",
      "description": "Plunge in bank’s share price adds to fears over weaknesses in banking sector following collapse of SVB<ul><li>Credit Suisse shares fall to record low as top investor rules out more funding</li></ul>Panic has gripped global banking stocks for the second time i…",
      "url": "https://www.theguardian.com/business/2023/mar/15/credit-suisse-what-is-happening-at-swiss-bank-and-should-we-be-worried",
      "urlToImage": "https://i.guim.co.uk/img/media/8843af70d9582822f1be7f1ae47000e789768f0f/0_0_7544_4527/master/7544.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0665c1dc9cd2d4955e08a6b6f064ae26",
      "publishedAt": "2023-03-15T17:02:20Z",
      "content": "Panic has gripped global banking stocks for the second time in a week: the wave of fear prompted by the collapse of Californias Silicon Valley Bank (SVB) has been followed by fresh jitters over the s… [+5986 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "mchittum@insider.com (Morgan Chittum)",
      "title": "Cathie Wood's Ark Invest scoops up $13 million in Coinbase stock, its largest purchase of the crypto exchange this year",
      "description": "The famed money manager currently holds $18 billion worth of Coinbase stock, with a 4.58% stake in the crypto company.",
      "url": "https://markets.businessinsider.com/news/stocks/coinbase-stock-price-cathie-wood-ark-invest-arkk-crypto-bull-2023-2",
      "urlToImage": "https://i.insider.com/618d33d034224a00111fdd61?width=1200&format=jpeg",
      "publishedAt": "2023-02-23T14:59:54Z",
      "content": "Cathie Wood's Ark Invest loaded up on $13 million worth of Coinbase stock on Wednesday, notching its largest single-day buy in the cryptocurrency exchange so far this year.\r\nThe famed money manager p… [+1306 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "BeauHD",
      "title": "FTX Ex-Engineering Chief Nishad Singh Pleads Guilty To Criminal Charges",
      "description": "FTX ex-engineering head Nishad Singh pleaded guilty to criminal charges in New York on Tuesday, becoming the latest member of Sam Bankman-Fried's former leadership team to agree to a deal. CNBC reports: The six charges against Singh include conspiracy to comm…",
      "url": "https://yro.slashdot.org/story/23/02/28/2217243/ftx-ex-engineering-chief-nishad-singh-pleads-guilty-to-criminal-charges",
      "urlToImage": "https://a.fsdn.com/sd/topics/crime_64.png",
      "publishedAt": "2023-02-28T23:00:00Z",
      "content": "The six charges against Singh include conspiracy to commit securities fraud, conspiracy to commit money laundering and conspiracy to violate campaign finance laws. FTX spiraled into bankruptcy in Nov… [+993 chars]"
  },
  {
      "source": {
          "id": "engadget",
          "name": "Engadget"
      },
      "author": "Steve Dent",
      "title": "US regulators will protect all deposits at Silicon Valley Bank",
      "description": "US regulators have announced that they're taking action to \"fully\" protect all deposits at Silicon Valley Bank (SVB), CNBC has reported. The institution is home to a large number of startups and established companies like Roku and Etsy, which will have full a…",
      "url": "https://www.engadget.com/us-regulators-will-protect-all-deposits-at-silicon-valley-bank-045837677.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/GG55.lJRrhAKn81IRfy7Sg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/97ee76a0-c152-11ed-bd79-862a0131fd8d.cf.jpg",
      "publishedAt": "2023-03-13T04:58:37Z",
      "content": "US regulators have announced that they're taking action to \"fully\" protect all deposits at Silicon Valley Bank (SVB), CNBC has reported. The institution is home to a large number of startups and esta… [+2436 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "prosen@insider.com (Phil Rosen)",
      "title": "Binance continues to get more popular with Sam Bankman-Fried's FTX out of the picture, despite increased regulatory scrutiny",
      "description": "The world's largest crypto exchange extended its dominance for a fourth consecutive month, with its market share increasing to 61.8% in February.",
      "url": "https://markets.businessinsider.com/news/currencies/binance-crypto-market-share-sam-bankman-frieds-ftx-investing-exchange-2023-3",
      "urlToImage": "https://i.insider.com/6408a96bfe06040019bf5796?width=1200&format=jpeg",
      "publishedAt": "2023-03-08T16:40:40Z",
      "content": "Binance, the world's largest crypto exchange by trading volume, continues to expand its dominance since FTX collapsed in November.\r\nAccording to data from CryptoCompare cited by CoinDesk, Binance inc… [+1476 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Crypto-mining scheme run from US school crawl space",
      "description": "Police were called after a janitor noticed electrical wires, ductwork and computers that looked amiss.",
      "url": "https://www.bbc.co.uk/news/world-us-canada-64767178",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/18622/production/_128747899_crypto.jpg",
      "publishedAt": "2023-02-25T00:41:31Z",
      "content": "A town official was running an illegal cryptocurrency mining operation from a crawl space under a school in the US state of Massachusetts, police say.\r\nNadeam Nahas, 39, who was an assistant faciliti… [+1974 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "insider@insider.com (Carla Mozée)",
      "title": "US stocks end lower to cap off losing month of February",
      "description": "The S&P 500 ended February in the red as inflation remains stubbornly high for the Fed's comfort level.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-sp500-february-dow-nasdaq-fed-inflation-2023-2",
      "urlToImage": "https://i.insider.com/6138a6c62534ab0018534202?width=1200&format=jpeg",
      "publishedAt": "2023-02-28T21:07:37Z",
      "content": "Stocks ended Tuesday's session and February with losses, as investors during the month scrambled to reassess how high the Federal Reserve will take interest rates as inflationary pressures remain a p… [+1905 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "ktangalakislippert@insider.com (Katherine Tangalakis-Lippert)",
      "title": "Signature Bank shut down by regulators",
      "description": "The crypto-friendly Signature Bank was closed on Sunday afternoon in an attempt to control a burgeoning financial crisis.",
      "url": "https://www.businessinsider.com/signature-bank-shut-down-by-regulators-depositors-bailed-out-2023-3",
      "urlToImage": "https://i.insider.com/640e5cde340fa00018fda3f3?width=1200&format=jpeg",
      "publishedAt": "2023-03-12T23:34:35Z",
      "content": "In an attempt to prevent a spreading financial crisis, regulators shut down the crypto-friendly Signature Bank, New York, on Sunday, promising to make its depositors whole.\r\nSignature Bank's closure … [+3291 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "msmash",
      "title": "Biden Budget Plan Would Close Crypto Tax Loss Harvesting Loophole",
      "description": "U.S. President Joe Biden's proposed budget, set to be unveiled Thursday, will include a provision to close tax loss harvesting on crypto transactions. From a report: A White House official confirmed that the budget will include a tax provision intended to red…",
      "url": "https://news.slashdot.org/story/23/03/09/1020238/biden-budget-plan-would-close-crypto-tax-loss-harvesting-loophole",
      "urlToImage": "https://a.fsdn.com/sd/topics/money_64.png",
      "publishedAt": "2023-03-09T14:00:00Z",
      "content": "This is a good step in the right direction. People keep talking about all these loopholes allowing companies to not pair their taxes because they've bribed elected officials, at least this would cut … [+659 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Robinhood says SEC issued subpoena related to crypto operations - Reuters",
      "description": "Robinhood says SEC issued subpoena related to crypto operations  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2xlZ2FsL3JvYmluaG9vZC1zYXlzLXNlYy1pc3N1ZWQtc3VicG9lbmEtcmVsYXRlZC1jcnlwdG8tb3BlcmF0aW9ucy0yMDIzLTAyLTI3L9IBAA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-02-27T23:45:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Silvergate suspends crypto payments network; shares fall after-hours - Reuters.com",
      "description": "Silvergate suspends crypto payments network; shares fall after-hours  Reuters.com",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiemh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvY3VycmVuY2llcy9zaWx2ZXJnYXRlLXN1c3BlbmRzLWNyeXB0by1wYXltZW50cy1uZXR3b3JrLXNoYXJlcy1mYWxsLWFmdGVyLWhvdXJzLTIwMjMtMDMtMDQv0gEA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-04T00:19:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "engadget",
          "name": "Engadget"
      },
      "author": "Jon Fingas",
      "title": "SEC charges Terraform Labs over alleged 'multi-biillion dollar' crypto fraud",
      "description": "It's not just international police trying to hold Terraform Labs accountable for a collapse that took $40 billion from investors. The Securities and Exchange Commission has charged Terraform and its CEO Do Kwon with securities fraud for allegedly running a \"m…",
      "url": "https://www.engadget.com/sec-charges-terraform-and-ceo-with-fraud-145347680.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/Z8AB8xycUZKckC7.cFahvg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-02/7692d560-aec8-11ed-beb7-8082fa266f7d.cf.jpg",
      "publishedAt": "2023-02-17T14:53:47Z",
      "content": "It's not just international police trying to hold Terraform Labs accountable for a collapse that took $40 billion from investors. The Securities and Exchange Commission has charged Terraform and its … [+1701 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Crypto exchange Binance to halt sterling transfers - Reuters",
      "description": "Crypto exchange Binance to halt sterling transfers  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2ZpbmFuY2UvY3J5cHRvLWV4Y2hhbmdlLWJpbmFuY2UtaGFsdC1zdGVybGluZy10cmFuc2ZlcnMtMjAyMy0wMy0xNC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-14T10:47:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "JPMorgan ending banking relationship with crypto exchange Gemini ... - Reuters",
      "description": "JPMorgan ending banking relationship with crypto exchange Gemini ...  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2ZpbmFuY2UvanBtb3JnYW4tZW5kaW5nLWJhbmtpbmctcmVsYXRpb25zaGlwLXdpdGgtY3J5cHRvLWV4Y2hhbmdlLWdlbWluaS1zb3VyY2UtMjAyMy0wMy0wOC_SAQA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-08T19:44:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "U.S. losing revenue from crypto mining fueled by federal gas ... - Reuters",
      "description": "U.S. losing revenue from crypto mining fueled by federal gas ...  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvdXMtbG9zaW5nLXJldmVudWUtY3J5cHRvLW1pbmluZy1mdWVsZWQtYnktZmVkZXJhbC1nYXMtd2F0Y2hkb2ctcmVwb3J0LTIwMjMtMDMtMDIv0gEA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-02T19:36:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Cybercriminals' crypto platform ChipMixer taken down, says Europol - Reuters",
      "description": "Cybercriminals' crypto platform ChipMixer taken down, says Europol  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3liZXJjcmltaW5hbHMtY3J5cHRvLXBsYXRmb3JtLWNoaXBtaXhlci10YWtlbi1kb3duLXNheXMtZXVyb3BvbC0yMDIzLTAzLTE1L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-15T14:03:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Gizmodo.com"
      },
      "author": "Lucas Ropek",
      "title": "In Yet Another Crypto Attack, Hackers Pillage $197 Million From Euler Finance",
      "description": "Unidentified cybercriminals managed to boost nearly $200 million from the decentralized finance lender Euler Finance on Monday. The attack, which stole millions in crypto assets like DAI and USD Coin, is being hailed as the biggest crypto hack of the year so …",
      "url": "https://gizmodo.com/euler-finance-197-million-crypto-hacked-stolen-ether-1850220482",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6e3b524f845f7e44f126728eec19419a.jpg",
      "publishedAt": "2023-03-13T21:10:00Z",
      "content": "Unidentified cybercriminals managed to boost nearly $200 million from the decentralized finance lender Euler Finance on Monday. The attack, which stole millions in crypto assets like DAI and USD Coin… [+1989 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Gizmodo.com"
      },
      "author": "Mack DeGeurin",
      "title": "El Salvador Is Planning a 'Bitcoin Embassy' in Texas After Losing Tens of Millions on Crypto",
      "description": "El Salvador, which has already lost tens of millions of taxpayer dollars on its authoritarian millennial president’s beleaguered effort to embrace cryptocurrencies, now says it plans to open a “bitcoin embassy” in Texas. The Central American country’s continu…",
      "url": "https://gizmodo.com/bitcoin-price-el-salvador-embassy-texas-crypto-crash-1850118217",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ccb1cf72839bb2d47936bf0eadf47da0.jpg",
      "publishedAt": "2023-02-15T18:03:53Z",
      "content": "El Salvador, which has already lost tens of millions of taxpayer dollars on its authoritarian millennial presidents beleaguered effort to embrace cryptocurrencies, now says it plans to open a bitcoin… [+2879 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Crypto exchange Coinbase stops initiating payments to or from ... - Reuters",
      "description": "Crypto exchange Coinbase stops initiating payments to or from ...  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMid2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvY3VycmVuY2llcy9jcnlwdG8tZXhjaGFuZ2UtY29pbmJhc2Utc3RvcHMtaW5pdGlhdGluZy1wYXltZW50cy1vci1zaWx2ZXJnYXRlLTIwMjMtMDMtMDIv0gEA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-02T14:00:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Crypto stocks slide after Silvergate decides to shut down - Reuters.com",
      "description": "Crypto stocks slide after Silvergate decides to shut down  Reuters.com",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvLXN0b2Nrcy1zbGlkZS1hZnRlci1zaWx2ZXJnYXRlLWRlY2lkZXMtc2h1dC1kb3duLTIwMjMtMDMtMDkv0gEA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-09T11:55:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "Alex Hern Technology editor",
      "title": "Near 50% fall in Silvergate’s shares over FTX exposure prompts survival doubts",
      "description": "Stock price of crypto-focused US bank plummeted in Thursday trading and it is assessing its ability to keep goingThe share price of cryptocurrency-focused US bank Silvergate plummeted by nearly 50% in early trading on Thursday after fresh revelations about th…",
      "url": "https://www.theguardian.com/technology/2023/mar/02/near-50-per-cent-fall-in-silvergate-shares-over-ftx-exposure-prompts-survival-doubts",
      "urlToImage": "https://i.guim.co.uk/img/media/80cbc9fe9d08482d4bd817d00996cb7931d1b177/0_52_3888_2333/master/3888.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d655d90f79dbd960c66ce45a2b4d4646",
      "publishedAt": "2023-03-02T17:10:12Z",
      "content": "The share price of cryptocurrency-focused US bank Silvergate plummeted by nearly 50% in early trading on Thursday after fresh revelations about the extent of its exposure to the collapse of crypto ex… [+3079 chars]"
  },
  {
      "source": {
          "id": "wired",
          "name": "Wired"
      },
      "author": "Joel Khalili",
      "title": "Bitcoin Miners Are Playing a High-Stakes Game of Chicken",
      "description": "In the bitter crypto winter, companies are making deep cuts to survive a new challenge.",
      "url": "https://www.wired.com/story/bitcoin-mining-halving-crypto-winter/",
      "urlToImage": "https://media.wired.com/photos/63eede2c5b4882ebafffb0e1/191:100/w_1280,c_limit/Biz-data-mining-934468788.jpg",
      "publishedAt": "2023-02-17T12:00:00Z",
      "content": "Its kind of a last-man-standing situation, says Fred Thiel, CEO of US-based Marathon Digital Holdings. His crypto-mining company, among the largest in the world, has found itselflike the rest of the … [+3142 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Crypto lender Silvergate's descent into voluntary liquidation - Reuters",
      "description": "Crypto lender Silvergate's descent into voluntary liquidation  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvLWxlbmRlci1zaWx2ZXJnYXRlcy1kZXNjZW50LWludG8tdm9sdW50YXJ5LWxpcXVpZGF0aW9uLTIwMjMtMDMtMDkv0gEA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-09T13:32:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Gizmodo.com"
      },
      "author": "Kyle Barr",
      "title": "Binance Stops Deposits and Withdrawals for UK Customers",
      "description": "On Monday, Binance said it would suspend withdrawals and deposits for anybody using UK currency. The news came after the world’s largest crypto exchange’s banking partner in the UK, Paysafe, said it was abandoning crypto, at least as far as Binance was concer…",
      "url": "https://gizmodo.com/binance-crypto-bitcoin-withdrawals-1850223376",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/01d4030a8f3067ae8c7965f8aa94caff.jpg",
      "publishedAt": "2023-03-14T13:37:00Z",
      "content": "On Monday, Binance said it would suspend withdrawals and deposits for anybody using UK currency. The news came after the worlds largest crypto exchanges banking partner in the UK, Paysafe, said it wa… [+2065 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "Kalyeena Makortoff Banking correspondent",
      "title": "City regulator joins Met in raids on suspected crypto ATM operations",
      "description": "Joint investigation with police in London follows similar one in Leeds as part of wider crackdown on sectorThe City watchdog and local police have raided several sites in east London suspected of housing illegal ATMs distributing cryptocurrencies, as part of …",
      "url": "https://www.theguardian.com/technology/2023/mar/08/city-regulator-met-raids-suspected-crypto-atm-operations-police-london-leeds-crackdown-fca",
      "urlToImage": "https://i.guim.co.uk/img/media/f2e32f3b1abdf154154e4d021b13facc51d838b5/0_0_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=84b77443e4ec015e06f4a4ef30c9b2f5",
      "publishedAt": "2023-03-08T12:22:28Z",
      "content": "The City watchdog and local police have raided several sites in east London suspected of housing illegal ATMs distributing cryptocurrencies, as part of a widening crackdown on the sector.\r\nThe joint … [+1974 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "India's push to regulate crypto gains IMF, U.S. support at G20 - Reuters.com",
      "description": "India's push to regulate crypto gains IMF, U.S. support at G20  Reuters.com",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiaWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2ZpbmFuY2UvaW5kaWFzLXB1c2gtcmVndWxhdGUtY3J5cHRvLWdhaW5zLWltZi11cy1zdXBwb3J0LWcyMC0yMDIzLTAyLTI1L9IBAA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-02-25T10:46:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Gizmodo.com"
      },
      "author": "Lauren Leffer",
      "title": "FTX Japan Unfreezes Funds, Resumes Customer Withdrawals",
      "description": "Blockchain investors in Japan rejoice. The Japanese subsidiary of bankrupt crypto exchange FTX announced that customers could begin withdrawing funds from their accounts beginning on Tuesday, after a months long freeze. FTX Japan customers are among the first…",
      "url": "https://gizmodo.com/ftx-crypto-sbf-sam-bankman-fried-1850139394",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/56967993b9f677e8da5c2622a65f9191.jpg",
      "publishedAt": "2023-02-21T15:25:00Z",
      "content": "Blockchain investors in Japan rejoice. The Japanese subsidiary of bankrupt crypto exchange FTX announced that customers could begin withdrawing funds from their accounts beginning on Tuesday, after a… [+2592 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Tough rules needed to 'detoxify' crypto market, says UK financial ... - Reuters",
      "description": "Tough rules needed to 'detoxify' crypto market, says UK financial ...  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvdG91Z2gtcnVsZXMtbmVlZGVkLWRldG94aWZ5LWNyeXB0by1tYXJrZXQtc2F5cy11ay1maW5hbmNpYWwtd2F0Y2hkb2ctMjAyMy0wMy0wOC_SAQA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-08T18:30:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "John Naughton",
      "title": "Misplaced fears of an ‘evil’ ChatGPT obscure the real harm being done | John Naughton",
      "description": "Our tendency to humanise large language models and AI is daft – let’s worry about corporate grabs and environmental damageOn 14 February, Kevin Roose, the New York Times tech columnist, had a two-hour conversation with Bing, Microsoft’s ChatGPT-enhanced searc…",
      "url": "https://www.theguardian.com/commentisfree/2023/mar/04/misplaced-fears-of-an-evil-chatgpt-obscure-the-real-harm-being-done",
      "urlToImage": "https://i.guim.co.uk/img/media/5196334e0b85f6d026189f24a7e4f9c45b2ef623/99_32_3483_2090/master/3483.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tb3BpbmlvbnMucG5n&enable=upscale&s=59e1cd3b12c4979976414a6b441e872c",
      "publishedAt": "2023-03-04T16:00:28Z",
      "content": "On 14 February, Kevin Roose, the New York Times tech columnist, had a two-hour conversation with Bing, Microsofts ChatGPT-enhanced search engine. He emerged from the experience an apparently changed … [+4919 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Gizmodo.com"
      },
      "author": "Kyle Barr",
      "title": "OpenAI Says It Won't Steal Data From Those Who Use Its New API to Train ChatGPT",
      "description": "OpenAI, the makers of DALL-E 2 and ChatGPT, has practically become the tech world’s go-to for implementing AI. On Wednesday the company announce it’s making it easier for developers to jam large language models down the pipe of every app and site who wants it…",
      "url": "https://gizmodo.com/open-ai-chatgpt-api-bing-google-ai-1850174901",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3887403f8a401bd4e257dd3d86f6df14.jpg",
      "publishedAt": "2023-03-01T21:40:00Z",
      "content": "OpenAI, the makers of DALL-E 2 and ChatGPT, has practically become the tech worlds go-to for implementing AI. On Wednesday the company announce its making it easier for developers to jam large langua… [+5841 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "David Goldman",
      "title": "What's the next Silicon Valley Bank — and how can the US prevent more chaos?",
      "description": "Silicon Valley Bank failed in rapid, stunning fashion Friday. This week, the tech and banking sector are growing skittish about the next shoe to drop.",
      "url": "https://www.cnn.com/2023/03/12/investing/silicon-valley-bank-bailout/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230312095700-02-silicon-valley-bank-031223.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-03-12T14:40:57Z",
      "content": "Silicon Valley Bank failed in rapid, stunning fashion Friday. This week, the tech and banking sector are growing skittish about the next shoe to drop.\r\nWhat took place Friday was an old-fashioned ban… [+4773 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Gizmodo.com"
      },
      "author": "Nikki Main",
      "title": "Sam Bankman-Fried's Lawyers Say They May Need to Delay Trial",
      "description": "Lawyers representing FTX founder Sam Bankman-Fried announced on Wednesday that his October trial might need to be delayed. The lawyers said they were still waiting for important documents to be handed over and claimed the hold-up could hinder their ability to…",
      "url": "https://gizmodo.com/sam-bankman-fried-lawyers-may-need-to-delay-trial-ftx-1850207782",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/4a026231960f26d648912ea607c7da8c.jpg",
      "publishedAt": "2023-03-09T17:50:00Z",
      "content": "Lawyers representing FTX founder Sam Bankman-Fried announced on Wednesday that his October trial might need to be delayed. The lawyers said they were still waiting for important documents to be hande… [+2762 chars]"
  },
  {
      "source": {
          "id": "engadget",
          "name": "Engadget"
      },
      "author": "Mat Smith",
      "title": "The Morning After: Netflix wins six Oscars",
      "description": "Netflix took home six Oscars last night, besting all the other streaming services, but a single film, Everything, Everywhere All at Once, dominated the biggest awards. It claimed three of four of the acting awards, along with Best Director and Best Picture.Ne…",
      "url": "https://www.engadget.com/the-morning-after-netflix-wins-six-oscars-111543725.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/_2DZ2YVThX3EZZ5fKLz59Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-06/d79853b0-af45-11ea-bf29-431281528203.cf.jpg",
      "publishedAt": "2023-03-13T11:15:43Z",
      "content": "Netflix took home six Oscars last night, besting all the other streaming services, but a single film, Everything, Everywhere All at Once, dominated the biggest awards. It claimed three of four of the… [+4125 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "IMF flags debt disagreements, says banning crypto should not be off ... - Reuters.com",
      "description": "IMF flags debt disagreements, says banning crypto should not be off ...  Reuters.com",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2ltZi1mbGFncy1kZWJ0LWRpc2FncmVlbWVudHMtc2F5cy1iYW5uaW5nLWNyeXB0by1zaG91bGQtbm90LWJlLW9mZi10YWJsZS0yMDIzLTAyLTI1L9IBAA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-02-25T03:45:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Allison Morrow",
      "title": "Crypto-friendly lender Silvergate collapses",
      "description": "Crypto-focused lender Silvergate said it is winding down operations and will liquidate the bank after being financially pummeled by turmoil in digital assets.",
      "url": "https://www.cnn.com/2023/03/08/business/silvergate-winds-down-crypto/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230308164506-01-silvergate-bank-0205-restricted.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-03-08T21:57:46Z",
      "content": "Crypto-focused lender Silvergate said it is winding down operations and will liquidate the bank after being financially pummeled by turmoil in digital assets.\r\nIn light of recent industry and regulat… [+559 chars]"
  },
  {
      "source": {
          "id": "engadget",
          "name": "Engadget"
      },
      "author": "Will Shanklin",
      "title": "NBA legend Paul Pierce settles with SEC over allegedly false crypto statements",
      "description": "NBA Hall of Famer Paul “The Truth” Pierce agreed to pay $1.4 million to settle charges from the Securities and Exchange Commission over a cryptocurrency he promoted on Twitter. The SEC charged Pierce with making false and misleading promotional statements abo…",
      "url": "https://www.engadget.com/nba-legend-paul-pierce-settles-with-sec-over-allegedly-false-crypto-statements-192355116.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/xPk0ZyojX2_CToHutUpPgg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-02/fa6d5350-aef6-11ed-bfdf-ac65c3ab4869.cf.jpg",
      "publishedAt": "2023-02-17T19:23:55Z",
      "content": "NBA Hall of Famer Paul The Truth Pierce agreed to pay $1.4 million to settle charges from the Securities and Exchange Commission over a cryptocurrency he promoted on Twitter. The SEC charged Pierce w… [+1423 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Lauren del Valle",
      "title": "Judge concerned Sam Bankman-Fried is too 'technologically savvy,' could find a way around tech restrictions",
      "description": "United States District Judge Lewis Kaplan indicated at a hearing Friday he might modify FTX founder Sam Bankman-Fried's bail conditions, but only after attorneys further tighten the restrictions on Bankman-Fried's access to technology.",
      "url": "https://www.cnn.com/2023/03/10/business/sam-bankman-fried-bail-technology-restrictions/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230310131219-01-sam-bankman-fried-0216.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-03-10T19:23:19Z",
      "content": "United States District Judge Lewis Kaplan indicated at a hearing Friday he might modify FTX founder Sam Bankman-Frieds bail conditions, but only after attorneys further tighten the restrictions on Ba… [+1905 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Crypto stocks fall as Silvergate crisis deepens - Reuters",
      "description": "Crypto stocks fall as Silvergate crisis deepens  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiW2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvLXN0b2Nrcy1mYWxsLXNpbHZlcmdhdGUtY3Jpc2lzLWRlZXBlbnMtMjAyMy0wMy0wNi_SAQA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-06T11:46:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
      "title": "Short-sellers rake in $780 million betting against Silvergate as the crypto-friendly bank closes its doors",
      "description": "Bets against Silvergate have paid off, as shares sink 45% after the embattled crypto-friendly bank said it will shut down its operations.",
      "url": "https://markets.businessinsider.com/news/stocks/crypto-silvergate-short-sellers-780-million-gain-bank-failure-2023-3",
      "urlToImage": "https://i.insider.com/6409ad7a75a7270019db0bb7?width=1200&format=jpeg",
      "publishedAt": "2023-03-09T11:03:03Z",
      "content": "Short-sellers have raked in millions of dollars in from the mounting troubles at embattled crypto-friendly bank Silvergate, which has just said it plans to close down.\r\nInvestors betting against Silv… [+1557 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "UK regulator cracks down on illicit London crypto ATMs - Reuters",
      "description": "UK regulator cracks down on illicit London crypto ATMs  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VrL3VrLXJlZ3VsYXRvci1jcmFja3MtZG93bi1pbGxpY2l0LWxvbmRvbi1jcnlwdG8tYXRtcy0yMDIzLTAzLTA4L9IBAA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-08T13:46:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "gglover@insider.com (George Glover)",
      "title": "Crypto bank Silvergate says it'll shut down as the market meltdown claims its 1st mainstream casualty",
      "description": "The crypto-friendly financial institution has felt the brunt of rising interest rates and FTX's collapse.",
      "url": "https://markets.businessinsider.com/news/stocks/crypto-crash-silvergate-bank-shut-down-liquidate-stock-market-news-2023-3",
      "urlToImage": "https://i.insider.com/6409a36275a7270019db0b23?width=1200&format=jpeg",
      "publishedAt": "2023-03-09T09:27:16Z",
      "content": "Silvergate Bank has become one of the first mainstream victims of the crypto crash, saying that it plans to voluntarily write off its assets and wind itself down.\r\n\"In light of recent industry and re… [+1844 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "zsalfiti@insider.com (Zinya Salfiti)",
      "title": "Blame Silvergate's collapse on risky crypto, Elizabeth Warren says - but others slam 'arsonist and firefighter' crackdowns. 10 top experts on what pushed the bank to fail.",
      "description": "Silvergate has failed, and debate is raging over whether volatile crypto or usual banking risks are to blame. Here's what Elizabeth Warren, Mike Novogratz and 8 other top voices had to say.",
      "url": "https://markets.businessinsider.com/news/currencies/crypto-silvergate-bank-collapse-elizabeth-warren-novogratz-cz-binance-fix-2023-3",
      "urlToImage": "https://i.insider.com/6409fb0b75a7270019db14bd?width=1200&format=jpeg",
      "publishedAt": "2023-03-09T18:22:33Z",
      "content": "Silvergate Capital, the mainstream bank that was once a key player in bridging a gap in the cryptocurrency industry, decided to write off its assets and close down Wednesday, only days after flagging… [+3769 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "ddefrancesco@businessinsider.com (Dan DeFrancesco)",
      "title": "More pain for the crypto industry means a chance for startups to pivot",
      "description": "The crypto market isn't out of the woods just yet, according to a top Goldman Sachs executive. If that's the case, it's a chance for a rethink.",
      "url": "https://www.businessinsider.com/crypto-startups-could-pivot-to-a-new-business-model-2023-3",
      "urlToImage": "https://i.insider.com/63e252f127e5db0018ee80f6?width=1200&format=jpeg",
      "publishedAt": "2023-03-07T12:30:00Z",
      "content": "Hello there! Dan DeFrancesco in NYC, but I can't stop watching this video of a car ramming into a booth where two podcasters were recording (no one got seriously hurt). Check it out here.\r\nWe've also… [+6189 chars]"
  },
  {
      "source": {
          "id": "wired",
          "name": "Wired"
      },
      "author": "Lauren Goode",
      "title": "Silicon Valley Has a FOMO Problem",
      "description": "Plus: Uber makes it easier to get picked up at the airport, Google adds new bio-authentication features to Android, and a herd of goats gets gone.",
      "url": "https://www.wired.com/story/silicon-valley-fomo-spotify-tiktok/",
      "urlToImage": "https://media.wired.com/photos/640bb67e15aacf925a9f462e/191:100/w_1280,c_limit/Silicon-Valley-FOMO-Gear-GettyImages-1348269600.jpg",
      "publishedAt": "2023-03-11T14:00:00Z",
      "content": "Good artists borrow, great artists steal feature ideas from the app du jour.\r\nThat might as well be the collective mantra of consumer tech companies, some of which have a well documented copycat habi… [+5609 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "Graeme Wearden",
      "title": "Crypto bank Silvergate to shut down after FTX turmoil; UK house prices ‘on downward trajectory’ – business live",
      "description": "Rolling coverage of the latest economic and financial news<ul><li>UK house prices could be stabilising despite falls, say surveyors</li></ul>UK house prices “remain on a downward trajectory”, according to a new poll of property surveyors released this morning…",
      "url": "https://www.theguardian.com/business/live/2023/mar/09/crypto-bank-silvergate-shut-down-uk-house-prices-harbour-energy-wandisco-business-live",
      "urlToImage": "https://i.guim.co.uk/img/media/80cbc9fe9d08482d4bd817d00996cb7931d1b177/0_68_3888_2333/master/3888.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=e7e26b47ea8635c5b8084c00965ddd83",
      "publishedAt": "2023-03-09T07:40:54Z",
      "content": "GB News losses rise to over £30m\r\nPhotograph: GB News/PA\r\nGB News saw losses balloon to more than £30m last year, as staff costs surged as it signed new talent and advertisers remained wary of the ri… [+6797 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "Edward Helmore and agencies",
      "title": "USD Coin value falls after revealing $3.3bn held at Silicon Valley Bank",
      "description": "The stablecoin fell as low as $0.87 as Circle broke the news that its reserves were at the collapsed lenderThe value of the world’s fifth-biggest cryptocurrency, USD Coin (USDC), slumped to an all-time low on Saturday after Circle, the US firm behind the coin…",
      "url": "https://www.theguardian.com/technology/2023/mar/11/usd-coin-depeg-silicon-valley-bank-collapse",
      "urlToImage": "https://i.guim.co.uk/img/media/a245954fba260e7fb9a7ad3fea793cf0c89fa5a0/0_173_5184_3110/master/5184.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7a653fdfe32d834f1bc06505f4e1113e",
      "publishedAt": "2023-03-11T17:03:35Z",
      "content": "The value of the worlds fifth-biggest cryptocurrency, USD Coin (USDC), slumped to an all-time low on Saturday after Circle, the US firm behind the coin, revealed that $3.3bn of the reserves backing i… [+4920 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "msmash",
      "title": "Crypto Companies Behind Tether Used Falsified Documents and Shell Companies To Get Bank Accounts",
      "description": "In late 2018, the companies behind the most widely traded cryptocurrency were struggling to maintain their access to the global banking system. Some of their backers turned to shadowy intermediaries, falsified documents and shell companies to get back in, doc…",
      "url": "https://slashdot.org/story/23/03/03/1834258/crypto-companies-behind-tether-used-falsified-documents-and-shell-companies-to-get-bank-accounts",
      "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
      "publishedAt": "2023-03-03T18:40:00Z",
      "content": "One of those intermediaries, a major tether trader in China, was trying to \"circumvent the banking system by providing fake sales invoices and contracts for each deposit and withdrawal,\" Stephen Moor… [+1235 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
      "title": "FTX's crypto customers in Japan can now get their frozen money back as the unit becomes the first to allow withdrawals",
      "description": "The Japan unit's move is the first time FTX crypto investors have been able to recover funds locked in since November, when the now-bankrupt exchange collapsed.",
      "url": "https://markets.businessinsider.com/news/currencies/crypto-ftx-collapse-japan-customers-start-withdraw-money-frozen-funds-2023-2",
      "urlToImage": "https://i.insider.com/63af038ba51b3d00185b4858?width=1200&format=jpeg",
      "publishedAt": "2023-02-21T10:59:57Z",
      "content": "Collapsed crypto exchange FTX's customers in Japan can now get their frozen money back, as the local subsidiary becomes the first to restart withdrawals.\r\nIt's a rare case of customers being able to … [+1924 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "mchittum@insider.com (Morgan Chittum)",
      "title": "Bitcoin hits a 6-month high as the total crypto market regains $85 billion in value",
      "description": "Crypto investors aren't in the clear yet, as macro conditions remain uncertain and risk appetite hinges on the Fed's next move.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-outlook-6-month-high-btc-analysts-2023-2",
      "urlToImage": "https://i.insider.com/63ee2a6c1d14070018bb0159?width=1200&format=jpeg",
      "publishedAt": "2023-02-16T15:20:23Z",
      "content": "Bitcoin's price hit a six-month high on Thursday as the cryptocurrency market's total value rose by nearly $85 billion to top $1.1 trillion.\r\nThe world's largest crypto is trading around $24,376, up … [+2677 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "Dan Milmo and agency",
      "title": "Crypto bank Silvergate announces liquidation amid sector turmoil",
      "description": "Wind-down and liquidation plan follows mass withdrawal of deposits after collapse of FTX exchange The cryptocurrency-focused US lender Silvergate is to wind down its operations after it was hit by customer withdrawals following the collapse of crypto exchange…",
      "url": "https://www.theguardian.com/technology/2023/mar/09/crypto-bank-silvergate-liquidation-sector-turmoil-wind-down-ftx-exchange",
      "urlToImage": "https://i.guim.co.uk/img/media/80cbc9fe9d08482d4bd817d00996cb7931d1b177/0_0_3888_2333/master/3888.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b65d8993a2a83c39065eb43558101253",
      "publishedAt": "2023-03-09T14:45:15Z",
      "content": "The cryptocurrency-focused US lender Silvergate is to wind down its operations after it was hit by customer withdrawals following the collapse of crypto exchange FTX.\r\nThe California-based bank had w… [+3223 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "IMF lays out crypto action plan, recommends against legal tender ... - Reuters",
      "description": "IMF lays out crypto action plan, recommends against legal tender ...  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvaW1mLWxheXMtb3V0LWNyeXB0by1hY3Rpb24tcGxhbi1yZWNvbW1lbmRzLWFnYWluc3QtbGVnYWwtdGVuZGVyLXN0YXR1cy0yMDIzLTAyLTI0L9IBAA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-02-24T03:57:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "zsalfiti@insider.com (Zinya Salfiti)",
      "title": "Coinbase customer who lost $96,000 in a crypto hack has sued the exchange after getting the brush-off",
      "description": "A Coinbase customer suing to recover the life savings stolen in a hack of his phone claims the crypto exchange told him the breach was his problem.",
      "url": "https://markets.businessinsider.com/news/currencies/crypto-coinbase-hack-customer-sue-exchange-lost-life-savings-2023-3",
      "urlToImage": "https://i.insider.com/63beb1c506706e0019a9bcc6?width=1200&format=jpeg",
      "publishedAt": "2023-03-07T16:38:47Z",
      "content": "A Coinbase customer said he lost $96,000 in a phone hack and now he's suing the US's largest cryptocurrency exchange after being told the breach was his problem.\r\nIn his lawsuit filed Monday, New Yor… [+2351 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "John Naughton",
      "title": "Crypto is intended to be hard to regulate, but at least the Treasury wants to have a go | John Naughton",
      "description": "The government’s consultation document on cryptocurrency highlights the challenges that must be faced in the regulatory processFor my sins, I have been reading Future financial services regulatory regime for cryptoassets, 82 pages of prime Whitehall verbiage …",
      "url": "https://www.theguardian.com/commentisfree/2023/feb/25/crypto-is-intended-to-be-hard-to-regulate-but-at-least-the-treasury-wants-to-have-a-go",
      "urlToImage": "https://i.guim.co.uk/img/media/61b8dba17ab10f586222f5c41d20bcf48c460e42/0_213_4734_2841/master/4734.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tb3BpbmlvbnMucG5n&enable=upscale&s=448de8728906b8d47d286ec5c6a7f188",
      "publishedAt": "2023-02-25T16:00:05Z",
      "content": "For my sins, I have been reading Future financial services regulatory regime for cryptoassets, 82 pages of prime Whitehall verbiage that was published recently, setting out HM Treasurys plans to gove… [+5792 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "CNET"
      },
      "author": "Nick Wolny",
      "title": "Can You Write Off Crypto Losses on Your Taxes? - CNET",
      "description": "Capital losses can help you lower your taxable income, but only under certain circumstances.",
      "url": "https://www.cnet.com/personal-finance/taxes/crypto-loss-tax-tips/",
      "urlToImage": "https://www.cnet.com/a/img/resize/1515e0687dffcafe9a451aef43f0838ef8a1eae4/hub/2023/02/14/3d4a9a9c-1451-47f0-8198-42cd658157e9/cash-money-stack-100s-green-grid.png?auto=webp&fit=crop&height=630&width=1200",
      "publishedAt": "2023-03-10T01:48:31Z",
      "content": "This story is part of Taxes 2023, CNET's coverage of the best tax software, tax tips and everything else you need to file your return and track your refund. \r\nLet's just say 2022 wasn't the best year… [+7248 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "EditorDavid",
      "title": "Head of America's SEC: Crypto Firms Should Comply With US Regulations",
      "description": "\"Crypto firms should do their work within the bounds of the law, or they shouldn't do it at all,\" says the head of America's Securities and Exchange Commission, which regulates US. investment markets. \n\nIn an editorial published in The Hill, SEC chair Gary Ge…",
      "url": "https://news.slashdot.org/story/23/03/11/0444241/head-of-americas-sec-crypto-firms-should-comply-with-us-regulations",
      "urlToImage": "https://a.fsdn.com/sd/topics/money_64.png",
      "publishedAt": "2023-03-12T15:34:00Z",
      "content": "\"Crypto firms should do their work within the bounds of the law, or they shouldn't do it at all,\" says the head of America's Securities and Exchange Commission, which regulates US. investment markets… [+3291 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Singapore's rave scene offers freedom in a straight-laced city",
      "description": "A revived post-Covid party scene offers space to unwind in the socially conservative city-state.",
      "url": "https://www.bbc.co.uk/news/world-asia-64113904",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0DC9/production/_128192530_dsc00344.jpg",
      "publishedAt": "2023-02-25T22:23:08Z",
      "content": "Aloysius, a 23-year-old dancer, spends his day completing his mandatory military service in Singapore.\r\nSo at night on the weekends, \"Loy\" as he calls himself, goes raving. Under the lights and in th… [+7650 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "psyme@insider.com (Pete Syme)",
      "title": "This is how the world's wealthiest people invest their money — from office buildings, to art, to crypto — according to a major survey of the super-rich",
      "description": "About 5% of the average UHNWI's portfolio goes to \"investments of passion\" like art, cars, and wine, while 2% is in crypto.",
      "url": "https://www.businessinsider.com/how-the-worlds-richest-people-invest-their-money-2023-3",
      "urlToImage": "https://i.insider.com/63ff6fb8494c7a0019f221ad?width=1200&format=jpeg",
      "publishedAt": "2023-03-03T10:43:51Z",
      "content": "Have you ever wondered how the world's wealthiest people invest their millions?\r\nOn March 1, Knight Frank published 2023's \"Wealth Report,\" which details the finances of ultra-high net worth individu… [+590 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Crypto firm Circle reveals $3.3 bln exposure to Silicon Valley Bank - Reuters.com",
      "description": "Crypto firm Circle reveals $3.3 bln exposure to Silicon Valley Bank  Reuters.com",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2NyeXB0by1maXJtLWNpcmNsZS1yZXZlYWxzLTMzLWJsbi1leHBvc3VyZS1zaWxpY29uLXZhbGxleS1iYW5rLTIwMjMtMDMtMTEv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-11T07:25:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "India's money laundering rules to apply to crypto trade - gov't ... - Reuters India",
      "description": "India's money laundering rules to apply to crypto trade - gov't ...  Reuters India",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2luZGlhL2luZGlhcy1tb25leS1sYXVuZGVyaW5nLXJ1bGVzLWFwcGx5LWNyeXB0by10cmFkZS1nb3Z0LW5vdGlmaWNhdGlvbi0yMDIzLTAzLTA4L9IBAA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-08T10:05:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Julia Horowitz, Anna Cooban",
      "title": "Analysis: Silicon Valley Bank collapse has echoes of 2008. Here's why things are different this time",
      "description": "The failure of Silicon Valley Bank is rattling markets and raising uncomfortable questions: Will it undermine the broader banking system and start a new meltdown?",
      "url": "https://www.cnn.com/2023/03/10/investing/svb-banking-crisis-what-next/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230310131757-svb-financial-collapse-nyse-0310-restricted.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-03-10T18:25:04Z",
      "content": "The failure of Silicon Valley Bank is rattling markets and raising uncomfortable questions: Will it undermine the broader banking system and start a new meltdown?\r\nBillionaire hedge fund manager Bill… [+5146 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Revolut's 2022 revenues grew by 33% despite crypto winter - Reuters",
      "description": "Revolut's 2022 revenues grew by 33% despite crypto winter  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2ZpbmFuY2UvcmV2b2x1dHMtMjAyMi1yZXZlbnVlcy1ncmV3LWJ5LTMzLWRlc3BpdGUtY3J5cHRvLXdpbnRlci0yMDIzLTAzLTAxL9IBAA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-01T05:02:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "NPR"
      },
      "author": "The Associated Press",
      "title": "U.S. arrests a Chinese business tycoon in a $1 billion fraud conspiracy",
      "description": "Guo Wengui, long sought by the government of China and known for cultivating ties to Trump administration figures including Steve Bannon, was arrested on charges that he oversaw a fraud conspiracy.",
      "url": "https://www.npr.org/2023/03/15/1163676898/chinese-business-tycoon-guo-wengui-fraud-arrest",
      "urlToImage": "https://media.npr.org/assets/img/2023/03/15/ap23074552297942_wide-2d4bffc49663cab70b6429844f3e1e2a3565fc67-s1400-c100.jpg",
      "publishedAt": "2023-03-15T17:27:21Z",
      "content": "A Twitter page of Chinese exiled businessman Guo Wengui is seen on a computer screen in Beijing on Aug. 30, 2017. The self-exiled Chinese businessman was arrested Wednesday in New York on charges tha… [+4124 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "insider@insider.com (Carla Mozée)",
      "title": "Fake ChatGPT tokens are flooding the market as crypto scammers take advantage of the AI craze",
      "description": "Blockchain security company PeckShield alerted crypto investors that at least one issuer has created \"dozens of tokens with a pump & dump scheme.\"",
      "url": "https://markets.businessinsider.com/news/currencies/chatgpt-tokens-cryptocurrency-fake-scammers-bing-microsoft-ai-artificial-intelligence-2023-2",
      "urlToImage": "https://i.insider.com/63db8cdee33c4000193aa1fb?width=1200&format=jpeg",
      "publishedAt": "2023-02-21T17:07:12Z",
      "content": "ChatGPT's popularity has inspired scammers to unleash a wave of unauthorized cryptocurrencies designed to appear as if they're affiliated with the chatbot that's sparked 2023's AI investing frenzy. \r… [+1335 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "mchittum@insider.com (Morgan Chittum)",
      "title": "Binance used customer funds for its own purposes in a move similar to FTX scandal: report",
      "description": "Binance's transfer of customer assets may not be illegal in the largely unregulated crypto market, but could pose a risk for investors.",
      "url": "https://markets.businessinsider.com/news/currencies/binance-crypto-exchange-customer-funds-compares-ftx-crisis-report-crisis-2023-2",
      "urlToImage": "https://i.insider.com/6135d316eedea900193d3694?width=1200&format=jpeg",
      "publishedAt": "2023-02-28T16:14:49Z",
      "content": "Binance reportedly appropriated customer assets for its own purposes in a series of moves that present similarities to events leading up to FTX's downfall, according to Forbes.\r\nThe largest crypto ex… [+2184 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Instant View: Silvergate's planned liquidation fuels another crypto rout - Reuters",
      "description": "Instant View: Silvergate's planned liquidation fuels another crypto rout  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiaGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvc2lsdmVyZ2F0ZXMtcGxhbm5lZC1saXF1aWRhdGlvbi1mdWVscy1hbm90aGVyLWNyeXB0by1yb3V0LTIwMjMtMDMtMDkv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-09T19:23:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "PA Media",
      "title": "Nottingham Forest’s Gustavo Scarpa in Brazil after losing £1m in crypto scam",
      "description": "<ul><li>Premier League club lend full support to midfielder after scam</li><li>Scarpa has appeared in court in Brazil trying to regain money</li></ul>Nottingham Forest are supporting midfielder Gustavo Scarpa after he lost almost £1m in a cryptocurrency scam.…",
      "url": "https://www.theguardian.com/football/2023/mar/15/nottingham-forests-gustavo-scarpa-in-brazil-after-losing-1m-in-crypto-scam",
      "urlToImage": "https://i.guim.co.uk/img/media/dda9e688a00cce1fd0ccdf291a5ee44c214c5ebc/309_128_2954_1772/master/2954.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=502f81416ec2e7756f2cc2da2d027500",
      "publishedAt": "2023-03-15T19:12:33Z",
      "content": "Nottingham Forest are supporting midfielder Gustavo Scarpa after he lost almost £1m in a cryptocurrency scam. Forest allowed their January signing to return to Brazil to deal with the matter, where r… [+1200 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Crypto group DCG looking for new partners following SVB collapse ... - Reuters",
      "description": "Crypto group DCG looking for new partners following SVB collapse ...  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvLWdyb3VwLWRjZy1sb29raW5nLW5ldy1wYXJ0bmVycy1mb2xsb3dpbmctc3ZiLWNvbGxhcHNlLWNvaW5kZXNrLTIwMjMtMDMtMTQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-14T08:02:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "insider@insider.com (Carla Mozée)",
      "title": "Bitcoin plunges under $20,000 to its lowest point in 2 months as Silvergate blow-up and bank fears rattle risk assets",
      "description": "Bitcoin is veering toward a weekly loss as a fresh pain point for the crypto sector emerged from the failure of crypto-friendly Silvergate Bank.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-20000-silvergate-ether-silicon-valley-bank-turmoil-markets-2023-3",
      "urlToImage": "https://i.insider.com/5d669bfb2e22af0e7c65d5e8?width=1200&format=jpeg",
      "publishedAt": "2023-03-10T16:22:49Z",
      "content": "Bitcoin slumped to its lowest price in two months Friday as the collapse of crypto depositor Silvergate Bank and the blow-up of tech startup lender Silicon Valley Bank fueled a retreat by investors f… [+2141 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Gizmodo.com"
      },
      "author": "Lauren Leffer",
      "title": "SBF and His Inner Circle Allegedly Made More Than 300 Illegal Political Donations",
      "description": "Before his spectacular downfall and the collapse of his crypto exchange FTX, former CEO Sam Bankman-Fried covertly and illicitly funneled millions of dollars of customer and company funds to political campaigns, according to a newly filed federal indictment. …",
      "url": "https://gizmodo.com/sbf-crypto-sam-bankman-fried-dark-money-1850149690",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ae49631518922413dcc402d6551b20d4.jpg",
      "publishedAt": "2023-02-23T17:45:00Z",
      "content": "Before his spectacular downfall and the collapse of his crypto exchange FTX, former CEO Sam Bankman-Fried covertly and illicitly funneled millions of dollars of customer and company funds to politica… [+4529 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "NPR"
      },
      "author": "David Gura",
      "title": "Disgraced FTX founder Sam Bankman-Fried has another big problem: He won't shut up",
      "description": "Most white-collar defendants lay low, but the ex-CEO of the collapsed cryptocurrency exchange FTX has been talking, tweeting, and sending email newsletters. Those comments could come back to hurt him.",
      "url": "https://www.npr.org/2023/02/26/1157528598/ftx-crypto-sam-bankman-fried-bankruptcy-fraud-criminal-charges",
      "urlToImage": "https://media.npr.org/assets/img/2023/02/17/gettyimages-1247193094_wide-a7524b71638228b9a88f5b0c95b588ad31af1d5c-s1400-c100.jpg",
      "publishedAt": "2023-02-26T10:00:39Z",
      "content": "FTX founder Sam Bankman-Fried arrives at the U.S. Federal Court in New York for a hearing on Feb. 16, 2023. As he awaits trial, the disgraced former CEO is defending himself in the court of public op… [+7773 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "NatWest limits customers' crypto transfers, citing scam concerns - Reuters",
      "description": "NatWest limits customers' crypto transfers, citing scam concerns  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2ZpbmFuY2UvbmF0d2VzdC1saW1pdHMtY3VzdG9tZXJzLWNyeXB0by10cmFuc2ZlcnMtY2l0aW5nLXNjYW0tY29uY2VybnMtMjAyMy0wMy0xNC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-14T12:31:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "msmash",
      "title": "Linux Foundation Europe Launches OpenWallet Foundation To Power Interoperable Digital Wallets",
      "description": "The Linux Foundation's European off-shoot has formally launched the OpenWallet Foundation (OWF), a new collaborative effort designed to support interoperability between digital wallets through open source software. From a report: The launch comes some five mo…",
      "url": "https://linux.slashdot.org/story/23/02/23/142244/linux-foundation-europe-launches-openwallet-foundation-to-power-interoperable-digital-wallets",
      "urlToImage": "https://a.fsdn.com/sd/topics/linux_64.png",
      "publishedAt": "2023-02-23T18:40:00Z",
      "content": "Are any of ya'll out there actually keeping things that you might have to hand over to a police officer, like a drivers license, etc....on your phone?\r\nI would not keep ANYTHING I had to unlock a pho… [+313 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "tmaxwell@insider.com (Thomas Maxwell)",
      "title": "Inside the self-proclaimed first generative AI conference, executives explain why the hot new technology behind ChatGPT is 'not just hype, but something real'",
      "description": "Move aside, crypto: a new conference in San Francisco put a spotlight on the tech industry's new love: generative AI.",
      "url": "https://www.businessinsider.com/chatgpt-generative-ai-genai-jasper-conference-crypto-san-francisco-2023-2",
      "urlToImage": "https://i.insider.com/63f0287c5ca81e00185567d4?width=1200&format=jpeg",
      "publishedAt": "2023-02-18T11:50:00Z",
      "content": "\"It's a step forward in humanity,\" one VC said of generative AI. An executive compared it to the Gutenberg press. A CEO called the technology  \"not just hype, but something real.\" \r\nThat's how attend… [+5997 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Ether hits 2-month low as New York AG labels crypto token as security - Reuters",
      "description": "Ether hits 2-month low as New York AG labels crypto token as security  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2ZpbmFuY2UvZXRoZXItaGl0cy0yLW1vbnRoLWxvdy1uZXcteW9yay1hZy1sYWJlbHMtY3J5cHRvLXRva2VuLXNlY3VyaXR5LTIwMjMtMDMtMTAv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-10T13:28:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Binance to revive bid for Singapore crypto permit -Nikkei - Reuters",
      "description": "Binance to revive bid for Singapore crypto permit -Nikkei  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYmluYW5jZS1yZXZpdmUtYmlkLXNpbmdhcG9yZS1jcnlwdG8tcGVybWl0LW5pa2tlaS0yMDIzLTAzLTAyL9IBAA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-02T06:31:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "BeauHD",
      "title": "Scrutiny Falls On $43 Billion USDC Stablecoin's Cash Reserves At Failed SVB",
      "description": "Krisztian Sandor writes via CoinDesk: U.S.-based stablecoin issuer Circle held a part of its USDC stablecoin's cash reserves at Silicon Valley Bank as of Jan. 17, according to the firm's latest attestation (PDF). USDC is the second-largest stablecoin on the m…",
      "url": "https://news.slashdot.org/story/23/03/10/2159227/scrutiny-falls-on-43-billion-usdc-stablecoins-cash-reserves-at-failed-svb",
      "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      "publishedAt": "2023-03-11T01:25:00Z",
      "content": "U.S.-based stablecoin issuer Circle held a part of its USDC stablecoin's cash reserves at Silicon Valley Bank as of Jan. 17, according to the firm's latest attestation (PDF). USDC is the second-large… [+1382 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "BeauHD",
      "title": "Bank May Go Bust Due To FTX Collapse",
      "description": "Longtime Slashdot reader smooth wombat writes: Late Wednesday night, Silvergate Capital informed the SEC it won't be able to file its annual report on time, and is determining if it can continue to operate. Unlike most traditional banks which have steered cle…",
      "url": "https://news.slashdot.org/story/23/03/02/1810212/bank-may-go-bust-due-to-ftx-collapse",
      "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      "publishedAt": "2023-03-02T18:40:00Z",
      "content": "Longtime Slashdot reader smooth wombat writes: Late Wednesday night, Silvergate Capital informed the SEC it won't be able to file its annual report on time, and is determining if it can continue to o… [+1281 chars]"
  }
]

