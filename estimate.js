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
    '카페활성화': { price: 500000 },
    '블로그체험단': { price: 800000 },
    '블로그대행': { price: 600000 },
    '유튜브대행': { price: 1500000 },
    '인스타대행': { price: 700000 },
    '롱폼제작': { price: 2000000 },
    '숏폼제작': { price: 500000 },
    '사이트제작': { price: 3000000 },
    '언론홍보': { price: 1000000 }
};

// ===== Industry Radar Data (pentagon 5 axes) =====
// Axes: 온라인 노출, 고객 유입, 브랜드 신뢰도, 전환율, 재방문율
// before = marketing 미진행, after = marketing 진행 중
const industryRadarData = {
    '뷰티/미용': {
        labels: ['온라인 노출', '고객 유입', '브랜드 신뢰도', '전환율', '재방문율'],
        before: [25, 20, 30, 15, 20],
        after: [90, 85, 88, 75, 80],
        emoji: '💆‍♀️',
        imageDesc: '뷰티/미용 업종',
        color: '#E8A0BF'
    },
    '맛집/요식업': {
        labels: ['온라인 노출', '고객 유입', '브랜드 신뢰도', '전환율', '재방문율'],
        before: [30, 25, 25, 20, 35],
        after: [92, 88, 85, 70, 82],
        emoji: '🍽️',
        imageDesc: '맛집/요식업 업종',
        color: '#F4A460'
    },
    '숙박/펜션': {
        labels: ['온라인 노출', '예약 전환', '브랜드 신뢰도', '객실 가동률', '재방문율'],
        before: [20, 15, 25, 30, 15],
        after: [88, 80, 90, 85, 75],
        emoji: '🏨',
        imageDesc: '숙박/펜션 업종',
        color: '#87CEEB'
    },
    '병원/의료': {
        labels: ['온라인 노출', '신규 환자', '브랜드 신뢰도', '예약 전환', '재방문율'],
        before: [20, 15, 35, 15, 30],
        after: [85, 80, 95, 72, 85],
        emoji: '🏥',
        imageDesc: '병원/의료 업종',
        color: '#98D8C8'
    },
    '학원/교육': {
        labels: ['온라인 노출', '학생 유입', '브랜드 신뢰도', '등록 전환', '재등록율'],
        before: [25, 20, 30, 20, 25],
        after: [88, 82, 90, 75, 80],
        emoji: '📚',
        imageDesc: '학원/교육 업종',
        color: '#B19CD9'
    },
    '인테리어/건설': {
        labels: ['온라인 노출', '문의량', '브랜드 신뢰도', '계약 전환', '소개율'],
        before: [15, 15, 25, 10, 20],
        after: [85, 78, 88, 65, 75],
        emoji: '🏗️',
        imageDesc: '인테리어/건설 업종',
        color: '#DEB887'
    },
    '쇼핑몰/이커머스': {
        labels: ['온라인 노출', '트래픽', '브랜드 신뢰도', '구매 전환', '재구매율'],
        before: [30, 25, 20, 15, 20],
        after: [95, 90, 85, 78, 72],
        emoji: '🛒',
        imageDesc: '쇼핑몰/이커머스 업종',
        color: '#FFB347'
    },
    '부동산': {
        labels: ['온라인 노출', '문의량', '브랜드 신뢰도', '계약 전환', '소개율'],
        before: [20, 15, 30, 10, 25],
        after: [82, 75, 90, 60, 78],
        emoji: '🏠',
        imageDesc: '부동산 업종',
        color: '#A0C4FF'
    },
    'IT/스타트업': {
        labels: ['온라인 노출', '유저 유입', '브랜드 신뢰도', '전환율', '리텐션'],
        before: [30, 20, 15, 15, 15],
        after: [92, 85, 80, 72, 70],
        emoji: '💻',
        imageDesc: 'IT/스타트업 업종',
        color: '#77DD77'
    },
    '프랜차이즈': {
        labels: ['온라인 노출', '고객 유입', '브랜드 신뢰도', '전환율', '충성도'],
        before: [35, 30, 35, 20, 25],
        after: [92, 88, 92, 78, 82],
        emoji: '🏪',
        imageDesc: '프랜차이즈 업종',
        color: '#FFD700'
    },
    '제조업': {
        labels: ['온라인 노출', '문의량', '브랜드 신뢰도', '계약 전환', 'B2B 인지도'],
        before: [15, 10, 30, 10, 15],
        after: [78, 70, 88, 55, 75],
        emoji: '🏭',
        imageDesc: '제조업 업종',
        color: '#C0C0C0'
    },
    '기타': {
        labels: ['온라인 노출', '고객 유입', '브랜드 신뢰도', '전환율', '재방문율'],
        before: [20, 18, 25, 15, 18],
        after: [85, 80, 85, 70, 72],
        emoji: '📊',
        imageDesc: '기타 업종',
        color: '#C8956C'
    }
};

