import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const WHATSAPP_JOIN_LINK =
    "https://chat.whatsapp.com/GiVSoEuxVeTLqyAVKj7DwJ?s=sw&p=a&ilr=1";

const ThankYou = () => {
    useEffect(() => {
        const win = window as any;
        (function(f: any,b: any,e: any,v: any,n?: any,t?: any,s?: any)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        if(s && s.parentNode) s.parentNode.insertBefore(t,s);
        else document.head.appendChild(t);})(win, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        win.fbq('init', '907405475136035');
        win.fbq('track', 'PageView');
        win.fbq('track', 'Lead'); 
    }, []);

    return (
        <div className="min-h-screen overflow-x-hidden">
            {/* Hero Section - title area */}
            <section className="relative bg-gradient-to-br from-background via-warm-beige to-gold/20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNjNGEyNTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

                <div className="container relative mx-auto px-4 pt-10 md:pt-8 pb-16 md:pb-16">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <img
                                src={logo}
                                alt="Bamboo Melody Weavers"
                                className="hidden md:block md:h-16 md:w-16 drop-shadow-lg flex-shrink-0"
                            />
                            <h1 className="text-foreground leading-tight">
                                <span className="block text-xl md:text-2xl font-bold">
                                    Thank you for registering for the World Music Day free master class..!
                                </span>
                            </h1>
                        </div>

                        <noscript>
                            <img height="1" width="1" style={{ display: 'none' }}
                                src="https://www.facebook.com/tr?id=907405475136035&ev=PageView&noscript=1"
                                alt=""
                            />
                        </noscript>
                    </div>
                </div>
            </section>

            {/* Brown grid strip - starts behind video, extends to footer */}
            <section
                className="relative pb-10 md:pb-8 pt-32"
                style={{
                    backgroundColor: '#5C3A1E',
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            >
                {/* Video overlapping into this section from above */}
                <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto relative" style={{ marginTop: '-10rem' }}>
                        <div className="rounded-xl overflow-hidden aspect-video" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.3)' }}>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/GAElTSbrjFM?si=XaAvybcZfDWNlSIz"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    {/* WhatsApp Join Button */}
                    <div className="mt-8 md:mt-6 flex justify-center">
                        <Button
                            size="default"
                            className="text-white text-sm px-6 py-5 rounded-full shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: "#075E54",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor = "#064E46")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor = "#075E54")
                            }
                            onClick={() =>
                                window.open(WHATSAPP_JOIN_LINK, "_blank")
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-2"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Join My Whatsapp Group →
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="bg-foreground/5">
                <div className="container mx-auto px-4 text-center py-6 md:py-4">
                    <img
                        src={logo}
                        alt="Bamboo Melody Weavers"
                        className="h-12 w-12 md:h-10 md:w-10 mx-auto mb-3 md:mb-2"
                    />
                    <p className="text-sm font-bold text-foreground mb-1 md:mb-0.5">
                        Bamboo Melody Weavers
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Weaving Beautiful Melodies with Bamboo
                    </p>
                </div>
                <div className="border-t border-border">
                    <div className="container mx-auto px-4 text-center py-4 md:py-2">
                        <p className="text-[10px] text-muted-foreground">
                            © {new Date().getFullYear()} Bamboo Melody Weavers. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
