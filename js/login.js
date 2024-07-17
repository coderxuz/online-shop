const post = async (resurs) => {
    const $form = document.querySelector('form'); // Form elementini topish
    const $user = document.getElementById('user'); // Input elementini topish
    const $password = document.getElementById('password'); // Password elementini topish
    console.log($form);
    if (!$form || !$user || !$password) {
        console.error('Form or input elements not found');
        return;
    }

    $form.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
            const postNew = await fetch(resurs, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: $user.value,
                    password: $password.value
                })
            });

            const newUser = await postNew.json();
            console.log(newUser);
            localStorage.setItem('userid' , newUser.id)
        } catch (err) {
            console.error('Error while posting data:', err);
        }
    })
};
post('http://localhost:3000/users')