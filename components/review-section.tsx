import Image from "next/image";
import React from "react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      company: "Vercel",
      logo: "▲", // Triangle symbol as placeholder for Vercel logo
      review:
        "Strapi and Next.js both build on the same philosophy: open source is the path to success. Combine them with Vercel deployment and you have a stack with virtually infinite scalability, global performance, and security.",
      author: {
        name: "Guillermo Rauch",
        title: "CEO",
        avatar: "/review/tennis_1.png",
      },
    },
    {
      id: 2,
      company: "TESCO",
      logo: "TESCO", // Text placeholder for Tesco logo
      review:
        "With Strapi, we can be sure that the solution can be customized to always fit our needs. It helped us reduce time-to-market and deliver the project on time.",
      author: {
        name: "Michał Pawłowski",
        title: "Head of Software Development",
        avatar: "/review/birthday.png",
      },
    },
    {
      id: 3,
      company: "SOCIETE GENERALE",
      logo: "SG", // Placeholder for Societe Generale logo
      review:
        "Strapi has turned out to be a great choice so far: technical setup was really quick, and in a few days we were able to have a drafted site up & running, leveraging Strapi main functionalities.",
      author: {
        name: "Jérôme Chauveau",
        title: "DevOps Team Lead",
        avatar: "/review/aries.png",
      },
    },
  ];

  return (
    <section className="flex items-center justify-center bg-white px-4 py-15 md:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="text-sm font-semibold tracking-wide text-purple-500 uppercase">
            REVIEWS
          </div>
          <h2 className="text-brand-heading mt-5 text-4xl font-bold md:text-4xl">
            Developers love Strapi
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col cursor-pointer rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg justify-between"
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
                    <div className="flex h-8 w-8 items-center justify-center bg-red-600 text-sm font-bold text-white">
                      SG
                    </div>
                    <div className="text-lg font-bold text-black">
                      SOCIETE
                      <br />
                      GENERALE
                    </div>
                  </div>
                )}
              </div>

              {/* Review Text */}
              <p className="mb-6 text-base leading-relaxed text-gray-600">
                {review.review}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-semibold text-white">
                  <Image
                    src={review.author.avatar}
                    alt="author_image"
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-600">
                    {review.author.name}
                  </div>
                  <div className="text-sm text-gray-500">
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
