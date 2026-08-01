import Card from "../../components/Card";


// Sample notification log. later will come from a real API call
// e.g. GET /notifications - triggered by real events like deposits
// approvals, or reminders.

const MOCK_NOTIFICATIONS = [
    {
        id: "n1",
        title: "Deposit received",
        message: " Your deposit of GHS 100  dialy is successful!",
        date: "2026-08-01",
        read: true,
    },
    {
        id: "n2",
        title: "Credit request approved",
        message: "Your credit of Samsang 43-inch TV has been approved by your group admin.",
        date: "1 day ago",
        read: false,
    },
    {
        id: "n3",
        title: "Reminder",
        message: "Your next dialy deposit of GHS 100 is due tommorrow. Please make sure to deposit on time",
        date: "1 day ago",
        read: false,
    },
];

export default function Notifications() {
    return (
        <div className="min-h-screen bg-page pb-10">
            <header className="p-6 max-w-2xl mx-auto">
                <h1 className="text-xl">Notifications</h1>
            </header>

              <main className="max-w-2xl mx-auto px-6 flex flex-col gap-2">
                {MOCK_NOTIFICATIONS.map((note) => (
                    <Card
                        key={note.id}
                        // Unread notifications get a subtle tinted background so they stand out.
                        // Read ones use the plain default card style.
                        variant={note.read ? "default" : "tint"}
                        className="flex gap-3"
                    >
                      {/* Small dot indicator - only shows for unread notifications */}
                      {!note.read && (
                        <span className="w-2 h-2 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" />
                       )}
                       <div className={note.read ? "m-1.5" : ""}>
                         <p className="text-sm font-semibold text-ink">{note.title}</p>
                          <p className="text-xs text-ink-muted">{note.message}</p>
                           <p className="text-xs text-ink-muted mt-1">{note.date}</p>
                        </div>
                    </Card>
                ))}
              </main>
        </div>
    );
}