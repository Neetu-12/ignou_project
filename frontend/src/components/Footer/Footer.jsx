import React from 'react';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Footers = () => {
  return (
    <Footer bgDark className="mt-10">
      {/* Container */}
      <div className="w-full px-3 lg:px-10 bottom-0 mb-6">
        {/* Grid Section */}
        <div className="grid w-full grid-cols-2 gap-4 px-2 py-4 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="/about">About</Footer.Link>
              <Footer.Link href="/careers">Careers</Footer.Link>
              <Footer.Link href="/brand">Brand Center</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title="Help Center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Discord</Footer.Link>
              <Footer.Link
                href="https://x.com/NeetuSah9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Footer.Link>
              <Footer.Link
                href="https://www.facebook.com/profile.php?id=100081179280728"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Footer.Link>

              {/* ✅ WhatsApp link */}
              <Footer.Link
                href="https://wa.me/919310513448?text=Hi%20Neetu!%20I%20visited%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="/privacy">Privacy Policy</Footer.Link>
              <Footer.Link href="/license">Licensing</Footer.Link>
              <Footer.Link href="/terms">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title="Download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full bg-gray-700 px-3 py-3 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Neetu™" year={2025} />
          <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=100081179280728"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/ne.etu3968/profilecard/?igsh=aHp3MDA0Y2xwdWR3"
              icon={BsInstagram}
            />
            <Footer.Icon href="https://x.com/NeetuSah9" icon={BsTwitter} />
            <Footer.Icon href="https://github.com/Neetu-12/ignou_project" icon={BsGithub} />
            <Footer.Icon
              href="https://wa.me/919310513448?text=Hi%20Neetu!"
              icon={BsWhatsapp}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footers;
