let env = process.env.ENVIRONMENT || "test" //test will be the default
switch (env) {
    case "dev04":
        module.exports = {
            baseUrl: 'https://dev04.changetocomm.net'
        }
        break;
    case "dev07":
        module.exports = {
            baseUrl: 'https://dev07.changetocomm.net'
        }
        break;
    case "test":
    case "dev01":
        module.exports = {
            baseUrl: 'https://dev01.changetocomm.net'
        }
        break;
}