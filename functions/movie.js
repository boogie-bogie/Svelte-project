// axios 모듈 가져오는데, 이제 node.js 환경이기 때문에 import가 아닌 require()를 써야한다.
const axios = require('axios') // 별도 설치하지 않아도 Netlify의 functions에서 활용할 수 있다.
const { OMDB_API_KEY } = process.env


exports.handler = async function(event, context) { // payload > JSON 파싱해서 params로 전환
    const params = JSON.parse(event.body )
    const { title, type, year, page, id } = params;

    const url = id 
        ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full` // 단일 영화의 상세정보
        : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&${type}&${year}&page=${page}`; //여러개 영화의 상세정보

    // return new Promise(async (resolve, reject) => { // 서버 구축 후에는 Promise 생성자를 쓸 이유가 없어졌다.
    try {
        const res = await axios.get(url);
        if (res.data.Error) {
        // reject(error.message); -> return 키워드로 전부 대체해준다.
        return {
            statusCode: 400,
            body: res.data.Error
        }
        }
        // resolve(res);
        return {
            statusCode: 200,
            body: JSON.stringify(res.data)
        }
    } catch (error) {
        console.log(error.response.status);
        // reject(error.message);
        return {
            statusCode: error.response.status,
            body: error.message
        }
    }
}
