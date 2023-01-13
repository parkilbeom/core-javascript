/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */


/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest


// let first = document.querySelector('.first');
let [first,second] = document.querySelectorAll('spam');

// console.log(second);

/* 문서 대상 확인 */
// - matches

console.log( getNode('.first').matches('.first') );

// - contains

//             선택자의 자식들 중에 해당 element가 있어?
console.log( getNode('h1').contains(getNode('.first')) );
