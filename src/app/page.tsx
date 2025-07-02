"use client";
import { faqs } from "@/app/faqs";
import { FAQ_URL } from "@/app/constants";
import { FAQ } from "@/components/FAQ";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        <HeroSection
          title="Pélerinage du groupement paroissial d'Ablis"
          description="Une journée pour marcher ensemble, prier ensemble, avancer ensemble vers la Cathédrale Saint-Louis de Versailles.
Que vous soyez jeune ou moins jeune, sportif ou contemplatif, venez vivre ce temps fort de foi et de fraternité à travers l’un des trois parcours accessibles à tous."
          pictureSrc="/images/cathedrale-saint-louis.jpg"
          pictureAlt="Cathédrale Saint-Louis"
          mainActionTitle="S'inscrire"
          secondaryActionTitle="Voir la FAQ"
          secondaryActionHref={FAQ_URL}
        />

        <FAQ
          title="Foire aux questions"
          entries={faqs}
          titleHref={FAQ_URL}
          titleId={
            FAQ_URL.substring(1) // remove #
          }
        />
      </main>
    </div>
  );
}
