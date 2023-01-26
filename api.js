const API_KEY = 'AFtwBxIPUMDSnxPICmcPqdLnGIjtU3qVVye2ZbRjHLcVWThAYfBi3urwAiKfN5lh';
const API_URL = 'https://eu-central-1.aws.data.mongodb-api.com/app/teach_academy-ilaio/endpoint';

function save(doc) {
    return axios.post(
        `${API_URL}/save`,
        doc,
    )
}
save({ user: "user-0", email: "hi@example.com" })
function findOne() {

}

function findAll() {

}