const sum = require("./func");

test("1 더하기 2를 리턴하는 함수 sum 은 잘 작동하는가?", () => {
  expect(sum(1, 2)).toBe(3); // sum(1, 2) 의 기댓값은 3
});

test("변수의 얕은 비교는 테스트가 되나요?", () => {
  const str = "테스트";
  expect(str + " 가능?").toBe("테스트 가능!");
});
