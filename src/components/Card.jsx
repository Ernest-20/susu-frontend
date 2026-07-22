export default function Card({
  children,
  variant = "default",
  className = "",
  ...props
}) {
    const variants = {
        default: "bg-white border border-line shadow-card",
        solid: "bg-ink text-white",
        tint: "bg-brand-50 border border-brand-100",
    };

    return (
        <div
        classname={`round-lg p-4 ${variants[variant]} ${className}`}
        {...props}
        >
            {children}
        </div>
    )
}