// import React, { useRef, useEffect } from 'react';

// const LineWithPoints = ({ numPoints, triangleIndex }) => {
//   const lineRef = useRef(null);

//   useEffect(() => {
//     const line = lineRef.current;
//     const length = line.getTotalLength();
//     const interval = length / (numPoints - 1);

//     for (let i = 0; i < numPoints; i++) {
//       const point = line.getPointAtLength(i * interval);
//       const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//       circle.setAttribute('cx', point.x);
//       circle.setAttribute('cy', point.y);
//       circle.setAttribute('r', 0.5);
//       circle.classList.add('circle');

//       if (i === triangleIndex) {
//         const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
//         triangle.setAttribute('points', `${point.x},${point.y -2} ${point.x + 2},${point.y - 5} ${point.x - 2},${point.y - 5}`);
//         triangle.classList.add('triangle');
//         line.parentNode.appendChild(triangle);
//       }

//       line.parentNode.appendChild(circle);
//     }
//   }, [numPoints, triangleIndex]);

//   return (
//     <svg viewBox="0 0 100 100">
//       <path ref={lineRef} d="M 10 50 L 90 50" stroke="black" stroke-width="0.5" fill="none" />
//     </svg>
//   );
// };

// export default LineWithPoints;
import React, { useRef, useEffect } from 'react';

const LineWithPoints = ({ numPoints, triangleIndex } : {numPoints : any, triangleIndex : number}) => {
  const lineRef = useRef(null);

  useEffect(() => {
    const line : any = lineRef.current;
    const length : any = line.getTotalLength();
    const interval : any = length / (numPoints - 1);

    for (let i = 0; i < numPoints; i++) {
      const point = line.getPointAtLength(i * interval);
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', point.x);
      circle.setAttribute('cy', point.y);
      circle.setAttribute('r', '0.5');
      if (i === triangleIndex) {
        circle.setAttribute('fill', 'yellow');
        circle.setAttribute('stroke', 'none');
      }
      circle.classList.add('circle');

      if (i === triangleIndex) {
        const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        triangle.setAttribute('points', `${point.x},${point.y - 1} ${point.x + 0.8},${point.y - 2.5} ${point.x - 0.8},${point.y - 2.5}`);
        triangle.setAttribute('stroke', 'green');
        triangle.setAttribute('stroke-width', '0.1');
        triangle.setAttribute('fill', 'none');
        triangle.classList.add('triangle');
        line.parentNode.appendChild(triangle);
      }

      line.parentNode.appendChild(circle);
    }
  }, [numPoints, triangleIndex]);

  return (
    <svg viewBox="0 0 100 10">
      <path ref={lineRef} d="M 10 5 L 90 5" stroke="black" strokeWidth="0.2" fill="none" />
    </svg>
  );
};

export default LineWithPoints;
