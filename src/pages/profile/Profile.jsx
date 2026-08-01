import Card from "../../components/Card";
import Button from "../../components/Button";

// Maps each verification status to badge styling and readable text.
// "unverified" = user hasn't started KYC yet
// "pending" = documents submitted, awaiting review
// "verified" = fully approved
const verificationStyles = {
  unverified: {
    classes: "bg-page text-ink-muted border-line",
    label: "Not verified",
  },
  pending: {
    classes: "bg-warn-100 text-warn-500 border-warn-500/30",
    label: "Verification pending",
  },
  verified: {
    classes: "bg-brand-50 text-brand-700 border-brand-100",
    label: "Verified",
  },
};

export default function Profile() {
  // MOCK DATA — later this comes from the logged-in user's account data.
  const user = {
    fullName: "Ernest Acquah",
    phone: "+233 XX XXX XXXX",
    accountType: "Individual",
    verificationStatus: "unverified", // try changing to "pending" or "verified" to see the badge change
  };

  const statusInfo = verificationStyles[user.verificationStatus];

  return (
    <div className="min-h-screen bg-page pb-10">
      <header className="p-6 max-w-2xl mx-auto">
        <h1 className="text-xl">Profile</h1>
      </header>

      <main className="max-w-2xl mx-auto px-6 flex flex-col gap-4">
        {/* Basic account info card */}
        <Card className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-700 font-semibold flex items-center justify-center">
              {/* Simple initials avatar, built from the first letters of each word in the name */}
              {user.fullName
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>
            <div>
              <p className="font-semibold text-ink">{user.fullName}</p>
              <p className="text-sm text-ink-muted">{user.phone}</p>
            </div>
          </div>

          <div className="flex justify-between text-sm border-t border-line pt-3">
            <span className="text-ink-muted">Account type</span>
            <span className="text-ink font-medium">{user.accountType}</span>
          </div>
        </Card>

        {/* Verification status card — links out to the KYC screen */}
        <Card className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-ink mb-1">Identity verification</p>
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-pill border ${statusInfo.classes}`}
            >
              {statusInfo.label}
            </span>
          </div>
          {/* Only show the "Complete" button if not yet verified */}
          {user.verificationStatus !== "verified" && (
            <a href="/kyc">
              <Button variant="outline" size="sm">
                {user.verificationStatus === "pending" ? "View status" : "Complete now"}
              </Button>
            </a>
          )}
        </Card>

        {/* Settings list — placeholders for now, each would open its own screen later */}
        <Card className="flex flex-col divide-y divide-line">
          <button className="text-left py-3 text-sm text-ink first:pt-0">
            Edit profile details
          </button>
          <button className="text-left py-3 text-sm text-ink">
            Notification preferences
          </button>
          <button className="text-left py-3 text-sm text-ink">
            Change password
          </button>
          <button className="text-left py-3 text-sm text-danger-500 last:pb-0">
            Log out
          </button>
        </Card>
      </main>
    </div>
  );
}