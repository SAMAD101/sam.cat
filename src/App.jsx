const A = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children ?? href.replace(/^https?:\/\/(www\.)?/, "")}
  </a>
);

const gh = (repo) => `https://github.com/${repo}`;
const gl = (repo) => `https://gitlab.com/${repo}`;

const experience = [
  {
    date: "Aug 2025 - Sep 2026",
    title: (
      <>
        Forward Deployed Engineer at <A href="https://spicenet.io/">Spicenet</A>
        .
      </>
    ),
    points: [
      <>
        Maintained internal repositories including backend, and worked on the
        core product development of{" "}
        <A href="https://spicenet.io/blogs/spice-flow">Spiceflow</A>,
        Cross-chain transactions infrastructure for easy integrations into web3
        (EVM-compatible chains) applications for native and seamless cross-chain
        experience.
      </>,
      "Delivered integrations for 6 B2B clients, from scoping with the partner's team through implementation, testing and release.",
      "Provisioned and managed AWS services (EC2, ECS, S3, RDS, KMS, IAM); built GitHub Actions CI/CD pipelines for automated testing and deploys across development and production.",
      "Optimized Solidity smart contracts, caught 1 high, and 5 low severity issues.",
    ],
  },
  {
    date: "Jan 2025 - Jun 2025",
    title: "Freelance",
    points: [
      <>
        Backend developer on a scalable Telegram (grammY) bot for automated
        liquidity providing on Solana,{" "}
        <A href="https://x.com/cleopetrafun">Cleopetra</A>. Integrated Meteora
        pools and Privy auth, and implemented AI-driven auto-rebalancing that
        monitors positions and executes trades.
      </>,
      <>
        Built the full stack for Lilikoi, a DeFi AI agent that won the $20,000
        first prize in the AI track at the{" "}
        <A href="https://medium.com/edu-chain/semester-3-hackathon-winners-7d5905b1db14">
          Educhain Hackathon
        </A>
        .
      </>,
    ],
  },
  {
    date: "Jul 2024 - Mar 2025",
    title: "Solana ecosystem",
    points: [
      <>
        Graduated from the <A href="https://turbin3.com/">Solana Turbin3</A>{" "}
        Builders Program Q4 2024. Built Solana programs with Anchor, and a
        capstone project all with thorough testing suites.{" "}
        <A href={gh("SAMAD101/solana-turbin3-q4")}>[code]</A>
      </>,
      <>
        <A href="https://turbin3.com/">Solana Turbin3</A> Advanced SVM Cohort Q1
        2025. Studied SVM internals with a focus on compilation through LLVM,
        sBPF, JIT-compilation, Proof of History, the RPC layer, and the gossip
        protocol; implemented reference components in Rust.{" "}
        <A href={gh("SAMAD101/solana-turbin3-q1-svm")}>[code]</A> Collaborated
        with a team on an educational tool for SVM developers.{" "}
        <A href="https://x.com/farawaystar10/status/1897746419563610478">
          [post]
        </A>
      </>,
      <>
        Won $1,600 in a{" "}
        <A href="https://earn.superteam.fun/listing/update-solana-developer-lessons/">
          Superteam Earn bounty
        </A>{" "}
        on{" "}
        <A href="https://solana.com/developers/courses">
          Solana developer lessons
        </A>
        . Wrote technical documentation with elaborate code samples.{" "}
        <A href="https://github.com/solana-foundation/developer-content/pulls?q=+is%3Apr+author%3ASAMAD101">
          [PRs]
        </A>
      </>,
      <>
        Completed the{" "}
        <A href="https://summer.superteam.fun/">
          Solana Summer Fellowship 2024
        </A>
        , one of 30 developers worldwide selected from 7500+ applicants. Built
        Anchor and native Rust programs. Received a $2,000 grant.
      </>,
    ],
  },
  {
    date: "Apr 2024 - Sep 2024",
    title: "Junior Python Backend Engineer at Pwned Labs",
    points: [
      "Built backend services for a cybersecurity education platform offering real-world cloud security labs, serving 40,000+ users.",
      "Contributed to transitioning from a monolithic architecture to a microservices architecture; implemented an internal tool toexecute Terraform scripts on the server, enabling infrastructure changes on demand.",
      "Provisioned and managed AWS services (EC2, ECS, EKS, VPC Peering, Transit Gateway, KMS) with Terraform.",
    ],
  },
  {
    date: "Aug 2023 - Oct 2023",
    title: "Python Developer at Shastra OS",
    points: [
      "Developed two native Linux applications using GTK4 (PyGObject) and Libadwaita.",
      "Welcome & initial setup app for a simple tour of the Linux distribution and its features, and initial setup including users, language, timezones, essential packages, and backups.",
      "Wallet integration app for integrating a Solana wallet into the Linux distribution with cryptography to ensure safety and security.",
    ],
  },
];

