
const getPhrase = async (req, res, next) => {
    res.json(
        {
            lang: 'es',
            title: 'Frase de Ejemplo',
            categories: ['One', 'Two'],
            tags: ['motivación', 'energico', 'otros'],
            author: 'Anónimo'
        }
    )
}

module.exports = {
  getPhrase
}