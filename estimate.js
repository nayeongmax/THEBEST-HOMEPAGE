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
    updateExpectedResults(selected);
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

// ===== Update Expected Results (Radar Chart) =====
function updateExpectedResults(selected) {
    const industry = document.getElementById('industry').value;
    const container = document.getElementById('expectedResults');

    if (!industry && (!selected || selected.length === 0)) {
        container.innerHTML = '<div class="result-placeholder"><p>업종과 서비스를 선택하면 AI 분석 결과가 표시됩니다</p></div>';
        return;
    }

    const radarData = industryRadarData[industry] || industryRadarData['기타'];
    const imgUrl = industryImages[industry] || industryImages['기타'];
    const boost = Math.min((selected ? selected.length : 0) * 2, 10);
    const boostedAfter = radarData.after.map(v => Math.min(v + boost, 100));
    const displayData = { labels: radarData.labels, before: radarData.before, after: selected && selected.length > 0 ? boostedAfter : radarData.after };
    const avgBefore = Math.round(radarData.before.reduce((a, b) => a + b, 0) / 5);
    const avgAfter = Math.round(displayData.after.reduce((a, b) => a + b, 0) / 5);
    const improvement = avgAfter - avgBefore;

    container.innerHTML = `
        <div class="ai-analysis">
            <div class="industry-visual">
                <div class="industry-image-card">
                    <img src="${imgUrl}" alt="${industry || '업종'}" style="border-radius:12px;width:100%;height:200px;object-fit:cover;">
                    <div class="industry-badge">${industry || '업종 미선택'}</div>
                </div>
            </div>

            <div class="radar-section">
                <div class="radar-title">
                    <h4>마케팅 효과 비교 분석</h4>
                    <p>마케팅 진행 전후 예상 지표 비교</p>
                </div>
                <div class="radar-chart-wrapper">
                    <canvas id="radarCanvas" width="380" height="340"></canvas>
                </div>
                <div class="radar-legend">
                    <div class="legend-item"><span class="legend-line" style="background:rgba(150,150,150,0.6);"></span><span>마케팅 미진행</span></div>
                    <div class="legend-item"><span class="legend-line" style="background:rgba(200,149,108,0.85);"></span><span>마케팅 진행 후</span></div>
                </div>
            </div>

            <div class="score-comparison">
                <div class="score-card before">
                    <div class="score-label">마케팅 미진행</div>
                    <div class="score-circle">
                        <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="none" stroke="#E8E2DB" stroke-width="8"/><circle cx="60" cy="60" r="52" fill="none" stroke="#B0B0B0" stroke-width="8" stroke-dasharray="${2 * Math.PI * 52}" stroke-dashoffset="${2 * Math.PI * 52 * (1 - avgBefore / 100)}" stroke-linecap="round" transform="rotate(-90 60 60)"/></svg>
                        <div class="score-value" style="color:#999;">${avgBefore}<span>점</span></div>
                    </div>
                    <div class="score-status bad">개선 필요</div>
                </div>
                <div class="score-arrow">
                    <svg viewBox="0 0 60 30" width="60" height="30"><path d="M5 15h40M35 5l15 10-15 10" stroke="#C8956C" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span class="arrow-label">+${improvement}점 향상</span>
                </div>
                <div class="score-card after">
                    <div class="score-label">마케팅 진행 후</div>
                    <div class="score-circle">
                        <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="none" stroke="#E8E2DB" stroke-width="8"/><circle cx="60" cy="60" r="52" fill="none" stroke="#C8956C" stroke-width="8" stroke-dasharray="${2 * Math.PI * 52}" stroke-dashoffset="${2 * Math.PI * 52 * (1 - avgAfter / 100)}" stroke-linecap="round" transform="rotate(-90 60 60)"/></svg>
                        <div class="score-value" style="color:var(--primary);">${avgAfter}<span>점</span></div>
                    </div>
                    <div class="score-status good">우수</div>
                </div>
            </div>

            <div class="detail-bars">
                ${displayData.labels.map((label, i) => `
                    <div class="detail-bar-item">
                        <div class="bar-label-row">
                            <span class="bar-name">${label}</span>
                            <span class="bar-values">${radarData.before[i]}점 → <strong>${displayData.after[i]}점</strong></span>
                        </div>
                        <div class="bar-double">
                            <div class="bar-track-bg"><div class="bar-before" style="width:${radarData.before[i]}%"></div></div>
                            <div class="bar-track-bg"><div class="bar-after" style="width:${displayData.after[i]}%"></div></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    requestAnimationFrame(() => drawRadarChart('radarCanvas', displayData, true));
}

