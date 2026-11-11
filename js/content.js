/*
 * 사이트의 모든 문구와 링크를 이 파일에서 관리합니다.
 * - 문구 수정: 아래 ko / en / zh-Hans(간체) / zh-Hant(번체) / ja 에서 해당 문장을 고치세요.
 *   (모든 언어를 함께 고쳐야 언어 전환 시 내용이 맞습니다. 번체는 대만식 표현 기준입니다.)
 * - 링크 추가: SITE.links 에 주소를 넣으면 버튼이 나타나고, 비워두면 버튼이 숨겨집니다.
 * - 프로필 사진: assets 폴더에 사진을 넣고 SITE.profile.photo 에 경로를 적으세요. 예) "assets/profile.jpg"
 * - 새 프로젝트 추가: 각 언어의 projects.items 에 같은 id 로 항목을 하나씩 추가하세요.
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
        lesson: "https://trade-news-room.vercel.app/#learn-urea",
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
        intro: "무역과 국제 이슈에서 출발한 문제를 웹 도구로 정리해 온 기록입니다.",
        labels: {
          materials: "프로젝트 자료",
          nextSteps: "발표 피드백과 개선 계획",
          workflow: "프로젝트의 기능 흐름",
          designIntent: "설계 의도",
          aiUse: "AI 활용",
          artifactReview: "산출물에서 확인되는 내용",
          limits: "한계와 다음 확인",
          report: "가상 기업 보고서 보기 (한국어 HTML)",
          question: "핵심 질문", contribution: "내가 맡은 핵심",
          period: "기간", type: "유형", status: "상태",
          problem: "해결하려던 문제", result: "결과물", role: "내가 맡은 일", focus: "중요하게 생각한 점",
          moreOpen: "자세히 보기", moreClose: "접기", link: "프로젝트 보기"
        },
        items: [
          {
            id: "axport",
            name: "AXPORT | 반도체 수출 의사결정 대시보드",
            question: "반도체 수출에서 규제에 따른 제약과 시장의 기회를 어떻게 구분해 검토하고, 판단의 근거를 전달할 수 있을까?",
            contribution: "메인 홈페이지의 기획과 UI/UX, 반응형 레이아웃과 다국어 화면을 담당했습니다. 규제 확인과 사업성 평가가 구분되도록 보고서 구성과 표현을 개선했습니다. 요약에서 상세 근거로 이어지는 정보 구조를 다듬고, 데이터 기준일과 확인되지 않은 정보를 표시해 사용자가 결과의 의미와 한계를 이해하도록 했습니다.",
            summary: "반도체 수출을 검토할 때 필요한 정보를 모은 사전검토 대시보드",
            period: "2026.09",
            type: "무역 AX마스터 교육 팀 프로젝트",
            status: "프로토타입 결과물",
            problem: "규제, 시장성, 가격, 물류, 안정성 등 수출 검토에 필요한 정보가 흩어져 있어 함께 살펴보기 어려웠습니다.",
            result: "다섯 영역의 요약과 상세 근거, 보고서 내보내기를 연결한 웹 대시보드 (팀 결과물)",
            role: [
              "메인 홈페이지 기획과 UI/UX 디자인",
              "화면 구성과 정보 배치 개선",
              "다국어 화면 작업",
              "PDF 보고서 구성과 문구 개선",
              "서비스 소개 및 발표자료 작업",
              "반응형 레이아웃과 Contact Us 화면 배치",
              "분석 결과 보고서와 발표자료의 구성 및 표현 개선"
            ],
            focus: [
              "사용자가 정보를 이해하는 순서",
              "요약과 근거의 연결",
              "규제 제한과 평가점수의 구분",
              "데이터 기준일과 결측 정보의 표시"
            ],
            caseStudy: {
              designIntent: "홈페이지에서는 서비스 소개와 이용 방법을 통해 다섯 검토 영역과 이용 흐름을 안내하고, 보고서는 요약에서 상세 근거로 이어지도록 정리했습니다. 규제 검토, 사업성 참고점수와 자료 부족이 서로 다른 의미라는 점을 읽을 수 있도록 정보를 구성한 작업입니다.",
              aiUse: "ChatGPT(Codex)와 Gemini를 디자인 및 데이터 관련 작업에 활용했습니다. 홈페이지와 보고서 및 발표자료의 정보 구성과 표현을 개선하는 과정에서 AI의 도움을 받았습니다.",
              artifactReview: "2026-11-11에 작성된 가상 기업의 미국 수출 HTML 보고서입니다. 분석 기준일은 2026-11-10이며, 근거 반영률 56%와 조건부 검토 상태를 표시합니다. 규제 검토가 참고점수와 분리되고, 자료가 없는 가격과 물류 항목은 자료 부족으로 표시됩니다. 팀 결과물의 출력 예시입니다.",
              limits: "일부 통계 조회 실패와 기업 기재값의 유효기간 등으로 미평가 항목이 남아 있습니다. 참고점수와 근거 반영률은 수출 성공확률이나 판단 정확도를 뜻하지 않습니다. 통계의 대상 범위, 기준일과 입력 자료의 유효성을 추가로 확인할 필요가 있습니다."
            },
            note: "분석 엔진과 전체 서비스는 팀 결과물이며, 제 기여는 위에 적은 범위입니다."
          },
          {
            id: "hanjeongseon",
            name: "한정선 | 베트남 진출 마케팅 대시보드",
            question: "한국 식품 브랜드의 베트남 진출을 준비할 때, 현지 정보를 어떻게 실행 가능한 마케팅 계획으로 연결할 수 있을까?",
            contribution: "마케팅 담당자가 현지 정보와 준비 상황을 바탕으로 다음 행동을 정할 수 있도록 HOME을 기획하고 구현했습니다. 목표일부터 준비 일정을 역산하고, 현지 일정과 뉴스, 업무 진척을 연결해 오늘 할 일과 캠페인 진행 상태를 파악하도록 구성했습니다. 베트남 소개 홈페이지와 홍보영상도 제작했습니다.",
            summary: "베트남 다낭 진출을 가정해 현지 정보와 마케팅 준비 일정을 모은 업무 도구. 베트남 소개 홈페이지와 홍보영상 제작 포함",
            period: "2026.10",
            type: "무역 AX마스터 교육 팀 프로젝트",
            status: "발표 버전 프로토타입, 뉴스 영향 시각화는 개선 계획",
            problem: "현지 정보와 캠페인 준비 일정이 흩어져 다음에 해야 할 일을 파악하기 어려웠습니다.",
            result: "베트남 다낭 진출을 가정해 현지 정보와 마케팅 준비 일정을 모은 대시보드, 팀 시연 자료, 베트남 소개 홈페이지와 홍보영상 (팀 프로젝트 결과물)",
            role: [
              "HOME 화면의 기획부터 구현까지 담당",
              "현지 일정과 뉴스, 업무 진척을 한 화면에 정리",
              "목표일을 기준으로 준비 일정을 역산하는 캘린더 구성",
              "오늘 할 일과 진행 상태를 파악할 수 있도록 화면 개선",
              "사용자 뉴스 탐색 방식과 정보 구분 기준 조정",
              "AI를 활용해 검색과 번역 코드를 구현하고 화면을 직접 조정",
              "베트남 소개 홈페이지 제작",
              "베트남 홍보영상 제작"
            ],
            focus: [
              "마케터가 다음 행동을 파악할 수 있는 정보 배치",
              "검색 결과와 확인된 공지의 구분",
              "전체 대시보드와 HOME 화면의 일관성"
            ],
            caseStudy: {
              workflow: "대시보드는 현지조사에서 얻은 정보를 일정, 콘텐츠 제작, 크리에이터 협업과 성과 관리로 연결하도록 구성한 팀 결과물입니다. 저는 HOME과 베트남 소개 홈페이지, 홍보영상을 제작해 업무용 화면과 고객에게 보여줄 콘텐츠를 함께 다뤘습니다.",
              designIntent: "HOME에서는 현지 일정, 뉴스와 준비 상황을 모아 다음 행동을 파악하도록 구성했습니다. 뉴스는 쉽게 탐색하는 기사 목록과 확인된 공지로 나누어, 정보를 찾는 과정과 판단 근거를 확인하는 과정을 구분했습니다.",
              aiUse: "Claude Code, Codex, Google Flow, Higgsfield를 코드와 데이터 관련 작업, 홈페이지와 홍보영상의 디자인 및 UI/UX 작업에 활용했습니다. 제가 담당한 산출물은 직접 수정하고 확인했습니다.",
              artifactReview: "팀 시연 영상의 HOME 구간에서 캘린더, 이벤트 설정과 뉴스 화면을 확인할 수 있습니다. 별도로 제작한 베트남 소개 홈페이지와 홍보영상도 함께 제시합니다.",
              limits: "베트남 진출 상황을 가정한 교육용 프로토타입입니다. 발표자료의 업무 시간 비교는 추정치이며, 실측한 시간 단축이나 실제 시장 진출 성과를 보여주는 자료가 아닙니다.",
              nextSteps: "아직 구현하지 않은 개선 계획입니다. 발표에서 뉴스 목록을 모으는 데서 나아가 한정선의 베트남 진출에 어떤 의미가 있는지 시각적으로 보여 달라는 피드백을 받았습니다. 기회는 초록색, 주의는 노란색, 위험은 빨간색으로 구분하고 판단 근거가 부족하면 회색으로 보류하는 요약과 필터를 계획하고 있습니다. 기사와 공지의 확인 상태는 영향 분류와 별도로 유지하고, 분류 이유와 원문을 확인할 수 있도록 할 예정입니다."
            },
            materials: [
              {"id": "brandSite", "label": "베트남 소개 홈페이지 (교육용 프로토타입)"},
              {"id": "homeDemo", "label": "HOME 시연 (팀 영상 발췌, 한국어)"},
              {"id": "promo", "label": "베트남 홍보영상"}
            ],
            note: "교육 과정에서 진출 상황을 가정해 만든 프로토타입입니다. 전체 대시보드는 팀 결과물이며, 제 기여는 HOME, 베트남 소개 홈페이지와 홍보영상 제작을 중심으로 위에 적은 범위입니다."
          },
          {
            id: "tradenews",
            name: "뉴스 속 무역 공부방 (Trade News Room)",
            question: "세계 무역 뉴스의 배경과 개념을 데이터와 연결해 이해하고, 그 이해를 학습 기록으로 어떻게 쌓아갈 수 있을까?",
            contribution: "학습 방식과 사이트 구성을 기획하고, AI의 도움을 받아 웹 프로토타입을 제작했습니다. 화면과 학습 흐름을 개선했습니다.",
            summary: "세계 무역 뉴스를 출발점으로 개념과 데이터를 함께 이해하는 학습 웹사이트",
            period: "2026",
            type: "개인 프로젝트",
            status: "프로토타입 구현, 계속 발전시키는 중",
            problem: "실제 무역 이슈의 배경과 연결된 개념을 이해하고, 학습 내용을 기록하고 싶었습니다.",
            result: "무역 뉴스 탐색과 주제별 학습, 용어사전과 퀴즈, 뉴스와 연결된 상호작용 시뮬레이터, 무역 맵, 브라우저에 저장되는 개인 학습 기록, 사이트 내부 학습 내용을 찾아 안내하는 챗봇",
            role: [
              "학습 방식과 사이트 구성 기획",
              "AI의 도움을 받아 웹 프로토타입 제작",
              "화면과 학습 흐름 개선"
            ],
            focus: ["국제 이슈에 대한 호기심을 학습 도구로 구체화하는 과정"],
            caseStudy: {
              workflow: "요소 공급망 학습실에서는 뉴스 요약과 출처를 읽고, 수입처 통계와 조달 비중 시뮬레이터를 살펴본 뒤 퀴즈와 용어 확인, 학습 메모로 이어집니다. 메모, 퀴즈 응답과 완료 표시는 현재 브라우저에 저장됩니다.",
              designIntent: "수입처의 변화와 공급망 의존도를 살펴보도록, 품목 범위와 단위를 설명하는 통계 그래프와 가격 및 조달 비중을 바꾸는 학습용 모형을 구분해 배치했습니다. 그래프만으로 변화의 원인을 단정하거나 모형의 계산값을 실제 수급 전망으로 받아들이지 않도록 안내합니다.",
              artifactReview: "2026-11-11 공개 사이트 동작 확인에서 조달 비중 변경에 따라 비용과 잔여 물량이 갱신되고, 퀴즈 응답, 학습 메모와 완료 표시가 새로고침 뒤에도 유지되는 것을 확인했습니다. 연결한 화면은 이때의 구현 상태를 보여줍니다.",
              limits: "학습 기록은 계정 연동 없이 해당 브라우저에 저장됩니다. 안내 챗봇은 사이트 내부 자료를 찾는 규칙 기반 기능입니다. 시뮬레이터는 단순화한 학습 모형이며, 이번 동작 확인은 외부 뉴스와 통계의 정확성 또는 학습 효과 검증을 뜻하지 않습니다."
            },
            materials: [
              {"id": "lesson", "label": "요소 공급망 학습실 (한국어)"},
              {"id": "statistics", "label": "통계와 출처 안내 화면 (한국어)"},
              {"id": "simulation", "label": "조달 비중 시뮬레이터 화면 (한국어)"}
            ],
            note: "개인 프로젝트의 프로토타입으로, 학습 흐름과 기능을 계속 발전시키고 있습니다. 공개 사이트에는 Docklab이라는 이름을 사용합니다."
          }
        ],
        extraTitle: "추가 프로젝트와 활동",
        extraOpen: "펼쳐 보기",
        extraClose: "접기",
        extra: [
          { name: "KOTRA 공개 재무자료 분석", meta: "2025.10 – 2025.11 | 대학 수업 프로젝트", desc: "ALIO의 2020–2024년 공개 재무자료를 정리하고 재무구조와 주요 지표 변화를 비교해 보고서와 발표자료로 구성" },
          { name: "KITA 보고서 스터디", meta: "학습 활동", desc: "국제통상 이슈를 읽고 발제 자료 준비. CPTPP 관련 보고서의 국외 파트 발제 준비와 소개글 작성" },
          { name: "한양대학교 인문과학대학 학생회", meta: "2023.01 – 2023.07 | 총무부 서기", desc: "학생회 운영 지원과 회의 기록" },
          { name: "한양대학교회 목요채플 합창 봉사", meta: "2025.09 – 2025.11", desc: "정기 채플 성가대 활동" },
          { name: "한양대학교 중앙댄스동아리 Ars Amandi", meta: "2022.03 – 2022.07", desc: "정기 연습과 공연 준비" },
          { name: "카페 ZITTEN 근무", meta: "2022.09 – 2023.05", desc: "고객 응대, 재고 정리와 관리" }
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
        intro: "A record of turning questions from trade and international issues into web tools.",
        labels: {
          materials: "Project materials",
          nextSteps: "Presentation feedback and planned improvements",
          workflow: "Project workflow",
          designIntent: "Design rationale",
          aiUse: "AI use",
          artifactReview: "Evidence from project materials",
          limits: "Limits and further checks",
          report: "View sample company report (HTML in Korean)",
          question: "Key question", contribution: "My key contribution",
          period: "Period", type: "Type", status: "Status",
          problem: "Problem", result: "Output", role: "My role", focus: "What I focused on",
          moreOpen: "Details", moreClose: "Close", link: "View project"
        },
        items: [
          {
            id: "axport",
            name: "AXPORT | Semiconductor Export Decision Dashboard",
            question: "How can regulatory constraints and market opportunities in semiconductor exports be reviewed as distinct considerations, and how can the reasoning behind decisions be communicated?",
            contribution: "I planned the main website and its UI/UX, responsive layout and multilingual screens. I improved the report structure and wording to distinguish regulatory checks from assessments of commercial viability. I refined the information structure connecting summaries to detailed evidence, and displayed data reference dates and unverified information to help users understand the meaning and limitations of the results.",
            summary: "A pre-screening dashboard that gathers the information needed to review semiconductor exports",
            period: "Sep 2026",
            type: "Team project, KITA Trade AX Master program",
            status: "Prototype",
            problem: "Information needed for export review, such as regulation, market potential, price, logistics and stability, was scattered and hard to look at together.",
            result: "A web dashboard linking summaries and detailed evidence for five areas with report export (team output)",
            role: [
              "Planned the main home page and its UI/UX design",
              "Improved screen layout and information placement",
              "Built the multilingual screens",
              "Structured the PDF report and refined its wording",
              "Prepared the service introduction and presentation materials",
              "Responsive layout and placement of the Contact Us section",
              "Structure and wording improvements for the analysis report and presentation materials"
            ],
            focus: [
              "The order in which users understand information",
              "Linking summaries to evidence",
              "Separating regulatory restrictions from evaluation scores",
              "Showing data reference dates and missing information"
            ],
            caseStudy: {
              designIntent: "On the website, the service introduction and usage guide explain the five review areas and the user flow. I organized the report to connect summaries to detailed evidence, making regulatory review, commercial reference scores and missing information distinguishable.",
              aiUse: "I used ChatGPT (Codex) and Gemini for design and data-related work. AI assisted with improving the information structure and wording of the website, report and presentation materials.",
              artifactReview: "This sample U.S. export report was created on November 11, 2026, with an analysis reference date of November 10, 2026. It shows evidence coverage of 56% and a conditional review status. Regulatory review is separate from the reference score, while price and logistics items without supporting data are marked as insufficient. This is an example of the team report output.",
              limits: "Failed statistical lookups and the validity period of company inputs leave some items unevaluated. The reference score and evidence coverage do not represent export success probability or decision accuracy. Statistical scope, reference dates and input validity still need checking."
            },
            note: "The analysis engine and the overall service are team work; my contribution is the scope listed above."
          },
          {
            id: "hanjeongseon",
            name: "Hanjungsun | Vietnam Market Entry Marketing Dashboard",
            question: "When preparing a Korean food brand to enter Vietnam, how can local information be translated into an actionable marketing plan?",
            contribution: "I planned and implemented HOME so that marketing staff could identify their next actions based on local information and preparation status. I built preparation schedules backward from target dates and connected local events, news and task progress to make daily tasks and campaign status clear. I also created the Vietnam introduction website and promotional video.",
            summary: "A work tool that gathers local information and marketing preparation schedules, assuming entry into Da Nang, Vietnam. Includes a Vietnam introduction website and promotional video",
            period: "Oct 2026",
            type: "Team project, KITA Trade AX Master program",
            status: "Presentation prototype; news impact visualization planned",
            problem: "Local information and campaign preparation schedules were scattered, making it hard to see what to do next.",
            result: "A dashboard and team demo materials bringing together local information and marketing preparation schedules for an assumed entry into Da Nang, Vietnam, plus a Vietnam introduction website and promotional video (team project outputs)",
            role: [
              "Owned the HOME screen from planning to implementation",
              "Brought local schedules, news and task progress onto one screen",
              "Built a calendar that works backward from the target date",
              "Improved the screen so users can see today's tasks and progress",
              "Adjusted how users browse news and how information is categorized",
              "Implemented search and translation code with AI and refined the screen myself",
              "Created the Vietnam introduction website",
              "Created the Vietnam promotional video"
            ],
            focus: [
              "Placing information so marketers can see their next action",
              "Separating search results from confirmed announcements",
              "Consistency between the full dashboard and the HOME screen"
            ],
            caseStudy: {
              workflow: "The team dashboard connects local research with scheduling, content production, creator collaboration and performance tracking. I created HOME, the Vietnam introduction website and the promotional video, working on both an internal work interface and customer-facing content.",
              designIntent: "HOME brings local events, news and preparation status together to help users identify their next actions. I separated browsable news articles from confirmed announcements, distinguishing information discovery from checking the basis for a decision.",
              aiUse: "I used Claude Code, Codex, Google Flow and Higgsfield for code and data work, as well as website and promotional video design and UI/UX. I directly revised and checked the deliverables I handled.",
              artifactReview: "The HOME section of the team demo video shows the calendar, event settings and news screens. The separately created Vietnam introduction website and promotional video are also provided.",
              limits: "This is a training prototype for an assumed Vietnam market entry. The work-time comparisons in the presentation are estimates, not measured time savings or evidence of actual market-entry results.",
              nextSteps: "This improvement is not implemented yet. Presentation feedback called for showing what news means for Hanjungsun entering Vietnam, beyond collecting article links. The plan is to add summaries and filters for opportunity in green, caution in yellow, risk in red and undetermined items in gray. The confirmation status of articles and announcements will remain separate from impact classification, with reasons and original sources available for review."
            },
            materials: [
              {"id": "brandSite", "label": "Vietnam introduction website (training prototype)"},
              {"id": "homeDemo", "label": "HOME demo (team video excerpt, Korean)"},
              {"id": "promo", "label": "Vietnam promotional video"}
            ],
            note: "A training prototype based on an assumed market entry scenario. The full dashboard is a team output; my contribution is the scope listed above, centered on HOME, the Vietnam introduction website and the promotional video."
          },
          {
            id: "tradenews",
            name: "Trade News Room",
            question: "How can the background and concepts behind world trade news be understood through connections with data, and how can that understanding be built into a learning record?",
            contribution: "I planned the learning approach and site structure, built the web prototype with AI assistance, and refined the screens and learning flow.",
            summary: "A learning website that starts from world trade news to understand concepts and data together",
            period: "2026",
            type: "Personal project",
            status: "Prototype built, still developing",
            problem: "I wanted to understand the background and concepts behind real trade issues, and keep a record of what I learned.",
            result: "Trade news browsing and topic-based learning, a glossary and quizzes, interactive simulators linked to news, a trade map, a personal learning log saved in the browser, and a chatbot that guides users to content within the site",
            role: [
              "Planned the learning approach and site structure",
              "Built the web prototype with AI assistance",
              "Refined the screens and learning flow"
            ],
            focus: ["Turning curiosity about international issues into a learning tool"],
            caseStudy: {
              workflow: "The urea supply chain lesson moves from a news summary and sources to import statistics and a sourcing simulator, followed by quizzes, key terms and learning notes. Notes, quiz answers and completion marks are saved in the current browser.",
              designIntent: "To explore changes in import sources and supply dependence, I separated statistical charts explaining product scope and units from a learning model with adjustable prices and sourcing shares. The guidance explains that the chart alone cannot establish causes and that the model does not forecast actual supply conditions.",
              artifactReview: "A check of the public site on November 11, 2026 confirmed that changing sourcing shares updates costs and remaining supply, and that quiz answers, learning notes and completion marks persist after a refresh. The linked screenshots show the implementation at that time.",
              limits: "Learning records are stored in the current browser without account syncing. The guide chatbot uses rules to find content within the site. The simulator is a simplified learning model; the behavior check does not validate external news, statistical accuracy or learning outcomes."
            },
            materials: [
              {"id": "lesson", "label": "Urea supply chain lesson (Korean)"},
              {"id": "statistics", "label": "Statistics and source guidance (Korean UI)"},
              {"id": "simulation", "label": "Sourcing simulator (Korean UI)"}
            ],
            note: "A personal project prototype whose learning flow and features I continue to develop. The public site uses the name Docklab."
          }
        ],
        extraTitle: "Other projects and activities",
        extraOpen: "Show",
        extraClose: "Close",
        extra: [
          { name: "KOTRA public financial data analysis", meta: "Oct 2025 – Nov 2025 | University course project", desc: "Organized ALIO's 2020–2024 public financial data, compared changes in financial structure and key indicators, and built a report and presentation" },
          { name: "KITA report study group", meta: "Study activity", desc: "Read about international trade issues and prepared discussion materials. Prepared to present the overseas section of a CPTPP-related report and wrote an introductory text" },
          { name: "Hanyang University College of Humanities Student Council", meta: "Jan 2023 – Jul 2023 | Secretary, General Affairs", desc: "Supported council operations and recorded meetings" },
          { name: "Hanyang University Church Thursday Chapel Choir", meta: "Sep 2025 – Nov 2025", desc: "Sang in the regular chapel choir as a volunteer" },
          { name: "Ars Amandi, Hanyang University dance club", meta: "Mar 2022 – Jul 2022", desc: "Regular practice and performance preparation" },
          { name: "Cafe ZITTEN", meta: "Sep 2022 – May 2023", desc: "Customer service and inventory management" }
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
        intro: "从贸易与国际议题出发，把问题整理成网页工具的记录。",
        labels: {
          materials: "项目资料",
          nextSteps: "展示反馈与后续改进计划",
          workflow: "项目功能流程",
          designIntent: "设计思路",
          aiUse: "AI应用",
          artifactReview: "项目材料呈现的内容",
          limits: "局限与后续核查",
          report: "查看虚拟企业报告（韩文HTML）",
          question: "核心问题", contribution: "我的核心贡献",
          period: "时间", type: "类型", status: "状态",
          problem: "想解决的问题", result: "成果", role: "我的工作", focus: "重点考虑",
          moreOpen: "查看详情", moreClose: "收起", link: "查看项目"
        },
        items: [
          {
            id: "axport",
            name: "AXPORT | 半导体出口决策仪表板",
            question: "在半导体出口中，如何区分监管限制与市场机会进行评估，并传达判断所依据的信息？",
            contribution: "我负责主页策划、UI/UX、响应式布局与多语言页面。我改进了报告结构与措辞，以区分合规核查与商业可行性评估。我优化了从摘要连接到详细依据的信息结构，并标明数据基准日期与未经核实的信息，帮助用户理解结果的含义与局限。",
            summary: "汇集半导体出口审查所需信息的预审仪表板",
            period: "2026.09",
            type: "贸易AX大师课程 团队项目",
            status: "原型成果",
            problem: "法规、市场性、价格、物流、稳定性等出口审查所需的信息分散各处，难以一并查看。",
            result: "将五个领域的摘要、详细依据与报告导出连接起来的网页仪表板（团队成果）",
            role: [
              "主页策划与UI/UX设计",
              "改进页面结构与信息布局",
              "多语言页面制作",
              "PDF报告结构与文案改进",
              "服务介绍与演示资料制作",
              "响应式布局与Contact Us区域的信息配置",
              "分析报告与演示资料的结构和措辞改进"
            ],
            focus: [
              "用户理解信息的顺序",
              "摘要与依据的连接",
              "区分法规限制与评估分数",
              "标注数据基准日与缺失信息"
            ],
            caseStudy: {
              designIntent: "在主页中，通过服务介绍和使用说明展示五个审查领域及使用流程；在报告中，将摘要连接到详细依据。信息结构旨在让用户区分监管审查、商业可行性参考分数与资料不足所代表的不同含义。",
              aiUse: "我使用ChatGPT（Codex）和Gemini处理设计及数据相关工作，并借助AI改进主页、报告与演示资料的信息结构和表达。",
              artifactReview: "这份虚拟企业对美出口HTML报告于2026-11-11生成，分析基准日为2026-11-10。报告显示依据覆盖比例为56%，状态为有条件审查。监管审查与参考分数分别呈现，缺少支持数据的价格和物流项目标为资料不足。这是团队成果的报告输出示例。",
              limits: "部分统计查询失败及企业填报值的有效期等因素，使部分项目尚未评估。参考分数和依据覆盖比例不代表出口成功概率或判断准确性。仍需核查统计范围、基准日期与输入资料的有效性。"
            },
            note: "分析引擎与整体服务为团队成果，我的贡献为上述范围。"
          },
          {
            id: "hanjeongseon",
            name: "Hanjungsun | 越南市场进入营销仪表板",
            question: "韩国食品品牌准备进入越南市场时，如何将当地信息转化为可执行的营销计划？",
            contribution: "我负责HOME的策划与实现，让营销人员能够依据当地信息和准备情况确定下一步行动。我从目标日期倒推准备日程，并将当地活动、新闻与工作进度联系起来，帮助用户掌握当天任务与营销活动的进展。我还制作了越南介绍网站与宣传视频。",
            summary: "以进入越南岘港为假设，汇集当地信息与营销准备日程的工作工具，并配套制作越南介绍网站与宣传视频",
            period: "2026.10",
            type: "贸易AX大师课程 团队项目",
            status: "展示版本原型，新闻影响可视化为后续计划",
            problem: "当地信息与营销活动准备日程分散，难以把握下一步该做什么。",
            result: "以进入越南岘港为假设，汇集当地信息与营销准备日程的仪表板、团队演示资料，以及越南介绍网站与宣传视频（团队项目成果）",
            role: [
              "负责HOME页面从策划到实现",
              "在一个页面整合当地日程、新闻与工作进度",
              "以目标日期为基准倒推准备日程的日历",
              "改进页面，使用户能把握今日任务与进度",
              "调整用户浏览新闻的方式与信息分类标准",
              "借助AI实现搜索与翻译代码，并亲自调整页面",
              "制作越南介绍网站",
              "制作越南宣传视频"
            ],
            focus: [
              "让营销人员能看清下一步行动的信息布局",
              "区分搜索结果与已确认的公告",
              "整体仪表板与HOME页面的一致性"
            ],
            caseStudy: {
              workflow: "团队仪表板将当地调研与日程、内容制作、创作者合作和效果管理相连接。我制作了HOME、越南介绍网站与宣传视频，同时处理工作界面和面向客户的内容。",
              designIntent: "HOME汇集当地日程、新闻与准备状态，帮助用户确定下一步行动。我将便于探索的新闻列表与已确认的公告分开，区分信息发现与判断依据的核查。",
              aiUse: "我使用Claude Code、Codex、Google Flow和Higgsfield进行代码与数据相关工作，以及网站、宣传视频的设计和UI/UX工作。我直接修改并检查了自己负责的成果。",
              artifactReview: "团队演示视频的HOME部分展示了日历、活动设置与新闻界面，同时提供单独制作的越南介绍网站和宣传视频。",
              limits: "这是以越南市场进入情境为假设的培训原型。演示资料中的工作时间比较为估算值，不能视为实测的时间节省或真实市场进入成效。",
              nextSteps: "这项改进尚未实现。展示反馈建议在汇集新闻链接之外，进一步直观呈现新闻对Hanjungsun进入越南市场的意义。计划增加机会为绿色、注意为黄色、风险为红色、依据不足时暂缓判断为灰色的摘要与筛选。文章和公告的确认状态将与影响分类分开保留，并提供分类理由及原文供核查。"
            },
            materials: [
              {"id": "brandSite", "label": "越南介绍网站（培训原型）"},
              {"id": "homeDemo", "label": "HOME演示（团队视频节选，韩语）"},
              {"id": "promo", "label": "越南宣传视频"}
            ],
            note: "这是以假设的市场进入情境制作的培训原型。整体仪表板为团队成果，我的贡献以上述范围为限，主要包括HOME、越南介绍网站与宣传视频。"
          },
          {
            id: "tradenews",
            name: "新闻里的贸易学习室（Trade News Room）",
            question: "如何将全球贸易新闻的背景与概念同数据联系起来加以理解，并将这些理解逐步积累为学习记录？",
            contribution: "我策划了学习方式与网站结构，在AI辅助下制作网页原型，并改进页面与学习流程。",
            summary: "以全球贸易新闻为起点，同时理解概念与数据的学习网站",
            period: "2026",
            type: "个人项目",
            status: "已实现原型，持续完善中",
            problem: "我希望理解真实贸易议题背后的背景与相关概念，并记录学习内容。",
            result: "贸易新闻浏览与主题学习、术语词典与测验、与新闻相关的互动模拟器、贸易地图、保存在浏览器中的个人学习记录、引导站内学习内容的聊天机器人",
            role: [
              "策划学习方式与网站结构",
              "在AI辅助下制作网页原型",
              "改进页面与学习流程"
            ],
            focus: ["把对国际议题的好奇心具体化为学习工具的过程"],
            caseStudy: {
              workflow: "尿素供应链学习室从新闻摘要与来源出发，依次查看进口来源统计与采购比例模拟器，再进行测验、术语学习与笔记记录。笔记、测验答案与完成标记保存在当前浏览器中。",
              designIntent: "为了观察进口来源的变化与供应依赖，我将说明商品范围和单位的统计图表，与可调整价格和采购比例的学习模型分开呈现。页面提示，不能仅凭图表断定变化原因，也不能将模型计算值当作实际供需预测。",
              artifactReview: "2026年11月11日对公开网站的功能检查确认，调整采购比例会更新成本与剩余供应量，测验答案、学习笔记和完成标记在刷新后仍会保留。链接中的截图展示了当时的实现状态。",
              limits: "学习记录保存在当前浏览器中，不支持账户同步。引导聊天机器人通过规则查找站内内容。模拟器是简化的学习模型；此次功能检查不代表对外部新闻、统计准确性或学习效果的验证。"
            },
            materials: [
              {"id": "lesson", "label": "尿素供应链学习室（韩语）"},
              {"id": "statistics", "label": "统计与来源说明页面（韩语界面）"},
              {"id": "simulation", "label": "采购比例模拟器（韩语界面）"}
            ],
            note: "这是个人项目的原型，我正在持续完善学习流程与功能。公开网站使用Docklab这一名称。"
          }
        ],
        extraTitle: "其他项目与活动",
        extraOpen: "展开",
        extraClose: "收起",
        extra: [
          { name: "KOTRA公开财务资料分析", meta: "2025.10 – 2025.11 | 大学课程项目", desc: "整理ALIO 2020–2024年公开财务资料，比较财务结构与主要指标变化，并制作报告与演示资料" },
          { name: "KITA报告研读小组", meta: "学习活动", desc: "阅读国际通商议题并准备讨论材料。准备就CPTPP相关报告的国外部分作专题分享，并撰写介绍文字" },
          { name: "汉阳大学人文科学学院学生会", meta: "2023.01 – 2023.07 | 总务部书记", desc: "协助学生会运营，负责会议记录" },
          { name: "汉阳大学教会 周四礼拜合唱志愿服务", meta: "2025.09 – 2025.11", desc: "参加定期礼拜唱诗班" },
          { name: "汉阳大学中央舞蹈社团 Ars Amandi", meta: "2022.03 – 2022.07", desc: "定期练习与演出准备" },
          { name: "咖啡店 ZITTEN 工作", meta: "2022.09 – 2023.05", desc: "接待顾客，整理与管理库存" }
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
        intro: "從貿易與國際議題出發，把問題整理成網頁工具的記錄。",
        labels: {
          materials: "專案資料",
          nextSteps: "發表回饋與後續改善規劃",
          workflow: "專案功能流程",
          designIntent: "設計考量",
          aiUse: "AI應用",
          artifactReview: "專案資料呈現的內容",
          limits: "限制與後續確認",
          report: "查看虛擬企業報告（韓文HTML）",
          question: "核心問題", contribution: "我的核心貢獻",
          period: "時間", type: "型別", status: "狀態",
          problem: "想解決的問題", result: "成果", role: "我的工作", focus: "重點考慮",
          moreOpen: "檢視詳情", moreClose: "收起", link: "檢視專案"
        },
        items: [
          {
            id: "axport",
            name: "AXPORT | 半導體出口決策儀表板",
            question: "在半導體出口中，如何區分法規限制與市場機會進行評估，並傳達判斷所依據的資訊？",
            contribution: "我負責首頁規劃、UI/UX、響應式版面與多語言介面。我改善了報告架構與用語，以區分法規確認與商業可行性評估。我調整了從摘要連結至詳細依據的資訊架構，並標示資料基準日期與尚未確認的資訊，協助使用者理解結果的意義與限制。",
            summary: "彙集半導體出口審查所需資訊的預審儀表板",
            period: "2026.09",
            type: "貿易AX大師課程 團隊專案",
            status: "原型成果",
            problem: "法規、市場性、價格、物流、穩定性等出口審查所需的資訊分散各處，難以一併檢視。",
            result: "將五個領域的摘要、詳細依據與報告匯出串連起來的網頁儀表板（團隊成果）",
            role: [
              "首頁策劃與UI/UX設計",
              "改進頁面結構與資訊配置",
              "多語言頁面製作",
              "PDF報告結構與文案改進",
              "服務介紹與簡報資料製作",
              "響應式版面與Contact Us區塊的資訊配置",
              "分析報告與簡報資料的架構及用語改善"
            ],
            focus: [
              "使用者理解資訊的順序",
              "摘要與依據的連結",
              "區分法規限制與評估分數",
              "標註資料基準日與缺失資訊"
            ],
            caseStudy: {
              designIntent: "首頁透過服務介紹與使用說明，呈現五個檢視領域及使用流程；報告則從摘要連結至詳細依據。資訊架構著重讓使用者區分法規檢視、商業可行性參考分數與資料不足的不同意義。",
              aiUse: "我使用ChatGPT（Codex）與Gemini協助設計及資料相關工作，並運用AI改善首頁、報告與簡報資料的資訊架構與表達。",
              artifactReview: "這份虛擬企業對美出口HTML報告於2026-11-11產出，分析基準日為2026-11-10。報告顯示依據涵蓋比例為56%，狀態為有條件檢視。法規檢視與參考分數分開呈現，缺乏佐證資料的價格及物流項目標示為資料不足。這是團隊成果的報告輸出範例。",
              limits: "部分統計查詢失敗及企業填報值的有效期限等因素，使部分項目仍未評估。參考分數與依據涵蓋比例不代表出口成功機率或判斷準確性。仍需確認統計範圍、基準日期與輸入資料的有效性。"
            },
            note: "分析引擎與整體服務為團隊成果，我的貢獻為上述範圍。"
          },
          {
            id: "hanjeongseon",
            name: "Hanjungsun | 越南市場進入行銷儀表板",
            question: "韓國食品品牌準備進入越南市場時，如何將當地資訊轉化為可執行的行銷計畫？",
            contribution: "我負責HOME的規劃與實作，讓行銷人員能根據當地資訊與準備情況決定下一步行動。我從目標日期回推準備時程，並連結當地活動、新聞與工作進度，協助使用者掌握當日待辦事項與行銷活動進度。我也製作了越南介紹網站與宣傳影片。",
            summary: "以進入越南峴港為假設，彙集當地資訊與行銷準備日程的工作工具，並搭配製作越南介紹網站與宣傳影片",
            period: "2026.10",
            type: "貿易AX大師課程 團隊專案",
            status: "發表版本原型，新聞影響視覺化為後續規劃",
            problem: "當地資訊與行銷活動準備日程分散，難以把握下一步該做什麼。",
            result: "以進入越南峴港為假設，彙整當地資訊與行銷準備時程的儀表板、團隊展示資料，以及越南介紹網站與宣傳影片（團隊專案成果）",
            role: [
              "負責HOME頁面從規劃到實作",
              "在一個頁面整合當地日程、新聞與工作進度",
              "以目標日期為基準倒推準備日程的日曆",
              "改進頁面，使使用者能把握今日任務與進度",
              "調整使用者瀏覽新聞的方式與資訊分類標準",
              "藉助AI實現搜尋與翻譯程式碼，並親自調整頁面",
              "製作越南介紹網站",
              "製作越南宣傳影片"
            ],
            focus: [
              "讓行銷人員能看清下一步行動的資訊配置",
              "區分搜尋結果與已確認的公告",
              "整體儀表板與HOME頁面的一致性"
            ],
            caseStudy: {
              workflow: "團隊儀表板將當地研究連結至時程、內容製作、創作者合作及成效管理。我製作了HOME、越南介紹網站與宣傳影片，同時處理工作介面與面向顧客的內容。",
              designIntent: "HOME彙整當地時程、新聞與準備情況，協助使用者決定下一步行動。我將便於探索的新聞清單與已確認的公告分開，區分資訊探索與判斷依據的確認。",
              aiUse: "我使用Claude Code、Codex、Google Flow與Higgsfield進行程式及資料相關工作，以及網站、宣傳影片的設計與UI/UX工作。我親自修改並確認自己負責的成果。",
              artifactReview: "團隊展示影片的HOME部分呈現行事曆、活動設定與新聞介面，並提供另外製作的越南介紹網站及宣傳影片。",
              limits: "這是以越南市場進入情境為假設的訓練原型。簡報中的工作時間比較為估計值，不代表實測的時間節省或實際市場進入成效。",
              nextSteps: "這項改善尚未實作。發表回饋建議在彙整新聞連結之外，進一步以視覺方式呈現新聞對Hanjungsun進入越南市場的意義。規劃增加機會為綠色、注意為黃色、風險為紅色、依據不足時暫緩判斷為灰色的摘要與篩選。文章及公告的確認狀態將與影響分類分開保留，並提供分類理由與原文供確認。"
            },
            materials: [
              {"id": "brandSite", "label": "越南介紹網站（訓練原型）"},
              {"id": "homeDemo", "label": "HOME展示（團隊影片節錄，韓語）"},
              {"id": "promo", "label": "越南宣傳影片"}
            ],
            note: "這是以假設的市場進入情境製作的訓練原型。整體儀表板為團隊成果，我的貢獻以上述範圍為限，以HOME、越南介紹網站與宣傳影片為主。"
          },
          {
            id: "tradenews",
            name: "新聞裡的貿易學習室（Trade News Room）",
            question: "如何將全球貿易新聞的背景與概念和資料連結起來理解，並將這些理解逐步累積為學習紀錄？",
            contribution: "我規劃了學習方式與網站架構，在AI協助下製作網頁原型，並改善介面與學習流程。",
            summary: "以全球貿易新聞為起點，同時理解概念與資料的學習網站",
            period: "2026",
            type: "個人專案",
            status: "已實現原型，持續完善中",
            problem: "我希望理解真實貿易議題背後的背景與相關概念，並記錄學習內容。",
            result: "貿易新聞瀏覽與主題學習、術語詞典與測驗、與新聞相關的互動模擬器、貿易地圖、儲存在瀏覽器中的個人學習記錄、引導站內學習內容的聊天機器人",
            role: [
              "策劃學習方式與網站結構",
              "在AI輔助下製作網頁原型",
              "改進頁面與學習流程"
            ],
            focus: ["把對國際議題的好奇心具體化為學習工具的過程"],
            caseStudy: {
              workflow: "尿素供應鏈學習室從新聞摘要與來源出發，依序查看進口來源統計與採購比例模擬器，再進行測驗、術語學習與筆記紀錄。筆記、測驗答案與完成標記儲存在目前使用的瀏覽器中。",
              designIntent: "為了觀察進口來源的變化與供應依賴，我將說明商品範圍和單位的統計圖表，與可調整價格及採購比例的學習模型分開呈現。頁面提醒，不能只憑圖表斷定變化原因，也不能將模型計算值當作實際供需預測。",
              artifactReview: "2026年11月11日的公開網站功能檢查確認，調整採購比例會更新成本與剩餘供應量，測驗答案、學習筆記和完成標記在重新整理後仍會保留。連結中的螢幕擷取畫面呈現當時的實作狀態。",
              limits: "學習紀錄儲存在目前使用的瀏覽器中，沒有帳號同步功能。導覽聊天機器人依照規則查找站內內容。模擬器是簡化的學習模型；本次功能檢查不代表對外部新聞、統計準確性或學習成效的驗證。"
            },
            materials: [
              {"id": "lesson", "label": "尿素供應鏈學習室（韓語）"},
              {"id": "statistics", "label": "統計與來源說明頁面（韓語介面）"},
              {"id": "simulation", "label": "採購比例模擬器（韓語介面）"}
            ],
            note: "這是個人專案的原型，我持續調整學習流程並完善功能。公開網站使用Docklab這個名稱。"
          }
        ],
        extraTitle: "其他專案與活動",
        extraOpen: "展開",
        extraClose: "收起",
        extra: [
          { name: "KOTRA公開財務資料分析", meta: "2025.10 – 2025.11 | 大學課程專案", desc: "整理ALIO 2020–2024年公開財務資料，比較財務結構與主要指標變化，並製作報告與簡報資料" },
          { name: "KITA報告研讀小組", meta: "學習活動", desc: "閱讀國際通商議題並準備導讀資料。準備導讀CPTPP相關報告的國外部分，並撰寫介紹文字" },
          { name: "漢陽大學人文科學學院學生會", meta: "2023.01 – 2023.07 | 總務部書記", desc: "協助學生會營運，負責會議記錄" },
          { name: "漢陽大學教會 週四禮拜合唱志願服務", meta: "2025.09 – 2025.11", desc: "參加定期禮拜唱詩班" },
          { name: "漢陽大學中央舞蹈社團 Ars Amandi", meta: "2022.03 – 2022.07", desc: "定期練習與演出準備" },
          { name: "咖啡店 ZITTEN 工作", meta: "2022.09 – 2023.05", desc: "接待顧客，整理與管理庫存" }
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
        intro: "貿易と国際問題から出発した課題を、Webツールとして形にしてきた記録です。",
        labels: {
          materials: "プロジェクト資料",
          nextSteps: "発表のフィードバックと改善計画",
          workflow: "プロジェクトの機能の流れ",
          designIntent: "設計の考え方",
          aiUse: "AIの活用",
          artifactReview: "成果物で確認できる内容",
          limits: "限界と今後の確認事項",
          report: "架空企業の報告書を見る（韓国語HTML）",
          question: "中心となる問い", contribution: "私の主な貢献",
          period: "期間", type: "種類", status: "状態",
          problem: "解決したかった課題", result: "成果物", role: "担当したこと", focus: "大切にした点",
          moreOpen: "詳しく見る", moreClose: "閉じる", link: "プロジェクトを見る"
        },
        items: [
          {
            id: "axport",
            name: "AXPORT | 半導体輸出の意思決定ダッシュボード",
            question: "半導体輸出において、規制による制約と市場の機会をどう区別して検討し、判断の根拠を伝えられるだろうか。",
            contribution: "メインサイトの企画とUI/UX、レスポンシブなレイアウト、多言語画面を担当しました。規制の確認と事業性の評価が区別されるよう、報告書の構成と表現を改善しました。要約から詳細な根拠へつながる情報構造を整え、データの基準日と未確認の情報を表示し、利用者が結果の意味と限界を理解できるようにしました。",
            summary: "半導体輸出を検討する際に必要な情報を集めた事前検討ダッシュボード",
            period: "2026.09",
            type: "貿易AXマスター課程 チームプロジェクト",
            status: "プロトタイプ",
            problem: "規制、市場性、価格、物流、安定性など輸出検討に必要な情報が分散しており、まとめて確認するのが難しい状況でした。",
            result: "5つの領域の要約と詳細な根拠、報告書出力をつないだWebダッシュボード（チームの成果物）",
            role: [
              "メインページの企画とUI/UXデザイン",
              "画面構成と情報配置の改善",
              "多言語画面の作成",
              "PDF報告書の構成と文言の改善",
              "サービス紹介と発表資料の作成",
              "レスポンシブなレイアウトとContact Usの情報配置",
              "分析報告書と発表資料の構成および表現の改善"
            ],
            focus: [
              "ユーザーが情報を理解する順序",
              "要約と根拠のつながり",
              "規制上の制限と評価スコアの区別",
              "データ基準日と欠損情報の表示"
            ],
            caseStudy: {
              designIntent: "ホームページではサービス紹介と利用方法を通じて5つの検討領域と利用の流れを案内し、報告書は要約から詳細な根拠へ進める構成にしました。規制の検討、事業性の参考スコア、資料不足の意味を区別して読める情報構成を意識した作業です。",
              aiUse: "ChatGPT（Codex）とGeminiをデザインとデータ関連の作業に活用しました。ホームページ、報告書、発表資料の情報構成と表現の改善にAIの助けを借りました。",
              artifactReview: "この架空企業の米国輸出HTML報告書は2026-11-11に作成され、分析基準日は2026-11-10です。根拠の反映率56%と条件付き検討という状態が示されています。規制の検討は参考スコアと分けられ、根拠資料のない価格と物流の項目は資料不足と表示されます。チーム成果物の出力例です。",
              limits: "一部の統計照会の失敗や企業記載値の有効期間などにより、未評価の項目が残っています。参考スコアと根拠の反映率は輸出成功確率や判断の正確性を示しません。統計の対象範囲、基準日、入力資料の有効性は引き続き確認が必要です。"
            },
            note: "分析エンジンとサービス全体はチームの成果物であり、私の貢献は上記の範囲です。"
          },
          {
            id: "hanjeongseon",
            name: "Hanjungsun | ベトナム進出マーケティングダッシュボード",
            question: "韓国の食品ブランドがベトナム進出を準備する際、現地情報をどう実行可能なマーケティング計画につなげられるだろうか。",
            contribution: "マーケティング担当者が現地情報と準備状況をもとに次の行動を決められるよう、HOMEを企画し実装しました。目標日から準備日程を逆算し、現地の予定、ニュース、業務の進捗をつなげ、今日のタスクとキャンペーンの進捗状況を把握できるようにしました。ベトナム紹介サイトと広報動画も制作しました。",
            summary: "ベトナムのダナン進出を想定し、現地情報とマーケティング準備スケジュールを集めた業務ツール。ベトナム紹介サイトと広報動画の制作を含みます",
            period: "2026.10",
            type: "貿易AXマスター課程 チームプロジェクト",
            status: "発表時のプロトタイプ、ニュース影響の可視化は改善計画",
            problem: "現地情報とキャンペーン準備のスケジュールが分散し、次にやるべきことを把握しにくい状況でした。",
            result: "ベトナムのダナン進出を想定し、現地情報とマーケティング準備日程をまとめたダッシュボード、チームのデモ資料、ベトナム紹介サイトと広報動画（チームプロジェクトの成果物）",
            role: [
              "HOME画面の企画から実装までを担当",
              "現地の予定、ニュース、業務の進捗を一画面に整理",
              "目標日から逆算して準備スケジュールを組むカレンダーを構成",
              "今日のタスクと進捗状況を把握できるよう画面を改善",
              "ニュースの探し方と情報の区分基準を調整",
              "AIを活用して検索と翻訳のコードを実装し、画面を自分で調整",
              "ベトナム紹介サイトの制作",
              "ベトナム広報動画の制作"
            ],
            focus: [
              "マーケターが次の行動を把握できる情報配置",
              "検索結果と確認済みのお知らせの区別",
              "ダッシュボード全体とHOME画面の一貫性"
            ],
            caseStudy: {
              workflow: "チームのダッシュボードは現地調査を日程、コンテンツ制作、クリエイターとの協業、成果管理につなげる構成です。私はHOME、ベトナム紹介サイト、広報動画を制作し、業務画面と顧客向けのコンテンツの両方に取り組みました。",
              designIntent: "HOMEでは現地の予定、ニュース、準備状況をまとめ、次の行動を把握できるようにしました。探しやすい記事一覧と確認済みのお知らせを分け、情報を探す過程と判断の根拠を確認する過程を区別しました。",
              aiUse: "Claude Code、Codex、Google Flow、Higgsfieldをコードとデータ関連の作業、サイトと広報動画のデザインおよびUI/UXに活用しました。担当した成果物は自分で修正し確認しました。",
              artifactReview: "チームのデモ動画のHOME部分では、カレンダー、イベント設定、ニュース画面を確認できます。別途制作したベトナム紹介サイトと広報動画も掲載しています。",
              limits: "ベトナム市場への進出を想定した教育用プロトタイプです。発表資料の作業時間比較は推定値であり、実測した時間短縮や実際の市場進出の成果を示すものではありません。",
              nextSteps: "この改善はまだ実装していません。発表ではニュースのリンクを集めるだけでなく、Hanjungsunのベトナム進出にとってどのような意味があるかを視覚的に示してほしいという意見を受けました。機会は緑、注意は黄、リスクは赤、根拠不足による判断保留は灰色とする要約と絞り込みを計画しています。記事やお知らせの確認状態は影響分類と分けて保持し、分類理由と原文を確認できるようにする予定です。"
            },
            materials: [
              {"id": "brandSite", "label": "ベトナム紹介サイト（教育用プロトタイプ）"},
              {"id": "homeDemo", "label": "HOMEデモ（チーム動画の抜粋、韓国語）"},
              {"id": "promo", "label": "ベトナム広報動画"}
            ],
            note: "市場進出を想定した教育課程のプロトタイプです。ダッシュボード全体はチームの成果物であり、私の貢献はHOME、ベトナム紹介サイト、広報動画を中心とする上記の範囲です。"
          },
          {
            id: "tradenews",
            name: "ニュースで学ぶ貿易教室 (Trade News Room)",
            question: "世界の貿易ニュースの背景と概念をデータと結びつけて理解し、その理解を学習記録としてどう積み重ねていけるだろうか。",
            contribution: "学習方法とサイト構成を企画し、AIの助けを借りてWebプロトタイプを制作しました。画面と学習の流れを改善しました。",
            summary: "世界の貿易ニュースを出発点に、概念とデータを一緒に理解する学習Webサイト",
            period: "2026",
            type: "個人プロジェクト",
            status: "プロトタイプを実装、継続して発展中",
            problem: "実際の貿易問題の背景と関連する概念を理解し、学んだ内容を記録したいと考えました。",
            result: "貿易ニュースの閲覧とテーマ別学習、用語集とクイズ、ニュースと連動したインタラクティブシミュレーター、貿易マップ、ブラウザに保存される個人の学習記録、サイト内の学習内容を案内するチャットボット",
            role: [
              "学習方法とサイト構成の企画",
              "AIの助けを借りてWebプロトタイプを制作",
              "画面と学習の流れを改善"
            ],
            focus: ["国際問題への好奇心を学習ツールとして具体化する過程"],
            caseStudy: {
              workflow: "尿素の供給網を扱う学習室では、ニュースの要約と出典から始め、輸入先の統計と調達比率シミュレーターを確認した後、クイズ、用語の確認、学習メモへと進みます。メモ、クイズの回答、完了マークは現在のブラウザーに保存されます。",
              designIntent: "輸入先の変化と供給依存度を考えるため、品目の範囲と単位を示す統計グラフと、価格や調達比率を変える学習用モデルを分けて配置しました。グラフだけで変化の原因を断定せず、モデルの計算値を実際の需給予測として扱わないよう案内しています。",
              artifactReview: "2026年11月11日の公開サイトの動作確認で、調達比率を変えると費用と残存供給量が更新され、クイズの回答、学習メモ、完了マークが再読み込み後も保持されることを確認しました。リンク先の画面は当時の実装状態を示しています。",
              limits: "学習記録はアカウント同期なしで現在のブラウザーに保存されます。案内チャットボットは規則に従ってサイト内の内容を検索します。シミュレーターは簡略化した学習モデルであり、今回の動作確認は外部ニュースや統計の正確性、学習効果の検証を意味しません。"
            },
            materials: [
              {"id": "lesson", "label": "尿素の供給網を学ぶ学習室（韓国語）"},
              {"id": "statistics", "label": "統計と出典の説明画面（韓国語UI）"},
              {"id": "simulation", "label": "調達比率シミュレーター（韓国語UI）"}
            ],
            note: "個人プロジェクトのプロトタイプとして、学習の流れと機能を継続して改善しています。公開サイトではDocklabという名前を使っています。"
          }
        ],
        extraTitle: "その他のプロジェクトと活動",
        extraOpen: "開く",
        extraClose: "閉じる",
        extra: [
          { name: "KOTRA 公開財務資料の分析", meta: "2025.10 – 2025.11 | 大学の授業プロジェクト", desc: "ALIOの2020–2024年の公開財務資料を整理し、財務構造と主要指標の変化を比較して報告書と発表資料にまとめた" },
          { name: "KITA 報告書スタディ", meta: "学習活動", desc: "国際通商の問題を読み、発表資料を準備。CPTPP関連報告書の海外パートの発表準備と紹介文の作成" },
          { name: "漢陽大学 人文科学大学 学生会", meta: "2023.01 – 2023.07 | 総務部 書記", desc: "学生会の運営サポートと議事録の作成" },
          { name: "漢陽大学教会 木曜チャペル 合唱ボランティア", meta: "2025.09 – 2025.11", desc: "定期チャペルの聖歌隊活動" },
          { name: "漢陽大学 中央ダンスサークル Ars Amandi", meta: "2022.03 – 2022.07", desc: "定期練習と公演の準備" },
          { name: "カフェ ZITTEN 勤務", meta: "2022.09 – 2023.05", desc: "接客、在庫の整理と管理" }
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
