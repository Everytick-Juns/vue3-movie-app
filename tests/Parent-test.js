import { shallowMount } from '@vue/test-utils'
import Parent from "./Parent"

// shallowMount는 단위 테스트에서 최적화된 방법이다.
// 하나의 단위로만 테스트 할 수 있기 때문이다.
test('Mount', () => {
  const wrapper = shallowMount(Parent)
  expect(wrapper.html()).toBe('')
})