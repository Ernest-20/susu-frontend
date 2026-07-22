export default function toggle({ options, value,onChange, className = "" }) {
    return (
        <div className={`flex gap-2 ${className}`} role="group">
            {options.map((opt) => {
                const isActive = opt.value ===value;
                return (
                    <button
                        key={opt.value}
                        type="button"
                        onClick={() => onChange(opt.value)}
                        aria-pressed={isActive}
                        className={`flex-1 rounded-pill border-2 py-2 text-sm font-semibold transition
                            ${
                                isActive
                                ? "border-ink bg-ink text-white"
                                : "border-line text-ink-muted hover:border-ink-strong"
                            }`}
                          >
                            {opt.label}
                          </button>
                );
            })}
        </div>
    );
}