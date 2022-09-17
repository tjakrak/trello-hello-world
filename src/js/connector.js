var WHITE_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg';
var BLACK_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-black.svg';

var onBtnClick = function (t, opts) {
    return t.popup({
        title: 'hello world',
        url: 'popup.html',
        height: 250
    });
};

window.TrelloPowerUp.initialize({
    'board-buttons': function (t, opts) {
        return [{
            // we can either provide a button that has a callback function
            icon: {
            dark: WHITE_ICON,
            light: BLACK_ICON
            },
            text: 'Hello World',
            callback: onBtnClick,
            condition: 'edit'
        }]
    }
})