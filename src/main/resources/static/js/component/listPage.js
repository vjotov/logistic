define(function() {
    return function(tableId, url, columns) {
        return {
               rows: [
                   {
                       view: 'toolbar',
                       cols:[
                           {
                               view: 'button',
                               label: 'Add',
                               click: function() {
                                   var tableList = $$(tableId)
                                   var id = tableList.add({})
                                   tableList.editRow(id)
                               }
                           }
                       ]
                   },
                   {
                       id: tableId,
                       view:"datatable",
                       columns: columns,
                       url: url,
                       save: url,
                       autoheight: true,
                       autowidth: true,
                       editable:true,
                       pager: 'markPager',
                       datafetch: 3
                   },
                   {
                       view:"pager",
                       id:"markPager",
                       size:3,
                       group:3,
                       template: "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}"
                   }
               ]
           }
    }
})