module.exports = ({query: { status }},res) => {
    res.status(status)
    res.setHeader('Content-Type', 'text/html')
    res.send(`<body style="background: black url(https://http.cat/${status}) no-repeat; background-size: contain; background-position: center" />`)
}
