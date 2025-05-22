import { Star, Heart, Smile } from 'lucide-react';

export function ShopDecorations() {
  return (
    <>
      {/* Floating decorations */}
      <div className="hidden lg:block absolute top-20 left-10 animate-float">
        <Star className="w-8 h-8 text-yellow-400 fill-yellow-200" />
      </div>
      <div className="hidden lg:block absolute top-1/3 right-16 animate-float-delay">
        <Heart className="w-8 h-8 text-red-400 fill-red-200" />
      </div>
      <div className="hidden lg:block absolute bottom-40 left-1/4 animate-float">
        <Smile className="w-8 h-8 text-blue-400 fill-blue-200" />
      </div>
    </>
  );
}