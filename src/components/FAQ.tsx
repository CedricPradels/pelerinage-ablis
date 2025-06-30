import { ReactNode } from "react";

export type FAQEntry = {
  id: number;
  question: string;
  answer: string;
};

export type FAQProps = {
  entries: FAQEntry[];
  title: string;
  titleId: string;
  titleHref: string;
};

export const FAQ = ({
  entries,
  title,
  titleHref,
  titleId,
}: FAQProps): ReactNode => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2
          className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          id={titleId}
        >
          <a href={titleHref}>{title}</a>
        </h2>

        <dl className="mt-20 divide-y divide-gray-900/10">
          {entries.map((faq) => (
            <div
              key={faq.id}
              className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
