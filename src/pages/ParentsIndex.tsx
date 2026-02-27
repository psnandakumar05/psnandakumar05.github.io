import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { CountdownTimer } from "@/components/CountdownTimer";
import { TestimonialCard } from "@/components/TestimonialCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Music,
  Wind,
  Heart,
  Briefcase,
  Users,
  Sparkles,
  GraduationCap,
  Award,
  PlayCircle,
  BookOpen,
  Smartphone,
  Calendar,
  CheckCircle2,
  Star,
  Trophy,
  Brain,
  Palette,
  Shield,
  Stethoscope,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react";

import logo from "@/assets/logo.png";
import heroPhoto from "@/assets/hero-photo.jpg";
import mentorCollage from "@/assets/collage.png";
import aboutCourseBg from "@/assets/about-course-bg.jpg";
import decorativeSvg from "@/assets/4.svg";

// ==========================================
// CONFIGURATION - Easy to update
// ==========================================
const MASTER_CLASS_DATE = "Feb 22, 2026";
const MASTER_CLASS_TIME = "8:30 PM";
const CHECKOUT_URL = "https://flute.bamboomelodyweavers.com/web/checkout/68ccd467e47d97739d32fbf2";
const COURSE_URL = "https://flute.bamboomelodyweavers.com/services/bamboobees";

const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@Shruthiranjani",
  instagram: "https://www.instagram.com/bamboomelodyweavers/",
  facebook: "https://www.facebook.com/bamboomelodyweavers/",
};

const TESTIMONIALS = [
  {
    quote: "Our daughter Dhatri is learning flute from Nandakumar sir from past 3 years. It's been a great experience for us. His punctuality, dedication and patience in teaching is extraordinary! I always feel Dhatri is very blessed to have a \"Guru\" like Nandakumar sir. He not only teaches flute but he gives so many life lessons to his students which helps them a lot in building their personality.",
    name: "Archana Narendra",
    location: "Mother of Dhatri, Bangalore",
    stars: 4,
  },
  {
    quote: "Shravani has been learning the flute from PS Nandakumar for the past one year. His teaching style is patient, disciplined and encouraging, which has helped her develop both skill and confidence. She looks forward to every class and enjoys practicing at home.",
    name: "Vasudha",
    location: "Mother of Shravani, Bangalore",
    stars: 5,
  },
  {
    quote: "Satvika has been learning the flute under the guidance of Nandakumar for the past one and a half years. Under his insightful mentorship, Satvika is growing her skill and developing a deeper appreciation for the art of Carnatic flute. His patience and encouragement has inspired Satvika to strive for excellence.",
    name: "Vidhya Lakshmi Shankarlal",
    location: "Mother of Satvika, Bangalore",
    stars: 5,
  },
  {
    quote: "Shriya has been Nandakumar Sir's disciple for the last 4.5 years. Sir's unwavering punctuality and dedication to teaching music has constantly increased Shriya's enthusiasm in continuing to learn Carnatic music. Sir nurtures true understanding by explaining the importance of concepts, 'the how and the why', and emphasizes regular practice.",
    name: "Srividya Balaji",
    location: "Mother of Shriya, USA",
    stars: 5,
  },
  {
    quote: "Saaketh has been learning flute online from Sri P S Nanda Kumar since 2020. It has been a great learning experience where emphasis is on knowing why, even before playing it right. Nanda Kumar sir breaks down complex topics into simpler and easy-to-understand sections, enabling students to render seamlessly.",
    name: "Srividya Srinivas",
    location: "Mother of Saaketh, Hyderabad",
    stars: 5,
  },
  {
    quote: "Both our sons are learning flute every week online from Melbourne, Australia. Nandakumar patiently guides both in developing precise breath control, finger techniques and musical expression. With decades of experience, he generously shares his vast knowledge, inspiring a deep appreciation for the art of flute playing.",
    name: "Veena and Karthik",
    location: "Parents of Dheeraj and Loksuraj, Melbourne",
    stars: 5,
  },
];

