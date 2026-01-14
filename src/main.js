import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="hero">
      <nav class="nav">
        <div class="brand">26 de zile</div>
        <div class="nav-cta">
          <a class="btn btn-secondary" href="#program">Vezi detalii</a>
          <a class="btn btn-primary" href="#inscriere">Încep cele 26 de zile</a>
        </div>
      </nav>

      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Recalibrare • Ediția 2</p>
          <h1>26 de zile – Recalibrare</h1>
          <h2>De la ultimul loc, la primul loc din viața mea</h2>
          <p class="lead">
            <strong>Un proces ghidat, zilnic, care te ajută să te așezi în viața ta – nu în 3 luni,
            nu într-un an, ci în 26 de zile.</strong>
          </p>
          <ul class="hero-points">
            <li>Fără rezoluții.</li>
            <li>Fără presiune.</li>
            <li>Fără să te reinventezi.</li>
          </ul>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#inscriere">Încep cele 26 de zile</a>
            <a class="btn btn-ghost" href="#marturii">Citesc mărturii reale</a>
          </div>
        </div>
        <div class="hero-card">
          <div class="badge">Proces zilnic pe WhatsApp</div>
          <h3>Un container cald + ferm pentru femei funcționale, dar nealiniate.</h3>
          <p>
            Nu e rezoluție. E recalibrare. Nu faci liste. Îți recuperezi direcția.
          </p>
          <div class="pill-grid">
            <span>5 minute minim</span>
            <span>15 minute aprofundare</span>
            <span>Catch-up fără rușine</span>
            <span>Ziua 26: Doliul Alb</span>
          </div>
        </div>
      </div>
    </header>

    <section class="section" id="program">
      <div class="section-title">
        <h2>Ai început anul. Și totuși…</h2>
        <p>
          Poate chiar cu intenții bune. Și totuși, zilele au început să arate la fel.
          Ai intrat din nou în ritm, în responsabilități, în „mai întâi ceilalți”.
        </p>
      </div>
      <div class="split">
        <div class="card">
          <p>
            Nu e că nu știi ce ar fi bine. E că, în fiecare zi, <strong>te lași pe tine la final</strong>.
            Și dacă nu intervii acum, știi deja cum va arăta anul.
          </p>
        </div>
        <div class="card accent">
          <h3>Nu e lipsă de motivație.</h3>
          <p>
            E lipsă de aliniere + de consecvență blândă. Exact asta antrenează acest proces.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-title">
        <h2>Ce este acest program (și ce NU este)</h2>
      </div>
      <div class="split">
        <div class="card">
          <p>Nu este un curs.</p>
          <p>Nu este motivație de moment.</p>
          <p>Nu este conținut pe care „îl mai salvezi”.</p>
        </div>
        <div class="card">
          <p>Este un <strong>proces zilnic, ghidat</strong>, care:</p>
          <ul>
            <li>te ține în ritm</li>
            <li>te aduce înapoi la tine</li>
            <li>te ajută să faci alegeri diferite, zilnic</li>
            <li><strong>funcționează ca un instrument concret de lucru cu disciplina personală</strong></li>
          </ul>
          <p>Totul se întâmplă pe <strong>WhatsApp</strong>. Simplu. Direct. Uman.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-title">
        <h2>Ce include exact</h2>
      </div>
      <div class="grid-3">
        <div class="feature">
          <h3>26 de mesaje zilnice ghidate</h3>
          <p>Întrebări + exerciții aplicate, direct în WhatsApp.</p>
        </div>
        <div class="feature">
          <h3>Structură flexibilă</h3>
          <p>5 minute (minim) / 15 minute (aprofundare).</p>
        </div>
        <div class="feature">
          <h3>Catch-up fără rușine</h3>
          <p>Mesaje dedicate pentru zilele ratate.</p>
        </div>
        <div class="feature">
          <h3>Zi de integrare</h3>
          <p>Claritate + decizie la mijlocul procesului.</p>
        </div>
        <div class="feature">
          <h3>Ziua 26: Doliul Alb</h3>
          <p>Ritual final de închidere și ancorare.</p>
        </div>
        <div class="feature">
          <h3>Grup dedicat</h3>
          <p>26 zile, fără expunere forțată.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-title">
        <h2>Ce rezultate poți aștepta, realist</h2>
      </div>
      <div class="card">
        <ul class="results">
          <li>te vei pune pe tine pe primul loc mai des, fără vinovăție</li>
          <li>vei spune „nu” mai ușor</li>
          <li>vei avea mai multă claritate în decizii</li>
          <li>nu te vei mai simți în derivă</li>
          <li>vei avea un ritm care nu te consumă</li>
          <li><strong>îți vei antrena disciplina printr-un angajament zilnic simplu și sustenabil</strong></li>
        </ul>
        <p class="emphasis">Nu ieși „motivată”. Ieși <strong>așezată și mai consecventă</strong>.</p>
      </div>
    </section>

    <section class="section" id="marturii">
      <div class="section-title">
        <h2>Ce spun participanții din ediția 1</h2>
      </div>
      <div class="testimonials">
        <article class="testimonial">
          <h3>Ali</h3>
          <p>
            „Cea mai mare conștientizare a fost că făceam lucrurile pentru binele altora, nu pentru mine
            și familia mea. M-a surprins constanța și consecvența Claudiei. Se simte că s-a implicat real.”
          </p>
        </article>
        <article class="testimonial">
          <h3>Ioana</h3>
          <p>
            „Am mai multă claritate și mai mult curaj. Programul m-a ajutat să mă concentrez pe aliniere,
            nu pe aprobare. M-a surprins ușurarea pe care am simțit-o după exercițiile zilnice – parcă am dat
            jos ceva ce mă încărca inutil și am ajuns la liniște.”
          </p>
        </article>
        <article class="testimonial">
          <h3>Eugen</h3>
          <p>
            „Programul m-a ajutat să văd clar că principalul meu sabotor eram eu, nu factorii externi.
            Întrebările zilnice m-au scos din blocajul de auto-critică și procrastinare. Chiar și fără a fi activ
            zilnic în grup, procesul a funcționat.”
          </p>
        </article>
        <article class="testimonial">
          <h3>Vali</h3>
          <p>
            „Cele câteva minute zilnic m-au ajutat să observ tipare de autosabotaj. Sunt mai ancorat în
            prezent, mai încrezător și îmi dau voie să simt emoții inconfortabile fără să le evit.”
          </p>
        </article>
        <article class="testimonial">
          <h3>Aida</h3>
          <p>
            „Programul m-a prins într-un moment de răscruce, profesional și personal. Citind zilnic, m-a ajutat
            să fac alegeri care s-au dovedit potrivite pentru acel moment. M-a ajutat să văd lucrurile diferit
            și să am mai multă încredere în proces, chiar aproape de 40 de ani.”
          </p>
        </article>
      </div>
    </section>

    <section class="section" id="inscriere">
      <div class="section-title">
        <h2>Preț și acces</h2>
        <p>Acces pentru 26 de zile la un proces ghidat, zilnic, care te ajută să te așezi, să faci alegeri mai clare și să îți construiești consecvența.</p>
      </div>
      <div class="pricing">
        <div class="price-card">
          <h3>Preț Early Bird (participanți noi)</h3>
          <p class="price">147 lei</p>
          <p class="note">Disponibil pentru ediția 2</p>
          <a class="btn btn-primary" href="#">Încep cele 26 de zile</a>
        </div>
        <div class="price-card highlight">
          <h3>Preț Late Owl / Preț normal</h3>
          <p class="price">247 lei</p>
          <p class="note">După perioada Early Bird</p>
          <a class="btn btn-secondary" href="#">Rezerv locul</a>
        </div>
        <div class="price-card">
          <h3>Preț special REPEAT (pentru participanții din ediția 1)</h3>
          <p class="price">93 lei</p>
          <p class="note">Variantă actualizată și îmbunătățită a programului</p>
          <a class="btn btn-ghost" href="#">Continui procesul</a>
        </div>
      </div>
      <p class="center">
        Nu este pentru toată lumea. Este pentru cei care simt că <strong>e momentul</strong>.
      </p>
    </section>

    <section class="section">
      <div class="section-title">
        <h2>Poate te întrebi…</h2>
      </div>
      <div class="faq">
        <div class="faq-item">
          <h3>Dacă nu am timp?</h3>
          <p>Ai opțiunea de 5 minute pe zi.</p>
        </div>
        <div class="faq-item">
          <h3>Dacă mai sar zile?</h3>
          <p>Există mesaje de catch-up. Fără rușine.</p>
        </div>
        <div class="faq-item">
          <h3>Dacă am mai încercat lucruri și nu au funcționat?</h3>
          <p>Aici nu e vorba de a încerca. E vorba de a rămâne.</p>
        </div>
        <div class="faq-item">
          <h3>Este terapie?</h3>
          <p>Nu. Este coaching aplicat, ghidat.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-title">
        <h2>Garanție</h2>
        <p>
          Acest program vine cu o <strong>garanție de claritate</strong>.
          La finalul celor 26 de zile, vei avea mai multă claritate asupra ta,
          a nevoilor tale și a alegerilor pe care le faci.
        </p>
      </div>
      <div class="card">
        <p>
          Nu promitem schimbări magice sau rezultate peste noapte, ci un proces onest
          care te ajută să vezi mai limpede și să te așezi mai bine în viața ta.
        </p>
        <p>Aceasta este garanția programului.</p>
      </div>
    </section>

    <section class="section choice">
      <div class="choice-card">
        <h2>Alegerea este a ta</h2>
        <div class="choice-actions">
          <a class="btn btn-primary" href="#inscriere">Mă pun pe primul loc în viața mea</a>
          <a class="btn btn-ghost" href="#program">Continui să mă las pe ultimul loc</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-title">
        <h2>Despre facilitator</h2>
      </div>
      <div class="split">
        <div class="card">
          <h3>Claudia Ciocianu – Business & Performance Coach</h3>
          <p>
            Lucrez cu oameni care funcționează bine în exterior, dar care simt că s-au pierdut pe drum.
            Îi ajut să se așeze, să-și recapete direcția și să facă alegeri mai bune pentru ei, fără presiune
            și fără măști.
          </p>
        </div>
        <div class="card accent">
          <h3>Nu e rezoluție. E recalibrare.</h3>
          <p>Un proces viu, nu un curs. Un ritm blând + ferm care te ține în proces.</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div>
        <p><strong>Legal</strong></p>
        <ul>
          <li>Termeni și condiții</li>
          <li>Politica de confidențialitate (GDPR)</li>
          <li>Politica de retur – produs digital (fără retur)</li>
          <li>Date firmă / PFA</li>
          <li>Conform ANPC</li>
        </ul>
      </div>
      <div class="footer-cta">
        <p>Pregătită pentru 26 de zile care îți schimbă ritmul, nu identitatea.</p>
        <a class="btn btn-primary" href="#inscriere">Încep cele 26 de zile</a>
      </div>
    </footer>
  </div>
`
