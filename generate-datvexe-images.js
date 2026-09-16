const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public', 'images', 'projects');

// Image 1: Visual Studio Test Explorer (16:9 - 1280x720)
const svg1 = `
<svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif">
  <defs>
    <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0e17"/>
      <stop offset="100%" stop-color="#05080f"/>
    </linearGradient>
    <linearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#141c2e"/>
      <stop offset="100%" stop-color="#0d1320"/>
    </linearGradient>
    <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2dd4bf"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1280" height="720" fill="url(#bg1)"/>
  
  <!-- Window Frame -->
  <rect x="24" y="24" width="1232" height="672" rx="16" fill="#0d1322" stroke="rgba(56, 189, 248, 0.2)" stroke-width="1.5"/>
  
  <!-- Window Header -->
  <path d="M 24 40 Q 24 24 40 24 L 1240 24 Q 1256 24 1256 40 L 1256 74 L 24 74 Z" fill="url(#headerGrad)"/>
  <line x1="24" y1="74" x2="1256" y2="74" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  
  <!-- Window Controls -->
  <circle cx="56" cy="49" r="6" fill="#ef4444" opacity="0.8"/>
  <circle cx="76" cy="49" r="6" fill="#f59e0b" opacity="0.8"/>
  <circle cx="96" cy="49" r="6" fill="#10b981" opacity="0.8"/>
  
  <!-- Window Title -->
  <text x="124" y="54" fill="#94a3b8" font-size="13" font-weight="600" letter-spacing="0.5">Visual Studio 2022 — Test Explorer [DatVeXe.Automation.Tests]</text>
  <rect x="1060" y="38" width="170" height="24" rx="12" fill="rgba(45, 212, 191, 0.15)" stroke="rgba(45, 212, 191, 0.4)" stroke-width="1"/>
  <text x="1145" y="54" fill="#2dd4bf" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="0.8">69 / 69 PASSED (100%)</text>

  <!-- Left Pane: Test Explorer Tree -->
  <rect x="44" y="94" width="460" height="580" rx="10" fill="#070a12" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  
  <!-- Tree Toolbar -->
  <rect x="44" y="94" width="460" height="42" rx="10" fill="#0f172a"/>
  <text x="64" y="120" fill="#38bdf8" font-size="12" font-weight="700" letter-spacing="1">TEST EXPLORER HIERARCHY</text>
  <rect x="380" y="103" width="110" height="24" rx="6" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1"/>
  <text x="435" y="119" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">✓ Run All (1.4s)</text>
  
  <!-- Test Tree Items -->
  <g transform="translate(64, 156)" font-family="Consolas, monospace" font-size="12">
    <!-- Group 1 -->
    <text x="0" y="0" fill="#e2e8f0" font-weight="bold">▾ 📦 DatVeXe.Tests.BookingPipeline (28)</text>
    <g transform="translate(20, 26)">
      <circle cx="4" cy="-4" r="5" fill="#10b981"/>
      <text x="16" y="0" fill="#94a3b8">✓ Test_SeatSelection_MultiPassenger_Valid</text>
      <text x="350" y="0" fill="#64748b" text-anchor="end">42ms</text>
    </g>
    <g transform="translate(20, 52)">
      <circle cx="4" cy="-4" r="5" fill="#10b981"/>
      <text x="16" y="0" fill="#94a3b8">✓ Test_VoucherDiscount_PercentCalculation</text>
      <text x="350" y="0" fill="#64748b" text-anchor="end">18ms</text>
    </g>
    <g transform="translate(20, 78)">
      <circle cx="4" cy="-4" r="5" fill="#10b981"/>
      <text x="16" y="0" fill="#94a3b8">✓ Test_SeatConflict_LockConcurrency</text>
      <text x="350" y="0" fill="#64748b" text-anchor="end">85ms</text>
    </g>
    <g transform="translate(20, 104)">
      <circle cx="4" cy="-4" r="5" fill="#10b981"/>
      <text x="16" y="0" fill="#94a3b8">✓ Test_PaymentGateway_VNPay_Callback</text>
      <text x="350" y="0" fill="#64748b" text-anchor="end">120ms</text>
    </g>

    <!-- Group 2 -->
    <text x="0" y="146" fill="#e2e8f0" font-weight="bold">▾ 📦 DatVeXe.Tests.Authentication (18)</text>
    <g transform="translate(20, 172)">
      <circle cx="4" cy="-4" r="5" fill="#10b981"/>
      <text x="16" y="0" fill="#94a3b8">✓ Test_CustomerRegister_OtpValidation</text>
      <text x="350" y="0" fill="#64748b" text-anchor="end">34ms</text>
    </g>
    <g transform="translate(20, 198)">
      <circle cx="4" cy="-4" r="5" fill="#10b981"/>
      <text x="16" y="0" fill="#94a3b8">✓ Test_RoleAuthorization_AdminGate</text>
      <text x="350" y="0" fill="#64748b" text-anchor="end">22ms</text>
    </g>

    <!-- Group 3 -->
    <text x="0" y="240" fill="#e2e8f0" font-weight="bold">▾ 📦 DatVeXe.Tests.SeleniumE2E (23)</text>
    <g transform="translate(20, 266)">
      <circle cx="4" cy="-4" r="5" fill="#10b981"/>
      <text x="16" y="0" fill="#38bdf8">✓ E2E_SearchRoute_BookTicket_CheckoutFlow</text>
      <text x="350" y="0" fill="#64748b" text-anchor="end">480ms</text>
    </g>
    <g transform="translate(20, 292)">
      <circle cx="4" cy="-4" r="5" fill="#10b981"/>
      <text x="16" y="0" fill="#38bdf8">✓ E2E_Admin_ScheduleTrip_VerifySeatMatrix</text>
      <text x="350" y="0" fill="#64748b" text-anchor="end">510ms</text>
    </g>
  </g>

  <!-- Right Pane: Test Summary & Code Execution -->
  <rect x="520" y="94" width="716" height="580" rx="10" fill="#070a12" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  
  <!-- Stats Bar Top -->
  <rect x="520" y="94" width="716" height="120" rx="10" fill="#0d1424"/>
  <text x="548" y="130" fill="#f8fafc" font-size="20" font-weight="800">DatVeXe — NUnit Test Suite Execution</text>
  <text x="548" y="152" fill="#94a3b8" font-size="13">Total Tests: 69 | Passed: 69 | Failed: 0 | Skipped: 0 | Duration: 1.42s</text>
  
  <!-- Progress Bar -->
  <rect x="548" y="172" width="660" height="12" rx="6" fill="#1e293b"/>
  <rect x="548" y="172" width="660" height="12" rx="6" fill="url(#tealGrad)"/>

  <!-- Code Editor Window -->
  <rect x="548" y="234" width="660" height="420" rx="8" fill="#050811" stroke="rgba(56,189,248,0.15)" stroke-width="1"/>
  <text x="572" y="264" fill="#38bdf8" font-family="Consolas, monospace" font-size="12">[TestFixture] public class BookingPipelineTests {</text>
  <text x="592" y="292" fill="#94a3b8" font-family="Consolas, monospace" font-size="12">[Test]</text>
  <text x="592" y="316" fill="#e2e8f0" font-family="Consolas, monospace" font-size="12">public void <tspan fill="#67e8f9">Test_SeatSelection_MultiPassenger_Valid</tspan>() {</text>
  <text x="612" y="344" fill="#64748b" font-family="Consolas, monospace" font-size="12">// Arrange: Setup BusTrip with 40 seats</text>
  <text x="612" y="368" fill="#cbd5e1" font-family="Consolas, monospace" font-size="12">var trip = new TripService().GetTripById("TRIP-SGN-DL-01");</text>
  <text x="612" y="396" fill="#64748b" font-family="Consolas, monospace" font-size="12">// Act: Select Seat A01, A02, apply VIP voucher</text>
  <text x="612" y="420" fill="#cbd5e1" font-family="Consolas, monospace" font-size="12">var order = _bookingService.CreateBooking(trip, new[] { "A01", "A02" }, "VOUCHER20");</text>
  <text x="612" y="448" fill="#64748b" font-family="Consolas, monospace" font-size="12">// Assert: Verify final price &amp; reservation status</text>
  <text x="612" y="472" fill="#a7f3d0" font-family="Consolas, monospace" font-size="12">Assert.That(order.TotalAmount, Is.EqualTo(480000));</text>
  <text x="612" y="496" fill="#a7f3d0" font-family="Consolas, monospace" font-size="12">Assert.That(order.Status, Is.EqualTo(BookingStatus.Confirmed));</text>
  <text x="592" y="524" fill="#e2e8f0" font-family="Consolas, monospace" font-size="12">}</text>
  <text x="572" y="552" fill="#38bdf8" font-family="Consolas, monospace" font-size="12">}</text>

  <rect x="548" y="596" width="660" height="44" rx="6" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" stroke-width="1"/>
  <text x="572" y="623" fill="#34d399" font-family="Consolas, monospace" font-size="12">✓ 69 TESTS PASSED IN 1.42s (0 REGRESSIONS DETECTED)</text>
</svg>
`;

