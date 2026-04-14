// V Pattern - Multiple Approaches

// Approach 1: Console Output (ASCII V)
function printVPattern(size) {
    console.log("=== V Pattern (ASCII) ===");
    for (let i = 0; i < size; i++) {
        let spaces = ' '.repeat(i);
        let middleSpaces = ' '.repeat(size * 2 - 2 * i - 2);
        console.log(spaces + '*' + middleSpaces + '*');
    }
}

// Approach 2: String-based V Pattern
function getVPatternString(size) {
    let result = '';
    for (let i = 0; i < size; i++) {
        let spaces = ' '.repeat(i);
        let middleSpaces = ' '.repeat(size * 2 - 2 * i - 2);
        result += spaces + '*' + middleSpaces + '*' + '\n';
    }
    return result;
}

// Approach 3: Using numbers instead of asterisks
function printVPatternWithNumbers(size) {
    console.log("=== V Pattern (Numbers) ===");
    for (let i = 0; i < size; i++) {
        let spaces = ' '.repeat(i);
        let middleSpaces = ' '.repeat(size * 2 - 2 * i - 2);
        console.log(spaces + i + middleSpaces + i);
    }
}

// Approach 4: HTML Canvas V Pattern
function drawVPatternCanvas(canvasId, height = 400, width = 400) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    
    // Draw V shape
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(width / 2, height - 50);
    ctx.lineTo(width - 50, 50);
    ctx.stroke();
}

// Approach 5: SVG V Pattern
function drawVPatternSVG(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '300');
    svg.setAttribute('height', '300');
    
    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline.setAttribute('points', '50,50 150,250 250,50');
    polyline.setAttribute('stroke', 'red');
    polyline.setAttribute('stroke-width', '2');
    polyline.setAttribute('fill', 'none');
    
    svg.appendChild(polyline);
    container.appendChild(svg);
}

// Test Cases
console.log("Size 5:");
printVPattern(5);

console.log("\nSize 7:");
printVPattern(7);

console.log("\nV Pattern with Numbers (Size 6):");
printVPatternWithNumbers(6);

console.log("\nV Pattern String Output:");
console.log(getVPatternString(5));
