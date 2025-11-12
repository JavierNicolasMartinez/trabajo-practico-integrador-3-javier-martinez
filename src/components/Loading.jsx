export const Loading = () => {
  return (
    <div
      className="bg-[#ffe082] border-4 border-gray-800 p-10 rounded-xl w-72 mx-auto mt-10 
                 shadow-[6px_6px_0_#333] 
                 transform hover:scale-[1.03] transition-transform duration-300 
                 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-repeat opacity-20 animate-pulse"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent)",
          backgroundSize: "10px 10px",
        }}
      ></div>

      <h1 className="text-3xl font-black text-gray-800 mb-2 animate-bounce relative z-10">
        ¡CARGANDO!
      </h1>

      <p className="text-gray-700 text-lg relative z-10">
        Espere un momento, se esta cargando...
      </p>

      <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden relative z-10">
        <div className="h-full bg-[#ffc909] w-3/4 animate-[progress_1.5s_infinite_ease-in-out]"></div>
      </div>
      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};
