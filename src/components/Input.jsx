export default function input({ label, error, id, className = "", ...props })  {
const inputId = id || label?.toLowerCase().replace(/\s+/g, "-")

return (
     <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="label-caption">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full rounded-md border px-3 py-2.5 text-base text-ink placeholder:text-ink-muted
          focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500
          ${error ? "border-danger-500" : "border-line"} ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-danger-500">{error}</p>}
    </div>
  );
}