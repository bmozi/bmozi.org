const threads = [
  {
    className: "community-thread community-thread-a",
    color: "56,224,204",
    path: "M -80 210 C 120 110 270 350 470 230 S 760 165 940 275 1230 85 1520 245",
    nodes: [
      [48, 232],
      [268, 195],
      [488, 248],
      [708, 204],
      [928, 216],
      [1148, 170],
      [1368, 197],
    ],
  },
  {
    className: "community-thread community-thread-b",
    color: "255,207,90",
    path: "M -100 390 C 70 245 240 305 390 430 S 690 340 835 420 1060 318 1200 386 1360 462 1540 332",
    nodes: [
      [88, 354],
      [288, 384],
      [528, 432],
      [748, 386],
      [968, 388],
      [1188, 402],
      [1408, 384],
    ],
  },
  {
    className: "community-thread community-thread-c",
    color: "255,111,97",
    path: "M -90 505 C 110 430 250 520 430 492 S 710 438 880 520 C 1035 594 1325 500 1530 540",
    nodes: [
      [130, 462],
      [350, 512],
      [570, 480],
      [790, 492],
      [1010, 552],
      [1230, 544],
    ],
  },
  {
    className: "community-thread community-thread-d",
    color: "139,102,255",
    path: "M -110 655 C 120 772 285 570 470 675 S 780 735 930 615 C 1120 615 1265 750 1540 650",
    nodes: [
      [92, 708],
      [312, 646],
      [532, 688],
      [752, 706],
      [972, 626],
      [1192, 664],
      [1412, 686],
    ],
  },
  {
    className: "community-thread community-thread-e",
    color: "243,245,234",
    path: "M -100 775 C 155 860 310 735 515 808 S 810 910 1015 805 1220 725 1540 760",
    nodes: [
      [212, 806],
      [432, 782],
      [652, 828],
      [872, 850],
      [1092, 778],
      [1312, 742],
    ],
  },
];

export function CommunityField() {
  return (
    <svg
      aria-hidden="true"
      className="community-field absolute inset-0 h-full w-full opacity-95"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >
      <rect width="1440" height="900" fill="rgba(10,11,15,0.83)" />
      <g opacity="0.36">
        {Array.from({ length: 21 }).map((_, index) => (
          <line
            key={index}
            x1={index * 72}
            y1="0"
            x2={index * 72}
            y2="900"
            stroke="rgba(243,245,234,0.09)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>
      {threads.map((thread, index) => (
        <g key={thread.path} className={thread.className}>
          <path
            d={thread.path}
            fill="none"
            stroke={`rgba(${thread.color}, ${index === 1 ? 0.35 : 0.26})`}
            strokeWidth={index === 1 ? 2 : 1.25}
            vectorEffect="non-scaling-stroke"
          />
          {thread.nodes.map(([cx, cy]) => (
            <rect
              key={`${cx}-${cy}`}
              x={cx - 2.5}
              y={cy - 2.5}
              width="5"
              height="5"
              fill={`rgba(${thread.color}, 0.66)`}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
