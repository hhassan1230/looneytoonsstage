export function fetchTodo(cb) {
    setTimeout(() => cb(fakeTodos),
        2000);
}


var fakeTodos = [
    {content: 'Buy coffee bean'}, 
    {content: 'Drink Redbull'}, 
    {content: 'Call dad'},
    {content: 'Buy milk shake'}, 
    {content: 'Take Pills'}, 
    {content: 'Call mom'}
];