import {asyncFn} from './mock2'


describe('비동기 테스트', () => {
  // 비동기 패턴1
  test('doen', (done) => {
    asyncFn().then(res => {
      expect(res).toBe('Done')
      done()
    })
    
  })
  // 비동기 패턴2
  test('then', () => {
    return asyncFn().then(res => {
      expect(res).toBe('Done')
    })
  })
  // 비동기 패턴3
  test('resolves', () => expect(asyncFn()).resolves.toBe('Done'))
  
  // 비동기 패턴4 -> 가장 직관적이다.
  test('async/await', async () => {
    const res = await asyncFn()
    expect(res).toBe('Done')
  }, 7000) // 여기서 7000(3번째 인자)는 7초 기다리게 하는 인자.
})
