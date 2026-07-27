import Card from "../../components/Card";
import Button from "../../components/Button";

const activity = [
    { id: 1, label: "Deposit - GHS 20", status: "done", date: "Jul 6" },
    { id: 2, label: "Deposit - GHS 200", status: "done", date: "Jul 7" },
    { id: 3, label: "Credit request - Samsung Television 43-inch", status: "pending", date: "Jul 24" },
];

const statusStyles = {
    done: "bg-brand-50 text-brand-700 border-brand-100",
    pending: "bg-warn-100 text-warn-500 border-warn-500/30",
};

export default function Dashboard() {
    const user = { firstName: "Ernest" };
    const totalSaved = 2450;
    const planLabel = "Daily";
    const streak = 10;

    return (
        <div className="min-h-screen bg-page">
            <header className="flex items-center justify-between p-6 max-w-2xl mx-auto">
                <h1 className="text-xl">Hi, {user.firstName}</h1>
                <button
                  aria-label="Notifications"
                  className="w-9 h-9 rounded-full border border-line flex items-center justify-center"
                >
                  🔔
                </button>
            </header>

            <main className="max-w-2xl lg:max-w-3xl mx-auto px-6 md:px-8 pb-10 flex flex-col gap-6">
                {/* Balance card */}
                <Card variant="solid">
                    <p className="text-xs uppercase text-white/60 mb-1">Total saved</p>
                    <p className="text-3xl font-bold mb-3">
                        GHS {totalSaved.toLocaleString()}
                    </p>
                    <div className="flex justify-between text-sm text-white/70">
                      <span>Plan: {planLabel}</span>
                      <span>Streak: {streak} dys</span>
                    </div>
                </Card>

                {/* Quick actions */}
                <div className="flex gap-3 md:max-w-xs">
                    <Button variant="outline" className="flex-1">
                        + Add funds
                    </Button>
                    <Button variant="outline" className="flex-1">
                        New plan
                    </Button>
                </div>

                {/* Recent activity */}
                <div>
                    <p className="label-caption mb-3">Recent activity</p>
                    <div className="flex flex-col gap-2">
                        {activity.map((item) => (
                            <Card key={item.id} className="flex items-center justify-between py-3">
                                <div>
                                    <p className="text-sm text-ink">{item.label}</p>
                                    <p className="text-xs text-ink-muted">{item.date}</p>
                                </div>
                                <span
                                  className={`text-xs font-semibold px-3 py-1 rounded-pill border capitalize ${statusStyles[item.status]}`}
                                >
                                    {item.status}
                                </span>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            {/* Bottom tab bar */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-line">
                <div className="max-w-2xl mx-auto flex justify-around py-3 text-xs text-ink-muted">
                    <span className="text-ink font-semibold">Home</span>
                    <span>Savings</span>
                    <span>Groups</span>
                    <span>Shops</span>
                    <span>Profile</span>
                </div>
            </nav>
        </div>
    );
}