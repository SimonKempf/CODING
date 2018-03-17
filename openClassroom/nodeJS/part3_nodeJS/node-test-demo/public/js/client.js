var socket = io.connect('http://localhost:8080');
var nextIndex = 0;

/**
 * NodeJS action
*/
socket.on('load-old-tasks', function(tasks){
    tasks.forEach(function(data){
        addTask(data.task, data.index);
    });
});

socket.on('add-task', function (data) {
    addTask(data.task, data.index);
});

socket.on('remove-task', function (index) {
    removeTask(index);
});


/**
 * JS action
 */
$('#btn_add_task').click(function () {
    var task_name = $('#txt_task').val();
    socket.emit('add-task', {task:task_name, index: nextIndex});
    addTask(task_name, nextIndex);

    return false;
});

// add task with enter key
$(document).keypress(function(e) {
    if(e.which == 13) {
        $('#btn_add_task').trigger('click');
    }
});


function bindRemoveTask() {
    $('.btn-remove-task').unbind('click');
    $('.btn-remove-task').bind('click', function () {
        var task_position = $(this).data('position');
        removeTask(task_position);
        socket.emit('remove-task', task_position);

        return false;
    });
}

/**
 * JS functions
 */
function addTask(task, index) {
    $('#todolist').prepend('<div>'
        + task
        + '<span class="btn-remove-task" data-position="'
        + index
        + '">x</span></div>');
    bindRemoveTask();
    nextIndex++;
}

function removeTask(index) {
    $('.btn-remove-task[data-position=' + index + ']').parent().remove();
}