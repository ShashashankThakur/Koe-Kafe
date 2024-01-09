// src/components/CoffeeWorkshop.js
import React, { useState } from 'react';

const BrewingProcessCard = ({ title, description, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-[#ededec] p-4 rounded-md shadow-md transition-transform transform ${
        isHovered ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt={title} className="w-full h-auto mb-4 rounded-md" />
      <h4 className=" mb-2 sm:text-sm lg:text-2xl font-serif font-semibold">{title}</h4>
      {isHovered && <p className="text-gray-#513726 font-serif">{description}</p>}
    </div>
  );
};

const Workshop = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const [isSubmitted, setSubmitted] = useState(false);

  const brewingProcessCards = [
    {
      title: 'R O A S T',
      description:
        'During roasting, beans go through various stages: drying, first crack (audible when beans expand), and, if desired, a second crack. Roasters use different methods like air roasting or drum roasting, each influencing the final flavor profile.',
      imageSrc: 'Images/roasting.jpg', // replace with the actual image source
    },
    {
      title: 'G R I N D',
      description:
        'Roasted coffee beans are ground to the desired coarseness for brewing. The grind size affects the extraction process and, consequently, the flavor of the coffee.',
      imageSrc: 'Images/grinding.jpg', // Add the image file for grinding
    },
    {
      title: 'B R E W',
      description:
        'The ground coffee is brewed with hot water to extract flavors and create the final beverage. Brewing methods include drip brewing, espresso, French press, pour-over, and more.',
      imageSrc: 'Images/brewing.jpg', // Add the image file for brewing
    },
    {
      title: 'T A S T E',
      description:
        'Coffee professionals and enthusiasts often engage in a formal evaluation process known as cupping. This involves tasting and evaluating the flavors, aromas, acidity, body, and overall quality of the coffee.',
      imageSrc: 'Images/tasting.jpg', // Add the image file for tasting
    },
    {
      title: 'P A L A T E',
      description:
        'After the brewing process, you get to enjoy the final coffee! Whether it\'s a black coffee, espresso, cappuccino, latte, or another variation, savor the rich flavors and aromas created by the careful coffee production process.',
      imageSrc: 'Images/final_coffee.jpg', // Add the image file for the final coffee
    },

  ];

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation errors when the user types
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data before submission
    const requiredFields = ['name', 'email', 'phone', 'date', 'time'];
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
        }));
        hasErrors = true;
      }
    });

    if (hasErrors) {
      return;
    }

    // Form data is valid - you can now handle the submission logic (e.g., API call)
    console.log('Form submitted:', formData);

    // Clear form data after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
    });

    // Display confirmation message
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
    });

    setErrors({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
    });
  };

  return (
    <section className="bg-[#E7DED0] py-16 z-0">
      <div className="container mx-auto p-8 bg-#D0BCA0 rounded-md shadow-md">
        <h2 className="text-3xl md:text-6xl font-semibold mb-8 text-center text-[#82614A]" style={{ fontFamily: 'Monospace' }} >W O R K S H O P</h2>
        <div className="grid grid-cols-1 gap-16">
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-[#82614A]" style={{ fontFamily:'lato, monospace' }}>Espresso Artistry Unleashed</h3><br></br>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-[#4F483F]">
                {brewingProcessCards.map((card, index) => (
                  <BrewingProcessCard key={index} {...card} />
                ))}
              </div>
            {isSubmitted ? (
              <p className="text-#82614A font-serif font-semibold mt-4 sm:text-sm lg:text-3xl">Thank you for reserving your spot! We'll see you at the workshop.</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="date" className="text-#3B1C0A block mb-2 sm:text-sm lg:text-2xl font-mono">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md focus:outline-none ${errors.date && 'border-red-500'}`}
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label htmlFor="time" className="text-#3B1C0A block mb-2 sm:text-sm lg:text-2xl font-family: 'poppins">Preferred Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md focus:outline-none ${errors.time && 'border-red-500'}`}
                    />
                    {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="text-#3B1C0A block mb-2 sm:text-sm lg:text-2xl font-mono">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md focus:outline-none ${errors.name && 'border-red-500'}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="text-#3B1C0A block mb-2 sm:text-sm lg:text-2xl font-mono">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md focus:outline-none ${errors.email && 'border-red-500'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="text-#3B1C0A block mb-2 sm:text-sm lg:text-2xl font-mono">Your Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md focus:outline-none ${errors.phone && 'border-red-500'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="text-[#82614A] block mb-2 sm:text-sm lg:text-4xl font-serif font-bold">Event Description</label><br></br>
                  <p className="text-[#82614A] mb-4 sm:text-sm lg:text-2xl font-serif">
                  Embark on a sensory journey with our exclusive coffee processing event – a symphony of flavors, artfully curated for coffee enthusiasts. Dive into the alchemy of roasting, grinding, brewing, and tasting, each step a brushstroke in the canvas of coffee creation. Join us in discovering the secrets behind the perfect cup, guided by our expert baristas. Immerse yourself in the rich aromas, textures, and stories that unfold in every sip. Elevate your coffee experience; it's not just a workshop – it's a masterpiece in the making. </p>
                </div><br></br>

                <label htmlFor="workshopDetails" className="text-[#82614A] block mb-4 sm:text-lg lg:text-2xl font-serif font-bold">Workshop Details</label><br></br>
<p className="text-[#82614A] mb-6 sm:text-sm lg:text-lg font-serif">
<ul className="list-disc pl-6 text-[#82614A] mb-6 sm:text-sm lg:text-lg font-serif">
  <li>June 15, 2024 (Tentative)</li>
  <li>June 22, 2024</li>
  <li>June 29, 2024</li>
</ul>

  <strong>Time:</strong> Morning (9:00 AM - 12:00 PM) & Afternoon (2:00 PM - 5:00 PM)<br />
  <strong>Location:</strong>205, International Finance Centre, VIP Road, opp. Fire Station, Vesu Surat, Gujarat 395007<br />
  <strong>Social Media:</strong> Follow us @KoeKafe on Instagram <br />
  <strong>Contact:</strong> (123) 456-7890, info@koekafe.com<br />

</p>

                <button
                  type="submit"
                  className="bg-[#3D281C] text-[#E2D3C4] py-2 px-4 rounded-md hover:bg-#82614A focus:outline-none focus:ring focus:border-#82614A"
                >
                  Reserve Your Spot
                </button>
                <button
                  type="button"
                  className="bg-[#3D281C] text-[#E2D3C4] py-2 px-4 rounded-md ml-2 hover:bg-black focus:outline-none focus:ring focus:border-#82614A"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;