function updateViewContact(){
    let html = '';
    
    html = showHeader();
    html += 
    `
    <h2>Adopt Me</h2>
    
    <div class="contact-main-container">
        <div class="contact-title">Name: Tina</div>
        <div class="contact-title">Address: Verningen</div>
        <div class="contact-title">E-Mail: tina@epost.no</div>
        <div class="contact-title">Phone: 98765432</div>
    </div>
    `
    return html;
}