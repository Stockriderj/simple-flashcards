export default function Button({ children, className, ...rest }) {
  return (
    <button {...rest} className={`button ${className}`} >
      {children}
    </button >
  );
}
