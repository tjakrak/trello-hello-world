
window.TrelloPowerUp.initialize({
    'board-buttons': function (t, opts) {
        return [{
            // we can either provide a button that has a callback function
            icon: {
            dark: WHITE_ICON,
            light: BLACK_ICON
            },
            text: 'Callback',
            callback: onBtnClick,
            condition: 'edit'
        }, {
            // or we can also have a button that is just a simple url
            // clicking it will open a new tab at the provided url
            icon: {
            dark: WHITE_ICON,
            light: BLACK_ICON
            },
            text: 'URL',
            condition: 'always',
            url: 'https://trello.com/inspiration',
            target: 'Inspiring Boards' // optional target for above url
        }];
    }
})