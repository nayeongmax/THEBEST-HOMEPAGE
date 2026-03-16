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

// ===== Industry Analysis Data for PDF =====
const industryAnalysisData = {
    '뷰티/미용': {
        competition: '높음',
        channels: ['SEO', 'SNS', '리뷰'],
        analysisText: '뷰티 업종은 SNS 기반 비주얼 콘텐츠가 핵심이며 리뷰와 후기가 신규 고객 유입에 결정적 영향을 줍니다.',
        strategies: ['인스타그램 콘텐츠 강화', '블로그 리뷰 확대', 'SEO 키워드 최적화'],
        problems: ['SNS 콘텐츠 경쟁 과열', '리뷰 콘텐츠 부족', '검색 노출 순위 하락'],
        topStrategy: { name: 'SNS', metric: '노출 +85%' },
        bestStrategy: { name: '리뷰', metric: '신뢰도 +70%' },
        packageStrategy: { name: 'SEO', metric: '전환 +45%' },
        contents: [
            { name: '인스타 콘텐츠', desc: '비주얼 브랜딩' },
            { name: '블로그 리뷰', desc: '후기 마케팅' },
            { name: '숏폼 콘텐츠', desc: '바이럴 확산' }
        ]
    },
    '맛집/요식업': {
        competition: '매우 높음',
        channels: ['SEO', 'SNS', '리뷰'],
        analysisText: '요식업은 지역 기반 검색 노출과 리뷰 콘텐츠가 방문 전환에 가장 중요한 요소입니다.',
        strategies: ['블로그 체험단 운영', '인스타그램 맛집 콘텐츠', '네이버 플레이스 최적화'],
        problems: ['지역 검색 노출 부족', '리뷰 수 경쟁 열세', 'SNS 브랜드 인지도 부족'],
        topStrategy: { name: 'SEO', metric: '노출 +90%' },
        bestStrategy: { name: '리뷰', metric: '방문 +65%' },
        packageStrategy: { name: 'SNS', metric: '전환 +40%' },
        contents: [
            { name: '블로그 체험단', desc: '리뷰 확보' },
            { name: '인스타 콘텐츠', desc: '맛집 브랜딩' },
            { name: '네이버 플레이스', desc: '지역 노출' }
        ]
    },
    '숙박/펜션': {
        competition: '중간',
        channels: ['SEO', 'SNS', '리뷰'],
        analysisText: '숙박 업종은 검색 기반 유입이 높고 리뷰 콘텐츠가 예약 전환에 중요한 영향을 줍니다.',
        strategies: ['SEO 콘텐츠 강화', '리뷰 콘텐츠 확장', 'SNS 노출 확대'],
        problems: ['검색 노출 부족', '리뷰 콘텐츠 부족', 'SNS 브랜드 인지도 부족'],
        topStrategy: { name: 'SEO', metric: '노출 +80%' },
        bestStrategy: { name: 'SNS', metric: '노출 +60%' },
        packageStrategy: { name: '리뷰', metric: '전환 +40%' },
        contents: [
            { name: '블로그 콘텐츠', desc: 'SEO 최적화' },
            { name: '인스타 콘텐츠', desc: '브랜드 노출' },
            { name: '리뷰 콘텐츠', desc: '예약 전환 강화' }
        ]
    },
    '병원/의료': {
        competition: '높음',
        channels: ['SEO', '블로그', '언론'],
        analysisText: '의료 업종은 전문성과 신뢰도가 핵심이며 블로그와 언론 홍보가 환자 유입에 큰 영향을 줍니다.',
        strategies: ['전문 블로그 콘텐츠 강화', '언론 홍보 확대', '네이버 검색 최적화'],
        problems: ['전문 콘텐츠 부족', '온라인 신뢰도 미흡', '검색 상위노출 경쟁'],
        topStrategy: { name: 'SEO', metric: '노출 +75%' },
        bestStrategy: { name: '블로그', metric: '신뢰도 +80%' },
        packageStrategy: { name: '언론', metric: '전환 +35%' },
        contents: [
            { name: '전문 블로그', desc: '의료 콘텐츠' },
            { name: '언론 홍보', desc: '신뢰도 구축' },
            { name: '사이트 제작', desc: '예약 시스템' }
        ]
    },
    '학원/교육': {
        competition: '중간',
        channels: ['SEO', '카페', 'SNS'],
        analysisText: '교육 업종은 학부모 커뮤니티와 블로그 검색이 등록 전환에 핵심적인 역할을 합니다.',
        strategies: ['네이버 카페 활성화', '블로그 SEO 강화', '학부모 타겟 콘텐츠'],
        problems: ['카페/커뮤니티 노출 부족', '블로그 콘텐츠 경쟁', 'SNS 인지도 부족'],
        topStrategy: { name: 'SEO', metric: '노출 +80%' },
        bestStrategy: { name: '카페', metric: '유입 +65%' },
        packageStrategy: { name: 'SNS', metric: '전환 +40%' },
        contents: [
            { name: '블로그 콘텐츠', desc: 'SEO 최적화' },
            { name: '카페 활성화', desc: '커뮤니티 노출' },
            { name: '숏폼 콘텐츠', desc: '학원 홍보' }
        ]
    },
    '인테리어/건설': {
        competition: '중간',
        channels: ['SEO', '블로그', '포트폴리오'],
        analysisText: '인테리어 업종은 포트폴리오 중심의 콘텐츠와 블로그 SEO가 문의 전환에 핵심입니다.',
        strategies: ['포트폴리오 블로그 강화', 'SEO 키워드 최적화', '시공 사례 콘텐츠'],
        problems: ['포트폴리오 노출 부족', '검색 상위노출 경쟁', '브랜드 신뢰도 미흡'],
        topStrategy: { name: 'SEO', metric: '노출 +80%' },
        bestStrategy: { name: '블로그', metric: '문의 +60%' },
        packageStrategy: { name: '언론', metric: '신뢰도 +45%' },
        contents: [
            { name: '블로그 콘텐츠', desc: '시공 사례' },
            { name: '포트폴리오', desc: '작업 실적' },
            { name: '언론 홍보', desc: '브랜드 신뢰' }
        ]
    },
    '쇼핑몰/이커머스': {
        competition: '매우 높음',
        channels: ['SEO', 'SNS', '광고'],
        analysisText: '이커머스는 검색 트래픽과 SNS 바이럴이 매출에 직접적 영향을 미치는 업종입니다.',
        strategies: ['인스타그램 쇼핑 콘텐츠', '블로그 체험단 확대', 'SEO 트래픽 강화'],
        problems: ['검색 트래픽 부족', 'SNS 팔로워 경쟁', '구매 전환율 저조'],
        topStrategy: { name: 'SNS', metric: '노출 +90%' },
        bestStrategy: { name: 'SEO', metric: '트래픽 +70%' },
        packageStrategy: { name: '리뷰', metric: '전환 +50%' },
        contents: [
            { name: '인스타 콘텐츠', desc: '쇼핑 마케팅' },
            { name: '블로그 체험단', desc: '리뷰 확보' },
            { name: '숏폼 콘텐츠', desc: '제품 홍보' }
        ]
    },
    '부동산': {
        competition: '중간',
        channels: ['SEO', '블로그', '언론'],
        analysisText: '부동산 업종은 전문 콘텐츠와 지역 기반 SEO가 고객 문의에 핵심적 역할을 합니다.',
        strategies: ['지역 SEO 콘텐츠 강화', '전문 블로그 운영', '언론 홍보 확대'],
        problems: ['지역 검색 노출 부족', '전문 콘텐츠 부족', '온라인 신뢰도 미흡'],
        topStrategy: { name: 'SEO', metric: '노출 +75%' },
        bestStrategy: { name: '블로그', metric: '문의 +60%' },
        packageStrategy: { name: '언론', metric: '신뢰도 +40%' },
        contents: [
            { name: '블로그 콘텐츠', desc: '부동산 정보' },
            { name: '카페 활성화', desc: '지역 노출' },
            { name: '언론 홍보', desc: '전문성 강화' }
        ]
    },
    'IT/스타트업': {
        competition: '높음',
        channels: ['SEO', 'SNS', '콘텐츠'],
        analysisText: 'IT 업종은 기술 콘텐츠 마케팅과 SNS 브랜딩이 유저 확보에 핵심적입니다.',
        strategies: ['기술 블로그 SEO 강화', 'SNS 브랜딩 확대', '콘텐츠 마케팅 강화'],
        problems: ['기술 콘텐츠 노출 부족', 'SNS 브랜딩 미흡', '유저 전환율 저조'],
        topStrategy: { name: 'SEO', metric: '노출 +85%' },
        bestStrategy: { name: 'SNS', metric: '브랜딩 +70%' },
        packageStrategy: { name: '콘텐츠', metric: '전환 +45%' },
        contents: [
            { name: '기술 블로그', desc: 'SEO 최적화' },
            { name: 'SNS 콘텐츠', desc: '브랜드 노출' },
            { name: '영상 콘텐츠', desc: '서비스 소개' }
        ]
    },
    '프랜차이즈': {
        competition: '높음',
        channels: ['SEO', 'SNS', '언론'],
        analysisText: '프랜차이즈는 브랜드 통일성과 지역별 마케팅 전략이 가맹점 매출에 직결됩니다.',
        strategies: ['통합 브랜드 콘텐츠', '지역별 SEO 최적화', 'SNS 통합 운영'],
        problems: ['브랜드 통일성 부족', '지역별 노출 격차', 'SNS 통합 관리 미흡'],
        topStrategy: { name: 'SEO', metric: '노출 +80%' },
        bestStrategy: { name: 'SNS', metric: '인지도 +65%' },
        packageStrategy: { name: '리뷰', metric: '전환 +45%' },
        contents: [
            { name: '블로그 콘텐츠', desc: '브랜드 통합' },
            { name: 'SNS 콘텐츠', desc: '통합 운영' },
            { name: '리뷰 관리', desc: '평판 관리' }
        ]
    },
    '제조업': {
        competition: '낮음',
        channels: ['SEO', '블로그', '언론'],
        analysisText: '제조업은 B2B 특성상 전문 콘텐츠와 언론 홍보가 거래처 확보에 핵심입니다.',
        strategies: ['전문 블로그 콘텐츠', '언론 홍보 강화', '사이트 SEO 최적화'],
        problems: ['온라인 노출 전무', '전문 콘텐츠 부족', 'B2B 인지도 미흡'],
        topStrategy: { name: 'SEO', metric: '노출 +70%' },
        bestStrategy: { name: '언론', metric: '신뢰도 +65%' },
        packageStrategy: { name: '블로그', metric: '문의 +40%' },
        contents: [
            { name: '전문 블로그', desc: '기술 콘텐츠' },
            { name: '언론 홍보', desc: '기업 PR' },
            { name: '사이트 제작', desc: 'B2B 전용' }
        ]
    },
    '기타': {
        competition: '중간',
        channels: ['SEO', 'SNS', '블로그'],
        analysisText: '업종 특성에 맞는 맞춤형 마케팅 전략으로 온라인 노출과 전환율을 극대화합니다.',
        strategies: ['SEO 콘텐츠 강화', 'SNS 노출 확대', '블로그 마케팅 운영'],
        problems: ['검색 노출 부족', 'SNS 인지도 부족', '콘텐츠 경쟁력 미흡'],
        topStrategy: { name: 'SEO', metric: '노출 +75%' },
        bestStrategy: { name: 'SNS', metric: '인지도 +60%' },
        packageStrategy: { name: '블로그', metric: '전환 +40%' },
        contents: [
            { name: '블로그 콘텐츠', desc: 'SEO 최적화' },
            { name: 'SNS 콘텐츠', desc: '브랜드 노출' },
            { name: '리뷰 콘텐츠', desc: '전환 강화' }
        ]
    }
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
        ctx.fillStyle = '#555555';
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
    ctx.fillStyle = '#555555';
    ctx.font = '600 10px "Noto Sans KR", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < sides; i++) {
        const [x, y] = pt(start + i * step, radius + 22);
        ctx.fillText(data.labels[i], x, y);
    }
}

