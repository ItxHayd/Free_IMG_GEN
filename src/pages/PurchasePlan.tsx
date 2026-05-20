
import PricingCard from '../components/PricingCard'



const PurchasePlan = () => {
  return (
    <div data-theme="dark" className=' min-h-screen'>
      <div>
        <h1 className='flex justify-center text-3xl translate-y-15 md:translate-y-5 mb-3 font-semibold content-center'>Upgrade Your Plan</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-center content-center align-middle translate-y-1/12 my-auto'>
          <PricingCard
            Price="10"
            Tag="Most Popular"
            PlanName="Pro"
            highlight={false}
            features={[
              { text: "Daily image generation limit: 500 images", available: true },
              { text: "Medium/High resolution downloads", available: true },
              { text: "Watermark-free images", available: true },
              { text: "Commercial usage rights", available: true },
              { text: "Custom style templates", available: false },
              { text: "Batch processing", available: false },
            ]}
          />
          <PricingCard
            Price="50"
            Tag="Most OP"
            PlanName="Premium"
            highlight={true}
            features={[
                { text: "Unlimited Image generation", available: true },
                { text: "Ultra-high resolution downloads", available: true },
                { text: "Watermark-free images", available: true },
                { text: "Commercial usage rights", available: true },
                { text: "Custom style templates", available: true },
                { text: "Batch processing", available: true },
            ]}
          />
            <PricingCard
              Price="0"
              Tag="It's Free"
              PlanName="Free"
              highlight={false}
              features={[
                { text: "Daily image generation limit: 30 Images", available: true },
                { text: "Low/Standard resolution downloads", available: true },
                { text: "Watermark-free Images", available: true },
                { text: "Commercial usage rights", available: false },
                { text: "Custom style templates", available: false },
                { text: "Batch processing", available: false },
              ]}
            />
        </div>
    </div>
  )
}

export default PurchasePlan