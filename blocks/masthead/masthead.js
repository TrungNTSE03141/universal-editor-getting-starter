export default function decorate(block) {
    const blocks = block.querySelectorAll(':scope > div');

    blocks[0].classList.add('desktop-section');
    blocks[1].classList.add('mobile-section');
    blocks[2].classList.add('desc');
}