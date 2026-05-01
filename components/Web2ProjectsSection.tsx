"use client";
import { motion } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "VTube",
    description:
      "A Node.js project inspired by YouTube. Built with Node.js, Mongoose, MongoDB, JWT, REST API, Multer, and Cloudinary for media upload. The frontend is built in Next.js.",
    tags: ["Node.js", "MongoDB", "Next.js", "Express"],
    image: "/vtube.png",
    color: "#1a0f0c",
    href: "https://vtube-pearl.vercel.app/",
  },
];

// Thumb width as a fraction of the track (matches ~1 card / total visible)
const THUMB_RATIO = 0.28;

const Web2ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartProgress = useRef(0);

  /* ── sync scroll → progress ── */
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) return;
    setProgress(el.scrollLeft / max);
  }, []);

  /* ── scroll to a progress ratio ── */
  const scrollTo = useCallback((ratio: number, smooth = false) => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: ratio * max, behavior: smooth ? "smooth" : "auto" });
  }, []);

  /* ── click on track (outside thumb) to jump ── */
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const trackW = rect.width;
    const thumbW = trackW * THUMB_RATIO;
    const usable = trackW - thumbW;
    const clickX = e.clientX - rect.left - thumbW / 2;
    const ratio = Math.min(1, Math.max(0, clickX / usable));
    scrollTo(ratio, true); // smooth jump on click
  };

  /* ── drag thumb ── */
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartProgress.current = progress;
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current || !trackRef.current) return;
      const trackW = trackRef.current.getBoundingClientRect().width;
      const thumbW = trackW * THUMB_RATIO;
      const usable = trackW - thumbW;
      const delta = (e.clientX - dragStartX.current) / usable;
      const ratio = Math.min(1, Math.max(0, dragStartProgress.current + delta));
      setProgress(ratio);
      scrollTo(ratio);
    };
    const onUp = () => { isDragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [scrollTo]);

  /* ── touch drag support ── */
  const handleThumbTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartProgress.current = progress;
  };

  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || !trackRef.current) return;
      const trackW = trackRef.current.getBoundingClientRect().width;
      const thumbW = trackW * THUMB_RATIO;
      const usable = trackW - thumbW;
      const delta = (e.touches[0].clientX - dragStartX.current) / usable;
      const ratio = Math.min(1, Math.max(0, dragStartProgress.current + delta));
      setProgress(ratio);
      scrollTo(ratio);
    };
    const onTouchEnd = () => { isDragging.current = false; };
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [scrollTo]);

  /* ── thumb left offset ── */
  const thumbLeftPct = progress * (1 - THUMB_RATIO) * 100;

  return (
    <section id="web2-work" className="pb-32 relative">
      {/* Header */}
      <div className="px-6 lg:px-12 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-baseline justify-between"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-900 uppercase tracking-tighter">
            Web2 Projects
          </h2>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            ({String(projects.length).padStart(2, "0")})
          </span>
        </motion.div>
      </div>

      {/* Scrollable card track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-5 overflow-x-auto px-6 lg:px-12 pb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        } as React.CSSProperties}
      >
        {/* suppress webkit scrollbar */}
        <style>{`#web2-work-scroll::-webkit-scrollbar{display:none}`}</style>

        {projects.map((project, i) => (
          <motion.a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group flex-none border border-border hover:border-primary/30 transition-all duration-500 no-underline"
            style={{ width: 380 }}
          >
            {/* Image area */}
            <div
              className="relative w-full overflow-hidden"
              style={{ height: 260, background: project.color }}
            >
              {project.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  draggable={false}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] font-bold text-primary bg-background/70 px-2 py-1 backdrop-blur-sm tracking-widest">
                {project.num}
              </span>
              <ExternalLink className="absolute top-4 right-4 w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Body */}
            <div className="p-7">
              <h3 className="text-xl font-display font-800 uppercase tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}

        {/* trailing spacer */}
        <div className="flex-none w-6 lg:w-12" aria-hidden />
      </div>

      {/* Progress scrubber — short, centered pill */}
      <div className="mt-10 flex justify-center">
        <div className="w-60 sm:w-64">
          {/* Track */}
          <div
            ref={trackRef}
            onClick={handleTrackClick}
            className="relative h-[10px] rounded-full cursor-pointer select-none"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            {/* Sliding thumb */}
            <div
              onMouseDown={handleThumbMouseDown}
              onTouchStart={handleThumbTouchStart}
              className="absolute rounded-full cursor-grab active:cursor-grabbing"
              style={{
                width: `${THUMB_RATIO * 100}%`,
                left: `${thumbLeftPct}%`,
                top: 0,
                bottom: 0,
                background: "rgba(255,255,255,0.82)",
                transition: isDragging.current ? "none" : "left 0.25s cubic-bezier(0.25,0.46,0.45,0.94)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web2ProjectsSection;
