async function fetchGitHubUser() {
    try {
        const response = await fetch('https://api.github.com/users/procopioco');
        if (!response.ok) {
            throw new Error('Erro ao buscar dados do GitHub');
        }
        const data = await response.json();

        document.querySelector('.profile-avatar').src = data.avatar_url;

        document.querySelector('.profile-name').textContent = data.name || data.login;

        document.querySelector('.profile-username').textContent = `@${data.login}`;

        const numbersItems = document.querySelectorAll('.numbers-item');
        numbersItems[0].lastChild.textContent = data.public_repos;
        numbersItems[1].lastChild.textContent = data.followers;
        numbersItems[2].lastChild.textContent = data.following;

        document.querySelector('.profile-link').href = data.html_url;

    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao carregar dados do GitHub. Verifique a conexão.');
    }
}

fetchGitHubUser();