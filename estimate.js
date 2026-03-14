// ===== Mobile Menu =====
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');
if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// ===== Service Selection & Price Calculation =====
const serviceCheckboxes = document.querySelectorAll('input[name="service"]');
const estimateAmount = document.getElementById('estimateAmount');
const expectedResults = document.getElementById('expectedResults');

const serviceData = {
    '카페활성화': {
        price: 500000,
        results: [
            { icon: '📝', title: '게시글', value: '300+개', desc: '월 기준' },
            { icon: '💬', title: '댓글', value: '300+개', desc: '월 기준' },
            { icon: '📈', title: '카페 활성도', value: '200%↑', desc: '예상 증가율' },
            { icon: '👥', title: '유입 증가', value: '150%↑', desc: '예상 방문자' }
        ]
    },
    '블로그체험단': {
        price: 800000,
        results: [
            { icon: '📋', title: '체험 후기', value: '20+건', desc: '고품질 리뷰' },
            { icon: '🔍', title: '키워드 노출', value: 'TOP 10', desc: '주요 키워드' },
            { icon: '📊', title: '검색 유입', value: '300%↑', desc: '예상 증가율' },
            { icon: '🎯', title: '전환율', value: '15%↑', desc: '예상 개선' }
        ]
    },
    '블로그대행': {
        price: 600000,
        results: [
            { icon: '✍️', title: '포스팅', value: '12+건', desc: '월 발행량' },
            { icon: '🔍', title: 'SEO 점수', value: '85+점', desc: '최적화 수준' },
            { icon: '📈', title: '검색 노출', value: '250%↑', desc: '예상 증가' },
            { icon: '🕐', title: '지속 효과', value: '6개월+', desc: '장기 노출' }
        ]
    },
    '유튜브대행': {
        price: 1500000,
        results: [
            { icon: '🎬', title: '영상 제작', value: '8+건', desc: '월 업로드' },
            { icon: '👁️', title: '조회수', value: '10,000+', desc: '월 예상' },
            { icon: '👤', title: '구독자', value: '500+명', desc: '월 증가' },
            { icon: '⏱️', title: '시청시간', value: '2,000+h', desc: '월 예상' }
        ]
    },
    '인스타대행': {
        price: 700000,
        results: [
            { icon: '📸', title: '게시물', value: '20+건', desc: '월 발행' },
            { icon: '❤️', title: '좋아요', value: '500%↑', desc: '예상 증가' },
            { icon: '👥', title: '팔로워', value: '1,000+명', desc: '월 증가' },
            { icon: '💡', title: '브랜딩', value: 'A+등급', desc: '피드 퀄리티' }
        ]
    },
    '롱폼제작': {
        price: 2000000,
        results: [
            { icon: '🎥', title: '영상 길이', value: '3~10분', desc: '기획 포함' },
            { icon: '✨', title: '퀄리티', value: 'Premium', desc: '4K 촬영' },
            { icon: '📊', title: '도달률', value: '50,000+', desc: '예상 조회' },
            { icon: '🏢', title: '활용도', value: '다채널', desc: 'SNS 재활용' }
        ]
    },
    '숏폼제작': {
        price: 500000,
        results: [
            { icon: '📱', title: '영상 수', value: '10+건', desc: '월 제작' },
            { icon: '🔥', title: '바이럴', value: 'High', desc: '확산 가능성' },
            { icon: '👁️', title: '노출', value: '100,000+', desc: '예상 도달' },
            { icon: '🎯', title: 'MZ 타겟', value: '최적화', desc: '트렌드 반영' }
        ]
    },
    '사이트제작': {
        price: 3000000,
        results: [
            { icon: '💻', title: '반응형', value: '완벽 지원', desc: '모든 디바이스' },
            { icon: '⚡', title: '로딩속도', value: '1.5초', desc: '최적화' },
            { icon: '🔍', title: 'SEO', value: '95+점', desc: '검색 최적화' },
            { icon: '🛡️', title: '보안', value: 'SSL 포함', desc: '보안 인증서' }
        ]
    },
    '언론홍보': {
        price: 1000000,
        results: [
            { icon: '📰', title: '기사 배포', value: '10+건', desc: '주요 언론사' },
            { icon: '🏆', title: '신뢰도', value: '300%↑', desc: '브랜드 신뢰' },
            { icon: '🔍', title: '검색 노출', value: 'TOP 5', desc: '브랜드명 검색' },
            { icon: '📣', title: '인지도', value: '200%↑', desc: '브랜드 인지' }
        ]
    }
};

function updateEstimate() {
    let totalPrice = 0;
    const selectedServices = [];

    serviceCheckboxes.forEach(cb => {
        if (cb.checked) {
            const svc = cb.value;
            const data = serviceData[svc];
            totalPrice += data.price;
            selectedServices.push({ name: svc, price: data.price, results: data.results });
        }
    });

    estimateAmount.value = totalPrice.toLocaleString();
    updatePreview();
    updateExpectedResults(selectedServices);
}

