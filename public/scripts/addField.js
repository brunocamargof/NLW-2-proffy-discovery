//Procurar o botão

//Clicar > Executar uma ação

    // Duplicar os campos

    // Colocar na página 


document.querySelector('#add-time').addEventListener('click', cloneField)

function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ''
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}