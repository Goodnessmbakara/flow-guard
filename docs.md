Resources
To help you build innovative projects on BitcoinCash (BCH) using covenants, CashTokens, CashScript, and the latest CHIPs (including the Loops, Bitwise and P2S CHIPs), we’ve curated a list of essential resources. These include official documentation, development tools, community forums, and example projects to support your hackathon journey. Whether you’re new to BCH or an experienced developer, these resources will help you leverage BCH’s advanced features and create impactful solutions.

Mainnet Pat's Dapp starter app (explained in Workshop #2 livestream) here: https://github.com/mainnet-pat/dapp-starter
Official Documentation
Start with these authoritative guides to understand BCH’s technical foundations and smart contract capabilities:

Bitcoin Cash Documentation https://documentation.cash/: Comprehensive guides on transaction formats, consensus rules, and protocol details. Essential for building on BCH. (Note: Check for updates related to recent upgrades.)
CashScript Documentation https://cashscript.org/docs/: Detailed guides on writing smart contracts in CashScript, including a section on covenants with examples like Escrow and PooledFunds.
CashScript Python https://gitlab.com/andrew-128/cashscript-py: Use CashScript in Python!
CashTokens Official Site https://cashtokens.org/: Learn how to issue, transfer, and redeem tokens on BCH, crucial for projects in DeFi and Web3 tracks.
Development Tools
These tools will help you code, test, and deploy your BCH projects efficiently:

CashScript Playground https://next-cashscript-playground.netlify.app/: An interactive editor with auto-complete for testing CashScript contracts. Ideal for experimenting with covenants and loops.
BitauthIDE https://alpha.ide.bitauth.com/: A contract builder with simple examples for CashTokens and covenants, great for getting started.
Mainnet.cash https://mainnet.cash/: A library for building BCH applications, complete with guides for app development.
Libauth https://libauth.org/: A library for authentication and authorization, enhancing security in your BCH contracts.
BCH Connect https://github.com/fran-dv/bch-connect: A React library to seamlessly integrate Bitcoin Cash wallet connections in your dApps. 🚀
CHIPs and Proposals
Explore the following Cash Improvement Proposals (CHIPs) that introduce new features to enhance your projects on Bitcoin Cash:

BCH Bitwise (CHIP-2025-05) - https://github.com/bitjson/bch-bitwise This proposal re-enables bitwise operations in the Bitcoin Cash Virtual Machine (VM), including OP_INVERT, OP_LSHIFTNUM, OP_RSHIFTNUM, OP_LSHIFTBIN, and OP_RSHIFTBIN. It significantly improves smart contract efficiency by reducing the need for emulated shifts, which can be over 10 times more costly. This is particularly beneficial for financial and cryptographic applications, simplifying contract design, reducing transaction sizes, and minimizing validation overhead for full nodes.
BCH P2S - https://github.com/bitjson/bch-p2s BCH P2S introduces Pay to Script (P2S), allowing direct use of locking bytecode without a P2SH wrapper. This improves wallet ecosystem safety by preventing naive wallets from sending funds to unrecoverable contracts. It also simplifies contract design and reduces transaction sizes, ideal for vault, multi-party, and decentralized finance (DeFi) applications. It increases the maximum token commitment length from 40 to 128 bytes and removes the limit on maximum standard input bytecode length (now up to 10,000 bytes).
BCH Loops - https://github.com/bitjson/bch-loops This proposal adds OP_BEGIN and OP_UNTIL to the Bitcoin Cash VM, enabling loop constructions in smart contracts. These operations allow for indefinite loops similar to those in Forth, enhancing the capability to create complex and iterative contracts without increasing processing or memory requirements. This is crucial for advanced smart contract use cases, such as decentralized applications (dApps) and algorithmic trading systems.
BCH Functions - https://github.com/bitjson/bch-functions This proposal introduces the OP_DEFINE and OP_INVOKE opcodes, enabling Bitcoin Cash contract bytecode to be factored into reusable functions. This allows reduced transaction sizes, stronger privacy, improved auditability and more.
Covenants Specific
Dive deeper into covenants with these dedicated resources:

CashScript Guide on Covenants https://cashscript.org/docs/guides/covenants: A detailed guide with examples like Escrow, LastWill, and PooledFunds. Learn how to restrict fund usage and create advanced smart contracts.
Jedex https://github.com/bitjson/jedex: An example of an AMM-style DEX using covenants and CashTokens, showcasing real-world covenant applications.
Community and Forums
Engage with the BCH community for support, inspiration, and collaboration:

Bitcoin Cash Research https://bitcoincashresearch.org/: A forum for technical discussions on covenants, CHIPs, and best practices for building on BCH.
Reddit r/cashtokens https://www.reddit.com/r/cashtokens/: A community for CashTokens developers, with threads compiling resources and practical tips.
Bitcoin Cash Podcast Code Resources https://bitcoincashpodcast.com/code: Collection of Bitcoin Cash coding & development resources.
Example Projects
Get inspired by real-world BCH projects using CashScript and CashTokens:

Awesome Bitcoin Cash https://awesomebitcoin.cash/: A curated list of active projects, including:
AnyHedge https://anyhedge.com/developers/: Oracle-based swaps using CashScript.
AuthGuard https://bitcoincashresearch.org/t/chip-2023-08-authguard-standard/1130: Authchain management for secure transactions.
BitCANN https://bitcann.org/: Decentralized identity solutions on BCH.
These projects demonstrate practical applications of BCH technologies and can spark ideas for your hackathon submission.

Tutorials and Guides
Learn step-by-step how to implement BCH features in your projects:

CashScript Guides https://cashscript.org/docs/guides/: Tutorials for writing smart contracts, including covenants and token introspection.
Building with CashTokens https://www.reddit.com/r/cashtokens/comments/13nk2c9/list_of_resources_for_developing_with_cashtokens/ : A Reddit thread with compiled resources, including TX formats and tools like Fulcrum and Chaingraph.
Final Tips
Explore the CashScript Playground: Perfect for hands-on practice with covenants and loops.
Check for Updates: Documentation like Bitcoin Cash Documentation may evolve with recent upgrades, so stay informed.
Get Inspired: Browse the Awesome Bitcoin Cash list to see how others have innovated on BCH.
These resources are your gateway to building cutting-edge projects on BCH. Use them to push the boundaries of what’s possible with covenants, CashTokens, CashScript, and the latest CHIPs. Good luck, and happy hacking!