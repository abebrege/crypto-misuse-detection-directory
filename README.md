# Crypto Misuse Detection Directory

> Last updated: Nov 9, 2026

Tools, papers, benchmarks, and resources regarding cryptographic-API misuse detection.

Open an issue or PR if you'd like to contribute; revisions and additions are welcome.

- [Beyond Detectors](#beyond-detectors)
    - [Surveys](#surveys)
    - [Evaluation and Meta-Studies](#evaluation-and-meta-studies)
    - [Lessons Learned](#lessons-learned)
- [Detectors](#detectors)
    - [Java](#java)
    - [Python](#python)
    - [Go](#go)
    - [C and C++](#c-and-c)
    - [JavaScript](#javascript)
    - [Android](#android)
    - [iOS](#ios)
    - [Binary / Firmware](#binary--firmware)
    - [LLM-Based](#llm-based)
    - [Industry / OSS](#industry--oss)
    - [Other](#other)
- [LLM-Related](#llm-related)
- [Repair](#repair)
- [Benchmarks](#benchmarks)
- [Analysis Frameworks](#analysis-frameworks)
- [Other](#other-1)

## Beyond Detectors
### Surveys
- **[Evaluating Cryptographic API Misuse Detectors for Go](https://arxiv.org/abs/2604.24085)** (SVM 2026) — [artifact](https://github.com/ASSERT-KTH/crypto-api-misuse-detectors-go)
- **[Detecting Misuse of Security APIs: A Systematic Review](https://dl.acm.org/doi/full/10.1145/3735968)** (ACM Computing Surveys 2025) — [preprint](https://arxiv.org/abs/2306.08869)
- **[Automatic Detection of Java Cryptographic API Misuses: Are We There Yet?](https://people.cs.vt.edu/nm8247/publications/TSE3150302-2.pdf)** (IEEE TSE 2023) — [artifact](https://github.com/NiSE-Virginia-Tech/TSE-2022)

### Evaluation and Meta-Studies
- **[Mutation-based Evaluation of Cryptographic API Misuse Detectors](https://dl.acm.org/doi/10.1145/3796221)** (ACM TOPS 2026) — [artifact](https://github.com/Secure-Platforms-Lab-W-M/masc-journal-artifact)
- **[From base cases to backdoors: An Empirical Study of Unnatural Crypto-API Misuse](https://arxiv.org/abs/2510.13102)** (2025)
- **[Towards Precise Reporting of Cryptographic Misuses](https://www.ndss-symposium.org/ndss-paper/towards-precise-reporting-of-cryptographic-misuses/)** (NDSS 2024) — [PDF](https://www.ndss-symposium.org/wp-content/uploads/2024-1032-paper.pdf) — [artifact](https://github.com/kynehc/crypto-detector-evaluation-artifacts)
- **[MASC: A Tool for Mutation-Based Evaluation of Static Crypto-API Misuse Detectors](https://dl.acm.org/doi/10.1145/3611643.3613099)** (ESEC/FSE 2023) — [code](https://github.com/Secure-Platforms-Lab-W-M/MASC)
- **[A Reevaluation of Why Crypto-detectors Fail: A Systematic Revaluation of Cryptographic Misuse Detection Techniques](https://scholarworks.wm.edu/etd/1686662609)** (M.S. thesis, William & Mary 2023)
- **[Benchmarking the Benchmarks](https://dl.acm.org/doi/10.1145/3579856.3582830)** (AsiaCCS 2023)
- **[Evaluation of Static Vulnerability Detection Tools with Java Cryptographic API Benchmarks](https://arxiv.org/abs/2112.04037)** (IEEE TSE 2023)
- **[Why Crypto-detectors Fail: A Systematic Evaluation of Cryptographic Misuse Detection Techniques](https://ieeexplore.ieee.org/document/9833582/)** (IEEE S&P 2022) — [artifact](https://github.com/Secure-Platforms-Lab-W-M/MASC-Artifact)
- **[To Fix or Not to Fix: A Critical Study of Crypto-misuses in the Wild](https://doi.org/10.1109/TrustCom56396.2022.00051)** (TrustCom 2022) — [preprint](https://arxiv.org/abs/2209.11103)
- **[Systematic Mutation-Based Evaluation of the Soundness of Security-Focused Android Static Analysis Techniques](https://dl.acm.org/doi/fullHtml/10.1145/3439802)** (ACM TOPS 2021) — [code](https://github.com/LordAmit/muse)
- **[Understanding How to Use Static Analysis Tools for Detecting Cryptography Misuse in Software](https://ieeexplore.ieee.org/document/8863426)** (IEEE Trans. Reliability 2019)
- **[μSE — Discovering Flaws in Security-Focused Static Analysis Tools for Android using Systematic Mutation](https://www.usenix.org/conference/usenixsecurity18/presentation/bonett)** (USENIX Security 2018)
- **[Practical Evaluation of Static Code Analysis Tools for Cryptography: Benchmarking Method and Case Study](https://www.researchgate.net/publication/320624570)** (ISSRE-W 2017)
- **[Why Does Cryptographic Software Fail?](https://people.csail.mit.edu/nickolai/papers/lazar-cryptobugs.pdf)** (APSys 2014)

### Lessons Learned
- **[Understanding Industry Perspectives of Static Application Security Testing (SAST) Evaluation](https://dl.acm.org/doi/10.1145/3729404)** (FSE 2025)
- **["False negative -- that one is going to kill you": Understanding Industry Perspectives of Static Analysis based Security Testing](https://arxiv.org/abs/2307.16325)** (IEEE S&P 2024) — [artifact](https://github.com/Secure-Platforms-Lab-W-M/false-negatives-kill)
- **[Being the Developers’ Friend: Our Experience Developing a High-Precision Tool for Secure Coding](https://ieeexplore.ieee.org/document/9782873)** (IEEE S&P Magazine 2022)
- **[Negative Results on Mining Crypto-API Usage Rules](https://ieeexplore.ieee.org/document/8816738)** (MSR 2019)

## Detectors
### Java
- **[Cryptoscope](https://arxiv.org/abs/2503.19531)** (2025)
- **[CryLogger](https://ieeexplore.ieee.org/document/9519501)** (IEEE S&P 2021) — [artifact](https://github.com/lucapiccolboni/crylogger)
- **[Java Cryptography Uses in the Wild](https://scg.unibe.ch/archive/papers/Hazh20c.pdf)** (ESEM 2020)
- **[CogniCrypt_GEN](https://www.bodden.de/pubs/krueger20cognicryptgen.pdf)** (CGO 2020) — [artifact](https://zenodo.org/records/3597725)
- **[CryptoGuard](https://arxiv.org/abs/1806.06881)** (CCS 2019) — [code](https://github.com/CryptoGuardOSS/cryptoguard)
- **[CrySL / CogniCrypt_SAST](https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ECOOP.2018.10)** (ECOOP 2018) — [journal version, TSE 2021](https://sanadlab.org/assets/pdf/KrugerTSE2021.pdf) — [code](https://github.com/CROSSINGTUD/CryptoAnalysis) — [rules](https://github.com/CROSSINGTUD/Crypto-API-Rules)
- **[CogniCrypt](https://ieeexplore.ieee.org/document/8115707)** (ASE 2017)

### Python
- **[Cryptolation — Methods and Benchmark for Detecting Cryptographic API Misuses in Python](https://ieeexplore.ieee.org/document/10474052/)** (IEEE TSE 2024)
- **[CryptoPyt](https://doi.org/10.1109/ACSAC63791.2024.00088)** (ACSAC 2024)
- **[LICMA — Python Crypto Misuses in the Wild](https://dl.acm.org/doi/10.1145/3475716.3484195)** (ESEM 2021) — [tool](https://github.com/stg-tud/licma) — [dataset](https://github.com/stg-tud/python-crypto-misuses-study-results)

### Go
- **[Evaluating Cryptographic API Misuse Detectors for Go](https://arxiv.org/abs/2604.24085)** (2026)
- **[Gopher](https://dl.acm.org/doi/10.1145/3658644.3690276)** (CCS 2024) — [code](https://github.com/yxzhang2024/gopher)
- **[CryptoGo](https://dl.acm.org/doi/10.1145/3564625.3567989)** (ACSAC 2022)

### C and C++
- **[TaintCrypt — From Theory to Code: Identifying Logical Flaws in Cryptographic Implementations in C/C++](https://ieeexplore.ieee.org/document/9524495)** (IEEE TDSC 2022)

### JavaScript
- **[JScamd: An Automated Static Taint Analysis Framework for Detecting Cryptographic API Misuses in JavaScript](https://www.usenix.org/conference/usenixsecurity26/presentation/jia-shijie)** (USENIX Security 2026) — [artifact](https://doi.org/10.5281/zenodo.20395867)

### Android
- **[BinsSight — Source attribution  of cryptographic API misuse in Android applications](https://dl.acm.org/doi/abs/10.1145/3196494.3196538)** (2018) — [code](https://github.com/iim/binsight)
- **[Stack Overflow Considered Harmful? The Impact of Copy&Paste on Android Application Security](https://ieeexplore.ieee.org/abstract/document/7958574)**
- **[Evaluation of Cryptography Usage in Android Applications](https://eudl.eu/doi/10.4108/eai.3-12-2015.2262471)** (BICT 2016)
- **[CMA — Modeling analysis and auto-detection of cryptographic misuse in Android applications,](http://lilicoding.github.io/SA3Repo/papers/2014_shuai2014modelling.pdf)** (DASC 2014)
- **[Amandroid: A precise and general  inter-component data flow analysis framework for security vetting of Android apps](https://dl.acm.org/doi/abs/10.1145/3183575)** (2014) — [about](https://pag.arguslab.org/argus-saf)
- **[CryptoLint — An empirical study of cryptographic misuse in android applications](https://dl.acm.org/doi/10.1145/2508859.2516693)** (CCS 2013)
- **[MalloDroid — Why Eve and Mallory love Android: An analysis of Android SSL (in) security](https://dl.acm.org/doi/abs/10.1145/2382196.2382205)** (2012)

### iOS
- **[Automated Binary Analysis on iOS: A Case Study on Cryptographic Misuse in iOS Applications](https://dl.acm.org/doi/abs/10.1145/3212480.3212487)** (WiSec 2018) — [PDF](https://tugraz.elsevierpure.com/ws/portalfiles/portal/17749575/authorversion.pdf) — [code](https://github.com/isec-tugraz/ios-analysis)
- **[iCryptoTracer: Dynamic Analysis on Misuse of Cryptography Functions in iOS Applications](https://link.springer.com/chapter/10.1007/978-3-319-11698-3_27)** (NSS 2014)

### Binary / Firmware
- **[CrypTody: Cryptographic Misuse Analysis of IoT Firmware via Data-flow Reasoning](https://dl.acm.org/doi/10.1145/3678890.3678914)** (RAID 2024)
- **[CRYPTOREX: Large-scale Analysis of Cryptographic Misuse in IoT Devices](https://www.usenix.org/conference/raid2019/presentation/zhang-li)** (RAID 2019) — [code](https://github.com/zhanglikernel/CRYPTOREX)
- **[K-Hunt: Pinpointing Insecure Cryptographic Keys from Execution Traces](https://dl.acm.org/doi/10.1145/3243734.3243783)** (CCS 2018) — [code](https://github.com/GoSSIP-SJTU/k-hunt)

### LLM-Based
- **[Toward Comprehensive Cryptographic API Misuse Detection: Fine-Tuning Discriminative LLMs on Sliced Code Snippets](https://link.springer.com/chapter/10.1007/978-981-92-6837-5_20)** (ICICS 2026)
- **[CarrierGuard-Java: Carrier-Aware Zero-Trust Code Ingestion Defense for LLM-Assisted Static Analysis Alert Triage](https://ieeexplore.ieee.org/document/11743566)** (ICCEA 2026)
- **[Advancing Cryptographic Implementation Security through Expert-Driven CoT-RAG Architecture](https://ieeexplore.ieee.org/abstract/document/11619436)** (ICBASE 2026)
- **[From Hallucination to Precision: Enhancing LLM Detection of Python Cryptographic API Misuses with Chain-of-Thought Prompting](https://ieeexplore.ieee.org/abstract/document/11582031)** (CSCWD 2026) — [artifact](https://github.com/feibaoBob/LLM-based_CAMD)
- **[CryptoGPT — Beyond Static Pattern Matching? Rethinking Automatic Cryptographic API Misuse Detection in the Era of LLMs](https://arxiv.org/abs/2407.16576)** (ISSTA 2025) — [artifact](https://github.com/CryptoGPT-online/CryptoGPT-online.github.io)
- **[Semgrep Assistant: AI Autotriage](https://semgrep.dev/blog/2025/building-an-appsec-ai-that-security-researchers-agree-with-96-of-the-time/)** (2025)
- **[CRYPTBARA](https://ssp.korea.ac.kr/assets/papers/ASE25.pdf)** (ASE 2025) — [code](https://github.com/choseogyeong/CRYPTBARA)
- **[CryptoScope: Utilizing Large Language Models for Automated Cryptographic Logic Vulnerability Detection](http://arxiv.org/abs/2508.11599)** (2025)
- **[CryptoLLM: Harnessing the Power of LLMs to Detect Cryptographic API Misuse](https://link.springer.com/chapter/10.1007/978-3-031-70879-4_18)** (ESORICS 2024)

### Industry / OSS
- **[Crypto Finder](https://github.com/scanoss/crypto-finder)** — [SCANOSS](https://scanoss.com/)
- **[snyk](https://github.com/snyk/cli)** — [Snyk AI Security Platform](https://snyk.io/)
- **[SonarQube](https://github.com/SonarSource/sonarqube)** — [Sonar](https://www.sonarsource.com/products/sonarqube/)
- **[Opengrep](https://github.com/opengrep/opengrep)** — [Opengrep](https://www.opengrep.dev/)
- **[Semgrep](https://github.com/semgrep/semgrep)** — [Semgrep](https://semgrep.dev/)
- **[SpotBugs](https://github.com/spotbugs/spotbugs)**

### Other
- **[A Multimodal Framework for Detecting Cryptographic API Misuse](https://books.google.com/books?hl=en&lr=lang_en&id=lYEgEgAAQBAJ&oi=fnd&pg=PA303&dq=cryptographic+API+misuse&ots=9VvWXxcFFL&sig=GmIMi1OZ1LbROzau466DYIQG4dE#v=onepage&q=cryptographic%20API%20misuse&f=false)** (ICICS 2026)
- **[CryptoEval](https://arxiv.org/abs/2112.06146)** (IET Information Security 2023)

## LLM-Related
- **[Can generative AI detect and fix real-world cryptographic misuses?](https://www.sciencedirect.com/science/article/pii/S016412122500319X?via%3Dihub)** (2026)
- **[Automatic Generation of a Cryptography Misuse Taxonomy](https://arxiv.org/abs/2509.10814)** (2025) — [artifact](https://github.com/ufooooy/LLM-CMT)
- **[Beyond Rules: How Large Language Models Are Redefining Cryptographic Misuse Detection](https://doi.org/10.5220/0013524100003979)** (SECRYPT 2025) — [thesis](https://ontariotechu.scholaris.ca/server/api/core/bitstreams/85637cc8-f970-459c-92a8-9bf8971cb4df/content)
- **[ChatGPT's Potential in Cryptography Misuse Detection: A Comparative Analysis with Static Analysis Tools](https://arxiv.org/abs/2409.06561)** (ESEM 2024)
- **[Beyond Static Tools: Evaluating Large Language Models for Cryptographic Misuse Detection](https://arxiv.org/abs/2411.09772)** (2024)

## Repair
- **[Supporting Error Chains in Static Analysis](https://arxiv.org/abs/2403.07808)** (SANER 2024)
- **[CryptoTutor: Teaching Secure Coding Practices through Misuse Pattern Detection](https://dl.acm.org/doi/abs/10.1145/3368308.3415419)** (SIGITE 2020)
- **[Vulvet: Vetting of Vulnerabilities in Android Apps to Thwart Exploitation](https://dl.acm.org/doi/fullHtml/10.1145/3376121)** (ACM DTRAP 2020)
- **[Hotfixer — Automated Hotfixes for Misuses of Crypto  APIs](https://ualberta.scholaris.ca/bitstreams/eed961a8-232d-4c01-be69-461379751b9e/download)** (2020)
- **[VuRLE: Automatic vulnerability detection and repair by learning from examples](https://link.springer.com/chapter/10.1007/978-3-319-66399-9_13)** (ESORICS 2017)
- **[CDRep: Automatic Repair of Cryptographic Misuses in Android Applications](https://dl.acm.org/doi/10.1145/2897845.2897896)** (AsiaCCS 2016)

## Benchmarks
- **[CryptoAPI-Bench](https://github.com/CryptoAPI-Bench/CryptoAPI-Bench)** — Java
- **[CamBench](https://github.com/CROSSINGTUD/CamBench)** — Java
- **[Parametric Crypto Misuses](https://dl.acm.org/doi/10.1109/MSR.2019.00023)** — Java
- **[PyCryptoBench](https://github.com/lizyen10/cryptographicAPImisuse/tree/main/src/data)** — Python
- **[MASC artifact](https://github.com/Secure-Platforms-Lab-W-M/MASC-Artifact)** — Java
- **[LICMA study dataset](https://github.com/stg-tud/python-crypto-misuses-study-results)** — Python
- **[OWASP Benchmark](https://github.com/OWASP-Benchmark/BenchmarkJava)** — Java
- **[ApacheCryptoAPI-Bench](https://github.com/CryptoAPI-Bench/ApacheCryptoAPI-Bench)** — Java

## Analysis Frameworks
**Java / Android**
- **[SootUp](https://github.com/soot-oss/SootUp)**
- **[WALA](https://github.com/wala/WALA)**

**C / C++ / LLVM**
- **[PhASAR](https://github.com/secure-software-engineering/phasar)**
- **[SVF](https://github.com/SVF-tools/SVF)**
- **[Clang Static Analyzer](https://clang-analyzer.llvm.org/)**

**Multi-language**
- **[Joern](https://github.com/joernio/joern)**
- **[cpg](https://github.com/Fraunhofer-AISEC/cpg)**
- **[Opengrep](https://github.com/opengrep/opengrep)**
- **[CodeQL](https://github.com/github/codeql)**

## Other
- **[Summary of the Fourth International Workshop on Software Vulnerability Management (SVM 2026)](https://dl.acm.org/doi/10.1145/3844691.3844710)** (ACM SIGSOFT SEN 2026)
- **[Analysis of Cryptographic CVEs: Lessons Learned and Perspectives](https://link.springer.com/chapter/10.1007/978-3-031-57537-2_13)** (2024)
- **[Intelligent Detection of Cryptographic Misuse in Android Applications Based on Program Slicing andTransformer-Based Classifier](https://www.mdpi.com/2079-9292/12/11/2460)** (Electronics 2023)
- **[Research on Cryptographic Misuse Detection for Android Applications Based on Dynamic and Static Combination](https://doi.org/10.1145/3603273.3634708)** (AAIA 2023)
- **[FUM: A Framework for API Usage Constraint and Misuse Classification](https://www.bodden.de/pubs/ssn22+fum.pdf)** (SANER 2022)
- **[Analyzing Cryptographic API Usages Using HMM and N-Gram](https://csse.szu.edu.cn/staff/xuzw/paper/2020_tase_CryptoAPI.pdf)** (TASE 2020)
- **[MutAPI — Exposing Library API Misuses via Mutation Analysis](https://doi.org/10.1109/ICSE.2019.00093)** (ICSE 2019)
- **[Lessons from Building Static Analysis Tools at Google](https://cacm.acm.org/magazines/2018/4/226371-lessons-from-building-static-analysis-tools-at-google/fulltext)** (CACM 2018)
- **[Source Attribution of Cryptographic API Misuse in Android Applications](https://dl.acm.org/doi/10.1145/3196494.3196538)** (AsiaCCS 2018) — [PDF](http://lersse-dl.ece.ubc.ca/record/324)
- **[Inferring Crypto API Rules from Code Changes](https://files.sri.inf.ethz.ch/website/papers/diffcode-pldi2018.pdf)** (PLDI 2018) — [project page](https://eth-sri.github.io/publications/paletov2018inferring)
- **[Analyzing the Analyzers: FlowDroid/IccTA, AmanDroid, and DroidSafe](https://dl.acm.org/doi/10.1145/3213846.3213873)** (ISSTA 2018)
- **[In defense of soundiness: a manifesto](https://dl.acm.org/doi/10.1145/2644805)** (CACM 2015)
- **[Modeling and Discovering Vulnerabilities with Code Property Graphs](https://ieeexplore.ieee.org/document/6956589)** (IEEE S&P 2014)
- **[A Few Billion Lines of Code Later](https://cacm.acm.org/magazines/2010/2/69354-a-few-billion-lines-of-code-later/fulltext)** (CACM 2010)
- **[Why Cryptosystems Fail](https://dl.acm.org/doi/10.1145/168588.168615)** (CCS 1993)
