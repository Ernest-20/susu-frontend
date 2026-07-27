import { useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";

const MOCK_GROUPS = [
  { id: "g1", name: "Area Susu ", total:18940,members:10 },
  { id: "g2", name: "Market Women Susu", total: 9400, members: 9},
];

const MOCK_MEMBERS = [
  { id: "m1", name: "Ernest A.", initials: "EA", creditScore: 82 },
  { id: "m2", name: "David A.", initals: "EA", creditScore: 65 },
  { id: "m3", name: "Rafui G.", initials: "RG", creditScore: 74 },
];

export default function GroupDashboard() {
  const [activeGroupId, setActiveGroupId] = useState(MOCK_GROUPS[0].id);
  const activeGroup = MOCK_GROUPS.find((g) => g.id === activeGroupId);

  return (
    <div className="min-h-screen bg-page pb-20">
      <header className="p-6 max-w-2xl mx-auto">
        <h1 className="text-xl mb-4">Your groups</h1>

        {/* Group switcher */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {MOCK_GROUPS.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveGroupId(group.id)}
              className={`whitespace-nowrap rounded-pill border-2 px-4 py-2 text-sm font-semibold transition
                ${
                  group.id === activeGroupId
                    ? "border-ink bg-ink text-white"
                    : "border-line text-ink-muted hover:border-ink-strong"
                }`}
            >
              {group.name}
            </button>
          ))}
          <button
            className="whitespace-nowrap rounded-pill border-2 border-dashed border-line px-4 py-2 text-sm font-semibold text-ink-muted hover:border-ink-strong"
          >
            + New group
          </button>
        </div>
      </header>

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-6 md:px-8 flex flex-col gap-6">
        {/* Group balance */}
        <Card variant="solid">
          <p className="text-xs uppercase text-white/60 mb-1">
            {activeGroup.name} — group total
          </p>
          <p className="text-3xl font-bold mb-1">
            GHS {activeGroup.total.toLocaleString()}
          </p>
          <p className="text-sm text-white/70">{activeGroup.members} members</p>
        </Card>

        {/* Members list */}
        <div>
          <p className="label-caption mb-3">Members</p>
          <div className="flex flex-col gap-2 md:grid md:grid-col-2 md:gap-3">
            {MOCK_MEMBERS.map((member) => (
              <Card
                key={member.id}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold flex items-center justify-center">
                    {member.initials}
                  </div>
                  <p className="text-sm text-ink">{member.name}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-pill border border-line text-ink-muted">
                  Score: {member.creditScore}
                </span>
              </Card>
            ))}
          </div>
        </div>

        <Button variant="outline">+ Add member</Button>
      </main>
    </div>
  );
}