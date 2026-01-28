import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ArrowUpRight, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form@7.55.0';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form Data:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-6 px-6 md:px-12 max-w-7xl mx-auto mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-primary rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-primary/20 h-full flex flex-col justify-between"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-12 block font-semibold font-sans">Collaboration</span>
            <h2 className="text-5xl md:text-6xl text-white font-medium font-display tracking-tighter mb-8 leading-[0.9]">
              Let's <br/>Connect .
            </h2>
           
          </div>

          <div className="relative z-10 space-y-8">
            <div className="flex flex-wrap gap-8">
              {['LinkedIn', 'GitHub'].map(link => (
                <a key={link} href="#" className="text-white/60 hover:text-white transition-colors text-[10px] font-semibold uppercase tracking-[0.25em] flex items-center gap-1.5 group">
                  {link} <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-4 font-semibold font-sans">Direct Email</p>
              <a href="mailto:poornigopikrishnan@gmail.com" className="text-xl md:text-2xl font-medium font-display hover:text-accent transition-colors break-all">
                poornigopikrishnan@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-white border border-dark/5 rounded-[3rem] p-10 md:p-16 shadow-sm"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-dark/40 text-[10px] uppercase tracking-[0.2em] font-bold ml-2">Your Name</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="John Doe"
                      className={`w-full bg-accent/30 border ${errors.name ? 'border-primary' : 'border-dark/5'} rounded-[1.5rem] px-6 py-4 outline-none focus:border-primary/30 transition-all font-medium`}
                    />
                    {errors.name && <span className="text-primary text-[10px] font-bold ml-2">{errors.name.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-dark/40 text-[10px] uppercase tracking-[0.2em] font-bold ml-2">Email Address</label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                      })}
                      placeholder="john@example.com"
                      className={`w-full bg-accent/30 border ${errors.email ? 'border-primary' : 'border-dark/5'} rounded-[1.5rem] px-6 py-4 outline-none focus:border-primary/30 transition-all font-medium`}
                    />
                    {errors.email && <span className="text-primary text-[10px] font-bold ml-2">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-dark/40 text-[10px] uppercase tracking-[0.2em] font-bold ml-2">Subject</label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    placeholder="New Inquiry"
                    className={`w-full bg-accent/30 border ${errors.subject ? 'border-primary' : 'border-dark/5'} rounded-[1.5rem] px-6 py-4 outline-none focus:border-primary/30 transition-all font-medium`}
                  />
                  {errors.subject && <span className="text-primary text-[10px] font-bold ml-2">{errors.subject.message}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-dark/40 text-[10px] uppercase tracking-[0.2em] font-bold ml-2">Your Message</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    placeholder="Tell me your Reason..."
                    rows={5}
                    className={`w-full bg-accent/30 border ${errors.message ? 'border-primary' : 'border-dark/5'} rounded-[1.5rem] px-6 py-4 outline-none focus:border-primary/30 transition-all font-medium resize-none`}
                  />
                  {errors.message && <span className="text-primary text-[10px] font-bold ml-2">{errors.message.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-dark text-white rounded-[1.5rem] py-5 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-primary transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-medium font-display tracking-tight text-dark mb-4">Message Sent!</h3>
                <p className="text-secondary/60 font-medium max-w-xs mx-auto mb-8">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
