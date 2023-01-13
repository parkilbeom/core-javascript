/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log( first.className = 'hola');
// first.classList.add('hello')
// first.classList.remove('hello')
// first.classList.toggle('hello')
// console.log(first.classList.contains('is-active'));

function addClass(node,className){

  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(typeof className !== 'string'){
    TypeError('addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.')
  }

  node.classList.add(className)

}

function removeClass(node,className){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(typeof className !== 'string'){
    TypeError('addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.')
  }
  node.classList.remove(className)
}

function toggleClass(node,className){
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    TypeError('toggleClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.')
  }
  node.classList.toggle(className)
}



addClass('.first','hello')
removeClass('.first','hello')
toggleClass('.first','hello')





/* 스타일 변경 방법 --------------------------------------------------------- */


// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.backgroundColor = 'red'

console.log( first.style.fontSize );


/* 계산된 스타일 읽기 ------------------------------------------------------- */


let size = getComputedStyle( first ).fontSize;
console.log( size );

function getCss(node,prop){
  
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(!(prop in document.body.style)){
    syntaxError('getCSS 함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }

  return getComputedStyle(node)[prop]

}

function setCss(node,prop,value){
  
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(!(prop in document.body.style)){
    syntaxError('setCSS 함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }
  if(!value){
    syntaxError('setCSS 함수의 세번째 인자는 필수값 입니다.')
  }

  node.style[prop] = value;

}

 const css = (node,prop,value) => !value ? getCss(node,prop) : setCss(node,prop,value)
  
  
  
  // if(!value) return getCss (node,prop)
  // else setCss(node,prop,value)




console.log( getCss('.first','fontSize') );
console.log( setCss('.first','color','red') );

getCss('.first','font-size')
setCss('.first','color','red')


// - getComputedStyle(element, [pseudoElement]) `읽기 전용`