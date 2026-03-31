export function generateVCard(): string {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Mishra;Vijay Kumar;;;",
    "FN:Vijay Kumar Mishra",
    "ORG:SanchayWealth Investments Private Limited",
    "TITLE:Engineer",
    "TEL;TYPE=CELL:+917043531097",
    "EMAIL:vijay.vk01@gmail.com",
    "URL:https://www.sanchaywealth.com",
    "ADR;TYPE=WORK:;;303, Lotus Enora, New Alkapuri, Gotri;Vadodara;Gujarat;390021;India",
    "NOTE:Engineer | Automation | System Improvement | AI",
    "END:VCARD",
  ].join("\n");
  return vcard;
}

export function downloadVCard() {
  const vcard = generateVCard();
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Vijay_Kumar_Mishra.vcf";
  a.click();
  URL.revokeObjectURL(url);
}
