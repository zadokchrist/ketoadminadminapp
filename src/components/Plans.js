import * as React from "react";
import { useState } from "react";


const PlanCard = ({ color, title, count }) => (
  <div className="flex flex-col flex-1 pt-4 pb-9 bg-white rounded-lg border border-solid shadow-sm border-zinc-300">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0872aba5894336eca08e1779d1a4434e87768d37c5ec249e009acf9ac352a95?apiKey=2b51dad425e04206847488420121dc35&" alt="" className="self-end w-6 aspect-square max-md:mr-2.5" />
    <div className="flex flex-col pr-3 pl-6 max-md:pl-5">
      <div className={`text-xl ${color}`}>{title}</div>
      <div className="flex gap-4 mt-5 max-md:mr-1.5">
        <div className="text-4xl text-sky-900">{count}</div>
        <div className="self-start mt-5 text-xs text-zinc-700">Active Plans</div>
      </div>
    </div>
  </div>
);

function Plans() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const planCards = [
    { color: "text-amber-600", title: "Bronze", count: 111 },
    { color: "text-neutral-400", title: "Silver", count: 97 },
    { color: "text-yellow-400", title: "Gold", count: 108 },
    { color: "text-yellow-400", title: "Gold Plus", count: 56 },
    { color: "text-stone-500", title: "Platinum", count: 36 },
    { color: "text-lime-700", title: "Special Needs", count: 47 },
  ];

  const planPerformanceData = [
    { planId: "PLN01", planName: "Bronze", subscriptions: 534, amount: "UGX 12,587,200", cancellations: 20, renewals: 79 },
    { planId: "PLN02", planName: "Silver", subscriptions: 1308, amount: "UGX 302,081,000", cancellations: 257, renewals: 400 },
    { planId: "PLN03", planName: "Gold", subscriptions: 967, amount: "UGX 122,587,200", cancellations: 221, renewals: 101 },
    { planId: "PLN04", planName: "Gold Plus", subscriptions: 534, amount: "UGX 101,587,200", cancellations: 93, renewals: 144 },
    { planId: "PLN05", planName: "Platinum", subscriptions: 477, amount: "UGX 72,587,200", cancellations: 257, renewals: 79 },
    { planId: "PLN06", planName: "Special Needs", subscriptions: 792, amount: "UGX 56,587,200", cancellations: 30, renewals: 600 },
  ];

  const handleCreatePlan = () => {
    console.log("Create Plan clicked");
  };

  return (
    <>
    <section className="flex gap-4 mx-9 mt-7 font-medium max-md:flex-wrap max-md:mr-2.5">
              {planCards.map((card, index) => (
                <PlanCard key={index} {...card} />
              ))}
            </section>
            <section className="flex flex-col px-px pt-6 pb-px mx-8 mt-5 bg-white rounded-md border border-solid border-zinc-300 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 px-0.5 mr-9 ml-9 text-black max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <h2 className="flex-auto my-auto text-xl font-medium">Performance of all Plans</h2>
                <form className="flex gap-2.5 text-xs max-md:flex-wrap max-md:max-w-full">
                  <label htmlFor="fromDate" className="my-auto">From:</label>
                  <input
                    type="date"
                    id="fromDate"
                    className="shrink-0 h-10 bg-white rounded border border-solid border-zinc-300 w-[100px]"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                  <label htmlFor="toDate" className="my-auto">To:</label>
                  <input
                    type="date"
                    id="toDate"
                    className="shrink-0 h-10 bg-white rounded border border-solid border-zinc-300 w-[100px]"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                  <button
                    type="button"
                    className="justify-center items-start px-14 py-4 font-medium text-white bg-sky-900 rounded max-md:px-5"
                    onClick={handleCreatePlan}
                  >
                    + Create Plan
                  </button>
                </form>
              </div>
              <table className="w-full mt-6 text-base font-medium">
                <thead>
                  <tr className="bg-sky-900 text-white">
                    <th className="px-4 py-2 text-left">Plan ID</th>
                    <th className="px-4 py-2 text-left">Plan Name</th>
                    <th className="px-4 py-2 text-left">No of Subscriptions</th>
                    <th className="px-4 py-2 text-left">Amount made in subscriptions</th>
                    <th className="px-4 py-2 text-left">No of Cancellations</th>
                    <th className="px-4 py-2 text-left">Number of Renewals</th>
                  </tr>
                </thead>
                <tbody>
                  {planPerformanceData.map((plan, index) => (
                    <tr key={index} className="border-t border-b border-solid border-zinc-300">
                      <td className="px-4 py-4 text-black">{plan.planId}</td>
                      <td className="px-4 py-4 text-black">{plan.planName}</td>
                      <td className="px-4 py-4">{plan.subscriptions}</td>
                      <td className="px-4 py-4">{plan.amount}</td>
                      <td className="px-4 py-4">{plan.cancellations}</td>
                      <td className="px-4 py-4">{plan.renewals}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
    </>
  );
}

export default Plans;