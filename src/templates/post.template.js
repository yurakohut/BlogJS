export function renderPost(post, options = {}) {
    const tag = post.type === 'news' ? '<li class="tag tag-blue tag-rounded">Новина</li>' : '<li class="tag tag-rounded tag-rounded">Замітка</li>';
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const candidate = favorites.find(p => p.id === post.id)
    const button = candidate ? `<button class="button-round button-small button-danger" data-id="${post.id}" data-title="${post.title}">Видалити</button>` : `<button class="button-round button-small button-primary" data-id="${post.id}" data-title="${post.title}">Зберегти</button>`

    return `
        <div class="panel">
            <div class="panel-head">
                <p class="panel-title">${post.title}</p>
                    <ul class="tags">
                         ${tag}
                    </ul>
            </div>
            <div class="panel-body">
                <p class="multi-line">${post.fulltext}</p>
            </div>
            <div class="panel-footer w-panel-footer">
                <small>${post.date}</small>
                ${options.withButton ? button : ''}
            </div>
        </div>
`
};