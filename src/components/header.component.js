import {
    Component
} from '../core/component';

export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    };

    init() {
        if (sessionStorage.getItem('visited')) {
            this.hide();
            this.$mainPaige.classList.remove('hide');
        };
        const btn = this.$el.querySelector('.js-header-start');
        btn.addEventListener('click', buttonHandler.bind(this));
    };
};

function buttonHandler() {
    sessionStorage.setItem('visited', JSON.stringify(true));
    this.$mainPaige.classList.remove('hide');
    this.hide();
};