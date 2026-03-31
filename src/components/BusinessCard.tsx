import { Phone, Mail, Globe, MapPin, Download, Share2, QrCode, Copy, MessageCircle } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useRef, useState } from "react";
import profilePhoto from "@/assets/profile-photo.png";
import { downloadVCard } from "@/lib/vcard";
import { toast } from "@/hooks/use-toast";

const CARD_URL = typeof window !== "undefined" ? window.location.href : "";
const PHONE = "+917043531097";
const EMAIL = "vijay.vk01@gmail.com";
const PRIMARY_WEBSITE = "https://anvedra360.com";
const SECONDARY_WEBSITE = "https://www.sanchaywealth.com";

export default function BusinessCard() {
  const qrRef = useRef<HTMLDivElement>(null);
  const [showShare, setShowShare] = useState(false);

  const handleDownloadQR = () => {
    const svg = qrRef.current?.querySelector("svg");
    if (!svg) return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const data = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width * 2;
      canvas.height = img.height * 2;
      ctx?.scale(2, 2);
      ctx?.drawImage(img, 0, 0);
      const a = document.createElement("a");
      a.download = "Vijay_Kumar_Mishra_QR.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(data)));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied!", description: "Share it with anyone." });
  };

  const handleShareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent("Check out Vijay Kumar Mishra's digital card: " + window.location.href)}`, "_blank");
  };

  const handleShareEmail = () => {
    window.open(`mailto:?subject=${encodeURIComponent("Vijay Kumar Mishra - Digital Business Card")}&body=${encodeURIComponent("Here is my digital business card: " + window.location.href)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex items-start justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-md animate-fade-in">
        {/* Header */}
        <div className="gradient-navy rounded-t-2xl px-6 pt-8 pb-12 text-center relative">
          {/* Profile Photo */}
          <div className="relative inline-block">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-gold overflow-hidden shadow-profile mx-auto">
              <img src={profilePhoto} alt="Vijay Kumar Mishra" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mt-4">
            Vijay Kumar Mishra
          </h1>
          <p className="text-primary-foreground/80 text-sm mt-1 font-body">Engineer</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="inline-block w-8 h-px bg-gold/50" />
            <span className="text-primary-foreground/70 text-xs font-body tracking-wider uppercase">
              Automation · System Improvement · AI · MFD
            </span>
            <span className="inline-block w-8 h-px bg-gold/50" />
          </div>
          <p className="text-primary-foreground/60 text-xs mt-2 font-body">
            Director – Anvedra 360 Business Solutions Pvt. Ltd.
          </p>
          <p className="text-primary-foreground/60 text-xs mt-0.5 font-body">
            Director – SanchayWealth Investments Pvt. Ltd.
          </p>
        </div>

        {/* Card Body */}
        <div className="bg-card rounded-b-2xl shadow-elevated -mt-4 pt-8 pb-6 px-5">
          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={downloadVCard}
              className="flex items-center justify-center gap-2 gradient-gold text-accent-foreground font-body font-semibold text-sm py-3 rounded-xl shadow-card hover:opacity-90 transition"
            >
              <Download size={16} />
              Save Contact
            </button>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm py-3 rounded-xl shadow-card hover:opacity-90 transition"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-body font-semibold text-sm py-3 rounded-xl border border-border hover:bg-muted transition"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href={PRIMARY_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-body font-semibold text-sm py-3 rounded-xl border border-border hover:bg-muted transition"
            >
              <Globe size={16} />
              Website
            </a>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 mb-6">
            <a href={`tel:${PHONE}`} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition group">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={16} className="text-navy" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body">Mobile</p>
                <p className="text-sm font-medium font-body text-foreground">+91 70435 31097</p>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition group">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={16} className="text-navy" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body">Email</p>
                <p className="text-sm font-medium font-body text-foreground break-all">vijay.vk01@gmail.com</p>
              </div>
            </a>
            <a href={PRIMARY_WEBSITE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition group">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Globe size={16} className="text-navy" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body">Website</p>
                <p className="text-sm font-medium font-body text-foreground">www.anvedra360.com</p>
              </div>
            </a>
            <a href={SECONDARY_WEBSITE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition group">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Globe size={16} className="text-navy" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body">Website</p>
                <p className="text-sm font-medium font-body text-foreground">www.sanchaywealth.com</p>
              </div>
            </a>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={16} className="text-navy" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body">Address</p>
                <p className="text-sm font-medium font-body text-foreground leading-relaxed">
                  303, Lotus Enora<br />
                  New Alkapuri, Gotri<br />
                  Vadodara, Gujarat – 390021
                </p>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="text-center mb-6 p-5 bg-muted/30 rounded-2xl border border-border">
            <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-3">Scan to Save My Contact</p>
            <div ref={qrRef} className="inline-block bg-card p-3 rounded-xl shadow-card">
              <QRCodeSVG
                value={window.location.href}
                size={140}
                bgColor="#ffffff"
                fgColor="hsl(220,60%,22%)"
                level="M"
              />
            </div>
            <button
              onClick={handleDownloadQR}
              className="mt-3 flex items-center gap-1.5 mx-auto text-xs font-body font-medium text-navy hover:text-gold transition"
            >
              <Download size={14} />
              Download QR Code
            </button>
          </div>

          {/* Share Section */}
          <div className="text-center">
            <button
              onClick={() => setShowShare(!showShare)}
              className="inline-flex items-center gap-2 text-sm font-body font-semibold text-navy hover:text-gold transition"
            >
              <Share2 size={16} />
              Share This Card
            </button>
            {showShare && (
              <div className="flex justify-center gap-3 mt-3 animate-fade-in">
                <button onClick={handleShareWhatsApp} className="w-10 h-10 rounded-full bg-[hsl(142,70%,40%)] flex items-center justify-center hover:opacity-80 transition" aria-label="Share on WhatsApp">
                  <MessageCircle size={18} className="text-primary-foreground" />
                </button>
                <button onClick={handleShareEmail} className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition" aria-label="Share via Email">
                  <Mail size={18} className="text-primary-foreground" />
                </button>
                <button onClick={handleCopyLink} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition" aria-label="Copy Link">
                  <Copy size={18} className="text-foreground" />
                </button>
                <button onClick={handleDownloadQR} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition" aria-label="Download QR">
                  <QrCode size={18} className="text-foreground" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-[10px] text-muted-foreground mt-4 font-body">
          © {new Date().getFullYear()} Vijay Kumar Mishra. All rights reserved.
        </p>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/917043531097`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] flex items-center justify-center shadow-elevated hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </div>
  );
}
