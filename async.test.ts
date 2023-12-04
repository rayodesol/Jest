const getNameAsync = (id: string): Promise<string> => {
  const name = "송민선";
  return new Promise<string>((res, rej) => {
    // res, rej 는 순서만 맞춰주면 됨. 이름은 맘대로.
    setTimeout(() => {
      if (id === "cielo") {
        console.log("정상 케이스");
        res(name);
      } else {
        console.log("에러 케이스");
        rej(new Error("id가 다릅니다!"));
      }
    }, 2000);
  });
};

test("2초 후에 이름을 async/await 로 받는 함수 테스트", async () => {
  try {
    const result: any = await getNameAsync("c");
    expect(result).toBe("송민선");
  } catch (err) {
    expect(err.message).toBe("id가 다릅니다!");
  }
});
