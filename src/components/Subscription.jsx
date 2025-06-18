import React from "react";
import { Check, Crown, Star, Zap } from "lucide-react";

const Subscription = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "month",
      features: [
        "5 exams per month",
        "Basic analytics",
        "Standard support",
        "Limited subjects"
      ],
      popular: false,
      current: true
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "month",
      features: [
        "Unlimited exams",
        "Advanced analytics",
        "Priority support",
        "All subjects",
        "Custom study plans",
        "Progress tracking"
      ],
      popular: true,
      current: false
    },
    {
      name: "Premium",
      price: "$39.99",
      period: "month",
      features: [
        "Everything in Pro",
        "AI-powered tutoring",
        "1-on-1 sessions",
        "Exam simulations",
        "Detailed reports",
        "Mobile app access"
      ],
      popular: false,
      current: false
    }
  ];

  const getPlanIcon = (planName) => {
    switch (planName) {
      case "Free":
        return <Star className="w-6 h-6 text-warning" />;
      case "Pro":
        return <Crown className="w-6 h-6 text-primary" />;
      case "Premium":
        return <Zap className="w-6 h-6 text-success" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 p-6 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-base-content mb-4">Choose Your Plan</h1>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Select the perfect plan that fits your learning needs. Upgrade anytime and cancel whenever you want.
          </p>
        </div>

        {/* Current Plan Status */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-base-content mb-2">Current Plan</h2>
              <p className="text-base-content/70">You're currently on the Free plan</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">$0/month</p>
              <p className="text-sm text-base-content/70">Next billing: Never</p>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-base-200 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                plan.popular ? 'ring-2 ring-primary' : ''
              } ${plan.current ? 'bg-primary/5' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-content px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  {getPlanIcon(plan.name)}
                </div>
                <h3 className="text-xl font-bold text-base-content mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-base-content">{plan.price}</span>
                  <span className="text-base-content/70">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm text-base-content">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.current
                    ? 'bg-base-300 text-base-content cursor-not-allowed'
                    : plan.popular
                    ? 'bg-primary text-primary-content hover:bg-primary/90'
                    : 'bg-base-300 text-base-content hover:bg-base-400'
                }`}
                disabled={plan.current}
              >
                {plan.current ? 'Current Plan' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-base-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-base-300">
            <h2 className="text-xl font-semibold text-base-content">Plan Comparison</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-base-300">
                <tr>
                  <th className="text-left p-4 font-medium text-base-content">Feature</th>
                  <th className="text-center p-4 font-medium text-base-content">Free</th>
                  <th className="text-center p-4 font-medium text-base-content">Pro</th>
                  <th className="text-center p-4 font-medium text-base-content">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-base-300">
                <tr>
                  <td className="p-4 text-base-content">Exams per month</td>
                  <td className="text-center p-4">5</td>
                  <td className="text-center p-4">Unlimited</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 text-base-content">Analytics</td>
                  <td className="text-center p-4">Basic</td>
                  <td className="text-center p-4">Advanced</td>
                  <td className="text-center p-4">Advanced</td>
                </tr>
                <tr>
                  <td className="p-4 text-base-content">Support</td>
                  <td className="text-center p-4">Standard</td>
                  <td className="text-center p-4">Priority</td>
                  <td className="text-center p-4">Priority</td>
                </tr>
                <tr>
                  <td className="p-4 text-base-content">AI Tutoring</td>
                  <td className="text-center p-4">❌</td>
                  <td className="text-center p-4">❌</td>
                  <td className="text-center p-4">✅</td>
                </tr>
                <tr>
                  <td className="p-4 text-base-content">1-on-1 Sessions</td>
                  <td className="text-center p-4">❌</td>
                  <td className="text-center p-4">❌</td>
                  <td className="text-center p-4">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 bg-base-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-base-content mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-base-content mb-2">Can I change my plan anytime?</h3>
              <p className="text-sm text-base-content/70">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div>
              <h3 className="font-medium text-base-content mb-2">Is there a free trial?</h3>
              <p className="text-sm text-base-content/70">Yes, all paid plans come with a 7-day free trial. No credit card required to start.</p>
            </div>
            <div>
              <h3 className="font-medium text-base-content mb-2">Can I cancel my subscription?</h3>
              <p className="text-sm text-base-content/70">Absolutely! You can cancel your subscription at any time from your account settings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription; 