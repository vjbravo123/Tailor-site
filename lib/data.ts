// ✏️ EDIT THIS FILE — all content configured here.
export const site = {
  name: "Uma Joshi Silai Studio",
  tagline: "Stitched with care, right in Tower 8, Sare Homes",
  owner: "Uma Joshi",
  society: "Tower 8, Sare Homes",
  phone: "+91 85889 47924",
  whatsapp: "918588947924", // country code + number, no + or spaces
  hours: "Mon–Sat, 10 am – 7 pm",
  area: "Free doorstep pickup & drop in Tower 8, Sare Homes",
};

export const wa = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const services = [
  { title: "Saree Services", desc: "Fall-pico, blouse stitching, petticoats & saree finishing.", from: "₹60", icon: "sparkles" },
  { title: "Suit Stitching", desc: "Salwar, churidar, palazzo & full ladies suits, made to measure.", from: "₹450", icon: "shirt" },
  { title: "Cotton Suit", desc: "Breathable daily-wear cotton suits, neatly finished.", from: "₹400", icon: "shirt" },
  { title: "Kurta", desc: "Straight, A-line & anarkali kurtas in any sleeve or neck style.", from: "₹350", icon: "shirt" },
  { title: "Pajama & Salwar", desc: "Comfortable fits with proper elastic, cord or zip finish.", from: "₹150", icon: "ruler" },
  { title: "Cotton Clothes", desc: "Nighties, house dresses & soft cotton everyday wear.", from: "₹250", icon: "shirt" },
  { title: "Yellow Dhoti", desc: "Pooja-ready dhotis, hemmed and pressed for festivals.", from: "₹120", icon: "sparkles" },
  { title: "Towels & Hand Towels", desc: "Hemming, borders and custom sizes for home use.", from: "₹40", icon: "scissors" },
  { title: "Alterations & Fitting", desc: "Take-in, let-out, length changes — a perfect fit again.", from: "₹50", icon: "ruler" },
];

export const products = [
  { name: "Mulmul Cotton Suit Set", price: "₹1,299", tag: "New", tone: "from-[#e8a317] to-[#b9650f]", img: "suit-1.jpg" },
  { name: "Chanderi Silk Saree", price: "₹2,450", tag: "Festive", tone: "from-[#7a1f3d] to-[#3d0f20]", img: "saree-1.jpg" },
  { name: "Block-Print Kurta", price: "₹799", tag: "Bestseller", tone: "from-[#24305e] to-[#111a3a]", img: "kurta-1.jpg" },
  { name: "Handloom Cotton Saree", price: "₹1,650", tag: "", tone: "from-[#6f8a6a] to-[#3b5237]", img: "saree-2.jpg" },
  { name: "Printed Anarkali Suit", price: "₹1,899", tag: "Festive", tone: "from-[#c4455f] to-[#7a1f3d]", img: "suit-2.jpg" },
  { name: "Daily-wear Cotton Set", price: "₹899", tag: "", tone: "from-[#d98b5f] to-[#8a4a2a]", img: "suit-3.jpg" },
];

export const steps = [
  { n: "01", t: "Message us", d: "Send a WhatsApp with what you need — photos help." },
  { n: "02", t: "Measure & choose", d: "We visit or you drop by in Tower 8. Pick fabric, style, and a date." },
  { n: "03", t: "Stitch & fit", d: "Stitched with a trial fitting, then delivered to your door in Sare Homes." },
];

export const reviews = [
  { name: "Meena Gupta", flat: "Tower 8, Flat 402", text: "Blouse fitted perfectly the very first time. Delivered right to my door in Tower 8, no running around!" },
  { name: "Ritu Verma", flat: "Tower 8, Flat 1004", text: "Got my festive suits and cotton sets stitched by Uma ji. Super neat finishing, timely delivery, and very fair rates." },
  { name: "Pooja Sharma", flat: "Tower 8, Flat 701", text: "Alterations and fall-pico done in two days. So convenient to have such a trusted, skilled tailor in Sare Homes!" },
];
