module.exports = app => {
    app.get('/usuario', (req, res) => res.send('voce esta na rota de usuario e esta realizando um get'))

    app.post('/usuario', (req, res)=> {
        console.log(req.body)
        res.send('voce esta na rota usuario e esta realizando um post')
    })

    app.delete('/usuario', (req, res)=> {
        res.send('voce esta na rota usuario e esta realizando um delete')
    })

    app.put('/usuario', (req, res)=> {
        console.log(req.body)
        res.send('voce esta na rota usuario e esta realizando um put')
    })
}