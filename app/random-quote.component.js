(function(app){
    var Component = ng.core.Component;
    var QuoteService = app.QuoteService;

    app.RandomQuoteComponent = Component({
        selector: 'random-quote',
        template: '<p><em>{{quote.line}}</em> - <em>{{quote.author}}</em></p>'
    })
    .Class({
        constructor: [QuoteService, function RandomQuoteComponent(quoteService) {
            var scope = this;

            quoteService.generateRandomQuotes(2000, function(quote){
                scope.quote = quote;
            });
        }]
    });
   
})(window.app || (window.app = {}));