class OrderForm {
    constructor(name, phone, email, kit, comment, agree) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.kit = kit;
        this.comment = comment;
        this.agree = agree;
    }

    printInfo() {
        console.log('=== Новая заявка с сайта ПАС ===');
        console.log(`Имя: ${this.name}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Email: ${this.email}`);
        console.log(`Выбранная аптечка: ${this.kit}`);
        console.log(`Комментарий: ${this.comment || 'Нет комментария'}`);
        console.log(`Согласие на обработку данных: ${this.agree ? 'Да' : 'Нет'}`);
        console.log('=================================');
    }
}

const form = document.getElementById('order-form');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const kit = document.getElementById('kit').value;
        const comment = document.getElementById('comment').value;
        const agree = document.getElementById('agree').checked;

        const order = new OrderForm(name, phone, email, kit, comment, agree);
        order.printInfo();

        alert('Заявка принята!');
    });
}
