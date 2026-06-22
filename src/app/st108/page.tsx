import Button from "@/components/Button";
import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";

const surveyQuestions = [
  "Does your facility have a documented water quality management program?",
  "Are you currently testing water quality per TIR34 guidelines?",
  "Do you have records of water testing for sterile processing equipment?",
  "Is your team aware of the new ANSI/AAMI ST108 standard requirements?",
  "Have you updated your SOPs to reflect ST108 compliance?",
];

export const metadata = {
  title: "ST108 Testing | Sierra Biomed",
  description:
    "Sierra Biomed helps you understand the critical shift from TIR34 guidelines to the ANSI/AAMI ST108 standard for medical device processing.",
};

export default function ST108Page() {
  return (
    <>
      <PageHero
        title="ANSI/AAMI ST108"
        subtitle="Water purity is no longer a recommendation. It is a requirement. We help you understand the critical shift from TIR34 guidelines to the ST108 standard for medical device processing."
        dark
      />

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#4069a5]">
            New Standard
          </p>
          <h2 className="mb-6 text-3xl font-bold uppercase">Are You Compliant?</h2>
          <Button href="/contact-us">Lets Test!</Button>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#e8e6e6] py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-2 text-center text-xl font-bold uppercase">
            Quick Compliance Survey
          </h2>
          <p className="mb-8 text-center text-sm text-[#707070]">
            Find out — Take A Quick and Easy 5 Question Survey
          </p>
          <form className="mx-auto max-w-xl space-y-4 rounded-lg bg-white p-8 shadow-sm">
            {surveyQuestions.map((question, index) => (
              <fieldset key={question} className="border-b border-[#e8e6e6] pb-4">
                <legend className="mb-2 text-sm font-medium text-black">
                  {index + 1}. {question}
                </legend>
                <div className="flex gap-4">
                  {["Yes", "No", "Unsure"].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-1.5 text-sm text-[#555]"
                    >
                      <input type="radio" name={`q${index}`} value={option} />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
            <div className="pt-4 text-center">
              <Button href="/contact-us">Submit Survey</Button>
            </div>
          </form>
        </div>
      </RevealSection>

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase">
            ST108 Water Testing Services
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#707070]">
            Sierra Biomed provides water testing and compliance support to help
            your sterile processing department meet the new ANSI/AAMI ST108
            requirements. Contact us to schedule testing or learn more about
            achieving compliance.
          </p>
          <Button href="/contact-us">Contact a Specialist</Button>
        </div>
      </RevealSection>
    </>
  );
}