// Industry-specific images using Unsplash photos
const industryImages = {
    '뷰티/미용': `<img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=340&fit=crop&q=80" alt="뷰티/미용" style="border-radius:12px;width:100%;height:200px;object-fit:cover;">`,
    '맛집/요식업': `<img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=340&fit=crop&q=80" alt="맛집/요식업" style="border-radius:12px;width:100%;height:200px;object-fit:cover;">`,
    '숙박/펜션': `<img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=340&fit=crop&q=80" alt="숙박/펜션" style="border-radius:12px;width:100%;height:200px;object-fit:cover;">`,
    '병원/의료': `<img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=340&fit=crop&q=80" alt="병원/의료" style="border-radius:12px;width:100%;height:200px;object-fit:cover;">`,
    '학원/교육': `<img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=340&fit=crop&q=80" alt="학원/교육" style="border-radius:12px;width:100%;height:200px;object-fit:cover;">`,
    '인테리어/건설': `<img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=340&fit=crop&q=80" alt="인테리어/건설" style="border-radius:12px;width:100%;height:200px;object-fit:cover;">`,
    '쇼핑몰/이커머스': `<img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop&q=80" alt="쇼핑몰/이커머스" style="border-radius:12px;width:100%;height:200px;object-fit:cover;">`,
    '부동산': `<img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=340&fit=crop&q=80" alt="부동산" style="border-radius:12px;width:100%;height:200px;object-fit:cover;">`,
    'IT/스타트업': `<img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=340&fit=crop&q=80" alt="IT/스타트업" style="border-radius:12px;width:100%;height:200px;object-fit:cover;">`,
    '프랜차이즈': `<img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=340&fit=crop&q=80" alt="프랜차이즈" style="border-radius:12px;width:100%;height:200px;object-fit:cover;">`,
    '제조업': `<img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=340&fit=crop&q=80" alt="제조업" style="border-radius:12px;width:100%;height:200px;object-fit:cover;">`,
    '기타': `<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop&q=80" alt="비즈니스" style="border-radius:12px;width:100%;height:200px;object-fit:cover;">`
};

