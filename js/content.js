/*
 * 메인 페이지의 문구와 링크, Notes 목록을 이 파일에서 관리합니다.
 * - 문구 수정: 아래 ko / en / zh-Hans(간체) / zh-Hant(번체) / ja 에서 해당 문장을 고치세요.
 *   (모든 언어를 함께 고쳐야 언어 전환 시 내용이 맞습니다. 번체는 대만식 표현 기준입니다.)
 * - 대시보드 링크: SITE.links.projects, projectComponents 또는 activities 에 실제 주소를 넣습니다.
 *   보고서와 영상 등의 자료 링크는 기록용이며 현재 화면에 표시하지 않습니다.
 * - SITE.profile.photo 는 이전 설정 보관용입니다. 현재 사진 프레임은 표시하지 않습니다.
 * - 새 프로젝트 추가: 각 언어의 projects.items 에 같은 id 로 항목을 하나씩 추가하세요.
 * - 짧은 프로젝트 소개: 각 언어 projects.items 의 presentation 에 제목, 유형, 목적, 기여와 상세 두 항목을 씁니다.
 * - Trade News Room 의 기존 학습실 목록은 tradedatalab.legacyProject.rooms 에 보존합니다.
 *   이 기록은 현재 포트폴리오 화면에 나열하지 않습니다.
 * - 탐구 기록 추가: 각 언어의 notes.items 에 title, date(YYYY-MM-DD), summary, tags, link 를 넣으세요.
 *   제목, 요약과 태그는 다섯 언어에 함께 작성합니다. 글이 없으면 섹션과 메뉴가 숨겨집니다.
 * 주의: 가운데점 기호는 쓰지 않습니다.
 */
