import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { AudienceCard } from "@/components/AudienceCard";
import { CountdownTimer } from "@/components/CountdownTimer";
import { 
  Music, 
  Wind, 
  Heart, 
  Briefcase, 
  Heart as Health, 
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
  Home,
  Flame,
  Trophy,
  Smile
} from "lucide-react";

import logo from "@/assets/logo.png";
import heroPhoto from "@/assets/hero-photo.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import mentorPhoto from "@/assets/mentor-photo.jpg";

const Index = () => {
  const masterclassUrl = "https://flute.bamboomelodyweavers.com/l/a9cf26127d";
  const courseUrl = "https://flute.bamboomelodyweavers.com/services/bamboobees";

  return (
    <div className="min-h-screen pb-32">
      {/* Hero Section - Light */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-warm-beige to-gold/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNjNGEyNTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <img src={logo} alt="Bamboo Melody Weavers" className="mb-8 h-32 w-32 md:h-40 md:w-40 drop-shadow-lg" />
            
            <h1 className="mb-4 text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Breathe Music Into Your Life
            </h1>
            <p className="mb-6 text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Learn the Carnatic Flute from Anywhere
            </p>
            <p className="mb-12 text-lg text-foreground/80 max-w-2xl">
              Join our free 90-minute masterclass and experience the healing, joy, and depth of South Indian flute music
            </p>
            
            {/* Why the Flute? Why Now? */}
            <div className="mb-12 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why the Flute? Why Now?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="p-5 bg-card/80 backdrop-blur rounded-xl shadow-[var(--shadow-soft)] border border-primary/10">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Ancient & Healing</h4>
                  <p className="text-muted-foreground text-sm">A soulful instrument with thousands of years of tradition and therapeutic benefits</p>
                </div>
                <div className="p-5 bg-card/80 backdrop-blur rounded-xl shadow-[var(--shadow-soft)] border border-primary/10">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Beginner Friendly</h4>
                  <p className="text-muted-foreground text-sm">Ideal for beginners and lifelong learners of all ages</p>
                </div>
                <div className="p-5 bg-card/80 backdrop-blur rounded-xl shadow-[var(--shadow-soft)] border border-primary/10">
                  <h4 className="font-semibold text-lg text-foreground mb-2">No Prerequisites</h4>
                  <p className="text-muted-foreground text-sm">No prior music knowledge required to start your journey</p>
                </div>
                <div className="p-5 bg-card/80 backdrop-blur rounded-xl shadow-[var(--shadow-soft)] border border-primary/10">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Learn from Home</h4>
                  <p className="text-muted-foreground text-sm">Study at your own pace from the comfort of your home</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105"
              onClick={() => window.open(masterclassUrl, '_blank')}
            >
              Reserve My Free Spot
            </Button>
            
            <div className="mt-12 max-w-3xl">
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border-4 border-primary/20">
                <img 
                  src={heroPhoto} 
                  alt="Nandakumar Srinivasan playing the Carnatic flute" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3 font-medium">Nandakumar Srinivasan</p>
            </div>
          </div>
        </div>
      </section>
      {/* How Flute Transforms Lives Section - Light Orange to White */}
      <section className="py-16 md:py-24 bg-[var(--gradient-orange-white)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Discover How Flute Transforms Lives
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-foreground/80">
              Find your unique reason to begin this musical journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <AudienceCard
              icon={Wind}
              title="Stress Relief for Busy Professionals"
              description="Like Kapala Bhati in yoga, flute playing helps you exhale more than inhale, releasing tension and bringing calm to your hectic workday."
            />
            <AudienceCard
              icon={Star}
              title="From Fan Follower to Fan Following"
              description="Transform your admiration for artists into your own creative expression. Build your presence and share your unique musical voice."
            />
            <AudienceCard
              icon={Sparkles}
              title="Nurture Your Child's Hidden Talent"
              description="Help your child stand out with a distinctive skill that improves focus, memory, and concentration while building confidence."
            />
            <AudienceCard
              icon={Heart}
              title="Find Your Inner Peace"
              description="The gentle, melodious tones of the flute create a meditative atmosphere that calms the mind and soothes stressed souls."
            />
            <AudienceCard
              icon={Home}
              title="A Fulfilling Creative Outlet"
              description="For homemakers seeking meaningful engagement, flute offers a rewarding hobby that brings joy and personal accomplishment."
            />
            <AudienceCard
              icon={Flame}
              title="Connect with Divine Tradition"
              description="Play the sacred instrument of Lord Krishna and experience the spiritual depth of devotional music in your daily practice."
            />
            <AudienceCard
              icon={Trophy}
              title="Shine in Social Gatherings"
              description="Impress at corporate events and social occasions with your flute performance, earning recognition and admiration from peers."
            />
            <AudienceCard
              icon={Smile}
              title="Rediscover Joy & Wellness"
              description="Whether seeking relief from daily pressures or a path to holistic well-being, the flute offers therapeutic benefits for all ages."
            />
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-foreground text-lg px-8 py-6 rounded-full shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105"
              onClick={() => window.open(masterclassUrl, '_blank')}
            >
              Reserve My Free Spot
            </Button>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section - Light */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-warm-beige via-gold/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You'll Learn in This Free Masterclass
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three essential foundations to begin your flute journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={Wind}
              title="How to Choose the Right Flute"
              description="Learn about pitch, size, age-appropriate selection, and finding the perfect flute for your purpose and skill level."
            />
            <FeatureCard
              icon={Music}
              title="How to Play the Flute"
              description="Master the fundamentals: proper posture, breathing techniques, blowing methods, and basic fingering patterns."
            />
            <FeatureCard
              icon={Heart}
              title="How to Express Emotion"
              description="Discover the art of musical expression through phrasing, gamakas (ornamentations), and bhava (emotional essence)."
            />
          </div>

          <div className="mt-12 flex flex-col items-center gap-8">
            <div className="max-w-md">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={photo2} 
                  alt="Learning the flute" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3 font-medium">Nandakumar Srinivasan</p>
            </div>
            
            <Button
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105"
              onClick={() => window.open(masterclassUrl, '_blank')}
            >
              Reserve My Free Spot
            </Button>
          </div>
        </div>
      </section>

      {/* Who This Is For Section - Light Orange to White */}
      <section className="py-16 md:py-24 bg-[var(--gradient-soft-orange)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Who This Masterclass Is For
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-foreground/80">
              Whether you're seeking wellness, skill-building, or musical excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AudienceCard
              icon={Briefcase}
              title="Corporate Professionals"
              description="Feeling stressed? Discover a meditative, musical escape from the daily grind."
            />
            <AudienceCard
              icon={Health}
              title="Health Seekers"
              description="Improve breath control and reduce hypertension through wind instrument practice."
            />
            <AudienceCard
              icon={Users}
              title="Parents & Children"
              description="A guided, guru-free path to musical learning for young beginners (minimum age 7)."
            />
            <AudienceCard
              icon={Sparkles}
              title="Young Adults (20-40)"
              description="Explore flute as a career opportunity or serious creative hobby."
            />
            <AudienceCard
              icon={GraduationCap}
              title="Carnatic Music Students"
              description="Strengthen fundamentals and prepare for music exams (Diploma, BA, MA levels)."
            />
            <AudienceCard
              icon={Award}
              title="Skill Builders"
              description="Build flute-playing skill as one of your several talents with strong foundation."
            />
          </div>

          <div className="mt-12 flex flex-col items-center gap-8">
            <div className="max-w-md">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={photo3} 
                  alt="Performance setting" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3 font-medium">Nandakumar Srinivasan</p>
            </div>
            
            <Button
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-foreground text-lg px-8 py-6 rounded-full shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105"
              onClick={() => window.open(masterclassUrl, '_blank')}
            >
              Reserve My Free Spot
            </Button>
          </div>
        </div>
      </section>

      {/* About the Course Section - Light */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-warm-beige/50 to-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  About the Online Flute Course
                  <span className="block text-2xl md:text-3xl text-secondary mt-2">Bamboo Bees</span>
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <PlayCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Structured, self-paced video lessons</p>
                      <p className="text-sm text-muted-foreground">9+ hours of comprehensive video content across 5 modules</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Music className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">20 popular songs</p>
                      <p className="text-sm text-muted-foreground">Patriotic songs, rhymes, bhajans, film music, and Carnatic pieces</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Play-along exercises</p>
                      <p className="text-sm text-muted-foreground">Build confidence and fluency with interactive practice sessions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Downloadable resources</p>
                      <p className="text-sm text-muted-foreground">Notations and reference materials for offline study</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Smartphone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Multi-platform access</p>
                      <p className="text-sm text-muted-foreground">Online web app, Android and iOS apps for seamless learning</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Weekly Live Online Classes</p>
                      <p className="text-sm text-muted-foreground">Hackathon sessions for student feedback and corrections</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <p className="text-sm text-foreground">
                    <strong>Proven Results:</strong> 200+ students from ages 7 to 78 have benefitted from these teaching methods
                  </p>
                </div>
                
                <div className="mt-4 p-4 bg-card rounded-lg border border-primary/20 shadow-[var(--shadow-soft)]">
                  <p className="text-sm text-foreground font-semibold mb-3">⭐ Trusted on Trustpilot</p>
                  <div 
                    className="trustpilot-widget" 
                    data-locale="en-US" 
                    data-template-id="56278e9abfbbba0bdcd568bc" 
                    data-businessunit-id="694e7e0873b68c1c75a390fb" 
                    data-style-height="52px" 
                    data-style-width="100%" 
                    data-token="8640999c-e706-45b9-8ac8-01bda142f350"
                  >
                    <a href="https://www.trustpilot.com/review/bamboomelodyweavers.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View our Trustpilot reviews</a>
                  </div>
                </div>
                
                <div className="mt-6 p-5 bg-gold/10 rounded-lg border-2 border-gold/30">
                  <p className="text-sm text-foreground font-semibold mb-2">
                    📧 Important: Don't miss our updates!
                  </p>
                  <p className="text-sm text-foreground">
                    Please add <strong className="text-primary">learn@bamboomelodyweavers.com</strong> to your safe sender list and move our emails from junk to inbox. This ensures you receive all masterclass details and course communications.
                  </p>
                </div>

                <Button 
                  variant="outline"
                  size="lg"
                  className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(courseUrl, '_blank')}
                >
                  Explore the Full Course
                </Button>
              </div>
              
              <div>
                <div className="rounded-xl overflow-hidden shadow-[var(--shadow-medium)]">
                  <img 
                    src={photo4} 
                    alt="Teaching session" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3 font-medium">Nandakumar Srinivasan</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105"
              onClick={() => window.open(masterclassUrl, '_blank')}
            >
              Reserve My Free Spot
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Your Mentor Section - Light */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-warm-beige/60 to-gold/15">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Your Mentor
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your guide on this transformative musical journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 rounded-xl bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">30 Years</h3>
                <p className="text-sm text-muted-foreground">Learning Flute</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">25 Years</h3>
                <p className="text-sm text-muted-foreground">Concert Performances</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">17 Years</h3>
                <p className="text-sm text-muted-foreground">Teaching Experience</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">250+</h3>
                <p className="text-sm text-muted-foreground">Students Worldwide</p>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border-4 border-primary/20 max-w-md mx-auto">
                <img 
                  src={mentorPhoto} 
                  alt="Nandakumar Srinivasan playing the flute" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3 font-medium">Nandakumar Srinivasan</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
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
            
            <div className="text-center">
              <Button
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105"
                onClick={() => window.open(masterclassUrl, '_blank')}
              >
                Learn from This Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Light Orange to White */}
      <section className="py-16 md:py-24 bg-[var(--gradient-orange-white)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Begin Your Flute Journey?
            </h2>
            
            <div className="mb-8 space-y-3">
              <div className="flex items-center justify-center gap-2 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Taught by a seasoned Carnatic flute teacher</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Learner since 30 years, Performer since 25 years, Teacher since 17 years</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Trusted by hundreds of learners worldwide</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Culturally rooted. Technically rigorous.</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105"
              onClick={() => window.open(masterclassUrl, '_blank')}
            >
              Register for the Free Masterclass
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Footer with Countdown */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-orange-light/90 via-orange-soft/90 to-orange-light/90 shadow-[var(--shadow-glow)] border-t border-primary/30 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <CountdownTimer />
              <div className="text-left">
                <p className="text-sm text-foreground font-semibold">
                  Limited Time Offer!
                </p>
                <p className="text-xs text-foreground/70">
                  It's a free masterclass! Why think so much?
                </p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 rounded-full shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 whitespace-nowrap"
              onClick={() => window.open(masterclassUrl, '_blank')}
            >
              Register Now!
            </Button>
          </div>
        </div>
      </footer>
      
      {/* Main Footer */}
      <div className="py-8 bg-foreground/5 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <img src={logo} alt="Bamboo Melody Weavers" className="h-16 w-16 mx-auto mb-4" />
          <p className="text-sm text-muted-foreground mb-2">
            Bamboo Melody Weavers - Weaving Beautiful Melodies with Bamboo
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bamboo Melody Weavers. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
