function checkIsComplete(dependency, currentBlock, cb) {
    $.ajax({
        url: '/challenges/has_completed_challenge',
        data: {
            block_id: dependency
        },
        success: function(result) {
            cb(currentBlock, dependency, result);
        }
    })
}

function displayConditionalBlock(blockLocation, solutionBlock, data) {
    var block = $("#" + blockLocation);

    if (data.submission) {
        block.css("display", "inherit");
    }
    if (data.submission || data.attempts >= 3) {
       $("#solution-" + solutionBlock).css("display", "block");
       $("#solution-" + solutionBlock + " solution").html(`<a href="https://github.com/code-institute-solutions/${solutionBlock}" target="_blank">Solution code on GitHub</a>`);
    }
}

function checkForConditionalModules() {
    var conditionalModules = $("[id*=conditional]");
    for (var conditionalModule of conditionalModules) {
        var dependency = conditionalModule.attributes['data-depends'].value;

        checkIsComplete(dependency, conditionalModule.id, displayConditionalBlock)
    }
}

setInterval(checkForConditionalModules, 5000);
