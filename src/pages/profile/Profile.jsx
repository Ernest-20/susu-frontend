import Card from "../../components/Card";
import Button from "../../components/Button";

// Maps each verification status to badge styling and readable text.
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

// A single row in the settings list. Keeping this as its own small
// component avoids repeating the same className string 4 times below,
// and makes it easy to add an icon or change the style in ONE place later.
function SettingsRow({ label, danger = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between text-left px-4 py-3.5 text-sm
        border-b border-line last:border-b-0
        hover:bg-page transition
        ${danger ? "text-danger-500" : "text-ink"}`}
    >
      <span>{label}</span>
      {/* Simple chevron to hint these rows are tappable/navigable */}
      <span className="text-ink-muted">›</span>
    </button>
  );
}

export default function Profile() {
  // MOCK DATA — later this comes from the logged-in user's account data
  // (or from useAuthStore once we wire that in).
  const user = {
    fullName: "Ernest Acquah",
    phone: "+233 XX XXX XXXX",
    accountType: "Individual",
    verificationStatus: "unverified",
  };

  const statusInfo = verificationStyles[user.verificationStatus];

  return (
    <div className="min-h-screen bg-page pb-24">
      <header className="p-6 max-w-2xl mx-auto">
        <h1 className="text-xl">Profile</h1>
      </header>

      <main className="max-w-2xl mx-auto px-6 flex flex-col gap-4">
        {/* Basic account info card */}
        <Card className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-700 font-semibold flex items-center justify-center flex-shrink-0">
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

        {/* Verification status card */}
        <Card className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-ink mb-1.5">
              Identity verification
            </p>
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-pill border ${statusInfo.classes}`}
            >
              {statusInfo.label}
            </span>
          </div>
          {user.verificationStatus !== "verified" && (
            <a href="/kyc" className="flex-shrink-0">
              <Button variant="outline" size="sm">
                {user.verificationStatus === "pending" ? "View status" : "Complete now"}
              </Button>
            </a>
          )}
        </Card>

        {/*
          Settings list — using the SettingsRow component above.
          Padding is set to 0 on the Card itself since each row provides
          its own internal padding, keeping the borders flush edge-to-edge.
        */}
        <Card className="p-0 overflow-hidden">
          <SettingsRow label="Edit profile details" onClick={() => console.log("Edit profile")} />
          <SettingsRow label="Notification preferences" onClick={() => console.log("Notifications")} />
          <SettingsRow label="Change password" onClick={() => console.log("Change password")} />
          <SettingsRow label="Log out" danger onClick={() => console.log("Log out")} />
        </Card>
      </main>
    </div>
  );
}