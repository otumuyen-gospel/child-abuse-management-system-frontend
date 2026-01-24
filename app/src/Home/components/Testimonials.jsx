
import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Child Welfare Director, NSW",
      content: "SafeGuard has transformed how our team manages high-risk cases. The ability to share information instantly with healthcare providers has cut our response time in half.",
      avatar: "https://picsum.photos/id/64/100/100"
    },
    {
      name: "Mark Thompson",
      role: "Senior Investigative Officer",
      content: "The tamper-proof logging system is a game-changer for law enforcement. We can trust the integrity of every report, making prosecution of offenders more efficient.",
      avatar: "https://picsum.photos/id/65/100/100"
    },
    {
      name: "Linda Mbeki",
      role: "NGO Field Coordinator",
      content: "Documentation used to take 40% of our time. Now, we spend more time with children and less time wrestling with paper files and outdated spreadsheets.",
      avatar: "https://picsum.photos/id/66/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-900 mb-16 italic">"Empowering those on the front lines"</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-16 h-16 text-[#2E8B57]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H10.017C9.46472 13 9.017 12.5523 9.017 12V9C9.017 7.34315 10.3601 6 12.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017V12V9C0.017 7.34315 1.36015 6 3.017 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 16.6569 9.67386 18 8.017 18H5.017V21H3.017Z" /></svg>
              </div>
              <p className="text-slate-600 mb-8 italic relative z-10">"{rev.content}"</p>
              <div className="flex items-center">
                <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full mr-4 border-2 border-[#2E8B57]" />
                <div>
                  <h5 className="font-bold text-slate-900 leading-none mb-1">{rev.name}</h5>
                  <span className="text-xs text-[#2E8B57] font-semibold">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
