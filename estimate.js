// ===== Mobile Menu =====
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');
if (mobileMenu) {
    mobileMenu.addEventListener('click', () => navLinks.classList.toggle('active'));
}

// ===== Service Data with Tiers =====
const serviceConfig = {
    '카페활성화': {
        tiers: [
            { name: '소규모', price: 330000, desc: '게시글 100개 + 댓글 100개' },
            { name: '중규모', price: 550000, desc: '게시글 200개 + 댓글 200개' },
            { name: '대규모', price: 990000, desc: '게시글 400개 + 댓글 400개 + 추가 보너스' }
        ],
        workItems: [
            '네이버 카페 게시글 작성 (실제 활동 계정)',
            '네이버 카페 댓글 작성',
            '카페 상위노출 키워드 세팅',
            '일일 작업 현황 리포트 제공',
            '작업 완료 후 결과보고서 제공'
        ]
    },
    '블로그체험단': {
        tiers: [
            { name: '소규모', price: 500000, desc: '체험단 10명 모집' },
            { name: '중규모', price: 800000, desc: '체험단 20명 모집 + 키워드 최적화' },
            { name: '대규모', price: 1500000, desc: '체험단 40명 + 키워드 최적화 + 상위노출 보장' }
        ],
        workItems: [
            '체험단 모집 및 선정',
            '체험 가이드라인 제작 배포',
            '키워드 선정 및 SEO 최적화',
            '포스팅 품질 검수',
            '상위노출 현황 모니터링'
        ]
    },
    '블로그대행': {
        tiers: [
            { name: '소규모', price: 400000, desc: '월 6건 포스팅' },
            { name: '중규모', price: 600000, desc: '월 12건 포스팅 + SEO 최적화' },
            { name: '대규모', price: 1000000, desc: '월 20건 + SEO + 상위노출 관리' }
        ],
        workItems: [
            '타겟 키워드 분석 및 선정',
            '고품질 블로그 콘텐츠 제작',
            'SEO 최적화 포스팅',
            '이미지/인포그래픽 제작',
            '월간 성과 리포트 제공'
        ]
    },
    '유튜브대행': {
        tiers: [
            { name: '소규모', price: 800000, desc: '월 4건 영상 + 채널 관리' },
            { name: '중규모', price: 1500000, desc: '월 8건 영상 + 구독자 활성화' },
            { name: '대규모', price: 3000000, desc: '월 12건 + 구독자 활성화 + 광고 운영' }
        ],
        workItems: [
            '채널 컨셉 기획',
            '영상 촬영 및 편집',
            '썸네일 및 제목 최적화',
            '구독자/조회수 활성화',
            '유튜브 광고 세팅 (대규모)'
        ]
    },
    '인스타대행': {
        tiers: [
            { name: '소규모', price: 400000, desc: '월 12건 게시물 + 피드 관리' },
            { name: '중규모', price: 700000, desc: '월 20건 + 팔로워 활성화' },
            { name: '대규모', price: 1200000, desc: '월 30건 + 릴스 + 팔로워 + 광고' }
        ],
        workItems: [
            '피드 디자인 및 콘텐츠 기획',
            '해시태그 전략 수립',
            '팔로워 활성화 작업',
            '릴스/스토리 제작 (중규모 이상)',
            'DM 응대 매뉴얼 제공'
        ]
    },
    '롱폼제작': {
        tiers: [
            { name: '소규모', price: 1000000, desc: '3분 이내 기본 촬영/편집' },
            { name: '중규모', price: 2000000, desc: '5분 이내 + 시나리오 + CG' },
            { name: '대규모', price: 4000000, desc: '10분 이내 + 프리미엄 촬영 + 배우 섭외' }
        ],
        workItems: [
            '기획 및 시나리오 작성',
            '전문 장비 촬영',
            '편집 및 CG/모션그래픽',
            '자막 및 BGM 삽입',
            '수정 2회 포함'
        ]
    },
    '숏폼제작': {
        tiers: [
            { name: '소규모', price: 300000, desc: '월 5건 숏폼' },
            { name: '중규모', price: 500000, desc: '월 10건 + 트렌드 편집' },
            { name: '대규모', price: 900000, desc: '월 20건 + 트렌드 + 바이럴 전략' }
        ],
        workItems: [
            '트렌드 분석 및 기획',
            '릴스/숏츠/틱톡 최적화 편집',
            '자막 및 효과 삽입',
            '해시태그/음원 전략',
            '성과 분석 리포트'
        ]
    },
    '사이트제작': {
        tiers: [
            { name: '소규모', price: 1500000, desc: '랜딩페이지 1페이지' },
            { name: '중규모', price: 3000000, desc: '5페이지 반응형 웹사이트' },
            { name: '대규모', price: 6000000, desc: '쇼핑몰/다기능 웹사이트 + 관리자 패널' }
        ],
        workItems: [
            '디자인 시안 제작 (2안)',
            '반응형 퍼블리싱',
            'SEO 기본 세팅',
            'SSL 보안 인증서 설치',
            '1개월 무료 유지보수'
        ]
    },
    '언론홍보': {
        tiers: [
            { name: '소규모', price: 500000, desc: '기사 5건 배포' },
            { name: '중규모', price: 1000000, desc: '기사 10건 + 보도자료 작성' },
            { name: '대규모', price: 2000000, desc: '기사 20건 + 보도자료 + 주요 언론사 타겟' }
        ],
        workItems: [
            '보도자료 기획 및 작성',
            '언론사 배포 리스트 선정',
            '기사 송출 및 모니터링',
            '포털 검색 노출 확인',
            '클리핑 리포트 제공'
        ]
    }
};

