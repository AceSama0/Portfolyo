/**
 * ============================================================================
 * SEZER ARSLAN — PORTFOLYO 2026 (js/game.js)
 * ============================================================================
 */

(function () {
  'use strict';

  let currentLang = 'tr';
  const I18N = {
    tr: {
      navHome: 'ANA SAYFA',
      navAbout: 'HAKKIMDA',
      navSkills: 'YETENEKLER',
      navProjects: 'PROJELER',
      navEdu: 'EĞİTİM',
      navContact: 'İLETİŞİM',
      navCta: 'İLETİŞİME GEÇ',
      heroKicker: 'GAME DEVELOPER & 3D ARTIST',
      heroDesc:
        'Oyun mekanikleri, atmosferik dünyalar ve 3B karakterler üreten tutkulu bir geliştiriciyim. Unity ve Blender ile akılda kalıcı oyun deneyimleri tasarlıyorum.',
      heroBtn: 'PROJELERİMİ İNCELE',
      aboutKicker: 'HAKKIMDA',
      aboutHeading: 'Amacı olan tasarım.<br /><em>Ruhu</em> olan oyunlar.',
      cvBioText:
        'Muğla Sıtkı Koçman Üniversitesi Dijital Oyun Tasarımı 2. sınıf öğrencisiyim. Oyun geliştirme, C# programlama, 3B modelleme ve animasyon alanlarında kendimi aktif olarak geliştiriyorum. Unity oyun motoru ve Blender üzerinde uzmanlaşarak <em>Gaslit Eye</em> ve <em>Cute Office Simulator</em> projelerini tamamladım; şu anda yeni oyunumuz <strong>DreamJob</strong>’da <strong>Game Developer</strong> olarak çalışıyorum.',
      locBadgeText: 'MANİSA,<br />TÜRKİYE',
      modSkills: 'YETENEKLER & ARAÇLAR',
      servicesHeading: 'Neler<br />yapıyorum',
      srvUnityDesc:
        'Oynanış mekanikleri, karakter kontrolcüleri, durum makineleri (State Machine), ışık/kamera sistemleri ve QA test süreçleri.',
      srvBlenderDesc:
        'Stilize 3B karakter modelleme, çevre ve ofis mobilyaları üretimi, karakter animasyonları ve Unity motoruna entegrasyon.',
      srvLangOnlyTitle: 'Diller',
      srvLangOnlyDesc:
        '<strong>Türkçe:</strong> Ana Dil (5/5)<br /><strong>İngilizce:</strong> İleri Seviye (4/5)',
      srvHobbiesTitle: 'Hobiler & İlgi Alanları',
      srvHobbiesDesc:
        'Multi-Genre Gaming, Satranç (Chess), 3D Printing ve Fitness.',
      projKicker: 'ÖNE ÇIKAN PROJELER',
      projHeading: 'Seçilmiş<br />oyunlar',
      projBtnAll: 'DETAYLARI GÖR',
      descDreamJob:
        '<em>Cute Office Simulator</em> projesinin tamamlanmasının ardından geliştirmeye başladığımız yeni oyun projemiz. Projede <strong>Game Developer</strong> olarak Unity oyun motorunda oynanış sistemleri, mekanik kurgusu ve oyun geliştirme süreçlerini yürütüyorum.',
      descCuteOffice:
        'Stilize ve sevimli bir ofis atmosferinde geçen simülasyon oyunu. Projenin <strong>3D Artist / Animator</strong> sorumlusu olarak tüm ofis mobilyalarını, çevre varlıklarını ve karakter animasyonlarını Blender ile hazırlayıp Unity motoruna entegre ettim ve projeyi tamamladık.',
      descGaslitEye:
        'Atmosferik gerilim ve keşif oyunu. Projenin <strong>Game Developer, Programmer ve Tester</strong> rollerini üstlenerek C# oynanış mekaniklerini, kamera/ışık sistemlerini ve kalite kontrol (QA) süreçlerini geliştirdim. Oyun Itch.io üzerinde yayındadır.',
      modEdu: 'EĞİTİM & PROJELER',
      terraHeading: 'Akademik &<br />proje süreci',
      eduDesc:
        'Bodrum Güzel Sanatlar Fakültesi • <strong>Dijital Oyun Tasarımı</strong> Lisans Programı.',
      exp2026Desc:
        '<em>Cute Office Simulator</em> projesinde <strong>3D Artist / Animator</strong> olarak görev aldım; şu anda yeni oyunumuz <em>DreamJob</em>’da <strong>Game Developer</strong> olarak çalışıyorum.',
      exp2025Desc:
        '<strong>Game Developer, Programmer ve Tester</strong> olarak C# mekaniklerini, ışıklandırma kurgusunu ve test süreçlerini tamamlayarak oyunu yayınladık.',
      ctaKicker: 'İLETİŞİME GEÇİN',
      ctaHeading: 'Aklında bir oyun<br />projesi mi var?',
      ctaText:
        'Oyun geliştirme, 3B modelleme veya ortak projeler için benimle doğrudan e-posta ya da telefon üzerinden iletişime geçebilirsin.'
    },
    en: {
      navHome: 'HOME',
      navAbout: 'ABOUT',
      navSkills: 'SKILLS',
      navProjects: 'PROJECTS',
      navEdu: 'EDUCATION',
      navContact: 'CONTACT',
      navCta: "LET'S WORK TOGETHER",
      heroKicker: 'GAME DEVELOPER & 3D ARTIST',
      heroDesc:
        'I create engaging game mechanics, atmospheric worlds, and stylized 3D characters that leave a lasting impression using Unity and Blender.',
      heroBtn: 'VIEW MY WORK',
      aboutKicker: 'ABOUT ME',
      aboutHeading: 'Design with purpose.<br />Games with <em>soul.</em>',
      cvBioText:
        'I am a second-year Digital Game Design student at Muğla Sıtkı Koçman University. I specialize in game programming and 3D asset creation with strong proficiency in Unity and Blender. Having completed <em>Gaslit Eye</em> and <em>Cute Office Simulator</em>, I am currently working as a <strong>Game Developer</strong> on our new game project, <strong>DreamJob</strong>.',
      locBadgeText: 'BASED IN<br />MANİSA, TR',
      modSkills: 'SKILLS & SOFTWARE',
      servicesHeading: 'What I can<br />do for you',
      srvUnityDesc:
        'Gameplay mechanics, character controllers, state machines, lighting/camera systems, and QA testing in Unity.',
      srvBlenderDesc:
        'Stylized 3D character modeling, office/environment props, rigging, character animation, and Unity engine integration.',
      srvLangOnlyTitle: 'Languages',
      srvLangOnlyDesc:
        '<strong>Turkish:</strong> Native (5/5)<br /><strong>English:</strong> Advanced (4/5)',
      srvHobbiesTitle: 'Hobbies & Interests',
      srvHobbiesDesc:
        'Multi-Genre Gaming, Chess, 3D Printing, and Fitness.',
      projKicker: 'FEATURED PROJECTS',
      projHeading: 'Selected<br />work',
      projBtnAll: 'VIEW ALL PROJECTS',
      descDreamJob:
        'Following the completion of <em>Cute Office Simulator</em>, we are actively developing our new game project <strong>DreamJob</strong>. I work as a <strong>Game Developer</strong> building core gameplay systems and mechanics in Unity.',
      descCuteOffice:
        'Completed stylized office simulation game (Feb – May 2026). As <strong>3D Artist / Animator</strong>, I modeled and animated the 3D office furniture, props, and character animations in Blender and integrated them into Unity.',
      descGaslitEye:
        'Atmospheric thriller & exploration game (Sep – Dec 2025). Served as <strong>Game Developer, Programmer, and Tester</strong> on gameplay programming, lighting, and QA testing. Published on Itch.io.',
      modEdu: 'EDUCATION & TIMELINE',
      terraHeading: 'Academic &<br />project journey',
      eduDesc:
        'Faculty of Fine Arts • <strong>Digital Game Design</strong> B.A. Program.',
      exp2026Desc:
        'Worked as <strong>3D Artist / Animator</strong> on <em>Cute Office Simulator</em>; currently working as <strong>Game Developer</strong> on our new project <em>DreamJob</em>.',
      exp2025Desc:
        'Served as <strong>Game Developer, Programmer, and Tester</strong>, developing C# mechanics, lighting, and QA testing for the Itch.io release.',
      ctaKicker: "LET'S WORK TOGETHER",
      ctaHeading: 'Have a project<br />in mind?',
      ctaText:
        'Feel free to reach out via email or phone to discuss game development, 3D modeling, or collaborative projects.'
    }
  };

  function toggleLanguage() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    const dict = I18N[currentLang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
  }

  function bindEvents() {
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) langBtn.addEventListener('click', toggleLanguage);
  }

  function initVideoPlayer() {
    const localVideo = document.getElementById('local-gaslit-video');
    const ytFallback = document.getElementById('yt-preview-fallback');
    const stage = document.getElementById('gaslit-video-stage');
    if (!localVideo || !ytFallback || !stage) return;

    localVideo.addEventListener('loadedmetadata', () => {
      localVideo.classList.remove('hidden');
      ytFallback.classList.add('hidden');
    });

    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      ytFallback.addEventListener('click', (e) => {
        e.preventDefault();
        stage.innerHTML = `
          <iframe
            src="https://www.youtube.com/embed/aO_0NiVISGM?start=3&autoplay=1&rel=0"
            title="Gaslit Eye Oynanış Videosu"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        `;
      });
    }
  }

  function initLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    if (!modal || !modalImg || !closeBtn) return;

    document.querySelectorAll('.pm-image-card img').forEach((img) => {
      img.addEventListener('click', () => {
        modalImg.src = img.src;
        modalImg.alt = img.alt || '';
        modalImg.style.imageRendering = img.classList.contains('pixel-art-img') ? 'pixelated' : 'auto';
        if (img.classList.contains('pixel-art-img')) {
          modalImg.style.width = '420px';
          modalImg.style.height = '420px';
        } else {
          modalImg.style.width = '';
          modalImg.style.height = '';
        }
        modal.classList.remove('hidden');
      });
    });

    const closeModal = () => {
      modal.classList.add('hidden');
      modalImg.src = '';
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  function initScrollNavigation() {
    const navLinks = Array.from(document.querySelectorAll('.nk-nav a'));
    const sections = navLinks
      .map((link) => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);
    const backToTopBtn = document.getElementById('back-to-top');

    const onScroll = () => {
      const scrollY = window.scrollY;
      if (backToTopBtn) {
        backToTopBtn.classList.toggle('visible', scrollY > 360);
      }

      let currentSectionId = '#hero';
      const triggerLine = scrollY + 220;
      sections.forEach((sec) => {
        if (sec.offsetTop <= triggerLine) {
          currentSectionId = '#' + sec.id;
        }
      });

      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === currentSectionId);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
    initVideoPlayer();
    initLightbox();
    initScrollNavigation();
  });
})();
