import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface SolutionItemProps {
  title: string;
  description: string;
}

const SolutionItem: React.FC<SolutionItemProps> = ({ title, description }) => (
  <div className="mb-6">
    <h2 className="flex items-center font-light text-lg mb-2">
      <ChevronRight className="mr-2 text-sky-300" />
      {title}
    </h2>
    <p className="font-extralight ml-6">{description}</p>
  </div>
);

interface StoryCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  category,
  description,
  imageUrl,
  videoUrl,
}) => (
  <div className="grid sm:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
    {imageUrl ? (
      <div
        className="bg-cover bg-center min-h-[300px]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    ) : videoUrl ? (
      <div className="rounded-l-2xl overflow-hidden">
        <video width="100%" height="100%" controls className="object-cover">
          <source src={videoUrl} type="video/mp4"></source>
        </video>
      </div>
    ) : null}
    <div
      className={`${category === "Pharma" ? "bg-teal-700" : "bg-sky-700"} p-8`}
    >
      <h1 className="text-2xl font-medium mb-3">{title}</h1>
      <Badge className="mb-4">{category}</Badge>
      <p className="font-extralight mb-6">{description}</p>
      <Button
        variant="outline"
        className="text-white border-white hover:bg-white hover:text-sky-700"
      >
        Read More
      </Button>
    </div>
  </div>
);

export default function Content() {
  return (
    <div className=" text-white">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-light text-center mb-12">
          Solutions for your pharmacy, hospital, medical practice or biopharma
          company
        </h1>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-6">
            <SolutionItem
              title="Online consultations and appointments"
              description="Online consultations and appointments offer a convenient and accessible way for patients to connect with healthcare professionals remotely."
            />
            <SolutionItem
              title="Emergency medical services (EMS)"
              description="These services are essential for interfacility transfers of critical care patients and on-scene responses in support of ground-based EMS."
            />
            <SolutionItem
              title="Training and qualifications for emergency medical services"
              description="These training programs ensure that EMS personnel are well-equipped to handle a wide range of medical emergencies and provide the necessary care to patients."
            />
          </div>
          <div
            className="hidden sm:block bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: "url('/assets/images/ambulance.jpeg')" }}
          ></div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 space-y-16">
        <StoryCard
          title="Delivering on Innovative Medical Breakthroughs"
          category="Our Stories"
          description="Embracing cutting-edge research and technology to bring groundbreaking medical advancements to the forefront of healthcare. Our commitment to delivering innovative solutions that revolutionize patient care and treatment outcomes."
          imageUrl="/assets/images/inside-amb.jpeg"
        />

        <div className="bg-teal-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="grid sm:grid-cols-3 gap-6 p-8">
            <div className="sm:col-span-2">
              <h2 className="text-3xl font-medium mb-4">
                Providing an Oasis to Pharmacy Deserts
              </h2>
              <Badge className="mb-4">Pharma</Badge>
              <p className="font-extralight mb-6">
                Creating a lifeline for underserved communities by establishing
                accessible pharmacy services in areas lacking adequate
                healthcare resources. Our mission is to bridge the gap and
                ensure all individuals have convenient access to essential
                medications and healthcare support.
              </p>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-teal-700"
              >
                Learn More
              </Button>
            </div>
            <div className="relative h-64 sm:h-full rounded-lg overflow-hidden">
              <video width="920" height="240" controls>
                <source src="/assets/images/amb.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
          <div className="bg-teal-800 p-6">
            <h3 className="text-xl font-medium mb-4">Key Initiatives</h3>
            <ul className="grid sm:grid-cols-3 gap-4">
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 flex-shrink-0" />
                <span>Mobile Pharmacy Units</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 flex-shrink-0" />
                <span>Telehealth Consultations</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 flex-shrink-0" />
                <span>Community Health Education</span>
              </li>
            </ul>
          </div>
        </div>

        <StoryCard
          title="Empowering Patients Through Telemedicine"
          category="Our Stories"
          description="Harnessing the power of telemedicine to empower patients with convenient access to healthcare services and expert medical advice from the comfort of their homes. By leveraging technology, we aim to enhance patient engagement, improve health outcomes, and promote proactive healthcare management."
          imageUrl="/assets/images/amb3.jpeg"
        />
      </section>
    </div>
  );
}
