export default function button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) {
    const base =
    "inline-flex items-center justify-center font-semibold rounded-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-ink text-white hover:bg-ink-soft",
        outline:"border-2 border-ink text-ink hover:bg-ink hover:text-white",
        ghost: "text-ink hover:bg-line/20",
        danger: "bg-danger-500 text-white hover: opacity-90",
    };

    const sizes = {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2.5",
        lg: "text-lg px-6 py-3",
    };

     return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}