import type { Metadata } from 'next'
import Link from 'next/link';
import Image from 'next/image';
import BuyButton from './BuyButton';

export const metadata: Metadata = {
  title: 'Solidarity Stickers',
  description: '7 stickers of classic sports brand reimagined to express messages of solidarity for the Palestinian cause. ALL PROFITS GO TO MEDICAL AID TO PALESTINIANS.',
  openGraph: {
    images: [
      {
        url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/solidarity-stickers-og.png`,
        width: 2048,
        height: 2048,
        alt: 'Solidarity Stickers'
      }
    ]
  }
}


const HomePage = () => {
  return (
    <main className="w-full min-h-screen">

      <div className="px-6 py-12 md:px-32 lg:px-64 grid grid-cols-1 gap-8 container mx-auto">
        <h1 className="text-4xl font-black">Palestine stickers</h1>

        <div className="border-1 border-black">
          <Image src="/header.svg" alt="Free Palestine" width={4110/5} height={2055/5} />
        </div>


        <p>
          We have released a set of 7 stickers of classic sports brand reimagined to express messages of solidarity for the Palestinian cause. Stock is limited so get them while they last. Only available to ship to mainland UK.
        </p>

        <Image src="/solidarity-stickers.png" alt="Solidarity Stickers" width={2048} height={2048} />

        <p>
          All proceeds go to <Link className="hover:underline text-green-600" href="https://www.map.org.uk/">Medical Aid for Palestinians</Link> who work for the health and dignity of Palestinians living under occupation and as refugees.
        </p>

        <BuyButton />

        <p>
          If you want to donate to MAP without buying stickers, you can do so <Link className="hover:underline text-green-600" href="https://www.map.org.uk/?form=FUNFXHDCJPK">directly through their website</Link>.
        </p>

        <p>
          Palestine stickers is a project by Jeshua Maxey.
        </p>
      </div>
    </main>
  );
}

export default HomePage;