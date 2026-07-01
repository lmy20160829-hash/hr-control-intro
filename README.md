# 운영통제형 HR 자동화 · 경영관리 토탈 솔루션 — 소개 사이트 (React)

`../HR자동화_과제제안서_보완판.md` 의 핵심을 한 페이지로 소개하는 **React(Vite) 랜딩 사이트**.
회사명은 표기하지 않고 "코스닥 상장사·500인+" 일반 관점으로 구성했다.

> **프레이밍**: 샘플·편의기능이 아니라 **토탈 솔루션**. 검토한 HR 자동화 TOP 15 전 과제를
> 상용 표준(더존 GSP 3.0·ONE AI 등, *Buy*) 위에 자사 통제·판단 레이어(*Make*)로 얹어
> 하나의 솔루션으로 구현한다는 관점을 전면에 배치했다.

## 실행
```bash
cd intro-site
npm install
npm run dev          # http://localhost:5173  (개발 서버, 자동 새로고침)
```
정적 빌드:
```bash
npm run build        # dist/ 생성
npm run preview      # http://localhost:4173  (빌드 결과 미리보기)
```

## 구성 섹션
Hero → **2계층 전략(Make+Buy) & 플랫폼 기둥** → 왜 지금(2026 규제·비용 타임라인) →
핵심 5개 모듈 → **전체 솔루션 카탈로그(7대 도메인·31개 모듈)** →
**Make vs Buy · 더존 AX 포지셔닝** → **벤치마크(오픈소스·상용)** → 우선과제 TOP 3 →
7대 설계 원칙 → 8계층 아키텍처 → **경영진 의사결정 코크핏** → 도입 로드맵(0~180일) →
ROI 추정 → 차별화(Why me) → 마무리 CTA.

- 헤더/마무리의 **"실동작 데모"** 버튼은 `http://localhost:8080`(별도의 `../app` PoC 앱)로 연결된다.
- 카탈로그 태그(우선/표준/확장)는 미구현이 아니라 **구현 우선순위(단계)** 를 뜻한다.
- 콘텐츠 데이터는 `src/data.js`에 분리, UI는 `src/App.jsx`, 스타일은 `src/styles.css`.

## 스택
Vite 5 · React 18 · 순수 CSS · Pretendard(CDN) · 외부 UI 라이브러리 없음.
```
intro-site/
├─ index.html · vite.config.js · package.json
└─ src/ (main.jsx · App.jsx · data.js · styles.css)
```
