// ============================================
// EXERCIȚII - Atelier A2: jeder/jede/jedes + Häufigkeit
// Claudia Toth · 5 exerciții cu rezolvări complete
// declinare jeder · adverbe de frecvență · jeden Tag/täglich · traducere
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        // ü→u, ö→o, ä→a (vocală simplă, NU ue/oe/ae): accept-urile sunt scrise fără umlaut
        // și astfel acceptăm și tastarea pe mobil fără umlaut. NU schimba în ue/oe/ae fără a rescrie accept-urile!
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: Declinarea lui jeder (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', prompt: '______ Tag lerne ich Deutsch.', hint: 'în fiecare zi — der Tag e masculin, Akkusativ!', correct: 'Jeden', accept: ['jeden'] },
    { id: 'b', prompt: '______ Woche gehe ich einkaufen.', hint: 'die Woche, Akkusativ', correct: 'Jede', accept: ['jede'] },
    { id: 'c', prompt: '______ Jahr fahre ich nach Hause.', hint: 'das Jahr, Akkusativ', correct: 'Jedes', accept: ['jedes'] },
    { id: 'd', prompt: '______ Mann hat ein Auto.', hint: 'Nominativ masculin (Wer?)', correct: 'Jeder', accept: ['jeder'] },
    { id: 'e', prompt: 'Ich helfe ______ Kollegen.', hint: 'helfen + Dativ (masculin)', correct: 'jedem', accept: ['jedem'] },
    { id: 'f', prompt: '______ Kind bekommt ein Geschenk.', hint: 'Nominativ neutru (das Kind)', correct: 'Jedes', accept: ['jedes'] },
    { id: 'g', prompt: 'Ich gehe ______ Morgen joggen.', hint: 'der Morgen, Akkusativ', correct: 'jeden', accept: ['jeden'] },
    { id: 'h', prompt: '______ Frau im Büro ist nett.', hint: 'Nominativ feminin (die Frau)', correct: 'Jede', accept: ['jede'] },
    { id: 'i', prompt: 'Mit ______ Tag wird es besser.', hint: 'mit + Dativ (der Tag → masc.)', correct: 'jedem', accept: ['jedem'] },
    { id: 'j', prompt: '______ Abend rufe ich an.', hint: 'der Abend, Akkusativ', correct: 'Jeden', accept: ['jeden'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Completează cu forma corectă de jeder.</strong><br>
        Nom: jeder/jede/jedes · Akk: jeden/jede/jedes · Dat: jedem/jeder/jedem. Capcană: timpul (jeden Tag) e la <strong>Akkusativ</strong>!
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex1-${it.id}" placeholder="jeder / jeden / jede / jedes / jedem">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: Häufigkeit & jeder — alege corect (8 itemi)
// ============================================
const ex2Data = [
    { id: 'a', text: '100% (mereu) =', a: 'immer', b: 'nie', correct: 'immer', expl: 'immer = mereu (100%).' },
    { id: 'b', text: '0% (niciodată) =', a: 'nie', b: 'oft', correct: 'nie', expl: 'nie = niciodată (0%).' },
    { id: 'c', text: '„în fiecare zi" =', a: 'jeden Tag', b: 'jeder Tag', correct: 'jeden Tag', expl: 'Timpul e la Akkusativ → jeden Tag (der Tag e masculin).' },
    { id: 'd', text: '„zilnic" (un singur cuvânt) =', a: 'täglich', b: 'wöchentlich', correct: 'täglich', expl: 'täglich = zilnic. wöchentlich = săptămânal.' },
    { id: 'e', text: '„de două ori pe săptămână" =', a: 'zweimal pro Woche', b: 'zwei pro Woche', correct: 'zweimal pro Woche', expl: 'zweimal pro Woche (numărul + -mal).' },
    { id: 'f', text: 'jeder se declină ca:', a: 'articolul der/die/das', b: 'un adjectiv obișnuit', correct: 'articolul der/die/das', expl: 'jeder = der-Wort, se declină ca der/die/das.' },
    { id: 'g', text: '„Cât de des?" =', a: 'Wie oft?', b: 'Wie viel?', correct: 'Wie oft?', expl: 'Wie oft? = cât de des. Wie viel? = cât (de mult).' },
    { id: 'h', text: '„rar" =', a: 'selten', b: 'meistens', correct: 'selten', expl: 'selten = rar. meistens = de obicei.' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📊 Alege varianta corectă (frecvență & jeder).</strong>
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;"><strong>${it.text}</strong></p>
                <label style="display:block; margin-bottom:5px;"><input type="radio" name="ex2-${it.id}" value="${it.a}"> ${it.a}</label>
                <label style="display:block;"><input type="radio" name="ex2-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex2-${it.id}"]:checked`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct} — ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Completează adverbul de frecvență (8 itemi)
// ============================================
const ex3Data = [
    { id: 'a', prompt: 'Ich gehe ____ ins Kino.', hint: 'de obicei', correct: 'meistens', accept: ['meistens'] },
    { id: 'b', prompt: 'Er ist ____ pünktlich.', hint: 'mereu (100%)', correct: 'immer', accept: ['immer'] },
    { id: 'c', prompt: 'Wir gehen ____ ins Theater.', hint: 'rar', correct: 'selten', accept: ['selten'] },
    { id: 'd', prompt: 'Ich esse ____ Fleisch.', hint: 'niciodată (0%)', correct: 'nie', accept: ['nie'] },
    { id: 'e', prompt: 'Sie ruft mich ____ an.', hint: 'des (~60%)', correct: 'oft', accept: ['oft'] },
    { id: 'f', prompt: '____ koche ich selbst.', hint: 'uneori (la început de propoziție)', correct: 'Manchmal', accept: ['manchmal'] },
    { id: 'g', prompt: 'Ich treibe ____ Sport.', hint: 'săptămânal (un cuvânt)', correct: 'wöchentlich', accept: ['wöchentlich'] },
    { id: 'h', prompt: 'Wir treffen uns ____.', hint: 'lunar (un cuvânt)', correct: 'monatlich', accept: ['monatlich'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🕒 Completează cu adverbul de frecvență potrivit.</strong><br>
        Scala: immer → meistens → oft → manchmal → selten → nie. Plus täglich / wöchentlich / monatlich.
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="adverb de frecvență...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: jeden Tag / einmal pro Woche — completează (8 itemi)
// ============================================
const ex4Data = [
    { id: 'a', prompt: 'Ich stehe ____ Tag um 7 Uhr auf.', hint: 'jeder la Akkusativ (der Tag)', correct: 'jeden', accept: ['jeden'] },
    { id: 'b', prompt: '____ Woche besuche ich meine Oma.', hint: 'jeder la Akkusativ (die Woche)', correct: 'Jede', accept: ['jede'] },
    { id: 'c', prompt: 'Ich kaufe einmal ____ Woche ein.', hint: 'o dată ___ săptămână', correct: 'pro', accept: ['pro', 'in der'] },
    { id: 'd', prompt: 'Sie geht ____ Morgen joggen.', hint: 'jeder la Akkusativ (der Morgen)', correct: 'jeden', accept: ['jeden'] },
    { id: 'e', prompt: 'Wir fahren ____ Jahr ans Meer.', hint: 'jeder la Akkusativ (das Jahr)', correct: 'jedes', accept: ['jedes'] },
    { id: 'f', prompt: 'Ich rufe zweimal ____ Tag an.', hint: 'de două ori ___ zi', correct: 'am', accept: ['am', 'pro'] },
    { id: 'g', prompt: 'Ich helfe ____ Kollegen im Büro.', hint: 'jeder la Dativ (helfen + Dat)', correct: 'jedem', accept: ['jedem'] },
    { id: 'h', prompt: '____ Kind im Kurs hat ein Buch.', hint: 'jeder la Nominativ (das Kind)', correct: 'Jedes', accept: ['jedes'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🧩 Completează cu jeden/jede/jedes/jedem sau cu pro/am.</strong>
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex4-${it.id}" placeholder="cuvânt...">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traduce în germană (10 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Mă trezesc în fiecare zi la 7.', correct: 'Ich stehe jeden Tag um 7 Uhr auf.', accept: ['ich stehe jeden tag um 7 uhr auf', 'ich stehe jeden tag um sieben uhr auf'] },
    { id: 'b', ro: 'Merg des la cinema.', correct: 'Ich gehe oft ins Kino.', accept: ['ich gehe oft ins kino'] },
    { id: 'c', ro: 'Nu mănânc niciodată carne.', correct: 'Ich esse nie Fleisch.', accept: ['ich esse nie fleisch'] },
    { id: 'd', ro: 'Fac cumpărături de două ori pe săptămână.', correct: 'Ich kaufe zweimal pro Woche ein.', accept: ['ich kaufe zweimal pro woche ein'] },
    { id: 'e', ro: 'Cât de des faci sport?', correct: 'Wie oft machst du Sport?', accept: ['wie oft machst du sport'] },
    { id: 'f', ro: 'În fiecare săptămână o vizitez pe bunica.', correct: 'Jede Woche besuche ich meine Oma.', accept: ['jede woche besuche ich meine oma', 'ich besuche jede woche meine oma'] },
    { id: 'g', ro: 'De obicei gătesc singur.', correct: 'Meistens koche ich selbst.', accept: ['meistens koche ich selbst', 'ich koche meistens selbst'] },
    { id: 'h', ro: 'Mă întâlnesc cu prietenii în fiecare weekend.', correct: 'Ich treffe meine Freunde jedes Wochenende.', accept: ['ich treffe meine freunde jedes wochenende'] },
    { id: 'i', ro: 'Citesc zilnic.', correct: 'Ich lese täglich.', accept: ['ich lese täglich', 'ich lese jeden tag'] },
    { id: 'j', ro: 'Ea sună în fiecare seară.', correct: 'Sie ruft jeden Abend an.', accept: ['sie ruft jeden abend an'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Traduce în germană.</strong> Atenție: jeden Tag (Akk!), nie fără „nicht", scala de frecvență.
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie traducerea în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
