import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineTrophy } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";

export default function ContactUs() {
  return (
    <div>
      {/* 1st div */}
      <div className="flex flex-col lg:flex-row justify-between items-start px-4 lg:px-20 py-10">
        <div className="lg:w-[60%] mb-10 lg:mb-0">
          <div className="text-center lg:text-left">
            <p className="font-semibold text-3xl text-black mb-4">
              Get In Touch With Us
            </p>
            <p className="text-sm text-gray-600 mb-10">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaLocationDot className="text-xl text-gray-600" />
              <div>
                <p className="font-medium text-lg text-black">Address</p>
                <p className="text-sm text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-xl text-gray-600" />
              <div>
                <p className="font-medium text-lg text-black">Phone</p>
                <p className="text-sm text-gray-600">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MdWatchLater className="text-xl text-gray-600" />
              <div>
                <p className="font-medium text-lg text-black">Working Time</p>
                <p className="text-sm text-gray-600">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-[35%] bg-white shadow-lg rounded-lg p-6">
          <div className="space-y-6">
            <div>
              <p className="font-medium text-lg text-black">Your Name</p>
              <input
                type="text"
                placeholder="Abc"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <p className="font-medium text-lg text-black">Your Email</p>
              <input
                type="email"
                placeholder="Abc@gmail.com"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <p className="font-medium text-lg text-black">Messages</p>
              <textarea
                placeholder="Write your message here..."
                className="w-full p-3 border border-gray-300 rounded-md"
              ></textarea>
            </div>

            <button className="w-full py-3 bg-[#B88E2F] text-white rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* 2nd div */}
      <div className="bg-[#F4F4F4] py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-20">
          <div className="flex items-center space-x-10 mb-8 lg:mb-0">
            <div className="flex items-center space-x-3">
              <HiOutlineTrophy className="text-3xl text-[#B88E2F]" />
              <div>
                <p className="text-xl font-semibold text-black">High Quality</p>
                <p className="text-sm text-gray-600">Crafted from top materials</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <HiOutlineTrophy className="text-3xl text-[#B88E2F]" />
              <div>
                <p className="text-xl font-semibold text-black">Warranty Protection</p>
                <p className="text-sm text-gray-600">Over 2 years</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <HiOutlineTrophy className="text-3xl text-[#B88E2F]" />
              <div>
                <p className="text-xl font-semibold text-black">24 / 7 Support</p>
                <p className="text-sm text-gray-600">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}