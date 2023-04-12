/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";
import Footer from "@/components/footer";
import { features, gallery, services, testimonials } from "@/components/data";

export default function Home() {
  return (
    <div className="bg-yellow-50 ">
      <Header />
      <section
        id="about"
        className="lg:h-screen py-32 lg:py-0 flex justify-center items-center"
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-12 gap-10 md:gap-2">
            <div className="col-span-6 flex flex-col justify-center gap-6">
              <h1 className="text-xl md:text-4xl lg:text-6xl max-w-lg capitalize font-bold">
                A smooth <span className="text-yellow-500">salon</span>{" "}
                experience in your town
              </h1>
              <p className="max-w-full md:max-w-md text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                modi alias inventore ab provident ratione corrupti facilis
                ipsam, mollitia animi.
              </p>
              <button className="w-fit border px-10 py-2 rounded-full bg-yellow-400 text-white">
                Book Now
              </button>
            </div>
            <div className="col-span-6">
              <img
                src="/img/hero.jpg"
                alt="hero-image"
                className="w-full shadow-2xl object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section id="features" className="py-10 md:py-0 md:pb-20">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl md:text-6xl text-center font-bold">
            Features
          </h1>
          <p className="max-w-2xl mx-auto text-center my-5 tracking-wide text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            soluta cumque nam dignissimos neque blanditiis vitae dicta, veniam
            sed numquam.
          </p>
          <div className="grid md:grid-cols-3 gap-10 justify-items-center mt-20">
            {features.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <span
                    className={`border w-fit px-7 py-4 shadow-2xl  ${data.bgColor} rounded-xl`}
                  >
                    {data.icon}
                  </span>
                  <h1 className="font-bold mt-4 text-lg">{data.heading}</h1>
                  <p className="text-sm text-gray-500 font-semibold">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl md:text-6xl text-center font-bold">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-center my-5 tracking-wide text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            soluta cumque nam dignissimos neque blanditiis vitae dicta, veniam
            sed numquam.
          </p>
          <div className="grid md:grid-cols-3 gap-10 py-10">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="border-2 bg-yellow-100 border-yellow-200 shadow-2xl hover:bg-yellow-400 text-gray-500 hover:text-white rounded-xl px-5 py-10 flex flex-col gap-4"
                >
                  <img
                    src={service.img}
                    alt={service.heading}
                    className="h-20 w-20 object-contain"
                  />
                  <h1 className="text-xl font-bold">{service.heading}</h1>
                  <p className="text-sm  hover:text-white">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="md:py-10">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl md:text-6xl text-center font-bold">
            Our Gallery
          </h1>
          <p className="max-w-2xl mx-auto text-center my-5 tracking-wide text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            soluta cumque nam dignissimos neque blanditiis vitae dicta, veniam
            sed numquam.
          </p>
          <div className="grid md:grid-cols-3 py-10 gap-10">
            {gallery.map((img, index) => {
              return (
                <div key={index}>
                  <img
                    src={img.image}
                    className="h-96 w-96 shadow-2xl object-cover rounded-3xl"
                    alt="gallery-image"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-10">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl md:text-6xl text-center font-bold tracking-wider">
            Reviews From <br /> Customers
          </h1>
          <p className="max-w-2xl mx-auto text-center my-5 tracking-wide text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            soluta cumque nam dignissimos neque blanditiis vitae dicta, veniam
            sed numquam.
          </p>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author.handle}
                  className="pt-8 sm:inline-block  sm:w-full sm:px-4"
                >
                  <figure className="rounded-2xl border-2 shadow-2xl bg-yellow-200  border-yellow-500  p-8 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img
                        className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                        src={testimonial.author.imageUrl}
                        alt=""
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.author.name}
                        </div>
                        <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-16">
          <div className="mx-auto max-w-6xl px-5">
            <div className="relative isolate flex flex-col gap-10 overflow-hidden bg-yellow-400 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl xl:max-w-none xl:flex-auto">
                Get notified when we’re launching.
              </h2>
              <form className="w-full max-w-md">
                <div className="flex gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 focus:outline-none text-gray-900 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-0  sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Notify me
                  </button>
                </div>
              </form>
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                aria-hidden="true"
              >
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient
                    id="759c1415-0410-454c-8f7c-9a820de03641"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(512 512) rotate(90) scale(512)"
                  >
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