// ===== PDF Download (Portrait Marketing Proposal) =====
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
    const analysisData = industryAnalysisData[industry] || industryAnalysisData['기타'];
    const boost = Math.min(selected.length * 2, 10);
    const boostedAfter = radarData.after.map(v => Math.min(v + boost, 100));
    const displayAfter = selected.length > 0 ? boostedAfter : radarData.after;
    const avgBefore = Math.round(radarData.before.reduce((a, b) => a + b, 0) / 5);
    const avgAfter = Math.round(displayAfter.reduce((a, b) => a + b, 0) / 5);
    const improvement = avgAfter - avgBefore;
    const exposureBoost = Math.round(improvement / avgBefore * 100);

    // ===== Portrait A4 dimensions =====
    const W = 680, H = 960;
    const totalPages = 6;
    const S = `width:${W}px;height:${H}px;position:relative;overflow:hidden;box-sizing:border-box;font-family:'Noto Sans KR',sans-serif;`;

    // Channel icon mapping
    const channelIcons = {
        'SEO': '&#128269;',
        'SNS': '&#128241;',
        '리뷰': '&#11088;',
        '블로그': '&#128221;',
        '언론': '&#128240;',
        '카페': '&#9749;',
        '광고': '&#128226;',
        '콘텐츠': '&#127916;',
        '포트폴리오': '&#128444;'
    };

    const pages = [];

    // ====== PAGE 1: COVER (Dark with Blue Gradient) ======
    pages.push(`<div style="${S}background:#111111;color:#ffffff;">
        <!-- Top blue gradient band -->
        <div style="position:absolute;top:0;left:0;right:0;height:180px;background:linear-gradient(180deg,#1e3a5f 0%,#2a5298 40%,transparent 100%);opacity:0.6;"></div>

        <!-- THE BEST logo -->
        <div style="position:relative;z-index:1;text-align:center;padding-top:80px;">
            <div style="font-size:28px;font-weight:800;letter-spacing:8px;margin-bottom:60px;">
                <span style="color:#ffffff;">THE </span><span style="color:#C8A96A;">BEST</span>
            </div>
        </div>

        <!-- Center content -->
        <div style="position:relative;z-index:1;text-align:center;padding:0 60px;">
            <div style="font-size:13px;font-weight:500;color:#C8A96A;letter-spacing:6px;margin-bottom:16px;">AI MARKETING PROPOSAL</div>
            <div style="font-size:32px;font-weight:800;color:#ffffff;margin-bottom:40px;line-height:1.3;">AI 맞춤 마케팅 전략 제안서</div>

            <!-- Info boxes -->
            <div style="display:flex;justify-content:center;gap:24px;margin-bottom:50px;">
                <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:10px;padding:18px 36px;text-align:center;min-width:140px;">
                    <div style="font-size:10px;color:#999999;margin-bottom:6px;">업종</div>
                    <div style="font-size:16px;font-weight:700;color:#ffffff;">${industry}</div>
                </div>
                <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:10px;padding:18px 36px;text-align:center;min-width:140px;">
                    <div style="font-size:10px;color:#999999;margin-bottom:6px;">예상 예산</div>
                    <div style="font-size:16px;font-weight:700;color:#ffffff;">${total.toLocaleString()}원</div>
                </div>
            </div>

            <!-- KPI Highlight -->
            <div style="margin-bottom:50px;">
                <div style="font-size:11px;color:#888888;margin-bottom:8px;">예상 노출 상승</div>
                <div style="font-size:48px;font-weight:900;color:#C8A96A;letter-spacing:2px;">+${exposureBoost}%</div>
            </div>
        </div>

        <!-- Bottom branding -->
        <div style="position:absolute;bottom:50px;left:0;right:0;text-align:center;">
            <div style="width:60px;height:1px;background:#C8A96A;margin:0 auto 16px;"></div>
            <div style="font-size:12px;font-weight:600;color:#888888;letter-spacing:4px;">THE BEST MARKETING</div>
        </div>
    </div>`);

    // ====== PAGE 2: AI 마케팅 분석 ======
    const channelHTML = analysisData.channels.map(ch =>
        `<div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#333333;margin-bottom:4px;">
            <span style="font-size:14px;">${channelIcons[ch] || '&#128205;'}</span> ${ch}
        </div>`
    ).join('');

    const strategyHTML = analysisData.strategies.map(s =>
        `<div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#333333;margin-bottom:6px;">
            <span style="color:#C8A96A;font-weight:700;">&#10003;</span> ${s}
        </div>`
    ).join('');

    pages.push(`<div style="${S}background:#ffffff;color:#111111;padding:50px;">
        <!-- Page header -->
        <div style="margin-bottom:8px;">
            <div style="font-size:11px;font-weight:600;color:#C8A96A;letter-spacing:3px;margin-bottom:6px;">AI MARKETING ANALYSIS</div>
            <div style="font-size:22px;font-weight:800;color:#111111;margin-bottom:4px;">AI 기반 업종 맞춤 마케팅 분석</div>
            <div style="width:40px;height:3px;background:#C8A96A;margin-top:10px;margin-bottom:30px;"></div>
        </div>

        <!-- Two column layout -->
        <div style="display:flex;gap:28px;">
            <!-- Left column: 업종 분석 -->
            <div style="flex:1;background:#F8F6F2;border:1px solid #E8E2DB;border-radius:12px;padding:28px;">
                <div style="margin-bottom:24px;">
                    <div style="font-size:13px;font-weight:700;color:#111111;margin-bottom:10px;">업종 분석</div>
                    <div style="font-size:18px;font-weight:800;color:#C8A96A;">${industry}</div>
                </div>
                <div style="margin-bottom:24px;">
                    <div style="font-size:13px;font-weight:700;color:#111111;margin-bottom:8px;">경쟁도</div>
                    <div style="display:inline-block;background:#111111;color:#C8A96A;font-size:13px;font-weight:700;padding:4px 14px;border-radius:6px;">${analysisData.competition}</div>
                </div>
                <div>
                    <div style="font-size:13px;font-weight:700;color:#111111;margin-bottom:10px;">추천 채널</div>
                    ${channelHTML}
                </div>
            </div>

            <!-- Right column: AI 분석 결과 -->
            <div style="flex:1;display:flex;flex-direction:column;gap:20px;">
                <div style="background:#F8F6F2;border:1px solid #E8E2DB;border-radius:12px;padding:28px;flex:1;">
                    <div style="font-size:13px;font-weight:700;color:#111111;margin-bottom:12px;">AI 분석 결과</div>
                    <div style="font-size:13px;color:#444444;line-height:1.8;background:#ffffff;border:1px solid #E8E2DB;border-radius:8px;padding:18px;">${analysisData.analysisText}</div>
                </div>
                <div style="background:#F8F6F2;border:1px solid #E8E2DB;border-radius:12px;padding:28px;flex:1;">
                    <div style="font-size:13px;font-weight:700;color:#111111;margin-bottom:12px;">추천 전략</div>
                    ${strategyHTML}
                </div>
            </div>
        </div>

        <!-- Page number -->
        <div style="position:absolute;bottom:30px;right:50px;font-size:9px;color:#999999;">2 / ${totalPages}</div>
    </div>`);

    // ====== PAGE 3: 업종 문제 분석 (Radar Chart) ======
    const problemHTML = analysisData.problems.map((p, i) => {
        const icons = ['&#128269;', '&#11088;', '&#128241;'];
        return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <span style="font-size:16px;">${icons[i] || '&#128204;'}</span>
            <span style="font-size:13px;font-weight:600;color:#333333;">${p}</span>
        </div>`;
    }).join('');

    pages.push(`<div style="${S}background:#ffffff;color:#111111;padding:50px;">
        <!-- Page header -->
        <div style="margin-bottom:8px;">
            <div style="font-size:11px;font-weight:600;color:#C8A96A;letter-spacing:3px;margin-bottom:6px;">INDUSTRY PROBLEM ANALYSIS</div>
            <div style="font-size:22px;font-weight:800;color:#111111;margin-bottom:4px;">업종 마케팅 문제 분석</div>
            <div style="width:40px;height:3px;background:#C8A96A;margin-top:10px;margin-bottom:30px;"></div>
        </div>

        <!-- Radar chart section -->
        <div style="background:#F8F6F2;border:1px solid #E8E2DB;border-radius:12px;padding:30px;margin-bottom:28px;">
            <div style="font-size:14px;font-weight:700;color:#111111;margin-bottom:6px;">레이더 차트 (5각형 분석)</div>
            <div style="font-size:11px;color:#888888;margin-bottom:16px;">${radarData.labels.join(' / ')}</div>
            <div style="display:flex;justify-content:center;">
                <canvas id="pdfRadarCanvas" style="display:block;"></canvas>
            </div>
            <div style="display:flex;justify-content:center;gap:20px;margin-top:12px;">
                <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#888888;"><span style="width:14px;height:4px;background:#CFCFCF;border-radius:2px;display:inline-block;"></span>현재 (미진행)</div>
                <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#888888;"><span style="width:14px;height:4px;background:#C8A96A;border-radius:2px;display:inline-block;"></span>진행 후 (예상)</div>
            </div>
        </div>

        <!-- Key problems -->
        <div style="background:#F8F6F2;border:1px solid #E8E2DB;border-radius:12px;padding:28px;">
            <div style="font-size:14px;font-weight:700;color:#111111;margin-bottom:16px;">주요 문제</div>
            ${problemHTML}
        </div>

        <!-- Page number -->
        <div style="position:absolute;bottom:30px;right:50px;font-size:9px;color:#999999;">3 / ${totalPages}</div>
    </div>`);

    // ====== PAGE 4: AI 추천 전략 ======
    const ts = analysisData.topStrategy;
    const bs = analysisData.bestStrategy;
    const ps = analysisData.packageStrategy;
    const cts = analysisData.contents;

    pages.push(`<div style="${S}background:#ffffff;color:#111111;padding:50px;">
        <!-- Page header -->
        <div style="margin-bottom:8px;">
            <div style="font-size:11px;font-weight:600;color:#C8A96A;letter-spacing:3px;margin-bottom:6px;">AI RECOMMENDED STRATEGY</div>
            <div style="font-size:22px;font-weight:800;color:#111111;margin-bottom:4px;">AI 추천 마케팅 전략</div>
            <div style="width:40px;height:3px;background:#C8A96A;margin-top:10px;margin-bottom:30px;"></div>
        </div>

        <!-- Top 3 strategy cards -->
        <div style="display:flex;gap:16px;margin-bottom:20px;">
            <div style="flex:1;background:#F8F6F2;border:1px solid #E8E2DB;border-radius:12px;padding:24px;text-align:center;">
                <div style="font-size:11px;font-weight:600;color:#C8A96A;margin-bottom:6px;">AI 추천</div>
                <div style="font-size:14px;margin-bottom:2px;">&#128269;</div>
                <div style="font-size:16px;font-weight:800;color:#111111;margin-bottom:6px;">${ts.name}</div>
                <div style="font-size:14px;font-weight:700;color:#C8A96A;">${ts.metric}</div>
            </div>
            <div style="flex:1;background:#F8F6F2;border:1px solid #E8E2DB;border-radius:12px;padding:24px;text-align:center;">
                <div style="font-size:11px;font-weight:600;color:#C8A96A;margin-bottom:6px;">BEST 전략</div>
                <div style="font-size:14px;margin-bottom:2px;">&#128241;</div>
                <div style="font-size:16px;font-weight:800;color:#111111;margin-bottom:6px;">${bs.name}</div>
                <div style="font-size:14px;font-weight:700;color:#C8A96A;">${bs.metric}</div>
            </div>
            <div style="flex:1;background:#F8F6F2;border:1px solid #E8E2DB;border-radius:12px;padding:24px;text-align:center;">
                <div style="font-size:11px;font-weight:600;color:#C8A96A;margin-bottom:6px;">추천 패키지</div>
                <div style="font-size:14px;margin-bottom:2px;">&#11088;</div>
                <div style="font-size:16px;font-weight:800;color:#111111;margin-bottom:6px;">${ps.name}</div>
                <div style="font-size:14px;font-weight:700;color:#C8A96A;">${ps.metric}</div>
            </div>
        </div>

        <!-- Bottom 3 content cards -->
        <div style="display:flex;gap:16px;">
            ${cts.map(c => `
                <div style="flex:1;background:#111111;border-radius:12px;padding:24px;text-align:center;">
                    <div style="font-size:15px;font-weight:800;color:#ffffff;margin-bottom:6px;">${c.name}</div>
                    <div style="font-size:12px;color:#C8A96A;">${c.desc}</div>
                </div>
            `).join('')}
        </div>

        <!-- Page number -->
        <div style="position:absolute;bottom:30px;right:50px;font-size:9px;color:#999999;">4 / ${totalPages}</div>
    </div>`);

    // ====== PAGE 5: 마케팅 견적 + 예상 효과 ======
    // Determine main service name for display
    const mainServiceName = selected.length > 0 ? selected.map(s => s.name).join(' + ') : '마케팅 서비스';
    const mainServiceDesc = selected.length > 0 ? selected.map(s => `${s.name} (${s.tierName})`).join(', ') : '-';

    // Work items from selected services
    let workItemsHTML = '';
    const uniqueSvcs = [...new Set(selected.map(s => s.name))];
    const allWorkItems = [];
    uniqueSvcs.forEach(name => {
        const cfg = serviceConfig[name];
        if (cfg) cfg.workItems.slice(0, 2).forEach(w => allWorkItems.push(w));
    });
    if (allWorkItems.length === 0) allWorkItems.push('키워드 분석', '콘텐츠 제작', 'SEO 최적화', '성과 리포트 제공');
    workItemsHTML = allWorkItems.slice(0, 6).map(w =>
        `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
            <span style="color:#C8A96A;font-weight:700;font-size:13px;">&#10003;</span>
            <span style="font-size:13px;color:#333333;">${w}</span>
        </div>`
    ).join('');

    // Metric values from analysis data
    const metricLabels = radarData.labels;
    const metric1Diff = displayAfter[0] - radarData.before[0];
    const metric2Diff = displayAfter[2] - radarData.before[2];
    const metric3Diff = displayAfter[3] - radarData.before[3];

    pages.push(`<div style="${S}background:#ffffff;color:#111111;padding:50px;">
        <!-- Page header -->
        <div style="margin-bottom:8px;">
            <div style="font-size:11px;font-weight:600;color:#C8A96A;letter-spacing:3px;margin-bottom:6px;">MARKETING PROPOSAL</div>
            <div style="font-size:22px;font-weight:800;color:#111111;margin-bottom:4px;">마케팅 견적 및 예상 효과</div>
            <div style="width:40px;height:3px;background:#C8A96A;margin-top:10px;margin-bottom:30px;"></div>
        </div>

        <!-- Service info -->
        <div style="background:#F8F6F2;border:1px solid #E8E2DB;border-radius:12px;padding:28px;margin-bottom:20px;">
            <div style="font-size:13px;font-weight:700;color:#111111;margin-bottom:6px;">서비스</div>
            <div style="font-size:16px;font-weight:800;color:#C8A96A;margin-bottom:20px;">${mainServiceName}</div>

            <div style="font-size:13px;font-weight:700;color:#111111;margin-bottom:12px;">포함 서비스</div>
            ${workItemsHTML}
        </div>

        <!-- Expected effects - 3 metric boxes -->
        <div style="display:flex;gap:16px;margin-bottom:20px;">
            <div style="flex:1;background:#F8F6F2;border:1px solid #E8E2DB;border-radius:12px;padding:20px;text-align:center;">
                <div style="font-size:12px;font-weight:600;color:#111111;margin-bottom:8px;">${metricLabels[0] || '노출 증가'}</div>
                <div style="font-size:26px;font-weight:900;color:#C8A96A;">+${metric1Diff}%</div>
            </div>
            <div style="flex:1;background:#F8F6F2;border:1px solid #E8E2DB;border-radius:12px;padding:20px;text-align:center;">
                <div style="font-size:12px;font-weight:600;color:#111111;margin-bottom:8px;">${metricLabels[2] || '브랜드 인지도'}</div>
                <div style="font-size:26px;font-weight:900;color:#C8A96A;">+${metric2Diff}%</div>
            </div>
            <div style="flex:1;background:#F8F6F2;border:1px solid #E8E2DB;border-radius:12px;padding:20px;text-align:center;">
                <div style="font-size:12px;font-weight:600;color:#111111;margin-bottom:8px;">${metricLabels[3] || '전환율'}</div>
                <div style="font-size:26px;font-weight:900;color:#C8A96A;">+${metric3Diff}%</div>
            </div>
        </div>

        <!-- Monthly cost -->
        <div style="background:#111111;border-radius:12px;padding:24px 28px;display:flex;justify-content:space-between;align-items:center;">
            <div>
                <div style="font-size:13px;font-weight:600;color:#999999;">월 마케팅 비용</div>
            </div>
            <div style="font-size:28px;font-weight:900;color:#C8A96A;">${total.toLocaleString()}원</div>
        </div>

        <!-- Page number -->
        <div style="position:absolute;bottom:30px;right:50px;font-size:9px;color:#999999;">5 / ${totalPages}</div>
    </div>`);

    // ====== PAGE 6: THANK YOU / CLOSING ======
    pages.push(`<div style="${S}background:#111111;color:#ffffff;">
        <!-- Top blue gradient band -->
        <div style="position:absolute;top:0;left:0;right:0;height:120px;background:linear-gradient(180deg,#1e3a5f 0%,#2a5298 30%,transparent 100%);opacity:0.5;"></div>

        <div style="position:relative;z-index:1;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;text-align:center;">
            <div style="font-size:36px;font-weight:800;color:#ffffff;margin-bottom:10px;">감사합니다</div>
            <div style="font-size:13px;color:#888888;margin-bottom:40px;">더베스트마케팅과 함께 성공적인 마케팅을 시작하세요</div>
            <div style="width:60px;height:2px;background:#C8A96A;margin-bottom:40px;"></div>

            <div style="display:flex;gap:36px;margin-bottom:40px;">
                <div><div style="font-size:9px;color:#666666;margin-bottom:4px;">TEL</div><div style="font-size:13px;font-weight:600;color:#ffffff;">010-1234-5678</div></div>
                <div><div style="font-size:9px;color:#666666;margin-bottom:4px;">EMAIL</div><div style="font-size:13px;font-weight:600;color:#ffffff;">thebest@marketing.com</div></div>
                <div><div style="font-size:9px;color:#666666;margin-bottom:4px;">KAKAO</div><div style="font-size:13px;font-weight:600;color:#ffffff;">@THEBEST</div></div>
            </div>

            <div style="font-size:22px;font-weight:800;letter-spacing:4px;">
                <span style="color:#ffffff;">THE </span><span style="color:#C8A96A;">BEST</span>
            </div>
            <div style="font-size:10px;color:#666666;margin-top:4px;">더베스트마케팅</div>
        </div>

        <div style="position:absolute;bottom:30px;left:0;right:0;text-align:center;font-size:9px;color:#555555;">
            본 견적서는 발행일로부터 30일간 유효합니다.
        </div>
        <div style="position:absolute;bottom:30px;right:50px;font-size:9px;color:#555555;">6 / ${totalPages}</div>
    </div>`);

    // ===== RENDER: html2canvas each page -> jsPDF combine =====
    const container = document.createElement('div');
    container.style.cssText = `position:absolute;left:-9999px;top:0;`;
    container.innerHTML = pages.join('');
    document.body.appendChild(container);

    const slides = container.children;

    // Draw radar chart on canvas element inside the rendered DOM
    const radarCanvas = container.querySelector('#pdfRadarCanvas');
    if (radarCanvas) {
        drawRadarCanvas(radarCanvas, { labels: radarData.labels, before: radarData.before, after: displayAfter }, 420, 320);
    }

    // Wait for rendering, then generate PDF
    setTimeout(async () => {
        try {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
            const pdfW = 210, pdfH = 297;

            for (let i = 0; i < slides.length; i++) {
                if (i > 0) pdf.addPage();
                const bgColor = (i === 0 || i === 5) ? '#111111' : '#ffffff';
                const canvas = await html2canvas(slides[i], {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: bgColor,
                    logging: false,
                    width: W,
                    height: H
                });
                const imgData = canvas.toDataURL('image/jpeg', 0.95);
                pdf.addImage(imgData, 'JPEG', 0, 0, pdfW, pdfH);
            }

            pdf.save(`AI마케팅제안서_${company !== '-' ? company : '견적서'}_${todayFile}.pdf`);
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
