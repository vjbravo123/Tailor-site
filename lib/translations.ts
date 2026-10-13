export type Language = "en" | "hi";

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  from: string;
  icon: "sparkles" | "shirt" | "ruler" | "scissors";
  category: "saree" | "suit" | "alteration";
}

export interface ProductItem {
  id: string;
  name: string;
  price: string;
  tag: string;
  tone: string;
  img: string;
}

export interface StepItem {
  n: string;
  t: string;
  d: string;
}

export interface ReviewItem {
  name: string;
  flat: string;
  text: string;
}

export const translations = {
  en: {
    site: {
      name: "Uma Joshi Silai Studio",
      shortName: "Uma Joshi Studio",
      tagline: "Stitched with care, right in Tower 8, Sare Homes",
      owner: "Uma Joshi",
      society: "Tower 8, Sare Homes",
      societyShort: "Tower 8",
      phone: "+91 85889 47924",
      whatsapp: "918588947924",
      hours: "Mon–Sat, 10 am – 7 pm",
      area: "Free doorstep pickup & drop in Tower 8, Sare Homes",
      badge: "Tower 8, Sare Homes",
    },
    nav: {
      services: "Services",
      shop: "Shop",
      process: "How it Works",
      reviews: "Reviews",
      contact: "Contact",
      chatWa: "WhatsApp",
      call: "Call",
    },
    langModal: {
      title: "Choose Language / भाषा चुनें",
      subtitle: "Select your preferred language for the entire website",
      englishTitle: "English",
      englishDesc: "View website in English",
      hindiTitle: "हिन्दी (Hindi)",
      hindiDesc: "वेबसाइट को पूरी तरह हिन्दी में देखें",
      active: "Active",
      close: "Close",
    },
    hero: {
      badge: "Uma Joshi · Tower 8, Sare Homes",
      status: "Available for orders in Tower 8",
      titlePart1: "Clothes that ",
      titleHighlight: "fit you",
      titlePart2: ", stitched by someone you know.",
      desc: "Sarees, suits, kurtas and everyday cotton — stitched, fitted and altered with care by Uma Joshi right here in Tower 8, Sare Homes. Free doorstep pickup & drop.",
      bookWa: "Book on WhatsApp",
      seeServices: "See Services",
      hours: "Mon–Sat, 10 am – 7 pm",
      trustPickup: "Free Doorstep Pickup",
      trustPickupSub: "Tower 8, Sare Homes",
      trustRating: "5.0 ★ Rating",
      trustRatingSub: "Loved by 100+ Homes",
      trustFit: "Perfect Fit Guarantee",
      trustFitSub: "Trial & Alterations",
      waHeroMsg: "Namaste Uma ji! I found you via the society group. I'd like to book a stitching / fitting.",
    },
    services: {
      eyebrow: "What we do",
      title: "Everything from a simple hem to a full designer suit",
      subtitle: "Tailored to your exact size with doorstep pickup and trial fitting in Tower 8",
      fromLabel: "from",
      enquire: "Enquire",
      categories: {
        all: "All Services",
        saree: "Sarees & Blouses",
        suit: "Suits & Kurtas",
        alteration: "Alterations & Daily",
      },
      waPrefix: "Hi Uma ji! I want to enquire about:",
      items: [
        {
          id: "saree",
          title: "Saree Services",
          desc: "Fall-pico, blouse stitching, petticoats & saree finishing.",
          from: "₹60",
          icon: "sparkles",
          category: "saree",
        },
        {
          id: "suit",
          title: "Suit Stitching",
          desc: "Salwar, churidar, palazzo & full ladies suits, made to measure.",
          from: "₹450",
          icon: "shirt",
          category: "suit",
        },
        {
          id: "cotton-suit",
          title: "Cotton Suit",
          desc: "Breathable daily-wear cotton suits, neatly finished.",
          from: "₹400",
          icon: "shirt",
          category: "suit",
        },
        {
          id: "kurta",
          title: "Kurta & Kurti",
          desc: "Straight, A-line & anarkali kurtas in any sleeve or neck style.",
          from: "₹350",
          icon: "shirt",
          category: "suit",
        },
        {
          id: "salwar",
          title: "Pajama & Salwar",
          desc: "Comfortable fits with proper elastic, cord or zip finish.",
          from: "₹150",
          icon: "ruler",
          category: "alteration",
        },
        {
          id: "cotton-clothes",
          title: "Cotton Everyday Wear",
          desc: "Nighties, house dresses & soft cotton everyday wear.",
          from: "₹250",
          icon: "shirt",
          category: "alteration",
        },
        {
          id: "dhoti",
          title: "Yellow Dhoti & Pooja Wear",
          desc: "Pooja-ready dhotis, hemmed and pressed for festivals.",
          from: "₹120",
          icon: "sparkles",
          category: "saree",
        },
        {
          id: "towels",
          title: "Towels & Hand Towels",
          desc: "Hemming, borders and custom sizes for home use.",
          from: "₹40",
          icon: "scissors",
          category: "alteration",
        },
        {
          id: "alterations",
          title: "Alterations & Fitting",
          desc: "Take-in, let-out, length changes — a perfect fit again.",
          from: "₹50",
          icon: "ruler",
          category: "alteration",
        },
      ] as ServiceItem[],
    },
    shop: {
      eyebrow: "Ready to wear",
      title: "Suits, sarees & women's wear for sale",
      subtitle: "Boutique pieces in pure cotton, Chanderi silk & festive prints ready to pick up.",
      swipeHint: "Swipe for more → New stock is shared in the society group first.",
      enquire: "Enquire",
      waPrefix: "Hi Uma ji! I'm interested in ready-to-wear:",
      items: [
        {
          id: "suit-1",
          name: "Mulmul Cotton Suit Set",
          price: "₹1,299",
          tag: "New",
          tone: "from-[#e8a317] to-[#b9650f]",
          img: "suit-1.jpg",
        },
        {
          id: "saree-1",
          name: "Chanderi Silk Saree",
          price: "₹2,450",
          tag: "Festive",
          tone: "from-[#7a1f3d] to-[#3d0f20]",
          img: "saree-1.jpg",
        },
        {
          id: "kurta-1",
          name: "Block-Print Kurta",
          price: "₹799",
          tag: "Bestseller",
          tone: "from-[#24305e] to-[#111a3a]",
          img: "kurta-1.jpg",
        },
        {
          id: "saree-2",
          name: "Handloom Cotton Saree",
          price: "₹1,650",
          tag: "",
          tone: "from-[#6f8a6a] to-[#3b5237]",
          img: "saree-2.jpg",
        },
        {
          id: "suit-2",
          name: "Printed Anarkali Suit",
          price: "₹1,899",
          tag: "Festive",
          tone: "from-[#c4455f] to-[#7a1f3d]",
          img: "suit-2.jpg",
        },
        {
          id: "suit-3",
          name: "Daily-wear Cotton Set",
          price: "₹899",
          tag: "",
          tone: "from-[#d98b5f] to-[#8a4a2a]",
          img: "suit-3.jpg",
        },
      ] as ProductItem[],
    },
    process: {
      eyebrow: "How it works",
      title: "Three easy steps, no market trips",
      subtitle: "Convenient stitching done right within Tower 8, Sare Homes",
      steps: [
        {
          n: "01",
          t: "Message us on WhatsApp",
          d: "Send what you need stitched — reference photos and voice notes help.",
        },
        {
          n: "02",
          t: "Measure & choose style",
          d: "We visit or you drop by in Tower 8. Pick your fabric, neckline, and ready date.",
        },
        {
          n: "03",
          t: "Stitch, trial & deliver",
          d: "Carefully stitched with a trial fitting, then delivered straight to your flat.",
        },
      ] as StepItem[],
    },
    reviews: {
      eyebrow: "Neighbours say",
      title: "Trusted by families in our society",
      subtitle: "Real experiences from residents living in Tower 8 & Sare Homes",
      verified: "Tower 8 Resident",
      items: [
        {
          name: "Meena Gupta",
          flat: "Tower 8, Flat 402",
          text: "Blouse fitted perfectly the very first time. Delivered right to my door in Tower 8, no running around!",
        },
        {
          name: "Ritu Verma",
          flat: "Tower 8, Flat 1004",
          text: "Got my festive suits and cotton sets stitched by Uma ji. Super neat finishing, timely delivery, and very fair rates.",
        },
        {
          name: "Pooja Sharma",
          flat: "Tower 8, Flat 701",
          text: "Alterations and fall-pico done in two days. So convenient to have such a trusted, skilled tailor in Sare Homes!",
        },
      ] as ReviewItem[],
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Namaste! Let's stitch something beautiful.",
      desc: "Send a message or call directly for quick measurements, fabric consultation, or urgent alterations.",
      phoneLabel: "Phone / WhatsApp",
      locationLabel: "Location",
      hoursLabel: "Timings",
      waBtn: "WhatsApp Us",
      callBtn: "Call Now",
      doorstepNotice: "✨ Free doorstep pickup & drop available inside Tower 8, Sare Homes",
      waContactMsg: "Namaste Uma ji! I'd like to discuss stitching clothes with you.",
    },
    footer: {
      copy: "Uma Joshi Silai Studio · Made with care for our society residents.",
      backToTop: "Back to top",
    },
    bottomBar: {
      call: "Call",
      whatsapp: "Chat on WhatsApp",
      langLabel: "हिन्दी",
      waBottomMsg: "Namaste! I found you via the society group. I'd like to know more.",
    },
  },
  hi: {
    site: {
      name: "उमा जोशी सिलाई स्टूडियो",
      shortName: "उमा जोशी सिलाई",
      tagline: "सारे होम्स, टावर 8 में आपके अपने घर जैसी सिलाई",
      owner: "उमा जोशी",
      society: "टावर 8, सारे होम्स",
      societyShort: "टावर 8",
      phone: "+91 85889 47924",
      whatsapp: "918588947924",
      hours: "सोम–शनि, सुबह 10 से शाम 7 बजे",
      area: "टावर 8, सारे होम्स में फ्री डोरस्टेप पिकअप और डिलीवरी",
      badge: "टावर 8, सारे होम्स",
    },
    nav: {
      services: "सिलाई सेवाएं",
      shop: "तैयार कपड़े",
      process: "कैसे काम करता है",
      reviews: "पड़ोसियों की राय",
      contact: "संपर्क",
      chatWa: "व्हाट्सएप",
      call: "कॉल करें",
    },
    langModal: {
      title: "भाषा चुनें / Choose Language",
      subtitle: "पूरी वेबसाइट के लिए अपनी पसंदीदा भाषा चुनें",
      englishTitle: "English (अंग्रेजी)",
      englishDesc: "वेबसाइट को अंग्रेजी में देखें",
      hindiTitle: "हिन्दी (Hindi)",
      hindiDesc: "वेबसाइट को पूरी तरह हिन्दी में देखें",
      active: "सक्रिय",
      close: "बंद करें",
    },
    hero: {
      badge: "उमा जोशी · टावर 8, सारे होम्स",
      status: "टावर 8 में नए ऑर्डर्स के लिए उपलब्ध",
      titlePart1: "मनपसंद कपड़े और ",
      titleHighlight: "परफेक्ट फिटिंग",
      titlePart2: ", अपनी ही सोसाइटी में।",
      desc: "साड़ी फॉल-पीको, डिज़ाइनर ब्लाउज, सूट, कुर्ते व कॉटन ड्रेसेस — उमा जोशी द्वारा टावर 8, सारे होम्स में प्यार और फिनिशिंग के साथ सिली गई। सोसाइटी में फ्री पिकअप और डिलीवरी की सुविधा।",
      bookWa: "व्हाट्सएप पर बुक करें",
      seeServices: "सिलाई सेवाएं देखें",
      hours: "सोमवार–शनिवार, सुबह 10 से शाम 7 बजे",
      trustPickup: "फ्री डोरस्टेप पिकअप",
      trustPickupSub: "टावर 8, सारे होम्स",
      trustRating: "5.0 ★ रेटिंग",
      trustRatingSub: "100+ परिवारों का भरोसा",
      trustFit: "परफेक्ट फिटिंग गारंटी",
      trustFitSub: "ट्रायल व संतुष्टि",
      waHeroMsg: "नमस्ते उमा जी! मुझे सोसाइटी ग्रुप से आपका नंबर मिला। मुझे सिलाई / फिटिंग के लिए बात करनी है।",
    },
    services: {
      eyebrow: "हमारी सेवाएं",
      title: "साधारण तुरपाई से लेकर डिज़ाइनर सूट व ब्लाउज तक सब कुछ",
      subtitle: "आपकी सही नाप, बेहतरीन फिनिशिंग और टावर 8 में सीधे आपके दरवाजे पर डिलीवरी",
      fromLabel: "शुरुआत",
      enquire: "पूछताछ करें",
      categories: {
        all: "सभी सेवाएं",
        saree: "साड़ी व ब्लाउज",
        suit: "सूट व कुर्ते",
        alteration: "ऑल्टरेशन व डेली वियर",
      },
      waPrefix: "नमस्ते उमा जी! मुझे इस सेवा के बारे में पूछना है:",
      items: [
        {
          id: "saree",
          title: "साड़ी व ब्लाउज सेवाएं",
          desc: "फॉल-पीको, डिज़ाइनर ब्लाउज सिलाई, पेटीकोट व साड़ी फिनिशिंग।",
          from: "₹60",
          icon: "sparkles",
          category: "saree",
        },
        {
          id: "suit",
          title: "सूट सिलाई",
          desc: "सलवार सूट, चूड़ीदार, प्लाज़ो और फैंसी लेडीज सूट, आपकी नाप अनुसार।",
          from: "₹450",
          icon: "shirt",
          category: "suit",
        },
        {
          id: "cotton-suit",
          title: "कॉटन सूट सिलाई",
          desc: "गर्मियों व रोज़मर्रा के लिए हल्के और आरामदायक कॉटन सूट, मजबूत सिलाई।",
          from: "₹400",
          icon: "shirt",
          category: "suit",
        },
        {
          id: "kurta",
          title: "कुर्ता व कुर्ती",
          desc: "स्ट्रेट, ए-लाइन और अनारकली कुर्ते, मनपसंद गले और आस्तीन डिज़ाइन।",
          from: "₹350",
          icon: "shirt",
          category: "suit",
        },
        {
          id: "salwar",
          title: "पजामा व सलवार",
          desc: "आरामदायक फिटिंग, मजबूत सिलाई, इलास्टिक या नाड़ा फिनिशिंग।",
          from: "₹150",
          icon: "ruler",
          category: "alteration",
        },
        {
          id: "cotton-clothes",
          title: "कॉटन डेली-वियर ड्रेसेस",
          desc: "नाइटी, हाउस ड्रेसेस और घर में पहनने वाले आरामदायक कॉटन कपड़े।",
          from: "₹250",
          icon: "shirt",
          category: "alteration",
        },
        {
          id: "dhoti",
          title: "पीली धोती व पूजा वस्त्र",
          desc: "पूजा-पाठ और त्योहारों के लिए तैयार धोती, हेमिंग और प्रेस के साथ।",
          from: "₹120",
          icon: "sparkles",
          category: "saree",
        },
        {
          id: "towels",
          title: "तौलिए व हैंड टॉवल",
          desc: "किनारे सिलना (हेमिंग), लेस-बॉर्डर लगाना और साइज ठीक करना।",
          from: "₹40",
          icon: "scissors",
          category: "alteration",
        },
        {
          id: "alterations",
          title: "ऑल्टरेशन व फिटिंग",
          desc: "ढीला/टाइट करना, लंबाई सही करना — पुराने व नए कपड़ों की सही फिटिंग।",
          from: "₹50",
          icon: "ruler",
          category: "alteration",
        },
      ] as ServiceItem[],
    },
    shop: {
      eyebrow: "तैयार कपड़े",
      title: "बिक्री के लिए तैयार सुंदर सूट, साड़ियां व कलेक्शन",
      subtitle: "प्रीमियम कॉटन, चंदेरी सिल्क और आकर्षक पार्टी-वियर कलेक्शन सीधे उपलब्ध।",
      swipeHint: "और देखने के लिए स्वाइप करें → नया स्टॉक पहले सोसाइटी ग्रुप में साझा होता है।",
      enquire: "पूछताछ करें",
      waPrefix: "नमस्ते उमा जी! मुझे इस तैयार कलेक्शन में रुचि है:",
      items: [
        {
          id: "suit-1",
          name: "मलमल कॉटन सूट सेट",
          price: "₹1,299",
          tag: "नया",
          tone: "from-[#e8a317] to-[#b9650f]",
          img: "suit-1.jpg",
        },
        {
          id: "saree-1",
          name: "चंदेरी सिल्क साड़ी",
          price: "₹2,450",
          tag: "त्योहारी",
          tone: "from-[#7a1f3d] to-[#3d0f20]",
          img: "saree-1.jpg",
        },
        {
          id: "kurta-1",
          name: "ब्लॉक-प्रिंट कुर्ता",
          price: "₹799",
          tag: "बेस्टसेलर",
          tone: "from-[#24305e] to-[#111a3a]",
          img: "kurta-1.jpg",
        },
        {
          id: "saree-2",
          name: "हैंडलूम कॉटन साड़ी",
          price: "₹1,650",
          tag: "",
          tone: "from-[#6f8a6a] to-[#3b5237]",
          img: "saree-2.jpg",
        },
        {
          id: "suit-2",
          name: "प्रिंटेड अनारकली सूट",
          price: "₹1,899",
          tag: "त्योहारी",
          tone: "from-[#c4455f] to-[#7a1f3d]",
          img: "suit-2.jpg",
        },
        {
          id: "suit-3",
          name: "डेली-वियर कॉटन सेट",
          price: "₹899",
          tag: "",
          tone: "from-[#d98b5f] to-[#8a4a2a]",
          img: "suit-3.jpg",
        },
      ] as ProductItem[],
    },
    process: {
      eyebrow: "काम का तरीका",
      title: "3 आसान कदम — बाज़ार के चक्कर काटने से मुक्ति",
      subtitle: "सोसाइटी के बाहर जाए बिना, घर बैठे आसान और भरोसेमंद सिलाई",
      steps: [
        {
          n: "01",
          t: "व्हाट्सएप पर मैसेज भेजें",
          d: "अपनी जरूरत बताएं — डिज़ाइन की फोटो या पुराने सैंपल भी भेज सकते हैं।",
        },
        {
          n: "02",
          t: "नाप दें और डिज़ाइन चुनें",
          d: "टावर 8 में हमारे पास आएं या हम आपके फ्लैट से नाप व कपड़ा पिकअप कर लेंगे। गला, स्लीव और डिलीवरी की तारीख तय करें।",
        },
        {
          n: "03",
          t: "सिलाई, ट्रायल और डिलीवरी",
          d: "सफाई से सिलाई, ज़रूरत पड़ने पर ट्रायल और सीधे आपके दरवाजे तक डिलीवरी।",
        },
      ] as StepItem[],
    },
    reviews: {
      eyebrow: "पड़ोसियों की राय",
      title: "हमारी सोसाइटी के परिवारों का अटूट भरोसा",
      subtitle: "सारे होम्स और टावर 8 के निवासियों के सच्चे अनुभव",
      verified: "सोसाइटी निवासी",
      items: [
        {
          name: "मीना गुप्ता",
          flat: "टावर 8, फ्लैट 402",
          text: "पहली ही बार में ब्लाउज की फिटिंग एकदम परफेक्ट आई। टावर 8 में सीधे मेरे फ्लैट पर डिलीवरी मिल गई, बाज़ार जाने का कोई झंझट नहीं!",
        },
        {
          name: "रितु वर्मा",
          flat: "टावर 8, फ्लैट 1004",
          text: "उमा जी से मैंने त्योहारों के सूट और कॉटन सेट सिलवाए। सिलाई बहुत साफ-सुथरी है, समय पर डिलीवरी मिली और रेट भी बहुत सही हैं।",
        },
        {
          name: "पूजा शर्मा",
          flat: "टावर 8, फ्लैट 701",
          text: "फॉल-पीको और ऑल्टरेशन सिर्फ दो दिन में हो गए। सारे होम्स में इतनी कुशल और भरोसेमंद टेलर होना बहुत बड़ी सुविधा है!",
        },
      ] as ReviewItem[],
    },
    contact: {
      eyebrow: "संपर्क करें",
      title: "नमस्ते! आइए मिलकर कुछ खास और सुंदर सिलते हैं।",
      desc: "नाप देने, नए डिज़ाइन पर बात करने या तुरंत ऑल्टरेशन के लिए सीधे कॉल या व्हाट्सएप करें।",
      phoneLabel: "कॉल या व्हाट्सएप",
      locationLabel: "स्थान",
      hoursLabel: "समय",
      waBtn: "व्हाट्सएप पर चैट करें",
      callBtn: "अभी कॉल करें",
      doorstepNotice: "✨ टावर 8, सारे होम्स में फ्री डोरस्टेप पिकअप और ड्रॉप की सुविधा",
      waContactMsg: "नमस्ते उमा जी! मुझे सिलाई के संबंध में आपसे बात करनी है।",
    },
    footer: {
      copy: "उमा जोशी सिलाई स्टूडियो · सारे होम्स और टावर 8 के निवासियों के लिए समर्पित सिलाई।",
      backToTop: "ऊपर जाएं",
    },
    bottomBar: {
      call: "कॉल करें",
      whatsapp: "व्हाट्सएप चैट",
      langLabel: "English",
      waBottomMsg: "नमस्ते! मुझे सोसाइटी ग्रुप से आपका नंबर मिला। मुझे सिलाई के बारे में जानकारी चाहिए।",
    },
  },
};

export const waLink = (phone: string, msg: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
