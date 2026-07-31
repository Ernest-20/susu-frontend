import { useState, useMemo } from "react";
import Card from "../../components/Card";

// Sample transaction log. Later this will come from a real API call
// e.g. GET /transactions every deposit, credit request, and approval
// tied to the logged-in user's account.

const MOCK_TRANSACTIONS =[
    {id: 't1', type: "deposit", label: "Deposit", amount : 50, date: "2026-07-07", status: "done" },
    {id: 't2', type: "deposit", label: "Deposit", amount : 100, date: "2026-07-01", status: "done" },
    {id: 't3', type: "credit", label: "Credit request - Samsun 43-inc TV", amount : 4000, date: "2026-07-18", status: "pending" },
    {id: 't4', type: "deposit", label: "Deposit", amount : 80, date: "2026-07-08", status: "done" },
    {id: 't5', type: "credit", label: "Credit request - Sofa", amount : 5000, date: "2026-07-20", status: "repected" },
    {id: 't6', type: "deposit", label: "Deposit", amount : 50, date: "2026-07-21", status: "done" },
    {id: 't7', type: "credit", label: "Credit request - Microwave", amount : 500, date: "2026-07-28", status: "approved" },
];

// Fulter tabs shown at the top. "all" means no filtering.
const FILTERS =[
    {label:"ALL", value:"all" },
    {label: "Deposit", value: "deposit" },
    {label: "Credit request", value:"credit"},
];

// Maps each status to it bagde color classes, so we don't repeat
// this styling logic inline for every single transaction row.
const statusStyles = {
    done: "bg-brand-50 text-brand-700 border-brand-100",
    approved: "bg-brand-50 text-brand-700 border-brand-100",
    rejected: "bg-danger-100 text-danger-500 border-danger-500/30",
};

// Turn a raw date string like "2026-07-01" into something more
// readable, e.g. "jul 02, 2026".
function formatDate(dateString) {
  const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year:"numeric",
    });
}

export default function TransactionHistory() {
  // Which filter tab is currently active. Starts on "all".
  const [activeFilter, setActiveFilter] = useState("all");

  // useMemo recalculates the filtered + sorted list only when
  // activeFilter changes, rather than on every re-render.
  const visibleTransactions = useMemo(() => {
    // Step 1: keep only transactions matching the active filter type.
    const filtered = MOCK_TRANSACTIONS.filter(
      (tx) => activeFilter === "all" || tx.type === activeFilter
    );

    // Step 2: sort so the most recent transaction shows first.
    // .slice() makes a copy first so we don't mutate the original array.
    return filtered.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [activeFilter]);

  // Running total of all "done" deposits — a quick summary shown at the top.
  // This does NOT include pending/rejected credit requests, only completed deposits.
  const totalDeposited = useMemo(() => {
    return MOCK_TRANSACTIONS.filter((tx) => tx.type === "deposit" && tx.status === "done")
      .reduce((sum, tx) => sum + tx.amount, 0);
  }, []);

  return (
    <div className="min-h-screen bg-page pb-10">
      <header className="p-6 max-w-2xl mx-auto">
        <h1 className="text-xl mb-1">Transaction history</h1>
        <p className="text-sm text-ink-muted mb-4">
          Every deposit and credit request, all in one place.
        </p>

        {/* Quick summary card */}
        <Card variant="tint" className="mb-4">
          <p className="text-xs text-ink-muted mb-1">Total deposited</p>
          <p className="text-2xl font-bold text-ink">
            GHS {totalDeposited.toLocaleString()}
          </p>
        </Card>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`whitespace-nowrap rounded-pill border-2 px-4 py-2 text-sm font-semibold transition
                ${
                  activeFilter === filter.value
                    ? "border-ink bg-ink text-white"
                    : "border-line text-ink-muted hover:border-ink-strong"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 flex flex-col gap-2">
        {/* Empty state if the filter matches nothing (unlikely with mock data, but good practice) */}
        {visibleTransactions.length === 0 && (
          <Card className="text-center py-10">
            <p className="text-ink-muted">No transactions in this category yet.</p>
          </Card>
        )}

        {/* Loop over the filtered + sorted list and render one row per transaction */}
        {visibleTransactions.map((tx) => (
          <Card key={tx.id} className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm text-ink">{tx.label}</p>
              <p className="text-xs text-ink-muted">{formatDate(tx.date)}</p>
            </div>

            <div className="flex items-center gap-3">
              {/* Amount — deposits show in the default ink color,
                  credit requests show slightly muted since they're not "your" cash moving yet */}
              <span className="text-sm font-semibold text-ink">
                GHS {tx.amount.toLocaleString()}
              </span>

              {/* Status badge — color depends on tx.status via statusStyles */}
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-pill border capitalize ${statusStyles[tx.status]}`}
              >
                {tx.status}
              </span>
            </div>
          </Card>
        ))}
      </main>
    </div>
  );
}