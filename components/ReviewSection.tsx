import React from 'react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      company: "Vercel",
      logo: "▲", // Triangle symbol as placeholder for Vercel logo
      review: "Strapi and Next.js both build on the same philosophy: open source is the path to success. Combine them with Vercel deployment and you have a stack with virtually infinite scalability, global performance, and security.",
      author: {
        name: "Guillermo Rauch",
        title: "CEO",
        avatar: "GR"
      }
    },
    {
      id: 2,
      company: "TESCO",
      logo: "TESCO", // Text placeholder for Tesco logo
      review: "With Strapi, we can be sure that the solution can be customized to always fit our needs. It helped us reduce time-to-market and deliver the project on time.",
      author: {
        name: "Michał Pawłowski",
        title: "Head of Software Development",
        avatar: "MP"
      }
    },
    {
      id: 3,
      company: "SOCIETE GENERALE",
      logo: "SG", // Placeholder for Societe Generale logo
      review: "Strapi has turned out to be a great choice so far: technical setup was really quick, and in a few days we were able to have a drafted site up & running, leveraging Strapi main functionalities.",
      author: {
        name: "Jérôme Chauveau",
        title: "DevOps Team Lead",
        avatar: "JC"
      }
    }
  ];

  return (
    <section className="flex items-center justify-center py-20 bg-white px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-purple-500 text-sm font-semibold tracking-wider uppercase mb-4">
            REVIEWS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            Developers love Strapi
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Company Logo */}
              <div className="mb-6">
                {review.company === "Vercel" && (
                  <div className="text-2xl font-bold text-black">▲ Vercel</div>
                )}
                {review.company === "TESCO" && (
                  <div className="text-2xl font-bold text-blue-600">TESCO</div>
                )}
                {review.company === "SOCIETE GENERALE" && (
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-bold text-sm">
                      SG
                    </div>
                    <div className="text-lg font-bold text-black">
                      SOCIETE<br />GENERALE
                    </div>
                  </div>
                )}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed mb-6 text-base">
                {review.review}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {review.author.avatar}
                </div>
                <div>
                  <div className="font-semibold text-blue-600 text-sm">
                    {review.author.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {review.author.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;