

'use client'
import { motion } from "framer-motion";
import { Accordion } from "flowbite-react";

const FAQs = () => {
  return (
    <div className="max-w-3xl my-10 mx-auto space-y-4 text-white">
     <h1 className="text-2xl sm:text-2xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-gray-200 text-center  leading-tight">Our FAQs</h1>
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>Our History</Accordion.Title>
                <Accordion.Content>
                  <p>
                    Founded in 2000, our company has grown from a small workshop
                    to a leading tech Company.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Our Values</Accordion.Title>
                <Accordion.Content>
                  <p>
                    We value integrity, quality, and customer satisfaction above
                    all else.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Sustainability</Accordion.Title>
                <Accordion.Content>
                  <p>
                    We are committed to sustainable practices and reducing our
                    environmental impact.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
  )
}

export default FAQs
