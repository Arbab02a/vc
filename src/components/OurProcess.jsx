"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { FaDatabase } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import { BsFillUsbPlugFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

import React from "react";

const OurProcess = () => {
  return (
    <Timeline className="text-lg">
      <Timeline.Item>
        <Timeline.Point icon={FaDatabase} />
        <Timeline.Content>
          <div className="ml-2">
            <Timeline.Time><h3 className="text-2xl">Data Gathering</h3></Timeline.Time>
            <Timeline.Body>
              Aggregating essential information is the opening phase in making
              any imaginative plan. These necessities are characterized by an
              expected level of effort assessed by programming applications and
              usage. This interaction is the way that prompts further
              appraisals.
            </Timeline.Body>
          </div>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point icon={TbListDetails} />
        <Timeline.Content>
          <div className="ml-2">
            <Timeline.Time><h3 className="text-2xl">Outlining</h3></Timeline.Time>
            <Timeline.Body>
              To border designs together, a broad and careful arrangement is
              needed. By stripping the dusty covering off of your innovativeness
              and presenting new plans, a plot is established. Thought
              association of how the consecutive models would be set is
              additionally remembered for this.
            </Timeline.Body>
          </div>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
      <Timeline.Point  icon={BsFillUsbPlugFill} />
        <Timeline.Content>
          <div className="ml-2">
            <Timeline.Time><h3 className="text-2xl">Illustration</h3></Timeline.Time>
            <Timeline.Body>
              This is the area that needs the most accuracy. We make impressive
              virtual plans and execute them to effectuate the expanded truth of
              your picture. Tones, texts, and pictures are most importantly
              dealt with. Our team’s creativity can be sensed in our work.
            </Timeline.Body>
          </div>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point icon={ FaLaptopCode} />
        <Timeline.Content>
          <div className="ml-2">
            <Timeline.Time><h3 className="text-2xl">Development</h3></Timeline.Time>
            <Timeline.Body>
              The quality of every product is tested after the execution of the
              entire design and layout. Also, maintenance is carried out by our
              development team to resolve the addressed issues. Any further
              consigned by the client is additionally managed.
            </Timeline.Body>
          </div>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={MdRocketLaunch} />
        <Timeline.Content>
          <div className="ml-2">
            <Timeline.Time><h3 className="text-2xl">Launch And Promotions</h3>  </Timeline.Time>
            <Timeline.Body>
              Our team of skilled and imaginative writers is dedicated to
              crafting engaging, informative, and captivating content tailored
              to meet your specific needs. Whether you require compelling blog
              posts, SEO-optimized articles, or persuasive marketing copy, we've
              got you covered. With a keen eye for detail and a passion for
              storytelling, we guarantee content that resonates with your
              audience.
            </Timeline.Body>
          </div>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default OurProcess;
