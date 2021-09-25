# React Redux

Learning React-Redux  
Create toDo page using 'react-redux'  
Lecture url : [초보자를 위한 리덕스 101](https://nomadcoders.co/redux-for-beginners) by nomadcoder  
  
## Learning
  
connet(state, dispatch)(what you wanna connet)  
 - 'react-redux'에 존재하며, react와 redux를 연결 시켜줌  
 - 'connet'는 return한 겻을 component의 props에 추가해준다.  
  
mapStateToProps
 - 두 종류의 argument와 함께 호출되는 function  
 - 첫번째 argument는 redux store에서 온 state  
 - 두번째 argument는 component의 props  
 - store.getState()와 같은 일을 할 수 있게 해줌  
  
mapDispatchToProps
 - 두 종류의 argument와 함께 호출되는 function  
 - 첫번째 argument는 redux에서 온 dispatch  
 - 두번째 argument는 component의 props  
 - store.dispatch()을 사용할 수 있게 해줌  

## ToDo
 - [x] Use Local Storage
 - [x] Add Delete Btn in Detail Page