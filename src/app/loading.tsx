export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fcf9f6] text-[#320904]">
      <div className="relative mb-8">
        {/* Modern Shutter Animation */}
        <div className="h-20 w-20 animate-[spin_3s_linear_infinite] rounded-full border-[3px] border-[#320904]/10 border-t-[#320904] shadow-xl" />
        <div className="absolute inset-x-0 inset-y-0 m-auto h-12 w-12 rounded-full bg-[#320904] mix-blend-multiply opacity-20 blur-sm animate-pulse" />
        
        {/* Core Shutter */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-10 w-10 animate-pulse rounded-full border-[1.5px] border-[#320904] opacity-40 shadow-inner" />
        </div>
      </div>
      
      {/* Cinematic Loading Text */}
      <div className="flex flex-col items-center gap-3">
        <p className="font-headline font-black text-xs uppercase tracking-[0.4em] opacity-80 animate-pulse">
            Loading your story
        </p>
        <div className="h-0.5 w-16 overflow-hidden bg-[#320904]/10 rounded-full">
            <div className="h-full w-full bg-[#320904] animate-[loading-progress_1.5s_infinite_ease-in-out]" />
        </div>
      </div>
      
      <style>{`
        @keyframes loading-progress {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
