function HerSection() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-0">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-600">
                Aviyel Newsletter
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Aviyel is on a mission to enlighten people about the importance of using open source software and to develop relationships between diverse groups in the open source community.
              </p>
              <div
                className="relative flex justify-center mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="flex flex-col justify-center">
                  <img
                    className="mx-auto"
                    src={require("../assets/images/Hero.png")}
                    width="508"
                    height="432"
                    alt="Newsletter Main Banner"
                  />
                </div>
              </div>

          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HerSection;
