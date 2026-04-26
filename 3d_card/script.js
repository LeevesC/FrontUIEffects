document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const container = document.querySelector(".container");

  // Define card dimensions and boundaries
  let cardRect = card.getBoundingClientRect();
  let cardWidth = cardRect.width;
  let cardHeight = cardRect.height;

  // Define corners and their coordinates
  let corners = {
    topLeft: { x: cardRect.left, y: cardRect.top },
    topRight: { x: cardRect.right, y: cardRect.top },
    bottomLeft: { x: cardRect.left, y: cardRect.bottom },
    bottomRight: { x: cardRect.right, y: cardRect.bottom },
  };

  // Threshold distance for corner effect (px)
  const cornerEffectThreshold = 100;
  // Maximum rotation angle (degrees)
  const maxRotation = 15;
  // Maximum Z-transform (px)
  const maxZTransform = 10;

  // Update card dimensions on resize
  window.addEventListener("resize", () => {
    cardRect = card.getBoundingClientRect();
    cardWidth = cardRect.width;
    cardHeight = cardRect.height;

    // Update corner coordinates
    corners = {
      topLeft: { x: cardRect.left, y: cardRect.top },
      topRight: { x: cardRect.right, y: cardRect.top },
      bottomLeft: { x: cardRect.left, y: cardRect.bottom },
      bottomRight: { x: cardRect.right, y: cardRect.bottom },
    };
  });

  // Handle mouse movement
  container.addEventListener("mousemove", (e) => {
    // Get mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate distance to each corner
    const distances = {
      topLeft: Math.sqrt(
        Math.pow(mouseX - corners.topLeft.x, 2) +
          Math.pow(mouseY - corners.topLeft.y, 2)
      ),
      topRight: Math.sqrt(
        Math.pow(mouseX - corners.topRight.x, 2) +
          Math.pow(mouseY - corners.topRight.y, 2)
      ),
      bottomLeft: Math.sqrt(
        Math.pow(mouseX - corners.bottomLeft.x, 2) +
          Math.pow(mouseY - corners.bottomLeft.y, 2)
      ),
      bottomRight: Math.sqrt(
        Math.pow(mouseX - corners.bottomRight.x, 2) +
          Math.pow(mouseY - corners.bottomRight.y, 2)
      ),
    };

    // Find the closest corner
    let closestCorner = null;
    let minDistance = Infinity;

    for (const [corner, distance] of Object.entries(distances)) {
      if (distance < minDistance) {
        minDistance = distance;
        closestCorner = corner;
      }
    }

    // Apply transformation only if mouse is within threshold distance
    if (minDistance < cornerEffectThreshold) {
      // Calculate effect intensity (1 at center, 0 at threshold)
      const intensity = 1 - minDistance / cornerEffectThreshold;

      // Calculate rotations based on which corner is closest
      let rotateX = 0;
      let rotateY = 0;
      let translateZ = 0;

      switch (closestCorner) {
        case "topLeft":
          rotateX = intensity * maxRotation;
          rotateY = -intensity * maxRotation;
          translateZ = -intensity * maxZTransform;
          break;
        case "topRight":
          rotateX = intensity * maxRotation;
          rotateY = intensity * maxRotation;
          translateZ = -intensity * maxZTransform;
          break;
        case "bottomLeft":
          rotateX = -intensity * maxRotation;
          rotateY = -intensity * maxRotation;
          translateZ = -intensity * maxZTransform;
          break;
        case "bottomRight":
          rotateX = -intensity * maxRotation;
          rotateY = intensity * maxRotation;
          translateZ = -intensity * maxZTransform;
          break;
      }

      // Apply the transformation
      card.style.transform = `
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateZ(${translateZ}px)
            `;
    } else {
      // Reset to default position when mouse is far
      card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px)";
    }
  });

  // Reset card position when mouse leaves container
  container.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px)";
  });
});
