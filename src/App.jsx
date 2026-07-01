import { useState, useEffect } from 'react'
import {
  HERO, STRATEGY, PILLARS, TIMELINE, MODULES, CATALOG, CATALOG_LEGEND,
  DOUZONE, MAKEBUY, BENCHMARK, PRIORITIES, PRINCIPLES, ARCHITECTURE,
  COCKPIT, ROADMAP, ROI, DIFF, NAV,
} from './data.js'

const DEMO_URL = 'http://localhost:8080'

/* ---------- 공통 섹션 래퍼 ---------- */
function Section({ id, alt, eyebrow, title, desc, children }) {
  return (
    <section id={id} className={`section${alt ? ' section--alt' : ''}`}>
      <div className="container">
        <header className="section-head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="section-title">{title}</h2>
          {desc && <p className="section-desc">{desc}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}

/* ---------- 네비게이션 ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav${scrolled ? ' nav--solid' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="brand">
          <span className="brand__mark">HR</span>
          <span className="brand__txt">HR 운영통제 토탈 솔루션</span>
        </a>
        <button className="nav__toggle" onClick={() => setOpen(v => !v)} aria-label="메뉴">☰</button>
        <div className={`nav__links${open ? ' is-open' : ''}`} onClick={() => setOpen(false)}>
          {NAV.map(n => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
          <a className="nav__cta" href={DEMO_URL} target="_blank" rel="noreferrer">실동작 데모 ↗</a>
        </div>
      </div>
    </nav>
  )
}

/* ---------- 히어로 ---------- */
function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero__glow" aria-hidden />
      <div className="container hero__inner">
        <span className="hero__eyebrow">{HERO.eyebrow}</span>
        <h1 className="hero__title">
          {HERO.title.map((t, i) => <span key={i}>{t}</span>)}
        </h1>
        <p className="hero__desc">{HERO.desc}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#catalog">전체 솔루션 범위 보기</a>
          <a className="btn btn--ghost" href={DEMO_URL} target="_blank" rel="noreferrer">
            실동작 데모 열기 ↗
          </a>
        </div>
        <div className="hero__stats">
          {HERO.stats.map(s => (
            <div key={s.k} className="stat">
              <div className="stat__k">{s.k}</div>
              <div className="stat__v">{s.v}</div>
              <div className="stat__s">{s.s}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

/* ---------- 전략: 2계층(Make + Buy) + 플랫폼 기둥 ---------- */
function Strategy() {
  return (
    <Section
      id="strategy"
      eyebrow="TOTAL SOLUTION · 2-LAYER STRATEGY"
      title="개별 편의기능의 나열이 아니라, 하나의 토탈 솔루션"
      desc={STRATEGY.intro}
    >
      <div className="layers">
        {STRATEGY.layers.map(l => (
          <article key={l.key} className={`layer layer--${l.key}`} style={{ '--c': l.color }}>
            <span className="layer__tag">{l.tag}</span>
            <h3 className="layer__title">{l.title}</h3>
            <p className="layer__desc">{l.desc}</p>
            <ul className="layer__list">
              {l.items.map(it => <li key={it}>{it}</li>)}
            </ul>
          </article>
        ))}
        <div className="layers__plus" aria-hidden>＋</div>
      </div>
      <p className="strategy__note">{STRATEGY.note}</p>

      <div className="pillars">
        {PILLARS.map((p, i) => (
          <div key={p.title} className="pillar">
            <span className="pillar__icon">{p.icon}</span>
            <div className="pillar__meta">
              <b>{p.title}</b>
              <span>{p.desc}</span>
            </div>
            {i < PILLARS.length - 1 && <span className="pillar__plus" aria-hidden>＋</span>}
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ---------- 왜 지금 (타임라인) ---------- */
function Why() {
  return (
    <Section
      id="why" alt
      eyebrow="WHY NOW · 2026"
      title="규제와 비용이 동시에 조여드는 해"
      desc="이 국면에서 경영진이 지갑을 여는 곳은 “편리한 HR”이 아니라 “리스크를 줄이고 인건비를 통제하는 HR”입니다."
    >
      <ol className="timeline">
        {TIMELINE.map(t => (
          <li key={t.date} className={`tl tl--${t.tone}`}>
            <div className="tl__date">{t.date}</div>
            <div className="tl__body">
              <span className={`tag tag--${t.tone}`}>{t.tag}</span>
              <p>{t.event}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

/* ---------- 핵심 5개 모듈 ---------- */
function Modules() {
  return (
    <Section
      id="modules"
      eyebrow="CORE MODULES · 실동작 검증"
      title="정확성·통제가 가장 중요한 운영통제 핵심 5개"
      desc="전체 솔루션 중에서도 오류·리스크·규제 노출이 가장 큰 5개를 우선 구현·검증했습니다. As-Is의 통증을 To-Be 운영 통제로 전환합니다."
    >
      <div className="grid grid--modules">
        {MODULES.map(m => (
          <article key={m.id} className="mod" style={{ '--accent': m.accent }}>
            <div className="mod__top">
              <span className="mod__icon">{m.icon}</span>
              <span className="mod__no">{m.no}</span>
              <span className="mod__poc">{m.poc}</span>
            </div>
            <h3 className="mod__title">{m.title}</h3>
            <p className="mod__lead">{m.lead}</p>
            <div className="mod__ab">
              <p><b className="asis">As-Is</b> {m.asis}</p>
              <p><b className="tobe">To-Be</b> {m.tobe}</p>
            </div>
            <div className="mod__kpi">
              {m.kpi.map(k => <span key={k} className="chip">{k}</span>)}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

/* ---------- 전체 솔루션 카탈로그 ---------- */
const TAG_LABEL = { p1: '우선 구현', p2: '표준 구현', p3: '확장 구현' }

function Catalog() {
  const total = CATALOG.reduce((n, d) => n + d.items.length, 0)
  return (
    <Section
      id="catalog" alt
      eyebrow="FULL SOLUTION SCOPE"
      title={`검토한 전 과제를 하나의 솔루션으로 — 7대 도메인 ${total}개 모듈`}
      desc="샘플·PoC가 아니라 토탈 솔루션입니다. HR 자동화 TOP 15 전 과제와 협업·재무세무·내부통제·연계·경영 코크핏까지, 검토한 모든 것을 같은 계정·권한·감사·룰엔진 위에 하나의 솔루션으로 구현합니다. 아래 태그는 미구현이 아니라 구현 우선순위(단계)입니다."
    >
      <div className="legend">
        {CATALOG_LEGEND.map(l => (
          <span key={l.tag} className="legend__item">
            <i className={`dot dot--${l.tag}`} />{l.label}
          </span>
        ))}
      </div>
      <div className="cat">
        {CATALOG.map(d => (
          <article key={d.key} className="cat__group" style={{ '--c': d.color }}>
            <header className="cat__head">
              <span className="cat__icon">{d.icon}</span>
              <div>
                <h3 className="cat__title">{d.title}</h3>
                <p className="cat__sub">{d.sub}</p>
              </div>
              <span className="cat__count">{d.items.length}</span>
            </header>
            <ul className="cat__list">
              {d.items.map(it => (
                <li key={it.name} className="cat__item">
                  <span className={`badge badge--${it.tag}`}>{TAG_LABEL[it.tag]}</span>
                  <div className="cat__itxt">
                    <b>{it.name}</b>
                    <span>{it.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

/* ---------- Make vs Buy (더존 포지셔닝) ---------- */
function MakeBuy() {
  return (
    <Section
      id="makebuy"
      eyebrow="MAKE vs BUY · 더존 AX 포지셔닝"
      title="“상용이 이미 있는데 왜 직접 만드나”에 대한 답"
      desc="상용 AI 플랫폼(더존 등)을 경쟁이 아니라 토대로 씁니다. 표준화·범용은 Buy(상용에 맡김), 자사 고유의 통제·판단·경영 시나리오는 Make(내가 오너). 이 경계가 곧 “판단의 소유권”입니다."
    >
      <div className="douzone">
        {DOUZONE.map(d => (
          <div key={d.name} className="dz">
            <b className="dz__name">{d.name}</b>
            <span className="dz__role">{d.role}</span>
            <div className="dz__mine"><span className="dz__mine-tag">내가 소유(Make)</span>{d.mine}</div>
          </div>
        ))}
      </div>

      <div className="mb">
        <div className="mb__row mb__row--head">
          <div>영역</div>
          <div className="mb__buy-h">Buy · 상용 플랫폼</div>
          <div className="mb__make-h">Make · 자사 핏(내 오너십)</div>
          <div>판단 근거</div>
        </div>
        {MAKEBUY.map(r => (
          <div key={r.area} className="mb__row">
            <div className="mb__area">{r.area}</div>
            <div className="mb__buy">{r.buy}</div>
            <div className="mb__make">{r.make}</div>
            <div className="mb__basis">{r.basis}</div>
          </div>
        ))}
      </div>
      <blockquote className="mb__quote">
        “상용 AI 플랫폼은 ‘표준’을 깔고, 저는 그 위에 ‘자사만의 통제·판단·경영 시나리오’를 얹습니다.
        더존을 쓰면 그 위에 얹어 중복투자를 없애고, 안 쓰면 종속되지 않도록 경계를 미리 소유합니다.
        어느 쪽이든 자사가 잃지 않는 것은 <b>‘판단의 소유권’</b>입니다.”
      </blockquote>
    </Section>
  )
}

/* ---------- 벤치마크 ---------- */
function Benchmark() {
  return (
    <Section
      id="benchmark" alt
      eyebrow="BENCHMARK · 오픈소스 · 상용"
      title="검증된 오픈소스와 상용을 조합해 빠르고 견고하게"
      desc="바닥부터 만들지 않습니다. 성숙한 오픈소스(룰엔진·OCR·RAG·BI)와 국내 상용(더존·flex·비즈플레이 등)을 도입·연동하고, 그 위에 자사 통제·판단 레이어를 얹습니다."
    >
      <div className="bench">
        <div className="bench__col">
          <h3 className="bench__h">오픈소스 (도입·연동·구조 참고)</h3>
          <div className="bench__grid">
            {BENCHMARK.oss.map(o => (
              <div key={o.name} className="bcard">
                <div className="bcard__top"><b>{o.name}</b><span className="bcard__tag">{o.tag}</span></div>
                <p className="bcard__role">{o.role}</p>
                <span className="bcard__link">{o.link}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bench__col">
          <h3 className="bench__h">상용 벤치마크 (한국 500인+ 맥락)</h3>
          <div className="bench__grid">
            {BENCHMARK.comm.map(c => (
              <div key={c.name} className="bcard bcard--comm">
                <b>{c.name}</b>
                <p className="bcard__role">{c.role}</p>
                <span className="bcard__note">{c.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="roi__note">※ {BENCHMARK.note}</p>
    </Section>
  )
}

/* ---------- 우선과제 TOP 3 ---------- */
function Priorities() {
  return (
    <Section
      id="priorities"
      eyebrow="TOP 3 PRIORITY"
      title="가장 먼저 착수할 3개 과제"
      desc="현업효용·오류감소·경영보고가치·보안적합·Quick Win·경력적합을 종합한 우선순위입니다. 90일 내 측정 가능한 성과."
    >
      <div className="grid grid--3">
        {PRIORITIES.map(p => (
          <article key={p.rank} className="prio">
            <div className="prio__rank">{p.rank}</div>
            <h3 className="prio__title">{p.title}</h3>
            <p className="prio__why">{p.why}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

/* ---------- 설계 원칙 ---------- */
function Principles() {
  return (
    <Section
      id="principles" alt
      eyebrow="DESIGN PRINCIPLES"
      title="타협하지 않는 7가지 설계 원칙"
      desc="정확성 · 통제 · 개인정보 보호 · 법령 상시반영 · 경영 리포팅을 동시에 성립시키는 전제 조건."
    >
      <div className="grid grid--principles">
        {PRINCIPLES.map(p => (
          <article key={p.title} className="prin">
            <span className="prin__icon">{p.icon}</span>
            <h3 className="prin__title">{p.title}</h3>
            <p className="prin__desc">{p.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

/* ---------- 아키텍처 ---------- */
function Architecture() {
  return (
    <Section
      id="architecture"
      eyebrow="ARCHITECTURE"
      title="8계층 · 플랫폼 독립 아키텍처"
      desc="규정은 룰엔진 데이터로 분리, 증빙은 자동초안+승인, 대외비는 비식별/온프레, 통제·감사는 전 계층 관통. ⑥ 원천은 교체 가능한 Buy, ④⑤⑦은 자사가 소유하는 Make."
    >
      <div className="arch">
        {ARCHITECTURE.map(l => (
          <div key={l.n} className="arch__layer" style={{ '--c': l.c }}>
            <span className="arch__n">{l.n}</span>
            <div className="arch__meta">
              <b>{l.title}</b>
              <span>{l.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ---------- 경영진 의사결정 코크핏 ---------- */
function Cockpit() {
  return (
    <Section
      id="cockpit" alt
      eyebrow="EXECUTIVE COCKPIT"
      title="회의 없이 핵심을 즉시 파악하는 경영 코크핏"
      desc="People Cost Board와 컴플라이언스 모니터링을 축으로, 질의응답·원인분석·브리핑·체크리스트를 자동화합니다. 대외비는 비식별/온프레(Bedrock·Vertex) 처리."
    >
      <div className="grid grid--cockpit">
        {COCKPIT.map(c => (
          <article key={c.title} className="cpit">
            <span className="cpit__icon">{c.icon}</span>
            <h3 className="cpit__title">{c.title}</h3>
            <p className="cpit__desc">{c.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

/* ---------- 로드맵 ---------- */
function Roadmap() {
  return (
    <Section
      id="roadmap"
      eyebrow="ROADMAP · 0~180일"
      title="90일 내 측정 가능한 성과, 180일 내 토탈 솔루션 정착"
    >
      <div className="road">
        {ROADMAP.map((r, i) => (
          <article key={r.period} className="road__step">
            <div className="road__mark"><span>{i + 1}</span></div>
            <div className="road__card">
              <div className="road__period">{r.period}</div>
              <h3 className="road__name">{r.name}</h3>
              <p className="road__detail">{r.detail}</p>
              <p className="road__out"><b>산출물</b> {r.out}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

/* ---------- ROI ---------- */
function RoiSection() {
  return (
    <Section
      id="roi" alt
      eyebrow="ROI · 효과 추정"
      title="오류·리스크 감소와 의사결정 속도로 프레이밍"
      desc="500인 기준 [가정] — 실제 값은 진단(0~30일)에서 확정. 산정식과 3개 시나리오를 함께 제시해 사후 검증 가능."
    >
      <div className="roi">
        <div className="roi__row roi__row--head">
          <div>효과 영역</div><div>보수적</div><div>기준</div><div>공격적</div>
        </div>
        {ROI.map(r => (
          <div key={r.area} className="roi__row">
            <div className="roi__area">{r.area}</div>
            <div>{r.c}</div>
            <div className="roi__base">{r.b}</div>
            <div className="roi__agg">{r.a}</div>
          </div>
        ))}
      </div>
      <p className="roi__note">
        ※ ROI는 “절감 인력”이 아니라 <b>오류·리스크 감소 + 의사결정 속도</b>로 프레이밍한다(감원 명분화 시 저항).
      </p>
    </Section>
  )
}

/* ---------- 차별화 ---------- */
function Diff() {
  return (
    <Section
      id="diff"
      eyebrow="WHY ME"
      title="HR × 회계·세무·공시·ERP의 교집합"
      desc="이 솔루션의 과제들은 인사 도메인 지식에 정확성·통제·정합성을 더할 수 있는 사람의 정중앙에 있습니다."
    >
      <div className="grid grid--3">
        {DIFF.map(d => (
          <article key={d.q} className="qa">
            <h3 className="qa__q">{d.q}</h3>
            <p className="qa__a">{d.a}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

/* ---------- 마무리 CTA ---------- */
function ClosingCTA() {
  return (
    <section className="closing">
      <div className="container closing__inner">
        <span className="hero__eyebrow">한 문장 메시지</span>
        <blockquote className="closing__quote">
          “2026년은 인건비는 오르고 규제는 강해지는 해입니다. ‘편리한 HR’이 아니라
          ‘오류·리스크·인건비를 통제하는 HR 운영 시스템’을 마감·감사·공시가 요구하는
          정확성 기준으로 설계·주도하고, 상용 표준 위에 자사 통제·판단 레이어를 얹어
          검토한 모든 것을 하나의 토탈 솔루션으로 구현하겠습니다.”
        </blockquote>
        <div className="hero__cta">
          <a className="btn btn--primary" href={DEMO_URL} target="_blank" rel="noreferrer">
            실동작 데모 열기 ↗
          </a>
          <a className="btn btn--ghost" href="#top">맨 위로</a>
        </div>
      </div>
    </section>
  )
}

/* ---------- 푸터 ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__title">운영통제형 HR 자동화 경영관리 토탈 솔루션 · 소개</p>
        <p className="footer__meta">
          기준일 2026-07-01 · 확정 수치는 출처 명기, 불확실 항목은 <code>[가정]</code> 표기 ·
          모든 데모 데이터는 가상(합성)
        </p>
        <p className="footer__src">
          출처: 국민연금법 · 최저임금 고시 · AI 기본법 · 개정 개인정보보호법 · 국세청 연말정산 ·
          더존 GSP 3.0/ONE AI 등 정부/벤더 공식 1차 출처 교차검증 (상세 URL은 제안서 부록 A)
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <Strategy />
        <Why />
        <Modules />
        <Catalog />
        <MakeBuy />
        <Benchmark />
        <Priorities />
        <Principles />
        <Architecture />
        <Cockpit />
        <Roadmap />
        <RoiSection />
        <Diff />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
