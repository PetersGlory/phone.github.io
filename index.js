let sound = new Audio();
sound.src = "belong.mp3";
let card = [];
clickMe = () => {
	setTimeout('showMe()', 2000)

}

showMe = () => {
	$('#welcomeH3').show(1000);
	let time = new Date();
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();
	time = null;
	let ampm = '';
	if (h >= 12) {
		h -= 12;
		ampm = 'PM';
	} else {
		ampm = 'AM';
		h = (h == 0) ? 12 : h;
	}

	$("document").ready(function () {

		setTimeout("welcomeChange()", 3000);

	});


	meme = () => {
		$("#welcomeH3").hide(1000);
		$("#Display").css("background-color", "#2E2926");
		setTimeout('desktop()', 3000);
		let alltime = setInterval('desktop()', 1000);
		$('#call').show(1000);
		$('#call').css('display', 'block');
	};

	desktop = () => {
		let time = new Date();
		let h = time.getHours();
		let m = time.getMinutes();
		let s = time.getSeconds();
		time = null;
		$('#welcomeH3').show(1000);
		$('#welcomeH3').html(
			`&nbsp;&nbsp;&nbsp;<p id='myTime' class='text-white'></p>`
		);
		myTime.innerHTML = h + ' : ' + m + ' : ' + s + ' ' + ampm;
		topTime.innerHTML = h + ':' + m + ':' + s + ampm + "  " + `  <i class="fa fa-battery-full"></i>`;
	}

}

function welcomeChange() {
	$("#welcomeH3").html(
		`<p id='theWelcome' class='text-white'> welcome <br><br><i class='fa fa-spinner fa-spin'></i> </p>`
	);
	setTimeout("meme()", 5000);

	$('#call').click(function () {
		$('#welcome').hide(1000);
		// $('#Display').css('background-color','white')
		$('#callCenter').show(1000);
	})
}

numberShow = (e) => {
	numberDisplay.value += e.target.innerText;
}

kallMe = () => {

	if (numberDisplay.value == '') {
		$('#bCall').addAttr('disabled');
	} else if (numberDisplay.value == "*606#") {
		document.getElementById('myModal').style.display = 'block';
		$('#callCenter').hide(1000);
	} else if (numberDisplay.value == "*555*" + card + "#") {
		$('#myAlert').show(1000);
		$('#myAlert').html(`
<button onclick='co1()' class="btn w3-right">&times;</button>
<span>you recharge of ${amount.value} is successfully recharged .<br> you can now call any network with your recharge thank you!!<br><br>
<button class="btn w3-center" onclick='co1()'>Close</button>
 </span>
		`);
		$('#callCenter').hide(1000);
		// }
	} else if (numberDisplay.value == '*556#') {
		// var boy = JSON.parse('card');
		$('#myAlert').show(1000);
		$('#myAlert').html(`
	<button onclick='co1()' class="btn w3-right">&times;</button>
	<span> your main balance is </span>
	`)
	} else {
		// $('#callCenter').show(2000);	
		$('#callCenter').css('margin-top', '-8px');
		$("#callCenter").html(`<span class='w3-animate-opacity'>
	<img src='img/jungle4.jpg' class='w3-circle' /><br><br> <p> calling ...  ${ numberDisplay.value}</p></span><br /><br />
	<button class="btn bg-danger " style='width: 50%; margin-left: 20%;'id='endCall' ><i class="fa fa-phone text-white"></i></button>
	`);
		$('#button').hide();
		$('#Phone1').show(1000);
		// $('#callCenter').show(1000);
		setTimeout(3000);
		$('#Phone1').css('display', 'block');
		sound.play();

		$("#showCall").html(`<span class='w3-animate-opacity'>
	<img src='img/jungle9.jpg' class='w3-circle' id='dimg' width='200px' height='300px' /><br><br> <p id='inc'> incoming call ...  09066730090 </p></span><br /><br />
	<button class="btn bg-danger  w3-circle" style='width: 20%; margin-left: 10%;'id='endCall1' ><i class="fa fa-phone text-white"></i></button>
		<button class="btn bg-success  w3-circle w3-animate-fading" style='width: 20%; margin-left: 20%;'id='pickCall'><i class="fa fa-phone text-white"></i></button>
	`);
		$('#dimg').css('margin-left', '10px');
		$('#pickCall').click(function () {
			$('#inc').html(`09066730090 <br> &nbsp;&nbsp;&nbsp; <p id='setter'> Connected</p>`)
			$('#pickCall').hide();

			$('#setter')

		})


	}

	$('#endCall,#endCall1').click(function () {
		$('#callCenter').hide(1000);
		$('#callCenter').html(`
	<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<input id="numberDisplay" class="form-control" style="margin-left: 10px; border-bottom: 1px solid black; border: none; background-color: #B6BCCC;" />
<button class="btn w3-circle text-grey" onclick="numberShow(event)">1</button>
<button class="btn w3-circle text-grey" onclick="numberShow(event)">2</button>
<button class="btn w3-circle text-grey" onclick="numberShow(event)">3</button><br>
<button class="btn w3-circle text-grey" onclick="numberShow(event)">4</button>
<button class="btn w3-circle text-grey" onclick="numberShow(event)">5</button>
<button class="btn w3-circle text-grey" onclick="numberShow(event)">6</button><br>
<button class="btn w3-circle text-grey" onclick="numberShow(event)">7</button>
<button class="btn w3-circle text-grey" onclick="numberShow(event)">8</button>
<button class="btn w3-circle text-grey" onclick="numberShow(event)">9</button><br>
<button class="btn w3-circle text-grey" onclick="numberShow(event)">*</button>
<button class="btn w3-circle text-grey" onclick="numberShow(event)">0</button>
<button class="btn w3-circle text-grey" onclick="numberShow(event)">#</button><br>
<button class="btn w3-circle w3-pale-green" id="bCall" onclick="kallMe()" style="margin-left: 40%;"><i class="fa fa-phone"></i></button>
</div></div> 
</div>	
	`);
		$('#button').show(1000);
		sound.pause();
		$('#Phone1').hide(1000)
		$('#callCenter').show(1000);
		$('#callCenter').css('margin-top', '40px');
	})
}
// var card = [];

$('document').ready(function () {
	$('#generate').click(function () {
		if (amount.value <= 100) {
			displaygenerate.value = Math.floor(Math.random() * 1000000000000) + 1;

		} else if (amount.value <= 200) {
			displaygenerate.value = Math.floor(Math.random() * 2000000000000) + 1;

		} else if (amount.value <= 300) {
			displaygenerate.value = Math.floor(Math.random() * 3000000000000) + 1;

		} else if (amount.value <= 400) {
			displaygenerate.value = Math.floor(Math.random() * 4000000000000) + 1;

		} else if (amount.value <= 1000) {
			displaygenerate.value = Math.floor(Math.random() * 6000000000000) + 1;

		} else {
			displaygenerate.value = Math.floor(Math.random() * 9000000000000) + 1;

		}
		localStorage.setItem('card', JSON.stringify(amount.value));

	})
	clo = () => {
		document.getElementById('myModal').style.display = 'none';
		$('#callCenter').show(1000);
		card.push(displaygenerate.value);
		console.log(card);
	}

})
$('#back').click(function () {
	$('#callCenter').hide(1000);
	$('#welcome').show(1000);
})

co1 = () => {
	document.getElementById('myAlert').style.display = 'none';
	$('#callCenter').show(1000);
	$('#numberDisplay').val('');
}