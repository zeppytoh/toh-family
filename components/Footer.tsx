const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">大阪経済大学</h3>
            <p>つながる力。</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p>お問合せ</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">SNS</h3>
            {/* Add social media icons or links */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
