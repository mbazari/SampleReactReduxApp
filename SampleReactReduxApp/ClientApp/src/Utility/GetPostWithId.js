import _ from 'lodash';
import getPosts from './../services/fakePosts';
export function GetpostWithid(id) {
    var newArray = getPosts()
    var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = newArray.filter(id => id === 6);

console.log(result);
    
    return _(newArray)
        
}