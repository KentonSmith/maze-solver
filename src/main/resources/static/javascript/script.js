$("#submit_get_request_button").on("click",
    function(){

        var arg1Value = $("#arg1_input").val();
        var arg2Value = $("#arg2_input").val();

        window.alert("submit_get_request_button has been clicked" +
            " for arg1 = " + arg1Value + ", arg2 = " + arg2Value);

        var url_string = $.param([
            {name: "arg1", value: arg1Value},
            {name: "arg2", value: arg2Value}
        ]);

        $.ajax("/concat_string?" + url_string, {
            type: "GET"
        }).then(
            function success(response_data) {
                window.alert("concatArg1Arg2 response = " + response_data["concatArg1Arg2"]);
                $("#get_request_response_text").text(response_data["concatArg1Arg2"]);
                },
            function fail(data, status) {

            }
        );

    });


$("#submit_post_request_button").on("click",
    function(){
        var mazeGridText = $("#maze_input").val().trim();

        var mazeGridRows = mazeGridText.split("\n");

        for (var i = 0; i < mazeGridRows.length; i++) {
            mazeGridRows[i] = mazeGridRows[i].trim();
        }

        var numRows = mazeGridRows.length;
        // var numColumns = parseInt($("#maze_input").attr("cols"));

        // window.alert("numColumns = " + numColumns);

        var mazeGrid = [];

        for (var i = 0; i < numRows; i++) {
            var currentMazeGridRow = mazeGridRows[i];
            var tempArray = [];
            for (var j = 0; j < currentMazeGridRow.length; j++) {
                tempArray.push(currentMazeGridRow[j]);
            }
            mazeGrid.push(tempArray);
        }

        window.alert("submit_post_request_button has been clicked for mazeArray = \n" +
            mazeGrid.toString());

        // don't forget to stringify JSON before sending it to Spring backend
        var post_data = JSON.stringify({"mazeGrid": mazeGrid});

        $.ajax("/solve_maze", {
            type: "POST",
            data: post_data,
            contentType: "application/json; charset=utf-8"
        }).then(
            function success(response_data) {
                window.alert("minNumberSteps " + response_data["minNumberSteps"]);
                },
            function fail(data, status) {

            }
        );
    });
