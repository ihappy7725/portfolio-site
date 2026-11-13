/*
 * 사이트의 모든 문구와 링크를 이 파일에서 관리합니다.
 * - 문구 수정: 아래 ko / en / zh-Hans(간체) / zh-Hant(번체) / ja 에서 해당 문장을 고치세요.
 *   (모든 언어를 함께 고쳐야 언어 전환 시 내용이 맞습니다. 번체는 대만식 표현 기준입니다.)
 * - 링크 추가: SITE.links 에 주소를 넣으면 버튼이 나타나고, 비워두면 버튼이 숨겨집니다.
 * - 프로필 사진: assets 폴더에 사진을 넣고 SITE.profile.photo 에 경로를 적으세요. 예) "assets/profile.jpg"
 * - 새 프로젝트 추가: 각 언어의 projects.items 에 같은 id 로 항목을 하나씩 추가하세요.
 * - Trade News Room 학습실 추가: 각 언어의 tradenews 항목 rooms 에 { id, title, tool } 을 한 줄씩 넣으세요.
 *   id 는 공개 사이트 주소의 #learn-아이디 와 같아야 합니다. 개수는 자동으로 표시됩니다.
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
      tradenews: "https://trade-news-room.vercel.app/"
    },
    // 공개용 원본 보고서입니다. 보고서 본문은 한국어입니다.
    reports: {
      axport: "assets/projects/axport/axport-us-sample-report.html"
    },
    projectMaterials: {
      hanjeongseon: {
        brandSite: "https://hanjeongsun-vietnam.vercel.app/",
        homeDemo: "assets/projects/hanjungsun/home-demo.mp4",
        promo: "assets/projects/hanjungsun/promotion.mp4"
      },
      tradenews: {
        statistics: "assets/projects/tradenews/learning-statistics.png",
        simulation: "assets/projects/tradenews/supply-simulation.png"
      }
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
      meta: {
        title: "정주연 Juyeon Jung | Portfolio",
        description: "정주연(Juyeon Jung)의 포트폴리오."
      },
      nav: { about: "About", experience: "Experience", projects: "Projects", now: "Now", notes: "Notes", contact: "Contact" },
      hero: {
        eyebrow: "JUYEON JUNG",
        name: "정주연",
        headline: "국제 통상 이슈를 탐구하고, AI와 협업하여 도구로 만듭니다.",
        headlineBreakAfter: "국제 통상 이슈를 탐구하고,",
        intro: "중국과 동아시아를 공부하고, 해외 파트너와 협업해 왔습니다. 무역과 국제정책에 대한 관심을 바탕으로 자료를 읽고 정리하며, AI를 활용해 생각을 구체적인 도구로 만들고 있습니다.",
        politicalEconomyInterest: "국제정치경제",
        photo: "프로필 사진",
        ctaProjects: "프로젝트 보기",
        ctaContact: "연락하기"
      },
      strengths: {
        title: "강점",
        items: [
          { title: "글로벌 커뮤니케이션", desc: "중국어와 영어로 해외 파트너와 소통" },
          { title: "AI 활용", desc: "생성형 AI로 아이디어를 웹 도구로 구현" },
          { title: "끈기", desc: "낯선 언어 환경에서도 학습 방식을 조정하며 끝까지 적응" }
        ]
      },
      about: {
        label: "ABOUT",
        title: "중국과 동아시아에 대한 공부를 국제정치경제와 통상정책으로 이어갑니다",
        titleBreakAfter: "중국과 동아시아에 대한 공부를",
        body: [
          "한양대학교에서 중어중문학을 전공하고 중국경제통상학을 부전공했습니다. 국립대만대학교에서는 2년간 중국어로 전공수업을 이수하며 중국문학과 복수학위를 취득했습니다.",
          "이후 엑스포럼 글로벌전략사업팀 인턴으로 해외 미디어 파트너와 소통하고 국제행사 운영을 지원했습니다.",
          "현재는 한국무역협회 무역 AX마스터 과정에서 무역 실무, 데이터 활용과 생성형 AI를 배우며 웹 도구를 만드는 경험을 쌓고 있습니다.",
          "장기적으로 중국과 동아시아, 국제정치경제와 국제통상 및 무역정책을 깊이 공부하고, 자료와 데이터를 근거로 국제 이슈를 설명하는 역량을 키우고자 합니다. 미국 국제관계 및 공공정책 분야 석사 진학을 준비하며, 탐구 내용을 프로젝트와 기록으로 쌓아가고 있습니다."
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
            skills: ["해외 파트너 커뮤니케이션", "일정 조율", "진행 현황 관리", "근거를 확인하는 보고 방식"]
          }
        ]
      },
      projects: {
        label: "PROJECTS",
        title: "대표 프로젝트",
        intro: "무역과 국제 이슈에서 출발한 질문을 자료와 데이터로 풀어 보는 웹 도구로 정리해 온 기록입니다.",
        labels: {
          materials: "프로젝트 자료",
          process: "해결 과정",
          aiUse: "AI 활용",
          aiDelegated: "AI에게 맡긴 일",
          aiOwn: "직접 정하고 확인한 일",
          outcome: "결과",
          rooms: "공개된 학습실",
          limits: "한계와 다음 단계",
          report: "가상 기업 보고서 보기 (한국어 HTML)",
          question: "핵심 질문", contribution: "내가 맡은 핵심",
          period: "기간", type: "유형", status: "상태",
          problem: "해결하려던 문제", role: "내가 맡은 일",
          moreOpen: "자세히 보기", moreClose: "접기", link: "프로젝트 보기"
        },
        // 순서: 개인 연구와 가장 가까운 Trade News Room을 먼저 보여줍니다.
        items: [
          {
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
              ai: {
                delegated: "기능 구현과 화면 디자인",
                own: "학습 주제와 뉴스 선정, 학습실의 구성과 순서, 화면에 담을 내용은 직접 기획했고, 만들어진 결과물을 확인하며 고쳤습니다."
              },
              outcome: "공개 사이트에 학습실 5개를 만들었고, 학습실마다 뉴스와 연결된 시뮬레이터를 하나씩 두었습니다. 무역 뉴스 탐색, 용어사전, 무역 맵, 브라우저에 저장되는 학습 기록과 사이트 안의 학습 내용을 찾아 주는 안내 챗봇도 함께 구현했습니다.",
              limits: "학습 기록은 계정 연동 없이 해당 브라우저에 저장되고, 안내 챗봇은 사이트 안의 자료를 찾는 규칙 기반 기능입니다. 시뮬레이터는 단순화한 학습 모형이며, 외부 뉴스와 통계의 정확성이나 학습 효과는 아직 따로 검증하지 않았습니다. 앞으로 학습실을 5개 안팎으로 더 추가할 계획입니다."
            },
            // 학습실을 추가할 때: 공개 사이트 주소 #learn-아이디 의 아이디와 제목, 시뮬레이터 이름을 한 줄 넣습니다.
            rooms: [
              { id: "urea", title: "요소수 대란과 수입처 다변화 (2021)", tool: "조달 비중 시뮬레이터" },
              { id: "graphite", title: "중국의 흑연 수출 허가제 (2023)", tool: "공급 감소와 가격 시뮬레이터" },
              { id: "gallium", title: "갈륨과 게르마늄 수출 허가제 (2023)", tool: "재고와 허가 대기 기간 시뮬레이터" },
              { id: "tariff", title: "한미 무역합의와 15% 관세 (2025)", tool: "관세 부담 시뮬레이터" },
              { id: "redsea", title: "홍해 사태와 희망봉 우회 (2023)", tool: "항로와 운임 시뮬레이터" }
            ],
            materials: [
              {"id": "statistics", "label": "통계와 출처 안내 화면 (한국어)"},
              {"id": "simulation", "label": "조달 비중 시뮬레이터 화면 (한국어)"}
            ],
            note: "계속 발전시키고 있는 개인 프로젝트입니다."
          },
          {
            id: "axport",
            name: "AXPORT | 반도체 수출 의사결정 대시보드",
            question: "반도체 수출에서 규제에 따른 제약과 시장의 기회를 어떻게 구분해 검토하고, 판단의 근거를 전달할 수 있을까?",
            contribution: "메인 홈페이지의 기획과 UI/UX, 반응형 레이아웃과 다국어 화면을 담당했습니다. 규제 확인과 사업성 평가가 구분되도록 보고서 구성과 표현을 개선했습니다. 요약에서 상세 근거로 이어지는 정보 구조를 다듬고, 데이터 기준일과 확인되지 않은 정보를 표시해 사용자가 결과의 의미와 한계를 이해하도록 했습니다.",
            summary: "반도체 수출을 검토할 때 필요한 정보를 모은 사전검토 대시보드",
            period: "2026.09",
            type: "무역 AX마스터 교육 팀 프로젝트",
            status: "프로토타입 결과물",
            problem: "규제, 시장성, 가격, 물류, 안정성 정보가 흩어져 있었습니다. 한 화면에 모으더라도 규제상 제약, 사업성 점수와 자료가 없는 항목이 같은 무게로 읽히면 판단을 잘못 이끌 수 있었습니다.",
            role: [
              "메인 홈페이지 기획과 UI/UX 디자인",
              "반응형 레이아웃과 다국어 화면",
              "PDF 보고서와 분석 결과 보고서의 구성 및 문구 개선",
              "서비스 소개와 발표자료 작업"
            ],
            caseStudy: {
              process: "홈페이지에서는 서비스 소개와 이용 방법으로 다섯 검토 영역과 이용 흐름을 안내했습니다. 보고서는 요약에서 상세 근거로 이어지게 하고, 규제 검토를 사업성 참고점수와 분리했습니다. 자료가 없는 항목은 자료 부족으로 표시하고, 데이터 기준일을 함께 보여 주도록 구성했습니다.",
              ai: {
                delegated: "랜딩페이지 디자인 구성 (ChatGPT Codex, Gemini)",
                own: "홈페이지와 보고서의 정보 구조, 규제 검토와 참고점수, 자료 부족을 나누어 보여 주는 방식은 직접 기획했고, 화면과 문구를 확인하며 고쳤습니다."
              },
              outcome: "다섯 영역의 요약과 상세 근거, 보고서 내보내기를 연결한 웹 대시보드를 팀으로 완성했습니다. 공개한 가상 기업의 미국 수출 보고서(2026-11-11 작성, 분석 기준일 2026-11-10)에는 조건부 검토 상태와 근거 반영률 56%가 표시되고, 자료가 없는 가격과 물류 항목은 자료 부족으로 나타납니다. 56%는 이 보고서 예시의 값입니다.",
              limits: "일부 통계 조회 실패와 기업 기재값의 유효기간 때문에 미평가 항목이 남아 있습니다. 참고점수와 근거 반영률은 수출 성공확률이나 판단 정확도를 뜻하지 않습니다. 통계의 대상 범위와 기준일, 입력 자료의 유효성은 추가로 확인해야 합니다."
            },
            note: "팀 프로젝트입니다. 분석 엔진과 전체 서비스는 팀 결과물이며, 제 기여는 위에 적은 범위입니다."
          },
          {
            id: "hanjeongseon",
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
              limits: "베트남 진출을 가정한 교육용 프로토타입이며, 발표자료의 업무 시간 비교는 실측이 아닌 추정치입니다. 발표에서는 뉴스를 모으는 데서 나아가 한정선의 진출에 어떤 의미가 있는지 보여 달라는 피드백을 받았습니다. 그래서 기회는 초록, 주의는 노랑, 위험은 빨강, 근거가 부족하면 회색으로 보류하는 영향 분류와 필터를 계획하고 있으며, 아직 구현하지 않았습니다."
            },
            materials: [
              {"id": "brandSite", "label": "베트남 소개 홈페이지 (교육용 프로토타입)"},
              {"id": "homeDemo", "label": "HOME 시연 (팀 영상 발췌, 한국어)"},
              {"id": "promo", "label": "베트남 홍보영상"}
            ],
            note: "팀 프로젝트입니다. 전체 대시보드는 팀 결과물이며, 제 기여는 HOME, 베트남 소개 홈페이지와 홍보영상을 중심으로 위에 적은 범위입니다."
          }
        ],
        extraTitle: "추가 프로젝트와 활동",
        extraOpen: "펼쳐 보기",
        extraClose: "접기",
        extra: [
          { name: "KOTRA 공개 재무자료 분석", meta: "2025.10 – 2025.11 | 대학 수업 프로젝트", desc: "ALIO의 2020–2024년 공개 재무자료를 정리하고 재무구조와 주요 지표 변화를 비교해 보고서와 발표자료로 구성" },
          { name: "KITA 보고서 스터디", meta: "학습 활동", desc: "국제통상 이슈를 읽고 발제 자료 준비. CPTPP 관련 보고서의 국외 파트 발제 준비와 소개글 작성" },
          { name: "그 외 활동", desc: "인문과학대학 학생회 서기 (2023), 목요채플 합창 봉사 (2025), 댄스동아리 Ars Amandi (2022), 카페 ZITTEN 근무 (2022–2023)" }
        ]
      },
      now: {
        label: "NOW",
        title: "지금 하고 있는 일",
        asOf: "기준일 2026.11.10",
        statement: "지금은 무역 실무와 AI 활용을 배우며, 국제 이슈에 대한 관심을 프로젝트와 기록으로 발전시키고 있습니다. 영어와 분석의 기초를 보완하고, 중국과 동아시아의 통상 및 정책 문제를 더 깊이 공부하기 위해 대학원 진학을 준비하고 있습니다.",
        doingTitle: "현재 진행 중",
        doing: [
          "무역 AX마스터 과정 수강과 팀 프로젝트 경험 정리",
          "영어와 TOEFL 학습",
          "미국 국제관계 및 공공정책 분야 석사 진학 준비",
          "국제기구와 국제정책 분야 인턴십 지원 및 진로 탐색",
          "개인 포트폴리오와 국제 이슈에 관한 탐구 기록 축적"
        ],
        interestsTitle: "관심 분야",
        interests: [
          "중국과 동아시아",
          "국제관계와 국제정치경제",
          "국제통상과 무역정책",
          "공급망, 수출통제와 제재",
          "미중 관계가 무역과 산업에 미치는 영향",
          "자료와 데이터를 바탕으로 국제 이슈를 설명하는 방법"
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
        title: "연락하기",
        text: "협업 제안이나 문의는 이메일로 편하게 연락해 주세요.",
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
        title: "Juyeon Jung | Portfolio",
        description: "Juyeon Jung's portfolio."
      },
      nav: { about: "About", experience: "Experience", projects: "Projects", now: "Now", notes: "Notes", contact: "Contact" },
      hero: {
        eyebrow: "JUYEON JUNG",
        name: "Juyeon Jung",
        headline: "I explore international trade issues and collaborate with AI to turn that exploration into tools.",
        headlineBreakAfter: "I explore international trade issues",
        intro: "I have studied China and East Asia and worked with overseas partners. Driven by an interest in trade and international policy, I read and organize information, and use AI to turn ideas into practical tools.",
        politicalEconomyInterest: "International political economy",
        photo: "Profile photo",
        ctaProjects: "View projects",
        ctaContact: "Contact me"
      },
      strengths: {
        title: "Strengths",
        items: [
          { title: "Global communication", desc: "Working with overseas partners in Chinese and English" },
          { title: "Using AI", desc: "Turning ideas into web tools with generative AI" },
          { title: "Persistence", desc: "Adapting my learning methods to see things through in an unfamiliar language environment" }
        ]
      },
      about: {
        label: "ABOUT",
        title: "Connecting my studies of China and East Asia with international political economy and trade policy",
        titleBreakAfter: "Connecting my studies of China and East Asia",
        body: [
          "I majored in Chinese Language and Literature at Hanyang University, with a minor in Chinese Economy and Trade. At National Taiwan University, I took two years of major courses taught in Chinese and earned a dual degree in Chinese Literature.",
          "As an intern on the Global Strategy Business Team at EXPORUM, I communicated with overseas media partners and supported the operation of international events.",
          "I am currently in the Trade AX Master program at the Korea International Trade Association (KITA), learning trade practice, data use, and generative AI while building web tools.",
          "In the long term, I want to deepen my understanding of China and East Asia, international political economy, international trade and trade policy, and strengthen my ability to explain international issues using source materials and data. I am preparing for master's programs in international relations and public policy in the U.S. and documenting my exploration through projects and notes."
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
            skills: ["Overseas partner communication", "Schedule coordination", "Progress tracking", "Evidence-based reporting"]
          }
        ]
      },
      projects: {
        label: "PROJECTS",
        title: "Selected projects",
        intro: "A record of turning questions from trade and international issues into web tools that work through sources and data.",
        labels: {
          materials: "Project materials",
          process: "Approach",
          aiUse: "AI use",
          aiDelegated: "What I gave to AI",
          aiOwn: "What I decided and checked myself",
          outcome: "Outcome",
          rooms: "Published lessons",
          limits: "Limits and next steps",
          report: "View sample company report (HTML in Korean)",
          question: "Key question", contribution: "My key contribution",
          period: "Period", type: "Type", status: "Status",
          problem: "Problem", role: "My role",
          moreOpen: "Details", moreClose: "Close", link: "View project"
        },
        items: [
          {
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
              limits: "Learning records are stored in the current browser without account syncing, and the guide chatbot uses rules to find content within the site. The simulators are simplified learning models; the accuracy of external news and statistics and the learning effect have not been separately verified. I plan to add about five more lessons."
            },
            rooms: [
              { id: "urea", title: "Urea shortage and import diversification (2021)", tool: "Sourcing share simulator" },
              { id: "graphite", title: "China's graphite export licensing (2023)", tool: "Supply cut and price simulator" },
              { id: "gallium", title: "Gallium and germanium export licensing (2023)", tool: "Inventory and licensing wait simulator" },
              { id: "tariff", title: "The Korea–US trade deal and the 15% tariff (2025)", tool: "Tariff incidence simulator" },
              { id: "redsea", title: "Red Sea attacks and the Cape of Good Hope detour (2023)", tool: "Route and freight rate simulator" }
            ],
            materials: [
              {"id": "statistics", "label": "Statistics and source guidance (Korean UI)"},
              {"id": "simulation", "label": "Sourcing simulator (Korean UI)"}
            ],
            note: "A personal project I continue to develop. The site is in Korean."
          },
          {
            id: "axport",
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
              limits: "Failed statistical lookups and the validity period of company inputs leave some items unevaluated. The reference score and evidence coverage do not represent export success probability or decision accuracy. Statistical scope, reference dates and input validity still need checking."
            },
            note: "Team project. The analysis engine and the overall service are team work; my contribution is the scope listed above."
          },
          {
            id: "hanjeongseon",
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
              limits: "This is a training prototype for an assumed Vietnam market entry, and the work-time comparisons in the presentation are estimates, not measurements. Presentation feedback asked me to show what the news means for Hanjungsun's entry, beyond collecting it. I am planning an impact classification and filter with opportunity in green, caution in yellow, risk in red and undetermined items in gray; it is not implemented yet."
            },
            materials: [
              {"id": "brandSite", "label": "Vietnam introduction website (training prototype)"},
              {"id": "homeDemo", "label": "HOME demo (team video excerpt, Korean)"},
              {"id": "promo", "label": "Vietnam promotional video"}
            ],
            note: "Team project. The full dashboard is a team output; my contribution is the scope listed above, centered on HOME, the Vietnam introduction website and the promotional video."
          }
        ],
        extraTitle: "Other projects and activities",
        extraOpen: "Show",
        extraClose: "Close",
        extra: [
          { name: "KOTRA public financial data analysis", meta: "Oct 2025 – Nov 2025 | University course project", desc: "Organized ALIO's 2020–2024 public financial data, compared changes in financial structure and key indicators, and built a report and presentation" },
          { name: "KITA report study group", meta: "Study activity", desc: "Read about international trade issues and prepared discussion materials. Prepared to present the overseas section of a CPTPP-related report and wrote an introductory text" },
          { name: "Other activities", desc: "Student council secretary, College of Humanities (2023); chapel choir volunteer (2025); Ars Amandi dance club (2022); Cafe ZITTEN (2022–2023)" }
        ]
      },
      now: {
        label: "NOW",
        title: "What I'm doing now",
        asOf: "As of Nov 10, 2026",
        statement: "I am learning trade practice and how to use AI, and developing my interest in international issues through projects and notes. I am strengthening my English and analytical foundations while preparing for graduate school to study trade and policy issues in China and East Asia in greater depth.",
        doingTitle: "In progress",
        doing: [
          "Taking the Trade AX Master program and documenting team project experience",
          "Studying English and preparing for the TOEFL",
          "Preparing for master's programs in international relations and public policy in the U.S.",
          "Applying for internships and exploring careers in international organizations and international policy",
          "Building my personal portfolio and documenting my exploration of international issues"
        ],
        interestsTitle: "Interests",
        interests: [
          "China and East Asia",
          "International relations and international political economy",
          "International trade and trade policy",
          "Supply chains, export controls and sanctions",
          "How U.S.-China relations affect trade and industry",
          "Explaining international issues using source materials and data"
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
        title: "Get in touch",
        text: "For collaboration or questions, feel free to reach out by email.",
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
      meta: {
        title: "郑主缘 Juyeon Jung | Portfolio",
        description: "郑主缘（Juyeon Jung）的个人作品集。"
      },
      nav: { about: "关于我", experience: "经历", projects: "项目", now: "近况", notes: "探索记录", contact: "联系" },
      hero: {
        eyebrow: "JUYEON JUNG",
        name: "郑主缘",
        headline: "我探索国际贸易议题，并与 AI 协作，将探索转化为工具。",
        headlineBreakAfter: "我探索国际贸易议题，",
        intro: "我学习中国与东亚，并有与海外合作伙伴协作的经验。基于对贸易与国际政策的兴趣，我阅读并整理资料，运用AI把想法变成具体的工具。",
        politicalEconomyInterest: "国际政治经济",
        photo: "个人照片",
        ctaProjects: "查看项目",
        ctaContact: "联系我"
      },
      strengths: {
        title: "优势",
        items: [
          { title: "全球沟通", desc: "用中文和英文与海外合作伙伴沟通" },
          { title: "AI运用", desc: "借助生成式AI把想法实现为网页工具" },
          { title: "坚持", desc: "在陌生的语言环境中调整学习方法，坚持到底" }
        ]
      },
      about: {
        label: "ABOUT",
        title: "以中国与东亚的学习为基础，探索国际政治经济与贸易政策",
        titleBreakAfter: "以中国与东亚的学习为基础，",
        body: [
          "我在汉阳大学主修中语中文学，辅修中国经济通商学。在国立台湾大学，我用两年时间以中文修读专业课程，并取得中国文学系双学位。",
          "之后，我在EXPORUM全球战略事业组担任实习生，负责与海外媒体合作伙伴沟通，并协助国际活动的运营。",
          "目前我正在参加韩国贸易协会的贸易AX大师课程，学习贸易实务、数据运用和生成式AI，积累制作网页工具的经验。",
          "长期来看，我希望深入学习中国与东亚、国际政治经济、国际贸易与贸易政策，提升依据资料和数据解释国际议题的能力。我正在准备申请美国国际关系与公共政策领域的硕士课程，并将探索内容逐步整理为项目与记录。"
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
            skills: ["海外合作伙伴沟通", "日程协调", "进度管理", "基于证据的汇报方式"]
          }
        ]
      },
      projects: {
        label: "PROJECTS",
        title: "代表项目",
        intro: "从贸易与国际议题出发，借助资料与数据把问题整理成网页工具的记录。",
        labels: {
          materials: "项目资料",
          process: "解决过程",
          aiUse: "AI应用",
          aiDelegated: "交给AI的工作",
          aiOwn: "我亲自决定并核查的部分",
          outcome: "成果",
          rooms: "已公开的学习室",
          limits: "局限与下一步",
          report: "查看虚拟企业报告（韩文HTML）",
          question: "核心问题", contribution: "我的核心贡献",
          period: "时间", type: "类型", status: "状态",
          problem: "想解决的问题", role: "我的工作",
          moreOpen: "查看详情", moreClose: "收起", link: "查看项目"
        },
        items: [
          {
            id: "tradenews",
            name: "Trade News Room | 新闻里的贸易学习室",
            question: "如何将全球贸易新闻的背景与概念同数据联系起来加以理解，并将这些理解逐步积累为学习记录？",
            contribution: "我挑选真实的贸易新闻作为学习主题，亲自策划了从新闻摘要与来源出发，依次连接统计、模拟器、测验和学习记录的学习流程。功能实现与页面设计借助了AI。目前已公开5个学习室，并在持续增加。",
            summary: "以全球贸易新闻为起点，同时理解概念与数据的学习网站",
            period: "2026",
            type: "个人项目",
            status: "已公开5个学习室，计划再增加5个左右",
            problem: "我希望理解真实贸易议题背后的背景与相关概念，并记录学习内容。",
            role: [
              "选定学习主题与新闻",
              "策划从新闻摘要与来源到统计、模拟器、测验和学习记录的学习流程",
              "借助AI完成功能实现与页面设计",
              "在增加学习室的过程中改进页面与学习流程"
            ],
            caseStudy: {
              process: "每个学习室都以一则真实的贸易新闻为起点。学习者先阅读新闻摘要与来源，在统计图表或模拟器中亲自调整数字，再进行测验、术语学习与学习笔记。我将真实的统计图表与简化的学习模型分开呈现，并提示不能仅凭图表断定变化原因，也不能把模型计算值当作实际预测。",
              ai: {
                delegated: "功能实现与页面设计",
                own: "学习主题与新闻的选定、学习室的结构与顺序、页面要呈现的内容均由我亲自策划，并在检查成果后加以修改。"
              },
              outcome: "公开网站上已有5个学习室，每个学习室都配有一个与新闻相关的模拟器。网站还实现了贸易新闻浏览、术语词典、贸易地图、保存在浏览器中的学习记录，以及查找站内学习内容的引导聊天机器人。",
              limits: "学习记录保存在当前浏览器中，不支持账户同步；引导聊天机器人通过规则查找站内内容。模拟器是简化的学习模型，外部新闻与统计的准确性及学习效果尚未另行验证。我计划再增加5个左右的学习室。"
            },
            rooms: [
              { id: "urea", title: "尿素短缺与进口来源多元化（2021）", tool: "采购比例模拟器" },
              { id: "graphite", title: "中国石墨出口许可制（2023）", tool: "供应减少与价格模拟器" },
              { id: "gallium", title: "镓和锗出口许可制（2023）", tool: "库存与许可等待期模拟器" },
              { id: "tariff", title: "韩美贸易协议与15%关税（2025）", tool: "关税归宿模拟器" },
              { id: "redsea", title: "红海危机与绕行好望角（2023）", tool: "航线与运费模拟器" }
            ],
            materials: [
              {"id": "statistics", "label": "统计与来源说明页面（韩语界面）"},
              {"id": "simulation", "label": "采购比例模拟器（韩语界面）"}
            ],
            note: "这是我持续完善的个人项目，网站内容为韩语。"
          },
          {
            id: "axport",
            name: "AXPORT | 半导体出口决策仪表板",
            question: "在半导体出口中，如何区分监管限制与市场机会进行评估，并传达判断所依据的信息？",
            contribution: "我负责主页策划、UI/UX、响应式布局与多语言页面。我改进了报告结构与措辞，以区分合规核查与商业可行性评估。我优化了从摘要连接到详细依据的信息结构，并标明数据基准日期与未经核实的信息，帮助用户理解结果的含义与局限。",
            summary: "汇集半导体出口审查所需信息的预审仪表板",
            period: "2026.09",
            type: "贸易AX大师课程 团队项目",
            status: "原型成果",
            problem: "法规、市场性、价格、物流、稳定性等信息分散各处。即使汇集到一个页面，如果监管限制、商业评分与缺少资料的项目被以同等分量解读，也可能误导判断。",
            role: [
              "主页策划与UI/UX设计",
              "响应式布局与多语言页面",
              "PDF报告与分析报告的结构和措辞改进",
              "服务介绍与演示资料制作"
            ],
            caseStudy: {
              process: "主页通过服务介绍和使用说明展示五个审查领域及使用流程。报告从摘要连接到详细依据，并将监管审查与商业可行性参考分数分开。缺少资料的项目标为资料不足，同时显示数据基准日期。",
              ai: {
                delegated: "落地页设计布局（ChatGPT Codex、Gemini）",
                own: "主页与报告的信息结构，以及将监管审查、参考分数与资料不足分开呈现的方式，均由我亲自策划，并在核查页面与措辞后加以修改。"
              },
              outcome: "团队完成了将五个领域的摘要、详细依据与报告导出连接起来的网页仪表板。公开的虚拟企业对美出口报告（2026-11-11生成，分析基准日2026-11-10）显示有条件审查状态与56%的依据覆盖比例，缺少资料的价格和物流项目标为资料不足。56%是这份示例报告中的数值。",
              limits: "部分统计查询失败及企业填报值的有效期等因素，使部分项目尚未评估。参考分数和依据覆盖比例不代表出口成功概率或判断准确性。仍需核查统计范围、基准日期与输入资料的有效性。"
            },
            note: "团队项目。分析引擎与整体服务为团队成果，我的贡献为上述范围。"
          },
          {
            id: "hanjeongseon",
            name: "Hanjungsun | 越南市场进入营销仪表板",
            question: "韩国食品品牌准备进入越南市场时，如何将当地信息转化为可执行的营销计划？",
            contribution: "我负责HOME的策划与实现，让营销人员能够依据当地信息和准备情况确定下一步行动。我从目标日期倒推准备日程，并将当地活动、新闻与工作进度联系起来，帮助用户掌握当天任务与营销活动的进展。我还策划并制作了越南介绍网站与宣传视频。",
            summary: "以进入越南岘港为假设，汇集当地信息与营销准备日程的工作工具，并配套制作越南介绍网站与宣传视频",
            period: "2026.10",
            type: "贸易AX大师课程 团队项目",
            status: "展示版本原型，新闻影响可视化为后续计划",
            problem: "当地信息与营销活动准备日程分散，难以把握下一步该做什么。",
            role: [
              "HOME页面的策划与实现",
              "以目标日期为基准倒推准备日程的日历",
              "在一个页面整合当地日程、新闻与工作进度",
              "设计将新闻分为文章列表与已确认公告的标准",
              "策划并制作越南介绍网站与宣传视频"
            ],
            caseStudy: {
              process: "团队仪表板将当地调研与日程、内容制作、创作者合作和效果管理相连接。我在HOME中汇集当地日程、新闻与准备状态，帮助用户确定下一步行动。我将便于探索的新闻列表与已确认的公告分开，区分信息发现与判断依据的核查。",
              ai: {
                delegated: "HOME功能实现、介绍网站设计与宣传视频制作（Claude Code、Codex、Google Flow、Higgsfield）",
                own: "HOME要呈现的信息、日程倒推方式、新闻分类标准，以及介绍网站与宣传视频的结构，均由我亲自策划，并在检查成果后加以修改。"
              },
              outcome: "团队演示视频的HOME部分展示了日历、活动设置与新闻界面，同时提供单独制作的越南介绍网站和宣传视频。",
              limits: "这是以越南市场进入情境为假设的培训原型，演示资料中的工作时间比较为估算值而非实测。展示反馈建议在汇集新闻之外，呈现新闻对Hanjungsun进入越南市场的意义。我正在规划以绿色表示机会、黄色表示注意、红色表示风险、依据不足时以灰色暂缓判断的影响分类与筛选，目前尚未实现。"
            },
            materials: [
              {"id": "brandSite", "label": "越南介绍网站（培训原型）"},
              {"id": "homeDemo", "label": "HOME演示（团队视频节选，韩语）"},
              {"id": "promo", "label": "越南宣传视频"}
            ],
            note: "团队项目。整体仪表板为团队成果，我的贡献以上述范围为限，主要包括HOME、越南介绍网站与宣传视频。"
          }
        ],
        extraTitle: "其他项目与活动",
        extraOpen: "展开",
        extraClose: "收起",
        extra: [
          { name: "KOTRA公开财务资料分析", meta: "2025.10 – 2025.11 | 大学课程项目", desc: "整理ALIO 2020–2024年公开财务资料，比较财务结构与主要指标变化，并制作报告与演示资料" },
          { name: "KITA报告研读小组", meta: "学习活动", desc: "阅读国际通商议题并准备讨论材料。准备就CPTPP相关报告的国外部分作专题分享，并撰写介绍文字" },
          { name: "其他活动", desc: "人文科学学院学生会书记（2023）、礼拜合唱志愿服务（2025）、舞蹈社团 Ars Amandi（2022）、咖啡店 ZITTEN 工作（2022–2023）" }
        ]
      },
      now: {
        label: "NOW",
        title: "现在在做的事",
        asOf: "基准日 2026.11.10",
        statement: "目前我在学习贸易实务与AI应用，将对国际议题的兴趣转化为项目和记录。我正在补强英语与分析基础，并准备申请研究生课程，以更深入地学习中国与东亚的贸易和政策问题。",
        doingTitle: "进行中",
        doing: [
          "参加贸易AX大师课程，整理团队项目经验",
          "学习英语与准备TOEFL",
          "准备申请美国国际关系与公共政策领域的硕士课程",
          "申请国际组织与国际政策领域的实习，探索职业方向",
          "积累个人作品集与国际议题的探索记录"
        ],
        interestsTitle: "关注领域",
        interests: [
          "中国与东亚",
          "国际关系与国际政治经济",
          "国际通商与贸易政策",
          "供应链、出口管制与制裁",
          "中美关系对贸易与产业的影响",
          "依据资料和数据解释国际议题的方法"
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
        title: "联系我",
        text: "如有合作提议或问题，欢迎通过邮件联系我。",
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
      meta: {
        title: "鄭主緣 Juyeon Jung | Portfolio",
        description: "鄭主緣（Juyeon Jung）的個人作品集。"
      },
      nav: { about: "關於我", experience: "經歷", projects: "專案", now: "近況", notes: "探究紀錄", contact: "聯絡" },
      hero: {
        eyebrow: "JUYEON JUNG",
        name: "鄭主緣",
        headline: "我探索國際貿易議題，並與 AI 協作，將探索轉化為工具。",
        headlineBreakAfter: "我探索國際貿易議題，",
        intro: "我學習中國與東亞，並有與海外合作夥伴協作的經驗。基於對貿易與國際政策的興趣，我閱讀並整理資料，運用AI把想法變成具體的工具。",
        politicalEconomyInterest: "國際政治經濟",
        photo: "個人照片",
        ctaProjects: "檢視專案",
        ctaContact: "聯絡我"
      },
      strengths: {
        title: "優勢",
        items: [
          { title: "全球溝通", desc: "用中文和英文與海外合作夥伴溝通" },
          { title: "AI運用", desc: "藉助生成式AI把想法實現為網頁工具" },
          { title: "堅持", desc: "在陌生的語言環境中調整學習方法，堅持到底" }
        ]
      },
      about: {
        label: "ABOUT",
        title: "以中國與東亞的學習為基礎，探索國際政治經濟與貿易政策",
        titleBreakAfter: "以中國與東亞的學習為基礎，",
        body: [
          "我在漢陽大學主修中語中文學，輔修中國經濟通商學。在國立臺灣大學，我用兩年時間以中文修讀專業課程，並取得中國文學系雙學位。",
          "之後，我在EXPORUM全球戰略事業組擔任實習生，負責與海外媒體合作夥伴溝通，並協助國際活動的營運。",
          "目前我正在參加韓國貿易協會的貿易AX大師課程，學習貿易實務、資料運用和生成式AI，累積製作網頁工具的經驗。",
          "長期而言，我希望深入學習中國與東亞、國際政治經濟、國際貿易與貿易政策，並提升運用參考資料與數據說明國際議題的能力。我正在準備申請美國國際關係與公共政策領域的碩士班，並持續透過專案與紀錄整理探究的內容。"
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
            skills: ["海外合作夥伴溝通", "日程協調", "進度管理", "基於證據的彙報方式"]
          }
        ]
      },
      projects: {
        label: "PROJECTS",
        title: "代表專案",
        intro: "從貿易與國際議題出發，藉由資料與數據把問題整理成網頁工具的紀錄。",
        labels: {
          materials: "專案資料",
          process: "解決過程",
          aiUse: "AI應用",
          aiDelegated: "交給AI的工作",
          aiOwn: "我親自決定並確認的部分",
          outcome: "成果",
          rooms: "已公開的學習室",
          limits: "限制與下一步",
          report: "查看虛擬企業報告（韓文HTML）",
          question: "核心問題", contribution: "我的核心貢獻",
          period: "時間", type: "類型", status: "狀態",
          problem: "想解決的問題", role: "我的工作",
          moreOpen: "檢視詳情", moreClose: "收起", link: "檢視專案"
        },
        items: [
          {
            id: "tradenews",
            name: "Trade News Room | 新聞裡的貿易學習室",
            question: "如何將全球貿易新聞的背景與概念和資料連結起來理解，並將這些理解逐步累積為學習紀錄？",
            contribution: "我挑選真實的貿易新聞作為學習主題，親自規劃從新聞摘要與來源出發，依序連結統計、模擬器、測驗與學習紀錄的學習流程。功能實作與介面設計借助了AI。目前已公開5個學習室，並持續增加中。",
            summary: "以全球貿易新聞為起點，同時理解概念與資料的學習網站",
            period: "2026",
            type: "個人專案",
            status: "已公開5個學習室，規劃再增加5個左右",
            problem: "我希望理解真實貿易議題背後的背景與相關概念，並記錄學習內容。",
            role: [
              "選定學習主題與新聞",
              "規劃從新聞摘要與來源到統計、模擬器、測驗與學習紀錄的學習流程",
              "借助AI完成功能實作與介面設計",
              "在增加學習室的過程中改善介面與學習流程"
            ],
            caseStudy: {
              process: "每個學習室都以一則真實的貿易新聞為起點。學習者先閱讀新聞摘要與來源，在統計圖表或模擬器中親自調整數字，再進行測驗、術語學習與學習筆記。我將真實的統計圖表與簡化的學習模型分開呈現，並提醒不能只憑圖表斷定變化原因，也不能把模型計算值當作實際預測。",
              ai: {
                delegated: "功能實作與介面設計",
                own: "學習主題與新聞的選定、學習室的架構與順序、介面要呈現的內容，都由我親自規劃，並在確認成果後加以修改。"
              },
              outcome: "公開網站上已有5個學習室，每個學習室都搭配一個與新聞相關的模擬器。網站也實作了貿易新聞瀏覽、術語詞典、貿易地圖、儲存在瀏覽器中的學習紀錄，以及查找站內學習內容的導覽聊天機器人。",
              limits: "學習紀錄儲存在目前使用的瀏覽器中，沒有帳號同步功能；導覽聊天機器人依照規則查找站內內容。模擬器是簡化的學習模型，外部新聞與統計的準確性及學習成效尚未另行驗證。我規劃再增加5個左右的學習室。"
            },
            rooms: [
              { id: "urea", title: "尿素短缺與進口來源多元化（2021）", tool: "採購比例模擬器" },
              { id: "graphite", title: "中國石墨出口許可制（2023）", tool: "供應減少與價格模擬器" },
              { id: "gallium", title: "鎵與鍺出口許可制（2023）", tool: "庫存與許可等待期模擬器" },
              { id: "tariff", title: "韓美貿易協議與15%關稅（2025）", tool: "關稅歸宿模擬器" },
              { id: "redsea", title: "紅海危機與繞行好望角（2023）", tool: "航線與運費模擬器" }
            ],
            materials: [
              {"id": "statistics", "label": "統計與來源說明頁面（韓語介面）"},
              {"id": "simulation", "label": "採購比例模擬器（韓語介面）"}
            ],
            note: "這是我持續完善的個人專案，網站內容為韓語。"
          },
          {
            id: "axport",
            name: "AXPORT | 半導體出口決策儀表板",
            question: "在半導體出口中，如何區分法規限制與市場機會進行評估，並傳達判斷所依據的資訊？",
            contribution: "我負責首頁規劃、UI/UX、響應式版面與多語言介面。我改善了報告架構與用語，以區分法規確認與商業可行性評估。我調整了從摘要連結至詳細依據的資訊架構，並標示資料基準日期與尚未確認的資訊，協助使用者理解結果的意義與限制。",
            summary: "彙集半導體出口審查所需資訊的預審儀表板",
            period: "2026.09",
            type: "貿易AX大師課程 團隊專案",
            status: "原型成果",
            problem: "法規、市場性、價格、物流、穩定性等資訊分散各處。即使彙整到同一個頁面，如果法規限制、商業評分與缺乏資料的項目被以同樣的分量解讀，也可能誤導判斷。",
            role: [
              "首頁規劃與UI/UX設計",
              "響應式版面與多語言介面",
              "PDF報告與分析報告的架構及用語改善",
              "服務介紹與簡報資料製作"
            ],
            caseStudy: {
              process: "首頁透過服務介紹與使用說明，呈現五個檢視領域及使用流程。報告從摘要連結至詳細依據，並將法規檢視與商業可行性參考分數分開。缺乏資料的項目標示為資料不足，同時顯示資料基準日期。",
              ai: {
                delegated: "到達頁設計配置（ChatGPT Codex、Gemini）",
                own: "首頁與報告的資訊架構，以及將法規檢視、參考分數與資料不足分開呈現的方式，都由我親自規劃，並在確認介面與用語後加以修改。"
              },
              outcome: "團隊完成了將五個領域的摘要、詳細依據與報告匯出串連起來的網頁儀表板。公開的虛擬企業對美出口報告（2026-11-11產出，分析基準日2026-11-10）顯示有條件檢視狀態與56%的依據涵蓋比例，缺乏資料的價格及物流項目標示為資料不足。56%是這份範例報告中的數值。",
              limits: "部分統計查詢失敗及企業填報值的有效期限等因素，使部分項目仍未評估。參考分數與依據涵蓋比例不代表出口成功機率或判斷準確性。仍需確認統計範圍、基準日期與輸入資料的有效性。"
            },
            note: "團隊專案。分析引擎與整體服務為團隊成果，我的貢獻為上述範圍。"
          },
          {
            id: "hanjeongseon",
            name: "Hanjungsun | 越南市場進入行銷儀表板",
            question: "韓國食品品牌準備進入越南市場時，如何將當地資訊轉化為可執行的行銷計畫？",
            contribution: "我負責HOME的規劃與實作，讓行銷人員能根據當地資訊與準備情況決定下一步行動。我從目標日期回推準備時程，並連結當地活動、新聞與工作進度，協助使用者掌握當日待辦事項與行銷活動進度。我也規劃並製作了越南介紹網站與宣傳影片。",
            summary: "以進入越南峴港為假設，彙集當地資訊與行銷準備日程的工作工具，並搭配製作越南介紹網站與宣傳影片",
            period: "2026.10",
            type: "貿易AX大師課程 團隊專案",
            status: "發表版本原型，新聞影響視覺化為後續規劃",
            problem: "當地資訊與行銷活動準備日程分散，難以把握下一步該做什麼。",
            role: [
              "HOME頁面的規劃與實作",
              "以目標日期為基準回推準備時程的行事曆",
              "在一個頁面整合當地時程、新聞與工作進度",
              "設計將新聞分為文章清單與已確認公告的標準",
              "規劃並製作越南介紹網站與宣傳影片"
            ],
            caseStudy: {
              process: "團隊儀表板將當地研究連結至時程、內容製作、創作者合作及成效管理。我在HOME中彙整當地時程、新聞與準備情況，協助使用者決定下一步行動。我將便於探索的新聞清單與已確認的公告分開，區分資訊探索與判斷依據的確認。",
              ai: {
                delegated: "HOME功能實作、介紹網站設計與宣傳影片製作（Claude Code、Codex、Google Flow、Higgsfield）",
                own: "HOME要呈現的資訊、時程回推方式、新聞分類標準，以及介紹網站與宣傳影片的架構，都由我親自規劃，並在確認成果後加以修改。"
              },
              outcome: "團隊展示影片的HOME部分呈現行事曆、活動設定與新聞介面，並提供另外製作的越南介紹網站及宣傳影片。",
              limits: "這是以越南市場進入情境為假設的訓練原型，簡報中的工作時間比較為估計值而非實測。發表回饋建議在彙整新聞之外，呈現新聞對Hanjungsun進入越南市場的意義。我正在規劃以綠色表示機會、黃色表示注意、紅色表示風險、依據不足時以灰色暫緩判斷的影響分類與篩選，目前尚未實作。"
            },
            materials: [
              {"id": "brandSite", "label": "越南介紹網站（訓練原型）"},
              {"id": "homeDemo", "label": "HOME展示（團隊影片節錄，韓語）"},
              {"id": "promo", "label": "越南宣傳影片"}
            ],
            note: "團隊專案。整體儀表板為團隊成果，我的貢獻以上述範圍為限，以HOME、越南介紹網站與宣傳影片為主。"
          }
        ],
        extraTitle: "其他專案與活動",
        extraOpen: "展開",
        extraClose: "收起",
        extra: [
          { name: "KOTRA公開財務資料分析", meta: "2025.10 – 2025.11 | 大學課程專案", desc: "整理ALIO 2020–2024年公開財務資料，比較財務結構與主要指標變化，並製作報告與簡報資料" },
          { name: "KITA報告研讀小組", meta: "學習活動", desc: "閱讀國際通商議題並準備導讀資料。準備導讀CPTPP相關報告的國外部分，並撰寫介紹文字" },
          { name: "其他活動", desc: "人文科學學院學生會書記（2023）、禮拜合唱志願服務（2025）、舞蹈社團 Ars Amandi（2022）、咖啡店 ZITTEN 工作（2022–2023）" }
        ]
      },
      now: {
        label: "NOW",
        title: "現在在做的事",
        asOf: "基準日 2026.11.10",
        statement: "目前我正在學習貿易實務與AI應用，將對國際議題的興趣發展為專案與紀錄。我正在補強英語與分析基礎，並準備申請研究所，以更深入地學習中國與東亞的通商及政策問題。",
        doingTitle: "進行中",
        doing: [
          "參加貿易AX大師課程，整理團隊專案經驗",
          "學習英語與準備TOEFL",
          "準備申請美國國際關係與公共政策領域的碩士課程",
          "申請國際組織與國際政策領域的實習，探索職業方向",
          "累積個人作品集與國際議題的探究紀錄"
        ],
        interestsTitle: "關注領域",
        interests: [
          "中國與東亞",
          "國際關係與國際政治經濟",
          "國際通商與貿易政策",
          "供應鏈、出口管制與制裁",
          "中美關係對貿易與產業的影響",
          "運用參考資料與數據說明國際議題的方法"
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
        title: "聯絡我",
        text: "如有合作提議或問題，歡迎透過電子郵件聯絡我。",
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
      meta: {
        title: "鄭主緣 Juyeon Jung | Portfolio",
        description: "鄭主緣（Juyeon Jung）のポートフォリオ。"
      },
      nav: { about: "自己紹介", experience: "経歴", projects: "プロジェクト", now: "現在", notes: "探究ノート", contact: "連絡先" },
      hero: {
        eyebrow: "JUYEON JUNG",
        name: "鄭主緣",
        headline: "国際通商の課題を探究し、AIと協働して、その探究をツールに形にします。",
        headlineBreakAfter: "国際通商の課題を探究し、",
        intro: "中国と東アジアについて学び、海外パートナーと協業してきました。貿易と国際政策への関心をもとに資料を読んで整理し、AIを活用して考えを具体的なツールにしています。",
        politicalEconomyInterest: "国際政治経済",
        photo: "プロフィール写真",
        ctaProjects: "プロジェクトを見る",
        ctaContact: "連絡する"
      },
      strengths: {
        title: "強み",
        items: [
          { title: "グローバルコミュニケーション", desc: "中国語と英語で海外パートナーとやり取り" },
          { title: "AI活用", desc: "生成AIでアイデアをWebツールとして形に" },
          { title: "粘り強さ", desc: "慣れない言語環境でも学び方を調整し、最後までやり遂げる" }
        ]
      },
      about: {
        label: "ABOUT",
        title: "中国と東アジアの学びを、国際政治経済と通商政策につなげます",
        titleBreakAfter: "中国と東アジアの学びを、",
        body: [
          "漢陽大学で中語中文学を専攻し、中国経済通商学を副専攻しました。国立台湾大学では2年間、中国語で専攻科目を履修し、中国文学科の複数学位を取得しました。",
          "その後、EXPORUMのグローバル戦略事業チームでインターンとして、海外メディアパートナーとのやり取りと国際イベントの運営をサポートしました。",
          "現在は韓国貿易協会の貿易AXマスター課程で、貿易実務、データ活用、生成AIを学びながらWebツールを作る経験を積んでいます。",
          "長期的には、中国と東アジア、国際政治経済、国際通商と貿易政策を深く学び、資料とデータに基づいて国際問題を説明する力を高めたいと考えています。米国の国際関係および公共政策分野の修士課程への進学を準備しながら、探究の内容をプロジェクトや記録として積み重ねています。"
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
            skills: ["海外パートナーとのコミュニケーション", "スケジュール調整", "進捗管理", "根拠を確認する報告"]
          }
        ]
      },
      projects: {
        label: "PROJECTS",
        title: "代表プロジェクト",
        intro: "貿易と国際問題から出発した問いを、資料とデータで読み解くWebツールとして形にしてきた記録です。",
        labels: {
          materials: "プロジェクト資料",
          process: "取り組みの過程",
          aiUse: "AIの活用",
          aiDelegated: "AIに任せたこと",
          aiOwn: "自分で決めて確認したこと",
          outcome: "成果",
          rooms: "公開中の学習室",
          limits: "限界と次のステップ",
          report: "架空企業の報告書を見る（韓国語HTML）",
          question: "中心となる問い", contribution: "私の主な貢献",
          period: "期間", type: "種類", status: "状態",
          problem: "解決したかった課題", role: "担当したこと",
          moreOpen: "詳しく見る", moreClose: "閉じる", link: "プロジェクトを見る"
        },
        items: [
          {
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
              ai: {
                delegated: "機能の実装と画面デザイン",
                own: "学習テーマとニュースの選定、学習室の構成と順序、画面に載せる内容は自分で企画し、できあがったものを確認しながら修正しました。"
              },
              outcome: "公開サイトに5つの学習室をつくり、それぞれにニュースと連動したシミュレーターを1つずつ置きました。貿易ニュースの閲覧、用語集、貿易マップ、ブラウザーに保存される学習記録、サイト内の学習内容を案内するチャットボットもあわせて実装しました。",
              limits: "学習記録はアカウント同期なしで現在のブラウザーに保存され、案内チャットボットは規則に従ってサイト内の内容を検索します。シミュレーターは簡略化した学習モデルであり、外部ニュースや統計の正確性、学習効果はまだ別途検証していません。今後、学習室を5つ前後追加する予定です。"
            },
            rooms: [
              { id: "urea", title: "尿素水不足と輸入先の多角化（2021）", tool: "調達比率シミュレーター" },
              { id: "graphite", title: "中国の黒鉛輸出許可制（2023）", tool: "供給減少と価格のシミュレーター" },
              { id: "gallium", title: "ガリウムとゲルマニウムの輸出許可制（2023）", tool: "在庫と許可待ち期間のシミュレーター" },
              { id: "tariff", title: "韓米貿易合意と15%関税（2025）", tool: "関税の帰着シミュレーター" },
              { id: "redsea", title: "紅海危機と喜望峰への迂回（2023）", tool: "航路と運賃のシミュレーター" }
            ],
            materials: [
              {"id": "statistics", "label": "統計と出典の説明画面（韓国語UI）"},
              {"id": "simulation", "label": "調達比率シミュレーター（韓国語UI）"}
            ],
            note: "継続して発展させている個人プロジェクトです。サイトは韓国語です。"
          },
          {
            id: "axport",
            name: "AXPORT | 半導体輸出の意思決定ダッシュボード",
            question: "半導体輸出において、規制による制約と市場の機会をどう区別して検討し、判断の根拠を伝えられるだろうか。",
            contribution: "メインサイトの企画とUI/UX、レスポンシブなレイアウト、多言語画面を担当しました。規制の確認と事業性の評価が区別されるよう、報告書の構成と表現を改善しました。要約から詳細な根拠へつながる情報構造を整え、データの基準日と未確認の情報を表示し、利用者が結果の意味と限界を理解できるようにしました。",
            summary: "半導体輸出を検討する際に必要な情報を集めた事前検討ダッシュボード",
            period: "2026.09",
            type: "貿易AXマスター課程 チームプロジェクト",
            status: "プロトタイプ",
            problem: "規制、市場性、価格、物流、安定性の情報が分散していました。一画面に集めても、規制上の制約、事業性のスコア、資料のない項目が同じ重みで読まれると、判断を誤らせるおそれがありました。",
            role: [
              "メインページの企画とUI/UXデザイン",
              "レスポンシブなレイアウトと多言語画面",
              "PDF報告書と分析報告書の構成および文言の改善",
              "サービス紹介と発表資料の作成"
            ],
            caseStudy: {
              process: "ホームページではサービス紹介と利用方法を通じて、5つの検討領域と利用の流れを案内しました。報告書は要約から詳細な根拠へ進む構成にし、規制の検討を事業性の参考スコアと分けました。資料のない項目は資料不足と表示し、データの基準日もあわせて示しています。",
              ai: {
                delegated: "ランディングページのデザイン構成（ChatGPT Codex、Gemini）",
                own: "ホームページと報告書の情報構造、規制の検討と参考スコア、資料不足を分けて示す方法は自分で企画し、画面と文言を確認しながら修正しました。"
              },
              outcome: "5つの領域の要約と詳細な根拠、報告書出力をつないだWebダッシュボードをチームで完成させました。公開した架空企業の米国輸出報告書（2026-11-11作成、分析基準日2026-11-10）には条件付き検討という状態と根拠の反映率56%が表示され、資料のない価格と物流の項目は資料不足と示されます。56%はこの報告書例の値です。",
              limits: "一部の統計照会の失敗や企業記載値の有効期間などにより、未評価の項目が残っています。参考スコアと根拠の反映率は輸出成功確率や判断の正確性を示しません。統計の対象範囲、基準日、入力資料の有効性は引き続き確認が必要です。"
            },
            note: "チームプロジェクトです。分析エンジンとサービス全体はチームの成果物であり、私の貢献は上記の範囲です。"
          },
          {
            id: "hanjeongseon",
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
              limits: "ベトナム市場への進出を想定した教育用プロトタイプであり、発表資料の作業時間比較は実測ではなく推定値です。発表では、ニュースを集めるだけでなくHanjungsunの進出にとっての意味を示してほしいという意見を受けました。機会は緑、注意は黄、リスクは赤、根拠不足は灰色で保留とする影響分類と絞り込みを計画しており、まだ実装していません。"
            },
            materials: [
              {"id": "brandSite", "label": "ベトナム紹介サイト（教育用プロトタイプ）"},
              {"id": "homeDemo", "label": "HOMEデモ（チーム動画の抜粋、韓国語）"},
              {"id": "promo", "label": "ベトナム広報動画"}
            ],
            note: "チームプロジェクトです。ダッシュボード全体はチームの成果物であり、私の貢献はHOME、ベトナム紹介サイト、広報動画を中心とする上記の範囲です。"
          }
        ],
        extraTitle: "その他のプロジェクトと活動",
        extraOpen: "開く",
        extraClose: "閉じる",
        extra: [
          { name: "KOTRA 公開財務資料の分析", meta: "2025.10 – 2025.11 | 大学の授業プロジェクト", desc: "ALIOの2020–2024年の公開財務資料を整理し、財務構造と主要指標の変化を比較して報告書と発表資料にまとめた" },
          { name: "KITA 報告書スタディ", meta: "学習活動", desc: "国際通商の問題を読み、発表資料を準備。CPTPP関連報告書の海外パートの発表準備と紹介文の作成" },
          { name: "その他の活動", desc: "人文科学大学 学生会書記（2023）、チャペル合唱ボランティア（2025）、ダンスサークル Ars Amandi（2022）、カフェ ZITTEN 勤務（2022–2023）" }
        ]
      },
      now: {
        label: "NOW",
        title: "いま取り組んでいること",
        asOf: "基準日 2026.11.10",
        statement: "現在は貿易実務とAI活用を学びながら、国際問題への関心をプロジェクトと記録へと発展させています。英語と分析の基礎を補い、中国と東アジアの通商および政策の問題をより深く学ぶために大学院進学を準備しています。",
        doingTitle: "進行中",
        doing: [
          "貿易AXマスター課程の受講とチームプロジェクト経験の整理",
          "英語とTOEFLの学習",
          "米国の国際関係および公共政策分野の修士課程への進学準備",
          "国際機関と国際政策分野のインターンシップ応募と進路の模索",
          "個人ポートフォリオと国際問題に関する探究記録の蓄積"
        ],
        interestsTitle: "関心分野",
        interests: [
          "中国と東アジア",
          "国際関係と国際政治経済",
          "国際通商と貿易政策",
          "サプライチェーン、輸出管理と制裁",
          "米中関係が貿易と産業に与える影響",
          "資料とデータに基づいて国際問題を説明する方法"
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
        text: "協業のご提案やお問い合わせは、メールでお気軽にご連絡ください。",
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
