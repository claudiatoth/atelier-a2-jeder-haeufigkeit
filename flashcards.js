// ============================================
// FLASHCARDS - Atelier A2: jeder/jede/jedes + Häufigkeit
// Claudia Toth · 32 carduri: jeder declinat + adverbe de frecvență + täglich + verbe + fraze
// REGULĂ: NICIODATĂ ghilimele interne ASCII — emfază cu CAPS; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === jeder declinat (6) ===
    { de: "jeder", ro: "fiecare (Nom. masc.; der-Wort, ca der/die/das)", audio: "audio/letters/jeder-nom.wav" },
    { de: "jeden Tag", ro: "în fiecare zi (Akkusativ! capcană)", audio: "audio/letters/jeder-tag.wav" },
    { de: "jede Woche", ro: "în fiecare săptămână", audio: "audio/letters/jeder-woche.wav" },
    { de: "jedes Jahr", ro: "în fiecare an", audio: "audio/letters/jeder-jahr.wav" },
    { de: "jedem", ro: "fiecăruia (Dativ: mit jedem Tag, ich helfe jedem)", audio: "audio/letters/jeder-dativ.wav" },
    { de: "jeder / jede / jedes", ro: "se declină ca der/die/das (Nom-Akk-Dat)", audio: "audio/letters/jeder-deklination.wav" },

    // === Adverbe de frecvență (8) ===
    { de: "immer", ro: "mereu / întotdeauna (100%)", audio: "audio/letters/adv-immer.wav" },
    { de: "meistens", ro: "de obicei / cel mai des (~80%)", audio: "audio/letters/adv-meistens.wav" },
    { de: "oft", ro: "des (~60%)", audio: "audio/letters/adv-oft.wav" },
    { de: "manchmal", ro: "uneori / câteodată (~40%)", audio: "audio/letters/adv-manchmal.wav" },
    { de: "selten", ro: "rar (~15%)", audio: "audio/letters/adv-selten.wav" },
    { de: "nie", ro: "niciodată (0%) — fără nicht!", audio: "audio/letters/adv-nie.wav" },
    { de: "täglich", ro: "zilnic (= jeden Tag)", audio: "audio/letters/adv-taeglich.wav" },
    { de: "wöchentlich", ro: "săptămânal (= jede Woche)", audio: "audio/letters/adv-woechentlich.wav" },

    // === De câte ori (4) ===
    { de: "einmal pro Woche", ro: "o dată pe săptămână", audio: "audio/letters/freq-einmal.wav" },
    { de: "zweimal am Tag", ro: "de două ori pe zi", audio: "audio/letters/freq-zweimal.wav" },
    { de: "monatlich", ro: "lunar (= jeden Monat)", audio: "audio/letters/freq-monatlich.wav" },
    { de: "Wie oft?", ro: "Cât de des?", audio: "audio/letters/freq-wieoft.wav" },

    // === Verbe de rutină (6) ===
    { de: "aufstehen", ro: "a se trezi (separabil; Perfekt cu sein: aufgestanden)", audio: "audio/letters/verb-aufstehen.wav" },
    { de: "frühstücken", ro: "a lua micul dejun (gefrühstückt)", audio: "audio/letters/verb-fruehstuecken.wav" },
    { de: "treffen", ro: "a (se) întâlni (TARE: du triffst; getroffen)", audio: "audio/letters/verb-treffen.wav" },
    { de: "besuchen", ro: "a vizita (be- fără ge-: besucht)", audio: "audio/letters/verb-besuchen.wav" },
    { de: "einkaufen", ro: "a face cumpărături (separabil: eingekauft)", audio: "audio/letters/verb-einkaufen.wav" },
    { de: "anrufen", ro: "a suna (TARE + separabil: angerufen)", audio: "audio/letters/verb-anrufen.wav" },

    // === Fraze model (8) ===
    { de: "Ich stehe jeden Tag um 7 Uhr auf.", ro: "Mă trezesc în fiecare zi la 7.", audio: "audio/letters/satz-aufstehen.wav" },
    { de: "Jeden Morgen frühstücke ich.", ro: "În fiecare dimineață iau micul dejun.", audio: "audio/letters/satz-fruehstuecken.wav" },
    { de: "Ich gehe oft ins Kino.", ro: "Merg des la cinema.", audio: "audio/letters/satz-kino.wav" },
    { de: "Ich kaufe zweimal pro Woche ein.", ro: "Fac cumpărături de două ori pe săptămână.", audio: "audio/letters/satz-einkaufen.wav" },
    { de: "Wie oft machst du Sport?", ro: "Cât de des faci sport?", audio: "audio/letters/satz-wieoft.wav" },
    { de: "Ich treffe meine Freunde jedes Wochenende.", ro: "Îmi întâlnesc prietenii în fiecare weekend.", audio: "audio/letters/satz-treffen.wav" },
    { de: "Sie ruft jeden Abend ihre Familie an.", ro: "Sună în fiecare seară familia.", audio: "audio/letters/satz-anrufen.wav" },
    { de: "Ich gehe nie ins Fitnessstudio.", ro: "Nu merg niciodată la sală.", audio: "audio/letters/satz-nie.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    const fc = document.getElementById('flashcard');
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    if (fc) fc.classList.toggle('flipped', isFlipped);
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
