// ============================================
// TEORIE - Atelier A2: jeder/jede/jedes + Häufigkeit
// Claudia Toth · Annettes Deutschkurs · Atelier de aprofundare
// jed- declinat ca articolul (Nom/Akk/Dat) + capcana „jeden Tag" (Akk) · adverbe de frecvență · täglich/wöchentlich + einmal pro Woche
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🔁 1. Wie oft? — cât de des?</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-jeder-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Personajele Atelierului</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">Își descrie rutina</span></div>
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Profesoara · Berlin</span></div>
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · Berlin</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Fotografă · Berlin</span></div>
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Bucătar · Potsdam</span></div>
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Maistru · Oranienburg</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 „Fiecare zi" și „cât de des"</h4>
                <p>Ca să povestești o rutină ai nevoie de două lucruri: cuvântul <strong>jeder/jede/jedes</strong> („fiecare") și <strong>adverbele de frecvență</strong> (immer, oft, manchmal, nie…). Plus capcana clasică: se spune <strong>jeden Tag</strong> — nu „jeder Tag"!</p>
                <div class="example-box">
                    <p class="de">Ich stehe <strong>jeden Tag</strong> um 7 Uhr auf und gehe <strong>oft</strong> joggen.</p>
                    <p class="ro">Mă trezesc în fiecare zi la 7 și merg des la alergat.</p>
                </div>
            </div>

            <div class="theory-box info-box">
                <h4>🗺️ Ce vezi în acest atelier</h4>
                <ul>
                    <li><strong>2.</strong> <strong>jeder/jede/jedes</strong> — se declină ca articolul (Nom/Akk/Dat) + capcana <strong>jeden Tag</strong> (Akkusativ!)</li>
                    <li><strong>3.</strong> Adverbele de frecvență: immer → meistens → oft → manchmal → selten → nie</li>
                    <li><strong>4.</strong> <strong>täglich / wöchentlich / monatlich</strong> + jeden Tag/jede Woche + <strong>einmal pro Woche</strong></li>
                    <li><strong>5.</strong> Recap + dialog (rutina Andreei)</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Întrebarea-cheie e <strong>Wie oft?</strong> (cât de des?). Răspunzi fie cu un adverb (oft, manchmal, nie), fie cu <strong>jeden Tag / einmal pro Woche</strong>. Hai să le punem cap la cap! 🦋</em>
                </div>
            </div>

            <!-- ===== SCHREIBWERKSTATT — Trimite textul Claudiei ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    Descrie-ți rutina (Wie oft machst du was?) folosind cel puțin <strong>jeden Tag, einmal pro Woche și 4 adverbe de frecvență</strong> (immer, oft, manchmal, selten, nie). <strong>Min. 60 cuvinte.</strong> Îți răspund personal pe email. 🦋
                </p>
                <a href="https://forms.gle/VRF7dp8Kc42miWU6A" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
                    Trimite textul Claudiei →
                </a>
                <p style="color: #6b7280; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
                    ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
                </p>
            </div>
        </div>
    </div>

    <!-- 1: jeder declinare -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📐 2. jeder/jede/jedes — declinare + capcana „jeden Tag"</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-jeder-deklination.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <p><strong>jeder</strong> înseamnă „fiecare" și se declină exact ca articolul hotărât <strong>der/die/das</strong> (e un „der-Wort"). E mereu la <strong>singular</strong>:</p>

            <table class="grammar-table">
                <thead>
                    <tr><th>Caz</th><th>Masculin</th><th>Feminin</th><th>Neutru</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Nominativ</strong> (Wer/Was?)</td><td>jed<strong>er</strong> Mann</td><td>jed<strong>e</strong> Frau</td><td>jed<strong>es</strong> Kind</td></tr>
                    <tr><td><strong>Akkusativ</strong> (Wen/Was?)</td><td>jed<strong>en</strong> Mann</td><td>jed<strong>e</strong> Frau</td><td>jed<strong>es</strong> Kind</td></tr>
                    <tr><td><strong>Dativ</strong> (Wem?)</td><td>jed<strong>em</strong> Mann</td><td>jed<strong>er</strong> Frau</td><td>jed<strong>em</strong> Kind</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#fef3c7; border-left-color:#f59e0b;">
                <h4>⚡ Capcana de aur: „jeden Tag" (Akkusativ!)</h4>
                <p style="margin:0;">Expresiile de timp care răspund la <strong>Wie oft? / Wann?</strong> stau la <strong>Akkusativ</strong>, chiar dacă nu există un „obiect direct":<br>
                <strong>jeden Tag</strong> (în fiecare zi) · <strong>jede Woche</strong> · <strong>jedes Jahr</strong> · <strong>jeden Morgen / jeden Abend / jeden Montag</strong>.<br>
                ❌ NU „jeder Tag" — der Tag e masculin → la Akkusativ devine <strong>jeden</strong>!</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Plural? <strong>jeder</strong> nu are plural — pentru „toți" folosești <strong>alle</strong> (alle Tage). Și ține minte capcana: „Ich lerne <strong>jeden Tag</strong>" (Akkusativ), nu „jeder Tag". 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Häufigkeitsadverbien -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>📊 3. Adverbele de frecvență (immer → nie)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-haeufigkeit.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Adverb</th><th>Cât de des (aprox.)</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>immer</strong></td><td>100%</td><td>mereu / întotdeauna</td></tr>
                    <tr><td><strong>meistens</strong></td><td>~80%</td><td>de obicei / cel mai des</td></tr>
                    <tr><td><strong>oft</strong></td><td>~60%</td><td>des</td></tr>
                    <tr><td><strong>manchmal</strong></td><td>~40%</td><td>uneori / câteodată</td></tr>
                    <tr><td><strong>selten</strong></td><td>~15%</td><td>rar</td></tr>
                    <tr><td><strong>nie</strong></td><td>0%</td><td>niciodată</td></tr>
                </tbody>
            </table>

            <div class="theory-box">
                <h4>📍 Unde stă adverbul?</h4>
                <ul>
                    <li>De obicei <strong>după verb</strong>: Ich gehe <strong>oft</strong> ins Kino.</li>
                    <li>Sau pe <strong>locul 1</strong> (cu inversiune): <strong>Manchmal</strong> koche ich selbst.</li>
                    <li>Răspunsul la <strong>Wie oft?</strong>: Wie oft machst du Sport? — <strong>Dreimal pro Woche.</strong></li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Ține minte scala: <strong>immer → meistens → oft → manchmal → selten → nie</strong>. „nie" e deja negativ — NU mai pui „nicht": „Ich gehe <strong>nie</strong> ins Fitnessstudio" (NU „nicht nie"). 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: täglich + einmal pro Woche -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>📅 4. täglich / wöchentlich + einmal pro Woche</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-taeglich.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>„Cât de des" cu jeder</th><th>Un singur cuvânt</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>jeden Tag</strong></td><td><strong>täglich</strong></td><td>zilnic</td></tr>
                    <tr><td><strong>jede Woche</strong></td><td><strong>wöchentlich</strong></td><td>săptămânal</td></tr>
                    <tr><td><strong>jeden Monat</strong></td><td><strong>monatlich</strong></td><td>lunar</td></tr>
                    <tr><td><strong>jedes Jahr</strong></td><td><strong>jährlich</strong></td><td>anual</td></tr>
                </tbody>
            </table>

            <div class="theory-box info-box">
                <h4>🔢 De câte ori? — …mal pro …</h4>
                <ul>
                    <li><strong>einmal</strong> (o dată) · <strong>zweimal</strong> (de două ori) · <strong>dreimal</strong> (de trei ori)</li>
                    <li>+ <strong>pro Woche / pro Tag / pro Monat</strong> sau <strong>am Tag · in der Woche</strong></li>
                    <li>Exemplu: Ich gehe <strong>zweimal pro Woche</strong> ins Fitnessstudio.</li>
                </ul>
            </div>

            <div class="example-box">
                <p class="de">Ich kaufe <strong>einmal pro Woche</strong> ein und putze <strong>täglich</strong> die Wohnung.</p>
                <p class="ro">Fac cumpărături o dată pe săptămână și fac curat zilnic în casă.</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Două feluri de a spune același lucru: <strong>jeden Tag = täglich</strong>, <strong>jede Woche = wöchentlich</strong>. Folosește pe care vrei — sună mai natural dacă le alternezi! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: recap + dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🗣️ 5. Recap + dialog (rutina Andreei)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-recap-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="border-left-color:#047857;">
                <h4>📝 Recap rapid</h4>
                <ul>
                    <li><strong>jeder/jede/jedes</strong> = fiecare → se declină ca der/die/das (Nom jeder · Akk jeden · Dat jedem la masc.).</li>
                    <li>Capcana: <strong>jeden Tag</strong> (Akkusativ de timp), nu „jeder Tag".</li>
                    <li>Frecvență: <strong>immer → meistens → oft → manchmal → selten → nie</strong>.</li>
                    <li><strong>jeden Tag = täglich</strong> · <strong>einmal pro Woche</strong> = o dată pe săptămână.</li>
                </ul>
            </div>

            <div class="theory-box">
                <h4>💬 Dialog: Annette o întreabă pe Andreea despre rutina ei</h4>
                <p><strong style="color:#065f46;">Annette:</strong> <strong>Wie oft</strong> lernst du Deutsch?<br><span class="ro-translation">Cât de des înveți germană?</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> <strong>Jeden Tag!</strong> Ich lerne <strong>täglich</strong> eine Stunde und gehe <strong>zweimal pro Woche</strong> zum Kurs.<br><span class="ro-translation">În fiecare zi! Învăț zilnic o oră și merg de două ori pe săptămână la curs.</span></p>
                <p><strong style="color:#065f46;">Annette:</strong> Toll! Und Sport?<br><span class="ro-translation">Super! Și sport?</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> <strong>Manchmal</strong> gehe ich joggen, aber ins Fitnessstudio gehe ich fast <strong>nie</strong>. Kochen tue ich <strong>meistens</strong> selbst.<br><span class="ro-translation">Uneori merg la alergat, dar la sală nu merg aproape niciodată. Gătesc de obicei singură.</span></p>
                <p><strong style="color:#065f46;">Annette:</strong> Du bist sehr fleißig — <strong>jeden Tag</strong> üben, das ist das Geheimnis!<br><span class="ro-translation">Ești foarte harnică — să exersezi în fiecare zi, ăsta e secretul!</span></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Acum poți povesti orice rutină! Reține: <strong>jeden Tag</strong> (Akk), scala <strong>immer→nie</strong>, și <strong>einmal/zweimal pro Woche</strong>. Mult succes! 🦋</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
