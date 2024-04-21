import React from "react";
import Section from "./Section";
import Heading from "./Heading";

import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import Tagline from "./Tagline";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Rady to get stared" title="What we're working on" />

        <div
          className="relative grid gap-6 
        md:grid-cols-2 md:gap-4 md:pb-[7rem]"
        >
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In Progrss";

            return (
              <div
                key={item.id}
                className={`md:flex even:md:transalte-y-[7rem]
              p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              >
                <div>
                  <div className="">
                    <img
                      src={grid}
                      className="w-full"
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between">
                      <Tagline>{item.date}</Tagline>
                      <div>
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          alt={status}
                          className="mr-2.5"
                          width={16}
                          height={16}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className="mb-10">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full"
                        width={630}
                        height={420}
                      />
                    </div>

                    <h4 className="h4 mb-4">{item.title}</h4>

                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
