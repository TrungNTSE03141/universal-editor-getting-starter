export default function decorate(block) {
    const rows = [...block.children];

    const ul = document.createElement('ul');

    rows.forEach((row) => {
        const [imageCell, altCell] = row.children;

        const img = document.createElement('img');
        img.src = imageCell.textContent.trim();
        img.alt = altCell.textContent.trim() || '';

        const li = document.createElement('li');
        li.append(img);
        ul.append(li);
    });

    block.innerHTML = '';
    block.append(ul);
}