// Image 2: NUnit CLI Test Runner Output (16:9 - 1280x720)
const svg2 = `
<svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg" font-family="Consolas, 'Fira Code', monospace">
  <defs>
    <linearGradient id="termBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0b0f19"/>
      <stop offset="100%" stop-color="#04060a"/>
    </linearGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#termBg)"/>
  <rect x="24" y="24" width="1232" height="672" rx="14" fill="#080c14" stroke="#1e293b" stroke-width="2"/>
  
  <!-- Terminal Header -->
  <path d="M 24 38 Q 24 24 38 24 L 1242 24 Q 1256 24 1256 38 L 1256 68 L 24 68 Z" fill="#0f172a"/>
  <circle cx="54" cy="46" r="6" fill="#ef4444"/>
  <circle cx="74" cy="46" r="6" fill="#f59e0b"/>
  <circle cx="94" cy="46" r="6" fill="#10b981"/>
  <text x="640" y="50" fill="#94a3b8" font-size="12" font-family="-apple-system, sans-serif" text-anchor="middle" font-weight="600">pwsh: dotnet test ./DatVeXe.Tests/DatVeXe.Tests.csproj --configuration Release</text>

  <g transform="translate(60, 110)" font-size="13" line-height="24">
    <text x="0" y="0" fill="#38bdf8">Microsoft (R) Test Execution Command Line Tool Version 17.8.0</text>
    <text x="0" y="26" fill="#64748b">Copyright (c) Microsoft Corporation.  All rights reserved.</text>
    <text x="0" y="60" fill="#e2e8f0">Starting test execution, please wait...</text>
    <text x="0" y="86" fill="#a9b2bc">A total of 1 test files matched the specified pattern.</text>
    
    <text x="0" y="130" fill="#10b981">Passed!  - DatVeXe.Tests.BookingService.VerifyRoutePricingMatrix [48ms]</text>
    <text x="0" y="156" fill="#10b981">Passed!  - DatVeXe.Tests.BookingService.ConcurrentTicketLocking_PreventsDoubleBooking [92ms]</text>
    <text x="0" y="182" fill="#10b981">Passed!  - DatVeXe.Tests.Security.XSS_PayloadSanitization_PassengerNotes [14ms]</text>
    <text x="0" y="208" fill="#10b981">Passed!  - DatVeXe.Tests.Security.CSRF_TokenVerification_OnPostReservation [21ms]</text>
    <text x="0" y="234" fill="#10b981">Passed!  - DatVeXe.Tests.Auth.JWT_RoleBasedClaims_AdminRouteAuthorization [18ms]</text>
    <text x="0" y="260" fill="#10b981">Passed!  - DatVeXe.Tests.Payment.MoMo_SignatureVerification_Success [55ms]</text>
    <text x="0" y="286" fill="#10b981">Passed!  - DatVeXe.Tests.Payment.VNPay_HashValidation_RefundPipeline [64ms]</text>
    <text x="0" y="312" fill="#10b981">Passed!  - DatVeXe.Tests.Reporting.DailyRevenueSummary_ByRoute [33ms]</text>

    <!-- Table summary -->
    <rect x="0" y="350" width="1160" height="150" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
    <text x="30" y="385" fill="#f8fafc" font-weight="bold">Test Run Summary</text>
    <text x="30" y="415" fill="#94a3b8">---------------------------------------------------------------------------------------------------</text>
    <text x="30" y="445" fill="#34d399" font-weight="bold">Total tests: 69     | Passed: 69     | Failed: 0     | Skipped: 0     | Duration: 1.42 Seconds</text>
    <text x="30" y="475" fill="#38bdf8">Result: Test Run Succeeded. (Code Coverage: 92.4% on Core Business Logic)</text>

    <text x="0" y="540" fill="#2dd4bf" font-weight="bold">PS D:\portolio\datvexe-selenium-test&gt; <tspan fill="#ffffff">_</tspan></text>
  </g>
</svg>
`;

