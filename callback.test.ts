// 함수 정의 부분
// 함수를 인자로 받음
// const getNameCB = (callback: (str: string) => void): void => {
//   const name: string = "Cielo";
//   setTimeout(() => {
//     callback(name);
//   }, 2000); // 2초 후 실행
// };

const getNameCB = (callback: (str: string) => void): void => {
  const name: string = "Cielo";
  setTimeout(() => {
    try {
      if (Math.floor(Math.random() * 2) % 2 === 0) {
        console.log("정상 케이스");
        callback(name);
      } else {
        console.log("에러 케이스");
        throw new Error("에러");
      }
    } catch (error) {
      callback(error);
    }
  }, 2000); // 2초 후 실행
};

// 콜백의 인자로서 에러를 넣져줘야

test("2초 뒤에 이름을 받아오는 콜백 함수 테스트", (done) => {
  // 콜백에 넣어줄 함수 정의
  function callback(data: any): void {
    try {
      // 에러가 들어오는지 확인
      if (data instanceof Error) {
        // 데이터가 에러의 객체 형태로 이루어졌는지 확인
        expect(data.message).toBe("에러");
      } else {
        expect(data).toBe("Cielo");
      }
      done(); // 콜백 시간을 기다려줘야
    } catch (error) {
      done(error);
    }
  }

  getNameCB(callback);
});

// test("2초 뒤에 이름을 받아오는 콜백 함수 테스트", (done) => {
//   // 콜백에 넣어줄 함수 정의
//   function callback(name: string): void {
//     expect(name).toBe("Cielo");
//     done(); // 콜백을 기다리는
//   }

//   getNameCB(callback);
// });
