function FloatingFashionElements() {
  return (
    <svg className="fashion-elements" viewBox="0 0 1440 900" preserveAspectRatio="none">
      <path className="ribbon ribbon-one" d="M-80 170 C210 20 350 320 620 170 S1030 30 1530 220" />
      <path className="ribbon ribbon-two" d="M-100 700 C220 520 390 820 700 650 S1120 500 1540 700" />
      <path className="thread-line" d="M0 420 C260 280 430 510 690 350 S1080 220 1500 440" />
      <path className="thread-line thread-line-secondary" d="M-20 430 C250 290 440 520 700 360 S1090 230 1520 450" />
      <g className="floating-dots">
        <circle className="fashion-dot dot-one" cx="190" cy="210" r="5" />
        <circle className="fashion-dot dot-two" cx="770" cy="150" r="4" />
        <circle className="fashion-dot dot-three" cx="1180" cy="610" r="6" />
        <circle className="fashion-dot dot-four" cx="430" cy="730" r="3" />
      </g>
    </svg>
  );
}

export default FloatingFashionElements;
