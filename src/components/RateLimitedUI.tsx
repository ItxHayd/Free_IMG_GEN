import { Link } from "react-router-dom"

const RateLimitedUI = () => {
  return (
        <div data-theme="abyss" className="mx-auto mt-5 card card-dash bg-base-100 w-96">
            <div className="card-body">
                <h2 className="text-2xl card-title">Daily Limit Reached</h2>
                <p className="text-base">Don't want to wait until tomorrow? Unlock unlimited access instantly with our budget-friendly subscription.</p>
                <div className="card-actions justify-end">
                <Link to="/home"><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
  )
}

export default RateLimitedUI