const gossipGloomers = {
  date: "Oct 2026",
  title: <A href={gl("SAMAD101/gossip-gloomers")}>gossip-gloomers</A>,
  desc: (
    <>
      My solutions to Fly.io's distributed systems challenges, tested with
      Maelstrom under network partitions: echo, unique IDs, broadcast, grow-only
      counter, Kafka-style log and totally-available transactions.
    </>
  ),
  points: [
    <>
      Go solutions: <A href={gl("SAMAD101/gossip-gloomers")}>gossip-gloomers</A>
    </>,
    <>
      Rust solutions:{" "}
      <A href={gl("SAMAD101/gossip-gloomers-rs")}>gossip-gloomers-rs</A>
    </>,
  ],
};

const latest = [
  {
    date: "Jul 2026 - Present",
    title: <A href="https://orko.rs/">Orko</A>,
    desc: "Open source project (under development) for efficient, durable and blazing fast agent orchestration in Rust. Also built the Orko website in Rust/WASM with Dioxus.",
    points: [
      <A href={gh("orko-rs/orko")} />,
      <A href={gh("orko-rs/orko.rs")} />,
    ],
  },
  gossipGloomers,
];

const projects = [
  gossipGloomers,
  {
    date: "Feb 2026 - Jul 2026",
    title: <A href="https://www.redcircle.lol/home">RedCircle</A>,
    desc: "Founded a platform to tokenize Reddit posts on Solana and developed the protocol's Solana programs.",
    points: [
      <>
        <A href={gh("Redcircle-lol/redcircle-protocol")} />: Rust/Anchor Solana
        program
      </>,
      "Designed and engineered the entire protocol logic with an extensive testing suite and an SDK.",
      "Features a sigmoid bonding curve for stable token launches, liquidity procisioning, and steep price increase after the inflection point.",
      "Also includes bonding curve to DLMM migration logic.",
      <>
        <A href="https://github.com/Redcircle-lol/Redcircle_Web" />: Contributed
        to backend code in the main web application:
      </>,
      <>
        <A href="https://github.com/Redcircle-lol/campaigns-backend" />:
        Designed and engineered the backend for user campaigns on RedCircle.
        Features campaigns and users management with RBAC.
      </>,
      <>
        <A href="https://github.com/Redcircle-lol/rc-new-bot" />: Developed a
        Telegram bot that listens to the RedCircle launch WebSocket, posts a
        notification (in the Telegram chat)on every confirmed token launch, and
        auto-buys a fixed amount of USDC of each token.
      </>,
      <>
        Raised $2.9k+ USDC in creator fees:{" "}
        <A href="https://www.orynth.dev/projects/redcircle" />
      </>,
    ],
  },
  {
    date: "Jul 2025",
    title: (
      <A href={gh("SAMAD101/aavelike-contracts-v1")}>
        Aave-like Lending Protocol
      </A>
    ),
    desc: "Simple lending and borrowing protocol in Solidity smart contracts, written to understand how DeFi protocols like it work.",
    points: [
      "Modular codebase built with Foundry",
      "Upgradeable and safe contracts using OpenZeppelin",
    ],
  },
  {
    date: "May 2025 - Jun 2025",
    title: (
      <A href={gh("SAMAD101/discord_clmm_sol_usdc")}>
        Raydium CLMM Discord Bot
      </A>
    ),
    desc: "Discord bot for managing liquidity positions in the SOL-USDC pool on Raydium CLMM.",
    points: [
      "Studied Raydium's CLMM programs",
      "Implemented an automated spot-trading strategy",
      "Built with TypeScript, raydium-io/raydium-sdk-v2, bullmq, discord.js and drizzle-orm.",
    ],
  },
  {
    date: "Jan 2025",
    title: <A href={gh("SAMAD101/chain-gossip")}>chain-gossip</A>,
    desc: "A distributed gossipsub p2p network implemented using rust-libp2p.",
    points: [
      "Implements a gossipsub network with kademlia DHT, and mDNS for peer discovery.",
      "The network can have n number of nodes running locally in different terminals. Each node can propagate messages to all other nodes in the network, and is subscribed to a topic 'transaction'.",
      "This network implementation is to demonstrate the use of gossipsub and kademlia DHT in a p2p network to propagating transactions data across the network.",
    ],
  },
  {
    date: "Dec 2024",
    title: <A href={gh("SAMAD101/zk-circuit")}>zk-circuit</A>,
    desc: "zk-proof circuit using Circom 2 to verify a * b = c onchain using zk-SNARK (SnarkJS), Anchor and Groth16.",
  },
  {
    date: "Dec 2024",
    title: <A href={gh("SAMAD101/eth-escrow")}>ETH Escrow</A>,
    desc: "Escrow contract in Solidity.",
    points: [
      "Escrow of a set amount of ETH or ERC20 tokens.",
      "OpenZeppelin upgradeable contracts, UUPS proxy and reentrancy protection.",
      "Recipient can claim, or refund the sender; automated refunds using Chainlink.",
      "Built with Foundry with a comprehensive test suite.",
    ],
  },
  {
    date: "Sep 2024",
    title: <A href={gh("SAMAD101/solpay-proj")}>Solana Pay POS</A>,
    desc: "Simple point-of-sale project using Solana Pay. Made with TypeScript, React, solana/pay and Chakra UI.",
  },
  {
    date: "Sep 2024",
    title: <A href={gh("SAMAD101/my-cnft")}>cNFT Minter</A>,
    desc: "Simple script to mint cNFTs. Made with TypeScript and metaplex-foundation/mpl-bubblegum",
  },
  {
    date: "Aug 2024",
    title: <A href={gh("SAMAD101/sol-program-native")}>Native Vault Program</A>,
    desc: "Vault Solana program in native Rust. Made with Rust and solana-program.",
  },
  {
    date: "Aug 2024",
    title: <A href={gh("SAMAD101/sowa-web")}>sowa-web</A>,
    desc: (
      <>
        Solana web interface to mint, transfer, burn and delegate SPL tokens.{" "}
        <A href="https://sowa-web.vercel.app/">[live]</A>. Made with TypeScript,
        React, solana/web3.js and Chakra UI.
      </>
    ),
  },
  {
    date: "Aug 2024",
    title: <A href={gh("SAMAD101/sowa-cli")}>sowa</A>,
    desc: (
      <>
        Solana wallet CLI to manage wallets and perform user operations on
        chain. <A href="https://crates.io/crates/sowa">[crates.io]</A>, 1000+
        downloads. Made with Rust, clap, solana-sdk, solana-client and anyhow.
      </>
    ),
  },
  {
    date: "Dec 2023 - Jan 2024",
    title: <A href={gh("FOSS-Community/LinkLiberate")}>LinkLiberate</A>,
    desc: "Open source URL shortener with no user tracking, giving creators fine-grained control over links, including expiration. Made with Python and FastAPI.",
  },
  {
    date: "Dec 2023",
    title: <A href={gh("FOSS-Community/paste.py")}>paste.py</A>,
    desc: "Open source, privacy-respecting Pastebin-like web app with no user tracking and clear contributor docs. Made with Python and FastAPI.",
  },
  {
    date: "Oct 2023 - May 2024",
    title: <A href={gh("SAMAD101/Chino")}>Chino</A>,
    desc: "Terminal-based AI chatbot on OpenAI using RAG to learn from user-supplied documents. Made with Python and LangChain.",
  },
];

