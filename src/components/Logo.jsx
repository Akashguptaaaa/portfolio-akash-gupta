function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-svg"
    >
      {/* Background Circle */}
      <circle cx="20" cy="20" r="18" fill="#0f4db8" />
      
      {/* Letter A - Left */}
      <text
        x="12"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="bold"
        fill="#ffffff"
        textAnchor="middle"
      >
        A
      </text>
      
      {/* Letter A - Right */}
      <text
        x="28"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="bold"
        fill="#ffffff"
        textAnchor="middle"
      >
        A
      </text>
    </svg>
  );
}

export default Logo;
