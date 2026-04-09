"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    projectType: 'Photography',
    budgetRange: '₹15,000 - ₹35,000',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          projectType: 'Photography',
          budgetRange: '₹15,000 - ₹35,000',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
      <section className="max-w-3xl py-12 md:py-20">
        <h1 className="mb-6 text-5xl font-black leading-tight text-[#320904] md:text-7xl">Let’s Elevate Your Brand Together</h1>
        <p className="text-lg leading-relaxed text-[#775751]">Whether it&apos;s a cinematic brand story or high-end photography, we capture what sets you apart.</p>
      </section>

      <section className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <form onSubmit={handleSubmit} className="soft-shadow rounded-2xl border ghost-border bg-white p-8 lg:col-span-7 md:p-12">
          <div className="grid gap-7 md:grid-cols-2">
            <label className="text-sm text-[#775751]">
              Full Name
              <input 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-2 w-full border-b border-[#d8c2be]/50 bg-[#e5e2df]/30 px-1 py-3 outline-none focus:border-[#320904]" 
                placeholder="Your name" 
              />
            </label>
            <label className="text-sm text-[#775751]">
              Phone Number
              <input 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="mt-2 w-full border-b border-[#d8c2be]/50 bg-[#e5e2df]/30 px-1 py-3 outline-none focus:border-[#320904]" 
                placeholder="+91 00000 00000" 
              />
            </label>
            <label className="text-sm text-[#775751]">
              Email Address
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full border-b border-[#d8c2be]/50 bg-[#e5e2df]/30 px-1 py-3 outline-none focus:border-[#320904]" 
                placeholder="hello@company.com" 
              />
            </label>
            <label className="text-sm text-[#775751]">
              Project Type
              <select 
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="mt-2 w-full border-b border-[#d8c2be]/50 bg-[#e5e2df]/30 px-1 py-3 outline-none focus:border-[#320904]"
              >
                <option>Photography</option>
                <option>Video Production</option>
                <option>Models / Casting</option>
                <option>Destination Wedding</option>
              </select>
            </label>
          </div>

          <label className="mt-7 block text-sm text-[#775751]">
            Budget Range
            <select 
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="mt-2 w-full border-b border-[#d8c2be]/50 bg-[#e5e2df]/30 px-1 py-3 outline-none focus:border-[#320904]"
            >
              <option>₹15,000 - ₹35,000</option>
              <option>₹35,000 - ₹75,000</option>
              <option>₹75,000 - ₹1,50,000</option>
              <option>₹1,50,000+</option>
            </select>
          </label>

          <label className="mt-7 block text-sm text-[#775751]">
            Message
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4} 
              className="mt-2 w-full resize-none border-b border-[#d8c2be]/50 bg-[#e5e2df]/30 px-1 py-3 outline-none focus:border-[#320904]" 
              placeholder="Tell us about your vision..." 
            />
          </label>

          <div className="mt-10 flex items-center gap-6">
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="rounded-full bg-[#4d1d15] px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#c88174] transition-all hover:bg-[#320904] disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Request a Quote'}
            </button>
            
            {status === 'success' && <p className="text-sm font-bold text-green-600">Message sent successfully!</p>}
            {status === 'error' && <p className="text-sm font-bold text-red-600">Error sending message. Please try again.</p>}
          </div>
        </form>

        <aside className="space-y-6 lg:col-span-5">
          <div className="group relative overflow-hidden rounded-2xl">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7LC5XAUOsCqoShXZLOuE2n6Mp2qJWmRnHVg34mzh9LGun8UzGhC33kVUyll3Shdl1vkq6Tre0rdcbZYi77qUjIS079XEzO0osx6Xs7vjcGNFrU0RIN6xZd8jE0-wWUYcjkYNGuavUoFVXCYo-iT6vuykxskznzAapMGM_lHslhyBXFxgMH1bACfu1iGFemh6DdM0G-ccX4bxg_zLdeMBF9QyZCLriA2O33zJ1rhZ6dJfuymPNVMihSpQs_UJ-qri81xlTsocE0Mg" alt="Studio" className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#320904]/85 to-transparent p-7 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#ffb4a7]">Curated Gallery</p>
                <h3 className="text-3xl font-bold">The Digital Curator</h3>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a href="https://wa.me/919843412140?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20photography%20and%20video%20production%20services." target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#f6f3f0] p-5 hover:bg-[#e8f5e9] transition-colors">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#775751]">WhatsApp</p>
              <p className="text-lg font-bold text-[#320904]">Chat Now</p>
            </a>
            <a href="https://www.instagram.com/praneethvisuals/" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#f6f3f0] p-5 hover:bg-[#ffebee] transition-colors">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#775751]">Instagram</p>
              <p className="text-lg font-bold text-[#320904]">@praneethvisuals</p>
            </a>
          </div>

          <div className="rounded-r-2xl border-l-4 border-[#320904] bg-white p-7">
            <h4 className="mb-2 text-2xl font-bold text-[#320904]">Studio Presence</h4>
            <p className="leading-7 text-[#775751]">Available for international projects and destination shoots with a premium production pipeline.</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
