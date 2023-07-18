import Link from "next/link"

export default function Profile({ name }) {
  return (
    <section className="">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-500">
            Welcome <span className="text-blue-500">{name}</span>
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-primary-900"
          >
            Get started
          </Link>
          <button className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-primary-900">
            <Link href={"/login"}>Logout</Link>
          </button>
        </div>
        <div className="pt-3 sm:lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  )
}
