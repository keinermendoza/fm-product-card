import { useState } from 'react'
import data from './data/mock.json'
import ProductCard from './ui/ProductCard'
import CircleMode from './ui/CircleMode'
import ChallengeLayout from './layouts/ChallengeLayout'
import DemoLayout from './layouts/DemoLayout'

function App() {
  const [isDemo, setIsDemo] = useState(false)
  
  return (
    <>
    <CircleMode 
      isDemo={isDemo}
      setIsDemo={setIsDemo}    
    />

    {isDemo ? (
      <DemoLayout>
      {data.map((perfume) => (
        <ProductCard
          key={perfume.id}
          title={perfume.title}
          smallImage={perfume.smallImage}
          largeImage={perfume.largeImage}
          category={perfume.category}
          description={perfume.description}
          price={perfume['sell-price']}
          fullPrice={perfume['full-price']}
        />
      ))}
      </DemoLayout>
    ) : (
      <ChallengeLayout>
        <ProductCard 
          title="Gabrielle Essence Eau De Parfum"
          titleLang="fr"
          smallImage='/images/image-product-mobile.jpg'
          largeImage='/images/image-product-desktop.jpg'
          category="Perfume"
          description="A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL."
          price="$149.99"
          fullPrice="$169.99"
        />
      </ChallengeLayout>  
    )}
  </>
)

}

export default App