function updateExpectedResults(services) {
    if (services.length === 0) {
        expectedResults.innerHTML = '<div class="result-placeholder"><p>서비스를 선택하면 예상 결과 분석이 표시됩니다</p></div>';
        return;
    }

    const allResults = [];
    services.forEach(svc => {
        svc.results.forEach(r => allResults.push(r));
    });

    // Show up to 8 results
    const display = allResults.slice(0, 8);
    expectedResults.innerHTML = `
        <div class="result-grid">
            ${display.map(r => `
                <div class="result-card">
                    <div class="result-icon">${r.icon}</div>
                    <div class="result-title">${r.title}</div>
                    <div class="result-value">${r.value}</div>
                    <div class="result-desc">${r.desc}</div>
                </div>
            `).join('')}
        </div>
    `;
}

serviceCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateEstimate);
});

// ===== Preview Update =====
function updatePreview() {
    const company = document.getElementById('companyName').value || '-';
    const industry = document.getElementById('industry').value || '-';
    const amount = estimateAmount.value || '0';

    document.getElementById('prevCompany').textContent = company;
    document.getElementById('prevIndustry').textContent = industry;
    document.getElementById('prevDate').textContent = new Date().toLocaleDateString('ko-KR');
    document.getElementById('prevAmount').textContent = amount + '원';

    const servicesDiv = document.getElementById('prevServices');
    const selected = [];
    serviceCheckboxes.forEach(cb => {
        if (cb.checked) {
            selected.push({
                name: cb.value,
                price: serviceData[cb.value].price
            });
        }
    });

    if (selected.length === 0) {
        servicesDiv.innerHTML = '<p class="preview-empty">선택된 서비스가 없습니다</p>';
    } else {
        servicesDiv.innerHTML = selected.map(s => `
            <div class="preview-service-item">
                <span class="svc-name">${s.name}</span>
                <span class="svc-price">${s.price.toLocaleString()}원~</span>
            </div>
        `).join('');
    }
}

// Listen for input changes
['companyName', 'industry'].forEach(id => {
    document.getElementById(id).addEventListener('input', updatePreview);
    document.getElementById(id).addEventListener('change', updatePreview);
});

// Init preview date
document.getElementById('prevDate').textContent = new Date().toLocaleDateString('ko-KR');

// ===== File Upload =====
const fileUploadArea = document.getElementById('fileUploadArea');
const fileInput = document.getElementById('industryImage');
const filePreview = document.getElementById('filePreview');
let uploadedFiles = [];

fileUploadArea.addEventListener('click', () => fileInput.click());

fileUploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileUploadArea.style.borderColor = 'var(--primary)';
});

fileUploadArea.addEventListener('dragleave', () => {
    fileUploadArea.style.borderColor = '';
});

fileUploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    fileUploadArea.style.borderColor = '';
    handleFiles(e.dataTransfer.files);
});

fileInput.addEventListener('change', () => {
    handleFiles(fileInput.files);
});

function handleFiles(files) {
    Array.from(files).forEach(file => {
        if (file.size > 10 * 1024 * 1024) {
            alert('파일 크기는 10MB 이하만 가능합니다.');
            return;
        }
        uploadedFiles.push(file);
    });
    renderFilePreview();
}

function renderFilePreview() {
    filePreview.innerHTML = uploadedFiles.map((file, i) => `
        <div class="file-preview-item">
            <span>${file.name}</span>
            <span class="remove-file" onclick="removeFile(${i})">&times;</span>
        </div>
    `).join('');
}

function removeFile(index) {
    uploadedFiles.splice(index, 1);
    renderFilePreview();
}

// ===== Form Submit =====
document.getElementById('estimateForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedServices = [];
    serviceCheckboxes.forEach(cb => {
        if (cb.checked) selectedServices.push(cb.value);
    });

    if (selectedServices.length === 0) {
        alert('서비스를 1개 이상 선택해주세요.');
        return;
    }

    // Show success modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-icon">&#10003;</div>
            <h2>견적서가 생성되었습니다!</h2>
            <p>담당자가 확인 후 빠르게 연락드리겠습니다.<br>감사합니다.</p>
            <button class="btn btn-primary" onclick="this.closest('.modal-overlay').remove()">확인</button>
        </div>
    `;
    document.body.appendChild(modal);
});

// ===== Reset =====
function resetForm() {
    document.getElementById('estimateForm').reset();
    serviceCheckboxes.forEach(cb => cb.checked = false);
    uploadedFiles = [];
    filePreview.innerHTML = '';
    updateEstimate();
}

// ===== Print =====
function printEstimate() {
    window.print();
}
