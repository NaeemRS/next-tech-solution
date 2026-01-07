export default function Loader() {
  return (
    <div className="fixed inset-0 !z-[999999] flex items-center justify-center backdrop-blur-[2px] bg-white/10">
      <div className="animate-spin rounded-full h-24 w-24 border-b-[10px] border-[#1a5a75]"></div>
    </div>
  );
}