// Image 3: Selenium WebDriver Automated Browser Session (9:16 vertical / tall - 720x1080)
const svg3 = `
<svg width="720" height="1080" viewBox="0 0 720 1080" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">
  <defs>
    <linearGradient id="bg3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0c101d"/>
      <stop offset="100%" stop-color="#05070d"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0ea5e9"/>
      <stop offset="100%" stop-color="#2dd4bf"/>
    </linearGradient>
  </defs>

  <rect width="720" height="1080" fill="url(#bg3)"/>
  
  <!-- Outer Window -->
  <rect x="20" y="20" width="680" height="1040" rx="16" fill="#080c16" stroke="rgba(56, 189, 248, 0.25)" stroke-width="2"/>
  
  <!-- Browser Chrome Header -->
  <path d="M 20 36 Q 20 20 36 20 L 684 20 Q 700 20 700 36 L 700 80 L 20 80 Z" fill="#0f172a"/>
  <circle cx="48" cy="50" r="6" fill="#ef4444"/>
  <circle cx="68" cy="50" r="6" fill="#f59e0b"/>
  <circle cx="88" cy="50" r="6" fill="#10b981"/>

  <!-- Automation Notification Strip -->
  <rect x="20" y="80" width="680" height="32" fill="#1e293b"/>
  <text x="40" y="101" fill="#f59e0b" font-size="11" font-weight="600">⚡ Chrome is being controlled by automated test software (Selenium ChromeDriver 122.0)</text>

  <!-- URL Bar -->
  <rect x="120" y="38" width="460" height="26" rx="13" fill="#030712" stroke="#334155" stroke-width="1"/>
  <text x="140" y="55" fill="#38bdf8" font-size="11" font-family="monospace">🔒 https://datvexe-production.local/booking/step-2?tripId=SGN-DALAT-04</text>
  
  <!-- Mockup Web Page Content -->
  <!-- Top Nav -->
  <rect x="40" y="130" width="640" height="50" rx="8" fill="#111827"/>
  <text x="60" y="160" fill="#ffffff" font-size="16" font-weight="800">DatVeXe Express</text>
  <text x="560" y="160" fill="#2dd4bf" font-size="12" font-weight="600">E2E Testing Mode</text>

  <!-- Route Card -->
  <rect x="40" y="196" width="640" height="90" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <text x="64" y="230" fill="#f8fafc" font-size="16" font-weight="700">TP. Hồ Chí Minh  ➔  Đà Lạt (VIP Limousine 34 Chỗ)</text>
  <text x="64" y="258" fill="#94a3b8" font-size="12">Khởi hành: 23:00 • Bến Xe Miền Đông • Giá vé: 320,000 đ</text>

  <!-- Interactive Bus Seat Grid (Visual Representation) -->
  <rect x="40" y="306" width="640" height="380" rx="12" fill="#0a0f1d" stroke="rgba(45, 212, 191, 0.2)" stroke-width="1"/>
  <text x="64" y="338" fill="#38bdf8" font-size="13" font-weight="700">CHỌN GHẾ TỰ ĐỘNG (Selenium Automated Action: Select A05, A06)</text>
  
  <!-- Seat Grid -->
  <g transform="translate(70, 360)">
    <!-- Floor 1 -->
    <text x="0" y="0" fill="#64748b" font-size="11" font-weight="600">TẦNG DƯỚI</text>
    <rect x="0" y="15" width="48" height="48" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="24" y="44" fill="#94a3b8" font-size="11" text-anchor="middle">A01</text>

    <rect x="60" y="15" width="48" height="48" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="84" y="44" fill="#94a3b8" font-size="11" text-anchor="middle">A02</text>

    <rect x="120" y="15" width="48" height="48" rx="8" fill="#ef4444" fill-opacity="0.3" stroke="#ef4444"/>
    <text x="144" y="44" fill="#fca5a5" font-size="11" text-anchor="middle">A03</text>

    <rect x="180" y="15" width="48" height="48" rx="8" fill="#2dd4bf" stroke="#2dd4bf"/>
    <text x="204" y="44" fill="#022c22" font-size="11" font-weight="bold" text-anchor="middle">A05 ✓</text>

    <rect x="240" y="15" width="48" height="48" rx="8" fill="#2dd4bf" stroke="#2dd4bf"/>
    <text x="264" y="44" fill="#022c22" font-size="11" font-weight="bold" text-anchor="middle">A06 ✓</text>

    <!-- Cursor Pointer simulation on seat A06 -->
    <polygon points="274,52 284,74 278,75 284,88 277,91 271,78 266,82" fill="#facc15" stroke="#000" stroke-width="1.5"/>
  </g>

  <!-- Passenger Info Form Mockup -->
  <rect x="40" y="706" width="640" height="160" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <text x="64" y="736" fill="#f8fafc" font-size="13" font-weight="700">THÔNG TIN HÀNH KHÁCH (Auto-filled by Selenium Test Data)</text>
  <rect x="64" y="754" width="280" height="34" rx="6" fill="#030712" stroke="#334155"/>
  <text x="76" y="776" fill="#e2e8f0" font-size="12">Họ tên: Đặng Hải Phi</text>
  
  <rect x="364" y="754" width="290" height="34" rx="6" fill="#030712" stroke="#334155"/>
  <text x="376" y="776" fill="#e2e8f0" font-size="12">Số điện thoại: 0843 704 216</text>

  <rect x="64" y="802" width="590" height="44" rx="8" fill="url(#accent)"/>
  <text x="359" y="829" fill="#040814" font-size="14" font-weight="800" text-anchor="middle">TIẾP TỤC THANH TOÁN (Auto-clicking Submit...)</text>

  <!-- Selenium Console Terminal at Bottom -->
  <rect x="40" y="884" width="640" height="156" rx="8" fill="#020408" stroke="#1e293b" stroke-width="1"/>
  <g transform="translate(56, 912)" font-family="monospace" font-size="11">
    <text x="0" y="0" fill="#34d399">[INFO] ChromeDriver: Navigated to /booking/step-2</text>
    <text x="0" y="22" fill="#34d399">[ACTION] driver.FindElement(By.Id("seat-A05")).Click(); // Success</text>
    <text x="0" y="44" fill="#34d399">[ACTION] driver.FindElement(By.Id("seat-A06")).Click(); // Success</text>
    <text x="0" y="66" fill="#38bdf8">[ASSERT] Assert.IsTrue(driver.FindElement(By.Id("total-price")).Text.Contains("640,000"));</text>
    <text x="0" y="88" fill="#2dd4bf">[PASS] E2E_SearchRoute_BookTicket_CheckoutFlow PASSED (0.48s)</text>
  </g>
</svg>
`;

async function run() {
  await sharp(Buffer.from(svg1)).jpeg({ quality: 95 }).toFile(path.join(outDir, 'datvexe-1.jpg'));
  console.log('Created datvexe-1.jpg');
  await sharp(Buffer.from(svg2)).jpeg({ quality: 95 }).toFile(path.join(outDir, 'datvexe-2.jpg'));
  console.log('Created datvexe-2.jpg');
  await sharp(Buffer.from(svg3)).jpeg({ quality: 95 }).toFile(path.join(outDir, 'datvexe-3.jpg'));
  console.log('Created datvexe-3.jpg');
}

run().catch(console.error);