// ===== Render Service Tier Cards =====
function renderServiceTiers() {
    const container = document.getElementById('serviceTierList');
    let html = '';

    for (const [serviceName, config] of Object.entries(serviceConfig)) {
        html += `
        <div class="service-tier-card" data-service="${serviceName}">
            <div class="tier-card-header" onclick="toggleTierCard(this)">
                <div class="tier-check-wrap">
                    <input type="checkbox" class="service-main-check" data-service="${serviceName}" id="svc_${serviceName}">
                    <label for="svc_${serviceName}" class="tier-service-name">${serviceName}</label>
                </div>
                <span class="tier-toggle-icon">&#9662;</span>
            </div>
            <div class="tier-card-body">
                <div class="tier-options">
                    ${config.tiers.map((tier, idx) => `
                        <label class="tier-option">
                            <input type="radio" name="tier_${serviceName}" value="${idx}" data-price="${tier.price}" data-service="${serviceName}">
                            <div class="tier-option-card">
                                <div class="tier-option-header">
                                    <span class="tier-name">${tier.name}</span>
                                    <span class="tier-price">${tier.price.toLocaleString()}원</span>
                                </div>
                                <p class="tier-desc">${tier.desc}</p>
                            </div>
                        </label>
                    `).join('')}
                </div>
                <div class="tier-work-items">
                    <h4>작업 사항</h4>
                    <ul>
                        ${config.workItems.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>`;
    }

    container.innerHTML = html;

    // Bind events
    document.querySelectorAll('.service-main-check').forEach(cb => {
        cb.addEventListener('change', function () {
            const card = this.closest('.service-tier-card');
            if (this.checked) {
                card.classList.add('active');
                // Auto-select first tier if none selected
                const radios = card.querySelectorAll('input[type="radio"]');
                const anyChecked = Array.from(radios).some(r => r.checked);
                if (!anyChecked && radios.length) radios[0].checked = true;
            } else {
                card.classList.remove('active');
                card.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
            }
            updateEstimate();
        });
    });

    document.querySelectorAll('.tier-option input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function () {
            const card = this.closest('.service-tier-card');
            const mainCheck = card.querySelector('.service-main-check');
            if (!mainCheck.checked) {
                mainCheck.checked = true;
                card.classList.add('active');
            }
            updateEstimate();
        });
    });
}

function toggleTierCard(header) {
    const card = header.closest('.service-tier-card');
    card.classList.toggle('expanded');
}

// ===== Industry Radar Data =====
const industryRadarData = {
    '뷰티/미용': { labels: ['온라인 노출', '고객 유입', '브랜드 신뢰도', '전환율', '재방문율'], before: [25, 20, 30, 15, 20], after: [90, 85, 88, 75, 80] },
    '맛집/요식업': { labels: ['온라인 노출', '고객 유입', '브랜드 신뢰도', '전환율', '재방문율'], before: [30, 25, 25, 20, 35], after: [92, 88, 85, 70, 82] },
    '숙박/펜션': { labels: ['온라인 노출', '예약 전환', '브랜드 신뢰도', '객실 가동률', '재방문율'], before: [20, 15, 25, 30, 15], after: [88, 80, 90, 85, 75] },
    '병원/의료': { labels: ['온라인 노출', '신규 환자', '브랜드 신뢰도', '예약 전환', '재방문율'], before: [20, 15, 35, 15, 30], after: [85, 80, 95, 72, 85] },
    '학원/교육': { labels: ['온라인 노출', '학생 유입', '브랜드 신뢰도', '등록 전환', '재등록율'], before: [25, 20, 30, 20, 25], after: [88, 82, 90, 75, 80] },
    '인테리어/건설': { labels: ['온라인 노출', '문의량', '브랜드 신뢰도', '계약 전환', '소개율'], before: [15, 15, 25, 10, 20], after: [85, 78, 88, 65, 75] },
    '쇼핑몰/이커머스': { labels: ['온라인 노출', '트래픽', '브랜드 신뢰도', '구매 전환', '재구매율'], before: [30, 25, 20, 15, 20], after: [95, 90, 85, 78, 72] },
    '부동산': { labels: ['온라인 노출', '문의량', '브랜드 신뢰도', '계약 전환', '소개율'], before: [20, 15, 30, 10, 25], after: [82, 75, 90, 60, 78] },
    'IT/스타트업': { labels: ['온라인 노출', '유저 유입', '브랜드 신뢰도', '전환율', '리텐션'], before: [30, 20, 15, 15, 15], after: [92, 85, 80, 72, 70] },
    '프랜차이즈': { labels: ['온라인 노출', '고객 유입', '브랜드 신뢰도', '전환율', '충성도'], before: [35, 30, 35, 20, 25], after: [92, 88, 92, 78, 82] },
    '제조업': { labels: ['온라인 노출', '문의량', '브랜드 신뢰도', '계약 전환', 'B2B 인지도'], before: [15, 10, 30, 10, 15], after: [78, 70, 88, 55, 75] },
    '기타': { labels: ['온라인 노출', '고객 유입', '브랜드 신뢰도', '전환율', '재방문율'], before: [20, 18, 25, 15, 18], after: [85, 80, 85, 70, 72] }
};

const industryImages = {
    '뷰티/미용': 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=340&fit=crop&q=80',
    '맛집/요식업': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=340&fit=crop&q=80',
    '숙박/펜션': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=340&fit=crop&q=80',
    '병원/의료': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=340&fit=crop&q=80',
    '학원/교육': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=340&fit=crop&q=80',
    '인테리어/건설': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=340&fit=crop&q=80',
    '쇼핑몰/이커머스': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop&q=80',
    '부동산': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=340&fit=crop&q=80',
    'IT/스타트업': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=340&fit=crop&q=80',
    '프랜차이즈': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=340&fit=crop&q=80',
    '제조업': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=340&fit=crop&q=80',
    '기타': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop&q=80'
};

