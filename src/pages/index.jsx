import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Mail, Phone, Instagram } from "react-feather"
import "../scss/index.scss"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="">
      <StaticImage
        className=""
        src="../images/bathtub_w_logo.png"
        alt=""
      />
    </section>
    <section className="about py-20">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium pt-10 md:pt-16 underline">About Us</h2>
      <p
        className="m-0 pb-10 px-4 leading-relaxed max-w-prose mx-auto md:text-lg"
      >
        EC Synthetic Services was founded by Edwin Vasquez, after working for many reputable companies for over 10 years as a sub-contractor. It was in 2018, when he decided to branch out on his own and create his own company. Here at EC Synthetic Services, we are committed to making sure that our clients are satisfied with every project. We take pride and ownership treating each job as if it was our very own home. Contact us today for more information!
      </p>
    </section>
    <section>
      <div className="w-11/12 h-3/4 m-auto bg-white p-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium pt-10 md:pt-16 underline">Services</h2>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium pt-2 md:pt-10">Kitchen Refinishing</h2>
        <div className="grid grid-cols-3">
          <div>
            <StaticImage
              src="../images/services/kitchen_sink_services.png"
              alt=""
            />
            <hr className="w-1/2 m-auto mb-2 bg-blue" />
            <ul className="md:font-medium list-disc list-inside text-left pt-4 m-0">
              <li>Kitchen Porcelain Sink</li>
              <li>Laundry Room Porcelain Sink</li>
            </ul>
          </div>
          <div>
            <StaticImage
              src="../images/services/stove_services.png"
              alt=""
            />
            <hr className="w-1/2 m-auto mb-2 bg-blue" />
            <ul className="md:font-medium list-disc list-inside text-left pt-4 m-0">
              <li>Tile Kitchen Countertop</li>
            </ul>
          </div>
          <div>
            <StaticImage
              src="../images/services/kitchen_services.png"
              alt=""
            />
            <hr className="w-1/2 m-auto mb-2 bg-blue" />
            <ul className="md:font-medium list-disc list-inside text-left pt-4 m-0">
              <li>Formica Kitchen Countertop</li>
              <li>Kitchen Countertop w/ Island</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="w-11/12 h-3/4 m-auto bg-white p-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium pt-10 md:pt-16">Bathroom Refinishing</h2>
        <div className="flex flex-wrap md:grid md:grid-cols-3">
          <div>
            <StaticImage
              src="../images/services/bathtub_services.png"
              alt=""
            />
            <hr className="w-1/2 m-auto mb-2 bg-blue" />
            <ul className="md:font-medium text-center pt-4 m-0">
              <li>Porcelain Tub</li>
              <li>Porcelain Tub with Tile Walls</li>
              <li>Fiberglass Tub</li>
              <li>Fiberglass Roman Tub</li>
            </ul>
          </div>
          <div>
            <StaticImage
              src="../images/services/bathroom_sink_services.png"
              alt=""
            />
            <hr className="w-1/2 m-auto mb-2 bg-blue" />
            <ul className="md:font-medium text-center pt-4 m-0">
              <li>Porcelain Sink</li>
              <li>Bathroom Vanity</li>
              <li>Tile Vanity</li>
            </ul>
          </div>
          {/* <div className="divide-y divide-blue-700"> */}
          <div>
            <StaticImage
              src="../images/services/bathtub_zoom_services.png"
              alt=""
            />
            <hr className="w-1/2 m-auto mb-2 bg-blue" />
            <ul className="md:font-medium text-center pt-4 m-0">
              <li>Tile Shower Stall</li>
              <li>Tile Shower Pan</li>
              <li>Fiberglass Shower Pan</li>
              <li>Fiberglass Shower Stall</li>
              <li>Culture Marble Wall Enclosure</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-blue text-white text-center">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium pt-16">Contact Information</h2>
      <div className="flex flex-col justify-evenly md:grid md:grid-cols-2 md:py-10 max-w-2xl mx-auto md:gap-y-6">
        <div className="flex flex-col justify-around mb-4 ">
          <Mail className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
          <hr className="w-1/2 md:w-full m-auto bg-white my-2" />
          <p className="m-0 md:text-lg">ecsyntheticservices@gmail.com</p>
        </div>
        <div className="flex flex-col justify-around mb-4 ">
          <Phone className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
          <hr className="w-1/2 md:w-full m-auto bg-white my-2" />
          <p className="m-0 md:text-lg">(818) 264-8057</p>
        </div>
        <div className="flex flex-col justify-around md:col-span-2 mb-4 ">
          <Instagram className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
          <p className="m-0 md:text-lg">@ecsyntheticservices</p>
        </div>
      </div>
      <p className="m-0 pb-10 text-2xl md:text-3xl">Serving all over Southern California</p>
    </section>
  </Layout >
)

export default IndexPage
