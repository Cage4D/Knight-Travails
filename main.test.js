import { knightMoves } from "./main";

test("Knight Moves", () => {
    expect(knightMoves([[0, 0], [1, 2]])).toBe([[0, 0], [1, 2]])
    expect([[[0, 0], [2, 1], [3, 3]], [[0, 0], [1, 2], [3, 3]]]).toContainEqual(knightMoves([[0, 0], [3, 3]]))
})