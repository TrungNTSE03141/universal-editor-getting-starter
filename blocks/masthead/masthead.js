export default function decorate(block) {
    const blocks = block.querySelectorAll(':scope > div');

    blocks[0].classList.add('desktop-section');
    blocks[1].classList.add('mobile-section');

    const desc = document.createElement('div');
    desc.classList.add('desc');

    desc.appendChild(blocks[2]);
    desc.appendChild(blocks[3]);

    const ctaLink = document.createElement('a');
    ctaLink.className = "button";
    ctaLink.href = blocks[5].innerText.trim();
    ctaLink.textContent = blocks[4].innerText.trim();

    desc.appendChild(ctaLink);

    blocks[4].remove();
    blocks[5].remove();

    block.appendChild(desc);
}