import LinkedIn from "@/components/LinkedIn";
import Title from "@/components/Title";
import Image from "next/legacy/image";
import Link from "next/link";
import "./style.css";

export default function TeamPage() {
  return (
    <>
      <div className="all overflow-x-hidden">
        <Title title="Our Team" />
        <div>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-8 text-zinc-600 dark:text-zinc-500">
            Our team consists a group of passionate people who are working hard to make
            IIC TMSL a success.
          </h2>
          <p className="mt-5 flex items-center justify-center text-center text-xs sm:text-sm">
            Tip: Click on the Images to visit their{" "}
            <LinkedIn className="h-3 w-auto px-1 sm:h-4" /> Profiles
          </p>
        </div>
        <section>
          <div className="container mx-auto py-24">
            <h2 className="mb-20 text-center text-4xl font-bold tracking-tight sm:text-5xl">
              Administrative Heads
            </h2>
            <div className="mx-auto -mb-10 -mt-4 flex flex-wrap sm:-m-4">
              {adminList.map((admin) => (
                <div key={admin.id} className="mx-auto mb-6 p-4 sm:mb-0 md:w-1/3">
                  <div className="mx-auto aspect-square h-56 w-56 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150  ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                    <Link
                      href={`https://www.linkedin.com/in/${admin.linkedIn}`}
                      target="_blank"
                    >
                      <Image
                        alt={admin.name}
                        className="h-56 w-56 rounded-full object-cover object-center"
                        src={admin.image}
                        width={300}
                        height={300}
                        placeholder="blur"
                        blurDataURL={admin.image}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {admin.name}
                  </h2>
                  <p className="mt-2 text-center text-base leading-relaxed text-zinc-600 dark:text-zinc-500">
                    {admin.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto py-24">
            <h2 className="mb-20 text-center text-4xl font-bold tracking-tight sm:text-5xl">
              Heads and Co-Heads
            </h2>
            <div className="mx-auto -mb-10 -mt-4 flex flex-wrap sm:-m-4">
              {teamlist.map((member) => (
                <div
                  key={member.id}
                  className="mx-auto mb-6 w-full p-4 sm:mb-0 sm:w-1/4 sm:p-10"
                >
                  <Link
                    href={`https://www.linkedin.com/in/${member.linkedIn}`}
                    target="_blank"
                  >
                    <div className="mx-auto aspect-square h-48 w-48 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                      <Image
                        alt={member.name}
                        className="h-48 w-48 rounded-full object-cover object-center"
                        src={member.image}
                        width={200}
                        height={200}
                        placeholder="blur"
                        blurDataURL={member.image}
                        loading="lazy"
                      />
                    </div>
                  </Link>

                  <h2 className="mt-5 text-center text-xl font-bold text-zinc-100">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-center text-sm leading-relaxed text-zinc-300">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const adminList = [
  {
    id: 1,
    name: "Shristi Rai",
    role: "Convenor",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fadmin%2Fshristi.webp&w=384&q=75",
    linkedIn: "shristi-rai-03a264209",
  },
  {
    id: 2,
    name: "Rohan Jha",
    role: "Co-Convenor",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fadmin%2Frohan.webp&w=384&q=75",
    linkedIn: "rohan-jha-476296213",
  },
];
//Renumbering of Id need to be done
const teamlist = [
  {
    id: 1,
    name: "Sreejita Mukhopadhyay",
    role: "Head of Graphics wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fsreejita.webp&w=256&q=75",
    linkedIn: "sreejita-mukhopadhyay-b83256234",
  },
  {
    id: 2,
    name: "Amit Saha",
    role: "Co-Head of Graphics wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Famit.webp&w=256&q=75",
    linkedIn: "amit-saha-24811121b",
  },
  // {
  //   id: 3,
  //   name: "Atryee Dhar",
  //   role: "Co-Head of Graphics wing.",
  //   image: "/images/team/heads-coheads/atryee.webp",
  //   linkedIn: "atryee-dhar-07b246218",
  // },
  {
    id: 4,
    name: "Ashhar A. Ahmed",
    role: "Head of Technical wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fashhar.webp&w=256&q=75",
    linkedIn: "ashhar-ali-ahmed-971aaa193",
  },
  {
    id: 5,
    name: "Kumar Aditya",
    role: "Co-Head of Technical wing.",
    image: "https://i.ibb.co/WK7W7fR/My-Photo.jpg",
    linkedIn: "kumar-aditya-0ab61b234",
  },
  {
    id: 6,
    name: "Subhodeep Roy",
    role: "Co-Head of Technical wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fsubhadeep.webp&w=256&q=75",
    linkedIn: "subhadeep3902",
  },
  {
    id: 7,
    name: "Farhan Ahmed",
    role: "Head of Press wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Ffarhan.webp&w=256&q=75",
    linkedIn: "",
  },
  {
    id: 8,
    name: "Diptesi Saha",
    role: "Co-Head of Press wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fdiptesi.webp&w=256&q=75",
    linkedIn: "",
  },
  {
    id: 9,
    name: "Soumyadeep Adhikary",
    role: "Co-Head of Press wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fsoumyadeep.webp&w=256&q=75",
    linkedIn: "soumya-adhikary",
  },
  {
    id: 10,
    name: "Sanjana Dey",
    role: "Head of Content wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fsanjana.webp&w=256&q=75",
    linkedIn: "sanjana-dey-b4588a202",
  },
  // {
  //   id: 11,
  //   name: "Anuvab Chakravarty",
  //   role: "Co-Head of Content wing.",
  //   image: "/images/team/heads-coheads/anuvab.webp",
  //   linkedIn: "anuvab-chakravarty-001b39233",
  // },
  {
    id: 12,
    name: "Ayush Dev",
    role: "Co-Head of Content wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fayush.webp&w=256&q=75",
    linkedIn: "ayush-dev-35b742206",
  },
  {
    id: 13,
    name: "Sandeep Pratap",
    role: "Head of Management & Resource wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fsandeep.webp&w=256&q=75",
    linkedIn: "sandeep-pratap-528003202",
  },
  {
    id: 14,
    name: "Aaquib Ahmed",
    role: "Co-Head of Management & Resource wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Faaquib.webp&w=256&q=75",
    linkedIn: "aaquib-ahmad-81597b226",
  },
  {
    id: 15,
    name: "Firoz Ali Mondal",
    role: "Co-Head of Management & Resource wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Ffiroz.webp&w=256&q=75",
    linkedIn: "firoz-ali-mondal-624069283",
  },
  {
    id: 27,
    name: "Mitali Lal",
    role: "Co-Head of Management & Resource wing.",
    image: "https://i.ibb.co/gjZx4fX/Mitali-Lal.jpg",
    linkedIn: ""

  },
  {
    id: 16,
    name: "Dewashish Kr. Tiwary",
    role: "Head of PR & Outreach wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fdewashish.webp&w=256&q=75",
    linkedIn: "dewashish-tiwary-43196b201",
  },
  {
    id: 17,
    name: "Payel Chaudhuri",
    role: "Co-Head of PR & Outreach wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fpayel.webp&w=256&q=75",
    linkedIn: "payel-chaudhuri-aiml",
  },
  {
    id: 18,
    name: "Aadarsh Sharma",
    role: "Co-Head of PR & Outreach wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Faadarsh.webp&w=256&q=75",
    linkedIn: "aadarsh-sharma-65548a244",
  },
  {
    id: 28,
    name: "Arunabha Sengupta",
    role: "Co-Head of PR & Outreach wing",
    image: "https://i.ibb.co/Th8wmCV/Arunabha.jpg",
    linkedIn: ""

  },
  {
    id: 19,
    name: "Uddipta Kar",
    role: "Head of Social Media wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fuddipta.webp&w=256&q=75",
    linkedIn: "uddipta-kar-199323188",
  },
  {
    id: 20,
    name: "Ruben Clifford Gomes",
    role: "Co-Head of Social Media wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fruben.webp&w=256&q=75",
    linkedIn: "ruben-gomes-72500a219",
  },
  {
    id: 21,
    name: "Abhipreya Ghosh",
    role: "Head of Start-up wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fabhipreyo.webp&w=256&q=75",
    linkedIn: "abhipreya-ghosh-531576211",
  },
  {
    id: 22,
    name: "Abhimanyu Kanjilal",
    role: "Co-Head of Start-up wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fabhimanyu.webp&w=256&q=75",
    linkedIn: "abhimanyu-kanjilal-66432022a",
  },
  {
    id: 23,
    name: "Abhay Bajpayee",
    role: "Co-Head of Start-up wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fabhay.webp&w=256&q=75",
    linkedIn: "abhay-bajpayee-34a42825b",
  },
  {
    id: 24,
    name: "Soumyadeep Banerjee",
    role: "Head of Sponsorship wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fsoumyadeep-sp.webp&w=256&q=75",
    linkedIn: "soumyadeep-banerjee-722447237",
  },
  {
    id: 25,
    name: "Manash Goyal",
    role: "Co-Head of Sponsorship wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fmanash.webp&w=256&q=75",
    linkedIn: "manash-goyal-942930233",
  },
  {
    id: 26,
    name: "Isha Tirkey",
    role: "Co-Head of Sponsorship wing.",
    image: "https://www.iictmsl.com/_next/image?url=%2Fimages%2Fteam%2Fheads-coheads%2Fisha.webp&w=256&q=75",
    linkedIn: "isha-tirkey-8674b1255",
  }
];