$('#trigger').click(() => {
    $('#trigger').createModal({
        text: {
            title: 'Цепь по дереву',
            body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde numquam dolore recusandae rem ut est Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde numquam dolore recusandae rem ut est Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde numquam dolore recusandae rem ut est Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde numquam dolore recusandae rem ut est?'
        },
        btns: {
            count: 2,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-succes'],
                    false,
                    () => {
                        alert('данные сохранены');
                    }
                ],
            ]
        }
    });
});