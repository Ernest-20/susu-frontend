import { useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";

// --- Mock Data ---
// This is sample data standing in for what will later come from the backend.
// Each object represents one pending credit request from a group member.

const MOCK_REQUESTS = [
  {
    id: "r1",
    memberName: "David A.",
    memberInitials: "DA",
    creditScore: 64,
    item: "43-inch TV",
    amount: 4500,
    shop: "TechMart",
  },
  {
    id: "r2",
    memberName: "Rafui G.",
    memberInitials: "RG",
    creditScore: 75,
    item: "Refrigerator",
    amount: 3000,
  },
];

// Simple rule thumb for this UI: a score of 70+ shows as "good", below that as "low".

function getScoreLevel(score) {
  return score >= 70 ? "good" : "low";
}

// Tailwind classes for each score level.
const scoreStyles = {
  good: "bg-brand-50 text-brand-700 border-brand-100",
  low: "bg-warn-100 text-warn-500 border-warn-500/30",
};

export default function AdminApproval() {
  // useState holds the list of requests in this component only
  // When we approve/reject, we update this local list so the UI reflects the change
  // immediately. Later, this will instead call the backend API and refresh from there.
  const [requests, setRequests] = useState(MOCK_REQUESTS);

  // Called when admin clicks "Approve" on a specific request.
  // Now it just removes that request from the local list (simulating "handled")
  // Replace with a real API call, e.g. PATCH /credit-request/:id {status: "approved"}
  const handleApprove = (requestId) => {
    console.log("Approved request:", requestId);
    setRequests((prev) => prev.filter((r) => r.id !== requestId));
  };

  // same idea, but for rejecting a request.
  // Replace with a real API call, e.g. PATCH /credit-request/:id {status: "Rejected"}
  const handleReject = (requestId) => {
    console.log("Rejected request:", requestId);
    setRequests((prev) => prev.filter((r) => r.id !== requestId));
  };

  return (
    <div className="min-h-screen bg-page pb-10">
      {/* Page header */}
      <header className="p-6 max-w-2xl mx-auto">
        <h1 className="text-xl mb-1">Credit approvals</h1>
        <p className="text-sm text-ink-muted">
          Review pending purchase request from your group members.
        </p>
      </header>

      <main className="max-w-2xl mx-auto px-6 flex flex-col gap-4">
        {requests.length === 0 && (
          <Card className="text-center py-10">
            <p className="text-ink-muted">No pending requests right now 🎉</p>
          </Card>
        )}

        {requests.map((request) => {
          const scoreLevel = getScoreLevel(request.creditScore);

          return (
            <Card key={request.id} className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold flex items-center justify-center">
                    {request.memberInitials}
                  </div>
                  <p className="text-sm font-semibold text-ink">{request.memberName}</p>
                </div>

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-pill border ${scoreStyles[scoreLevel]}`}
                >
                  Score: {request.creditScore}
                </span>
              </div>

              <div className="bg-page rounded-md px-3 py-2 border border-line">
                <p className="text-sm text-ink">
                  {request.item} - GHS {request.amount.toLocaleString()}
                </p>
                <p className="text-xs text-ink-muted">{request.shop}</p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleReject(request.id)}
                >
                  Reject
                </Button>
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={() => handleApprove(request.id)}
                >
                  Approve
                </Button>
              </div>
            </Card>
          );
        })}
      </main>
    </div>
  );
}
