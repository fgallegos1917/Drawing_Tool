let paint_mode = false

let current_stroke = 5

var slider;





function setup () {

	let canvas = createCanvas(700, 360)
	canvas.parent("p5")
	
	rect(0, 0, width-100, height)

	
	//slider = createSlider(1, 30, 10)

	angleMode(DEGREES)

	
}


function draw () {

	
	


	//line(mouseX, mouseY, mouseX-10, mouseY+10)
	//line(mouseX, mouseY, mouseX+10, mouseY+10)

	if (paint_mode == true) {

		line(pmouseX, pmouseY, mouseX, mouseY)
		
	

		ellipse(mouseX, mouseY, 10, 10)


	}

push()
	stroke(0)
	strokeWeight(3)
	
	fill(200)
	rect(0, 0, 100, height)


	//blue button
	fill(0, 0, 255)
	rect(10, 10, 30, 30)

	//red button
	fill(255, 0, 0)
	rect(50, 10, 30, 30)

	//green button
	fill(0, 153, 0)
	rect(10, 50, 30, 30)

	//yellow button
	fill(255, 255, 0)
	rect(50, 50, 30, 30)

	//purple button
	fill(153, 51, 255)
	rect(10, 90, 30, 30)

	//orange button
	fill(255, 128, 0)
	rect(50, 90, 30, 30)

	//brown button
	fill(153, 76, 0)
	rect(10, 130, 30, 30)

	//pink button
	fill(255, 153, 204)
	rect(50, 130, 30, 30)

	//black button
	fill(1)
	rect(10, 170, 30, 30)

	//white button
	fill(255)
	rect(50, 170, 30, 30)


	//inc strokeWeight button
	fill(200)
	rect(10, 210, 70, 15)
	strokeWeight(5)
	line(20, 217, 70, 217)


	//dec strokeWeight button
	strokeWeight(3)
	rect(10, 235, 70, 15)
	strokeWeight(1)
	line(20, 243, 70, 243)

	//brush tool 1
	strokeWeight(3)
	rect(10, 260, 30, 30)

	//brushtool 2
	rect(50, 260, 30, 30)

	//brushtool 3
	rect(10, 300, 30, 30)

	//brushtool 4
	rect(50, 300, 30 ,30)
	triangle(55, 310, 60, 310, 60, 300)

	stroke(255, 0, 0)
	strokeWeight(5)
	line(5, 260, 80, 330)
	line(75, 260, 5, 330)
pop()	


}

function mousePressed() {

	paint_mode = true

}

function mouseReleased() {

	paint_mode = false

}

function mouseClicked() {

	//blue box
	if (mouseX > 10 && mouseX < 40  && mouseY > 10 && mouseY < 40) {
		stroke(0, 0, 255)
		fill(0, 0, 255)
	}	

	//red box
	if (mouseX > 50 && mouseX < 80 && mouseY > 10 && mouseY < 40) {
		stroke(255, 0, 0)
		fill(255, 0, 0)
	}	
	
	//green box
	if (mouseX > 10 && mouseX < 40 && mouseY > 40 && mouseY < 80) {
		stroke(0, 153, 0)
		fill(0, 153, 0)
	} 

	//yellow boz
	if (mouseX > 50 && mouseX < 80 && mouseY > 40 && mouseY < 80) {
		stroke (255, 255, 0)
		fill(255, 255, 0)
	}

	//purple box
	if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120) {
		stroke(153, 51, 255)
		fill(153, 51, 255)
	}

	//orange box
	if (mouseX > 50 && mouseX < 90 && mouseY > 90 && mouseY < 120) {
		stroke(255, 128, 0)
		fill(255, 128, 0)
	}

	//brown box
	if (mouseX > 10 && mouseX <40  && mouseY > 130 && mouseY < 160) {
		stroke(153, 76, 0)
		fill(153, 76, 0)
	}

	//pink box
	if (mouseX > 50 && mouseX < 80 && mouseY > 130 && mouseY < 160) {
		stroke(255, 153, 204)
		fill(255, 153, 204)
	}

	//black box
	if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200) {
		stroke(1)
		fill(1)
	}

	//white box 
	if (mouseX > 50 && mouseX < 80 && mouseY > 170 && mouseY < 200) {
		stroke(255)
		fill(255)
	}

	
	
	//inc strokeWeight
	if (mouseX > 10 && mouseX < 80 && mouseY > 210 && mouseY < 230) {
        	strokeWeight(10)       
               
    }

	//dec strokeWeight	
	if (mouseX > 10 && mouseX < 80 && mouseY > 230 && mouseY < 280) {
        strokeWeight(1)
    }

    //circle tool
    if (mouseX > 10 && mouseX < 40 && mouseY > 260 && mouseY < 290) {
    		arc(mouseX, mouseY, 50, 50, angle, angle+50)
			angle += 1
    }
    //fun line tool
    if (mouseX > 50 && mouseX < 80 && mouseY > 260 && mouseY < 290) {
    	line(0, 0, mouseX, mouseY)
    	line(0, height, mouseX, mouseY)
    	line(height, width, mouseX, mouseY)
    	line(width, 0, mouseX, mouseY)
    }
    //random color tool
    if (mouseX > 10 && mouseX < 40 && mouseY > 300 && mouseY < 330) {
        stroke(random(255), random(255), random(255), 20)
    }

    //triangle tool
    if (mouseX > 50 && mouseX < 80 && mouseY > 300 && mouseY < 330) {
        triangle(3, 5, 4, 1, 3, 5)
    }
}


function colorBlue() {
	fill(0, 0, 255, 100)
}

function colorRed() {
	fill(255, 0, 0, 100)

}

function colorGreen() {
	fill(0, 255, 0, 100)
}

function colorYellow() {
	fill(255, 255, 0, 100)
}

function colorWhite() {
	fill(255)
	stroke(255)
}

