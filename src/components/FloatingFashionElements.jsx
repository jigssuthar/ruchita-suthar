function FloatingFashionElements() {
  return (
    <svg className="fashion-elements" viewBox="0 0 1440 900" preserveAspectRatio="none">
      <g className="fashion-element fashion-element-one">
        <path d="M116 150 C134 122 172 122 190 150 L180 244 L126 244 Z" />
        <path d="M126 244 L110 306 M180 244 L196 306 M126 192 L180 192" />
      </g>
      <g className="fashion-element fashion-element-two">
        <path d="M1180 120 C1232 170 1232 220 1180 270" />
        <path d="M1180 120 C1128 170 1128 220 1180 270" />
        <circle cx="1180" cy="120" r="7" />
        <circle cx="1180" cy="270" r="7" />
      </g>
      <g className="fashion-element fashion-element-three">
        <path d="M310 620 C350 570 410 570 450 620 C410 670 350 670 310 620 Z" />
        <path d="M330 596 L430 644 M430 596 L330 644" />
      </g>
      <g className="fashion-element fashion-element-four">
        <path d="M1050 610 L1110 490 L1170 610" />
        <path d="M1070 570 L1150 570 M1090 530 L1130 530" />
      </g>
      <path className="thread-line" d="M80 420 C260 300 390 480 540 380 S820 250 1010 390 S1250 520 1390 400" />
      <path className="measurement-line" d="M102 770 H270 M102 762 V778 M270 762 V778" />
      <path className="measurement-line measurement-line-vertical" d="M1320 460 V610 M1312 460 H1328 M1312 610 H1328" />
    </svg>
  );
}

export default FloatingFashionElements;
