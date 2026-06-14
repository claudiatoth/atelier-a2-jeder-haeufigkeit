// ============================================
// VERB-KONJUGATION - Atelier A2: jeder/jede/jedes + Häufigkeit
// 6 verbe de rutină: aufstehen · frühstücken · treffen · besuchen · einkaufen · anrufen
// ============================================

const verbsData = [
    {
        inf: 'aufstehen', ro: 'a se trezi / a se ridica', typ: 'tare / TRENNBAR', aux: 'sein', part: 'aufgestanden',
        praes: [
            ['ich','stehe auf','mă trezesc'],['du','stehst auf','te trezești'],['er/sie/es','steht auf','se trezește'],
            ['wir','stehen auf','ne trezim'],['ihr','steht auf','vă treziți'],['sie/Sie','stehen auf','se trezesc / vă treziți']
        ],
        praet: [
            ['ich','stand auf','mă trezeam'],['du','standest auf','te trezeai'],['er/sie/es','stand auf','se trezea'],
            ['wir','standen auf','ne trezeam'],['ihr','standet auf','vă trezeați'],['sie/Sie','standen auf','se trezeau']
        ],
        perf: [
            ['ich','bin aufgestanden','m-am trezit'],['du','bist aufgestanden','te-ai trezit'],['er/sie/es','ist aufgestanden','s-a trezit'],
            ['wir','sind aufgestanden','ne-am trezit'],['ihr','seid aufgestanden','v-ați trezit'],['sie/Sie','sind aufgestanden','s-au trezit']
        ],
        note: '🚨 TARE + TRENNBAR (auf- se separă) + Perfekt cu <strong>sein</strong> (ist aufgestanden). Tipic: Ich stehe <strong>jeden Tag</strong> um 7 Uhr <strong>auf</strong>.'
    },
    {
        inf: 'frühstücken', ro: 'a lua micul dejun', typ: 'regulat', aux: 'haben', part: 'gefrühstückt',
        praes: [
            ['ich','frühstücke','iau micul dejun'],['du','frühstückst','iei micul dejun'],['er/sie/es','frühstückt','ia micul dejun'],
            ['wir','frühstücken','luăm micul dejun'],['ihr','frühstückt','luați micul dejun'],['sie/Sie','frühstücken','iau / luați micul dejun']
        ],
        praet: [
            ['ich','frühstückte','luam micul dejun'],['du','frühstücktest','luai micul dejun'],['er/sie/es','frühstückte','lua micul dejun'],
            ['wir','frühstückten','luam micul dejun'],['ihr','frühstücktet','luați micul dejun'],['sie/Sie','frühstückten','luau micul dejun']
        ],
        perf: [
            ['ich','habe gefrühstückt','am luat micul dejun'],['du','hast gefrühstückt','ai luat micul dejun'],['er/sie/es','hat gefrühstückt','a luat micul dejun'],
            ['wir','haben gefrühstückt','am luat micul dejun'],['ihr','habt gefrühstückt','ați luat micul dejun'],['sie/Sie','haben gefrühstückt','au luat micul dejun']
        ],
        note: '🧩 Regulat. Substantiv: das Frühstück (micul dejun). Tipic: <strong>Jeden Morgen</strong> frühstücke ich um 8 Uhr.'
    },
    {
        inf: 'treffen', ro: 'a (se) întâlni', typ: 'tare (neregulat)', aux: 'haben', part: 'getroffen',
        praes: [
            ['ich','treffe','întâlnesc'],['du','triffst','întâlnești'],['er/sie/es','trifft','întâlnește'],
            ['wir','treffen','întâlnim'],['ihr','trefft','întâlniți'],['sie/Sie','treffen','întâlnesc / întâlniți']
        ],
        praet: [
            ['ich','traf','întâlneam'],['du','trafst','întâlneai'],['er/sie/es','traf','întâlnea'],
            ['wir','trafen','întâlneam'],['ihr','traft','întâlneați'],['sie/Sie','trafen','întâlneau']
        ],
        perf: [
            ['ich','habe getroffen','am întâlnit'],['du','hast getroffen','ai întâlnit'],['er/sie/es','hat getroffen','a întâlnit'],
            ['wir','haben getroffen','am întâlnit'],['ihr','habt getroffen','ați întâlnit'],['sie/Sie','haben getroffen','au întâlnit']
        ],
        note: '🚨 TARE (e→i: du triffst, er trifft; Prät traf → Part getroffen). Reflexiv: sich treffen (mit + Dat). Tipic: Ich treffe Freunde <strong>jedes Wochenende</strong>.'
    },
    {
        inf: 'besuchen', ro: 'a vizita', typ: 'regulat', aux: 'haben', part: 'besucht',
        praes: [
            ['ich','besuche','vizitez'],['du','besuchst','vizitezi'],['er/sie/es','besucht','vizitează'],
            ['wir','besuchen','vizităm'],['ihr','besucht','vizitați'],['sie/Sie','besuchen','vizitează / vizitați']
        ],
        praet: [
            ['ich','besuchte','vizitam'],['du','besuchtest','vizitai'],['er/sie/es','besuchte','vizita'],
            ['wir','besuchten','vizitam'],['ihr','besuchtet','vizitați'],['sie/Sie','besuchten','vizitau']
        ],
        perf: [
            ['ich','habe besucht','am vizitat'],['du','hast besucht','ai vizitat'],['er/sie/es','hat besucht','a vizitat'],
            ['wir','haben besucht','am vizitat'],['ihr','habt besucht','ați vizitat'],['sie/Sie','haben besucht','au vizitat']
        ],
        note: '🚨 Prefix NESEPARABIL be- → FĂRĂ ge- la Perfekt (besucht). Tipic: <strong>Jede Woche</strong> besuche ich meine Oma.'
    },
    {
        inf: 'einkaufen', ro: 'a face cumpărături', typ: 'regulat / TRENNBAR', aux: 'haben', part: 'eingekauft',
        praes: [
            ['ich','kaufe ein','fac cumpărături'],['du','kaufst ein','faci cumpărături'],['er/sie/es','kauft ein','face cumpărături'],
            ['wir','kaufen ein','facem cumpărături'],['ihr','kauft ein','faceți cumpărături'],['sie/Sie','kaufen ein','fac / faceți cumpărături']
        ],
        praet: [
            ['ich','kaufte ein','făceam cumpărături'],['du','kauftest ein','făceai cumpărături'],['er/sie/es','kaufte ein','făcea cumpărături'],
            ['wir','kauften ein','făceam cumpărături'],['ihr','kauftet ein','făceați cumpărături'],['sie/Sie','kauften ein','făceau cumpărături']
        ],
        perf: [
            ['ich','habe eingekauft','am făcut cumpărături'],['du','hast eingekauft','ai făcut cumpărături'],['er/sie/es','hat eingekauft','a făcut cumpărături'],
            ['wir','haben eingekauft','am făcut cumpărături'],['ihr','habt eingekauft','ați făcut cumpărături'],['sie/Sie','haben eingekauft','au făcut cumpărături']
        ],
        note: '🚨 TRENNBAR (ein- se separă: Ich kaufe <strong>ein</strong>). Perfekt: ein + ge + kauft = eingekauft. Tipic: Ich kaufe <strong>einmal pro Woche</strong> ein.'
    },
    {
        inf: 'anrufen', ro: 'a suna (la telefon)', typ: 'tare / TRENNBAR', aux: 'haben', part: 'angerufen',
        praes: [
            ['ich','rufe an','sun'],['du','rufst an','suni'],['er/sie/es','ruft an','sună'],
            ['wir','rufen an','sunăm'],['ihr','ruft an','sunați'],['sie/Sie','rufen an','sună / sunați']
        ],
        praet: [
            ['ich','rief an','sunam'],['du','riefst an','sunai'],['er/sie/es','rief an','suna'],
            ['wir','riefen an','sunam'],['ihr','rieft an','sunați'],['sie/Sie','riefen an','sunau']
        ],
        perf: [
            ['ich','habe angerufen','am sunat'],['du','hast angerufen','ai sunat'],['er/sie/es','hat angerufen','a sunat'],
            ['wir','haben angerufen','am sunat'],['ihr','habt angerufen','ați sunat'],['sie/Sie','haben angerufen','au sunat']
        ],
        note: '🚨 TARE (rufen→rief) + TRENNBAR (an- se separă). Perfekt: an + ge + rufen = angerufen. Cere Akkusativ: jemanden anrufen. Tipic: Sie ruft <strong>jeden Abend</strong> ihre Familie <strong>an</strong>.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#6b7280;">' + exampleRow[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe de rutină</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Perfecte cu un strop de frecvență: Ich stehe <strong>jeden Tag</strong> auf, ich kaufe <strong>einmal pro Woche</strong> ein.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Verbele de rutină merg mână în mână cu frecvența: <strong>aufstehen</strong> (jeden Morgen), <strong>einkaufen</strong> (einmal pro Woche), <strong>treffen</strong> (jedes Wochenende). Atenție: <strong>aufstehen</strong> face Perfekt cu <strong>sein</strong> (ist aufgestanden)! Iar treffen/anrufen sunt TARI. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