const skills = {
  Languages: "Rust, TypeScript, Go, Python, Shell, C, Solidity",
  Blockchain: "Solana, Anchor, EVM, Foundry, OpenZeppelin, Chainlink",
  Backend: "Node.js, Express, FastAPI, gRPC, Hyper, Axtix, Tokio",
  Database: "PostgreSQL, MySQL, SQLite, MongoDB, Redis",
  Frontend: "React, Next.js, Dioxus, WASM",
  Infra: "AWS, Terraform, Pulumi, GitHub Actions, Grafana, Kubernetes",
  AI: "LangChain, ElizaOS, RAG, Agents",
};

const blogs = [
  {
    date: "Sep 2024",
    title: (
      <A href="https://sambluecircle.substack.com/p/securing-solana-programs-with-anchor">
        Securing Solana programs with Anchor
      </A>
    ),
  },
];

const List = ({ items }) => (
  <ol>
    {items.map((w, i) => (
      <li key={i}>
        <div className="head">
          <b>{w.title}</b>
          <time>{w.date}</time>
        </div>
        {w.desc && <p>{w.desc}</p>}
        {w.points && (
          <ul>
            {w.points.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ol>
);

export default function App() {
  return (
    <main>
      <h1>Samad A.</h1>
      <p className="mono muted">
        aka Sam, 2+ years in industry, 8+ years as a programmer<br></br>
        Fullstack (Backend-leaning), Distributed Systems and Blockchain
      </p>
      <p>
        <A href={gh("SAMAD101")}>GitHub</A> ·{" "}
        <A href={gl("SAMAD101")}>GitLab</A> ·{" "}
        <A href="https://www.linkedin.com/in/asamadans/">LinkedIn</A> ·{" "}
        <A href="https://x.com/BlueCircle0">Twitter</A> ·{" "}
        <A href="https://t.me/BlueCircle0">Telegram</A> ·{" "}
        <A href="https://cal.com/sam01b/30min">Let's Chat</A> ·{" "}
        {/* <A href="https://sambluecircle.substack.com/">Blog</A> ·{" "}*/}
        <A href="https://orko.rs/">Orko</A>
      </p>

      <h2>Tech Stack &amp; Skills</h2>
      <dl>
        {Object.entries(skills).map(([k, v]) => (
          <div key={k}>
            <dt className="mono">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <h2>Latest</h2>
      <List items={latest} />

      <h2>Experience</h2>
      <List items={experience} />

      <h2>Projects</h2>
      <List items={projects} />

      <h2>Blogs</h2>
      <List items={blogs} />
    </main>
  );
}
