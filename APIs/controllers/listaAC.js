module.exports = app => {
    app.get('/listaAC', (req, res) => res.send('voce esta na rota de lista Atividade Complementares e esta realizando um get'))

    app.post('/listaAC', (req, res)=> {
        console.log(req.body)
        res.send('voce esta na rota lista Atividades Complementares e esta realizando um post')
    })

    app.delete('/listaAC', (req, res)=> {
        res.send('voce esta na rota lista Atividade Complementares e esta realizando um delete')
    })

    app.put('/listaAC', (req, res)=> {
        console.log(req.body)
        res.send('voce esta na rota lista Atividade Complementares e esta realizando um put')
    })
}