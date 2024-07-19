function getData(d) {
    return ASQ(function (done) {
        setTimeout(function () {
            done(d);
        }, 1000);
    });
}
ASQ()

//.waterfall() is a method provided by ASQ that allows you to execute asynchronous tasks sequentially, passing results from one task to the next. Here, it executes getData(10) first, then passes its result to getData(30).
    .waterfall(
        function (done) { getData(10).pipe(done); },
        function (done) { getData(30).pipe(done); }
    )

    //.seq() is used to define a sequence step that will execute after the waterfall sequence completes.
    // Here, It receives num1 and num2, which are the results from getData(10) and getData(30) respectively.
    .seq(function (num1, num2) {
        var x = 1 + num1;
        var y = 1 + num2;
        return getData("Meaning of life: " + (x + y));
    })

    //.val() is used to handle the final value produced by the ASQ sequence.
    //Here, It receives answer, which is the result of the previous .seq() step.
    .val(function (answer) {
        console.log(answer); //Meaning of life: 42
    })


// overall flow:- 
//ASQ() starts the sequence.
// .waterfall() executes getData(10) and getData(30) sequentially. Each getData call waits for 1 second before resolving with its argument (10 or 30).
// .seq() calculates x and y based on the results of getData(10) and getData(30).
// .seq() then calls getData() with a string containing "Meaning of life: " followed by the sum of x and y.
// .val() logs the final result, "Meaning of life: 42", to the console.
