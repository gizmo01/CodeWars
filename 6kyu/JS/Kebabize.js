/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

Notes:
    the returned string should only contain lowercase letters
*/

function kebabize(str) {
    let res = str.replace(/[0-9]/g, '');
    let arr = res.split(/(?=[A-Z])/);
    return arr.join('-').toLowerCase();
}
