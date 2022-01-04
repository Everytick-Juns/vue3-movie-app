import axios from "axios";
import { fetchMovieTitle } from "./mock2";

describe('비동기 테스트', () => {
  test('영화 제목 변환', async () => {
    axios.get = jest.fn(() => {
      return new Promise(resolve => {
        resolve({
          data: {
            Title: 'Frozen II'
          }
        })
      })
    }) // 모의로 만들어진 axios.get

    const title = await fetchMovieTitle()
    expect(title).toBe('Frozen ii')
  })
})