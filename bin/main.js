var game;
(function (game) {
    class Item {
        constructor() {
            console.log("md5:", md5("123456789"));
        }
    }
    game.Item = Item;
})(game || (game = {}));
class Main {
    constructor() {
        new game.Item();
    }
}
