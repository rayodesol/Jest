const getNamePromise = (): Promise<string> => {
  const name = "Cielo";
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 2) % 2 === 0) {
        console.log("정상 케이스");
        resolve(name);
      } else {
        console.log("에러 케이스");
        reject(new Error("에러"));
      }
    }, 2000);
  });
};

test("2초 후에 이름을 받아오는 프로미스 함수 테스트", () => {
  return getNamePromise()
    .then((name: string) => {
      expect(name).toBe("Cielo");
    })
    .catch((err) => {
      expect(err.message).toBe("에러");
    });
});