// ===== Pentagon Radar Chart Drawing =====
function drawRadarChart(canvasId, data, animated) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2 + 5;
    const radius = Math.min(w, h) / 2 - 40;
    const sides = 5;
    const angleStep = (Math.PI * 2) / sides;
    const startAngle = -Math.PI / 2;

    ctx.clearRect(0, 0, w, h);

    // Draw grid lines (5 levels)
    for (let level = 1; level <= 5; level++) {
        const r = (radius * level) / 5;
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
            const angle = startAngle + i * angleStep;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(200,180,160,0.25)';
        ctx.lineWidth = 1;
        ctx.stroke();
        if (level % 2 === 0) {
            ctx.fillStyle = 'rgba(200,180,160,0.04)';
            ctx.fill();
        }
    }

    // Draw axis lines
    for (let i = 0; i < sides; i++) {
        const angle = startAngle + i * angleStep;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
        ctx.strokeStyle = 'rgba(200,180,160,0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Draw labels
    ctx.font = '600 11px "Noto Sans KR", sans-serif';
    ctx.fillStyle = '#6B6560';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < sides; i++) {
        const angle = startAngle + i * angleStep;
        const labelR = radius + 28;
        const x = cx + labelR * Math.cos(angle);
        const y = cy + labelR * Math.sin(angle);
        ctx.fillText(data.labels[i], x, y);
    }

    function drawPolygon(values, fillColor, strokeColor, lineWidth) {
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
            const idx = i % sides;
            const angle = startAngle + idx * angleStep;
            const r = (radius * values[idx]) / 100;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        // Draw points
        for (let i = 0; i < sides; i++) {
            const angle = startAngle + i * angleStep;
            const r = (radius * values[i]) / 100;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fillStyle = strokeColor;
            ctx.fill();
        }
    }

    if (animated) {
        let progress = 0;
        const animDuration = 60;
        function animFrame() {
            progress++;
            const t = Math.min(progress / animDuration, 1);
            const ease = 1 - Math.pow(1 - t, 3);

            // Redraw grid
            ctx.clearRect(0, 0, w, h);
            for (let level = 1; level <= 5; level++) {
                const r = (radius * level) / 5;
                ctx.beginPath();
                for (let i = 0; i <= sides; i++) {
                    const angle = startAngle + i * angleStep;
                    const x = cx + r * Math.cos(angle);
                    const y = cy + r * Math.sin(angle);
                    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.strokeStyle = 'rgba(200,180,160,0.25)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
            for (let i = 0; i < sides; i++) {
                const angle = startAngle + i * angleStep;
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
                ctx.strokeStyle = 'rgba(200,180,160,0.3)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
            ctx.font = '600 11px "Noto Sans KR", sans-serif';
            ctx.fillStyle = '#6B6560';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            for (let i = 0; i < sides; i++) {
                const angle = startAngle + i * angleStep;
                const labelR = radius + 28;
                ctx.fillText(data.labels[i], cx + labelR * Math.cos(angle), cy + labelR * Math.sin(angle));
            }

            const animBefore = data.before.map(v => v * ease);
            const animAfter = data.after.map(v => v * ease);

            drawPolygon(animBefore, 'rgba(180,180,180,0.15)', 'rgba(150,150,150,0.6)', 2);
            drawPolygon(animAfter, 'rgba(200,149,108,0.18)', 'rgba(200,149,108,0.85)', 2.5);

            if (progress < animDuration) requestAnimationFrame(animFrame);
        }
        requestAnimationFrame(animFrame);
    } else {
        drawPolygon(data.before, 'rgba(180,180,180,0.15)', 'rgba(150,150,150,0.6)', 2);
        drawPolygon(data.after, 'rgba(200,149,108,0.18)', 'rgba(200,149,108,0.85)', 2.5);
    }
}

// ===== Update Expected Results =====
function updateExpectedResults() {
    const industry = document.getElementById('industry').value;
    const selectedServices = [];
    serviceCheckboxes.forEach(cb => {
        if (cb.checked) selectedServices.push(cb.value);
    });

    if (!industry && selectedServices.length === 0) {
        expectedResults.innerHTML = '<div class="result-placeholder"><p>업종과 서비스를 선택하면 AI 분석 결과가 표시됩니다</p></div>';
        return;
    }

    const radarData = industryRadarData[industry] || industryRadarData['기타'];
    const image = industryImages[industry] || industryImages['기타'];

    // Calculate boosted "after" values based on number of services selected
    const boost = Math.min(selectedServices.length * 2, 10);
    const boostedAfter = radarData.after.map(v => Math.min(v + boost, 100));
    const displayData = {
        labels: radarData.labels,
        before: radarData.before,
        after: selectedServices.length > 0 ? boostedAfter : radarData.after
    };

    // Compute average scores
    const avgBefore = Math.round(radarData.before.reduce((a, b) => a + b, 0) / 5);
    const avgAfter = Math.round(displayData.after.reduce((a, b) => a + b, 0) / 5);
    const improvement = avgAfter - avgBefore;

    expectedResults.innerHTML = `
        <div class="ai-analysis">
            <!-- Industry Image Section -->
            <div class="industry-visual">
                <div class="industry-image-card">
                    ${image}
                    <div class="industry-badge">${radarData.emoji} ${industry || '업종 미선택'}</div>
                </div>
            </div>

            <!-- Radar Chart Comparison -->
            <div class="radar-section">
                <div class="radar-title">
                    <h4>마케팅 효과 비교 분석</h4>
                    <p>마케팅 진행 전후 예상 지표 비교</p>
                </div>
                <div class="radar-chart-wrapper">
                    <canvas id="radarCanvas" width="380" height="340"></canvas>
                </div>
                <div class="radar-legend">
                    <div class="legend-item">
                        <span class="legend-line" style="background: rgba(150,150,150,0.6);"></span>
                        <span>마케팅 미진행 (현재)</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-line" style="background: rgba(200,149,108,0.85);"></span>
                        <span>마케팅 진행 후 (예상)</span>
                    </div>
                </div>
            </div>

            <!-- Score Comparison -->
            <div class="score-comparison">
                <div class="score-card before">
                    <div class="score-label">마케팅 미진행</div>
                    <div class="score-circle before-circle">
                        <svg viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="52" fill="none" stroke="#E8E2DB" stroke-width="8"/>
                            <circle cx="60" cy="60" r="52" fill="none" stroke="#B0B0B0" stroke-width="8"
                                stroke-dasharray="${2 * Math.PI * 52}"
                                stroke-dashoffset="${2 * Math.PI * 52 * (1 - avgBefore / 100)}"
                                stroke-linecap="round" transform="rotate(-90 60 60)"/>
                        </svg>
                        <div class="score-value">${avgBefore}<span>점</span></div>
                    </div>
                    <div class="score-status bad">개선 필요</div>
                </div>
                <div class="score-arrow">
                    <svg viewBox="0 0 60 30" width="60" height="30"><path d="M5 15h40M35 5l15 10-15 10" stroke="#C8956C" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span class="arrow-label">+${improvement}점 향상</span>
                </div>
                <div class="score-card after">
                    <div class="score-label">마케팅 진행 후</div>
                    <div class="score-circle after-circle">
                        <svg viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="52" fill="none" stroke="#E8E2DB" stroke-width="8"/>
                            <circle cx="60" cy="60" r="52" fill="none" stroke="#C8956C" stroke-width="8"
                                stroke-dasharray="${2 * Math.PI * 52}"
                                stroke-dashoffset="${2 * Math.PI * 52 * (1 - avgAfter / 100)}"
                                stroke-linecap="round" transform="rotate(-90 60 60)"/>
                        </svg>
                        <div class="score-value">${avgAfter}<span>점</span></div>
                    </div>
                    <div class="score-status good">우수</div>
                </div>
            </div>

            <!-- Detail Bars -->
            <div class="detail-bars">
                ${displayData.labels.map((label, i) => `
                    <div class="detail-bar-item">
                        <div class="bar-label-row">
                            <span class="bar-name">${label}</span>
                            <span class="bar-values">${radarData.before[i]}점 → <strong>${displayData.after[i]}점</strong></span>
                        </div>
                        <div class="bar-double">
                            <div class="bar-track-bg">
                                <div class="bar-before" style="width:${radarData.before[i]}%"></div>
                            </div>
                            <div class="bar-track-bg">
                                <div class="bar-after" style="width:${displayData.after[i]}%"></div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Draw radar chart after DOM update
    requestAnimationFrame(() => {
        drawRadarChart('radarCanvas', displayData, true);
    });
}

// ===== Price Calculation =====
function updateEstimate() {
    let totalPrice = 0;
    serviceCheckboxes.forEach(cb => {
        if (cb.checked) {
            totalPrice += serviceData[cb.value].price;
        }
    });
    estimateAmount.value = totalPrice.toLocaleString();
    updatePreview();
    updateExpectedResults();
}

serviceCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateEstimate);
});

// Also update when industry changes
document.getElementById('industry').addEventListener('change', () => {
    updatePreview();
    updateExpectedResults();
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
            selected.push({ name: cb.value, price: serviceData[cb.value].price });
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
['companyName'].forEach(id => {
    document.getElementById(id).addEventListener('input', updatePreview);
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

    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-icon">&#10003;</div>
            <h2>AI 맞춤견적서가 생성되었습니다!</h2>
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
