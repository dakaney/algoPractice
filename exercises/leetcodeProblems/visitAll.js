var canVisitAllRooms = function(rooms) {
    let visited = [];
    let visiting = [0];
    while (visiting.length) {
        let current = visiting.pop();
        visited.push(current);
        rooms[current].forEach(i => {
            if (visited.indexOf(i) === -1 && visiting.indexOf(i) === -1) {
                visiting.push(i);
            }
        })
    }
    return visited.length === rooms.length;
};