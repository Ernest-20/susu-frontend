import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import Toggle from "./components/Toggle";

export default function StyleGuide() {
  const [accountType, setAccountType] = useState("individual");
  const [frequency, setFrequency] = useState("weekly");

  return (
    <div className="min-h-screen bg-page p-8 flex flex-col gap-10 max-w-xl mx-auto">
      <h1 className="text-2xl">Susu — Design System</h1>

      <section className="flex flex-col gap-3">
        <p className="label-caption">Buttons</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Create account</Button>
          <Button variant="outline">Log in instead</Button>
          <Button variant="ghost">Cancel</Button>
          <Button variant="danger">Reject</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <p className="label-caption">Inputs</p>
        <Input label="Full name" placeholder="Enter full name" />
        <Input label="Phone number" placeholder="+233 ..." />
        <Input label="Password" type="password" error="Password must be at least 8 characters" />
      </section>

      <section className="flex flex-col gap-3">
        <p className="label-caption">Toggles</p>
        <Toggle
          options={[
            { label: "Individual", value: "individual" },
            { label: "Group", value: "group" },
          ]}
          value={accountType}
          onChange={setAccountType}
        />
        <Toggle
          options={[
            { label: "Daily", value: "daily" },
            { label: "Weekly", value: "weekly" },
            { label: "Monthly", value: "monthly" },
          ]}
          value={frequency}
          onChange={setFrequency}
        />
      </section>

      <section className="flex flex-col gap-3">
        <p className="label-caption">Cards</p>
        <Card variant="solid">
          <p className="text-xs uppercase text-white/60">Total saved</p>
          <p className="text-3xl font-bold">GHS 2,450</p>
        </Card>
        <Card variant="tint">
          <p className="text-sm">Deposit — GHS 50</p>
        </Card>
        <Card>
          <p className="text-sm">Default card content</p>
        </Card>
      </section>
    </div>
  );
}