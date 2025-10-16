export function knightMoves(start, end) {
    const directions = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

    const queue = [];
    const visited = new Set();

    queue.push({ position: start, path: [start] });
    visited.add(start.toString());

    while (queue.length > 0) {
        const current = queue.shift();
        const [x, y] = current.position;

        if (x === end[0] && y === end[1]) {
            console.log(`You made it in ${current.path.length - 1} moves! Here's your path:`);
            current.path.forEach(pos => console.log(pos));
            return current.path;
        }

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (isValid(newX, newY) && !visited.has([newX, newY].toString())) {
                visited.add([newX, newY].toString());
                queue.push({
                    position: [newX, newY],
                    path: [...current.path, [newX, newY]]
                });
            }
        }
    }

    return [];
}
