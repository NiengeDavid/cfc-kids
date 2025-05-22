export default function Footer() {
  return (
    <footer className="bg-yellow-400 py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-800 font-medium">
          © {new Date().getFullYear()} CFC Kids Church. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
