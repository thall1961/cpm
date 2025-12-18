export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">Coastal Pain Management</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-muted hover:text-primary transition-colors">About Us</a>
            <a href="#testimonials" className="text-muted hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-muted hover:text-primary transition-colors">Contact</a>
          </div>
          <a 
            href="https://patients.coastalpainmanagement.com/assessments/c6aa627a-319d-48df-b55a-f47665fa4904" 
            className="hidden md:inline-flex px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            Start Your Journey
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-light/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Wave Pattern SVG */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path 
              fill="rgba(26, 95, 106, 0.05)" 
              d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-accent-light/50 text-primary-dark rounded-full text-sm font-medium mb-6">
              Compassionate Care • Advanced Treatments
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-tight animate-fade-in-up-delay-1">
            Reclaim Your Life<br />
            <span className="gradient-text">From Chronic Pain</span>
          </h1>
          
          <p className="mt-8 text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            Expert pain management specialists dedicated to helping you find relief and restore your quality of life through personalized, evidence-based care.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
            <a 
              href="https://patients.coastalpainmanagement.com/assessments/c6aa627a-319d-48df-b55a-f47665fa4904" 
              className="px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Start Your Journey
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 border-2 border-primary/30 text-primary rounded-full text-lg font-medium hover:bg-primary/5 transition-all"
            >
              Explore Our Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 text-muted">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">4.9/5 Patient Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">Board Certified Physicians</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Same-Week Appointments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Our Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3">
              Comprehensive Pain Solutions
            </h2>
            <p className="mt-6 text-xl text-muted max-w-2xl mx-auto">
              We offer a full spectrum of treatments tailored to your unique needs, combining cutting-edge technology with holistic approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                title: "Interventional Procedures",
                description: "Minimally invasive treatments including nerve blocks, epidural injections, and spinal cord stimulation."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Regenerative Medicine",
                description: "Advanced PRP therapy and stem cell treatments to promote natural healing and tissue regeneration."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Physical Rehabilitation",
                description: "Customized therapy programs combining manual techniques, exercises, and pain education."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: "Medication Management",
                description: "Carefully monitored pharmaceutical approaches to complement your treatment plan."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Behavioral Health",
                description: "Mind-body approaches including cognitive behavioral therapy and stress management techniques."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Neuromodulation",
                description: "State-of-the-art spinal cord and peripheral nerve stimulation for lasting relief."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group p-8 bg-background rounded-2xl border border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-primary-light group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Choose Us Section */}
      <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-light/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium">Why Choose Us</span>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 leading-tight">
                A Different Approach to<br />
                <span className="gradient-text">Pain Care</span>
              </h2>
              <p className="mt-6 text-xl text-muted leading-relaxed">
                At Coastal Pain Management, we believe in treating the whole person, not just the symptoms. Our multidisciplinary team works together to create personalized treatment plans that address your unique needs.
              </p>
              
              <div className="mt-10 space-y-6">
                {[
                  { title: "Patient-Centered Care", desc: "Your goals and preferences guide every treatment decision we make together." },
                  { title: "Evidence-Based Treatments", desc: "We combine proven medical approaches with the latest research and innovations." },
                  { title: "Holistic Wellness", desc: "We address physical, emotional, and lifestyle factors that influence your pain." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-primary-light p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  <div className="text-center p-10">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent-light/30 flex items-center justify-center animate-float">
                      <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-3xl font-semibold text-foreground mt-8">20+ Years</h3>
                    <p className="text-muted mt-2">of Combined Experience</p>
                    <div className="mt-8 grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-serif font-semibold text-primary">5,000+</div>
                        <div className="text-sm text-muted mt-1">Patients Helped</div>
                      </div>
                      <div>
                        <div className="text-3xl font-serif font-semibold text-primary">95%</div>
                        <div className="text-sm text-muted mt-1">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-light/50 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Patient Stories</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3">
              Hear From Our Patients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "After years of struggling with chronic back pain, I finally found relief. The team at Coastal took the time to truly understand my condition and created a plan that worked for me.",
                name: "Sarah M.",
                condition: "Chronic Back Pain"
              },
              {
                quote: "The level of care and attention I received was exceptional. They didn't just treat my pain—they helped me understand it and gave me tools to manage it long-term.",
                name: "Michael R.",
                condition: "Fibromyalgia"
              },
              {
                quote: "I was hesitant about interventional treatments, but Dr. and the staff made me feel completely at ease. The results have been life-changing.",
                name: "Patricia L.",
                condition: "Neuropathy"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 bg-background rounded-2xl border border-primary/10 relative"
              >
                <div className="absolute -top-4 left-8 text-6xl text-accent/30 font-serif">"</div>
                <p className="relative z-10 text-foreground/80 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="mt-8 pt-6 border-t border-primary/10">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted mt-1">{testimonial.condition}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="waves" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="15" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            Ready to Start Your<br />Journey to Relief?
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Take the first step toward a life with less pain. Our compassionate team is here to help you every step of the way.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+15551234567" 
              className="px-8 py-4 bg-white text-primary rounded-full text-lg font-medium hover:bg-accent-light transition-all hover:shadow-lg"
            >
              Call (555) 123-4567
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full text-lg font-medium hover:bg-white/10 transition-all"
            >
              Request Appointment Online
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary font-medium">Get In Touch</span>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3">
                Contact Us
              </h2>
              <p className="mt-6 text-xl text-muted">
                Have questions or ready to schedule an appointment? We're here to help.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted mt-1">123 Oceanview Drive, Suite 200<br />Seaside, CA 93955</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted mt-1">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Hours</h4>
                    <p className="text-muted mt-1">Monday – Friday: 8:00 AM – 5:00 PM<br />Saturday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 md:p-10 rounded-2xl border border-primary/10">
              <h3 className="font-serif text-2xl font-semibold text-foreground">Request an Appointment</h3>
              <form className="mt-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Reason for Visit</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your pain concerns..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white/60 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="font-serif text-xl font-semibold text-white">Coastal Pain Management</span>
              </div>
              <p className="mt-4 max-w-md">
                Dedicated to helping you reclaim your life from chronic pain through compassionate, personalized care.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>(555) 123-4567</li>
                <li>info@coastalpain.com</li>
                <li>123 Oceanview Drive<br />Seaside, CA 93955</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
            <p>© 2024 Coastal Pain Management. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
