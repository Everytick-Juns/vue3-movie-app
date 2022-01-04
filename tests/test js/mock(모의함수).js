import * as example from './mock1'

describe('비동기 테스트', () => {
  test('async/await', async () => {
    // 비동기인 asyncFn을 Done? 값으로 반환시켜 준다.
    // 모의 함수의 개념을 통해 테스트를 작동 시킨 코드.
    jest.spyOn(example, 'asyncFn')
      .mockResolvedValue('Done?')
    const res = await example.asyncFn()
    expect(res).toBe('Done?')


  })
})