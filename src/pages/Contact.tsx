import { memo, useState } from "react";
const GAS_BACKEND_URL = import.meta.env.VITE_GAS_BACKEND_URL;

if (!GAS_BACKEND_URL) {
  throw new Error("VITE_GAS_BACKEND_URL is not defined");
}

function Contact() {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.action = "submitContact";
    console.log("Contact Form Submitted:", data);

    try {
      await fetch(GAS_BACKEND_URL, {
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("something went wrong");
    }

    setMessage("Your response has been submitted. Thank you!");
    setLoading(false);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-base-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 uppercase tracking-tight">
            CONTACT <span className="text-primary italic">US</span>
          </h1>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full shadow-lg shadow-primary/20"></div>
          <p className="mt-6 text-xl text-slate-600 font-medium">
            Have a project in mind? Let's engineer something great together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Address and Map Section */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="bg-base-100 rounded-[2.5rem] shadow-2xl border border-base-300 p-8 lg:p-10 relative overflow-hidden group hover:border-primary/20 transition-colors">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </span>
                Our HQ
              </h2>

              <div className="space-y-6 text-slate-600">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="font-medium leading-relaxed text-lg">
                    Khangalli, Opp Garuda Petrol pump,
                    <br />
                    Hindustan naka, Kandivali (West),
                    <br />
                    Mumbai - 400 067, Maharashtra.
                  </p>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-lg">9167511013</p>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-lg">skycad90@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-base-100 rounded-[2.5rem] shadow-2xl border border-base-300 relative overflow-hidden h-[350px] group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.96951639367245!2d72.829119!3d19.205851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c7903caffb%3A0x1eb31728b8b92e83!2sskycad!5e0!3m2!1sen!2sin!4v1772526807703!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-base-100 rounded-[2.5rem] shadow-2xl border border-base-300 p-8 lg:p-12 relative overflow-hidden animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control w-full">
                  <label className="label" htmlFor="fullName">
                    <span className="label-text font-bold tracking-widest uppercase text-xs text-slate-500">
                      Full Name
                    </span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="name"
                    placeholder="John Doe"
                    className="input input-lg input-bordered w-full rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-base-50"
                    required
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label" htmlFor="contactNumber">
                    <span className="label-text font-bold tracking-widest uppercase text-xs text-slate-500">
                      Contact Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="+1 (555) 000-0000"
                    className="input input-lg input-bordered w-full rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-base-50"
                    required
                  />
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label" htmlFor="email">
                  <span className="label-text font-bold tracking-widest uppercase text-xs text-slate-500">
                    Email (Optional)
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="input input-lg input-bordered w-full rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-base-50"
                />
              </div>

              <div className="form-control w-full">
                <label className="label" htmlFor="message">
                  <span className="label-text font-bold tracking-widest uppercase text-xs text-slate-500">
                    Message
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project requirements..."
                  className="textarea textarea-bordered h-40 w-full rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base bg-base-50 resize-none p-4"
                  required
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full rounded-2xl shadow-[0_0_30px_rgba(var(--color-primary),0.3)] hover:shadow-primary/50 transition-all border-none group"
                  disabled={loading}
                >
                  <span className="font-black tracking-widest uppercase">
                    Send Message
                  </span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
            {message && (
              <div className="alert alert-success mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{message}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Contact);
