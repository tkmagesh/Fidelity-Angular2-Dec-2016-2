var pgm = (function(){
    function addSync(x,y){
        console.log(`   [Service] processing ${x} and ${y}`)
        var result = x + y;
        console.log(`   [Service] returning result`);
        return result;
    }
    function addSyncClient(x,y){
        console.log(`[Consumer] triggering addSync`);
        var result = addSync(x,y);
        console.log(`[Consumer] result = ${result}`);
    }

    function addAsyncCallback(x,y, onResult){
        console.log(`   [Service] processing ${x} and ${y}`)
        setTimeout(function(){
            var result = x + y;
            console.log(`   [Service] returning result`);
            if (typeof onResult === 'function')
                onResult(result);
        },5000);
    }
    function addAsyncCallbackClient(x,y){
        console.log(`[Consumer] triggering addAsyncCallback`);
        addAsyncCallback(x,y, function(result){
            console.log(`[Consumer] result = ${result}`);
        });
        
    }

    var addAsyncEvent = (function(){
        var _subscribers = [];
        function subscribe(subscriptionFn){
            _subscribers.push(subscriptionFn);
        }
        function add(x,y, onResult){
            console.log(`   [Service] processing ${x} and ${y}`)
            setTimeout(function(){
                var result = x + y;
                console.log(`   [Service] returning result`);
                _subscribers.forEach(subscriber => subscriber(result));
            },5000);
        }
        return {
            subscribe : subscribe,
            add : add
        }
    })();

    return {
        addSyncClient : addSyncClient,
        addAsyncCallbackClient : addAsyncCallbackClient,
        addAsyncEvent : addAsyncEvent
    }
})();