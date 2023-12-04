interface User {
  email: string;
  name: string;
  age: number;
}

const user: User[] = [
  { email: "cielo576@naver.com", name: "송민선", age: 29 },
  { email: "faker@naver.com", name: "이상혁", age: 26 },
  { email: "oner@naver.com", name: "문현준", age: 20 },
  { email: "keria@naver.com", name: "류민석", age: 20 },
];

// 전체 회원의 리스트를 반환하는 함수
const getAllUsers = (): User[] => {
  return user;
};

// 특정 회원 중 특정 나이 이상의 회원의 수를 구하는 함수
const getCountsOverAge = (age: number): number => {
  const resultArr: User[] = user.filter((el: User) => el.age > age);
  return resultArr.length;
};

// 특정 회원 중, 특정 이름을 가지는 회원의 email 을 찾아주는 함수
const getEmailByUser = (name: string): string => {
  // union 타입 - 못 찾았을 때는 undefined 값으로
  // indexOf ; 못 찾으면 -1 리턴됨
  const findUser: User | undefined = user.find(
    (el: User) => el.name.indexOf(name) !== -1
  );
  if (findUser) return findUser.email;
  return "해당 이름을 가진 회원을 찾을 수 없습니다!";
};

// 특정 배열의 길이를 테스트하는 Matchers
test("전체 회원의 수는 4명인가?", () => {
  expect(getAllUsers()).toHaveLength(4);
});

// 특정 배열 값에서 원하는 배열이 존재 하는지 확인하는 Matchers
test("전체 회원 중, cielo 라는 회원이 존재 하는가?", () => {
  expect(getAllUsers()).toContainEqual({
    email: "cielo576@naver.com",
    name: "송민선",
    age: 29,
  });
});

// 숫자 비교 Matchers
test("25살 이상인 회원은 2명 이상인가?", () => {
  expect(getCountsOverAge(25)).toBeGreaterThanOrEqual(2);
  // expect(getCountsOverAge(25)).toBeLessThan(10);
});

// 정규식 Matchers
test("특정 이름을 가진 회원의 email 은 양식을 따르는가?", () => {
  expect(getEmailByUser("송민선")).toMatch(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/
  );
});