const FAQS = [
  {
    question: "Will Creator teach the class himself?",
    answer: "Yes, all the content is a recorded session by the creator himself. I have curated the course from my 17 years of teaching experience and I am using a different structure to make it easy for every self-learner.",
  },
  {
    question: "Is this course for me?",
    answer: "Yes, if you are an adult and having a strong interest and will to learn, this is definitely for you. If your kids are very young, you can teach your kid the same way I am teaching you in the course and give it a try first all by yourself. There is no age limit to learn this skill. You need to buy a flute which suits you or your kid depending on the size of the fingers.",
  },
  {
    question: "Will I have access to the video recording once the course is over?",
    answer: "Yes, you will have access to the course for a maximum of 1 year from the date of purchase. If you are unable to complete the course within one year, you can renew your access by buying it again. Remember, this course is designed for those who have a strong will to learn and put in at least one hour of practice every day.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes, you will receive a completion certificate once you successfully complete the course and all the assignments.",
  },
  {
    question: "In which language will the course be taught?",
    answer: "This course is initially made available in English. Soon, you will have choices in other languages like Hindi, Tamil and Kannada. But don't wait, start learning right away. You will be notified when course is made available in other languages and you will be able to seamlessly move to the language of your choice free of charge.",
  },
  {
    question: "Will it really change my life?",
    answer: "Imagine yourself playing on the flute every day. Notice how your family automatically calms down when you play on the flute. Notice how your neighbours appreciate you when you start playing the songs. Notice how your friends consider you as a talented one. More than all, notice the change within you when you are playing on the flute, deeply focused, calm at the center. This is nothing short of meditation.",
  },
  {
    question: "I am facing problems in payment processing, what to do?",
    answer: "Please drop a note via our contact channels and we will reach out to you to understand and resolve the issue.",
  },
];

const CTAButton = ({ label = "Join the Master Class" }: { label?: string }) => (
  <Button
    size="lg"
    className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105"
    onClick={() => window.open(CHECKOUT_URL, "_blank")}
  >
    {label}
  </Button>
);

