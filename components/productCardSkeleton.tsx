export default function ProductCardSkeleton() {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white animate-pulse">
      {/* Image placeholder */}
      <div className="aspect-square bg-gray-200 w-full"></div>

      {/* Content placeholder */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-5 bg-gray-200 rounded w-3/4"></div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Price */}
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <div className="h-9 bg-gray-200 rounded flex-1"></div>
          <div className="h-9 bg-gray-200 rounded flex-1"></div>
        </div>
      </div>
    </div>
  );
}
