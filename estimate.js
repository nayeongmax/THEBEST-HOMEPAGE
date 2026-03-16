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

// ===== Industry Radar Data (realistic 1-month improvement) =====
const industryRadarData = {
    '뷰티/미용': { labels: ['온라인 노출', '고객 유입', '브랜드 신뢰도', '전환율', '재방문율'], before: [25, 20, 30, 15, 20], after: [42, 35, 45, 28, 32] },
    '맛집/요식업': { labels: ['온라인 노출', '고객 유입', '브랜드 신뢰도', '전환율', '재방문율'], before: [30, 25, 25, 20, 35], after: [48, 40, 40, 33, 48] },
    '숙박/펜션': { labels: ['온라인 노출', '예약 전환', '브랜드 신뢰도', '객실 가동률', '재방문율'], before: [20, 15, 25, 30, 15], after: [38, 28, 40, 44, 26] },
    '병원/의료': { labels: ['온라인 노출', '신규 환자', '브랜드 신뢰도', '예약 전환', '재방문율'], before: [20, 15, 35, 15, 30], after: [36, 28, 50, 26, 42] },
    '학원/교육': { labels: ['온라인 노출', '학생 유입', '브랜드 신뢰도', '등록 전환', '재등록율'], before: [25, 20, 30, 20, 25], after: [42, 34, 44, 32, 36] },
    '인테리어/건설': { labels: ['온라인 노출', '문의량', '브랜드 신뢰도', '계약 전환', '소개율'], before: [15, 15, 25, 10, 20], after: [32, 28, 40, 20, 32] },
    '쇼핑몰/이커머스': { labels: ['온라인 노출', '트래픽', '브랜드 신뢰도', '구매 전환', '재구매율'], before: [30, 25, 20, 15, 20], after: [50, 42, 35, 28, 32] },
    '부동산': { labels: ['온라인 노출', '문의량', '브랜드 신뢰도', '계약 전환', '소개율'], before: [20, 15, 30, 10, 25], after: [36, 28, 44, 20, 36] },
    'IT/스타트업': { labels: ['온라인 노출', '유저 유입', '브랜드 신뢰도', '전환율', '리텐션'], before: [30, 20, 15, 15, 15], after: [48, 35, 28, 26, 25] },
    '프랜차이즈': { labels: ['온라인 노출', '고객 유입', '브랜드 신뢰도', '전환율', '충성도'], before: [35, 30, 35, 20, 25], after: [52, 44, 48, 32, 36] },
    '제조업': { labels: ['온라인 노출', '문의량', '브랜드 신뢰도', '계약 전환', 'B2B 인지도'], before: [15, 10, 30, 10, 15], after: [30, 22, 44, 18, 28] },
    '기타': { labels: ['온라인 노출', '고객 유입', '브랜드 신뢰도', '전환율', '재방문율'], before: [20, 18, 25, 15, 18], after: [36, 32, 38, 26, 28] }
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
        channels: ['인스타그램', '네이버 블로그', '유튜브'],
        analysisText: '뷰티 업종은 비주얼 중심의 SNS 콘텐츠와 블로그 후기가 신규 고객 유입과 예약 전환의 핵심 동력입니다. 인스타그램 릴스를 통한 바이럴과 블로그 체험단 리뷰를 동시에 운영해야 합니다.',
        strategies: ['인스타그램 릴스 + 피드를 활용한 비포/애프터 콘텐츠로 MZ세대 유입 극대화', '네이버 블로그 체험단 20명 이상 운영으로 후기 장악 및 검색 상위노출', '유튜브 숏폼으로 시술 과정 공개하여 신뢰도와 바이럴 동시 확보'],
        topStrategy: { name: '인스타그램', metric: '노출 +85%' },
        bestStrategy: { name: '블로그', metric: '신뢰도 +70%' },
        packageStrategy: { name: '유튜브', metric: '전환 +45%' },
        contents: [
            { name: '인스타 콘텐츠', desc: '비주얼 브랜딩' },
            { name: '블로그 체험단', desc: '후기 마케팅' },
            { name: '숏폼 콘텐츠', desc: '바이럴 확산' }
        ]
    },
    '맛집/요식업': {
        competition: '매우 높음',
        channels: ['네이버 블로그', '인스타그램', '네이버 플레이스'],
        analysisText: '요식업은 지역 기반 블로그 검색과 인스타그램 맛집 태그가 방문 전환의 핵심입니다. 체험단 리뷰와 릴스 콘텐츠를 병행해야 경쟁 업체를 이길 수 있습니다.',
        strategies: ['블로그 체험단 30명 이상 동시 운영으로 네이버 검색 상위 5개 장악', '인스타그램 맛집 태그 + 릴스로 로컬 MZ세대 유입 파이프라인 구축', '네이버 플레이스 리뷰 관리 + 사진 최적화로 지역 검색 1페이지 확보'],
        topStrategy: { name: '블로그', metric: '노출 +90%' },
        bestStrategy: { name: '인스타그램', metric: '방문 +65%' },
        packageStrategy: { name: '네이버 플레이스', metric: '전환 +40%' },
        contents: [
            { name: '블로그 체험단', desc: '리뷰 확보' },
            { name: '인스타 콘텐츠', desc: '맛집 브랜딩' },
            { name: '플레이스 최적화', desc: '지역 노출' }
        ]
    },
    '숙박/펜션': {
        competition: '중간',
        channels: ['네이버 블로그', '인스타그램', '유튜브'],
        analysisText: '숙박 업종은 블로그 검색 기반 유입이 높고 인스타그램 감성 사진이 예약 전환에 결정적 역할을 합니다. 시즌별 콘텐츠 전략이 필수입니다.',
        strategies: ['블로그 체험단으로 객실별 상세 후기 확보 → 네이버 검색 상위노출', '인스타그램 감성 숙소 사진 + 릴스로 예약 전환율 극대화', '유튜브 브이로그 형식의 숙박 체험 영상으로 신뢰도 구축'],
        topStrategy: { name: '블로그', metric: '노출 +80%' },
        bestStrategy: { name: '인스타그램', metric: '예약 +60%' },
        packageStrategy: { name: '유튜브', metric: '전환 +40%' },
        contents: [
            { name: '블로그 체험단', desc: '숙소 후기' },
            { name: '인스타 콘텐츠', desc: '감성 브랜딩' },
            { name: '유튜브 브이로그', desc: '체험 영상' }
        ]
    },
    '병원/의료': {
        competition: '높음',
        channels: ['네이버 블로그', '유튜브', '네이버 카페'],
        analysisText: '의료 업종은 전문성과 신뢰도가 핵심이며, 블로그 전문 콘텐츠와 유튜브 의료정보 영상이 환자 유입에 결정적 영향을 줍니다. 카페 커뮤니티도 활용해야 합니다.',
        strategies: ['네이버 블로그에 전문 의료 콘텐츠 20건/월 발행 → 검색 상위 장악', '유튜브 의료 정보 영상으로 원장 개인 브랜딩 + 환자 신뢰도 확보', '네이버 카페 건강 커뮤니티에 전문가 답변으로 잠재 환자 유입'],
        topStrategy: { name: '블로그', metric: '노출 +75%' },
        bestStrategy: { name: '유튜브', metric: '신뢰도 +80%' },
        packageStrategy: { name: '카페', metric: '유입 +35%' },
        contents: [
            { name: '전문 블로그', desc: '의료 콘텐츠' },
            { name: '유튜브 영상', desc: '원장 브랜딩' },
            { name: '카페 활동', desc: '환자 유입' }
        ]
    },
    '학원/교육': {
        competition: '중간',
        channels: ['네이버 카페', '네이버 블로그', '인스타그램'],
        analysisText: '교육 업종은 학부모 커뮤니티(카페)와 블로그 후기가 등록 전환의 핵심입니다. 인스타그램으로 학원 분위기를 전달하면 상담 문의가 증가합니다.',
        strategies: ['네이버 카페 학부모 커뮤니티 활성화로 입소문 + 자연 유입 확보', '블로그 학원 후기/합격 사례 콘텐츠로 검색 노출 및 신뢰도 구축', '인스타그램으로 수업 현장/학생 성과를 시각적으로 전달하여 상담 유도'],
        topStrategy: { name: '카페', metric: '유입 +80%' },
        bestStrategy: { name: '블로그', metric: '신뢰도 +65%' },
        packageStrategy: { name: '인스타그램', metric: '상담 +40%' },
        contents: [
            { name: '카페 활성화', desc: '커뮤니티 운영' },
            { name: '블로그 콘텐츠', desc: '합격 후기' },
            { name: '인스타 콘텐츠', desc: '학원 홍보' }
        ]
    },
    '인테리어/건설': {
        competition: '중간',
        channels: ['네이버 블로그', '인스타그램', '유튜브'],
        analysisText: '인테리어 업종은 시공 사례 포트폴리오가 문의 전환의 핵심입니다. 블로그와 인스타로 비포/애프터를 보여주고, 유튜브로 시공 과정을 공개해야 합니다.',
        strategies: ['블로그에 시공 비포/애프터 + 견적 사례 콘텐츠로 검색 상위노출', '인스타그램 포트폴리오 피드로 시각적 신뢰도 구축 + 문의 유도', '유튜브 시공 현장 타임랩스 영상으로 기술력과 전문성 어필'],
        topStrategy: { name: '블로그', metric: '문의 +80%' },
        bestStrategy: { name: '인스타그램', metric: '신뢰도 +60%' },
        packageStrategy: { name: '유튜브', metric: '전환 +45%' },
        contents: [
            { name: '블로그 콘텐츠', desc: '시공 사례' },
            { name: '인스타 포트폴리오', desc: '작업 실적' },
            { name: '유튜브 영상', desc: '시공 과정' }
        ]
    },
    '쇼핑몰/이커머스': {
        competition: '매우 높음',
        channels: ['인스타그램', '네이버 블로그', '유튜브'],
        analysisText: '이커머스는 인스타그램 쇼핑 태그와 블로그 체험단 리뷰가 구매 전환에 직접적 영향을 미칩니다. 숏폼 콘텐츠로 바이럴을 만들어야 합니다.',
        strategies: ['인스타그램 쇼핑 태그 + 릴스 제품 리뷰로 즉시 구매 전환 유도', '블로그 체험단 대량 운영으로 제품별 검색 상위노출 장악', '유튜브 숏폼으로 제품 언박싱/사용 후기 바이럴 콘텐츠 제작'],
        topStrategy: { name: '인스타그램', metric: '노출 +90%' },
        bestStrategy: { name: '블로그', metric: '트래픽 +70%' },
        packageStrategy: { name: '유튜브', metric: '전환 +50%' },
        contents: [
            { name: '인스타 콘텐츠', desc: '쇼핑 마케팅' },
            { name: '블로그 체험단', desc: '리뷰 확보' },
            { name: '숏폼 콘텐츠', desc: '제품 홍보' }
        ]
    },
    '부동산': {
        competition: '중간',
        channels: ['네이버 블로그', '유튜브', '네이버 카페'],
        analysisText: '부동산 업종은 전문 정보 콘텐츠와 지역 기반 블로그가 고객 문의에 핵심적 역할을 합니다. 유튜브로 매물 투어 영상을 제공하면 신뢰도가 급상승합니다.',
        strategies: ['네이버 블로그에 지역 부동산 시세/정보 콘텐츠로 전문가 포지셔닝', '유튜브 매물 투어 영상으로 비대면 방문 효과 + 문의 전환', '네이버 카페 지역 커뮤니티 활동으로 중개 신뢰도 및 소개율 확보'],
        topStrategy: { name: '블로그', metric: '노출 +75%' },
        bestStrategy: { name: '유튜브', metric: '문의 +60%' },
        packageStrategy: { name: '카페', metric: '신뢰도 +40%' },
        contents: [
            { name: '블로그 콘텐츠', desc: '부동산 정보' },
            { name: '유튜브 영상', desc: '매물 투어' },
            { name: '카페 활동', desc: '지역 네트워크' }
        ]
    },
    'IT/스타트업': {
        competition: '높음',
        channels: ['인스타그램', '유튜브', '네이버 블로그'],
        analysisText: 'IT 업종은 서비스/제품의 가치를 콘텐츠로 전달하는 것이 핵심입니다. 인스타그램 브랜딩과 유튜브 서비스 소개 영상이 유저 확보에 결정적입니다.',
        strategies: ['인스타그램 브랜드 피드 + 릴스로 MZ타겟 인지도 및 앱 다운로드 유도', '유튜브 서비스 소개/튜토리얼 영상으로 사용자 온보딩 및 리텐션 강화', '네이버 블로그 기술 콘텐츠로 B2B 검색 유입 및 기업 신뢰도 확보'],
        topStrategy: { name: '인스타그램', metric: '브랜딩 +85%' },
        bestStrategy: { name: '유튜브', metric: '유입 +70%' },
        packageStrategy: { name: '블로그', metric: '전환 +45%' },
        contents: [
            { name: '인스타 브랜딩', desc: '서비스 홍보' },
            { name: '유튜브 영상', desc: '서비스 소개' },
            { name: '기술 블로그', desc: 'B2B 유입' }
        ]
    },
    '프랜차이즈': {
        competition: '높음',
        channels: ['인스타그램', '네이버 블로그', '유튜브'],
        analysisText: '프랜차이즈는 본사 브랜드 통일성과 지역별 가맹점 개별 마케팅을 동시에 운영해야 합니다. 통합 SNS 전략이 가맹점 매출에 직결됩니다.',
        strategies: ['인스타그램 본사 통합 피드 + 가맹점별 지역 릴스로 이중 전략 운영', '블로그 지역별 키워드 최적화로 각 가맹점 검색 상위노출 확보', '유튜브 브랜드 스토리 + 가맹 안내 영상으로 신규 가맹 문의 확대'],
        topStrategy: { name: '인스타그램', metric: '인지도 +80%' },
        bestStrategy: { name: '블로그', metric: '노출 +65%' },
        packageStrategy: { name: '유튜브', metric: '가맹 +45%' },
        contents: [
            { name: '인스타 통합운영', desc: '브랜드 통일' },
            { name: '블로그 지역 SEO', desc: '가맹점 노출' },
            { name: '유튜브 브랜딩', desc: '가맹 홍보' }
        ]
    },
    '제조업': {
        competition: '낮음',
        channels: ['네이버 블로그', '유튜브', '네이버 카페'],
        analysisText: '제조업은 B2B 특성상 전문 콘텐츠와 기업 신뢰도가 거래처 확보의 핵심입니다. 블로그 기술 콘텐츠와 유튜브 공장 투어 영상이 효과적입니다.',
        strategies: ['네이버 블로그에 기술력/생산 과정 콘텐츠로 B2B 검색 유입 확보', '유튜브 공장 투어/생산 과정 영상으로 바이어 신뢰도 극대화', '네이버 카페 업계 커뮤니티 전문가 활동으로 거래처 네트워크 확대'],
        topStrategy: { name: '블로그', metric: '노출 +70%' },
        bestStrategy: { name: '유튜브', metric: '신뢰도 +65%' },
        packageStrategy: { name: '카페', metric: '문의 +40%' },
        contents: [
            { name: '기술 블로그', desc: 'B2B 콘텐츠' },
            { name: '유튜브 영상', desc: '공장 투어' },
            { name: '카페 활동', desc: '업계 네트워크' }
        ]
    },
    '기타': {
        competition: '중간',
        channels: ['네이버 블로그', '인스타그램', '유튜브'],
        analysisText: '업종 특성에 맞는 맞춤형 마케팅 전략으로 온라인 노출과 전환율을 극대화합니다. 블로그와 인스타 병행이 가장 효과적입니다.',
        strategies: ['네이버 블로그 키워드 최적화 콘텐츠로 검색 유입 파이프라인 구축', '인스타그램 브랜드 피드 + 릴스로 타겟 고객 인지도 확보', '유튜브 서비스/제품 소개 영상으로 신뢰도와 전환율 동시 확보'],
        topStrategy: { name: '블로그', metric: '노출 +75%' },
        bestStrategy: { name: '인스타그램', metric: '인지도 +60%' },
        packageStrategy: { name: '유튜브', metric: '전환 +40%' },
        contents: [
            { name: '블로그 콘텐츠', desc: '검색 노출' },
            { name: '인스타 콘텐츠', desc: '브랜드 노출' },
            { name: '유튜브 영상', desc: '전환 강화' }
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
    // Multi-select platforms
    const platforms = getSelectedPlatforms();
    if (platforms.length > 0) {
        answers.push({ label: '사용 중 플랫폼', value: platforms.join(', ') });
    }
    return answers;
}

// ===== Get Selected Platforms (multi-select) =====
function getSelectedPlatforms() {
    const checked = document.querySelectorAll('input[name="platforms"]:checked');
    return Array.from(checked).map(c => c.value);
}

// ===== Smart Recommendation Engine =====
function generateSmartRecommendation(industry, platforms, budgetAnswer, revenueAnswer) {
    const isProfessional = ['병원/의료'].includes(industry);

    // Platform to service mapping
    const platformServiceMap = {
        '네이버 블로그': ['블로그대행', '블로그체험단'],
        '인스타그램': ['인스타대행', '숏폼제작'],
        '유튜브': ['유튜브대행', '롱폼제작', '숏폼제작'],
        '네이버 카페': ['카페활성화'],
        '홈페이지/쇼핑몰': ['사이트제작'],
        '없음': ['블로그대행', '인스타대행']
    };

    // Build recommended services from platforms
    const recommendedServices = [];
    const addedServices = new Set();

    if (platforms.length === 0 || platforms.includes('없음')) {
        // Default recommendations based on industry
        const defaults = industryAnalysisData[industry]?.contents || industryAnalysisData['기타'].contents;
        defaults.forEach(c => {
            const name = c.name.includes('블로그') ? '블로그대행' :
                         c.name.includes('인스타') ? '인스타대행' :
                         c.name.includes('유튜브') || c.name.includes('영상') ? '유튜브대행' :
                         c.name.includes('카페') ? '카페활성화' :
                         c.name.includes('숏폼') ? '숏폼제작' : '블로그대행';
            if (!addedServices.has(name) && serviceConfig[name]) {
                addedServices.add(name);
                recommendedServices.push(name);
            }
        });
    } else {
        platforms.forEach(p => {
            const services = platformServiceMap[p] || [];
            services.forEach(s => {
                if (!addedServices.has(s) && serviceConfig[s]) {
                    addedServices.add(s);
                    recommendedServices.push(s);
                }
            });
        });
    }

    // Determine tier based on budget and revenue goal
    let tierIndex = 0; // default: 소규모

    // Budget-based tier
    if (budgetAnswer) {
        if (budgetAnswer.includes('300') || budgetAnswer.includes('500만원 이상')) tierIndex = 2;
        else if (budgetAnswer.includes('100')) tierIndex = 1;
    }

    // Revenue goal can push tier up
    if (revenueAnswer) {
        if (revenueAnswer.includes('3,000') || revenueAnswer.includes('5,000만원 이상')) tierIndex = Math.max(tierIndex, 2);
        else if (revenueAnswer.includes('1,000')) tierIndex = Math.max(tierIndex, 1);
    }

    // Professional industries: ensure minimum spend 50~150만원
    if (isProfessional && tierIndex === 0) tierIndex = 1;

    // Build final recommendations with prices
    const recommendations = recommendedServices.slice(0, 4).map(name => {
        const cfg = serviceConfig[name];
        const tier = cfg.tiers[Math.min(tierIndex, cfg.tiers.length - 1)];
        return {
            name,
            tierName: tier.name,
            price: tier.price,
            desc: tier.desc,
            workItems: cfg.workItems
        };
    });

    // Ensure minimum 50만원 total
    const recTotal = recommendations.reduce((sum, r) => sum + r.price, 0);
    if (recTotal < 500000 && recommendations.length > 0) {
        // Upgrade first service tier
        const first = recommendations[0];
        const cfg = serviceConfig[first.name];
        const nextTier = cfg.tiers[1] || cfg.tiers[0];
        recommendations[0] = {
            ...first,
            tierName: nextTier.name,
            price: nextTier.price,
            desc: nextTier.desc
        };
    }

    // If high revenue goal, add more services
    if (revenueAnswer && (revenueAnswer.includes('3,000') || revenueAnswer.includes('5,000만원 이상'))) {
        if (recommendations.length < 3) {
            const extras = ['언론홍보', '숏폼제작', '카페활성화'];
            for (const name of extras) {
                if (!addedServices.has(name) && serviceConfig[name] && recommendations.length < 4) {
                    const cfg = serviceConfig[name];
                    const tier = cfg.tiers[tierIndex] || cfg.tiers[0];
                    recommendations.push({ name, tierName: tier.name, price: tier.price, desc: tier.desc, workItems: cfg.workItems });
                    addedServices.add(name);
                }
            }
        }
    }

    // Generate platform-specific problems
    const problems = generatePlatformProblems(platforms, industry);

    return { recommendations, problems };
}

// ===== Generate Platform-Specific Problems =====
function generatePlatformProblems(platforms, industry) {
    const problemMap = {
        '네이버 블로그': [
            '블로그 포스팅 키워드 최적화 미흡으로 검색 노출 저조',
            '경쟁 업체 대비 블로그 콘텐츠 품질 및 발행 빈도 부족',
            '블로그 상위노출 알고리즘 변화에 대한 대응 전략 부재'
        ],
        '인스타그램': [
            '인스타그램 팔로워 대비 게시물 참여율(좋아요/댓글) 저조',
            '릴스/스토리 등 알고리즘 우선 콘텐츠 활용 미흡',
            '해시태그 전략 부재로 탐색 탭 노출 기회 상실'
        ],
        '유튜브': [
            '유튜브 채널 구독자 대비 조회수/시청 시간 저조',
            '숏폼(쇼츠) 콘텐츠 미활용으로 신규 유입 기회 놓침',
            '썸네일/제목 최적화 부족으로 클릭률(CTR) 저하'
        ],
        '네이버 카페': [
            '카페 게시글 활성도 저조로 커뮤니티 유입 부족',
            '상위노출 키워드 미세팅으로 검색 유입 없음',
            '카페 운영 일관성 부족으로 신뢰도 하락'
        ],
        '홈페이지/쇼핑몰': [
            '홈페이지 SEO 미최적화로 오가닉 트래픽 부족',
            '모바일 반응형/페이지 속도 저하로 이탈률 증가',
            '랜딩 페이지 전환율 최적화(CRO) 미적용'
        ],
        '없음': [
            '온라인 마케팅 채널이 전무하여 잠재 고객 접점 부재',
            '경쟁 업체 대비 온라인 가시성 현저히 부족',
            '브랜드 온라인 인지도 구축 기반 자체가 미확보'
        ]
    };

    const problems = [];
    if (platforms.length === 0 || platforms.includes('없음')) {
        return [...problemMap['없음'], '타겟 고객 세그먼트 분석 및 맞춤 마케팅 전략 부재'];
    }

    // First pass: add first problem from each platform
    platforms.forEach(p => {
        const pProblems = problemMap[p];
        if (pProblems && problems.length < 5) {
            problems.push(pProblems[0]);
        }
    });

    // Second pass: add more problems from each platform
    for (let idx = 1; idx < 3; idx++) {
        for (const p of platforms) {
            const pProblems = problemMap[p];
            if (pProblems && pProblems[idx] && !problems.includes(pProblems[idx]) && problems.length < 5) {
                problems.push(pProblems[idx]);
            }
        }
    }

    // Ensure minimum 4 problems with generic ones
    const genericProblems = [
        '타겟 고객 세그먼트 분석 및 맞춤 마케팅 전략 부재',
        '경쟁사 대비 온라인 브랜드 인지도 및 신뢰도 부족',
        '마케팅 채널 간 일관된 브랜드 메시지 전달 미흡'
    ];
    for (const gp of genericProblems) {
        if (problems.length >= 4) break;
        if (!problems.includes(gp)) problems.push(gp);
    }

    return problems.slice(0, 5);
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
    // Before (dark gray)
    ctx.beginPath();
    ctx.fillStyle = 'rgba(34,34,34,0.08)';
    ctx.strokeStyle = 'rgba(34,34,34,0.35)';
    ctx.lineWidth = 1.5;
    for (let i = 0; i <= sides; i++) {
        const [x, y] = pt(start + (i % sides) * step, radius * data.before[i % sides] / 100);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.fill(); ctx.stroke();
    // Before dots
    for (let i = 0; i < sides; i++) {
        const [x, y] = pt(start + i * step, radius * data.before[i] / 100);
        ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI * 2); ctx.fillStyle = '#333'; ctx.fill();
    }
    // After (yellow with subtle glow)
    ctx.save();
    ctx.shadowColor = 'rgba(252,196,25,0.4)';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.fillStyle = 'rgba(252,196,25,0.22)';
    ctx.strokeStyle = '#FCC419';
    ctx.lineWidth = 2.5;
    for (let i = 0; i <= sides; i++) {
        const [x, y] = pt(start + (i % sides) * step, radius * data.after[i % sides] / 100);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.fill(); ctx.stroke();
    ctx.restore();
    // After dots (yellow with glow)
    for (let i = 0; i < sides; i++) {
        const [x, y] = pt(start + i * step, radius * data.after[i] / 100);
        ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#FCC419';
        ctx.shadowColor = 'rgba(252,196,25,0.5)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
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

// ===== PDF Download (Landscape White+Blue Marketing Proposal) =====
function downloadPDF() {
    const company = document.getElementById('companyName').value || '-';
    const industry = document.getElementById('industry').value || '-';
    const today = new Date().toLocaleDateString('ko-KR');
    const todayFile = new Date().toISOString().slice(0, 10);

    const selected = getSelectedServices();
    const total = selected.reduce((sum, s) => sum + s.price, 0);
    const platforms = getSelectedPlatforms();

    // Get budget and revenue answers for smart recommendations
    const budgetEl = document.querySelector('input[name="budget"]:checked');
    const revenueEl = document.querySelector('input[name="revenue"]:checked');
    const budgetAnswer = budgetEl ? budgetEl.value : '';
    const revenueAnswer = revenueEl ? revenueEl.value : '';

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

    // Smart recommendations
    const smart = generateSmartRecommendation(industry, platforms, budgetAnswer, revenueAnswer);

    // ===== Landscape dimensions =====
    const W = 960, H = 540;
    const totalPages = 6;
    const YELLOW = '#FCC419';
    const DARK = '#222222';
    const GRAY = '#F5F5F5';
    const S = `width:${W}px;height:${H}px;position:relative;overflow:hidden;box-sizing:border-box;font-family:'Noto Sans KR',sans-serif;color:#111111;`;
    const pageNum = (n) => `<div style="position:absolute;bottom:14px;right:36px;font-size:8px;color:#999999;">${n} / ${totalPages}</div>`;
    const headerBar = `<div style="position:absolute;top:18px;left:36px;right:36px;display:flex;align-items:center;justify-content:space-between;border:1.5px solid #E0E0E0;border-radius:30px;padding:8px 20px;">
        <div style="font-size:12px;font-weight:800;color:${DARK};">THEBEST</div>
        <div style="display:flex;gap:4px;"><span style="width:8px;height:8px;border-radius:50%;background:${YELLOW};display:inline-block;"></span><span style="width:8px;height:8px;border-radius:50%;background:${YELLOW};display:inline-block;"></span><span style="width:8px;height:8px;border-radius:50%;background:${YELLOW};display:inline-block;"></span></div>
    </div>`;
    const footerURL = `<div style="position:absolute;bottom:16px;left:40px;font-size:8px;font-weight:600;color:#999;">WWW.THEBEST-MARKETING.COM</div>`;

    const pages = [];

    // ====== PAGE 1: COVER ======
    pages.push(`<div style="${S}background:#ffffff;">
        <!-- Decorative circles -->
        <div style="position:absolute;top:80px;right:120px;width:100px;height:100px;border-radius:50%;background:${YELLOW};opacity:0.7;"></div>
        <div style="position:absolute;top:200px;right:60px;width:160px;height:160px;border-radius:50%;background:${YELLOW};opacity:0.4;"></div>
        <div style="position:absolute;top:310px;right:180px;width:40px;height:40px;border-radius:50%;background:${YELLOW};opacity:0.3;"></div>
        <!-- Dot pattern -->
        <div style="position:absolute;bottom:100px;right:50px;display:grid;grid-template-columns:repeat(5,8px);gap:6px;">
            ${Array(15).fill(0).map(() => `<span style="width:6px;height:6px;border-radius:50%;background:${YELLOW};opacity:0.5;display:block;"></span>`).join('')}
        </div>

        <div style="position:absolute;top:18px;left:36px;font-size:13px;font-weight:800;color:${DARK};">THEBEST</div>
        <div style="position:absolute;top:20px;right:40px;display:flex;gap:4px;"><span style="width:8px;height:8px;border-radius:50%;background:${YELLOW};display:inline-block;"></span><span style="width:8px;height:8px;border-radius:50%;background:${YELLOW};display:inline-block;"></span><span style="width:8px;height:8px;border-radius:50%;background:${YELLOW};display:inline-block;"></span></div>

        <div style="position:absolute;top:80px;left:40px;max-width:520px;">
            <div style="font-size:52px;font-weight:900;color:${DARK};line-height:1.1;letter-spacing:-1px;">AI 맞춤<br>마케팅 전략<br>제안서</div>
            <div style="font-size:12px;font-weight:600;color:#666;letter-spacing:3px;margin-top:16px;">UNLOCKING YOUR BUSINESS GROWTH</div>
        </div>

        <!-- Bottom info boxes -->
        <div style="position:absolute;bottom:30px;left:40px;display:flex;gap:12px;">
            <div style="border:1.5px solid #E0E0E0;border-radius:30px;padding:8px 24px;font-size:10px;font-weight:600;color:#555;">${company}</div>
            <div style="border:1.5px solid #E0E0E0;border-radius:30px;padding:8px 24px;font-size:10px;font-weight:600;color:#555;">${industry}</div>
            <div style="border:1.5px solid #E0E0E0;border-radius:30px;padding:8px 24px;font-size:10px;font-weight:600;color:#555;">${today}</div>
        </div>
    </div>`);

    // ====== PAGE 2: AI 마케팅 분석 ======
    const channelHTML = analysisData.channels.map((ch, i) =>
        `<div style="display:flex;align-items:center;gap:8px;font-size:11px;color:#333;margin-bottom:6px;">
            <span style="font-size:9px;font-weight:700;color:#222;background:#FCC419;border-radius:20px;padding:3px 10px;">${i + 1}순위</span> ${ch}
        </div>`
    ).join('');

    const strategyHTML = analysisData.strategies.map(s =>
        `<div style="display:flex;align-items:flex-start;gap:6px;font-size:11px;color:#333333;margin-bottom:8px;line-height:1.5;">
            <span style="color:#FCC419;font-weight:700;flex-shrink:0;">&#10003;</span> ${s}
        </div>`
    ).join('');

    pages.push(`<div style="${S}background:#ffffff;padding:36px 40px;">
        ${headerBar}
        <!-- Decorative: dark half circle right -->
        <div style="position:absolute;top:50%;right:-60px;transform:translateY(-50%);width:180px;height:180px;border-radius:50%;background:${DARK};opacity:0.07;"></div>

        <div style="margin-top:50px;">
            <div style="font-size:36px;font-weight:900;color:${DARK};line-height:1.1;margin-bottom:4px;">AI 마케팅</div>
            <div style="font-size:36px;font-weight:900;color:${DARK};line-height:1.1;margin-bottom:6px;">분석</div>
            <div style="font-size:11px;font-weight:500;color:#888;letter-spacing:1px;margin-bottom:18px;">${industry} 업종 맞춤 AI 분석 결과</div>

            <div style="display:flex;gap:16px;">
                <!-- Left: 업종 분석 -->
                <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
                    <div style="border:1.5px solid #E0E0E0;border-radius:20px;padding:16px 20px;">
                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                            <span style="width:10px;height:10px;border-radius:50%;background:${YELLOW};display:inline-block;"></span>
                            <span style="font-size:12px;font-weight:800;color:${DARK};">업종 분석</span>
                        </div>
                        <div style="font-size:18px;font-weight:900;color:${YELLOW};margin-bottom:6px;">${industry}</div>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <span style="font-size:10px;font-weight:700;color:#666;">경쟁도</span>
                            <span style="background:${DARK};color:${YELLOW};font-size:10px;font-weight:700;padding:4px 14px;border-radius:20px;display:inline-flex;align-items:center;justify-content:center;">${analysisData.competition}</span>
                        </div>
                    </div>
                    <div style="border:1.5px solid #E0E0E0;border-radius:20px;padding:16px 20px;flex:1;">
                        <div style="font-size:11px;font-weight:800;color:${DARK};margin-bottom:10px;">추천 채널</div>
                        ${channelHTML}
                    </div>
                </div>

                <!-- Right: AI 분석 결과 + 추천 전략 -->
                <div style="flex:1.2;display:flex;flex-direction:column;gap:10px;">
                    <div style="background:${GRAY};border-radius:20px;padding:18px 20px;flex:1;">
                        <div style="font-size:11px;font-weight:800;color:${DARK};margin-bottom:6px;">AI 분석 결과</div>
                        <div style="font-size:10px;color:#444;line-height:1.8;">${analysisData.analysisText}</div>
                    </div>
                    <div style="background:${GRAY};border-radius:20px;padding:18px 20px;flex:1;">
                        <div style="font-size:11px;font-weight:800;color:${DARK};margin-bottom:6px;">THEBEST 추천 전략</div>
                        ${strategyHTML}
                    </div>
                </div>
            </div>
        </div>
        ${footerURL}${pageNum(2)}
    </div>`);

    // ====== PAGE 3: 업종 문제 분석 ======
    const problemHTML = smart.problems.map((p, i) =>
        `<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:10px;">
            <span style="font-size:10px;font-weight:700;color:#222;background:#FCC419;border-radius:50%;width:20px;height:20px;min-width:20px;min-height:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;line-height:1;text-align:center;">${i + 1}</span>
            <span style="font-size:11px;font-weight:500;color:#333333;line-height:1.5;">${p}</span>
        </div>`
    ).join('');

    pages.push(`<div style="${S}background:#ffffff;padding:36px 40px;">
        ${headerBar}
        <!-- Decorative star -->
        <div style="position:absolute;top:52px;left:50%;font-size:18px;color:${YELLOW};">&#9733;</div>

        <div style="margin-top:50px;">
            <div style="font-size:36px;font-weight:900;color:${DARK};line-height:1.1;margin-bottom:6px;">문제 분석</div>
            <div style="font-size:11px;font-weight:600;color:#888;margin-bottom:18px;">INDUSTRY PROBLEM ANALYSIS</div>

            <div style="display:flex;gap:20px;">
                <!-- Radar chart -->
                <div style="flex:1.3;border:1.5px solid #E0E0E0;border-radius:20px;padding:18px;">
                    <div style="font-size:12px;font-weight:800;color:${DARK};margin-bottom:4px;">마케팅 성과 레이더 차트</div>
                    <div style="font-size:9px;color:#888;margin-bottom:8px;">${radarData.labels.join(' / ')}</div>
                    <div style="display:flex;justify-content:center;">
                        <canvas id="pdfRadarCanvas" style="display:block;"></canvas>
                    </div>
                    <div style="display:flex;justify-content:center;gap:16px;margin-top:6px;">
                        <div style="display:flex;align-items:center;gap:4px;font-size:8px;color:#888;"><span style="width:12px;height:3px;background:#CFCFCF;border-radius:2px;display:inline-block;"></span>현재 (미진행)</div>
                        <div style="display:flex;align-items:center;gap:4px;font-size:8px;color:#888;"><span style="width:12px;height:3px;background:${YELLOW};border-radius:2px;display:inline-block;"></span>진행 후 (예상)</div>
                    </div>
                </div>

                <!-- Problems -->
                <div style="flex:1;border:1.5px solid #E0E0E0;border-radius:20px;padding:22px;">
                    <div style="display:flex;align-items:center;gap:6px;margin-bottom:14px;">
                        <span style="width:10px;height:10px;border-radius:50%;background:${YELLOW};display:inline-block;"></span>
                        <span style="font-size:12px;font-weight:800;color:${DARK};">주요 문제</span>
                    </div>
                    ${problemHTML}
                </div>
            </div>
        </div>
        ${footerURL}${pageNum(3)}
    </div>`);

    // ====== PAGE 4: AI 추천 전략 + THEBEST 강점 ======
    const ts = analysisData.topStrategy;
    const bs = analysisData.bestStrategy;
    const ps = analysisData.packageStrategy;
    const cts = analysisData.contents;

    pages.push(`<div style="${S}background:#ffffff;padding:36px 40px;">
        ${headerBar}
        <!-- Decorative -->
        <div style="position:absolute;bottom:60px;right:40px;display:grid;grid-template-columns:repeat(4,10px);gap:6px;">
            ${Array(12).fill(0).map(() => `<span style="width:8px;height:8px;border-radius:50%;background:${DARK};opacity:0.15;display:block;"></span>`).join('')}
        </div>

        <div style="margin-top:50px;">
            <div style="font-size:36px;font-weight:900;color:${DARK};line-height:1.1;margin-bottom:6px;">추천 전략</div>
            <div style="font-size:11px;font-weight:600;color:#888;margin-bottom:18px;">AI RECOMMENDED STRATEGY</div>

            <!-- Top 3 strategy cards -->
            <div style="display:flex;gap:12px;margin-bottom:14px;">
                <div style="flex:1;background:${YELLOW};border-radius:16px;padding:18px;text-align:center;">
                    <div style="font-size:9px;font-weight:700;color:${DARK};margin-bottom:6px;">AI 추천</div>
                    <div style="font-size:15px;font-weight:900;color:${DARK};margin-bottom:4px;">${ts.name}</div>
                    <div style="font-size:12px;font-weight:700;color:#555;">${ts.metric}</div>
                </div>
                <div style="flex:1;background:${DARK};border-radius:16px;padding:18px;text-align:center;">
                    <div style="font-size:9px;font-weight:700;color:${YELLOW};margin-bottom:6px;">BEST 전략</div>
                    <div style="font-size:15px;font-weight:900;color:#fff;margin-bottom:4px;">${bs.name}</div>
                    <div style="font-size:12px;font-weight:700;color:#aaa;">${bs.metric}</div>
                </div>
                <div style="flex:1;border:1.5px solid #E0E0E0;border-radius:16px;padding:18px;text-align:center;">
                    <div style="font-size:9px;font-weight:700;color:${YELLOW};margin-bottom:6px;">추천 패키지</div>
                    <div style="font-size:15px;font-weight:900;color:${DARK};margin-bottom:4px;">${ps.name}</div>
                    <div style="font-size:12px;font-weight:700;color:#888;">${ps.metric}</div>
                </div>
            </div>

            <!-- Bottom: content cards + THEBEST 강점 -->
            <div style="display:flex;gap:12px;">
                ${cts.map(c => `
                    <div style="flex:1;background:${GRAY};border-radius:16px;padding:16px;text-align:center;">
                        <div style="font-size:13px;font-weight:800;color:${DARK};margin-bottom:4px;">${c.name}</div>
                        <div style="font-size:10px;color:#666;">${c.desc}</div>
                    </div>
                `).join('')}
                <!-- THEBEST 강점 -->
                <div style="flex:1.5;background:${DARK};border-radius:16px;padding:16px;">
                    <div style="font-size:10px;font-weight:700;color:${YELLOW};margin-bottom:8px;">THEBEST만의 차별점</div>
                    <div style="font-size:9px;color:#ccc;line-height:1.7;">
                        <div style="margin-bottom:3px;"><span style="color:${YELLOW};">01</span> 업종별 맞춤 키워드 분석 후 콘텐츠 기획</div>
                        <div style="margin-bottom:3px;"><span style="color:${YELLOW};">02</span> 월간 성과 리포트 + 전략 수정 미팅 제공</div>
                        <div style="margin-bottom:3px;"><span style="color:${YELLOW};">03</span> 담당 매니저 1:1 전담 관리 시스템</div>
                        <div style="margin-bottom:3px;"><span style="color:${YELLOW};">04</span> 9년차 마케팅 전문가의 직접 전략 설계</div>
                        <div><span style="color:${YELLOW};">05</span> 대기업/지자체 제휴 경험 기반 실전 노하우</div>
                    </div>
                </div>
            </div>
        </div>
        ${footerURL}${pageNum(4)}
    </div>`);

    // ====== PAGE 5: 마케팅 견적 + 예상 효과 ======
    const mainServiceName = selected.length > 0 ? selected.map(s => s.name).join(' + ') : '마케팅 서비스';

    let workItemsHTML = '';
    const uniqueSvcs = [...new Set(selected.map(s => s.name))];
    const allWorkItems = [];
    uniqueSvcs.forEach(name => {
        const cfg = serviceConfig[name];
        if (cfg) cfg.workItems.slice(0, 2).forEach(w => allWorkItems.push(w));
    });
    if (allWorkItems.length === 0) allWorkItems.push('키워드 분석', '콘텐츠 제작', 'SEO 최적화', '성과 리포트 제공');
    workItemsHTML = allWorkItems.slice(0, 6).map(w =>
        `<div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;">
            <span style="color:#FCC419;font-weight:700;font-size:11px;">&#10003;</span>
            <span style="font-size:11px;color:#333333;">${w}</span>
        </div>`
    ).join('');

    const metricLabels = radarData.labels;
    const metric1Diff = displayAfter[0] - radarData.before[0];
    const metric2Diff = displayAfter[2] - radarData.before[2];
    const metric3Diff = displayAfter[3] - radarData.before[3];

    pages.push(`<div style="${S}background:#ffffff;padding:36px 40px;">
        ${headerBar}
        <!-- Decorative yellow area chart shape bottom -->
        <div style="position:absolute;bottom:0;left:0;right:0;height:60px;background:linear-gradient(0deg,rgba(252,196,25,0.12) 0%,transparent 100%);"></div>
        <div style="position:absolute;bottom:50px;left:50%;font-size:16px;color:${YELLOW};">&#9733;</div>

        <div style="margin-top:50px;">
            <div style="font-size:36px;font-weight:900;color:${DARK};line-height:1.1;margin-bottom:6px;">견적서</div>
            <div style="font-size:11px;font-weight:600;color:#888;margin-bottom:18px;">MARKETING PROPOSAL</div>

            <div style="display:flex;gap:20px;">
                <!-- Left: Service info -->
                <div style="flex:1;border:1.5px solid #E0E0E0;border-radius:20px;padding:22px;">
                    <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;">
                        <span style="width:10px;height:10px;border-radius:50%;background:${YELLOW};display:inline-block;"></span>
                        <span style="font-size:11px;font-weight:800;color:${DARK};">서비스</span>
                    </div>
                    <div style="font-size:15px;font-weight:900;color:${YELLOW};margin-bottom:14px;">${mainServiceName}</div>
                    <div style="font-size:11px;font-weight:800;color:${DARK};margin-bottom:8px;">포함 서비스</div>
                    ${workItemsHTML}
                </div>

                <!-- Right: Metrics + Cost -->
                <div style="flex:1;display:flex;flex-direction:column;gap:12px;">
                    <div style="display:flex;gap:10px;">
                        <div style="flex:1;background:${YELLOW};border-radius:16px;padding:14px;text-align:center;">
                            <div style="font-size:10px;font-weight:700;color:${DARK};margin-bottom:4px;">${metricLabels[0] || '노출 증가'}</div>
                            <div style="font-size:22px;font-weight:900;color:${DARK};">+${metric1Diff}%</div>
                        </div>
                        <div style="flex:1;background:${DARK};border-radius:16px;padding:14px;text-align:center;">
                            <div style="font-size:10px;font-weight:700;color:#aaa;margin-bottom:4px;">${metricLabels[2] || '브랜드 인지도'}</div>
                            <div style="font-size:22px;font-weight:900;color:${YELLOW};">+${metric2Diff}%</div>
                        </div>
                        <div style="flex:1;background:${GRAY};border-radius:16px;padding:14px;text-align:center;">
                            <div style="font-size:10px;font-weight:700;color:#666;margin-bottom:4px;">${metricLabels[3] || '전환율'}</div>
                            <div style="font-size:22px;font-weight:900;color:${DARK};">+${metric3Diff}%</div>
                        </div>
                    </div>
                    <div style="background:${DARK};border-radius:16px;padding:20px 24px;display:flex;justify-content:space-between;align-items:center;flex:1;">
                        <div style="font-size:12px;font-weight:600;color:#999;">월 마케팅 비용</div>
                        <div style="font-size:28px;font-weight:900;color:${YELLOW};">${total.toLocaleString()}원</div>
                    </div>
                </div>
            </div>
        </div>
        ${footerURL}${pageNum(5)}
    </div>`);

    // ====== PAGE 6: THANK YOU + 연락처 ======
    pages.push(`<div style="${S}background:#F8F8F8;padding:36px 40px;">
        <!-- Big THANK YOU -->
        <div style="font-size:48px;font-weight:900;color:${YELLOW};line-height:1.0;margin-bottom:8px;">THANK YOU.</div>

        ${headerBar}

        <div style="margin-top:60px;display:flex;gap:24px;">
            <!-- Left: About text -->
            <div style="flex:1;">
                <div style="font-size:10px;color:#888;line-height:1.8;margin-bottom:20px;">
                    THEBEST 마케팅의 AI 맞춤 마케팅 전략 제안서를<br>
                    검토해 주셔서 감사합니다. 9년간의 마케팅 전문 경험과<br>
                    대기업/지자체 제휴 노하우를 바탕으로 최적의 마케팅<br>
                    솔루션을 제공해 드리겠습니다.
                </div>
                <div style="font-size:10px;color:#333;line-height:2.0;">
                    <div><span style="color:${DARK};font-weight:700;">현)</span> 9년차 마케팅업체 더베스트 운영</div>
                    <div><span style="color:${DARK};font-weight:700;">현)</span> 대기업 제휴 업무협약 체결</div>
                    <div><span style="color:${DARK};font-weight:700;">현)</span> 지자체 관광홍보 업무협약 체결</div>
                    <div><span style="color:${DARK};font-weight:700;">현)</span> SNS 마케팅 전문가 1급 자격증 보유</div>
                </div>
            </div>

            <!-- Right: QR + Contact card -->
            <div style="flex:0.8;display:flex;flex-direction:column;gap:12px;">
                <div style="background:${DARK};border-radius:16px;padding:20px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;">
                    <div style="background:#fff;border-radius:10px;padding:10px;margin-bottom:8px;">
                        <canvas id="pdfQrCanvas" style="display:block;margin:0 auto;"></canvas>
                    </div>
                    <div style="font-size:11px;font-weight:700;color:${YELLOW};">@더베스트마케팅</div>
                </div>
            </div>
        </div>

        <!-- Partner logos -->
        <div style="position:absolute;bottom:70px;left:40px;right:40px;">
            <div style="font-size:8px;font-weight:600;color:#bbb;letter-spacing:1px;margin-bottom:8px;">PARTNER COMPANIES</div>
            <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
                <div style="border:1.5px solid #E0E0E0;border-radius:20px;padding:5px 16px;font-size:10px;font-weight:700;color:#333;">NAVER</div>
                <div style="border:1.5px solid #E0E0E0;border-radius:20px;padding:5px 16px;font-size:10px;font-weight:700;color:#1EC800;">네이버 블로그</div>
                <div style="border:1.5px solid #E0E0E0;border-radius:20px;padding:5px 16px;font-size:10px;font-weight:700;color:#E4405F;">Instagram</div>
                <div style="border:1.5px solid #E0E0E0;border-radius:20px;padding:5px 16px;font-size:10px;font-weight:700;color:#FF0000;">YouTube</div>
                <div style="border:1.5px solid #E0E0E0;border-radius:20px;padding:5px 16px;font-size:10px;font-weight:700;color:#FAE100;">카카오</div>
                <div style="border:1.5px solid #E0E0E0;border-radius:20px;padding:5px 16px;font-size:10px;font-weight:700;color:#333;">Google Ads</div>
                <div style="border:1.5px solid #E0E0E0;border-radius:20px;padding:5px 16px;font-size:10px;font-weight:700;color:#0064FF;">토스</div>
                <div style="border:1.5px solid #E0E0E0;border-radius:20px;padding:5px 16px;font-size:10px;font-weight:700;color:#333;">Meta</div>
            </div>
        </div>

        <!-- Bottom contact -->
        <div style="position:absolute;bottom:18px;left:40px;right:40px;display:flex;justify-content:space-between;align-items:center;">
            <div style="display:flex;align-items:center;gap:4px;font-size:9px;font-weight:600;color:${YELLOW};">&#9670; WWW.THEBEST-MARKETING.COM</div>
            <div style="display:flex;gap:12px;">
                <div style="border:1.5px solid #E0E0E0;border-radius:20px;padding:5px 18px;font-size:9px;font-weight:600;color:#555;">jointhebest@naver.com</div>
                <div style="border:1.5px solid #E0E0E0;border-radius:20px;padding:5px 18px;font-size:9px;font-weight:600;color:#555;">KAKAO @더베스트마케팅</div>
            </div>
        </div>
        <div style="position:absolute;bottom:16px;right:40px;font-size:7px;color:#bbb;">본 견적서는 발행일로부터 7일간 유효합니다.</div>
        ${pageNum(6)}
    </div>`);

    // ===== RENDER =====
    const container = document.createElement('div');
    container.style.cssText = `position:absolute;left:-9999px;top:0;`;
    container.innerHTML = pages.join('');
    document.body.appendChild(container);

    const slides = container.children;

    // Radar chart
    const radarCanvas = container.querySelector('#pdfRadarCanvas');
    if (radarCanvas) {
        drawRadarCanvas(radarCanvas, { labels: radarData.labels, before: radarData.before, after: displayAfter }, 300, 240);
    }

    // QR code
    const qrCanvas = container.querySelector('#pdfQrCanvas');
    if (qrCanvas && typeof qrcode !== 'undefined') {
        try {
            const qr = qrcode(0, 'M');
            qr.addData('https://pf.kakao.com/_xonYQn');
            qr.make();
            const moduleCount = qr.getModuleCount();
            const cellSize = 3;
            const size = moduleCount * cellSize;
            qrCanvas.setAttribute('width', size);
            qrCanvas.setAttribute('height', size);
            qrCanvas.style.width = size + 'px';
            qrCanvas.style.height = size + 'px';
            const qrCtx = qrCanvas.getContext('2d');
            qrCtx.fillStyle = '#ffffff';
            qrCtx.fillRect(0, 0, size, size);
            qrCtx.fillStyle = '#000000';
            for (let row = 0; row < moduleCount; row++) {
                for (let col = 0; col < moduleCount; col++) {
                    if (qr.isDark(row, col)) {
                        qrCtx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
                    }
                }
            }
        } catch (e) {
            console.warn('QR code generation failed:', e);
        }
    }

    // Generate PDF
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
