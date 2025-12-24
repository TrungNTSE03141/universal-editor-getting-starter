export default function decorate(block) {
    const [quoteWrapper] = block.children;
    if (!quoteWrapper) return;

    const createEl = (tag, props = {}, children = []) => {
        const el = document.createElement(tag);
        Object.entries(props).forEach(([k, v]) => {
            if (v == null) return;
            if (k === 'className') el.className = v;
            else if (k === 'textContent') el.textContent = v;
            else if (k in el) el[k] = v;
            else el.setAttribute(k, v);
        });
        children.forEach(c => el.appendChild(c));
        return el;
    };

    const form = createEl('form', {
        className: 'quote-form-container',
        'aria-label': 'Quote form',
        method: 'post',
        action: '/api/quote'
    });

    const input = createEl('input', {
        type: 'text',
        name: 'quote',
        className: 'quote-input',
        placeholder: 'Enter quote',
        'aria-label': 'Quote input',
       // value: quoteWrapper.textContent.trim()
    });

    const submit = createEl('button', {
        type: 'submit',
        className: 'quote-submit',
        'aria-label': 'Submit quote',
        textContent: 'Submit'
    });


    form.appendChild(input);
    form.appendChild(submit);

    // replace the wrapper with the form and move wrapper inside the form
    block.replaceChild(form, quoteWrapper);
    form.appendChild(quoteWrapper);

}
