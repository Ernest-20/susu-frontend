import { useState, useMemo } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Toggle from "../../components/Toggle";

const FREQUENCY_OPTIONS = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
];

// contributions per year, used to project annual savings
const OCCURRENCES_PER_YEAR = {
  daily: 365,
  weekly: 52,
  monthly: 12,
};

export default function CreatePlan() {
  const [frequency, setFrequency] = useState("daily");
  const [amount, setAmount] = useState(20);
  const [goal, setGoal] = useState("");

  const projectedAnnual = useMemo(() => {
    const occurrences = OCCURRENCES_PER_YEAR[frequency];
    return amount * occurrences;
  }, [frequency, amount]);

  const frequencyLabel = FREQUENCY_OPTIONS.find((f) => f.value === frequency)?.label;

  const handleAmountChange = (e) => {
    const value = Number(e.target.value.replace(/[^0-9]/g, ""));
    setAmount(Number.isNaN(value) ? 0 : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real API call once backend is live
    console.log({ frequency, amount, goal, projectedAnnual });
  };

  return (
    <div className="min-h-screen bg-page flex items-center justify-center p-6">
      <Card className="w-full max-w-sm md:max-w-md">
        <div className="flex items-center gap-2 mb-1">
          <button aria-label="Back" className="text-ink-muted">←</button>
          <h1 className="text-xl">New plan</h1>
        </div>
        <p className="text-sm text-ink-muted mb-6">
          Choose how often you want to save.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <p className="label-caption mb-2">Choose frequency</p>
            <Toggle
              options={FREQUENCY_OPTIONS}
              value={frequency}
              onChange={setFrequency}
            />
          </div>

          <div>
            <p className="label-caption mb-2">Amount per contribution</p>
            <Card variant="tint" className="text-center py-5">
              <p className="text-xs text-ink-muted mb-1">GHS</p>
              <input
                type="text"
                inputMode="numeric"
                value={amount}
                onChange={handleAmountChange}
                className="text-3xl font-bold text-ink text-center w-full bg-transparent focus:outline-none"
                aria-label="Amount per contribution"
              />
            </Card>
          </div>

          <Input
            label="Goal (optional)"
            placeholder="e.g. New television"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />

          <Card className="bg-page border-line">
            <p className="label-caption mb-1">Summary</p>
            <p className="text-sm text-ink">
              GHS {amount.toLocaleString()} every {frequencyLabel?.toLowerCase()} →
              est. <span className="font-semibold">GHS {projectedAnnual.toLocaleString()}/yr</span>
            </p>
          </Card>

          <Button type="submit" disabled={amount <= 0}>
            Start plan
          </Button>
        </form>
      </Card>
    </div>
  );
}