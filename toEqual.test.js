const makeObj = (id, name) => {
  // return { id: id, name: name };
  return { id, name, age: undefined }; // 위의 축약형
};

test("toBe의 문제점 파악하기", () => {
  expect(makeObj("cielo", "송민선")).toStrictEqual({
    id: "cielo",
    name: "송민선",
  });
});
