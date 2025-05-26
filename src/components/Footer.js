export default function Footer() {
  return (
    <footer className="bg-blue-50 border-t border-blue-100 text-center py-6 mt-12 text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Ergon Chem. All rights reserved.
    </footer>
  );
}