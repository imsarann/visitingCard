export default function Card() {
  return (
    <svg
      width="300"
      height="400"
      viewBox="0 0 300 400"
      xmlns="http://www.w3.org/2000/svg"
      className="shadow-xl"
    >
      <path
        d="
          M10,0
          Q0,0 0,50
          H120
          Q100,0 130,0
          H280
          Q300,0 300,20
          V380
          Q300,400 280,400
          H20
          Q0,400 0,380
          V20
          Q0,0 20,0
          Z
        "
        fill="#6a5c58"
      />
    </svg>
  );
}
