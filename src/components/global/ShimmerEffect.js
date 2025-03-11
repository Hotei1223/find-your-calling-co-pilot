const ShimmerEffect = () => {
    return (
      <div className="w-full space-y-2 animate-pulse">
        <div className="h-6 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      </div>
    );
  };
  
  export default ShimmerEffect;
  