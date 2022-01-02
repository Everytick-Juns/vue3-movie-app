exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Juns',
      age: 85,
      email: 'everytick_js@everytick.co.kr'
    })
  }
}