const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then( async (db) => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        id: 1,
        lat: '-2.4962928229082633',
        lng: '-44.2885108200314',
        name: 'Uhhh lala',
        about:'Presta assistência de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social',
        whatsapp: '(98) 984500045',
        images: [
            'https://images.unsplash.com/photo-1587784002360-a7c35c090720?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1565744643998-5c196cf891f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1595009503377-e3be116106b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1600711724564-526eda91ac29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1573924436756-128cf1f6387a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
        ].toString() ,
        instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
        opening_hours: 'Horário de visitas Das 18h até 8h',
        open_on_weekends: "1"
    })
    
    // inserir dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)

    // deletar tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})
