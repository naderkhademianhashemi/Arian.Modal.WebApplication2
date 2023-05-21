class BtnSea extends Card {
    constructor($mainPage: JQuery) {
        super(' ');

        this.$card.appendTo($mainPage);

        var $row = $('<div class="row" />').appendTo(this.$body);
        var $col4 = $('<div class="col col-4" />').append('&nbsp;').appendTo($row);
        var $col8 = $('<div class="col col-8 text-left" />').appendTo($row);

        var $actions = $('<div class="display-inline-block" />').appendTo($col4);

        Button("NDR", ev => new NModal()).appendTo($actions.append(' '));

       

    }
}


class NModal extends Modal {
    constructor() {
        //super("");
        super(ModalSize.md, "N modal1", "N modal");
        this.show();

        
    }
}

$(function () {
    var btnNdr = new BtnSea($("#mainPage"));

})