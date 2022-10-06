
// Deprecated, might re-implement it 
// export async function get_questions(question_id){
//     let url = `https://opentdb.com/api.php?amount=10&category=${question_id}&type=multiple`
//     const response = await fetch(url)
//     const res = await response.json()
//     for (let i = 0; i < res.results.length; i++ ){
//         res.results[i].correct = res.results[i].correct_answer
//         delete res.results[i].correct_answer
//         res.results[i].incorrect = res.results[i].incorrect_answers
//         delete res.results[i].incorrect_answers
//     } 
//     console.log(res.results)
//     return res.results
// }