// ===== Pentagon Radar Chart =====
function drawRadarChart(canvasId, data, animated) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const cx = w / 2, cy = h / 2 + 5;
    const radius = Math.min(w, h) / 2 - 45;
    const sides = 5;
    const angleStep = (Math.PI * 2) / sides;
    const startAngle = -Math.PI / 2;

    function drawFrame(beforeVals, afterVals) {
        ctx.clearRect(0, 0, w, h);

        // Grid
        for (let level = 1; level <= 5; level++) {
            const r = (radius * level) / 5;
            ctx.beginPath();
            for (let i = 0; i <= sides; i++) {
                const a = startAngle + i * angleStep;
                const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.strokeStyle = 'rgba(200,180,160,0.25)';
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        // Axes
        for (let i = 0; i < sides; i++) {
            const a = startAngle + i * angleStep;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + radius * Math.cos(a), cy + radius * Math.sin(a));
            ctx.strokeStyle = 'rgba(200,180,160,0.3)';
            ctx.stroke();
        }

        // Labels
        ctx.font = '600 11px "Noto Sans KR", sans-serif';
        ctx.fillStyle = '#6B6560';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let i = 0; i < sides; i++) {
            const a = startAngle + i * angleStep;
            const lr = radius + 30;
            ctx.fillText(data.labels[i], cx + lr * Math.cos(a), cy + lr * Math.sin(a));
        }

        function drawPoly(vals, fill, stroke, lw) {
            ctx.beginPath();
            for (let i = 0; i <= sides; i++) {
                const idx = i % sides;
                const a = startAngle + idx * angleStep;
                const r = (radius * vals[idx]) / 100;
                const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fillStyle = fill; ctx.fill();
            ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.stroke();
            for (let i = 0; i < sides; i++) {
                const a = startAngle + i * angleStep;
                const r = (radius * vals[i]) / 100;
                ctx.beginPath();
                ctx.arc(cx + r * Math.cos(a), cy + r * Math.sin(a), 3.5, 0, Math.PI * 2);
                ctx.fillStyle = stroke; ctx.fill();
            }
        }

        drawPoly(beforeVals, 'rgba(180,180,180,0.15)', 'rgba(150,150,150,0.6)', 2);
        drawPoly(afterVals, 'rgba(200,149,108,0.18)', 'rgba(200,149,108,0.85)', 2.5);
    }

    if (animated) {
        let progress = 0;
        const dur = 50;
        (function tick() {
            progress++;
            const t = Math.min(progress / dur, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            drawFrame(data.before.map(v => v * ease), data.after.map(v => v * ease));
            if (progress < dur) requestAnimationFrame(tick);
        })();
    } else {
        drawFrame(data.before, data.after);
    }
}

// ===== Get Selected Services & Tiers =====
function getSelectedServices() {
    const selected = [];
    document.querySelectorAll('.service-main-check:checked').forEach(cb => {
        const svc = cb.dataset.service;
        const card = cb.closest('.service-tier-card');
        const radio = card.querySelector('input[type="radio"]:checked');
        if (radio) {
            const tierIdx = parseInt(radio.value);
            const tier = serviceConfig[svc].tiers[tierIdx];
            selected.push({
                name: svc,
                tierName: tier.name,
                price: tier.price,
                desc: tier.desc,
                workItems: serviceConfig[svc].workItems
            });
        }
    });
    return selected;
}

// ===== Update Estimate =====
function updateEstimate() {
    const selected = getSelectedServices();
    const total = selected.reduce((sum, s) => sum + s.price, 0);
    document.getElementById('estimateAmount').value = total.toLocaleString();
    updatePreview(selected, total);
}

// ===== Update Preview =====
function updatePreview(selected, total) {
    const company = document.getElementById('companyName').value || '-';
    const industry = document.getElementById('industry').value || '-';

    document.getElementById('prevCompany').textContent = company;
    document.getElementById('prevIndustry').textContent = industry;
    document.getElementById('prevDate').textContent = new Date().toLocaleDateString('ko-KR');
    document.getElementById('prevAmount').textContent = total ? total.toLocaleString() + '원' : '0원';

    const servicesDiv = document.getElementById('prevServices');
    const workDiv = document.getElementById('prevWorkItems');

    if (!selected || selected.length === 0) {
        servicesDiv.innerHTML = '<p class="preview-empty">선택된 서비스가 없습니다</p>';
        workDiv.innerHTML = '';
    } else {
        servicesDiv.innerHTML = selected.map(s => `
            <div class="preview-service-item">
                <span class="svc-name">${s.name} <small>(${s.tierName})</small></span>
                <span class="svc-price">${s.price.toLocaleString()}원</span>
            </div>
            <div class="preview-service-desc">${s.desc}</div>
        `).join('');

        workDiv.innerHTML = '<div class="preview-divider"></div>' + selected.map(s => `
            <div class="preview-work-section">
                <div class="pw-title">${s.name} 작업사항</div>
                <ul class="pw-list">
                    ${s.workItems.map(w => `<li>${w}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }
}

// ===== Get Checklist Answers =====
function getChecklistAnswers() {
    const answers = [];
    const questions = [
        { name: 'purpose', label: '마케팅 목적' },
        { name: 'target', label: '타겟 고객층' },
        { name: 'channel', label: '운영 채널' },
        { name: 'experience', label: '대행 경험' },
        { name: 'budget', label: '월 예산' },
        { name: 'revenue', label: '매출 목표' },
        { name: 'kpi', label: '성과 지표' },
        { name: 'timing', label: '시작 시기' }
    ];
    questions.forEach(q => {
        const checked = document.querySelector(`input[name="${q.name}"]:checked`);
        if (checked) answers.push({ label: q.label, value: checked.value });
    });
    return answers;
}

// ===== Event Listeners =====
document.getElementById('companyName').addEventListener('input', () => updateEstimate());
document.getElementById('industry').addEventListener('change', () => updateEstimate());

// Init
document.getElementById('prevDate').textContent = new Date().toLocaleDateString('ko-KR');
renderServiceTiers();

// ===== Draw Radar Chart on Canvas =====
function drawRadarCanvas(canvas, data, w, h) {
    canvas.width = w * 2;
    canvas.height = h * 2;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    const ctx = canvas.getContext('2d');
    ctx.scale(2, 2);

    const cx = w / 2, cy = h / 2 + 5;
    const radius = Math.min(w, h) / 2 - 36;
    const sides = 5;
    const step = (Math.PI * 2) / sides;
    const start = -Math.PI / 2;
    const pt = (a, r) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];

    // Grid
    ctx.strokeStyle = '#E8E2DB';
    ctx.lineWidth = 0.8;
    for (let lvl = 1; lvl <= 5; lvl++) {
        const r = (radius * lvl) / 5;
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
            const [x, y] = pt(start + (i % sides) * step, r);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    // Axes
    for (let i = 0; i < sides; i++) {
        const [x, y] = pt(start + i * step, radius);
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y); ctx.stroke();
    }
    // Before
    ctx.beginPath();
    ctx.fillStyle = 'rgba(180,180,180,0.12)';
    ctx.strokeStyle = 'rgba(150,150,150,0.5)';
    ctx.lineWidth = 1.5;
    for (let i = 0; i <= sides; i++) {
        const [x, y] = pt(start + (i % sides) * step, radius * data.before[i % sides] / 100);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.fill(); ctx.stroke();
    // Before dots
    for (let i = 0; i < sides; i++) {
        const [x, y] = pt(start + i * step, radius * data.before[i] / 100);
        ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI * 2); ctx.fillStyle = '#999'; ctx.fill();
    }
    // After
    ctx.beginPath();
    ctx.fillStyle = 'rgba(200,149,108,0.15)';
    ctx.strokeStyle = '#C8A96A';
    ctx.lineWidth = 2;
    for (let i = 0; i <= sides; i++) {
        const [x, y] = pt(start + (i % sides) * step, radius * data.after[i % sides] / 100);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.fill(); ctx.stroke();
    // After dots
    for (let i = 0; i < sides; i++) {
        const [x, y] = pt(start + i * step, radius * data.after[i] / 100);
        ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fillStyle = '#C8A96A'; ctx.fill();
    }
    // Labels
    ctx.fillStyle = '#6B6560';
    ctx.font = '600 10px "Noto Sans KR", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < sides; i++) {
        const [x, y] = pt(start + i * step, radius + 22);
        ctx.fillText(data.labels[i], x, y);
    }
}

// ===== PDF Download (Landscape PPT Proposal) =====
function downloadPDF() {
    const company = document.getElementById('companyName').value || '-';
    const manager = document.getElementById('contactName') ? document.getElementById('contactName').value || '-' : '-';
    const phone = document.getElementById('phone') ? document.getElementById('phone').value || '-' : '-';
    const email = document.getElementById('email') ? document.getElementById('email').value || '-' : '-';
    const industry = document.getElementById('industry').value || '-';
    const today = new Date().toLocaleDateString('ko-KR');
    const todayFile = new Date().toISOString().slice(0, 10);

    const selected = getSelectedServices();
    const total = selected.reduce((sum, s) => sum + s.price, 0);
    const checklist = getChecklistAnswers();

    // AI analysis data
    const radarData = industryRadarData[industry] || industryRadarData['기타'];
    const imgUrl = industryImages[industry] || industryImages['기타'];
    const boost = Math.min(selected.length * 2, 10);
    const boostedAfter = radarData.after.map(v => Math.min(v + boost, 100));
    const displayAfter = selected.length > 0 ? boostedAfter : radarData.after;
    const avgBefore = Math.round(radarData.before.reduce((a, b) => a + b, 0) / 5);
    const avgAfter = Math.round(displayAfter.reduce((a, b) => a + b, 0) / 5);
    const improvement = avgAfter - avgBefore;
    const totalPages = (industry && industry !== '-') ? 6 : 5;

    // Recommended services based on industry
    const recommendMap = {
        '음식점/카페': ['블로그체험단', '인스타대행', '카페활성화'],
        '병원/의료': ['블로그대행', '언론홍보', '사이트제작'],
        '학원/교육': ['블로그대행', '카페활성화', '숏폼제작'],
        '쇼핑몰/이커머스': ['인스타대행', '블로그체험단', '숏폼제작'],
        '부동산/건설': ['블로그대행', '언론홍보', '카페활성화'],
        '뷰티/헬스': ['인스타대행', '블로그체험단', '숏폼제작'],
        '여행/숙박': ['블로그체험단', '인스타대행', '유튜브대행'],
        '전문서비스': ['블로그대행', '사이트제작', '언론홍보'],
        '기타': ['블로그대행', '인스타대행', '카페활성화']
    };
    const recs = recommendMap[industry] || recommendMap['기타'];

    // ===== Slide dimensions =====
    const W = 960, H = 540;
    const S = `width:${W}px;height:${H}px;background:#fff;position:relative;overflow:hidden;box-sizing:border-box;font-family:'Noto Sans KR',sans-serif;color:#111111;`;
    const header = (n, title, sub) => `
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:22px;">
            <div style="width:30px;height:30px;background:linear-gradient(135deg,#C8A96A,#E8C9A0);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:13px;">${n}</div>
            <div style="font-size:18px;font-weight:800;color:#111111;">${title}</div>
            ${sub ? `<div style="font-size:10px;color:#8A8580;margin-left:6px;">${sub}</div>` : ''}
        </div>`;
    const topBar = `<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#C8A96A,#E8C9A0,#C8A96A);"></div>`;
    const logo = `<div style="position:absolute;top:18px;left:36px;font-size:12px;"><span style="font-weight:800;color:#111111;">THE </span><span style="font-weight:800;color:#C8A96A;">BEST</span></div>`;
    const pageNum = (n) => `<div style="position:absolute;bottom:14px;right:36px;font-size:8px;color:#AEA9A4;">${n} / ${totalPages}</div>`;
    const footerLine = `<div style="position:absolute;bottom:30px;left:36px;right:36px;border-top:1px solid #F0E6DA;"></div>`;

    const pages = [];

    // ====== PAGE 1: COVER ======
    pages.push(`<div style="${S}">
        ${topBar}
        <div style="position:absolute;top:30px;left:40px;"><span style="font-size:16px;font-weight:800;color:#111111;">THE </span><span style="font-size:16px;font-weight:800;color:#C8A96A;">BEST</span></div>
        <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;text-align:center;">
            <div style="font-size:12px;font-weight:600;color:#C8A96A;letter-spacing:5px;margin-bottom:16px;">AI-POWERED CUSTOM ESTIMATE</div>
            <div style="font-size:40px;font-weight:800;color:#111111;margin-bottom:8px;">AI 맞춤견적서</div>
            <div style="font-size:14px;color:#8A8580;margin-bottom:36px;">${company} 맞춤 마케팅 제안서</div>
            <div style="display:flex;gap:20px;">
                <div style="background:#FAF6F1;border:1px solid #E8E2DB;border-radius:8px;padding:14px 32px;text-align:center;">
                    <div style="font-size:9px;color:#AEA9A4;margin-bottom:3px;">견적일자</div>
                    <div style="font-size:14px;font-weight:700;color:#111111;">${today}</div>
                </div>
                <div style="background:#FAF6F1;border:1px solid #E8E2DB;border-radius:8px;padding:14px 32px;text-align:center;">
                    <div style="font-size:9px;color:#AEA9A4;margin-bottom:3px;">업종</div>
                    <div style="font-size:14px;font-weight:700;color:#111111;">${industry}</div>
                </div>
                <div style="background:#FAF6F1;border:1px solid #E8E2DB;border-radius:8px;padding:14px 32px;text-align:center;">
                    <div style="font-size:9px;color:#AEA9A4;margin-bottom:3px;">견적금액</div>
                    <div style="font-size:14px;font-weight:800;color:#C8A96A;">${total.toLocaleString()}원</div>
                </div>
            </div>
        </div>
        ${footerLine}
        <div style="position:absolute;bottom:14px;left:36px;right:36px;display:flex;justify-content:space-between;">
            <span style="font-size:9px;color:#AEA9A4;">더베스트마케팅 | THE BEST Marketing</span>
            <span style="font-size:9px;color:#AEA9A4;">Confidential</span>
        </div>
    </div>`);

    // ====== PAGE 2: CLIENT INFO ======
    let checkRows = '';
    if (checklist.length > 0) {
        checkRows = checklist.map(c =>
            `<tr><td style="padding:7px 12px;background:#FAF6F1;border:1px solid #F0E6DA;font-weight:600;color:#6B6560;font-size:10px;width:18%;">${c.label}</td><td style="padding:7px 12px;border:1px solid #F0E6DA;font-size:10px;">${c.value}</td></tr>`
        ).join('');
    }
    pages.push(`<div style="${S}padding:36px 40px;">
        ${topBar}${logo}
        <div style="margin-top:28px;">
        ${header('01', '기본 정보 & 체크리스트')}
        <div style="display:flex;gap:24px;">
            <div style="flex:1;">
                <div style="font-size:11px;font-weight:700;color:#C8A96A;margin-bottom:8px;letter-spacing:1px;">CLIENT INFO</div>
                <table style="width:100%;border-collapse:collapse;font-size:11px;">
                    <tr><td style="padding:9px 12px;background:#FAF6F1;border:1px solid #F0E6DA;font-weight:600;color:#6B6560;width:28%;">업체명</td><td style="padding:9px 12px;border:1px solid #F0E6DA;font-weight:700;">${company}</td></tr>
                    <tr><td style="padding:9px 12px;background:#FAF6F1;border:1px solid #F0E6DA;font-weight:600;color:#6B6560;">담당자</td><td style="padding:9px 12px;border:1px solid #F0E6DA;">${manager}</td></tr>
                    <tr><td style="padding:9px 12px;background:#FAF6F1;border:1px solid #F0E6DA;font-weight:600;color:#6B6560;">연락처</td><td style="padding:9px 12px;border:1px solid #F0E6DA;">${phone}</td></tr>
                    <tr><td style="padding:9px 12px;background:#FAF6F1;border:1px solid #F0E6DA;font-weight:600;color:#6B6560;">이메일</td><td style="padding:9px 12px;border:1px solid #F0E6DA;">${email}</td></tr>
                    <tr><td style="padding:9px 12px;background:#FAF6F1;border:1px solid #F0E6DA;font-weight:600;color:#6B6560;">업종</td><td style="padding:9px 12px;border:1px solid #F0E6DA;">${industry}</td></tr>
                </table>
            </div>
            <div style="flex:1;">
                <div style="font-size:11px;font-weight:700;color:#C8A96A;margin-bottom:8px;letter-spacing:1px;">CHECKLIST</div>
                <table style="width:100%;border-collapse:collapse;">
                    ${checkRows || '<tr><td style="padding:20px;text-align:center;color:#AEA9A4;font-size:10px;border:1px solid #F0E6DA;">체크리스트 미작성</td></tr>'}
                </table>
            </div>
        </div>
        </div>
        ${pageNum(2)}
    </div>`);

    // ====== PAGE 3: SERVICES & PRICING ======
    let svcRows = '';
    selected.forEach((s, i) => {
        svcRows += `
        <tr>
            <td style="padding:10px 12px;border:1px solid #F0E6DA;font-size:11px;font-weight:600;text-align:center;">${i + 1}</td>
            <td style="padding:10px 12px;border:1px solid #F0E6DA;font-size:11px;font-weight:700;">${s.name}</td>
            <td style="padding:10px 12px;border:1px solid #F0E6DA;text-align:center;"><span style="font-size:9px;background:#FFF3E8;color:#C8A96A;padding:2px 8px;border-radius:4px;font-weight:600;">${s.tierName}</span></td>
            <td style="padding:10px 12px;border:1px solid #F0E6DA;font-size:10px;color:#6B6560;">${s.desc}</td>
            <td style="padding:10px 12px;border:1px solid #F0E6DA;text-align:right;font-size:12px;font-weight:700;color:#C8A96A;white-space:nowrap;">${s.price.toLocaleString()}원</td>
        </tr>`;
    });
    if (!selected.length) {
        svcRows = '<tr><td colspan="5" style="padding:30px;text-align:center;color:#AEA9A4;font-size:11px;border:1px solid #F0E6DA;">선택된 서비스가 없습니다</td></tr>';
    }
    // Work items
    let workHTML = '';
    const uniqueServices = [...new Set(selected.map(s => s.name))];
    uniqueServices.forEach(name => {
        const cfg = serviceConfig[name];
        if (cfg) {
            workHTML += `<div style="margin-bottom:8px;"><span style="font-size:9px;font-weight:700;color:#111111;">${name}</span><span style="font-size:8px;color:#8A8580;"> — </span>`;
            workHTML += cfg.workItems.map(w => `<span style="font-size:8px;color:#6B6560;">${w}</span>`).join(' · ');
            workHTML += `</div>`;
        }
    });

    pages.push(`<div style="${S}padding:36px 40px;">
        ${topBar}${logo}
        <div style="margin-top:28px;">
        ${header('02', '서비스 & 견적')}
        <table style="width:100%;border-collapse:collapse;margin-bottom:12px;">
            <thead><tr style="background:#111111;">
                <th style="padding:9px 12px;color:#E8C9A0;font-size:9px;font-weight:600;text-align:center;width:6%;">No</th>
                <th style="padding:9px 12px;color:#E8C9A0;font-size:9px;font-weight:600;text-align:left;width:18%;">서비스명</th>
                <th style="padding:9px 12px;color:#E8C9A0;font-size:9px;font-weight:600;text-align:center;width:12%;">규모</th>
                <th style="padding:9px 12px;color:#E8C9A0;font-size:9px;font-weight:600;text-align:left;">상세내용</th>
                <th style="padding:9px 12px;color:#E8C9A0;font-size:9px;font-weight:600;text-align:right;width:16%;">금액</th>
            </tr></thead>
            <tbody>${svcRows}</tbody>
        </table>
        ${workHTML ? `<div style="background:#FAF6F1;border-radius:6px;padding:10px 14px;margin-bottom:12px;"><div style="font-size:9px;font-weight:700;color:#C8A96A;margin-bottom:4px;">작업 범위</div>${workHTML}</div>` : ''}
        <div style="background:linear-gradient(135deg,#111111,#3D3A36);border-radius:8px;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;">
            <div><div style="font-size:11px;font-weight:600;color:#AEA9A4;">총 견적금액 (VAT 별도)</div></div>
            <div style="font-size:24px;font-weight:800;color:#C8A96A;">${total.toLocaleString()}원<span style="font-size:10px;font-weight:500;color:#AEA9A4;">/월</span></div>
        </div>
        </div>
        ${pageNum(3)}
    </div>`);

    // ====== PAGE 4: RECOMMENDED SERVICES ======
    let recCards = '';
    recs.forEach((name, i) => {
        const cfg = serviceConfig[name];
        if (!cfg) return;
        const tierMid = cfg.tiers[1] || cfg.tiers[0];
        recCards += `
        <div style="flex:1;background:#FFFAF5;border:1px solid #F0E6DA;border-radius:10px;padding:16px;text-align:center;">
            <div style="width:36px;height:36px;margin:0 auto 8px;background:linear-gradient(135deg,#C8A96A,#E8C9A0);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:14px;">${i + 1}</div>
            <div style="font-size:13px;font-weight:800;color:#111111;margin-bottom:4px;">${name}</div>
            <div style="font-size:9px;color:#8A8580;margin-bottom:8px;">${tierMid.desc}</div>
            <div style="font-size:14px;font-weight:800;color:#C8A96A;margin-bottom:8px;">${tierMid.price.toLocaleString()}원~</div>
            <div style="text-align:left;padding-top:8px;border-top:1px dashed #E8E2DB;">
                ${cfg.workItems.slice(0, 4).map(w => `<div style="font-size:8px;color:#6B6560;padding:2px 0;"><span style="color:#C8A96A;margin-right:4px;">&#10003;</span>${w}</div>`).join('')}
            </div>
        </div>`;
    });
    pages.push(`<div style="${S}padding:36px 40px;">
        ${topBar}${logo}
        <div style="margin-top:28px;">
        ${header('03', `${industry} 업종 추천 마케팅 서비스`)}
        <div style="background:#F8F5F0;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
            <div style="font-size:11px;color:#6B6560;line-height:1.7;">
                <span style="font-weight:700;color:#C8A96A;">${industry}</span> 업종 특성을 분석한 결과, 아래 마케팅 서비스를 통해 <span style="font-weight:700;color:#C8A96A;">최대 ${improvement * 2}%</span>의 마케팅 효과 상승을 기대할 수 있습니다.
                더베스트마케팅의 데이터 기반 전략으로 <span style="font-weight:700;">경쟁사 대비 차별화된 온라인 입지</span>를 확보하세요.
            </div>
        </div>
        <div style="display:flex;gap:16px;">
            ${recCards}
        </div>
        </div>
        ${pageNum(4)}
    </div>`);

    // ====== PAGE 5: DATA ANALYSIS (radar chart + detail) ======
    if (industry && industry !== '-') {
        // Score bars
        let bars = '';
        radarData.labels.forEach((label, i) => {
            const diff = displayAfter[i] - radarData.before[i];
            bars += `
            <div style="margin-bottom:7px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:2px;">
                    <span style="font-size:9px;font-weight:600;color:#6B6560;">${label}</span>
                    <span style="font-size:9px;color:#C8A96A;font-weight:700;">+${diff}점 향상</span>
                </div>
                <div style="position:relative;height:16px;background:#EDEDED;border-radius:4px;overflow:hidden;">
                    <div style="position:absolute;top:0;left:0;height:100%;width:${radarData.before[i]}%;background:#CFCFCF;border-radius:4px;"></div>
                    <div style="position:absolute;top:0;left:0;height:100%;width:${displayAfter[i]}%;background:linear-gradient(90deg,#C8A96A,#E8C9A0);border-radius:4px;opacity:0.85;"></div>
                    <div style="position:absolute;top:0;left:0;height:100%;display:flex;align-items:center;padding-left:6px;">
                        <span style="font-size:7px;font-weight:700;color:#fff;">${radarData.before[i]}</span>
                        <span style="font-size:7px;color:#fff;margin:0 2px;">→</span>
                        <span style="font-size:7px;font-weight:700;color:#fff;">${displayAfter[i]}</span>
                    </div>
                </div>
            </div>`;
        });

        pages.push(`<div style="${S}padding:36px 40px;">
            ${topBar}${logo}
            <div style="margin-top:28px;">
            ${header('04', '마케팅 데이터 분석', `${industry} · AI Analysis Report`)}
            <div style="display:flex;gap:20px;">
                <div style="flex:0 0 300px;">
                    <div style="background:#F8F5F0;border:1px solid #E8E2DB;border-radius:10px;padding:14px;text-align:center;">
                        <div style="font-size:10px;font-weight:700;color:#111111;margin-bottom:2px;">마케팅 전후 지표 비교 (오각형 분석)</div>
                        <canvas id="pdfRadarCanvas" style="display:block;margin:4px auto;"></canvas>
                        <div style="display:flex;justify-content:center;gap:14px;margin-top:2px;">
                            <div style="display:flex;align-items:center;gap:3px;font-size:8px;color:#8A8580;"><span style="width:12px;height:3px;background:#CFCFCF;border-radius:2px;display:inline-block;"></span>미진행</div>
                            <div style="display:flex;align-items:center;gap:3px;font-size:8px;color:#8A8580;"><span style="width:12px;height:3px;background:#C8A96A;border-radius:2px;display:inline-block;"></span>진행 후</div>
                        </div>
                    </div>
                    <div style="display:flex;gap:8px;margin-top:10px;">
                        <div style="flex:1;text-align:center;padding:10px;background:#F8F5F0;border-radius:6px;border:1px solid #E8E2DB;">
                            <div style="font-size:8px;font-weight:600;color:#8A8580;margin-bottom:2px;">현재 (미진행)</div>
                            <div style="font-size:22px;font-weight:800;color:#999;">${avgBefore}<span style="font-size:9px;">점</span></div>
                        </div>
                        <div style="display:flex;align-items:center;flex-direction:column;justify-content:center;">
                            <div style="font-size:9px;font-weight:800;color:#C8A96A;background:#FFF3E8;border-radius:10px;padding:3px 6px;">+${improvement}</div>
                        </div>
                        <div style="flex:1;text-align:center;padding:10px;background:#FFFAF5;border-radius:6px;border:1px solid #F0E6DA;">
                            <div style="font-size:8px;font-weight:600;color:#C8A96A;margin-bottom:2px;">진행 후 (예상)</div>
                            <div style="font-size:22px;font-weight:800;color:#C8A96A;">${avgAfter}<span style="font-size:9px;">점</span></div>
                        </div>
                    </div>
                </div>
                <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
                    <div style="border-radius:8px;overflow:hidden;border:1px solid #F0E6DA;position:relative;">
                        <img src="${imgUrl}" alt="${industry}" style="width:100%;height:110px;object-fit:cover;display:block;" crossorigin="anonymous">
                        <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(45,42,38,0.8));padding:8px 12px;">
                            <div style="font-size:11px;font-weight:700;color:#fff;">${industry} 업종 마케팅 분석</div>
                            <div style="font-size:8px;color:#E8C9A0;">더베스트마케팅 진행 후 예상 결과</div>
                        </div>
                    </div>
                    <div style="background:#FFFAF5;border:1px solid #F0E6DA;border-radius:8px;padding:12px 14px;flex:1;">
                        <div style="font-size:10px;font-weight:700;color:#111111;margin-bottom:4px;">항목별 상세 분석</div>
                        <div style="display:flex;gap:6px;margin-bottom:6px;">
                            <span style="font-size:7px;color:#8A8580;display:flex;align-items:center;gap:2px;"><span style="width:8px;height:4px;background:#CFCFCF;border-radius:2px;display:inline-block;"></span>미진행</span>
                            <span style="font-size:7px;color:#8A8580;display:flex;align-items:center;gap:2px;"><span style="width:8px;height:4px;background:#C8A96A;border-radius:2px;display:inline-block;"></span>진행 후</span>
                        </div>
                        ${bars}
                    </div>
                    <div style="background:#111111;border-radius:6px;padding:10px 14px;display:flex;align-items:center;gap:10px;">
                        <div style="font-size:9px;color:#AEA9A4;">종합 마케팅 효과 향상률</div>
                        <div style="font-size:18px;font-weight:800;color:#C8A96A;margin-left:auto;">+${Math.round(improvement / avgBefore * 100)}%</div>
                    </div>
                </div>
            </div>
            </div>
            ${pageNum(5)}
        </div>`);
    }

    // ====== LAST PAGE: THANK YOU ======
    pages.push(`<div style="${S}">
        ${topBar}
        <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;text-align:center;">
            <div style="font-size:34px;font-weight:800;color:#111111;margin-bottom:8px;">감사합니다</div>
            <div style="font-size:12px;color:#8A8580;margin-bottom:32px;">더베스트마케팅과 함께 성공적인 마케팅을 시작하세요</div>
            <div style="width:80px;height:2px;background:#C8A96A;margin-bottom:32px;"></div>
            <div style="display:flex;gap:28px;margin-bottom:32px;">
                <div><div style="font-size:9px;color:#AEA9A4;margin-bottom:2px;">TEL</div><div style="font-size:12px;font-weight:600;">010-1234-5678</div></div>
                <div><div style="font-size:9px;color:#AEA9A4;margin-bottom:2px;">EMAIL</div><div style="font-size:12px;font-weight:600;">thebest@marketing.com</div></div>
                <div><div style="font-size:9px;color:#AEA9A4;margin-bottom:2px;">KAKAO</div><div style="font-size:12px;font-weight:600;">@THEBEST</div></div>
            </div>
            <div style="font-size:20px;font-weight:800;"><span style="color:#111111;">THE </span><span style="color:#C8A96A;">BEST</span></div>
            <div style="font-size:9px;color:#AEA9A4;margin-top:3px;">더베스트마케팅</div>
        </div>
        ${footerLine}
        <div style="position:absolute;bottom:14px;left:36px;right:36px;text-align:center;font-size:8px;color:#AEA9A4;">본 견적서는 발행일로부터 30일간 유효합니다.</div>
    </div>`);

    // ===== RENDER: html2canvas each slide -> jsPDF combine =====
    const container = document.createElement('div');
    container.style.cssText = `position:absolute;left:-9999px;top:0;`;
    container.innerHTML = pages.join('');
    document.body.appendChild(container);

    const slides = container.children;

    // Draw radar chart on canvas element inside the rendered DOM
    const radarCanvas = container.querySelector('#pdfRadarCanvas');
    if (radarCanvas) {
        drawRadarCanvas(radarCanvas, { labels: radarData.labels, before: radarData.before, after: displayAfter }, 260, 210);
    }

    // Wait a tick for images to load, then render
    setTimeout(async () => {
        try {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
            const pdfW = 297, pdfH = 210;

            for (let i = 0; i < slides.length; i++) {
                if (i > 0) pdf.addPage();
                const canvas = await html2canvas(slides[i], {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: '#ffffff',
                    logging: false,
                    width: W,
                    height: H
                });
                const imgData = canvas.toDataURL('image/jpeg', 0.92);
                pdf.addImage(imgData, 'JPEG', 0, 0, pdfW, pdfH);
            }

            pdf.save(`AI맞춤견적서_${company !== '-' ? company : '견적서'}_${todayFile}.pdf`);
        } catch (err) {
            console.error('PDF generation error:', err);
            alert('PDF 생성 중 오류가 발생했습니다. 페이지를 새로고침 후 다시 시도해주세요.');
        } finally {
            document.body.removeChild(container);
        }
    }, 500);
}

// ===== Form Submit =====
document.getElementById('estimateForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const selected = getSelectedServices();
    if (selected.length === 0) {
        alert('서비스를 1개 이상 선택해주세요.');
        return;
    }
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-icon">&#10003;</div>
            <h2>AI 맞춤견적서가 생성되었습니다!</h2>
            <p>담당자가 확인 후 빠르게 연락드리겠습니다.<br>PDF 다운로드를 원하시면 우측 버튼을 이용해주세요.</p>
            <button class="btn btn-primary" onclick="this.closest('.modal-overlay').remove()">확인</button>
        </div>
    `;
    document.body.appendChild(modal);
});

// ===== Reset =====
function resetForm() {
    document.getElementById('estimateForm').reset();
    document.querySelectorAll('.service-main-check').forEach(cb => {
        cb.checked = false;
        cb.closest('.service-tier-card').classList.remove('active');
    });
    document.querySelectorAll('.tier-option input[type="radio"]').forEach(r => r.checked = false);
    document.getElementById('estimateAmount').value = '';
    updatePreview([], 0);
}
