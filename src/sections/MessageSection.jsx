import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function MessageSection() {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });

    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });

    const paragraphSplit = SplitText.create("message-content p", {
      type: "words, lines",
    });
    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "40% center",
        scrub: true,
      },
    });

    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      ease: "Power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        markers: true,
        scrub: true,
      },
    });
  });
  return (
    <section className="message-content">
      <div className="container mx-auto flex-content py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">
              Stir up your fearless past and FUEL UP
            </h1>
            <div className="msg-text-scroll">
              <div className="bg-light-brown md:pb-3 px-5">
                <h2 className="text-red-brown">FULE UP</h2>
              </div>
            </div>
            <h1 className="second-message -mt-10 md:-mt-20">
              your future with every gulp of Perfect Protein
            </h1>
          </div>
          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden ">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MessageSection;
