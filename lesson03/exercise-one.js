let roles = ['warrior', 'white mage', 'black mage', 'archer', 'ninja'];
console.log(roles);
roles.push('herbalist');
console.log(roles);
roles.splice(2, 1);
console.log(roles);
const rolesStr = roles.join(', ');
console.log(rolesStr);