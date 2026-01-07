export default function decorate(block) {
    const rows = [...block.children];

    // Row 1: Title | Subtitle
    const [title, subtitle] = rows[0].textContent.split('|').map(s => s.trim());

    // Row 2: Background image
    const bgImage = rows[1].querySelector('img');

    // Row 3: Primary CTA
    const primaryLink = rows[2].querySelector('a');

    // Row 4: Secondary CTA
    const secondaryLink = rows[3].querySelector('a');

    block.innerHTML = `
    <div class="masthead__background"
         style="background-image:url('${bgImage?.src || ''}')"></div>

    <div class="masthead__content">
      <h1 class="masthead__title">${title}</h1>
      <p class="masthead__subtitle">${subtitle}</p>

      <div class="masthead__actions">
        ${primaryLink ? `<a class="button primary" href="${primaryLink.href}">${primaryLink.textContent}</a>` : ''}
        ${secondaryLink ? `<a class="button secondary" href="${secondaryLink.href}">${secondaryLink.textContent}</a>` : ''}
      </div>
    </div>
  `;
}