const SITE = {
  defaultLang: "ko",
  profile: {
    headerName: "Jung Juyeon",
    photo: "" // 예: "assets/profile.jpg"
  },
  links: {
    email: "jjuyeon7725@gmail.com",
    github: "",   // 예: "https://github.com/아이디"
    linkedin: "", // 예: "https://www.linkedin.com/in/아이디"
    projects: {
      axport: "https://semiconductor-trade-project-1st.vercel.app/",
      hanjeongseon: "https://hanjungsun-marketing-project-2nd-gamma.vercel.app/home/?lang=ko",
      tradenews: "https://trade-news-room.vercel.app/",
      tradedatalab: ""
    },
    // KITA 스터디 대시보드가 배포되면 실제 주소를 입력합니다. 비어 있으면 버튼을 표시하지 않습니다.
    activities: {
      kitaStudy: ""
    },
    // 기존 한국어 보고서의 보관용 주소입니다. 현재 카드에 자료 버튼을 만들지 않습니다.
    reports: {
      axport: "assets/projects/axport/axport-us-sample-report.html"
    },
    // Trade Data Lab 전체 주소와 구성 요소 주소를 구분합니다.
    projectComponents: {
      tradenews: "https://trade-news-room.vercel.app/",
      policyline: "https://policy-line-eight.vercel.app/",
      tradeweave: "https://trade-data-lab.vercel.app/"
    },
    projectMaterials: {
      hanjeongseon: {
        brandSite: "https://hanjeongsun-vietnam.vercel.app/",
        homeDemo: "assets/projects/hanjungsun/home-demo.mp4",
        promo: "assets/projects/hanjungsun/promotion.mp4"
      },
      tradenews: { statistics: "assets/projects/tradenews/learning-statistics.png", simulation: "assets/projects/tradenews/supply-simulation.png" },
      tradedatalab: { statistics: "assets/projects/tradenews/learning-statistics.png", simulation: "assets/projects/tradenews/supply-simulation.png" }
    }
  },
  languages: [
    { code: "ko", label: "한국어" },
    { code: "en", label: "EN" },
    { code: "zh-Hans", label: "简体" },
    { code: "zh-Hant", label: "繁體" },
    { code: "ja", label: "日本語" }
  ],

  i18n: {
    /* ======================= 한국어 ======================= */
    ko: {
      htmlLang: "ko",
      header: { navigationLabel: "주 메뉴", languageLabel: "언어 선택" },
      meta: { title: "정주연 Juyeon Jung | 국제통상과 정책 탐구", description: "중국경제통상 학업과 국제행사 협업 경험을 바탕으로, 무역 뉴스와 교역 데이터를 다루는 웹 도구를 만들며 통상과 정책 분야의 연구와 실무를 준비합니다." },
      nav: { about: "About", experience: "Experience", projects: "Projects", now: "Now", notes: "Notes", contact: "Contact" },
      hero: {
        eyebrow: "JUYEON JUNG",
        name: "정주연",
        headline: "중화권 이해와 국제 협업 경험을 바탕으로, 국제통상·정책 분야의 조사와 분석 역량을 쌓고 있습니다.",
        headlineBreakAfter: "중화권 이해와 국제 협업 경험을 바탕으로,",
        intro: "중국경제통상을 공부하고 대만에서 2년간 수학했습니다.\n국제행사에서는 해외 미디어와 기관의 요청과 일정을 조율했습니다.",
        politicalEconomyInterest: "국제정치경제",
        photo: "프로필 사진",
        ctaProjects: "프로젝트 보기",
        ctaContact: "연락하기"
      },
      strengths: {
        title: "강점",
        items: [
          { title: "글로벌 및 지역 이해", desc: "중국경제통상 학업과 대만 현지 수학을 통해 중화권의 언어와 사회를 배웠습니다." },
          { title: "무역 및 시장 데이터 분석", desc: "무역 뉴스, 정책 원문과 교역 통계를 목적에 맞게 정리하고 비교하는 웹 도구를 만듭니다." },
          { title: "프로젝트와 이해관계자 조율", desc: "해외 미디어와 기관, 제작 협력사의 요청과 일정을 정리하고 운영팀과 전달 사항을 조율했습니다." }
        ]
      },
      about: {
        label: "ABOUT",
        title: "소개",
        titleBreakAfter: "",
        body: [
          "한양대학교에서 중어중문학을 전공하고 중국경제통상학을 부전공했으며, 국립대만대학교에서 중국문학 복수학위를 취득했습니다. 대만에서 2년간 중국어로 전공수업을 이수하며 중화권의 언어와 사회를 이해하는 기반을 쌓았습니다.",
          "엑스포럼 글로벌전략사업팀 인턴으로 해외 미디어 협업, 해외 연사와 기관의 초청 및 일정 조율, 산업 행사 자료 조사를 지원했습니다. 서로 다른 관계자의 요청과 조건을 정리하고, 확인한 내용을 문서로 전달하는 실무를 경험했습니다.",
          "무역 AX 교육과정에서는 흩어진 정보를 찾아보고 비교할 수 있도록 웹 대시보드를 제작하고 있습니다.\n개인 프로젝트 Trade Data Lab에서는 뉴스 학습, 정책 발표 전후의 교역액 비교, 교역 상대국과 거래 집중도 탐색을 위한 웹사이트를 각각 만들고 있습니다."
        ],
        moreOpen: "학력, 자격, 활용 도구 펼쳐 보기",
        moreClose: "접기",
        educationTitle: "학력과 교육",
        education: [
          {
            name: "한양대학교",
            period: "2022.03 – 2026.08, 졸업",
            lines: [
              "주전공 중어중문학, 부전공 중국경제통상학",
              "관련 이수 분야: 거시경제학, 국제무역과 통상정책, 중국외교정책, 현대중국사회",
              "GPA 3.81/4.5, 2026년 8월 졸업 우등생 (2025학년도 후기)"
            ]
          },
          {
            name: "국립대만대학교 (National Taiwan University)",
            period: "2023.09 – 2025.06, 현지 수학",
            lines: [
              "중국문학과 복수학위 취득",
              "중국어로 진행되는 전공수업과 과제 이수",
              "낯선 언어 환경에서 부족한 부분을 정리하고 학습 방식을 조정하며 적응"
            ]
          },
          {
            name: "한국무역협회 무역아카데미 무역 AX마스터 2기",
            period: "2026.08 – 2026.12, 수강 중 (2026.12.18 수료 예정)",
            lines: [
              "무역 실무, 데이터 활용, 생성형 AI 활용, 팀 프로젝트",
              "주요 프로젝트: AXPORT, 한정선 베트남 진출 마케팅 대시보드"
            ]
          }
        ],
        languagesTitle: "언어",
        languages: [
          "한국어: 모국어",
          "중국어: HSK 6급 232점 (2025.09), 중국어 전공수업과 현지 생활 경험",
          "영어: TOEIC 880점 (2026.04), TOEIC Speaking IH 150점 (2026)",
          "영문 이메일을 통한 해외 파트너 협업 경험"
        ],
        certsTitle: "자격",
        certs: ["국제무역사 1급 (2026)", "무역영어 1급 (2026)"],
        toolsTitle: "활용 도구와 범위",
        tools: [
          { name: "Excel, Google Sheets", desc: "자료 정리와 업무 진행 현황 관리" },
          { name: "PowerPoint, Word", desc: "보고서와 발표자료 구성" },
          { name: "Notion", desc: "학습과 경험 기록" },
          { name: "Python, pandas, numpy", desc: "기초 학습과 실습" },
          { name: "Flask, Streamlit", desc: "교육 프로젝트 경험" },
          { name: "HTML, CSS, JavaScript", desc: "AI의 도움을 받는 웹 프로토타입 제작과 수정" },
          { name: "생성형 AI와 코딩 보조 도구", desc: "아이디어 구체화, 초안 작성, 화면 구현과 반복 개선" }
        ],
        hobbiesTitle: "취미",
        hobbies: ["외국어 공부", "독서", "러닝"]
      },
      experience: {
        label: "EXPERIENCE",
        title: "실무 경험",
        dutiesTitle: "담당 업무",
        caseTitle: "협업 결과를 근거로 확인한 사례",
        skillsTitle: "이 경험에서 쌓은 역량",
        items: [
          {
            org: "엑스포럼 글로벌전략사업팀",
            role: "인턴",
            period: "2026.03 – 2026.06",
            events: "관련 행사: Smart Tech Korea 2026, TechCon 2026",
            summary: "해외 미디어 파트너 18개사와 소통하며 협업 진행 현황을 관리하고 국제행사 운영을 지원했습니다.",
            duties: [
              "해외 미디어 파트너 후보 조사, 영문 제안과 후속 연락",
              "해외 미디어 파트너 18개사와 소통하고 협업 진행 현황 관리",
              "파트너별 협업 조건, 양측 제공 사항과 계약 상태를 Excel로 정리",
              "영문 자료 전달, 배포 일정 협의, 요청사항 확인",
              "SNS 콘텐츠 기획과 홍보 이미지 제작",
              "산업과 기술 동향 조사, 보도자료 초안 작성 지원",
              "해외 연사 일정과 이동 동선 조율, 현장 안내와 행사 운영 지원"
            ],
            caseText: "협업 조건을 실제 게시 결과와 대조하며 최종 보고서를 정리했습니다. STK 전시회는 9개 매체, TechCon 컨퍼런스는 7개 매체의 게재 근거를 확인했습니다. 확인된 게시물의 화면과 링크를 남겼습니다. 미진행 항목과 확인되지 않은 노출은 구분해 후속 업무를 파악할 수 있도록 정리했습니다.",
            skills: ["해외 파트너 커뮤니케이션", "일정 조율", "진행 현황 관리", "근거를 확인하는 보고 방식"],
            cases: [
              {
                id: "buyers",
                title: "국내외 바이어 프로그램 비교조사",
                summary: "국내외 바이어 프로그램 20개 사례를 지원 혜택, 참여 조건과 비용 정산 방식으로 비교했습니다. 미팅, 출석과 사후 평가가 지원 혜택과 어떻게 연결되는지 정리해 보고했습니다.",
                workflow: ["사례 수집", "혜택과 조건 비교", "차이점 요약", "업무 참고자료 보고"],
                comparison: {
                  headers: ["비교 항목", "확인한 내용"],
                  rows: [
                    ["지원 혜택", "항공과 숙박, 이동 지원, 라운지와 네트워킹"],
                    ["참여 조건", "최소 미팅 수, 행사 출석과 사후 평가"],
                    ["정산 방식", "사전 지원 또는 참여 조건을 충족한 뒤 비용 정산"]
                  ]
                },
                caption: "2026년 4월의 비교표와 업무일지를 바탕으로 조사 항목을 재구성했습니다. 프로그램별 현재 참가 조건을 안내하는 자료는 아닙니다."
              },
              {
                id: "verification",
                title: "해외 미디어 협업 결과 확인",
                workflow: ["협업 조건 확인", "실제 게시 결과 대조", "링크와 화면 기록", "진행 상태 구분"],
                caption: "2026년 6월 16일의 본인 명의 진행 보고서와 업무일지에 근거한 재구성입니다. 약속한 조건, 미진행과 확인 불가를 구분했습니다.",
                summary: "협업 조건을 실제 게시 결과와 대조하며 최종 보고서를 정리했습니다. STK 전시회는 9개 매체, TechCon 컨퍼런스는 7개 매체의 게재 근거를 확인했습니다. 확인된 게시물의 화면과 링크를 남겼습니다. 미진행 항목과 확인되지 않은 노출은 구분해 후속 업무를 파악할 수 있도록 정리했습니다."
              }
            ]
          }
        ],
        casesTitle: "조사와 근거 확인 사례"
      },
      projects: {
        label: "PROJECTS",
        title: "대표 프로젝트",
        intro: "무역과 국제 이슈에서 출발한 질문을 자료와 데이터로 풀어 보는 웹 도구로 정리해 온 기록입니다.",
        labels: {
          problemTitle: "문제",
          resultTitle: "결과",
          roleTitle: "내 역할",
          processTitle: "해결 과정",
          aiTitle: "AI 활용",
          aiAssisted: "AI가 도운 일",
          aiOwned: "내가 판단하고 확인한 일",
          storyProblem: "문제의식",
          storyAction: "내가 한 일",
          storyChange: "달라진 구성",
          dashboard: "대시보드 웹페이지",
          workingServices: "동작 서비스",
          materials: "프로젝트 자료",
          process: "해결 과정",
          aiUse: "AI 활용",
          aiDelegated: "AI에게 맡긴 일",
          aiOwn: "직접 정하고 확인한 일",
          outcome: "결과",
          rooms: "공개된 학습실",
          limits: "한계와 다음 단계",
          lessons: "돌아보며",
          report: "가상 기업 보고서 보기 (한국어 HTML)",
          question: "핵심 질문",
          contribution: "내가 맡은 핵심",
          period: "기간",
          type: "유형",
          status: "상태",
          problem: "해결하려던 문제",
          role: "내가 맡은 일",
          moreOpen: "자세히 보기",
          moreClose: "접기",
          link: "프로젝트 보기",
          background: "배경과 문제",
          methodology: "접근 방법",
          implications: "확인한 점과 의미",
          components: "구성 서비스",
          working: "동작 확인",
          planned: "기획 단계",
          legacyProject: "이전 프로젝트 기록"
        },
        // 순서: 개인 개발 프로젝트 Trade Data Lab을 먼저 보여줍니다.
        items: [
          {
            id: "tradedatalab",
            presentation: {
              guide: {
                "summary": "무역 학습과 데이터 탐색을 위한 웹사이트 세 개를 제작했습니다.",
                "role": "웹사이트별 질문과 화면 구성, 제작 및 결과 확인",
                "problem": "뉴스 학습과 정책 발표 전후 비교, 교역 구조 탐색에는 서로 다른 자료와 화면이 필요했습니다.",
                "process": [
                  "웹사이트마다 다룰 질문과 탐색 목적을 정했습니다.",
                  "뉴스 학습, 정책 전후 비교, 교역 구조 탐색에 맞춰 각각 제작했습니다.",
                  "출처와 기준 기간, 단위를 보여 주는 공통 원칙을 정했습니다."
                ],
                "ai": {
                  "tools": [
                    "Claude Code"
                  ],
                  "assisted": "각 웹사이트의 기획과 기능 구현에 Claude Code의 도움을 받았습니다.",
                  "owned": "웹사이트별 주제와 필요한 기능을 정하고, 결과를 확인해 수정했습니다."
                },
                "result": "Trade News Room, Policyline, Tradeweave를 각각 동작하는 웹사이트로 만들었습니다."
              },
              "title": "Trade Data Lab | 무역과 데이터 웹 프로젝트 모음",
              "type": "개인 프로젝트 (개발 중)",
              "summary": "무역과 데이터를 주제로 서로 다른 목적의 웹사이트를 만드는 개인 프로젝트입니다.",
              "contribution": "Trade Data Lab이라는 이름 아래 웹사이트별 질문과 화면을 정하고 기획부터 제작까지 진행했습니다.",
              "details": [
                "Trade News Room은 뉴스와 개념 학습, Policyline은 정책 발표 전후의 교역액 비교, Tradeweave는 교역 상대국과 집중도 탐색을 위한 사이트입니다.",
                "세 웹사이트는 현재 동작합니다. Fact Desk는 Trade News Room 내부 기능으로, Report Plain과 Trade Notebook은 별도 후속 구성으로 기획 중입니다."
              ],
              "problem": "뉴스 학습, 정책 발표 전후 비교, 교역 구조 탐색은 각각 필요한 자료와 화면 구성이 달랐습니다.",
              "action": "개인 프로젝트 Trade Data Lab 아래 Trade News Room, Policyline, Tradeweave를 각각 기획하고 제작했습니다.",
              "change": "뉴스와 개념 학습, 정책 발표 전후의 교역액, 교역 상대국과 집중도를 목적에 맞는 웹사이트에서 살펴보도록 구성했습니다."
            },
            name: "Trade Data Lab | 무역과 데이터 웹 프로젝트 모음",
            summary: "무역과 데이터를 주제로 여러 웹사이트와 도구를 만드는 개인 프로젝트입니다. Trade News Room, Policyline, Tradeweave는 각각 다른 질문을 다루는 웹사이트이며, 이 프로젝트 아래 후속 도구도 기획하고 있습니다.",
            question: "무역 뉴스 학습, 정책 발표 전후의 비교, 교역 구조 탐색에 맞는 웹 도구를 각각 어떻게 만들 수 있을까?",
            contribution: "Trade Data Lab의 주제와 웹사이트별 질문, 공통 표시 원칙을 기획했습니다. Trade News Room, Policyline, Tradeweave를 각각 제작하고, 후속 도구의 구성을 정리하고 있습니다.",
            period: "2026",
            type: "개인 프로젝트",
            status: "Trade News Room, Policyline, Tradeweave 동작 / 나머지 구성 기획 중",
            problem: "뉴스를 통해 무역 개념을 배우는 일, 정책 발표 전후의 교역액을 비교하는 일, 국가별 거래 구조를 살펴보는 일에는 서로 다른 자료와 탐색 방식이 필요합니다.",
            role: [
              "무역과 데이터 웹사이트를 지속적으로 만드는 개인 프로젝트 기획",
              "Trade News Room, Policyline, Tradeweave의 개별 제작과 기능 구성",
              "출처, 기준 기간과 단위, 사실과 해석의 표시 원칙 정리",
              "Fact Desk, Report Plain, Trade Notebook의 후속 구성 기획"
            ],
            caseStudy: {
              background: "무역 뉴스 학습, 정책 발표 전후의 비교, 국가별 교역 구조 탐색에 필요한 자료와 화면은 서로 다릅니다. Trade Data Lab은 이러한 목적에 맞춰 웹사이트와 도구를 하나씩 만들어 가는 개인 프로젝트입니다.",
              methodology: "Trade Data Lab 아래 Trade News Room은 뉴스와 무역 개념의 학습을, Policyline은 정책 발표 전후의 교역액 비교를, Tradeweave는 교역 상대국과 거래 집중도의 확인을 위한 별도 웹사이트로 제작했습니다. 서비스별로 출처와 기준 기간, 단위를 표시하고, 확인된 사실과 해석을 구분하는 것을 공통 원칙으로 삼았습니다.",
              implications: "뉴스의 설명을 그대로 받아들이기 전에 관련 원문과 수치를 확인하고, 더 살펴볼 질문을 찾도록 돕습니다. 정책 발표 전후의 변화만으로 정책 효과나 우회 수출을 확정하지 않으며, 데이터로 확인할 수 있는 범위와 남는 불확실성을 함께 설명합니다.",
              limits: "기획서의 전체 구성은 완성 목표이며, 데이터 연결과 자동 갱신의 실제 구현 범위는 서비스별로 구분해야 합니다. 정책 발표와 같은 시기의 교역 변화를 정책의 인과효과나 우회 수출의 증거로 단정하지 않습니다."
            },
            components: [
              { id: "tradenews", name: "Trade News Room", status: "working", description: "무역 뉴스와 관련 개념을 학습실, 그래프와 퀴즈로 살펴보는 서비스입니다." },
              { id: "policyline", name: "Policyline", status: "working", description: "정책 발표 전후의 교역액 변화를 살펴보는 서비스입니다." },
              { id: "tradeweave", name: "Tradeweave", status: "working", description: "국가별 교역 상대국과 거래 집중도를 살펴보는 서비스입니다." },
              { id: "factdesk", name: "Fact Desk", status: "planned", description: "Trade News Room 안에서 확인된 사실, 해석과 불확실한 점을 나누어 보여줄 기능을 기획하고 있습니다." },
              { id: "reportplain", name: "Report Plain", status: "planned", description: "보고서의 주장, 근거와 한계를 원문 쪽수와 함께 정리하는 서비스를 기획하고 있습니다." },
              { id: "tradenotebook", name: "Trade Notebook", status: "planned", description: "질문, 데이터, 발견과 한계를 담은 분석 노트를 공개하는 구성을 기획하고 있습니다." }
            ],
            note: "Trade Data Lab은 무역과 데이터 관련 웹사이트와 도구를 계속 만들어 가는 개인 프로젝트입니다. Fact Desk는 Trade News Room 내부의 계획 기능이며, Report Plain과 Trade Notebook은 기획 중입니다.",
            legacyProject: {
              id: "tradenews",
              name: "Trade News Room | 뉴스 속 무역 공부방",
              question: "세계 무역 뉴스의 배경과 개념을 데이터와 연결해 이해하고, 그 이해를 학습 기록으로 어떻게 쌓아갈 수 있을까?",
              contribution: "실제 무역 뉴스를 골라 학습 주제를 정하고, 뉴스 요약과 출처에서 통계, 시뮬레이터, 퀴즈와 학습 기록으로 이어지는 학습 흐름을 직접 기획했습니다. 기능 구현과 화면 디자인에는 AI를 활용했습니다. 지금은 학습실 5개를 공개했고 계속 늘려 가고 있습니다.",
              summary: "세계 무역 뉴스를 출발점으로 개념과 데이터를 함께 이해하는 학습 웹사이트",
              period: "2026",
              type: "개인 프로젝트",
              status: "학습실 5개 공개, 5개 안팎을 더 추가할 계획",
              problem: "실제 무역 이슈의 배경과 연결된 개념을 이해하고, 학습 내용을 기록하고 싶었습니다.",
              role: [
                "학습 주제와 뉴스 선정",
                "뉴스 요약과 출처, 통계, 시뮬레이터, 퀴즈, 학습 기록으로 이어지는 학습 흐름 기획",
                "AI를 활용한 기능 구현과 화면 디자인",
                "학습실을 추가하며 화면과 학습 흐름 개선"
              ],
              caseStudy: {
                process: "학습실마다 실제 무역 뉴스 하나를 출발점으로 삼습니다. 뉴스 요약과 출처를 읽고, 통계 그래프나 시뮬레이터에서 숫자를 직접 바꿔 본 뒤, 퀴즈와 용어 확인, 학습 메모로 이어집니다. 실제 통계 그래프와 단순화한 학습용 모형을 구분해 배치하고, 그래프만으로 변화의 원인을 단정하거나 모형의 계산값을 실제 전망으로 받아들이지 않도록 안내했습니다.",
                ai: { delegated: "기능 구현과 화면 디자인", own: "학습 주제와 뉴스 선정, 학습실의 구성과 순서, 화면에 담을 내용은 직접 기획했고, 만들어진 결과물을 확인하며 고쳤습니다." },
                outcome: "공개 사이트에 학습실 5개를 만들었고, 학습실마다 뉴스와 연결된 시뮬레이터를 하나씩 두었습니다. 무역 뉴스 탐색, 용어사전, 무역 맵, 브라우저에 저장되는 학습 기록과 사이트 안의 학습 내용을 찾아 주는 안내 챗봇도 함께 구현했습니다.",
                limits: "학습 기록은 계정 연동 없이 해당 브라우저에 저장되고, 안내 챗봇은 사이트 안의 자료를 찾는 규칙 기반 기능입니다. 시뮬레이터는 단순화한 학습 모형이며, 외부 뉴스와 통계의 정확성이나 학습 효과는 아직 따로 검증하지 않았습니다. 앞으로 학습실을 5개 안팎으로 더 추가할 계획입니다.",
                lessons: "혼자 공부하려고 만들었지만, 시간이 부족해 꾸준히 관리하지 못했고 실제 공부에는 아직 거의 쓰지 못했습니다. 만드는 것과 계속 쓰는 것은 다른 일이라는 걸 알게 됐습니다. 학습실을 더 채우고, 제가 실제로 쓰는 도구가 되도록 발전시키고 싶습니다."
              },
              rooms: [
                { id: "urea", title: "요소수 대란과 수입처 다변화 (2021)", tool: "조달 비중 시뮬레이터" },
                { id: "graphite", title: "중국의 흑연 수출 허가제 (2023)", tool: "공급 감소와 가격 시뮬레이터" },
                { id: "gallium", title: "갈륨과 게르마늄 수출 허가제 (2023)", tool: "재고와 허가 대기 기간 시뮬레이터" },
                { id: "tariff", title: "한미 무역합의와 15% 관세 (2025)", tool: "관세 부담 시뮬레이터" },
                { id: "redsea", title: "홍해 사태와 희망봉 우회 (2023)", tool: "항로와 운임 시뮬레이터" }
              ],
              materials: [
                { id: "statistics", label: "통계와 출처 안내 화면 (한국어)" },
                { id: "simulation", label: "조달 비중 시뮬레이터 화면 (한국어)" }
              ],
              note: "계속 발전시키고 있는 개인 프로젝트입니다."
            },
            materials: [
              { id: "statistics", label: "Trade News Room: 통계와 출처 안내 화면 (한국어)" },
              { id: "simulation", label: "Trade News Room: 조달 비중 시뮬레이터 화면 (한국어)" }
            ]
          },
          {
            id: "axport",
            presentation: {
              guide: {
                "summary": "반도체 수출 검토에서 규제와 사업성 참고점수, 자료 부족을 구분하도록 구성했습니다.",
                "role": "홈페이지 기획과 UI/UX, 보고서 정보 구조와 표현 개선",
                "problem": "규제상 제약과 사업성 점수, 미확인 정보가 함께 제시되면 판단 기준을 구분하기 어려웠습니다.",
                "process": [
                  "홈페이지에서 다섯 검토 영역과 이용 흐름을 안내했습니다.",
                  "보고서의 규제 검토를 사업성 참고점수와 나눴습니다.",
                  "요약을 상세 근거와 연결하고 기준일과 자료 부족을 표시했습니다."
                ],
                "ai": {
                  "tools": [
                    "ChatGPT (Codex)",
                    "Gemini"
                  ],
                  "assisted": "랜딩페이지 디자인 구성을 지원받았습니다.",
                  "owned": "정보 구조와 표시 기준을 정하고 화면과 문구를 확인해 수정했습니다."
                },
                "result": "팀은 요약과 상세 근거, 보고서 내보내기를 연결한 대시보드 프로토타입을 완성했습니다."
              },
              "title": "AXPORT | 반도체 수출 의사결정 대시보드",
              "type": "팀 프로젝트 (프로토타입)",
              "summary": "반도체 수출에 필요한 규제와 시장 정보를 모은 사전 검토 대시보드입니다.",
              "contribution": "홈페이지를 기획하고, 규제 확인과 사업성 점수가 구분되도록 보고서 구성과 문구를 다듬었습니다.",
              "details": [
                "반응형 레이아웃과 다국어 화면을 구성했습니다.",
                "보고서 요약에서 상세 근거로 이어지는 정보 구조를 정리했습니다."
              ],
              "problem": "규제상 제약과 사업성 점수, 자료가 없는 항목이 한데 제시되면 판단 기준을 구분하기 어려웠습니다.",
              "action": "홈페이지를 기획하고, 규제 확인과 사업성 평가가 나뉘도록 보고서의 구성과 표현을 다듬었습니다.",
              "change": "요약에서 상세 근거로 이어지게 하고, 데이터 기준일과 자료 부족을 표시해 결과의 근거를 살펴보도록 했습니다."
            },
            name: "AXPORT | 반도체 수출 의사결정 대시보드",
            question: "반도체 수출에서 규제에 따른 제약과 시장의 기회를 어떻게 구분해 검토하고, 판단의 근거를 전달할 수 있을까?",
            contribution: "메인 홈페이지의 기획과 UI/UX, 반응형 레이아웃과 다국어 화면을 담당했습니다. 규제 확인과 사업성 평가가 구분되도록 보고서 구성과 표현을 개선했습니다. 요약에서 상세 근거로 이어지는 정보 구조를 다듬고, 데이터 기준일과 확인되지 않은 정보를 표시해 사용자가 결과의 의미와 한계를 이해하도록 했습니다.",
            summary: "반도체 수출을 검토할 때 필요한 정보를 모은 사전검토 대시보드",
            period: "2026.09",
            type: "무역 AX마스터 교육 팀 프로젝트",
            status: "프로토타입 결과물",
            problem: "규제, 시장성, 가격, 물류, 안정성 정보가 흩어져 있었습니다. 한 화면에 모으더라도 규제상 제약, 사업성 점수와 자료가 없는 항목이 같은 무게로 읽히면 판단을 잘못 이끌 수 있었습니다.",
            role: ["메인 홈페이지 기획과 UI/UX 디자인", "반응형 레이아웃과 다국어 화면", "PDF 보고서와 분석 결과 보고서의 구성 및 문구 개선", "서비스 소개와 발표자료 작업"],
            caseStudy: {
              process: "홈페이지에서는 서비스 소개와 이용 방법으로 다섯 검토 영역과 이용 흐름을 안내했습니다. 보고서는 요약에서 상세 근거로 이어지게 하고, 규제 검토를 사업성 참고점수와 분리했습니다. 자료가 없는 항목은 자료 부족으로 표시하고, 데이터 기준일을 함께 보여 주도록 구성했습니다.",
              ai: { delegated: "랜딩페이지 디자인 구성 (ChatGPT Codex, Gemini)", own: "홈페이지와 보고서의 정보 구조, 규제 검토와 참고점수, 자료 부족을 나누어 보여 주는 방식은 직접 기획했고, 화면과 문구를 확인하며 고쳤습니다." },
              outcome: "다섯 영역의 요약과 상세 근거, 보고서 내보내기를 연결한 웹 대시보드를 팀으로 완성했습니다. 공개한 가상 기업의 미국 수출 보고서(2026-11-11 작성, 분석 기준일 2026-11-10)에는 조건부 검토 상태와 근거 반영률 56%가 표시되고, 자료가 없는 가격과 물류 항목은 자료 부족으로 나타납니다. 56%는 이 보고서 예시의 값입니다.",
              limits: "일부 통계 조회 실패와 기업 기재값의 유효기간 때문에 미평가 항목이 남아 있습니다. 참고점수와 근거 반영률은 수출 성공확률이나 판단 정확도를 뜻하지 않습니다. 통계의 대상 범위와 기준일, 입력 자료의 유효성은 추가로 확인해야 합니다.",
              lessons: "처음 해 보는 일, 처음 접하는 개념, 처음 만드는 대시보드라 전체 흐름을 따라가기에도 벅찼습니다. 그 안에서 제가 할 수 있는 디자인에 집중했습니다.",
              background: "반도체 수출 사전 검토에는 규제, 시장성, 가격, 물류와 안정성 정보가 함께 필요합니다. 흩어진 자료를 모으는 것에 더해 규제에 따른 제약, 사업성 참고점수와 자료 부족이 서로 다른 판단 근거임을 보여주는 것이 과제였습니다.",
              methodology: "교육 팀 프로젝트로 다섯 영역을 살펴보는 대시보드 프로토타입을 만들었습니다. 저는 홈페이지와 보고서의 정보 구조를 다듬고, 요약에서 상세 근거로 이어지도록 구성했습니다. 규제 검토를 참고점수와 분리하고 데이터 기준일과 확인하지 못한 정보를 표시했습니다.",
              implications: "수출 검토를 돕는 화면에서는 점수뿐 아니라 근거의 범위와 비어 있는 정보도 읽을 수 있어야 한다는 점을 배웠습니다. 결과물은 사전 검토용 프로토타입이며, 실제 수출 성과나 규제 판단의 정확성을 검증한 사례는 아닙니다."
            },
            note: "팀 프로젝트입니다. 분석 엔진과 전체 서비스는 팀 결과물이며, 제 기여는 위에 적은 범위입니다."
          },
          {
            id: "hanjeongseon",
            presentation: {
              guide: {
                "summary": "베트남 진출 준비에 필요한 현지 정보와 오늘 할 일을 HOME에 연결했습니다.",
                "role": "HOME 기획과 구현, 소개 홈페이지와 홍보영상 제작",
                "problem": "현지 정보와 마케팅 준비 일정이 흩어져 다음에 할 일을 파악하기 어려웠습니다.",
                "process": [
                  "HOME에 현지 일정과 뉴스, 업무 진척을 모았습니다.",
                  "목표일부터 준비 일정을 역산하도록 구성했습니다.",
                  "탐색용 기사와 확인된 공지를 나눴습니다."
                ],
                "ai": {
                  "tools": [
                    "Claude Code",
                    "Codex",
                    "Google Flow",
                    "Higgsfield"
                  ],
                  "assisted": "HOME의 코드 구현과 별도 소개 홈페이지 및 홍보영상 제작을 지원받았습니다.",
                  "owned": "HOME 정보와 일정 방식, 뉴스 구분 및 홈페이지와 영상 구성을 정하고 결과를 직접 확인해 수정했습니다."
                },
                "result": "베트남 진출을 가정한 팀 프로토타입에 일정과 준비 상황을 확인하는 HOME을 구현했습니다."
              },
              "title": "한정선 | 베트남 진출 마케팅 대시보드",
              "type": "팀 프로젝트 (프로토타입)",
              "summary": "식품 브랜드의 베트남 다낭 진출을 가정해 현지 정보와 준비 일정을 모은 대시보드입니다.",
              "contribution": "HOME을 기획하고 구현해 현지 일정과 뉴스, 오늘 할 일을 한 화면에 연결했습니다.",
              "details": [
                "목표일부터 준비 일정을 역산하고, 탐색용 기사와 확인된 공지를 구분했습니다.",
                "별도로 베트남 소개 홈페이지와 홍보영상을 기획하고 제작했습니다."
              ],
              "problem": "베트남 현지 정보와 마케팅 준비 일정이 흩어져, 담당자가 다음에 할 일을 정하기 어려웠습니다.",
              "action": "HOME을 기획하고 구현하며 목표일부터 준비 일정을 역산하고, 현지 일정과 뉴스, 업무 진척을 연결했습니다.",
              "change": "오늘 할 일과 캠페인 진행 상태를 한 화면에서 살펴보고, 탐색용 기사와 확인된 공지를 구분하도록 구성했습니다."
            },
            name: "한정선 | 베트남 진출 마케팅 대시보드",
            question: "한국 식품 브랜드의 베트남 진출을 준비할 때, 현지 정보를 어떻게 실행 가능한 마케팅 계획으로 연결할 수 있을까?",
            contribution: "마케팅 담당자가 현지 정보와 준비 상황을 바탕으로 다음 행동을 정할 수 있도록 HOME을 기획하고 구현했습니다. 목표일부터 준비 일정을 역산하고, 현지 일정과 뉴스, 업무 진척을 연결해 오늘 할 일과 캠페인 진행 상태를 파악하도록 구성했습니다. 베트남 소개 홈페이지와 홍보영상도 기획하고 제작했습니다.",
            summary: "베트남 다낭 진출을 가정해 현지 정보와 마케팅 준비 일정을 모은 업무 도구. 베트남 소개 홈페이지와 홍보영상 제작 포함",
            period: "2026.10",
            type: "무역 AX마스터 교육 팀 프로젝트",
            status: "발표 버전 프로토타입, 뉴스 영향 시각화는 개선 계획",
            problem: "현지 정보와 캠페인 준비 일정이 흩어져 다음에 해야 할 일을 파악하기 어려웠습니다.",
            role: [
              "HOME 화면 기획과 구현",
              "목표일을 기준으로 준비 일정을 역산하는 캘린더 구성",
              "현지 일정과 뉴스, 업무 진척을 한 화면에 정리",
              "뉴스를 기사 목록과 확인된 공지로 나누는 기준 설계",
              "베트남 소개 홈페이지와 홍보영상 기획 및 제작"
            ],
            caseStudy: {
              process: "팀 대시보드는 현지조사에서 얻은 정보를 일정, 콘텐츠 제작, 크리에이터 협업과 성과 관리로 연결합니다. 저는 그중 HOME에 현지 일정, 뉴스와 준비 상황을 모아 다음 행동을 파악하도록 구성했습니다. 뉴스는 쉽게 탐색하는 기사 목록과 확인된 공지로 나누어, 정보를 찾는 과정과 판단 근거를 확인하는 과정을 구분했습니다.",
              ai: {
                delegated: "HOME 기능 구현, 베트남 소개 홈페이지 디자인, 홍보영상 제작 (Claude Code, Codex, Google Flow, Higgsfield)",
                own: "HOME에 담을 정보와 일정 역산 방식, 뉴스 구분 기준, 소개 홈페이지와 홍보영상의 구성은 직접 기획했고, 결과물을 확인하며 고쳤습니다."
              },
              outcome: "팀 시연 영상의 HOME 구간에서 캘린더, 이벤트 설정과 뉴스 화면을 확인할 수 있습니다. 별도로 제작한 베트남 소개 홈페이지와 홍보영상도 함께 공개합니다.",
              limits: "베트남 진출을 가정한 교육용 프로토타입이며, 발표자료의 업무 시간 비교는 실측이 아닌 추정치입니다. 발표에서는 뉴스를 모으는 데서 나아가 한정선의 진출에 어떤 의미가 있는지 보여 달라는 피드백을 받았습니다. 그래서 기회는 초록, 주의는 노랑, 위험은 빨강, 근거가 부족하면 회색으로 보류하는 영향 분류와 필터를 계획하고 있으며, 아직 구현하지 않았습니다.",
              lessons: "두 번째 대시보드 프로젝트에서 처음으로 기능 하나를 직접 기획하고 구현까지 해 봤습니다. 이렇다 할 성과로 이어지지는 못했지만, 기획한 것을 동작하는 화면으로 만들어 본 첫 경험이었습니다.",
              background: "한국 식품 브랜드의 베트남 다낭 진출을 가정한 팀 프로젝트입니다. 현지 정보와 마케팅 준비 일정이 흩어져 있을 때 담당자가 다음 행동을 정하기 어렵다는 문제를 다뤘습니다.",
              methodology: "저는 HOME에서 현지 일정, 뉴스와 업무 진척을 연결하고 목표일부터 준비 일정을 역산하도록 기획하고 구현했습니다. 탐색용 기사와 확인된 공지를 구분했으며, 별도로 베트남 소개 홈페이지와 홍보영상을 제작했습니다.",
              implications: "정보를 한곳에 모으는 데서 나아가 준비 일정과 다음 행동으로 연결하는 구성이 중요하다는 점을 확인했습니다. 뉴스의 기회와 위험을 시각화하는 기능은 아직 개선 계획이며, 실제 시장 진출이나 마케팅 효과를 검증한 결과물은 아닙니다."
            },
            materials: [
              { id: "brandSite", label: "베트남 소개 홈페이지 (교육용 프로토타입)" },
              { id: "homeDemo", label: "HOME 시연 (팀 영상 발췌, 한국어)" },
              { id: "promo", label: "베트남 홍보영상" }
            ],
            note: "팀 프로젝트입니다. 전체 대시보드는 팀 결과물이며, 제 기여는 HOME, 베트남 소개 홈페이지와 홍보영상을 중심으로 위에 적은 범위입니다."
          }
        ],
        extraTitle: "추가 프로젝트와 활동",
        extraOpen: "펼쳐 보기",
        extraClose: "접기",
        extra: [
          { id: "kita-study", linkKey: "kitaStudy", period: "2026.08 – 2026.12", dashboardLabel: "대시보드 바로가기", name: "KITA 보고서 스터디", meta: "무역 AX 교육과 병행한 보고서 스터디", desc: "국제통상 이슈를 읽고 발제 자료 준비. CPTPP 관련 보고서의 국외 파트 발제 준비와 소개글 작성" },
          {
            "id": "kotra-finance",
            "name": "공공기관 재무자료 읽기 | KOTRA",
            "meta": "학부 개인 과제",
            "desc": "학부 수업에서 KOTRA의 2020~2024년 공개 재무자료를 바탕으로 자산과 부채, 수입과 지출의 변화를 정리했습니다. 공공기관의 재원 구조를 살펴본 개인 과제입니다."
          },
          { name: "그 외 활동", desc: "인문과학대학 학생회 서기 (2023), 목요채플 합창 봉사 (2025), 댄스동아리 Ars Amandi (2022), 카페 ZITTEN 근무 (2022–2023)" }
        ]
      },
      now: {
        "label": "NOW",
        "title": "지금 하고 있는 일",
        "asOf": "기준일 2026.11.16",
        "statement": "현재는 무역 AX 교육과 개인 웹 프로젝트를 병행하며,\n영어와 경제학 및 통계의 기초를 보완하고 있습니다.",
        "doingTitle": "현재 진행 중",
        "doing": [
          "무역 AX마스터 과정 수강과 팀 프로젝트 경험 정리 (2026.12.18 수료 예정)",
          "개인 프로젝트 Trade Data Lab 아래 무역과 데이터를 다루는 웹사이트 제작과 확장",
          "별도 기업 연계 캡스톤의 공공서비스 제공 기관 AI 상담 챗봇 개발 착수 준비",
          "TOEFL 100+를 목표로 영어 학습과 경제학 및 통계 기초 보완",
          "국제기구와 국제정책 분야의 진로 탐색, 개인 포트폴리오와 탐구 기록 축적"
        ],
        "interestsTitle": "관심 분야",
        "interests": [
          "중국과 동아시아",
          "국제관계와 국제정치경제",
          "국제통상과 무역정책",
          "공급망, 수출통제와 제재",
          "미중 관계가 무역과 산업에 미치는 영향",
          "자료와 데이터를 바탕으로 국제 이슈를 설명하는 방법"
        ],
        "goals": [
          {
            "period": "2027",
            "title": "통상과 정책 분야 실무",
            "items": [
              "통상 분야 RA 또는 기업 GR 및 통상전략 인턴 지원 준비"
            ]
          },
          {
            "period": "2028",
            "title": "미국 대학원 진학",
            "items": [
              "가을학기 국제관계 및 공공정책 분야 석사 입학을 목표로 준비"
            ]
          }
        ]
      },
      notes: {
        label: "NOTES",
        title: "탐구 기록",
        // 실제 글만 추가합니다. 비어 있으면 이 언어의 섹션과 메뉴가 숨겨집니다.
        items: []
      },
      contact: {
        label: "CONTACT",
        title: "연락",
        text: "문의와 협업 제안은 이메일로 보내주세요.",
        form: {
          nameLabel: "이름",
          emailLabel: "회신받을 이메일",
          messageLabel: "내용",
          submitLabel: "이메일 작성창 열기",
          hint: "작성한 내용을 이메일 앱으로 옮깁니다. 보내기는 이메일 앱에서 완료합니다.",
          subject: "포트폴리오 문의"
        },
        email: "이메일 보내기",
        github: "GitHub",
        linkedin: "LinkedIn"
      },
      footer: "© 2026 Juyeon Jung"
    },

    /* ======================= English ======================= */
    en: {
      htmlLang: "en",
      header: { navigationLabel: "Main navigation", languageLabel: "Select language" },
      meta: {
        title: "Juyeon Jung | Global Trade & Policy Research",
        description: "Drawing on studies in Chinese economy and trade and experience coordinating international events, I build web tools for trade news and data while preparing for research and work in trade and policy."
      },
      nav: { about: "About", experience: "Experience", projects: "Projects", now: "Now", notes: "Notes", contact: "Contact" },
      hero: {
        eyebrow: "JUYEON JUNG",
        name: "Juyeon Jung",
        headline: "Drawing on my understanding of the Chinese-speaking world and experience in international collaboration, I am developing research and analytical skills in international trade and policy.",
        headlineBreakAfter: "Drawing on my understanding of the Chinese-speaking world and experience in international collaboration,",
        intro: "I studied Chinese economy and trade and spent two years studying in Taiwan.\nAt international events, I coordinated requests and schedules with overseas media and institutions.",
        politicalEconomyInterest: "International political economy",
        photo: "Profile photo",
        ctaProjects: "View projects",
        ctaContact: "Contact me"
      },
      strengths: {
        title: "Strengths",
        items: [
          {
            title: "Global & Regional Expertise",
            desc: "Studied the language and societies of the Chinese-speaking world through Chinese economy and trade coursework and study in Taiwan."
          },
          {
            title: "Trade & Market Data Analytics",
            desc: "Build web tools to organize and compare trade news, original policy documents and trade statistics for specific uses."
          },
          {
            title: "Project & Stakeholder Management",
            desc: "Organized requests and schedules across overseas media, institutions and production partners, and coordinated information with the operations team."
          }
        ]
      },
      about: {
        label: "ABOUT",
        title: "About me",
        titleBreakAfter: "",
        body: [
          "I majored in Chinese Language and Literature at Hanyang University, with a minor in Chinese Economy and Trade, and earned a dual degree in Chinese Literature at National Taiwan University. Two years of major coursework taught in Chinese in Taiwan gave me a foundation for understanding the language and societies of the Chinese-speaking world.",
          "As an intern on EXPORUM's Global Strategy Business Team, I supported overseas media collaboration, invitations and scheduling for international speakers and institutions, and research on industry events. I gained experience organizing different stakeholders' requests and conditions and communicating verified information in writing.",
          "In the Trade AX training program, I build web dashboards to help users find and compare scattered information.\nUnder my personal project Trade Data Lab, I create separate websites for learning from news, comparing trade values before and after policy announcements, and exploring trading partners and trade concentration."
        ],
        moreOpen: "Show education, certifications and tools",
        moreClose: "Close",
        educationTitle: "Education",
        education: [
          {
            name: "Hanyang University",
            period: "Mar 2022 – Aug 2026, Graduated",
            lines: [
              "Major in Chinese Language and Literature, minor in Chinese Economy and Trade",
              "Related coursework: Macroeconomics, International Trade and Trade Policy, Chinese Foreign Policy, Contemporary Chinese Society",
              "GPA 3.81/4.5, graduated with honors in August 2026 (2025 academic year)"
            ]
          },
          {
            name: "National Taiwan University",
            period: "Sep 2023 – Jun 2025, study in Taiwan",
            lines: [
              "Dual degree in Chinese Literature",
              "Completed major courses and assignments taught in Chinese",
              "Adapted to an unfamiliar language environment by identifying gaps and adjusting how I studied"
            ]
          },
          {
            name: "KITA Trade Academy, Trade AX Master Program (Cohort 2)",
            period: "Aug 2026 – Dec 2026, in progress (completion expected Dec 18, 2026)",
            lines: [
              "Trade practice, data use, generative AI, team projects",
              "Main projects: AXPORT, Hanjungsun Vietnam market entry marketing dashboard"
            ]
          }
        ],
        languagesTitle: "Languages",
        languages: [
          "Korean: native",
          "Chinese: HSK Level 6, 232 points (Sep 2025); major courses and daily life in Chinese",
          "English: TOEIC 880 (Apr 2026), TOEIC Speaking IH, 150 points (2026)",
          "Collaborated with overseas partners via English email"
        ],
        certsTitle: "Certifications",
        certs: ["International Trade Specialist, Level 1 (2026)", "Trade English, Level 1 (2026)"],
        toolsTitle: "Tools and how I use them",
        tools: [
          { name: "Excel, Google Sheets", desc: "Organizing data and tracking work progress" },
          { name: "PowerPoint, Word", desc: "Structuring reports and presentations" },
          { name: "Notion", desc: "Recording learning and experiences" },
          { name: "Python, pandas, numpy", desc: "Basic study and practice" },
          { name: "Flask, Streamlit", desc: "Used in training projects" },
          { name: "HTML, CSS, JavaScript", desc: "Building and editing web prototypes with AI assistance" },
          { name: "Generative AI and coding assistants", desc: "Shaping ideas, drafting, building screens and iterating" }
        ],
        hobbiesTitle: "Hobbies",
        hobbies: ["Learning foreign languages", "Reading", "Running"]
      },
      experience: {
        label: "EXPERIENCE",
        title: "Work experience",
        dutiesTitle: "Responsibilities",
        caseTitle: "Checking collaboration outcomes against evidence",
        skillsTitle: "Skills built",
        items: [
          {
            org: "EXPORUM, Global Strategy Business Team",
            role: "Intern",
            period: "Mar 2026 – Jun 2026",
            events: "Events: Smart Tech Korea 2026, TechCon 2026",
            summary: "Communicated with 18 overseas media partners, tracked collaboration progress, and supported international event operations.",
            duties: [
              "Researched potential overseas media partners; sent proposals and follow-ups in English",
              "Communicated with 18 overseas media partners and tracked collaboration progress",
              "Organized each partner's terms, mutual deliverables and contract status in Excel",
              "Delivered English materials, coordinated distribution schedules and confirmed requests",
              "Planned social media content and created promotional images",
              "Researched industry and technology trends; supported press release drafts",
              "Coordinated schedules and travel for overseas speakers; supported on-site guidance and event operations"
            ],
            caseText: "I compiled the final report by comparing collaboration terms with actual published results. I confirmed publication evidence for 9 media outlets for the STK exhibition and 7 for the TechCon conference. I kept screenshots and links of the confirmed posts. I distinguished items not carried out from unverified exposure so that follow-up tasks were clear.",
            skills: ["Overseas partner communication", "Schedule coordination", "Progress tracking", "Evidence-based reporting"],
            cases: [
              {
                id: "buyers",
                title: "Comparing buyer programs across domestic and international events",
                summary: "Compared 20 buyer program examples across domestic and international events by benefits, participation requirements and reimbursement arrangements. I summarized and reported how meetings, attendance and post-event evaluation were linked to support benefits.",
                workflow: [
                  "Collect examples",
                  "Compare benefits and conditions",
                  "Summarize differences",
                  "Report findings for work reference"
                ],
                comparison: {
                  headers: ["Comparison criterion", "What I examined"],
                  rows: [
                    ["Support benefits", "Flights and accommodation, transport, lounges and networking"],
                    ["Participation requirements", "Minimum meetings, event attendance and post-event evaluation"],
                    ["Reimbursement arrangements", "Support in advance or reimbursement after participation requirements are met"]
                  ]
                },
                caption: "The comparison criteria are reconstructed from the April 2026 comparison sheet and work diary. This is not a guide to the programs' current participation rules."
              },
              {
                id: "verification",
                title: "Checking overseas media collaboration outcomes",
                workflow: [
                  "Check agreed provisions",
                  "Compare actual publications",
                  "Record links and screenshots",
                  "Separate progress statuses"
                ],
                caption: "Reconstructed from progress reports issued in my name on June 16, 2026 and my work diary. I distinguished agreed provisions, items not carried out and items that could not be confirmed.",
                summary: "I compiled the final report by comparing collaboration terms with actual published results. I confirmed publication evidence for 9 media outlets for the STK exhibition and 7 for the TechCon conference. I kept screenshots and links of the confirmed posts. I distinguished items not carried out from unverified exposure so that follow-up tasks were clear."
              }
            ]
          }
        ],
        casesTitle: "Research and evidence-checking examples"
      },
      projects: {
        label: "PROJECTS",
        title: "Selected projects",
        intro: "A record of turning questions from trade and international issues into web tools that work through sources and data.",
        labels: {
          problemTitle: "Problem",
          resultTitle: "Result",
          roleTitle: "My role",
          processTitle: "Approach",
          aiTitle: "AI use",
          aiAssisted: "AI support",
          aiOwned: "My decisions and checks",
          storyProblem: "The problem",
          storyAction: "My work",
          storyChange: "What changed",
          dashboard: "Open dashboard",
          workingServices: "Live services",
          materials: "Project materials",
          process: "Approach",
          aiUse: "AI use",
          aiDelegated: "What I gave to AI",
          aiOwn: "What I decided and checked myself",
          outcome: "Outcome",
          rooms: "Published lessons",
          limits: "Limits and next steps",
          lessons: "Looking back",
          report: "View sample company report (HTML in Korean)",
          question: "Key question",
          contribution: "My key contribution",
          period: "Period",
          type: "Type",
          status: "Status",
          problem: "Problem",
          role: "My role",
          moreOpen: "Details",
          moreClose: "Close",
          link: "View project",
          background: "Background & Problem",
          methodology: "Methodology",
          implications: "Findings & Implications",
          components: "Component services",
          working: "Working",
          planned: "Planned",
          legacyProject: "Earlier project record"
        },
        items: [
          {
            id: "tradedatalab",
            presentation: {
              guide: {
                "summary": "I built three websites for learning about trade and exploring trade data.",
                "role": "Defined each website’s questions and layout, built it and checked the results",
                "problem": "Learning from news, comparing trade around policy announcements and exploring trade structures called for different data and screens.",
                "process": [
                  "Defined the question and purpose of each website.",
                  "Built separate websites for news learning, policy comparisons and trade structures.",
                  "Set shared principles for showing sources, reference periods and units."
                ],
                "ai": {
                  "tools": [
                    "Claude Code"
                  ],
                  "assisted": "Claude Code supported planning and feature implementation for each website.",
                  "owned": "I chose each website’s focus and required features, then checked and refined the results."
                },
                "result": "Trade News Room, Policyline and Tradeweave are three separate working websites."
              },
              "title": "Trade Data Lab | A collection of trade and data web projects",
              "type": "Personal project (in development)",
              "summary": "A personal project for creating separate websites about trade and data, each with its own purpose.",
              "contribution": "Under the Trade Data Lab name, I defined each website's questions and screens and worked from planning through implementation.",
              "details": [
                "Trade News Room supports news and concept learning, Policyline compares trade values around policy announcements, and Tradeweave explores trading partners and concentration.",
                "These three websites are working. Fact Desk is planned within Trade News Room; Report Plain and Trade Notebook are planned additions."
              ],
              "problem": "Learning from news, comparing trade around policy announcements, and exploring trade structures each called for different materials and screen layouts.",
              "action": "I planned and built Trade News Room, Policyline and Tradeweave as separate websites under my personal project, Trade Data Lab.",
              "change": "Each website has a distinct purpose: learning from news and concepts, comparing trade values around policy announcements, or exploring trading partners and concentration."
            },
            name: "Trade Data Lab | A collection of trade and data web projects",
            summary: "A personal project under which I create multiple websites and tools about trade and data. Trade News Room, Policyline and Tradeweave are separate websites addressing different questions, with further tools being planned under the same project.",
            question: "How can separate web tools support learning from trade news, comparing trade around policy announcements, and exploring trade structures?",
            contribution: "I defined the project's themes, each website's questions and shared presentation principles. I built Trade News Room, Policyline and Tradeweave separately and am planning further tools.",
            period: "2026",
            type: "Personal project",
            status: "Trade News Room, Policyline and Tradeweave working / remaining components planned",
            problem: "Learning trade concepts through news, comparing trade values around policy announcements, and examining countries' trading structures require different materials and ways of exploring them.",
            role: [
              "Planned a personal project for creating a growing collection of trade and data websites",
              "Built Trade News Room, Policyline and Tradeweave separately and structured their features",
              "Defined principles for displaying sources, reference periods, units, facts and interpretations",
              "Planned the further structure of Fact Desk, Report Plain and Trade Notebook"
            ],
            caseStudy: {
              background: "Learning from trade news, comparing trade around policy announcements, and exploring countries' trade structures call for different materials and screens. Trade Data Lab is my personal project for creating websites and tools suited to these purposes, one at a time.",
              methodology: "Under Trade Data Lab, I built Trade News Room for learning from news and trade concepts, Policyline for comparing trade values before and after policy announcements, and Tradeweave for exploring trading partners and concentration as separate websites. Shared principles are to display each service's sources, reference periods and units, and to distinguish confirmed facts from interpretation.",
              implications: "The project helps users check original documents and figures before accepting a news account, and identify questions that need further examination. Changes before and after an announcement alone do not establish policy effects or confirm rerouted exports. The services explain both what the data can show and the uncertainty that remains.",
              limits: "The full structure in the plan is a target state. Data connections and automatic updates must be distinguished by what each service actually implements. Trade changes around an announcement are not treated as proof of a policy's causal effect or export rerouting."
            },
            components: [
              {
                id: "tradenews",
                name: "Trade News Room",
                status: "working",
                description: "A service for exploring trade news and related concepts through learning rooms, graphs and quizzes."
              },
              {
                id: "policyline",
                name: "Policyline",
                status: "working",
                description: "A service for exploring changes in trade values before and after policy announcements."
              },
              {
                id: "tradeweave",
                name: "Tradeweave",
                status: "working",
                description: "A service for exploring countries' trading partners and trade concentration."
              },
              {
                id: "factdesk",
                name: "Fact Desk",
                status: "planned",
                description: "A planned feature within Trade News Room separating confirmed facts, interpretation and uncertainty."
              },
              {
                id: "reportplain",
                name: "Report Plain",
                status: "planned",
                description: "A planned service organizing reports' claims, evidence and limits alongside original page references."
              },
              {
                id: "tradenotebook",
                name: "Trade Notebook",
                status: "planned",
                description: "A planned format for publishing analytical notes structured around a question, data, findings and limitations."
              }
            ],
            note: "Trade Data Lab is my ongoing personal project for creating websites and tools about trade and data. Fact Desk is planned as a feature within Trade News Room; Report Plain and Trade Notebook are at the planning stage.",
            legacyProject: {
              id: "tradenews",
              name: "Trade News Room | Learning trade through the news",
              question: "How can the background and concepts behind world trade news be understood through connections with data, and how can that understanding be built into a learning record?",
              contribution: "I chose real trade news stories as learning topics and planned a learning flow that moves from a news summary and sources to statistics, a simulator, quizzes and a learning log. I used AI for implementation and screen design. Five lessons are now published, and I keep adding more.",
              summary: "A learning website that starts from world trade news to understand concepts and data together",
              period: "2026",
              type: "Personal project",
              status: "Five lessons published; about five more planned",
              problem: "I wanted to understand the background and concepts behind real trade issues, and keep a record of what I learned.",
              role: [
                "Selected learning topics and news stories",
                "Planned the flow from news summary and sources to statistics, simulator, quiz and learning log",
                "Implementation and screen design with AI",
                "Refining the screens and learning flow as new lessons are added"
              ],
              caseStudy: {
                process: "Each lesson starts from one real trade news story. Learners read a summary and its sources, change the numbers in a statistical chart or simulator, then move on to a quiz, key terms and learning notes. I kept real statistical charts separate from simplified learning models, and the guidance explains that a chart alone cannot establish causes and that model outputs are not real forecasts.",
                ai: {
                  delegated: "Implementation and screen design",
                  own: "I planned the topics and news selection, the structure and order of each lesson, and what goes on each screen, then reviewed and corrected the results."
                },
                outcome: "The public site has five lessons, each with a simulator tied to its news story. It also includes trade news browsing, a glossary, a trade map, a learning log saved in the browser and a guide chatbot that finds content within the site.",
                limits: "Learning records are stored in the current browser without account syncing, and the guide chatbot uses rules to find content within the site. The simulators are simplified learning models; the accuracy of external news and statistics and the learning effect have not been separately verified. I plan to add about five more lessons.",
                lessons: "I built it for my own study, but without enough time I could not maintain it steadily, and I have barely used it for actual studying yet. I learned that building a tool and continuing to use it are different things. I want to add more lessons and develop it into a tool I actually use."
              },
              rooms: [
                { id: "urea", title: "Urea shortage and import diversification (2021)", tool: "Sourcing share simulator" },
                { id: "graphite", title: "China's graphite export licensing (2023)", tool: "Supply cut and price simulator" },
                { id: "gallium", title: "Gallium and germanium export licensing (2023)", tool: "Inventory and licensing wait simulator" },
                { id: "tariff", title: "The Korea–US trade deal and the 15% tariff (2025)", tool: "Tariff incidence simulator" },
                { id: "redsea", title: "Red Sea attacks and the Cape of Good Hope detour (2023)", tool: "Route and freight rate simulator" }
              ],
              materials: [
                { id: "statistics", label: "Statistics and source guidance (Korean UI)" },
                { id: "simulation", label: "Sourcing simulator (Korean UI)" }
              ],
              note: "A personal project I continue to develop. The site is in Korean."
            },
            materials: [
              { id: "statistics", label: "Trade News Room: Statistics and source guidance (Korean UI)" },
              { id: "simulation", label: "Trade News Room: Sourcing simulator (Korean UI)" }
            ]
          },
          {
            id: "axport",
            presentation: {
              guide: {
                "summary": "I separated regulatory checks, commercial reference scores and missing evidence in the semiconductor export report.",
                "role": "Home page planning and UI/UX; report structure and wording",
                "problem": "Presenting regulatory constraints, commercial scores and unverified information together made their different roles in a decision difficult to distinguish.",
                "process": [
                  "Explained the five review areas and user flow on the home page.",
                  "Separated regulatory checks from commercial reference scores in the report.",
                  "Linked summaries to detailed evidence and marked reference dates and missing data."
                ],
                "ai": {
                  "tools": [
                    "ChatGPT (Codex)",
                    "Gemini"
                  ],
                  "assisted": "AI supported the landing page design layout.",
                  "owned": "I defined the information structure and display criteria, then reviewed and revised screens and wording."
                },
                "result": "The team completed a dashboard prototype linking summaries, detailed evidence and report export."
              },
              "title": "AXPORT | Semiconductor export decision dashboard",
              "type": "Team project (prototype)",
              "summary": "A dashboard bringing together regulatory and market information for semiconductor export reviews.",
              "contribution": "I planned the website and refined the report structure and wording to distinguish regulatory checks from commercial viability scores.",
              "details": [
                "I built the responsive layout and multilingual screens.",
                "I organized the information flow from the report summary to detailed evidence."
              ],
              "problem": "Regulatory restrictions, commercial viability scores and missing information could look equivalent when presented together.",
              "action": "I planned the website and refined the report structure and wording to separate regulatory checks from commercial assessments.",
              "change": "The report leads from summaries to detailed evidence, with reference dates and labels for missing information showing what supports the result."
            },
            name: "AXPORT | Semiconductor Export Decision Dashboard",
            question: "How can regulatory constraints and market opportunities in semiconductor exports be reviewed as distinct considerations, and how can the reasoning behind decisions be communicated?",
            contribution: "I planned the main website and its UI/UX, responsive layout and multilingual screens. I improved the report structure and wording to distinguish regulatory checks from assessments of commercial viability. I refined the information structure connecting summaries to detailed evidence, and displayed data reference dates and unverified information to help users understand the meaning and limitations of the results.",
            summary: "A pre-screening dashboard that gathers the information needed to review semiconductor exports",
            period: "Sep 2026",
            type: "Team project, KITA Trade AX Master program",
            status: "Prototype",
            problem: "Information on regulation, market potential, price, logistics and stability was scattered. Even on one screen, regulatory constraints, commercial scores and items without data could be read as carrying the same weight and mislead a decision.",
            role: [
              "Planned the main home page and its UI/UX design",
              "Responsive layout and multilingual screens",
              "Structure and wording of the PDF report and analysis report",
              "Service introduction and presentation materials"
            ],
            caseStudy: {
              process: "The home page explains the five review areas and the user flow through a service introduction and usage guide. The report moves from a summary to detailed evidence and keeps the regulatory review separate from the commercial reference score. Items without data are marked as insufficient, and data reference dates are shown alongside.",
              ai: {
                delegated: "Landing page design layout (ChatGPT Codex, Gemini)",
                own: "I planned the information structure of the home page and report and how regulatory review, reference scores and missing data are shown separately, then reviewed and corrected the screens and wording."
              },
              outcome: "The team completed a web dashboard linking summaries and detailed evidence for five areas with report export. The published sample U.S. export report (created November 11, 2026; analysis reference date November 10, 2026) shows a conditional review status and 56% evidence coverage, and marks price and logistics items without data as insufficient. The 56% is a value from this sample report.",
              limits: "Failed statistical lookups and the validity period of company inputs leave some items unevaluated. The reference score and evidence coverage do not represent export success probability or decision accuracy. Statistical scope, reference dates and input validity still need checking.",
              lessons: "New tasks, unfamiliar concepts and my first dashboard made it hard even to keep up with the overall flow. Within that, I focused on the design work I could do.",
              background: "Preliminary semiconductor export reviews require information on regulation, market potential, pricing, logistics and stability. The challenge was to bring scattered material together while making clear that regulatory restrictions, business reference scores and missing evidence support different kinds of judgments.",
              methodology: "The training team built a dashboard prototype covering five areas. I refined the information structure of the homepage and report, linking summaries to detailed evidence. I separated regulatory review from reference scores and displayed data reference dates and information that could not be confirmed.",
              implications: "I learned that an export review interface needs to show the scope of its evidence and the gaps as well as its scores. The output is a preliminary review prototype, not a validated record of export performance or regulatory assessment accuracy."
            },
            note: "Team project. The analysis engine and the overall service are team work; my contribution is the scope listed above."
          },
          {
            id: "hanjeongseon",
            presentation: {
              guide: {
                "summary": "I brought local information and today’s tasks together on HOME for preparing to enter Vietnam.",
                "role": "HOME planning and implementation; introduction website and promotional video",
                "problem": "Scattered local information and marketing preparation schedules made it difficult to identify the next task.",
                "process": [
                  "Brought local events, news and work progress together on HOME.",
                  "Worked preparation schedules backward from a target date.",
                  "Separated articles for browsing from verified notices."
                ],
                "ai": {
                  "tools": [
                    "Claude Code",
                    "Codex",
                    "Google Flow",
                    "Higgsfield"
                  ],
                  "assisted": "AI supported HOME implementation and the separate introduction website and promotional video.",
                  "owned": "I planned HOME’s information, scheduling, news categories, website and video structure, then checked and revised the results."
                },
                "result": "I implemented HOME for viewing schedules and preparation progress in the team’s hypothetical Vietnam entry prototype."
              },
              "title": "Hanjungsun | Marketing dashboard for entering Vietnam",
              "type": "Team project (prototype)",
              "summary": "A dashboard gathering local information and preparation schedules for a hypothetical food brand launch in Da Nang, Vietnam.",
              "contribution": "I planned and implemented HOME, bringing local schedules, news and daily tasks together on one screen.",
              "details": [
                "I built preparation schedules backward from target dates and separated browsable articles from confirmed announcements.",
                "I also planned and produced the Vietnam introduction website and promotional video."
              ],
              "problem": "Scattered local information and preparation schedules made it difficult to identify the next task for a hypothetical Vietnam launch.",
              "action": "I planned and implemented HOME, working backward from target dates and linking local schedules, news and task progress.",
              "change": "HOME brings daily tasks and campaign progress into one view, while separating browsable articles from confirmed announcements."
            },
            name: "Hanjungsun | Vietnam Market Entry Marketing Dashboard",
            question: "When preparing a Korean food brand to enter Vietnam, how can local information be translated into an actionable marketing plan?",
            contribution: "I planned and implemented HOME so that marketing staff could identify their next actions based on local information and preparation status. I built preparation schedules backward from target dates and connected local events, news and task progress to make daily tasks and campaign status clear. I also planned and produced the Vietnam introduction website and promotional video.",
            summary: "A work tool that gathers local information and marketing preparation schedules, assuming entry into Da Nang, Vietnam. Includes a Vietnam introduction website and promotional video",
            period: "Oct 2026",
            type: "Team project, KITA Trade AX Master program",
            status: "Presentation prototype; news impact visualization planned",
            problem: "Local information and campaign preparation schedules were scattered, making it hard to see what to do next.",
            role: [
              "Planned and implemented the HOME screen",
              "Built a calendar that works backward from the target date",
              "Brought local schedules, news and task progress onto one screen",
              "Designed the split between browsable news and confirmed announcements",
              "Planned and produced the Vietnam introduction website and promotional video"
            ],
            caseStudy: {
              process: "The team dashboard connects local research with scheduling, content production, creator collaboration and performance tracking. On HOME, I brought local events, news and preparation status together so users can see their next action. I separated browsable news articles from confirmed announcements, distinguishing information discovery from checking the basis for a decision.",
              ai: {
                delegated: "HOME implementation, introduction website design and promotional video production (Claude Code, Codex, Google Flow, Higgsfield)",
                own: "I planned what HOME shows, how schedules are worked backward, how news is categorized, and the structure of the website and video, then reviewed and corrected the results."
              },
              outcome: "The HOME section of the team demo video shows the calendar, event settings and news screens. The separately created Vietnam introduction website and promotional video are also provided.",
              limits: "This is a training prototype for an assumed Vietnam market entry, and the work-time comparisons in the presentation are estimates, not measurements. Presentation feedback asked me to show what the news means for Hanjungsun's entry, beyond collecting it. I am planning an impact classification and filter with opportunity in green, caution in yellow, risk in red and undetermined items in gray; it is not implemented yet.",
              lessons: "In my second dashboard project, I planned and implemented a feature myself for the first time. It did not lead to notable results, but it was my first experience turning something I planned into a working screen.",
              background: "This team project assumed a Korean food brand's entry into Da Nang, Vietnam. It addressed the difficulty of deciding what to do next when local information and marketing preparation schedules are scattered.",
              methodology: "I planned and implemented HOME to connect local events, news and work progress, with preparation schedules counted back from a target date. I separated articles for browsing from confirmed announcements and also created the Vietnam introduction website and promotional video.",
              implications: "I found that bringing information together is most useful when it connects to preparation schedules and next actions. Visualizing news as opportunities and risks remains a planned improvement; the prototype does not demonstrate actual market entry or validated marketing effectiveness."
            },
            materials: [
              { id: "brandSite", label: "Vietnam introduction website (training prototype)" },
              { id: "homeDemo", label: "HOME demo (team video excerpt, Korean)" },
              { id: "promo", label: "Vietnam promotional video" }
            ],
            note: "Team project. The full dashboard is a team output; my contribution is the scope listed above, centered on HOME, the Vietnam introduction website and the promotional video."
          }
        ],
        extraTitle: "Other projects and activities",
        extraOpen: "Show",
        extraClose: "Close",
        extra: [
          {
            id: "kita-study", linkKey: "kitaStudy", period: "2026.08 – 2026.12", dashboardLabel: "Open dashboard", name: "KITA report study group",
            meta: "Report study group alongside the Trade AX training program",
            desc: "Read about international trade issues and prepared discussion materials. Prepared to present the overseas section of a CPTPP-related report and wrote an introductory text"
          },
          {
            "id": "kotra-finance",
            "name": "Reading public-institution financial data | KOTRA",
            "meta": "Individual undergraduate assignment",
            "desc": "In an undergraduate course, I used KOTRA's public financial data for 2020–2024 to compare assets and liabilities, income and expenditure. This individual assignment examined how a public institution is funded."
          },
          {
            name: "Other activities",
            desc: "Student council secretary, College of Humanities (2023); chapel choir volunteer (2025); Ars Amandi dance club (2022); Cafe ZITTEN (2022–2023)"
          }
        ]
      },
      now: {
        "label": "NOW",
        "title": "What I'm doing now",
        "asOf": "As of Nov 16, 2026",
        "statement": "I am taking the Trade AX program alongside personal web projects,\nwhile strengthening my English and foundations in economics and statistics.",
        "doingTitle": "In progress",
        "doing": [
          "Taking the Trade AX Master program and documenting team projects (completion expected Dec 18, 2026)",
          "Building and expanding websites about trade and data under my personal project, Trade Data Lab",
          "Preparing to begin a separate industry-linked capstone chatbot for a public-service organization",
          "Studying toward a TOEFL score of 100+ and strengthening foundations in economics and statistics",
          "Exploring international organization and policy careers and building a portfolio and exploration notes"
        ],
        "interestsTitle": "Interests",
        "interests": [
          "China and East Asia",
          "International relations and international political economy",
          "International trade and trade policy",
          "Supply chains, export controls and sanctions",
          "How U.S.-China relations affect trade and industry",
          "Explaining international issues using source materials and data"
        ],
        "goals": [
          {
            "period": "2027",
            "title": "Trade and policy experience",
            "items": [
              "Prepare applications for trade research assistant roles or corporate government relations and trade strategy internships"
            ]
          },
          {
            "period": "2028",
            "title": "Graduate study in the U.S.",
            "items": [
              "Prepare for the goal of fall entry to master's programs in international relations and public policy"
            ]
          }
        ]
      },
      notes: {
        label: "NOTES",
        title: "Exploration notes",
        // 실제 글만 추가합니다. 비어 있으면 이 언어의 섹션과 메뉴가 숨겨집니다.
        items: []
      },
      contact: {
        label: "CONTACT",
        title: "Contact",
        text: "For inquiries and collaboration, please email me.",
        form: {
          nameLabel: "Name",
          emailLabel: "Reply email",
          messageLabel: "Message",
          submitLabel: "Open email draft",
          hint: "Your text opens in your email app. Send the email from there.",
          subject: "Portfolio inquiry"
        },
        email: "Send an email",
        github: "GitHub",
        linkedin: "LinkedIn"
      },
      footer: "© 2026 Juyeon Jung"
    },

    /* ======================= 简体中文 ======================= */
    "zh-Hans": {
      htmlLang: "zh-CN",
      header: { navigationLabel: "主导航", languageLabel: "选择语言" },
      meta: { title: "郑主缘 Juyeon Jung | 国际贸易与政策探索", description: "以中国经济与贸易学习和国际活动协作经验为基础，制作处理贸易新闻与贸易数据的网页工具，为贸易及政策领域的研究和实务做准备。" },
      nav: { about: "关于我", experience: "经历", projects: "项目", now: "近况", notes: "探索记录", contact: "联系" },
      hero: {
        eyebrow: "JUYEON JUNG",
        name: "郑主缘",
        headline: "以对华语地区的了解和国际协作经验为基础，我正在培养国际贸易与政策领域的调研和分析能力。",
        headlineBreakAfter: "以对华语地区的了解和国际协作经验为基础，",
        intro: "我学习了中国经济与贸易，并在台湾学习了两年。\n在国际活动中，我曾协调海外媒体和机构的需求与日程。",
        politicalEconomyInterest: "国际政治经济",
        photo: "个人照片",
        ctaProjects: "查看项目",
        ctaContact: "联系我"
      },
      strengths: {
        title: "优势",
        items: [
          { title: "全球视野与区域理解", desc: "通过中国经济与贸易课程及在台湾的学习，了解华语地区的语言与社会。" },
          { title: "贸易与市场数据分析", desc: "制作网页工具，按不同用途整理和比较贸易新闻、政策原文与贸易统计。" },
          { title: "项目与利益相关方协调", desc: "整理海外媒体、机构和制作合作方的需求及日程，并与运营团队协调信息传递。" }
        ]
      },
      about: {
        label: "ABOUT",
        title: "关于我",
        titleBreakAfter: "",
        body: [
          "我在汉阳大学主修中语中文学，辅修中国经济通商学，并在国立台湾大学取得中国文学双学位。在台湾用两年时间以中文修读专业课程，为理解华语地区的语言与社会打下了基础。",
          "作为EXPORUM全球战略事业组的实习生，我协助海外媒体合作、海外演讲嘉宾与机构的邀请及日程协调，并开展产业活动资料调查。我积累了整理不同合作方的需求与条件、将确认后的信息写成文档并传达的实务经验。",
          "在贸易AX培训课程中，我制作网页仪表板，帮助用户查找和比较分散的信息。\n在个人项目Trade Data Lab下，我分别制作新闻学习、政策发布前后贸易额比较，以及贸易伙伴和贸易集中度探索等用途的网站。"
        ],
        moreOpen: "展开学历、证书与工具",
        moreClose: "收起",
        educationTitle: "学历与教育",
        education: [
          {
            name: "汉阳大学",
            period: "2022.03 – 2026.08，毕业",
            lines: [
              "主修中语中文学，辅修中国经济通商学",
              "相关课程：宏观经济学、国际贸易与通商政策、中国外交政策、当代中国社会",
              "GPA 3.81/4.5，2026年8月毕业优等生（2025学年度后期）"
            ]
          },
          {
            name: "国立台湾大学",
            period: "2023.09 – 2025.06，赴台学习",
            lines: [
              "取得中国文学系双学位",
              "修读以中文授课的专业课程并完成作业",
              "在陌生的语言环境中梳理不足、调整学习方法并逐步适应"
            ]
          },
          {
            name: "韩国贸易协会 贸易学院 贸易AX大师课程 第2期",
            period: "2026.08 – 2026.12，在读（预计2026.12.18结业）",
            lines: [
              "贸易实务、数据运用、生成式AI运用、团队项目",
              "主要项目：AXPORT、Hanjungsun 越南市场进入营销仪表板"
            ]
          }
        ],
        languagesTitle: "语言",
        languages: [
          "韩语：母语",
          "中文：HSK 6级 232分（2025.09），以中文修读专业课程及在当地生活的经验",
          "英语：TOEIC 880分（2026.04），TOEIC Speaking IH 150分（2026）",
          "通过英文邮件与海外合作伙伴协作的经验"
        ],
        certsTitle: "证书",
        certs: ["国际贸易师 1级（2026）", "贸易英语 1级（2026）"],
        toolsTitle: "使用工具与范围",
        tools: [
          { name: "Excel, Google Sheets", desc: "整理资料，管理工作进度" },
          { name: "PowerPoint, Word", desc: "撰写报告与演示资料" },
          { name: "Notion", desc: "记录学习与经历" },
          { name: "Python, pandas, numpy", desc: "基础学习与练习" },
          { name: "Flask, Streamlit", desc: "培训项目中使用" },
          { name: "HTML, CSS, JavaScript", desc: "在AI辅助下制作和修改网页原型" },
          { name: "生成式AI与编程辅助工具", desc: "具体化想法、撰写初稿、实现界面并反复改进" }
        ],
        hobbiesTitle: "爱好",
        hobbies: ["学习外语", "阅读", "跑步"]
      },
      experience: {
        label: "EXPERIENCE",
        title: "工作经历",
        dutiesTitle: "主要工作",
        caseTitle: "依据证据核对合作结果的案例",
        skillsTitle: "积累的能力",
        items: [
          {
            org: "EXPORUM 全球战略事业组",
            role: "实习生",
            period: "2026.03 – 2026.06",
            events: "相关活动：Smart Tech Korea 2026、TechCon 2026",
            summary: "与18家海外媒体合作伙伴沟通，管理合作进度，并协助国际活动的运营。",
            duties: [
              "调研海外媒体合作伙伴候选，发送英文提案并跟进联系",
              "与18家海外媒体合作伙伴沟通，管理合作进度",
              "用Excel整理各合作伙伴的合作条件、双方提供事项和合同状态",
              "传递英文资料，协商发布日程，确认对方需求",
              "策划社交媒体内容，制作宣传图片",
              "调研行业与技术动态，协助撰写新闻稿初稿",
              "协调海外演讲嘉宾的日程和行程，支持现场引导与活动运营"
            ],
            caseText: "我将合作条件与实际发布结果进行对照，整理最终报告。确认了STK展会9家媒体、TechCon大会7家媒体的刊登依据。我保留了已确认发布内容的截图和链接，并将未执行事项与未经确认的曝光分别记录，以便明确后续工作。",
            skills: ["海外合作伙伴沟通", "日程协调", "进度管理", "基于证据的汇报方式"],
            cases: [
              {
                id: "buyers",
                title: "国内外买家项目比较调查",
                summary: "按照支持福利、参与条件和费用结算方式，比较了国内外20个买家项目案例，整理并汇报了商务洽谈、出席与活动后评价如何同支持福利联系起来。",
                workflow: ["收集案例", "比较福利与条件", "归纳差异", "提交工作参考资料"],
                comparison: { headers: ["比较项目", "核对内容"], rows: [["支持福利", "机票与住宿、交通支持、休息室与交流活动"], ["参与条件", "最低洽谈次数、活动出席与活动后评价"], ["结算方式", "提前提供支持，或满足参与条件后报销费用"]] },
                caption: "根据2026年4月的比较表与工作日志重构调查项目，不是各项目当前参与规则的说明。"
              },
              {
                id: "verification",
                title: "核对海外媒体合作结果",
                workflow: ["核对合作条件", "对照实际发布结果", "记录链接与页面", "区分进展状态"],
                caption: "根据2026年6月16日署有本人姓名的进展报告和工作日志重构，区分约定条件、未执行事项与无法确认的事项。",
                summary: "我将合作条件与实际发布结果进行对照，整理最终报告。确认了STK展会9家媒体、TechCon大会7家媒体的刊登依据。我保留了已确认发布内容的截图和链接，并将未执行事项与未经确认的曝光分别记录，以便明确后续工作。"
              }
            ]
          }
        ],
        casesTitle: "资料调查与依据核对案例"
      },
      projects: {
        label: "PROJECTS",
        title: "代表项目",
        intro: "从贸易与国际议题出发，借助资料与数据把问题整理成网页工具的记录。",
        labels: {
          problemTitle: "问题",
          resultTitle: "成果",
          roleTitle: "我的职责",
          processTitle: "解决过程",
          aiTitle: "AI应用",
          aiAssisted: "AI辅助的工作",
          aiOwned: "我的判断与核查",
          storyProblem: "问题意识",
          storyAction: "我的工作",
          storyChange: "调整后的呈现",
          dashboard: "查看仪表板",
          workingServices: "可运行服务",
          materials: "项目资料",
          process: "解决过程",
          aiUse: "AI应用",
          aiDelegated: "交给AI的工作",
          aiOwn: "我亲自决定并核查的部分",
          outcome: "成果",
          rooms: "已公开的学习室",
          limits: "局限与下一步",
          lessons: "回顾",
          report: "查看虚拟企业报告（韩文HTML）",
          question: "核心问题",
          contribution: "我的核心贡献",
          period: "时间",
          type: "类型",
          status: "状态",
          problem: "想解决的问题",
          role: "我的工作",
          moreOpen: "查看详情",
          moreClose: "收起",
          link: "查看项目",
          background: "背景与问题",
          methodology: "研究与实现方法",
          implications: "发现与启示",
          components: "组成服务",
          working: "已确认可运行",
          planned: "规划阶段",
          legacyProject: "原有项目记录"
        },
        items: [
          {
            id: "tradedatalab",
            presentation: {
              guide: {
                "summary": "我制作了三个用于贸易学习和数据探索的网站。",
                "role": "确定各网站的问题与页面结构，制作并检查成果",
                "problem": "新闻学习、政策发布前后比较和贸易结构探索，需要不同的资料与页面。",
                "process": [
                  "确定各网站要回答的问题与使用目的。",
                  "分别制作新闻学习、政策前后比较和贸易结构探索网站。",
                  "制定标注来源、基准期间和单位的共同原则。"
                ],
                "ai": {
                  "tools": [
                    "Claude Code"
                  ],
                  "assisted": "使用Claude Code辅助各网站的策划与功能实现。",
                  "owned": "由我确定各网站的主题与所需功能，并检查和修改成果。"
                },
                "result": "Trade News Room、Policyline与Tradeweave分别作为独立网站运行。"
              },
              "title": "Trade Data Lab | 贸易与数据网页项目集",
              "type": "个人项目（开发中）",
              "summary": "围绕贸易与数据，制作多个用途各异的网站的个人项目。",
              "contribution": "以Trade Data Lab为总主题，确定各网站的问题与页面，并从策划推进到制作。",
              "details": [
                "Trade News Room用于学习新闻与贸易概念，Policyline用于比较政策发布前后的贸易额，Tradeweave用于查看贸易伙伴与集中度。",
                "这三个网站目前已运行。Fact Desk拟作为Trade News Room的内部功能，Report Plain与Trade Notebook仍在规划中。"
              ],
              "problem": "新闻学习、政策发布前后的比较与贸易结构探索，各自需要不同的资料和页面设计。",
              "action": "以个人项目Trade Data Lab为总主题，分别策划并制作了Trade News Room、Policyline与Tradeweave。",
              "change": "让用户在符合各自用途的网站中学习新闻与概念、比较政策发布前后的贸易额，或查看贸易伙伴与集中度。"
            },
            name: "Trade Data Lab | 贸易与数据网页项目集",
            summary: "围绕贸易与数据，持续制作多个网站及工具的个人项目。Trade News Room、Policyline与Tradeweave是分别处理不同问题的网站，其他后续工具也在同一项目下规划中。",
            question: "如何分别制作适合贸易新闻学习、政策发布前后比较和贸易结构探索的网页工具？",
            contribution: "确定了项目主题、各网站的问题与共同展示原则。分别制作了Trade News Room、Policyline与Tradeweave，并继续规划后续工具。",
            period: "2026",
            type: "个人项目",
            status: "Trade News Room、Policyline、Tradeweave可运行 / 其余部分规划中",
            problem: "通过新闻学习贸易概念、比较政策发布前后的贸易额、查看各国贸易结构，需要不同的资料和探索方式。",
            role: [
              "策划持续制作贸易与数据相关网站的个人项目",
              "分别制作Trade News Room、Policyline与Tradeweave并设计功能",
              "整理来源、基准期间、单位、事实与解读的展示原则",
              "规划Fact Desk、Report Plain与Trade Notebook的后续结构"
            ],
            caseStudy: {
              background: "贸易新闻学习、政策发布前后的比较和各国贸易结构探索，需要不同的资料和页面。Trade Data Lab是根据这些用途，逐步制作网站与工具的个人项目。",
              methodology: "在Trade Data Lab项目下，分别制作了用于学习新闻与贸易概念的Trade News Room、比较政策发布前后贸易额的Policyline，以及查看贸易伙伴与集中度的Tradeweave。各服务共同遵循标注来源、基准期间与单位，并区分已确认事实与解读的原则。",
              implications: "项目帮助使用者在接受新闻中的解释之前，先核对相关原文与数字，并找到需要继续查看的问题。仅凭政策发布前后的变化，不能确定政策效果或确认转道出口；服务同时说明数据能反映的范围与仍然存在的不确定性。",
              limits: "规划书中的整体结构是最终目标，各项数据连接与自动更新的实际实现范围应按服务分别说明。不能将政策发布同期的贸易变化视为政策因果效果或转道出口的证明。"
            },
            components: [
              { id: "tradenews", name: "Trade News Room", status: "working", description: "通过学习室、图表与测验，查看贸易新闻及相关概念的服务。" },
              { id: "policyline", name: "Policyline", status: "working", description: "查看政策发布前后贸易额变化的服务。" },
              { id: "tradeweave", name: "Tradeweave", status: "working", description: "查看各国贸易伙伴与贸易集中度的服务。" },
              { id: "factdesk", name: "Fact Desk", status: "planned", description: "计划在Trade News Room内加入的功能，用于区分已确认的事实、解读与不确定之处。" },
              { id: "reportplain", name: "Report Plain", status: "planned", description: "正在规划将报告的主张、证据与局限同原文页码一起整理的服务。" },
              { id: "tradenotebook", name: "Trade Notebook", status: "planned", description: "正在规划发布按问题、数据、发现与局限组织的分析笔记。" }
            ],
            note: "Trade Data Lab是持续制作贸易与数据相关网站及工具的个人项目。Fact Desk是Trade News Room内部的计划功能，Report Plain与Trade Notebook仍在规划中。",
            legacyProject: {
              id: "tradenews",
              name: "Trade News Room | 新闻里的贸易学习室",
              question: "如何将全球贸易新闻的背景与概念同数据联系起来加以理解，并将这些理解逐步积累为学习记录？",
              contribution: "我挑选真实的贸易新闻作为学习主题，亲自策划了从新闻摘要与来源出发，依次连接统计、模拟器、测验和学习记录的学习流程。功能实现与页面设计借助了AI。目前已公开5个学习室，并在持续增加。",
              summary: "以全球贸易新闻为起点，同时理解概念与数据的学习网站",
              period: "2026",
              type: "个人项目",
              status: "已公开5个学习室，计划再增加5个左右",
              problem: "我希望理解真实贸易议题背后的背景与相关概念，并记录学习内容。",
              role: ["选定学习主题与新闻", "策划从新闻摘要与来源到统计、模拟器、测验和学习记录的学习流程", "借助AI完成功能实现与页面设计", "在增加学习室的过程中改进页面与学习流程"],
              caseStudy: {
                process: "每个学习室都以一则真实的贸易新闻为起点。学习者先阅读新闻摘要与来源，在统计图表或模拟器中亲自调整数字，再进行测验、术语学习与学习笔记。我将真实的统计图表与简化的学习模型分开呈现，并提示不能仅凭图表断定变化原因，也不能把模型计算值当作实际预测。",
                ai: { delegated: "功能实现与页面设计", own: "学习主题与新闻的选定、学习室的结构与顺序、页面要呈现的内容均由我亲自策划，并在检查成果后加以修改。" },
                outcome: "公开网站上已有5个学习室，每个学习室都配有一个与新闻相关的模拟器。网站还实现了贸易新闻浏览、术语词典、贸易地图、保存在浏览器中的学习记录，以及查找站内学习内容的引导聊天机器人。",
                limits: "学习记录保存在当前浏览器中，不支持账户同步；引导聊天机器人通过规则查找站内内容。模拟器是简化的学习模型，外部新闻与统计的准确性及学习效果尚未另行验证。我计划再增加5个左右的学习室。",
                lessons: "这是我为自学而做的网站，但由于时间不足，没能持续维护，实际学习中也还几乎没有用上。我体会到，做出一个工具和持续使用它是两回事。我希望继续充实学习室，把它发展成自己真正会用的工具。"
              },
              rooms: [
                { id: "urea", title: "尿素短缺与进口来源多元化（2021）", tool: "采购比例模拟器" },
                { id: "graphite", title: "中国石墨出口许可制（2023）", tool: "供应减少与价格模拟器" },
                { id: "gallium", title: "镓和锗出口许可制（2023）", tool: "库存与许可等待期模拟器" },
                { id: "tariff", title: "韩美贸易协议与15%关税（2025）", tool: "关税归宿模拟器" },
                { id: "redsea", title: "红海危机与绕行好望角（2023）", tool: "航线与运费模拟器" }
              ],
              materials: [
                { id: "statistics", label: "统计与来源说明页面（韩语界面）" },
                { id: "simulation", label: "采购比例模拟器（韩语界面）" }
              ],
              note: "这是我持续完善的个人项目，网站内容为韩语。"
            },
            materials: [
              { id: "statistics", label: "Trade News Room: 统计与来源说明页面（韩语界面）" },
              { id: "simulation", label: "Trade News Room: 采购比例模拟器（韩语界面）" }
            ]
          },
          {
            id: "axport",
            presentation: {
              guide: {
                "summary": "我调整了信息呈现方式，使半导体出口审查中的监管核查、商业参考分数与资料不足能够分开查看。",
                "role": "主页策划与UI/UX，报告信息结构与措辞改进",
                "problem": "监管限制、商业评分与未经确认的信息混在一起呈现时，很难分清各自的判断作用。",
                "process": [
                  "在主页说明五个审查领域与使用流程。",
                  "在报告中将监管核查与商业参考分数分开呈现。",
                  "将摘要连接到详细依据，并标注基准日与资料不足。"
                ],
                "ai": {
                  "tools": [
                    "ChatGPT (Codex)",
                    "Gemini"
                  ],
                  "assisted": "使用AI辅助设计首页版式。",
                  "owned": "由我确定信息结构与呈现标准，并检查和修改页面及措辞。"
                },
                "result": "团队完成了连接摘要、详细依据和报告导出的仪表板原型。"
              },
              "title": "AXPORT | 半导体出口决策仪表板",
              "type": "团队项目（原型）",
              "summary": "汇集半导体出口审查所需法规与市场信息的仪表板。",
              "contribution": "我规划了主页，并调整报告结构与措辞，使法规核查与商业可行性评分得到区分。",
              "details": [
                "我制作了响应式布局与多语言页面。",
                "我整理了从报告摘要连接至详细依据的信息结构。"
              ],
              "problem": "法规限制、商业可行性评分和缺失信息放在一起呈现时，判断依据容易混淆。",
              "action": "我规划了主页，并调整报告结构与措辞，将法规核查与商业可行性评估分开。",
              "change": "报告从摘要连接至详细依据，并标注数据基准日期和资料不足的项目，让用户能查看结果的支撑信息。"
            },
            name: "AXPORT | 半导体出口决策仪表板",
            question: "在半导体出口中，如何区分监管限制与市场机会进行评估，并传达判断所依据的信息？",
            contribution: "我负责主页策划、UI/UX、响应式布局与多语言页面。我改进了报告结构与措辞，以区分合规核查与商业可行性评估。我优化了从摘要连接到详细依据的信息结构，并标明数据基准日期与未经核实的信息，帮助用户理解结果的含义与局限。",
            summary: "汇集半导体出口审查所需信息的预审仪表板",
            period: "2026.09",
            type: "贸易AX大师课程 团队项目",
            status: "原型成果",
            problem: "法规、市场性、价格、物流、稳定性等信息分散各处。即使汇集到一个页面，如果监管限制、商业评分与缺少资料的项目被以同等分量解读，也可能误导判断。",
            role: ["主页策划与UI/UX设计", "响应式布局与多语言页面", "PDF报告与分析报告的结构和措辞改进", "服务介绍与演示资料制作"],
            caseStudy: {
              process: "主页通过服务介绍和使用说明展示五个审查领域及使用流程。报告从摘要连接到详细依据，并将监管审查与商业可行性参考分数分开。缺少资料的项目标为资料不足，同时显示数据基准日期。",
              ai: { delegated: "落地页设计布局（ChatGPT Codex、Gemini）", own: "主页与报告的信息结构，以及将监管审查、参考分数与资料不足分开呈现的方式，均由我亲自策划，并在核查页面与措辞后加以修改。" },
              outcome: "团队完成了将五个领域的摘要、详细依据与报告导出连接起来的网页仪表板。公开的虚拟企业对美出口报告（2026-11-11生成，分析基准日2026-11-10）显示有条件审查状态与56%的依据覆盖比例，缺少资料的价格和物流项目标为资料不足。56%是这份示例报告中的数值。",
              limits: "部分统计查询失败及企业填报值的有效期等因素，使部分项目尚未评估。参考分数和依据覆盖比例不代表出口成功概率或判断准确性。仍需核查统计范围、基准日期与输入资料的有效性。",
              lessons: "一切都是第一次：第一次做的工作、第一次接触的概念、第一次制作的仪表板，光是跟上整体流程就很吃力。在这样的情况下，我专注于自己能做好的设计工作。",
              background: "半导体出口初步审查需要综合法规、市场潜力、价格、物流与稳定性信息。问题不仅是汇集分散资料，还要说明法规限制、商业参考分数和资料不足代表不同的判断依据。",
              methodology: "培训团队制作了覆盖五个领域的仪表板原型。我改进首页和报告的信息结构，使摘要能够连接到详细依据，并将法规审查与参考分数分开，标明数据基准日和无法确认的信息。",
              implications: "我认识到，辅助出口审查的界面不仅要呈现分数，还应展示依据的适用范围与资料空缺。成果是初步审查原型，不是对实际出口成效或法规判断准确性的验证。"
            },
            note: "团队项目。分析引擎与整体服务为团队成果，我的贡献为上述范围。"
          },
          {
            id: "hanjeongseon",
            presentation: {
              guide: {
                "summary": "我在HOME中连接当地信息与今日任务，支持越南市场进入准备。",
                "role": "HOME策划与实现，介绍网站与宣传视频制作",
                "problem": "当地信息与营销准备日程分散，难以确定接下来要做的事。",
                "process": [
                  "将当地日程、新闻与工作进度集中到HOME。",
                  "以目标日期为基准倒推准备日程。",
                  "区分供浏览的文章与已核实的公告。"
                ],
                "ai": {
                  "tools": [
                    "Claude Code",
                    "Codex",
                    "Google Flow",
                    "Higgsfield"
                  ],
                  "assisted": "使用AI辅助实现HOME，并制作独立的介绍网站与宣传视频。",
                  "owned": "由我规划HOME信息、日程方式、新闻分类以及网站和视频结构，并亲自检查和修改成果。"
                },
                "result": "在团队假设进入越南市场的原型中，实现了查看日程与准备进度的HOME。"
              },
              "title": "Hanjungsun | 进入越南市场的营销仪表板",
              "type": "团队项目（原型）",
              "summary": "以食品品牌进入越南岘港为假设，汇集当地信息与准备日程的仪表板。",
              "contribution": "我规划并实现了HOME，在一个页面连接当地日程、新闻与当天任务。",
              "details": [
                "我从目标日期倒推准备日程，并区分供浏览的文章与已确认的公告。",
                "我还单独策划并制作了越南介绍网站与宣传视频。"
              ],
              "problem": "越南当地信息与营销准备日程分散，负责人难以判断下一步该做什么。",
              "action": "我规划并实现了HOME，从目标日期倒推准备日程，并连接当地日程、新闻与任务进度。",
              "change": "HOME在一个页面呈现当天任务与活动进展，并区分供浏览的文章与已确认的公告。"
            },
            name: "Hanjungsun | 越南市场进入营销仪表板",
            question: "韩国食品品牌准备进入越南市场时，如何将当地信息转化为可执行的营销计划？",
            contribution: "我负责HOME的策划与实现，让营销人员能够依据当地信息和准备情况确定下一步行动。我从目标日期倒推准备日程，并将当地活动、新闻与工作进度联系起来，帮助用户掌握当天任务与营销活动的进展。我还策划并制作了越南介绍网站与宣传视频。",
            summary: "以进入越南岘港为假设，汇集当地信息与营销准备日程的工作工具，并配套制作越南介绍网站与宣传视频",
            period: "2026.10",
            type: "贸易AX大师课程 团队项目",
            status: "展示版本原型，新闻影响可视化为后续计划",
            problem: "当地信息与营销活动准备日程分散，难以把握下一步该做什么。",
            role: ["HOME页面的策划与实现", "以目标日期为基准倒推准备日程的日历", "在一个页面整合当地日程、新闻与工作进度", "设计将新闻分为文章列表与已确认公告的标准", "策划并制作越南介绍网站与宣传视频"],
            caseStudy: {
              process: "团队仪表板将当地调研与日程、内容制作、创作者合作和效果管理相连接。我在HOME中汇集当地日程、新闻与准备状态，帮助用户确定下一步行动。我将便于探索的新闻列表与已确认的公告分开，区分信息发现与判断依据的核查。",
              ai: { delegated: "HOME功能实现、介绍网站设计与宣传视频制作（Claude Code、Codex、Google Flow、Higgsfield）", own: "HOME要呈现的信息、日程倒推方式、新闻分类标准，以及介绍网站与宣传视频的结构，均由我亲自策划，并在检查成果后加以修改。" },
              outcome: "团队演示视频的HOME部分展示了日历、活动设置与新闻界面，同时提供单独制作的越南介绍网站和宣传视频。",
              limits: "这是以越南市场进入情境为假设的培训原型，演示资料中的工作时间比较为估算值而非实测。展示反馈建议在汇集新闻之外，呈现新闻对Hanjungsun进入越南市场的意义。我正在规划以绿色表示机会、黄色表示注意、红色表示风险、依据不足时以灰色暂缓判断的影响分类与筛选，目前尚未实现。",
              lessons: "在第二个仪表板项目中，我第一次亲自策划并实现了一个功能。虽然没有取得显著成果，但这是我第一次把自己策划的内容做成可以运行的页面。",
              background: "这是以韩国食品品牌进入越南岘港市场为假设的团队项目，处理当地信息与营销准备日程分散、负责人难以决定下一步行动的问题。",
              methodology: "我策划并实现HOME，将当地活动、新闻与工作进度连接起来，从目标日期倒排准备日程。我将浏览用新闻与已确认的公告区分开来，并另行制作越南介绍网站和宣传视频。",
              implications: "我认识到，信息集中后还需要连接准备日程和下一步行动。将新闻可视化为机会与风险仍是后续改进计划，原型不代表实际市场进入成果或已经验证的营销效果。"
            },
            materials: [
              { id: "brandSite", label: "越南介绍网站（培训原型）" },
              { id: "homeDemo", label: "HOME演示（团队视频节选，韩语）" },
              { id: "promo", label: "越南宣传视频" }
            ],
            note: "团队项目。整体仪表板为团队成果，我的贡献以上述范围为限，主要包括HOME、越南介绍网站与宣传视频。"
          }
        ],
        extraTitle: "其他项目与活动",
        extraOpen: "展开",
        extraClose: "收起",
        extra: [
          { id: "kita-study", linkKey: "kitaStudy", period: "2026.08 – 2026.12", dashboardLabel: "打开仪表板", name: "KITA报告研读小组", meta: "与贸易AX培训同期开展的报告研读活动", desc: "阅读国际通商议题并准备讨论材料。准备就CPTPP相关报告的国外部分作专题分享，并撰写介绍文字" },
          {
            "id": "kotra-finance",
            "name": "公共机构财务资料研读 | KOTRA",
            "meta": "本科个人课程作业",
            "desc": "在本科课程中，我基于KOTRA2020至2024年的公开财务资料，整理了资产与负债、收入与支出的变化。这是一项了解公共机构资金来源结构的个人作业。"
          },
          { name: "其他活动", desc: "人文科学学院学生会书记（2023）、礼拜合唱志愿服务（2025）、舞蹈社团 Ars Amandi（2022）、咖啡店 ZITTEN 工作（2022–2023）" }
        ]
      },
      now: {
        "label": "NOW",
        "title": "现在在做的事",
        "asOf": "基准日 2026.11.16",
        "statement": "目前，我同时修读贸易AX课程并开展个人网页项目，\n也在补强英语、经济学和统计基础。",
        "doingTitle": "进行中",
        "doing": [
          "修读贸易AX大师课程并整理团队项目经验（预计2026.12.18结业）",
          "以个人项目Trade Data Lab为总主题，制作并扩展贸易与数据相关网站",
          "准备开始企业合作结业项目，为提供公共服务的机构开发AI咨询聊天机器人",
          "以TOEFL 100+为目标学习英语，并补强经济学和统计基础",
          "探索国际组织与国际政策领域的职业方向，积累个人作品集与探索记录"
        ],
        "interestsTitle": "关注领域",
        "interests": [
          "中国与东亚",
          "国际关系与国际政治经济",
          "国际通商与贸易政策",
          "供应链、出口管制与制裁",
          "中美关系对贸易与产业的影响",
          "依据资料和数据解释国际议题的方法"
        ],
        "goals": [
          {
            "period": "2027",
            "title": "贸易与政策领域实务",
            "items": [
              "准备申请贸易领域研究助理或企业政府关系与贸易战略实习"
            ]
          },
          {
            "period": "2028",
            "title": "赴美攻读硕士",
            "items": [
              "以秋季进入国际关系与公共政策硕士项目为目标做准备"
            ]
          }
        ]
      },
      notes: {
        label: "NOTES",
        title: "探索记录",
        // 실제 글만 추가합니다. 비어 있으면 이 언어의 섹션과 메뉴가 숨겨집니다.
        items: []
      },
      contact: {
        label: "CONTACT",
        title: "联系",
        text: "咨询与合作提议，请通过邮件联系。",
        form: {
          nameLabel: "姓名",
          emailLabel: "回复邮箱",
          messageLabel: "内容",
          submitLabel: "打开邮件撰写窗口",
          hint: "填写的内容会转到邮件应用中。请在邮件应用中完成发送。",
          subject: "作品集咨询"
        },
        email: "发送邮件",
        github: "GitHub",
        linkedin: "LinkedIn"
      },
      footer: "© 2026 Juyeon Jung"
    },

    /* ======================= 繁體中文 ======================= */
    "zh-Hant": {
      htmlLang: "zh-TW",
      header: { navigationLabel: "主要導覽", languageLabel: "選擇語言" },
      meta: { title: "鄭主緣 Juyeon Jung | 國際貿易與政策探究", description: "以中國經濟與貿易學習及國際活動協作經驗為基礎，製作處理貿易新聞與貿易數據的網頁工具，為貿易及政策領域的研究與實務做準備。" },
      nav: { about: "關於我", experience: "經歷", projects: "專案", now: "近況", notes: "探究紀錄", contact: "聯絡" },
      hero: {
        eyebrow: "JUYEON JUNG",
        name: "鄭主緣",
        headline: "以對華語地區的理解與國際協作經驗為基礎，我正在培養國際貿易與政策領域的調查和分析能力。",
        headlineBreakAfter: "以對華語地區的理解與國際協作經驗為基礎，",
        intro: "我曾學習中國經濟與貿易，並在臺灣就讀兩年。\n在國際活動中，我曾協調海外媒體與機構的需求及時程。",
        politicalEconomyInterest: "國際政治經濟",
        photo: "個人照片",
        ctaProjects: "檢視專案",
        ctaContact: "聯絡我"
      },
      strengths: {
        title: "優勢",
        items: [
          { title: "全球視野與區域理解", desc: "透過中國經濟與貿易課程及在臺灣的學習，認識華語地區的語言與社會。" },
          { title: "貿易與市場資料分析", desc: "製作網頁工具，依不同用途整理與比較貿易新聞、政策原文及貿易統計。" },
          { title: "專案與利害關係人協調", desc: "整理海外媒體、機構和製作合作夥伴的需求及時程，並與營運團隊協調資訊傳遞。" }
        ]
      },
      about: {
        label: "ABOUT",
        title: "關於我",
        titleBreakAfter: "",
        body: [
          "我在漢陽大學主修中語中文學，輔修中國經濟通商學，並在國立臺灣大學取得中國文學雙學位。在臺灣用兩年時間以中文修讀專業課程，為理解華語地區的語言與社會奠定了基礎。",
          "擔任EXPORUM全球戰略事業組實習生期間，我協助海外媒體合作、海外講者與機構的邀請及時程協調，並進行產業活動資料調查。我累積了整理不同合作方的需求與條件、將確認後的資訊寫成文件並傳達的實務經驗。",
          "在貿易AX培訓課程中，我製作網頁儀表板，協助使用者查找與比較分散的資訊。\n在個人專案Trade Data Lab之下，我分別製作新聞學習、政策發布前後貿易額比較，以及貿易夥伴與貿易集中度探索等用途的網站。"
        ],
        moreOpen: "展開學歷、證照與工具",
        moreClose: "收起",
        educationTitle: "學歷與教育",
        education: [
          {
            name: "漢陽大學",
            period: "2022.03 – 2026.08，畢業",
            lines: [
              "主修中語中文學，輔修中國經濟通商學",
              "相關課程：總體經濟學、國際貿易與通商政策、中國外交政策、當代中國社會",
              "GPA 3.81/4.5，2026年8月畢業優等生（2025學年度後期）"
            ]
          },
          {
            name: "國立臺灣大學",
            period: "2023.09 – 2025.06，赴臺學習",
            lines: [
              "取得中國文學系雙學位",
              "修讀以中文授課的專業課程並完成作業",
              "在陌生的語言環境中梳理不足、調整學習方法並逐步適應"
            ]
          },
          {
            name: "韓國貿易協會 貿易學院 貿易AX大師課程 第2期",
            period: "2026.08 – 2026.12，受訓中（預計2026.12.18結業）",
            lines: [
              "貿易實務、資料運用、生成式AI運用、團隊專案",
              "主要專案：AXPORT、Hanjungsun 越南市場進入行銷儀表板"
            ]
          }
        ],
        languagesTitle: "語言",
        languages: [
          "韓語：母語",
          "中文：HSK 6級 232分（2025.09），以中文修讀專業課程及在當地生活的經驗",
          "英語：TOEIC 880分（2026.04），TOEIC Speaking IH 150分（2026）",
          "透過英文電子郵件與海外合作夥伴協作的經驗"
        ],
        certsTitle: "證照",
        certs: ["國際貿易師 1級（2026）", "貿易英語 1級（2026）"],
        toolsTitle: "使用工具與範圍",
        tools: [
          { name: "Excel, Google Sheets", desc: "整理資料，管理工作進度" },
          { name: "PowerPoint, Word", desc: "撰寫報告與簡報資料" },
          { name: "Notion", desc: "記錄學習與經歷" },
          { name: "Python, pandas, numpy", desc: "基礎學習與練習" },
          { name: "Flask, Streamlit", desc: "訓練專案中使用" },
          { name: "HTML, CSS, JavaScript", desc: "在AI輔助下製作和修改網頁原型" },
          { name: "生成式AI與程式設計輔助工具", desc: "具體化想法、撰寫初稿、實現介面並反覆改進" }
        ],
        hobbiesTitle: "興趣",
        hobbies: ["學習外語", "閱讀", "跑步"]
      },
      experience: {
        label: "EXPERIENCE",
        title: "工作經歷",
        dutiesTitle: "主要工作",
        caseTitle: "以佐證資料核對合作成果的案例",
        skillsTitle: "累積的能力",
        items: [
          {
            org: "EXPORUM 全球戰略事業組",
            role: "實習生",
            period: "2026.03 – 2026.06",
            events: "相關活動：Smart Tech Korea 2026、TechCon 2026",
            summary: "與18家海外媒體合作夥伴溝通，管理合作進度，並協助國際活動的營運。",
            duties: [
              "調研海外媒體合作夥伴候選，傳送英文提案並跟進聯絡",
              "與18家海外媒體合作夥伴溝通，管理合作進度",
              "用Excel整理各合作夥伴的合作條件、雙方提供事項和合約狀態",
              "傳遞英文資料，協商刊登時程，確認對方需求",
              "策劃社群媒體內容，製作宣傳圖片",
              "調研產業與技術動態，協助撰寫新聞稿初稿",
              "協調海外演講嘉賓的日程和行程，支援現場引導與活動營運"
            ],
            caseText: "我將合作條件與實際刊登成果進行比對，整理最終報告。確認了STK展覽9家媒體、TechCon大會7家媒體的刊登依據。我保留了已確認貼文的截圖與連結，並將未執行項目與尚未確認的曝光分別記錄，以釐清後續工作。",
            skills: ["海外合作夥伴溝通", "日程協調", "進度管理", "基於證據的彙報方式"],
            cases: [
              {
                id: "buyers",
                title: "國內外買家計畫比較調查",
                summary: "按照支援內容、參與條件和費用核銷方式，比較國內外20個買家計畫案例，整理並彙報商談、出席與活動後評估如何和支援內容連結。",
                workflow: ["蒐集案例", "比較支援與條件", "歸納差異", "提交工作參考資料"],
                comparison: { headers: ["比較項目", "核對內容"], rows: [["支援內容", "機票與住宿、交通支援、休息室與交流活動"], ["參與條件", "最低商談次數、活動出席與活動後評估"], ["核銷方式", "事前提供支援，或符合參與條件後核銷費用"]] },
                caption: "依據2026年4月的比較表與工作日誌重建調查項目，不是各計畫目前參與規則的說明。"
              },
              {
                id: "verification",
                title: "核對海外媒體合作成果",
                workflow: ["核對合作條件", "比對實際刊登成果", "記錄連結與畫面", "區分進展狀態"],
                caption: "依據2026年6月16日署有本人姓名的進度報告與工作日誌重建，區分約定條件、未執行項目與無法確認的項目。",
                summary: "我將合作條件與實際刊登成果進行比對，整理最終報告。確認了STK展覽9家媒體、TechCon大會7家媒體的刊登依據。我保留了已確認貼文的截圖與連結，並將未執行項目與尚未確認的曝光分別記錄，以釐清後續工作。"
              }
            ]
          }
        ],
        casesTitle: "資料調查與依據核對案例"
      },
      projects: {
        label: "PROJECTS",
        title: "代表專案",
        intro: "從貿易與國際議題出發，藉由資料與數據把問題整理成網頁工具的紀錄。",
        labels: {
          problemTitle: "問題",
          resultTitle: "成果",
          roleTitle: "我的角色",
          processTitle: "解決過程",
          aiTitle: "AI運用",
          aiAssisted: "AI協助的工作",
          aiOwned: "我的判斷與確認",
          storyProblem: "問題意識",
          storyAction: "我的工作",
          storyChange: "調整後的呈現",
          dashboard: "開啟儀表板",
          workingServices: "可運作服務",
          materials: "專案資料",
          process: "解決過程",
          aiUse: "AI應用",
          aiDelegated: "交給AI的工作",
          aiOwn: "我親自決定並確認的部分",
          outcome: "成果",
          rooms: "已公開的學習室",
          limits: "限制與下一步",
          lessons: "回顧",
          report: "查看虛擬企業報告（韓文HTML）",
          question: "核心問題",
          contribution: "我的核心貢獻",
          period: "時間",
          type: "類型",
          status: "狀態",
          problem: "想解決的問題",
          role: "我的工作",
          moreOpen: "檢視詳情",
          moreClose: "收起",
          link: "檢視專案",
          background: "背景與問題",
          methodology: "探究與實作方法",
          implications: "發現與啟示",
          components: "組成服務",
          working: "已確認可運作",
          planned: "規劃階段",
          legacyProject: "既有專案紀錄"
        },
        items: [
          {
            id: "tradedatalab",
            presentation: {
              guide: {
                "summary": "我製作了三個用於貿易學習與資料探索的網站。",
                "role": "訂定各網站的問題與介面架構，製作並確認成果",
                "problem": "新聞學習、政策發布前後比較與貿易結構探索，需要不同的資料與介面。",
                "process": [
                  "訂定各網站要回答的問題與使用目的。",
                  "分別製作新聞學習、政策前後比較與貿易結構探索網站。",
                  "訂定標示來源、基準期間與單位的共同原則。"
                ],
                "ai": {
                  "tools": [
                    "Claude Code"
                  ],
                  "assisted": "運用Claude Code協助各網站的規劃與功能實作。",
                  "owned": "由我訂定各網站的主題與所需功能，並確認及修改成果。"
                },
                "result": "Trade News Room、Policyline與Tradeweave分別作為獨立網站運作。"
              },
              "title": "Trade Data Lab | 貿易與資料網頁專案集",
              "type": "個人專案（開發中）",
              "summary": "以貿易與資料為主題，製作多個不同用途網站的個人專案。",
              "contribution": "以Trade Data Lab為主題，訂定各網站的問題與頁面，從規劃到製作皆親自進行。",
              "details": [
                "Trade News Room用於學習新聞與貿易概念，Policyline用於比較政策發布前後的貿易額，Tradeweave用於查看貿易夥伴與集中度。",
                "這三個網站目前已可運作。Fact Desk規劃為Trade News Room內部功能，Report Plain與Trade Notebook仍在規劃中。"
              ],
              "problem": "新聞學習、政策發布前後的比較與貿易結構探索，各自需要不同的資料與頁面設計。",
              "action": "以個人專案Trade Data Lab為主題，分別規劃並製作Trade News Room、Policyline與Tradeweave。",
              "change": "讓使用者在符合各自用途的網站中學習新聞與概念、比較政策發布前後的貿易額，或查看貿易夥伴與集中度。"
            },
            name: "Trade Data Lab | 貿易與資料網頁專案集",
            summary: "以貿易與資料為主題，持續製作多個網站與工具的個人專案。Trade News Room、Policyline與Tradeweave是分別處理不同問題的網站，其他後續工具也在同一專案下規劃中。",
            question: "如何分別製作適合貿易新聞學習、政策發布前後比較與貿易結構探索的網頁工具？",
            contribution: "訂定了專案主題、各網站的問題與共同呈現原則。分別製作了Trade News Room、Policyline與Tradeweave，並持續規劃後續工具。",
            period: "2026",
            type: "個人專案",
            status: "Trade News Room、Policyline、Tradeweave可運作 / 其餘部分規劃中",
            problem: "透過新聞學習貿易概念、比較政策發布前後的貿易額、查看各國貿易結構，需要不同的資料與探索方式。",
            role: [
              "規劃持續製作貿易與資料相關網站的個人專案",
              "分別製作Trade News Room、Policyline與Tradeweave並規劃功能",
              "整理來源、基準期間、單位、事實與解讀的呈現原則",
              "規劃Fact Desk、Report Plain與Trade Notebook的後續架構"
            ],
            caseStudy: {
              background: "貿易新聞學習、政策發布前後的比較與各國貿易結構探索，需要不同的資料與頁面。Trade Data Lab是依這些用途，逐步製作網站與工具的個人專案。",
              methodology: "在Trade Data Lab專案下，分別製作了用於學習新聞與貿易概念的Trade News Room、比較政策發布前後貿易額的Policyline，以及查看貿易夥伴與集中度的Tradeweave。各服務共同遵循標示來源、基準期間與單位，並區分已確認事實與解讀的原則。",
              implications: "專案協助使用者在接受新聞中的解釋之前，先核對相關原文與數字，並找出需要進一步查看的問題。僅憑政策發布前後的變化，無法確定政策效果或確認轉道出口；服務也會說明資料所能反映的範圍與仍然存在的不確定性。",
              limits: "規劃書中的整體架構是完成目標，各項資料串接與自動更新的實作範圍應依服務分別說明。不能將政策發布同期的貿易變化視為政策因果效果或轉道出口的證明。"
            },
            components: [
              { id: "tradenews", name: "Trade News Room", status: "working", description: "透過學習室、圖表與測驗，查看貿易新聞及相關概念的服務。" },
              { id: "policyline", name: "Policyline", status: "working", description: "查看政策發布前後貿易額變化的服務。" },
              { id: "tradeweave", name: "Tradeweave", status: "working", description: "查看各國貿易夥伴與貿易集中度的服務。" },
              { id: "factdesk", name: "Fact Desk", status: "planned", description: "規劃加入Trade News Room內的功能，用於區分已確認的事實、解讀與不確定之處。" },
              { id: "reportplain", name: "Report Plain", status: "planned", description: "正在規劃將報告的主張、證據與限制和原文頁碼一起整理的服務。" },
              { id: "tradenotebook", name: "Trade Notebook", status: "planned", description: "正在規劃發布依問題、資料、發現與限制組成的分析筆記。" }
            ],
            note: "Trade Data Lab是持續製作貿易與資料相關網站及工具的個人專案。Fact Desk是Trade News Room內部的規劃功能，Report Plain與Trade Notebook仍在規劃中。",
            legacyProject: {
              id: "tradenews",
              name: "Trade News Room | 新聞裡的貿易學習室",
              question: "如何將全球貿易新聞的背景與概念和資料連結起來理解，並將這些理解逐步累積為學習紀錄？",
              contribution: "我挑選真實的貿易新聞作為學習主題，親自規劃從新聞摘要與來源出發，依序連結統計、模擬器、測驗與學習紀錄的學習流程。功能實作與介面設計借助了AI。目前已公開5個學習室，並持續增加中。",
              summary: "以全球貿易新聞為起點，同時理解概念與資料的學習網站",
              period: "2026",
              type: "個人專案",
              status: "已公開5個學習室，規劃再增加5個左右",
              problem: "我希望理解真實貿易議題背後的背景與相關概念，並記錄學習內容。",
              role: ["選定學習主題與新聞", "規劃從新聞摘要與來源到統計、模擬器、測驗與學習紀錄的學習流程", "借助AI完成功能實作與介面設計", "在增加學習室的過程中改善介面與學習流程"],
              caseStudy: {
                process: "每個學習室都以一則真實的貿易新聞為起點。學習者先閱讀新聞摘要與來源，在統計圖表或模擬器中親自調整數字，再進行測驗、術語學習與學習筆記。我將真實的統計圖表與簡化的學習模型分開呈現，並提醒不能只憑圖表斷定變化原因，也不能把模型計算值當作實際預測。",
                ai: { delegated: "功能實作與介面設計", own: "學習主題與新聞的選定、學習室的架構與順序、介面要呈現的內容，都由我親自規劃，並在確認成果後加以修改。" },
                outcome: "公開網站上已有5個學習室，每個學習室都搭配一個與新聞相關的模擬器。網站也實作了貿易新聞瀏覽、術語詞典、貿易地圖、儲存在瀏覽器中的學習紀錄，以及查找站內學習內容的導覽聊天機器人。",
                limits: "學習紀錄儲存在目前使用的瀏覽器中，沒有帳號同步功能；導覽聊天機器人依照規則查找站內內容。模擬器是簡化的學習模型，外部新聞與統計的準確性及學習成效尚未另行驗證。我規劃再增加5個左右的學習室。",
                lessons: "這是我為自學而做的網站，但因為時間不足，沒能持續維護，實際學習中也還幾乎沒有用上。我體會到，做出一個工具和持續使用它是兩回事。我希望繼續充實學習室，把它發展成自己真正會用的工具。"
              },
              rooms: [
                { id: "urea", title: "尿素短缺與進口來源多元化（2021）", tool: "採購比例模擬器" },
                { id: "graphite", title: "中國石墨出口許可制（2023）", tool: "供應減少與價格模擬器" },
                { id: "gallium", title: "鎵與鍺出口許可制（2023）", tool: "庫存與許可等待期模擬器" },
                { id: "tariff", title: "韓美貿易協議與15%關稅（2025）", tool: "關稅歸宿模擬器" },
                { id: "redsea", title: "紅海危機與繞行好望角（2023）", tool: "航線與運費模擬器" }
              ],
              materials: [
                { id: "statistics", label: "統計與來源說明頁面（韓語介面）" },
                { id: "simulation", label: "採購比例模擬器（韓語介面）" }
              ],
              note: "這是我持續完善的個人專案，網站內容為韓語。"
            },
            materials: [
              { id: "statistics", label: "Trade News Room: 統計與來源說明頁面（韓語介面）" },
              { id: "simulation", label: "Trade News Room: 採購比例模擬器（韓語介面）" }
            ]
          },
          {
            id: "axport",
            presentation: {
              guide: {
                "summary": "我調整了資訊呈現方式，讓半導體出口檢視中的法規確認、商業參考分數與資料不足能分開閱讀。",
                "role": "首頁規劃與UI/UX，報告資訊架構與用語改善",
                "problem": "法規限制、商業評分與未確認資訊一起呈現時，難以分辨各自的判斷意義。",
                "process": [
                  "在首頁說明五個檢視領域與使用流程。",
                  "在報告中將法規確認與商業參考分數分開呈現。",
                  "將摘要連結至詳細依據，並標示基準日與資料不足。"
                ],
                "ai": {
                  "tools": [
                    "ChatGPT (Codex)",
                    "Gemini"
                  ],
                  "assisted": "運用AI協助設計網站首頁版面。",
                  "owned": "由我訂定資訊架構與呈現標準，並確認及修改介面與用語。"
                },
                "result": "團隊完成了串連摘要、詳細依據與報告匯出的儀表板原型。"
              },
              "title": "AXPORT | 半導體出口決策儀表板",
              "type": "團隊專案（原型）",
              "summary": "彙集半導體出口評估所需法規與市場資訊的儀表板。",
              "contribution": "我規劃首頁，並調整報告架構與用語，讓法規確認與商業可行性評分能清楚區分。",
              "details": [
                "我製作了響應式版面與多語言介面。",
                "我整理了從報告摘要連結至詳細依據的資訊架構。"
              ],
              "problem": "法規限制、商業可行性評分與缺少資料的項目一起呈現時，判斷依據容易混淆。",
              "action": "我規劃首頁，並調整報告架構與用語，將法規確認與商業可行性評估分開。",
              "change": "報告從摘要連結至詳細依據，並標示資料基準日期及資料不足的項目，讓使用者能查看結果的依據。"
            },
            name: "AXPORT | 半導體出口決策儀表板",
            question: "在半導體出口中，如何區分法規限制與市場機會進行評估，並傳達判斷所依據的資訊？",
            contribution: "我負責首頁規劃、UI/UX、響應式版面與多語言介面。我改善了報告架構與用語，以區分法規確認與商業可行性評估。我調整了從摘要連結至詳細依據的資訊架構，並標示資料基準日期與尚未確認的資訊，協助使用者理解結果的意義與限制。",
            summary: "彙集半導體出口審查所需資訊的預審儀表板",
            period: "2026.09",
            type: "貿易AX大師課程 團隊專案",
            status: "原型成果",
            problem: "法規、市場性、價格、物流、穩定性等資訊分散各處。即使彙整到同一個頁面，如果法規限制、商業評分與缺乏資料的項目被以同樣的分量解讀，也可能誤導判斷。",
            role: ["首頁規劃與UI/UX設計", "響應式版面與多語言介面", "PDF報告與分析報告的架構及用語改善", "服務介紹與簡報資料製作"],
            caseStudy: {
              process: "首頁透過服務介紹與使用說明，呈現五個檢視領域及使用流程。報告從摘要連結至詳細依據，並將法規檢視與商業可行性參考分數分開。缺乏資料的項目標示為資料不足，同時顯示資料基準日期。",
              ai: { delegated: "到達頁設計配置（ChatGPT Codex、Gemini）", own: "首頁與報告的資訊架構，以及將法規檢視、參考分數與資料不足分開呈現的方式，都由我親自規劃，並在確認介面與用語後加以修改。" },
              outcome: "團隊完成了將五個領域的摘要、詳細依據與報告匯出串連起來的網頁儀表板。公開的虛擬企業對美出口報告（2026-11-11產出，分析基準日2026-11-10）顯示有條件檢視狀態與56%的依據涵蓋比例，缺乏資料的價格及物流項目標示為資料不足。56%是這份範例報告中的數值。",
              limits: "部分統計查詢失敗及企業填報值的有效期限等因素，使部分項目仍未評估。參考分數與依據涵蓋比例不代表出口成功機率或判斷準確性。仍需確認統計範圍、基準日期與輸入資料的有效性。",
              lessons: "一切都是第一次：第一次做的工作、第一次接觸的概念、第一次製作的儀表板，光是跟上整體流程就很吃力。在這樣的情況下，我專注於自己能做好的設計工作。",
              background: "半導體出口初步檢視需要整合規範、市場潛力、價格、物流與穩定性資訊。問題不只是彙整分散資料，也要說明規範限制、商業參考分數和資料不足代表不同的判斷依據。",
              methodology: "培訓團隊製作了涵蓋五個領域的儀表板原型。我改善首頁與報告的資訊架構，使摘要能連結至詳細依據，並將規範檢視與參考分數分開，標示資料基準日和無法確認的資訊。",
              implications: "我認識到，協助出口初步檢視的介面不只要呈現分數，也應展示依據的適用範圍與資料空缺。成果是初步檢視原型，不是實際出口成效或規範判斷準確性的驗證。"
            },
            note: "團隊專案。分析引擎與整體服務為團隊成果，我的貢獻為上述範圍。"
          },
          {
            id: "hanjeongseon",
            presentation: {
              guide: {
                "summary": "我在HOME串連當地資訊與今日待辦工作，協助準備進入越南市場。",
                "role": "HOME規劃與實作，介紹網站與宣傳影片製作",
                "problem": "當地資訊與行銷準備時程分散，難以掌握接下來要做的事。",
                "process": [
                  "將當地行程、新聞與工作進度集中至HOME。",
                  "以目標日期為基準回推準備時程。",
                  "區分供瀏覽的文章與已確認的公告。"
                ],
                "ai": {
                  "tools": [
                    "Claude Code",
                    "Codex",
                    "Google Flow",
                    "Higgsfield"
                  ],
                  "assisted": "運用AI協助實作HOME，並製作獨立的介紹網站與宣傳影片。",
                  "owned": "由我規劃HOME資訊、時程方式、新聞分類及網站與影片架構，並親自確認及修改成果。"
                },
                "result": "在團隊假設進入越南市場的原型中，實作了查看時程與準備進度的HOME。"
              },
              "title": "Hanjungsun | 進入越南市場的行銷儀表板",
              "type": "團隊專案（原型）",
              "summary": "以食品品牌進入越南峴港為情境，彙集當地資訊與準備時程的儀表板。",
              "contribution": "我規劃並實作HOME，在一個頁面連結當地時程、新聞與當日待辦事項。",
              "details": [
                "我從目標日期回推準備時程，並區分供瀏覽的文章與已確認的公告。",
                "我也另外規劃並製作了越南介紹網站與宣傳影片。"
              ],
              "problem": "越南當地資訊與行銷準備時程分散，負責人難以判斷下一步該做什麼。",
              "action": "我規劃並實作HOME，從目標日期回推準備時程，並連結當地時程、新聞與任務進度。",
              "change": "HOME在一個頁面呈現當日待辦事項與活動進度，並區分供瀏覽的文章和已確認的公告。"
            },
            name: "Hanjungsun | 越南市場進入行銷儀表板",
            question: "韓國食品品牌準備進入越南市場時，如何將當地資訊轉化為可執行的行銷計畫？",
            contribution: "我負責HOME的規劃與實作，讓行銷人員能根據當地資訊與準備情況決定下一步行動。我從目標日期回推準備時程，並連結當地活動、新聞與工作進度，協助使用者掌握當日待辦事項與行銷活動進度。我也規劃並製作了越南介紹網站與宣傳影片。",
            summary: "以進入越南峴港為假設，彙集當地資訊與行銷準備日程的工作工具，並搭配製作越南介紹網站與宣傳影片",
            period: "2026.10",
            type: "貿易AX大師課程 團隊專案",
            status: "發表版本原型，新聞影響視覺化為後續規劃",
            problem: "當地資訊與行銷活動準備日程分散，難以把握下一步該做什麼。",
            role: ["HOME頁面的規劃與實作", "以目標日期為基準回推準備時程的行事曆", "在一個頁面整合當地時程、新聞與工作進度", "設計將新聞分為文章清單與已確認公告的標準", "規劃並製作越南介紹網站與宣傳影片"],
            caseStudy: {
              process: "團隊儀表板將當地研究連結至時程、內容製作、創作者合作及成效管理。我在HOME中彙整當地時程、新聞與準備情況，協助使用者決定下一步行動。我將便於探索的新聞清單與已確認的公告分開，區分資訊探索與判斷依據的確認。",
              ai: { delegated: "HOME功能實作、介紹網站設計與宣傳影片製作（Claude Code、Codex、Google Flow、Higgsfield）", own: "HOME要呈現的資訊、時程回推方式、新聞分類標準，以及介紹網站與宣傳影片的架構，都由我親自規劃，並在確認成果後加以修改。" },
              outcome: "團隊展示影片的HOME部分呈現行事曆、活動設定與新聞介面，並提供另外製作的越南介紹網站及宣傳影片。",
              limits: "這是以越南市場進入情境為假設的訓練原型，簡報中的工作時間比較為估計值而非實測。發表回饋建議在彙整新聞之外，呈現新聞對Hanjungsun進入越南市場的意義。我正在規劃以綠色表示機會、黃色表示注意、紅色表示風險、依據不足時以灰色暫緩判斷的影響分類與篩選，目前尚未實作。",
              lessons: "在第二個儀表板專案中，我第一次親自規劃並實作了一個功能。雖然沒有取得顯著成果，但這是我第一次把自己規劃的內容做成可以運作的頁面。",
              background: "這是以韓國食品品牌進入越南峴港市場為假設的團隊專案，處理當地資訊與行銷準備時程分散、負責人難以決定下一步行動的問題。",
              methodology: "我規劃並實作HOME，串連當地活動、新聞與工作進度，從目標日期倒推準備時程。我將瀏覽用新聞與已確認的公告分開，並另外製作越南介紹網站和宣傳影片。",
              implications: "我認識到，集中資訊後還需要連結準備時程與下一步行動。將新聞視覺化為機會與風險仍是後續改善規劃，原型不代表實際市場進入成果或已驗證的行銷成效。"
            },
            materials: [
              { id: "brandSite", label: "越南介紹網站（訓練原型）" },
              { id: "homeDemo", label: "HOME展示（團隊影片節錄，韓語）" },
              { id: "promo", label: "越南宣傳影片" }
            ],
            note: "團隊專案。整體儀表板為團隊成果，我的貢獻以上述範圍為限，以HOME、越南介紹網站與宣傳影片為主。"
          }
        ],
        extraTitle: "其他專案與活動",
        extraOpen: "展開",
        extraClose: "收起",
        extra: [
          { id: "kita-study", linkKey: "kitaStudy", period: "2026.08 – 2026.12", dashboardLabel: "開啟儀表板", name: "KITA報告研讀小組", meta: "與貿易AX培訓同期進行的報告研讀活動", desc: "閱讀國際通商議題並準備導讀資料。準備導讀CPTPP相關報告的國外部分，並撰寫介紹文字" },
          {
            "id": "kotra-finance",
            "name": "公共機構財務資料研讀 | KOTRA",
            "meta": "大學個人課堂作業",
            "desc": "在大學課程中，我運用KOTRA2020至2024年的公開財務資料，整理資產與負債、收入與支出的變化。這是一份探討公共機構財源結構的個人作業。"
          },
          { name: "其他活動", desc: "人文科學學院學生會書記（2023）、禮拜合唱志願服務（2025）、舞蹈社團 Ars Amandi（2022）、咖啡店 ZITTEN 工作（2022–2023）" }
        ]
      },
      now: {
        "label": "NOW",
        "title": "現在在做的事",
        "asOf": "基準日 2026.11.16",
        "statement": "目前，我同時修讀貿易AX課程並進行個人網頁專案，\n也在補強英語、經濟學與統計基礎。",
        "doingTitle": "進行中",
        "doing": [
          "修讀貿易AX大師課程並整理團隊專案經驗（預計2026.12.18結業）",
          "以個人專案Trade Data Lab為主題，製作並擴充貿易與資料相關網站",
          "準備啟動企業合作實作專案，為提供公共服務的機構開發AI諮詢聊天機器人",
          "以TOEFL 100+為目標學習英語，並補強經濟學和統計基礎",
          "探索國際組織與國際政策領域的職涯方向，累積個人作品集與探究紀錄"
        ],
        "interestsTitle": "關注領域",
        "interests": [
          "中國與東亞",
          "國際關係與國際政治經濟",
          "國際通商與貿易政策",
          "供應鏈、出口管制與制裁",
          "中美關係對貿易與產業的影響",
          "運用參考資料與數據說明國際議題的方法"
        ],
        "goals": [
          {
            "period": "2027",
            "title": "貿易與政策領域實務",
            "items": [
              "準備申請貿易領域研究助理或企業政府關係與貿易策略實習"
            ]
          },
          {
            "period": "2028",
            "title": "赴美攻讀碩士",
            "items": [
              "以秋季進入國際關係與公共政策碩士班為目標做準備"
            ]
          }
        ]
      },
      notes: {
        label: "NOTES",
        title: "探究紀錄",
        // 실제 글만 추가합니다. 비어 있으면 이 언어의 섹션과 메뉴가 숨겨집니다.
        items: []
      },
      contact: {
        label: "CONTACT",
        title: "聯絡",
        text: "洽詢與合作提案，歡迎來信。",
        form: {
          nameLabel: "姓名",
          emailLabel: "回覆用電子郵件地址",
          messageLabel: "內容",
          submitLabel: "開啟郵件撰寫視窗",
          hint: "填寫的內容會移至電子郵件應用程式。請在應用程式中完成寄送。",
          subject: "作品集洽詢"
        },
        email: "寄送電子郵件",
        github: "GitHub",
        linkedin: "LinkedIn"
      },
      footer: "© 2026 Juyeon Jung"
    },

    /* ======================= 日本語 ======================= */
    ja: {
      htmlLang: "ja",
      header: { navigationLabel: "メインナビゲーション", languageLabel: "言語を選択" },
      meta: { title: "鄭主緣 Juyeon Jung | 国際通商と政策の探究", description: "中国の経済と貿易に関する学びと国際イベントでの協働経験を基に、貿易ニュースと貿易データを扱うWebツールを制作し、通商と政策分野での研究と実務に備えています。" },
      nav: { about: "自己紹介", experience: "経歴", projects: "プロジェクト", now: "現在", notes: "探究ノート", contact: "連絡先" },
      hero: {
        eyebrow: "JUYEON JUNG",
        name: "鄭主緣",
        headline: "中国語圏への理解と国際協働の経験を基に、国際通商と政策分野の調査と分析の力を磨いています。",
        headlineBreakAfter: "中国語圏への理解と国際協働の経験を基に、",
        intro: "中国の経済と貿易を学び、台湾で2年間修学しました。\n国際イベントでは、海外メディアや機関の要望と日程を調整しました。",
        politicalEconomyInterest: "国際政治経済",
        photo: "プロフィール写真",
        ctaProjects: "プロジェクトを見る",
        ctaContact: "連絡する"
      },
      strengths: {
        title: "強み",
        items: [
          { title: "国際的な視野と地域理解", desc: "中国の経済と貿易に関する学びと台湾での修学を通じて、中国語圏の言語と社会を学びました。" },
          { title: "貿易と市場データの分析", desc: "貿易ニュース、政策原文、貿易統計を目的に応じて整理し比較するWebツールを制作しています。" },
          { title: "プロジェクトと関係者の調整", desc: "海外メディア、機関、制作協力先の要望と日程を整理し、運営チームとの情報共有を調整しました。" }
        ]
      },
      about: {
        label: "ABOUT",
        title: "自己紹介",
        titleBreakAfter: "",
        body: [
          "漢陽大学で中語中文学を専攻、中国経済通商学を副専攻し、国立台湾大学で中国文学の複数学位を取得しました。台湾で2年間、中国語の専攻授業を履修し、中国語圏の言語と社会を理解する土台を築きました。",
          "EXPORUMのグローバル戦略事業チームのインターンとして、海外メディアとの協業、海外登壇者と機関への招待や日程調整、産業イベントの資料調査を支援しました。異なる関係者の要望と条件を整理し、確認した内容を文書で伝える実務を経験しました。",
          "貿易AX研修では、分散した情報の探索と比較を支援するWebダッシュボードを制作しています。\n個人プロジェクトTrade Data Labでは、ニュース学習、政策発表前後の貿易額比較、貿易相手国と取引集中度の探索を目的とするWebサイトをそれぞれ制作しています。"
        ],
        moreOpen: "学歴、資格、使用ツールを見る",
        moreClose: "閉じる",
        educationTitle: "学歴と教育",
        education: [
          {
            name: "漢陽大学",
            period: "2022.03 – 2026.08、卒業",
            lines: [
              "主専攻 中語中文学、副専攻 中国経済通商学",
              "関連履修分野：マクロ経済学、国際貿易と通商政策、中国外交政策、現代中国社会",
              "GPA 3.81/4.5、2026年8月卒業 優等生（2025年度後期）"
            ]
          },
          {
            name: "国立台湾大学 (National Taiwan University)",
            period: "2023.09 – 2025.06、現地で修学",
            lines: [
              "中国文学科の複数学位を取得",
              "中国語で行われる専攻授業と課題を履修",
              "慣れない言語環境で足りない部分を整理し、学び方を調整しながら適応"
            ]
          },
          {
            name: "韓国貿易協会 貿易アカデミー 貿易AXマスター 第2期",
            period: "2026.08 – 2026.12、受講中（2026.12.18 修了予定）",
            lines: [
              "貿易実務、データ活用、生成AI活用、チームプロジェクト",
              "主なプロジェクト：AXPORT、Hanjungsun ベトナム進出マーケティングダッシュボード"
            ]
          }
        ],
        languagesTitle: "言語",
        languages: [
          "韓国語：母語",
          "中国語：HSK 6級 232点（2025.09）、中国語での専攻授業と現地生活の経験",
          "英語：TOEIC 880点（2026.04）、TOEIC Speaking IH 150点（2026）",
          "英文メールによる海外パートナーとの協業経験"
        ],
        certsTitle: "資格",
        certs: ["国際貿易士 1級（2026）", "貿易英語 1級（2026）"],
        toolsTitle: "使用ツールと範囲",
        tools: [
          { name: "Excel, Google Sheets", desc: "資料の整理と業務の進捗管理" },
          { name: "PowerPoint, Word", desc: "報告書と発表資料の作成" },
          { name: "Notion", desc: "学習と経験の記録" },
          { name: "Python, pandas, numpy", desc: "基礎学習と実習" },
          { name: "Flask, Streamlit", desc: "教育プロジェクトで使用" },
          { name: "HTML, CSS, JavaScript", desc: "AIの助けを借りたWebプロトタイプの制作と修正" },
          { name: "生成AIとコーディング支援ツール", desc: "アイデアの具体化、草案作成、画面実装と改善の繰り返し" }
        ],
        hobbiesTitle: "趣味",
        hobbies: ["外国語の勉強", "読書", "ランニング"]
      },
      experience: {
        label: "EXPERIENCE",
        title: "実務経験",
        dutiesTitle: "担当業務",
        caseTitle: "協業の結果を根拠と照合した事例",
        skillsTitle: "この経験で培った力",
        items: [
          {
            org: "EXPORUM グローバル戦略事業チーム",
            role: "インターン",
            period: "2026.03 – 2026.06",
            events: "関連イベント：Smart Tech Korea 2026、TechCon 2026",
            summary: "海外メディアパートナー18社と連絡を取り、協業の進捗を管理し、国際イベントの運営をサポートしました。",
            duties: [
              "海外メディアパートナー候補の調査、英文での提案とフォローアップ連絡",
              "海外メディアパートナー18社とのやり取りと協業の進捗管理",
              "パートナーごとの協業条件、双方の提供事項、契約状況をExcelで整理",
              "英文資料の送付、配信スケジュールの調整、要望の確認",
              "SNSコンテンツの企画と広報画像の制作",
              "産業と技術動向の調査、プレスリリース草案作成のサポート",
              "海外登壇者のスケジュールと移動の調整、現場案内とイベント運営のサポート"
            ],
            caseText: "協業条件と実際の掲載結果を照合し、最終報告書をまとめました。STK展示会では9媒体、TechConカンファレンスでは7媒体の掲載根拠を確認しました。確認済みの投稿の画面とリンクを残しました。未実施の項目と未確認の露出を分けて記録し、後続業務を把握できるよう整理しました。",
            skills: ["海外パートナーとのコミュニケーション", "スケジュール調整", "進捗管理", "根拠を確認する報告"],
            cases: [
              {
                id: "buyers",
                title: "国内外のバイヤープログラム比較調査",
                summary: "国内外のバイヤープログラム20事例を、支援内容、参加条件、費用精算の方法で比較しました。商談、出席、事後評価が支援内容にどう結び付くかを整理して報告しました。",
                workflow: ["事例を収集", "支援内容と条件を比較", "相違点を要約", "業務参考資料として報告"],
                comparison: { headers: ["比較項目", "確認した内容"], rows: [["支援内容", "航空券と宿泊、移動支援、ラウンジと交流機会"], ["参加条件", "最低商談数、イベント出席、事後評価"], ["精算方法", "事前支援、または参加条件を満たした後の費用精算"]] },
                caption: "2026年4月の比較表と業務日誌を基に調査項目を再構成しました。各プログラムの現在の参加条件を案内する資料ではありません。"
              },
              {
                id: "verification",
                title: "海外メディアとの協業結果の確認",
                workflow: ["協業条件を確認", "実際の掲載結果と照合", "リンクと画面を記録", "進捗状況を区分"],
                caption: "2026年6月16日の本人名義の進捗報告書と業務日誌に基づく再構成です。約束した条件、未実施、確認できない項目を区別しました。",
                summary: "協業条件と実際の掲載結果を照合し、最終報告書をまとめました。STK展示会では9媒体、TechConカンファレンスでは7媒体の掲載根拠を確認しました。確認済みの投稿の画面とリンクを残しました。未実施の項目と未確認の露出を分けて記録し、後続業務を把握できるよう整理しました。"
              }
            ]
          }
        ],
        casesTitle: "資料調査と根拠確認の事例"
      },
      projects: {
        label: "PROJECTS",
        title: "代表プロジェクト",
        intro: "貿易と国際問題から出発した問いを、資料とデータで読み解くWebツールとして形にしてきた記録です。",
        labels: {
          problemTitle: "課題",
          resultTitle: "結果",
          roleTitle: "担当範囲",
          processTitle: "取り組みの流れ",
          aiTitle: "AIの活用",
          aiAssisted: "AIの支援",
          aiOwned: "自分で判断し確認したこと",
          storyProblem: "問題意識",
          storyAction: "担当したこと",
          storyChange: "構成の変化",
          dashboard: "ダッシュボードを見る",
          workingServices: "稼働中のサービス",
          materials: "プロジェクト資料",
          process: "取り組みの過程",
          aiUse: "AIの活用",
          aiDelegated: "AIに任せたこと",
          aiOwn: "自分で決めて確認したこと",
          outcome: "成果",
          rooms: "公開中の学習室",
          limits: "限界と次のステップ",
          lessons: "振り返り",
          report: "架空企業の報告書を見る（韓国語HTML）",
          question: "中心となる問い",
          contribution: "私の主な貢献",
          period: "期間",
          type: "種類",
          status: "状態",
          problem: "解決したかった課題",
          role: "担当したこと",
          moreOpen: "詳しく見る",
          moreClose: "閉じる",
          link: "プロジェクトを見る",
          background: "背景と課題",
          methodology: "取り組みの方法",
          implications: "分かったことと示唆",
          components: "構成サービス",
          working: "動作確認済み",
          planned: "企画段階",
          legacyProject: "これまでのプロジェクト記録"
        },
        items: [
          {
            id: "tradedatalab",
            presentation: {
              guide: {
                "summary": "貿易の学習とデータ探索のために、3つのWebサイトを制作しました。",
                "role": "各サイトの問いと画面構成の決定、制作、結果の確認",
                "problem": "ニュース学習、政策発表前後の比較、貿易構造の探索には、それぞれ異なる資料と画面が必要でした。",
                "process": [
                  "各サイトで扱う問いと利用目的を定めました。",
                  "ニュース学習、政策前後の比較、貿易構造の探索に合わせて別々に制作しました。",
                  "出典、基準期間、単位を示す共通の原則を定めました。"
                ],
                "ai": {
                  "tools": [
                    "Claude Code"
                  ],
                  "assisted": "各サイトの企画と機能実装にClaude Codeの支援を受けました。",
                  "owned": "各サイトのテーマと必要な機能を自分で決め、結果を確認して修正しました。"
                },
                "result": "Trade News Room、Policyline、Tradeweaveを、それぞれ動作する独立したWebサイトとして制作しました。"
              },
              "title": "Trade Data Lab | 貿易とデータのWebプロジェクト集",
              "type": "個人プロジェクト（開発中）",
              "summary": "貿易とデータをテーマに、目的の異なる複数のWebサイトを制作する個人プロジェクトです。",
              "contribution": "Trade Data Labのもとで各サイトの問いと画面を定め、企画から制作まで進めました。",
              "details": [
                "Trade News Roomはニュースと概念の学習、Policylineは政策発表前後の貿易額の比較、Tradeweaveは貿易相手国と集中度の確認を目的としています。",
                "この3サイトは現在動作しています。Fact DeskはTrade News Room内の機能として、Report PlainとTrade Notebookは追加の構成として企画中です。"
              ],
              "problem": "ニュースの学習、政策発表前後の比較、貿易構造の探索には、それぞれ異なる資料と画面構成が必要でした。",
              "action": "個人プロジェクトTrade Data Labのもとで、Trade News Room、Policyline、Tradeweaveをそれぞれ企画し制作しました。",
              "change": "ニュースと概念の学習、政策発表前後の貿易額、貿易相手国と集中度を、各目的に合ったWebサイトで確認できる構成にしました。"
            },
            name: "Trade Data Lab | 貿易とデータのWebプロジェクト集",
            summary: "貿易とデータをテーマに、複数のWebサイトやツールを制作する個人プロジェクトです。Trade News Room、Policyline、Tradeweaveはそれぞれ異なる問いを扱うWebサイトであり、同じプロジェクトのもとで次のツールも企画しています。",
            question: "貿易ニュースの学習、政策発表前後の比較、貿易構造の探索に適したWebツールを、それぞれどのように作れるだろうか。",
            contribution: "プロジェクトのテーマ、各サイトの問い、共通の表示原則を定めました。Trade News Room、Policyline、Tradeweaveを個別に制作し、次のツールの構成も整理しています。",
            period: "2026",
            type: "個人プロジェクト",
            status: "Trade News Room、Policyline、Tradeweaveは動作 / その他の構成は企画中",
            problem: "ニュースから貿易概念を学ぶこと、政策発表前後の貿易額を比較すること、国別の取引構造を調べることには、それぞれ異なる資料と探索方法が必要です。",
            role: [
              "貿易とデータに関するWebサイトを継続して制作する個人プロジェクトの企画",
              "Trade News Room、Policyline、Tradeweaveの個別制作と機能構成",
              "出典、基準期間、単位、事実と解釈の表示原則の整理",
              "Fact Desk、Report Plain、Trade Notebookの今後の構成の企画"
            ],
            caseStudy: {
              background: "貿易ニュースの学習、政策発表前後の比較、国別の貿易構造の探索には、異なる資料と画面が必要です。Trade Data Labは、これらの目的に合うWebサイトやツールを一つずつ制作する個人プロジェクトです。",
              methodology: "Trade Data Labのもとで、Trade News Roomはニュースと貿易概念の学習、Policylineは政策発表前後の貿易額の比較、Tradeweaveは貿易相手国と取引集中度の確認を目的とする個別のWebサイトとして制作しました。各サービスで出典、基準期間、単位を示し、確認できた事実と解釈を分けることを共通原則としました。",
              implications: "ニュースの説明をそのまま受け入れる前に、関連する原文や数値を確認し、さらに調べる問いを見つけることを助けます。政策発表前後の変化だけで政策の効果や迂回輸出を断定せず、データで確認できる範囲と残る不確実性をあわせて説明します。",
              limits: "企画書の全体構成は完成時の目標です。データ接続や自動更新の実装範囲は、サービスごとに区別する必要があります。政策発表と同時期の貿易の変化を、政策の因果効果や迂回輸出の証拠とは断定しません。"
            },
            components: [
              { id: "tradenews", name: "Trade News Room", status: "working", description: "学習室、グラフ、クイズを通じて貿易ニュースと関連する概念を確認するサービスです。" },
              { id: "policyline", name: "Policyline", status: "working", description: "政策発表前後の貿易額の変化を確認するサービスです。" },
              { id: "tradeweave", name: "Tradeweave", status: "working", description: "国ごとの貿易相手国と貿易の集中度を確認するサービスです。" },
              { id: "factdesk", name: "Fact Desk", status: "planned", description: "Trade News Room内で、確認された事実、解釈、不確実な点を分けて示す機能を企画しています。" },
              { id: "reportplain", name: "Report Plain", status: "planned", description: "報告書の主張、根拠、限界を原文のページ番号とともに整理するサービスを企画しています。" },
              { id: "tradenotebook", name: "Trade Notebook", status: "planned", description: "問い、データ、発見、限界で構成した分析ノートを公開する仕組みを企画しています。" }
            ],
            note: "Trade Data Labは、貿易とデータに関するWebサイトやツールを継続して制作する個人プロジェクトです。Fact DeskはTrade News Room内の企画段階の機能であり、Report PlainとTrade Notebookも企画中です。",
            legacyProject: {
              id: "tradenews",
              name: "Trade News Room | ニュースで学ぶ貿易教室",
              question: "世界の貿易ニュースの背景と概念をデータと結びつけて理解し、その理解を学習記録としてどう積み重ねていけるだろうか。",
              contribution: "実際の貿易ニュースを選んで学習テーマを決め、ニュースの要約と出典から統計、シミュレーター、クイズ、学習記録へと進む学習の流れを自分で企画しました。機能の実装と画面デザインにはAIを活用しました。現在は5つの学習室を公開しており、今後も増やしていきます。",
              summary: "世界の貿易ニュースを出発点に、概念とデータを一緒に理解する学習Webサイト",
              period: "2026",
              type: "個人プロジェクト",
              status: "学習室5つを公開、さらに5つ前後を追加予定",
              problem: "実際の貿易問題の背景と関連する概念を理解し、学んだ内容を記録したいと考えました。",
              role: [
                "学習テーマとニュースの選定",
                "ニュースの要約と出典から統計、シミュレーター、クイズ、学習記録へと進む学習の流れの企画",
                "AIを活用した機能の実装と画面デザイン",
                "学習室を追加しながら画面と学習の流れを改善"
              ],
              caseStudy: {
                process: "どの学習室も、実際の貿易ニュース1本を出発点にしています。ニュースの要約と出典を読み、統計グラフやシミュレーターで数値を自分で動かしてから、クイズ、用語の確認、学習メモへと進みます。実際の統計グラフと簡略化した学習用モデルを分けて配置し、グラフだけで変化の原因を断定したり、モデルの計算値を実際の見通しとして扱ったりしないよう案内しました。",
                ai: { delegated: "機能の実装と画面デザイン", own: "学習テーマとニュースの選定、学習室の構成と順序、画面に載せる内容は自分で企画し、できあがったものを確認しながら修正しました。" },
                outcome: "公開サイトに5つの学習室をつくり、それぞれにニュースと連動したシミュレーターを1つずつ置きました。貿易ニュースの閲覧、用語集、貿易マップ、ブラウザーに保存される学習記録、サイト内の学習内容を案内するチャットボットもあわせて実装しました。",
                limits: "学習記録はアカウント同期なしで現在のブラウザーに保存され、案内チャットボットは規則に従ってサイト内の内容を検索します。シミュレーターは簡略化した学習モデルであり、外部ニュースや統計の正確性、学習効果はまだ別途検証していません。今後、学習室を5つ前後追加する予定です。",
                lessons: "自分の勉強のためにつくりましたが、時間が足りず継続して管理できず、実際の勉強にはまだほとんど使えていません。つくることと使い続けることは別だと気づきました。学習室を充実させ、自分が実際に使うツールに育てたいと考えています。"
              },
              rooms: [
                { id: "urea", title: "尿素水不足と輸入先の多角化（2021）", tool: "調達比率シミュレーター" },
                { id: "graphite", title: "中国の黒鉛輸出許可制（2023）", tool: "供給減少と価格のシミュレーター" },
                { id: "gallium", title: "ガリウムとゲルマニウムの輸出許可制（2023）", tool: "在庫と許可待ち期間のシミュレーター" },
                { id: "tariff", title: "韓米貿易合意と15%関税（2025）", tool: "関税の帰着シミュレーター" },
                { id: "redsea", title: "紅海危機と喜望峰への迂回（2023）", tool: "航路と運賃のシミュレーター" }
              ],
              materials: [
                { id: "statistics", label: "統計と出典の説明画面（韓国語UI）" },
                { id: "simulation", label: "調達比率シミュレーター（韓国語UI）" }
              ],
              note: "継続して発展させている個人プロジェクトです。サイトは韓国語です。"
            },
            materials: [
              { id: "statistics", label: "Trade News Room: 統計と出典の説明画面（韓国語UI）" },
              { id: "simulation", label: "Trade News Room: 調達比率シミュレーター（韓国語UI）" }
            ]
          },
          {
            id: "axport",
            presentation: {
              guide: {
                "summary": "半導体輸出の検討で、規制の確認、事業性の参考スコア、資料不足を区別して読める構成にしました。",
                "role": "ホームページの企画とUI/UX、報告書の情報構造と表現の改善",
                "problem": "規制上の制約、事業性スコア、未確認情報が一緒に示されると、判断上の意味を区別しにくくなります。",
                "process": [
                  "ホームページで5つの検討領域と利用の流れを案内しました。",
                  "報告書で規制の確認と事業性の参考スコアを分けました。",
                  "要約から詳細な根拠へつなぎ、基準日と資料不足を示しました。"
                ],
                "ai": {
                  "tools": [
                    "ChatGPT (Codex)",
                    "Gemini"
                  ],
                  "assisted": "ランディングページのデザイン構成にAIの支援を受けました。",
                  "owned": "情報構造と表示基準を自分で定め、画面と文言を確認して修正しました。"
                },
                "result": "チームで要約、詳細な根拠、報告書出力をつなぐダッシュボードの試作版を完成させました。"
              },
              "title": "AXPORT | 半導体輸出の意思決定ダッシュボード",
              "type": "チームプロジェクト（試作版）",
              "summary": "半導体輸出の事前検討に必要な規制と市場の情報を集めたダッシュボードです。",
              "contribution": "ホームページを企画し、規制の確認と事業性の参考スコアを区別できるよう、報告書の構成と表現を整えました。",
              "details": [
                "レスポンシブなレイアウトと多言語画面を制作しました。",
                "報告書の要約から詳細な根拠へ進める情報構造を整理しました。"
              ],
              "problem": "規制上の制約、事業性の参考スコア、資料がない項目を一緒に示すと、判断の根拠を区別しにくくなります。",
              "action": "ホームページを企画し、規制の確認と事業性の評価を分けるよう報告書の構成と表現を整えました。",
              "change": "要約から詳細な根拠へ進める構成にし、データの基準日と資料不足を示して、結果の根拠を確認できるようにしました。"
            },
            name: "AXPORT | 半導体輸出の意思決定ダッシュボード",
            question: "半導体輸出において、規制による制約と市場の機会をどう区別して検討し、判断の根拠を伝えられるだろうか。",
            contribution: "メインサイトの企画とUI/UX、レスポンシブなレイアウト、多言語画面を担当しました。規制の確認と事業性の評価が区別されるよう、報告書の構成と表現を改善しました。要約から詳細な根拠へつながる情報構造を整え、データの基準日と未確認の情報を表示し、利用者が結果の意味と限界を理解できるようにしました。",
            summary: "半導体輸出を検討する際に必要な情報を集めた事前検討ダッシュボード",
            period: "2026.09",
            type: "貿易AXマスター課程 チームプロジェクト",
            status: "プロトタイプ",
            problem: "規制、市場性、価格、物流、安定性の情報が分散していました。一画面に集めても、規制上の制約、事業性のスコア、資料のない項目が同じ重みで読まれると、判断を誤らせるおそれがありました。",
            role: ["メインページの企画とUI/UXデザイン", "レスポンシブなレイアウトと多言語画面", "PDF報告書と分析報告書の構成および文言の改善", "サービス紹介と発表資料の作成"],
            caseStudy: {
              process: "ホームページではサービス紹介と利用方法を通じて、5つの検討領域と利用の流れを案内しました。報告書は要約から詳細な根拠へ進む構成にし、規制の検討を事業性の参考スコアと分けました。資料のない項目は資料不足と表示し、データの基準日もあわせて示しています。",
              ai: { delegated: "ランディングページのデザイン構成（ChatGPT Codex、Gemini）", own: "ホームページと報告書の情報構造、規制の検討と参考スコア、資料不足を分けて示す方法は自分で企画し、画面と文言を確認しながら修正しました。" },
              outcome: "5つの領域の要約と詳細な根拠、報告書出力をつないだWebダッシュボードをチームで完成させました。公開した架空企業の米国輸出報告書（2026-11-11作成、分析基準日2026-11-10）には条件付き検討という状態と根拠の反映率56%が表示され、資料のない価格と物流の項目は資料不足と示されます。56%はこの報告書例の値です。",
              limits: "一部の統計照会の失敗や企業記載値の有効期間などにより、未評価の項目が残っています。参考スコアと根拠の反映率は輸出成功確率や判断の正確性を示しません。統計の対象範囲、基準日、入力資料の有効性は引き続き確認が必要です。",
              lessons: "初めての業務、初めて触れる概念、初めてのダッシュボードで、全体の流れについていくだけで精一杯でした。その中で、自分にできるデザインに力を注ぎました。",
              background: "半導体輸出の事前検討では、規制、市場性、価格、物流、安定性に関する情報が必要です。資料を集約するだけでなく、規制上の制約、事業性の参考スコア、資料不足が異なる判断材料であることを示す必要がありました。",
              methodology: "研修のチームプロジェクトで5領域を扱うダッシュボードのプロトタイプを制作しました。私はホームページと報告書の情報構造を整え、要約から詳しい根拠へ進める構成にしました。規制の確認と参考スコアを分け、データの基準日と確認できない情報を表示しました。",
              implications: "輸出の事前検討を支える画面には、スコアだけでなく根拠の範囲と不足情報も示す必要があると学びました。成果物は事前検討用のプロトタイプであり、実際の輸出成果や規制判断の正確性を検証した事例ではありません。"
            },
            note: "チームプロジェクトです。分析エンジンとサービス全体はチームの成果物であり、私の貢献は上記の範囲です。"
          },
          {
            id: "hanjeongseon",
            presentation: {
              guide: {
                "summary": "ベトナム進出の準備に必要な現地情報と今日のタスクをHOMEにつなぎました。",
                "role": "HOMEの企画と実装、紹介サイトと広報動画の制作",
                "problem": "現地情報とマーケティングの準備日程が分散し、次に行うことを把握しにくい状態でした。",
                "process": [
                  "現地日程、ニュース、業務の進捗をHOMEに集めました。",
                  "目標日から準備日程を逆算する構成にしました。",
                  "閲覧用の記事と確認済みの告知を分けました。"
                ],
                "ai": {
                  "tools": [
                    "Claude Code",
                    "Codex",
                    "Google Flow",
                    "Higgsfield"
                  ],
                  "assisted": "HOMEの実装と、別途制作した紹介サイトと広報動画にAIの支援を受けました。",
                  "owned": "HOMEの情報、日程の組み方、ニュースの区分、サイトと動画の構成を自分で決め、結果を直接確認して修正しました。"
                },
                "result": "ベトナム進出を想定したチームの試作版に、日程と準備状況を確認するHOMEを実装しました。"
              },
              "title": "Hanjungsun | ベトナム進出マーケティングダッシュボード",
              "type": "チームプロジェクト（試作版）",
              "summary": "食品ブランドのベトナムのダナンへの進出を想定し、現地情報と準備日程を集めたダッシュボードです。",
              "contribution": "HOMEを企画し実装して、現地の予定、ニュース、今日のタスクを一画面につなげました。",
              "details": [
                "目標日から準備日程を逆算し、閲覧用の記事と確認済みのお知らせを分けました。",
                "別途、ベトナム紹介サイトと広報動画も企画し制作しました。"
              ],
              "problem": "ベトナムの現地情報と準備日程が分散し、担当者が次に行うことを判断しにくいという問題がありました。",
              "action": "HOMEを企画し実装して、目標日から準備日程を逆算し、現地の予定、ニュース、作業の進捗をつなげました。",
              "change": "今日のタスクとキャンペーンの進捗を一画面で確認し、閲覧用の記事と確認済みのお知らせを区別できる構成にしました。"
            },
            name: "Hanjungsun | ベトナム進出マーケティングダッシュボード",
            question: "韓国の食品ブランドがベトナム進出を準備する際、現地情報をどう実行可能なマーケティング計画につなげられるだろうか。",
            contribution: "マーケティング担当者が現地情報と準備状況をもとに次の行動を決められるよう、HOMEを企画し実装しました。目標日から準備日程を逆算し、現地の予定、ニュース、業務の進捗をつなげ、今日のタスクとキャンペーンの進捗状況を把握できるようにしました。ベトナム紹介サイトと広報動画も企画し制作しました。",
            summary: "ベトナムのダナン進出を想定し、現地情報とマーケティング準備スケジュールを集めた業務ツール。ベトナム紹介サイトと広報動画の制作を含みます",
            period: "2026.10",
            type: "貿易AXマスター課程 チームプロジェクト",
            status: "発表時のプロトタイプ、ニュース影響の可視化は改善計画",
            problem: "現地情報とキャンペーン準備のスケジュールが分散し、次にやるべきことを把握しにくい状況でした。",
            role: [
              "HOME画面の企画と実装",
              "目標日から逆算して準備スケジュールを組むカレンダーを構成",
              "現地の予定、ニュース、業務の進捗を一画面に整理",
              "ニュースを記事一覧と確認済みのお知らせに分ける基準を設計",
              "ベトナム紹介サイトと広報動画の企画と制作"
            ],
            caseStudy: {
              process: "チームのダッシュボードは、現地調査を日程、コンテンツ制作、クリエイターとの協業、成果管理につなげる構成です。私はそのうちHOMEに現地の予定、ニュース、準備状況をまとめ、次の行動を把握できるようにしました。探しやすい記事一覧と確認済みのお知らせを分け、情報を探す過程と判断の根拠を確認する過程を区別しました。",
              ai: {
                delegated: "HOMEの機能実装、紹介サイトのデザイン、広報動画の制作（Claude Code、Codex、Google Flow、Higgsfield）",
                own: "HOMEに載せる情報、日程の逆算方法、ニュースの区分基準、紹介サイトと広報動画の構成は自分で企画し、成果物を確認しながら修正しました。"
              },
              outcome: "チームのデモ動画のHOME部分では、カレンダー、イベント設定、ニュース画面を確認できます。別途制作したベトナム紹介サイトと広報動画も掲載しています。",
              limits: "ベトナム市場への進出を想定した教育用プロトタイプであり、発表資料の作業時間比較は実測ではなく推定値です。発表では、ニュースを集めるだけでなくHanjungsunの進出にとっての意味を示してほしいという意見を受けました。機会は緑、注意は黄、リスクは赤、根拠不足は灰色で保留とする影響分類と絞り込みを計画しており、まだ実装していません。",
              lessons: "2つ目のダッシュボードプロジェクトで、初めて機能を1つ自分で企画し、実装まで行いました。目立った成果にはつながりませんでしたが、企画したものを動く画面にした初めての経験でした。",
              background: "韓国の食品ブランドがベトナムのダナン市場に進出する状況を想定したチームプロジェクトです。現地情報とマーケティング準備の日程が散在すると、担当者が次の行動を決めにくいという課題を扱いました。",
              methodology: "私はHOMEで現地の日程、ニュース、業務の進捗をつなぎ、目標日から準備日程を逆算できるよう企画し実装しました。閲覧用の記事と確認済みの告知を分け、別途ベトナム紹介サイトと広報動画も制作しました。",
              implications: "情報を一か所に集めた上で、準備日程と次の行動につなげる構成が重要だと分かりました。ニュースの機会とリスクを可視化する機能は改善計画の段階であり、実際の市場進出やマーケティング効果を検証した成果物ではありません。"
            },
            materials: [
              { id: "brandSite", label: "ベトナム紹介サイト（教育用プロトタイプ）" },
              { id: "homeDemo", label: "HOMEデモ（チーム動画の抜粋、韓国語）" },
              { id: "promo", label: "ベトナム広報動画" }
            ],
            note: "チームプロジェクトです。ダッシュボード全体はチームの成果物であり、私の貢献はHOME、ベトナム紹介サイト、広報動画を中心とする上記の範囲です。"
          }
        ],
        extraTitle: "その他のプロジェクトと活動",
        extraOpen: "開く",
        extraClose: "閉じる",
        extra: [
          { id: "kita-study", linkKey: "kitaStudy", period: "2026.08 – 2026.12", dashboardLabel: "ダッシュボードを開く", name: "KITA 報告書スタディ", meta: "貿易AX研修と並行して取り組んだ報告書の学習活動", desc: "国際通商の問題を読み、発表資料を準備。CPTPP関連報告書の海外パートの発表準備と紹介文の作成" },
          {
            "id": "kotra-finance",
            "name": "公的機関の財務資料を読む | KOTRA",
            "meta": "大学の個人課題",
            "desc": "大学の授業でKOTRAの2020～2024年の公開財務資料を用い、資産と負債、収入と支出の変化を整理しました。公的機関の財源構造を確認した個人課題です。"
          },
          { name: "その他の活動", desc: "人文科学大学 学生会書記（2023）、チャペル合唱ボランティア（2025）、ダンスサークル Ars Amandi（2022）、カフェ ZITTEN 勤務（2022–2023）" }
        ]
      },
      now: {
        "label": "NOW",
        "title": "いま取り組んでいること",
        "asOf": "基準日 2026.11.16",
        "statement": "現在は貿易AX課程と個人のWebプロジェクトを並行しながら、\n英語と経済学および統計の基礎を補強しています。",
        "doingTitle": "進行中",
        "doing": [
          "貿易AXマスター課程の受講とチームプロジェクト経験の整理（2026.12.18修了予定）",
          "個人プロジェクトTrade Data Labのもとで貿易とデータに関するWebサイトを制作し拡充",
          "別の企業連携キャップストーンで、公共サービス提供機関のAI相談チャットボット開発に着手する準備",
          "TOEFL 100+を目標とする英語学習と、経済学および統計の基礎の補強",
          "国際機関と国際政策分野の進路探索、個人ポートフォリオと探究記録の蓄積"
        ],
        "interestsTitle": "関心分野",
        "interests": [
          "中国と東アジア",
          "国際関係と国際政治経済",
          "国際通商と貿易政策",
          "サプライチェーン、輸出管理と制裁",
          "米中関係が貿易と産業に与える影響",
          "資料とデータに基づいて国際問題を説明する方法"
        ],
        "goals": [
          {
            "period": "2027",
            "title": "通商と政策分野の実務",
            "items": [
              "通商分野の研究補助、または企業の政府渉外と通商戦略インターンへの応募準備"
            ]
          },
          {
            "period": "2028",
            "title": "米国大学院への進学",
            "items": [
              "秋学期の国際関係および公共政策分野の修士課程入学を目標に準備"
            ]
          }
        ]
      },
      notes: {
        label: "NOTES",
        title: "探究ノート",
        // 실제 글만 추가합니다. 비어 있으면 이 언어의 섹션과 메뉴가 숨겨집니다.
        items: []
      },
      contact: {
        label: "CONTACT",
        title: "連絡先",
        text: "お問い合わせや協業のご提案はメールでお寄せください。",
        form: {
          nameLabel: "お名前",
          emailLabel: "返信先メールアドレス",
          messageLabel: "内容",
          submitLabel: "メール作成画面を開く",
          hint: "入力内容をメールアプリに移します。送信はメールアプリで完了してください。",
          subject: "ポートフォリオのお問い合わせ"
        },
        email: "メールを送る",
        github: "GitHub",
        linkedin: "LinkedIn"
      },
      footer: "© 2026 Juyeon Jung"
    }
  }
};
