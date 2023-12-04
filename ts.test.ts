// ts적으로 문제 없는 코드
const sum = (a: number, b: number): number => {
  return a + b;
};

test("타입 스크립트 함수 테스트하기", () => {
  expect(sum(1, 2)).toBe(3);
});
