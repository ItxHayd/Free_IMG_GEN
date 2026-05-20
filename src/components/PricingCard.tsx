interface Feature {
  text: string;
  available: boolean;
}

interface Props {
  Price: string;
  Tag: string;
  PlanName: string;
  features: Feature[];          
  highlight?: boolean;         
}

const PricingCard = ({ Price, Tag, PlanName, features, highlight }: Props) => {
  return (
    <div
      data-theme="abyss"
      className={`card w-96 bg-base-100 shadow-sm mx-auto  scale-x-90 scale-y-95 ${
        highlight ? "border-2 border-yellow-400" : ""
      }`}
    >
      <div className="card-body">
        {Tag && (
          <span
            className={`badge badge-xs ${highlight ?"badge-warning": "badge-info"}`}>
            {Tag}
          </span>
        )}

        <div className="flex justify-between mt-2">
          <h2 className="text-3xl font-bold">{PlanName}</h2>
          <span className="text-xl">${Price}/mo</span>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-sm">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className={`flex items-center ${!feature.available ? "opacity-50" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" className={`size-4 me-2 inline-block ${ feature.available ? "text-success" : "text-base-content/50" }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span className={`${!feature.available ? "line-through" : ""}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 ">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;