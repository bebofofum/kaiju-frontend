class FlashMessage {
    constructor(type, message) {
    //    color will be red if error and blue if not
        this.color = type == 'error' ? 'is-primary' : 'is-info';
        this.message = message;
    }
}