// ===== Event Listeners =====
document.getElementById('companyName').addEventListener('input', () => updateEstimate());
document.getElementById('industry').addEventListener('change', () => updateEstimate());

// Init
document.getElementById('prevDate').textContent = new Date().toLocaleDateString('ko-KR');
renderServiceTiers();

// ===== PDF Download =====
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

    // AI analysis data
    const radarData = industryRadarData[industry] || industryRadarData['기타'];
    const imgUrl = industryImages[industry] || industryImages['기타'];
    const boost = Math.min(selected.length * 2, 10);
    const boostedAfter = radarData.after.map(v => Math.min(v + boost, 100));
    const displayAfter = selected.length > 0 ? boostedAfter : radarData.after;
    const avgBefore = Math.round(radarData.before.reduce((a, b) => a + b, 0) / 5);
    const avgAfter = Math.round(displayAfter.reduce((a, b) => a + b, 0) / 5);
    const improvement = avgAfter - avgBefore;

    // Build services HTML
    let servicesHTML = '';
    selected.forEach((s, idx) => {
        servicesHTML += `
            <div style="margin-bottom:20px;padding:18px 20px;background:#FFFAF5;border:1px solid #F0E6DA;border-radius:8px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                    <div style="font-size:15px;font-weight:700;color:#2D2A26;">${idx + 1}. ${s.name} <span style="font-size:12px;font-weight:500;color:#C8956C;background:#FFF3E8;padding:2px 8px;border-radius:4px;margin-left:6px;">${s.tierName}</span></div>
                    <div style="font-size:15px;font-weight:700;color:#C8956C;">${s.price.toLocaleString()}원</div>
                </div>
                <div style="font-size:12px;color:#8A8580;margin-bottom:12px;padding-left:4px;">${s.desc}</div>
                <div style="border-top:1px dashed #E8E2DB;padding-top:10px;">
                    <div style="font-size:11px;font-weight:600;color:#6B6560;margin-bottom:6px;">작업 사항</div>
                    ${s.workItems.map(w => `<div style="font-size:11px;color:#6B6560;padding:2px 0 2px 12px;position:relative;"><span style="position:absolute;left:0;color:#C8956C;">&#8226;</span>${w}</div>`).join('')}
                </div>
            </div>
        `;
    });

    if (selected.length === 0) {
        servicesHTML = '<div style="padding:30px;text-align:center;color:#AEA9A4;font-size:13px;">선택된 서비스가 없습니다</div>';
    }

    // Build score bars HTML
    let scoreBarsHTML = '';
    if (industry && industry !== '-') {
        const labels = radarData.labels;
        labels.forEach((label, i) => {
            scoreBarsHTML += `
                <div style="margin-bottom:10px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                        <span style="font-size:12px;font-weight:600;color:#6B6560;">${label}</span>
                        <span style="font-size:11px;color:#8A8580;">${radarData.before[i]}점 → <strong style="color:#C8956C;">${displayAfter[i]}점</strong></span>
                    </div>
                    <div style="display:flex;gap:4px;">
                        <div style="flex:1;height:8px;background:#EDEDED;border-radius:4px;overflow:hidden;">
                            <div style="width:${radarData.before[i]}%;height:100%;background:#B0B0B0;border-radius:4px;"></div>
                        </div>
                        <div style="flex:1;height:8px;background:#EDEDED;border-radius:4px;overflow:hidden;">
                            <div style="width:${displayAfter[i]}%;height:100%;background:#C8956C;border-radius:4px;"></div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Full PDF HTML
    const pdfHTML = `
    <div style="font-family:'Noto Sans KR',sans-serif;color:#2D2A26;width:660px;margin:0 auto;background:#fff;">

        <!-- HEADER -->
        <div style="background:linear-gradient(135deg,#2D2A26 0%,#3D3A36 100%);padding:32px 36px;display:flex;justify-content:space-between;align-items:center;">
            <div>
                <div style="font-size:24px;font-weight:800;color:#C8956C;letter-spacing:1px;">THE BEST</div>
                <div style="font-size:10px;color:#AEA9A4;margin-top:2px;">더베스트마케팅</div>
            </div>
            <div style="text-align:right;">
                <div style="font-size:20px;font-weight:700;color:#fff;">AI 맞춤견적서</div>
                <div style="font-size:11px;color:#AEA9A4;margin-top:4px;">AI-Powered Custom Estimate</div>
            </div>
        </div>

        <!-- DECORATIVE LINE -->
        <div style="height:3px;background:linear-gradient(90deg,#C8956C,#E8C9A0,#C8956C);"></div>

        <!-- BASIC INFO -->
        <div style="padding:28px 36px 20px 36px;">
            <div style="font-size:16px;font-weight:700;color:#2D2A26;margin-bottom:16px;padding-bottom:8px;border-bottom:2px solid #C8956C;display:inline-block;">기본 정보</div>
            <table style="width:100%;border-collapse:collapse;font-size:13px;">
                <tr>
                    <td style="padding:10px 14px;background:#FAF6F1;border:1px solid #F0E6DA;font-weight:600;color:#6B6560;width:18%;">업체명</td>
                    <td style="padding:10px 14px;border:1px solid #F0E6DA;width:32%;">${company}</td>
                    <td style="padding:10px 14px;background:#FAF6F1;border:1px solid #F0E6DA;font-weight:600;color:#6B6560;width:18%;">담당자</td>
                    <td style="padding:10px 14px;border:1px solid #F0E6DA;width:32%;">${manager}</td>
                </tr>
                <tr>
                    <td style="padding:10px 14px;background:#FAF6F1;border:1px solid #F0E6DA;font-weight:600;color:#6B6560;">연락처</td>
                    <td style="padding:10px 14px;border:1px solid #F0E6DA;">${phone}</td>
                    <td style="padding:10px 14px;background:#FAF6F1;border:1px solid #F0E6DA;font-weight:600;color:#6B6560;">이메일</td>
                    <td style="padding:10px 14px;border:1px solid #F0E6DA;">${email}</td>
                </tr>
                <tr>
                    <td style="padding:10px 14px;background:#FAF6F1;border:1px solid #F0E6DA;font-weight:600;color:#6B6560;">업종</td>
                    <td style="padding:10px 14px;border:1px solid #F0E6DA;">${industry}</td>
                    <td style="padding:10px 14px;background:#FAF6F1;border:1px solid #F0E6DA;font-weight:600;color:#6B6560;">견적일자</td>
                    <td style="padding:10px 14px;border:1px solid #F0E6DA;">${today}</td>
                </tr>
            </table>
        </div>

        <!-- SERVICES & ESTIMATE -->
        <div style="padding:8px 36px 20px 36px;">
            <div style="font-size:16px;font-weight:700;color:#2D2A26;margin-bottom:16px;padding-bottom:8px;border-bottom:2px solid #C8956C;display:inline-block;">서비스 &amp; 견적</div>
            ${servicesHTML}
        </div>

        <!-- TOTAL AMOUNT -->
        <div style="margin:0 36px 24px 36px;background:linear-gradient(135deg,#2D2A26 0%,#3D3A36 100%);border-radius:10px;padding:22px 28px;display:flex;justify-content:space-between;align-items:center;">
            <div>
                <div style="font-size:14px;font-weight:600;color:#AEA9A4;">총 견적금액</div>
                <div style="font-size:10px;color:#8A8580;margin-top:2px;">VAT 별도</div>
            </div>
            <div style="font-size:26px;font-weight:800;color:#C8956C;">${total.toLocaleString()}원</div>
        </div>

        ${industry && industry !== '-' ? `
        <!-- AI ANALYSIS SECTION -->
        <div style="padding:8px 36px 24px 36px;">
            <div style="font-size:16px;font-weight:700;color:#2D2A26;margin-bottom:16px;padding-bottom:8px;border-bottom:2px solid #C8956C;display:inline-block;">AI 분석 결과</div>

            <!-- Industry Image -->
            <div style="margin-bottom:20px;border-radius:10px;overflow:hidden;border:1px solid #F0E6DA;">
                <img src="${imgUrl}" alt="${industry}" style="width:100%;height:180px;object-fit:cover;display:block;" crossorigin="anonymous">
                <div style="padding:10px 16px;background:#FAF6F1;font-size:13px;font-weight:600;color:#6B6560;">${industry} 업종 마케팅 분석</div>
            </div>

            <!-- Score Comparison -->
            <div style="display:flex;gap:16px;margin-bottom:20px;">
                <div style="flex:1;text-align:center;padding:20px;background:#F8F5F0;border-radius:10px;border:1px solid #E8E2DB;">
                    <div style="font-size:11px;font-weight:600;color:#8A8580;margin-bottom:8px;">마케팅 미진행</div>
                    <div style="font-size:36px;font-weight:800;color:#999;">${avgBefore}<span style="font-size:14px;font-weight:500;">점</span></div>
                    <div style="font-size:11px;color:#B0B0B0;margin-top:4px;background:#EDEDED;padding:2px 10px;border-radius:10px;display:inline-block;">개선 필요</div>
                </div>
                <div style="flex:0 0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;">
                    <div style="font-size:24px;color:#C8956C;">&#10145;</div>
                    <div style="font-size:12px;font-weight:700;color:#C8956C;margin-top:4px;">+${improvement}점</div>
                </div>
                <div style="flex:1;text-align:center;padding:20px;background:#FFFAF5;border-radius:10px;border:1px solid #F0E6DA;">
                    <div style="font-size:11px;font-weight:600;color:#C8956C;margin-bottom:8px;">마케팅 진행 후</div>
                    <div style="font-size:36px;font-weight:800;color:#C8956C;">${avgAfter}<span style="font-size:14px;font-weight:500;">점</span></div>
                    <div style="font-size:11px;color:#fff;margin-top:4px;background:#C8956C;padding:2px 10px;border-radius:10px;display:inline-block;">우수</div>
                </div>
            </div>

            <!-- Detail Bars -->
            <div style="padding:18px 20px;background:#FFFAF5;border:1px solid #F0E6DA;border-radius:8px;">
                <div style="font-size:12px;font-weight:600;color:#6B6560;margin-bottom:12px;">항목별 상세 분석</div>
                <div style="display:flex;gap:8px;margin-bottom:10px;">
                    <div style="display:flex;align-items:center;gap:4px;font-size:10px;color:#8A8580;">
                        <span style="display:inline-block;width:12px;height:6px;background:#B0B0B0;border-radius:3px;"></span>미진행
                    </div>
                    <div style="display:flex;align-items:center;gap:4px;font-size:10px;color:#8A8580;">
                        <span style="display:inline-block;width:12px;height:6px;background:#C8956C;border-radius:3px;"></span>진행 후
                    </div>
                </div>
                ${scoreBarsHTML}
            </div>
        </div>
        ` : ''}

        <!-- FOOTER -->
        <div style="background:#2D2A26;padding:24px 36px;margin-top:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <div>
                    <div style="font-size:14px;font-weight:700;color:#C8956C;letter-spacing:1px;">THE BEST</div>
                    <div style="font-size:10px;color:#AEA9A4;margin-top:2px;">더베스트마케팅</div>
                </div>
                <div style="text-align:right;font-size:10px;color:#8A8580;line-height:1.7;">
                    <div>Tel. 010-1234-5678 | Email. thebest@marketing.com</div>
                    <div>본 견적서는 발행일로부터 30일간 유효합니다.</div>
                </div>
            </div>
        </div>

    </div>
    `;

    // Create hidden container
    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.top = '-9999px';
    wrapper.style.left = '-9999px';
    wrapper.style.width = '660px';
    wrapper.innerHTML = pdfHTML;
    document.body.appendChild(wrapper);

    const pdfContent = wrapper.firstElementChild;

    const opt = {
        margin: [8, 8, 8, 8],
        filename: `AI맞춤견적서_${company !== '-' ? company : '견적서'}_${todayFile}.pdf`,
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(pdfContent).save().then(() => {
        document.body.removeChild(wrapper);
    });
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
    document.getElementById('expectedResults').innerHTML = '<div class="result-placeholder"><p>업종과 서비스를 선택하면 AI 분석 결과가 표시됩니다</p></div>';
}
