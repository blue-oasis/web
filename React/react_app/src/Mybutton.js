function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);
            //배열 선언, 초기화
    return React.createElement (
        'button',
        { onClick: () => isClicked? setIsClicked(false) : setIsClicked(true)},
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);