const ParentsIndex = () => {
  return (
    <div className="min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-warm-beige to-gold/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNjNGEyNTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <img src={logo} alt="Bamboo Melody Weavers" className="mb-8 h-32 w-32 md:h-40 md:w-40 drop-shadow-lg" />

            <h1 className="mb-4 text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Give Your Child the Timeless Gift of Music
            </h1>

            <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 bg-primary/10 border-2 border-primary/30 rounded-2xl px-6 py-4">
              <span className="text-lg md:text-xl text-foreground font-medium">Next Carnatic Flute Master Class:</span>
              <span className="text-2xl md:text-3xl font-bold text-primary">{MASTER_CLASS_DATE}</span>
              <span className="text-lg md:text-xl text-foreground">at</span>
              <span className="text-2xl md:text-3xl font-bold text-primary">{MASTER_CLASS_TIME}</span>
            </div>

            <p className="mb-12 text-lg md:text-xl text-foreground/80 max-w-2xl italic leading-relaxed">
              "Parents, have you ever wondered what gift lasts longer than toys or gadgets? A gift that shapes your child's mind and soul…"
            </p>

            <CTAButton />

            <div className="mt-12 max-w-3xl w-full">
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border-4 border-primary/20 aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/O_gc16NIj1Q"
                  title="Student performance video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3 font-medium italic">
                Shriya, one of my students from USA, performing on stage after 3 years of learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 md:py-24 bg-[var(--gradient-orange-white)] overflow-hidden">
        {/* Decorative SVG backdrop */}
        <div className="absolute left-0 inset-y-0 w-48 md:w-64 lg:w-80 opacity-15 pointer-events-none">
          <img src={decorativeSvg} alt="" className="h-full w-auto max-w-none" style={{ minHeight: '100%' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Flute for Your Child?
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-foreground/80">
              Music education through the flute offers lifelong benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FeatureCard
              icon={Shield}
              title="Discipline & Self-Control"
              description="Regular flute practice instills patience, perseverance, and the habit of daily commitment in children."
            />
            <FeatureCard
              icon={Brain}
              title="Focus & Concentration"
              description="Playing the flute improves attention span, memory retention, and academic performance in children."
            />
            <FeatureCard
              icon={Palette}
              title="Creativity & Expression"
              description="Music unlocks creative thinking and gives children a powerful way to express emotions and ideas."
            />
            <FeatureCard
              icon={Heart}
              title="Cultural Connection"
              description="Connect your child to India's rich Carnatic music heritage and the divine tradition of Lord Krishna's flute."
            />
            <FeatureCard
              icon={Stethoscope}
              title="Health Benefits"
              description="Flute playing improves breath control, lung capacity, and provides natural stress relief for growing minds."
            />
            <FeatureCard
              icon={Trophy}
              title="Confidence Building"
              description="Performing in front of others and mastering a skill builds self-esteem and stage confidence in children."
            />
          </div>

          <div className="mt-12 flex justify-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* About the Course Section - Dark Two-Column Layout */}
      <section className="relative min-h-[800px] md:min-h-[700px] bg-black">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Image at top */}
          <div className="relative h-[400px]">
            <img
              src={aboutCourseBg}
              alt="About the course background"
              className="w-full h-full object-cover object-[center_45%]"
            />
            {/* Dark overlay across entire image */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Gradient fade to black at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
          </div>
          {/* Content below */}
          <div className="px-4 py-8 bg-black">
            <h2 className="text-3xl font-bold text-white mb-6">
              About the Online Flute Course
              <span className="block text-2xl text-gold mt-2">Bamboo Bees</span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <PlayCircle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Structured, self-paced video lessons</p>
                  <p className="text-sm text-white/70">9+ hours of comprehensive video content across 5 modules</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Music className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">20 popular songs</p>
                  <p className="text-sm text-white/70">Patriotic songs, rhymes, bhajans, film music, and Carnatic pieces</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Play-along exercises</p>
                  <p className="text-sm text-white/70">Build confidence and fluency with interactive practice sessions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Downloadable resources</p>
                  <p className="text-sm text-white/70">Notations and reference materials for offline study</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Smartphone className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Multi-platform access</p>
                  <p className="text-sm text-white/70">Online web app, Android and iOS apps for seamless learning</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Weekly Live Online Classes</p>
                  <p className="text-sm text-white/70">Hackathon sessions for student feedback and corrections</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <p className="text-sm text-white">
                <strong>Proven Results:</strong> 200+ students from ages 7 to 78 have benefitted from these teaching methods
              </p>
            </div>

            <div className="mt-4 p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gold/30 text-center">
              <p className="text-sm text-white font-semibold mb-3">⭐ Trusted on Trustpilot</p>
              <div
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="694e7e0873b68c1c75a390fb"
                data-style-height="52px"
                data-style-width="100%"
                data-token="8640999c-e706-45b9-8ac8-01bda142f350"
              >
                <a href="https://www.trustpilot.com/review/bamboomelodyweavers.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">View our Trustpilot reviews</a>
              </div>
            </div>

            <div className="mt-6 p-5 bg-gold/20 backdrop-blur-sm rounded-lg border-2 border-gold/40">
              <p className="text-sm text-white font-semibold mb-2">
                📧 Important: Don't miss our updates!
              </p>
              <p className="text-sm text-white/90">
                Please add <strong className="text-gold">learn@bamboomelodyweavers.com</strong> to your safe sender list and move our emails from junk to inbox.
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-foreground"
                onClick={() => window.open(COURSE_URL, '_blank')}
              >
                Explore the Full Course
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden md:flex min-h-[700px]">
          {/* Left Column - Image (50%) */}
          <div className="relative w-1/2">
            <img
              src={aboutCourseBg}
              alt="About the course background"
              className="absolute inset-0 w-full h-full object-cover object-[center_center]"
            />
            {/* Gradient overlay fading to black on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />
          </div>

          {/* Right Column - Content (50%) with solid black background */}
          <div className="w-1/2 bg-black flex items-center">
            <div className="px-8 lg:px-12 py-12 max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                About the Online Flute Course
                <span className="block text-2xl lg:text-3xl text-gold mt-2">Bamboo Bees</span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <PlayCircle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Structured, self-paced video lessons</p>
                    <p className="text-sm text-white/70">9+ hours of comprehensive video content across 5 modules</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Music className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">20 popular songs</p>
                    <p className="text-sm text-white/70">Patriotic songs, rhymes, bhajans, film music, and Carnatic pieces</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Play-along exercises</p>
                    <p className="text-sm text-white/70">Build confidence and fluency with interactive practice sessions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Downloadable resources</p>
                    <p className="text-sm text-white/70">Notations and reference materials for offline study</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Smartphone className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Multi-platform access</p>
                    <p className="text-sm text-white/70">Online web app, Android and iOS apps for seamless learning</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Weekly Live Online Classes</p>
                    <p className="text-sm text-white/70">Hackathon sessions for student feedback and corrections</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <p className="text-sm text-white">
                  <strong>Proven Results:</strong> 200+ students from ages 7 to 78 have benefitted from these teaching methods
                </p>
              </div>

              <div className="mt-4 p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gold/30 text-center">
                <p className="text-sm text-white font-semibold mb-3">⭐ Trusted on Trustpilot</p>
                <div
                  className="trustpilot-widget"
                  data-locale="en-US"
                  data-template-id="56278e9abfbbba0bdcd568bc"
                  data-businessunit-id="694e7e0873b68c1c75a390fb"
                  data-style-height="52px"
                  data-style-width="100%"
                  data-token="8640999c-e706-45b9-8ac8-01bda142f350"
                >
                  <a href="https://www.trustpilot.com/review/bamboomelodyweavers.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">View our Trustpilot reviews</a>
                </div>
              </div>

              <div className="mt-6 p-5 bg-gold/20 backdrop-blur-sm rounded-lg border-2 border-gold/40">
                <p className="text-sm text-white font-semibold mb-2">
                  📧 Important: Don't miss our updates!
                </p>
                <p className="text-sm text-white/90">
                  Please add <strong className="text-gold">learn@bamboomelodyweavers.com</strong> to your safe sender list and move our emails from junk to inbox.
                </p>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="mt-6 border-gold text-gold hover:bg-gold hover:text-foreground"
                onClick={() => window.open(COURSE_URL, '_blank')}
              >
                Explore the Full Course
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Mentor Section - Two-Column with Collage */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-background via-warm-beige/60 to-gold/15">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Meet Your Mentor
              </h2>
              <p className="text-2xl md:text-3xl font-semibold text-primary mb-3">
                Nandakumar Srinivasan
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your guide on this transformative musical journey
              </p>
            </div>

            {/* Two-column layout: Content left, Collage right on desktop */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-6">
              {/* Left Column - Content */}
              <div className="flex-1 order-2 lg:order-1">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 mb-6">
                  <div className="text-center p-4 md:p-6 rounded-xl bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                    <div className="mb-2 md:mb-4 mx-auto w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Music className="h-5 w-5 md:h-8 md:w-8 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-primary mb-1 md:mb-2">30 Years</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Learning Flute</p>
                  </div>

                  <div className="text-center p-4 md:p-6 rounded-xl bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                    <div className="mb-2 md:mb-4 mx-auto w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="h-5 w-5 md:h-8 md:w-8 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-primary mb-1 md:mb-2">25 Years</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Concert Performances</p>
                  </div>

                  <div className="text-center p-4 md:p-6 rounded-xl bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                    <div className="mb-2 md:mb-4 mx-auto w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 md:h-8 md:w-8 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-primary mb-1 md:mb-2">17 Years</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Teaching Experience</p>
                  </div>

                  <div className="text-center p-4 md:p-6 rounded-xl bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                    <div className="mb-2 md:mb-4 mx-auto w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 md:h-8 md:w-8 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-primary mb-1 md:mb-2">250+</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Students Worldwide</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-4 p-5 bg-card/80 backdrop-blur rounded-xl shadow-[var(--shadow-soft)] border border-primary/10">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Masters in Music</h4>
                      <p className="text-sm text-muted-foreground">Deep academic foundation in Carnatic music</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-card/80 backdrop-blur rounded-xl shadow-[var(--shadow-soft)] border border-primary/10">
                    <Briefcase className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">MBA & AVP</h4>
                      <p className="text-sm text-muted-foreground">Business Excellence and Transformation Leader</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-card/80 backdrop-blur rounded-xl shadow-[var(--shadow-soft)] border border-primary/10">
                    <Trophy className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Venu Ganamrutha Mani</h4>
                      <p className="text-sm text-muted-foreground">Prestigious title recognizing excellence</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Collage */}
              <div className="flex-1 order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-medium)]">
                  <img
                    src={mentorCollage}
                    alt="Flute performances collage"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[var(--gradient-soft-orange)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Parents Say
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-foreground/80">
              Hear from parents whose children are learning with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-warm-beige via-gold/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-primary/20">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 flex justify-center">
              <CTAButton />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Connect */}
      <section className="py-16 md:py-20 bg-[var(--gradient-orange-white)]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8">Follow Bamboo Melody Weavers on social media</p>

            <div className="flex items-center justify-center gap-4">
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-110 border border-primary/10">
                <Youtube className="h-7 w-7 text-primary" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-110 border border-primary/10">
                <Instagram className="h-7 w-7 text-primary" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-110 border border-primary/10">
                <Facebook className="h-7 w-7 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-10 md:py-16 bg-[var(--gradient-orange-white)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Begin Your Child's Flute Journey?
            </h2>

            <div className="mb-8 space-y-3 max-w-md mx-auto text-left">
              <div className="flex items-start gap-2 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Taught by a seasoned Carnatic flute teacher</span>
              </div>
              <div className="flex items-start gap-2 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Learner since 30 years, Performer since 25 years, Teacher since 17 years</span>
              </div>
              <div className="flex items-start gap-2 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Trusted by hundreds of learners worldwide</span>
              </div>
              <div className="flex items-start gap-2 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Culturally rooted. Technically rigorous.</span>
              </div>
            </div>

            <CTAButton />
          </div>
        </div>
      </section>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-orange-light/90 via-orange-soft/90 to-orange-light/90 shadow-[var(--shadow-glow)] border-t border-primary/30 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <CountdownTimer />
              <div className="text-left">
                <p className="text-sm text-foreground font-semibold">It's a free masterclass!</p>
                <p className="text-xs text-foreground/70">Why think so much? Register Now!</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 rounded-full shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 whitespace-nowrap"
              onClick={() => window.open(CHECKOUT_URL, "_blank")}
            >
              Join the Master Class
            </Button>
          </div>
        </div>
      </footer>

      {/* Main Footer */}
      <div className="py-8 bg-foreground/5 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <img src={logo} alt="Bamboo Melody Weavers" className="h-16 w-16 mx-auto mb-4" />
          <p className="text-base font-semibold text-foreground mb-1">
            Bamboo Melody Weavers
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Weaving Beautiful Melodies with Bamboo
          </p>
          <p className="text-xs text-muted-foreground pt-2 border-t border-border/50">
            © {new Date().getFullYear()} Bamboo Melody Weavers. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentsIndex;
