//drumButtons選取所有html有drum這個class的
const drumButtons = document.querySelectorAll( ".drum" );

//每個按鈕綁定"點擊"這件事
drumButtons.forEach( button => { //為每個按鈕都設EventListener
	button.addEventListener( "click", clickEvent );
});

//整個文檔綁定"按了哪個鍵"
document.addEventListener( "keydown", keyEvent);

function clickEvent(){
		const buttonInnerHTML = this.innerHTML; //this=被點擊的按鈕，this.innerHTML取得按的內容
		playSound( buttonInnerHTML ); 
		addAnimation( buttonInnerHTML );
}

function keyEvent( event ){
	playSound( event.key );
	addAnimation( event.key );
}

function playSound( key ){
	let audio;
	switch( key ){
	case "w":
		audio = new Audio( "sounds/crash.mp3" );
		break;

	case "a":
		audio = new Audio( "sounds/kick-bass.mp3" );
		break;

	case "s":
		audio = new Audio( "sounds/snare.mp3" );
		break;

	case "d":
		audio = new Audio( "sounds/tom-1.mp3" );
		break;

	case "j":
		audio = new Audio( "sounds/tom-2.mp3" );
		break;

	case "k":
		audio = new Audio( "sounds/tom-3.mp3" );
		break;

	case "l":
		audio = new Audio( "sounds/tom-4.mp3" );
		break; //只跳出switch的部分

	default:
		console.log( "Unrecognized key: " + key );
		return; //結束整個函式
	}
	audio.play();
}

//按下去的動畫
function addAnimation( currentKey ){
	const activeButton = document.querySelector( "." + currentKey );
	if( activeButton ){
		activeButton.classList.remove( "pressed" ); //恢復按鈕原外觀，結束動畫效果

		setTimeout( () => { //移除動畫
			activeButton.classList.remove( "pressed" );
		},100 ); //100毫秒後
	}
}