
var canvas;   //global canvas
var car;      //canvas reference
var smoke;
var smoke2;
var timer = 40;
var timerVal = 180;    

var y = 300;
var y3 = 350;
var mainRadius = 15;
var sideRadius = Math.floor((Math.random() * 18) + 10);
var anInterval;
// Initializes the main process
// Lays out canvas and places function calls to setTimer
function init() {
    canvas = document.getElementById('drawCar');
    car = canvas.getContext('2d');
    smoke = canvas.getContext('2d');
    smoke2 = canvas.getContext('2d');
    anInterval = setInterval(setTimer, timerVal);
 
}
// Responds to the slider input
function slideChecker() {
    clearInterval(anInterval);
    timer = document.getElementById("myRange").valueAsNumber;
    if (timer < 10) {
        timerVal = 250;
    } else if (timer > 10 && timer <= 20) {
        timerVal = 230;
    }
     else if (timer > 20 && timer <= 30) {
        timerVal = 200.5;
    }
     else if (timer > 30 && timer <= 40) {
        timerVal = 185;
    }
     else if (timer > 40 && timer <= 50) {
        timerVal = 155;
    }
     else if (timer > 50 && timer <= 60) {
        timerVal = 130;
    }
     else if (timer > 60 && timer <= 70) {
        timerVal = 100;
    } else if (timer > 70 && timer <= 80) {
        timerVal = 80;
    } else if (timer > 80 && timer <= 90) {
        timerVal = 70;
    } else if (timer > 90) {
        timerVal = 50;
    }
    init();
}
// Sets the timer and draws the graphics
function setTimer() {
        
    car.fillStyle = "#FFF";
    car.fillRect(0,0,car.canvas.width,car.canvas.height);

    // W is the offset for positioning
    var w = 100;
    var numberOfCircles;

    // Motion Resetting
    if (y < -80) {
        y = 300;
        y3 = 350;
        sideRadius = Math.floor((Math.random() * 15) + 20);
        mainRadius = Math.floor((Math.random() * 15) + 10);
    }
    
    // Smoke Circles
    smoke.beginPath();
    numberOfCircles = Math.floor((Math.random() * 10) + 20);
    for (var i = 0; i < numberOfCircles;i++) {
        var xRange = Math.floor((Math.random() * 626) + 700);
        smoke.arc(xRange, y-=0.5, sideRadius+=0.01,0,2*Math.PI);
        // smoke.moveTo(xRange, y3);
        smoke.arc(Math.floor((Math.random() * 626) + 700), y-=0.5, mainRadius+=0.009,0,2*Math.PI);
        smoke.globalCompositeOperation='source-over';
    }
    smoke.fillStyle = "rgba(100, 100, 100, 0.7)";
    smoke.fill();

    // Smoke 2 Variables and Motion Reset
    var y2;
    var mainRadius2 = 15;
    var sideRadius2 = Math.floor((Math.random() * 18) + 10);
    if (y < -80) {
        y = 300;
        y3 = 350;
        sideRadius2 = Math.floor((Math.random() * 15) + 20);
        mainRadius2 = Math.floor((Math.random() * 15) + 10);
    }
    
    // Smoke Circles2
    smoke2.beginPath();
    numberOfCircles = Math.floor((Math.random() * 10) + 20);
    for (i = 0; i < numberOfCircles;i++) {
        var xRange = Math.floor((Math.random() * 626) + 700);
        smoke2.arc(xRange, y-=0.5, sideRadius2+=0.01,0,2*Math.PI);
        // smoke2.moveTo(xRange, y3);
        smoke2.arc(Math.floor((Math.random() * 626) + 700), y-=0.5, mainRadius2+=0.009,0,2*Math.PI);
        smoke2.globalCompositeOperation='source-over';
    }
    smoke2.fillStyle = "rgba(200, 200, 200, 0.8)";
    smoke2.fill();

    // Second set of smokes ///////////////////////////////////////////////////////////////////////////
    // var y3 = 400;
    // smoke.beginPath();
    // numberOfCircles = Math.floor((Math.random() * 10) + 20);
    // for (var i = 0; i < numberOfCircles/2;i++) {
    //     //var xRange = Math.floor((Math.random() * 625) + 623);
    //     smoke.arc(Math.floor((Math.random() * 626) + 700), y3-=0.5, sideRadius+=0.01,0,2*Math.PI);
    //     smoke.arc(Math.floor((Math.random() * 626) + 700), y3-=0.1, mainRadius+=0.009,0,2*Math.PI);
    //     smoke.globalCompositeOperation='source-over';
    // }
    // smoke.fillStyle = "rgba(100, 100, 100, 0.7)";
    // smoke.fill();

    // // Smoke 2 Variables and Motion Reset
    // var y2;
    // var mainRadius2 = 15;
    // var sideRadius2 = Math.floor((Math.random() * 18) + 10);
    // if (y2 < -80) {
    //     y3 = 400;
    //     sideRadius2 = Math.floor((Math.random() * 15) + 20);
    //     mainRadius2 = Math.floor((Math.random() * 15) + 10);
    // }
    
    // // Smoke Circles2
    // smoke2.beginPath();
    // numberOfCircles = Math.floor((Math.random() * 10) + 20);
    // for (i = 0; i < numberOfCircles/2;i++) {
    //     //var xRange = Math.floor((Math.random() * 625) + 623);
    //     smoke2.arc(Math.floor((Math.random() * 626) + 700), y3-=0.01, sideRadius2+=0.01,0,2*Math.PI);
    //     smoke2.arc(Math.floor((Math.random() * 626) + 700), y3-=0.01, mainRadius2+=0.009,0,2*Math.PI);
    //     smoke2.globalCompositeOperation='source-over';
    // }
    // smoke2.fillStyle = "rgba(200, 200, 200, 0.8)";
    // smoke2.fill();

    /*          FLAT COLOR           */
    // Car Body
    car.beginPath();
    car.moveTo(118, 192 + w);
    car.lineTo(57, 284 + w);
    car.lineTo(69, 323 + w);
    car.lineTo(59, 352 + w);
    car.lineTo(86, 377 + w);
    car.lineTo(110, 373 + w);
    car.lineTo(153, 389 + w);
    car.lineTo(243, 402 + w);
    car.lineTo(348, 402 + w);
    car.lineTo(438, 380 + w);
    car.lineTo(449, 285 + w);
    car.lineTo(481, 245 + w);
    car.lineTo(509, 346 + w);
    car.lineTo(687, 257 + w);
    car.lineTo(736, 186 + w);
    car.lineTo(739, 119 + w);
    car.lineTo(632, 88 + w);
    car.lineTo(610, 91 + w);
    car.lineTo(511, 85 + w);
    car.lineTo(441, 79 + w);
    car.lineTo(356, 88 + w);
    car.lineTo(275, 116 + w);
    car.lineTo(172, 176 + w);
    car.lineTo(142, 183 + w);
    car.lineTo(118, 192 + w);
    car.fillStyle="yellow";
    car.fill();
    car.closePath();

    // Side Mirror Right
    car.beginPath();
    car.moveTo(220, 150 + w);
    car.lineTo(216, 137 + w);
    car.lineTo(192, 136 + w);
    car.lineTo(182, 147 + w);
    car.lineTo(200, 162 + w);
    car.lineTo(220, 150 + w);
    car.fillStyle="yellow";
    car.fill();
    car.closePath();

    // Window Detail
    car.beginPath();
    car.moveTo(582, 108 + w);
    car.lineTo(604, 133 + w);
    car.lineTo(613, 132 + w);
    car.lineTo(622, 119 + w);
    car.lineTo(639, 117 + w);
    car.lineTo(620, 110 + w);
    car.lineTo(599, 102 + w);
    car.lineTo(587, 103 + w);
    car.lineTo(582, 108 + w);
    car.fillStyle="black";
    car.fill();
    car.closePath();

    // Side Window
    car.beginPath();
    car.moveTo(582, 108 + w);
    car.lineTo(604, 133 + w);
    car.lineTo(585, 155 + w);
    car.lineTo(568, 170 + w);
    car.lineTo(536, 168 + w);
    car.lineTo(521, 183 + w);
    car.lineTo(524, 204 + w);
    car.lineTo(513, 211 + w);
    car.lineTo(475, 207 + w);
    car.lineTo(491, 160 + w);
    car.lineTo(502, 140 + w);
    car.lineTo(520, 120 + w);
    car.lineTo(554, 108 + w);
    car.lineTo(582, 108 + w);
    car.fillStyle="grey";
    car.fill();
    car.closePath();

    // Detail left
    car.beginPath();
    car.moveTo(160, 180 + w);
    car.lineTo(150, 186 + w);
    car.lineTo(164, 195 + w);
    car.lineTo(182, 192 + w);
    car.lineTo(171, 190 + w);
    car.lineTo(160, 180 + w);
    car.fillStyle="black";
    car.fill();
    car.closePath();

    // Detail Right
    car.beginPath();
    car.moveTo(384, 217 + w);
    car.lineTo(384, 223 + w);
    car.lineTo(434, 218 + w);
    car.lineTo(445, 214 + w);
    car.lineTo(384, 217 + w);
    car.fillStyle="black";
    car.fill();
    car.closePath();

    // Back Detail
    car.beginPath();
    car.moveTo(673, 110 + w);
    car.lineTo(672, 102 + w);
    car.lineTo(630, 93 + w);
    car.lineTo(633, 99 + w);
    car.lineTo(673, 110 + w);
    car.fillStyle="black";
    car.fill();
    car.closePath();




    /*          SHADING         */
    // Roof Lighting
    var gradientRoof = car.createLinearGradient(460, 70 + w, 457, 100 + w);
    gradientRoof.addColorStop(0, "#fbb100");
    gradientRoof.addColorStop(1, "yellow");
    car.beginPath();
    car.moveTo(292, 111 + w);
    car.lineTo(314, 106 + w);
    car.lineTo(339, 101 + w);
    car.lineTo(352, 95 + w);
    car.lineTo(423, 97 + w);
    car.lineTo(410, 103 + w);
    car.lineTo(493, 98 + w);
    car.lineTo(500, 93 + w);
    car.lineTo(554, 97 + w);
    car.lineTo(610, 96 + w);
    car.lineTo(631, 97 + w);
    car.lineTo(601, 90 + w);
    car.lineTo(553, 85 + w);
    car.lineTo(510, 83 + w);
    car.lineTo(484, 82 + w);
    car.lineTo(460, 80 + w);
    car.lineTo(436, 78 + w);
    car.lineTo(415, 80 + w);
    car.lineTo(396, 82 + w);
    car.lineTo(370, 85 + w);
    car.lineTo(347, 89 + w);
    car.lineTo(321, 98 + w);
    car.lineTo(321, 98 + w);
    car.lineTo(292, 111 + w);
    car.fillStyle=gradientRoof;
    car.fill();
    car.closePath();

    // Side Mirror Shadow
    var gradientSideMirror = car.createLinearGradient(537, 169 + w, 581, 200 + w);
    gradientSideMirror.addColorStop(0, "#fbb100");
    gradientSideMirror.addColorStop(1, "yellow");
    car.beginPath();
    car.moveTo(569, 170 + w);
    car.lineTo(576, 170 + w);
    car.lineTo(581, 180 + w);
    car.lineTo(574, 191 + w);
    car.lineTo(550, 195 + w);
    car.lineTo(535, 195 + w);
    car.lineTo(539, 215 + w);
    car.lineTo(522, 212 + w);
    car.lineTo(527, 207 + w);
    car.lineTo(521, 189 + w);
    car.lineTo(540, 187 + w);
    car.lineTo(559, 186 + w);
    car.lineTo(576, 181 + w);
    car.lineTo(557, 176 + w);
    car.lineTo(569, 171 + w);
    car.lineTo(569, 170 + w);
    car.fillStyle=gradientSideMirror;
    car.fill();
    car.closePath();

    // Back Shadow
    var gradientBack = car.createLinearGradient(679, 150 + w, 726, 177 + w);
    gradientBack.addColorStop(0, "#fbb100");
    gradientBack.addColorStop(1, "yellow");
    car.beginPath();
    car.moveTo(674, 99 + w);
    car.lineTo(691, 100 + w);
    car.lineTo(718, 107 + w);
    car.lineTo(737, 117 + w);
    car.lineTo(740, 160 + w);
    car.lineTo(735, 188 + w);
    car.lineTo(734, 179 + w);
    car.lineTo(733, 154 + w);
    car.lineTo(725, 144 + w);
    car.lineTo(711, 150 + w);
    car.lineTo(697, 171 + w);
    car.lineTo(688, 203 + w);
    car.lineTo(651, 223 + w);
    car.lineTo(660, 195 + w);
    car.lineTo(667, 164 + w);
    car.lineTo(640, 162 + w);
    car.lineTo(628, 169 + w);
    car.lineTo(593, 188 + w);
    car.lineTo(634, 158 + w);
    car.lineTo(685, 126 + w);
    car.lineTo(668, 147 + w);
    car.lineTo(722, 133 + w);
    car.lineTo(728, 123 + w);
    car.lineTo(722, 115 + w);
    car.lineTo(714, 115 + w);
    car.lineTo(690, 106 + w);
    car.lineTo(673, 99 + w);
    car.lineTo(674, 99 + w);
    car.fillStyle=gradientBack;
    car.fill();
    car.closePath();

    // Front Shadow
    car.beginPath();
    car.moveTo(64, 267 + w);
    car.lineTo(72, 278 + w);
    car.lineTo(78, 276 + w);
    car.lineTo(78, 309 + w);
    car.lineTo(92, 314 + w);
    car.lineTo(147, 335 + w);
    car.lineTo(259, 337 + w);
    car.lineTo(334, 326 + w);
    car.lineTo(390, 310 + w);
    car.lineTo(448, 288 + w);
    car.lineTo(401, 312 + w);
    car.lineTo(372, 323 + w);
    car.lineTo(342, 332 + w);
    car.lineTo(310, 340 + w);
    car.lineTo(306, 348 + w);
    car.lineTo(260, 345 + w);
    car.lineTo(240, 344 + w);
    car.lineTo(152, 340 + w);
    car.lineTo(91, 320 + w);
    car.lineTo(89, 338 + w);
    car.lineTo(83, 316 + w);
    car.lineTo(75, 311 + w);
    car.lineTo(65, 300 + w);
    car.lineTo(57, 285 + w);
    car.lineTo(64, 268 + w);
    car.lineTo(81, 236 + w);
    car.lineTo(102, 211 + w);
    car.lineTo(122, 192 + w);
    car.lineTo(147, 180 + w);
    car.lineTo(174, 176 + w);
    car.lineTo(161, 183 + w);
    car.lineTo(152, 185 + w);
    car.lineTo(154, 189 + w);
    car.lineTo(137, 193 + w);
    car.lineTo(118, 204 + w);
    car.lineTo(100, 224 + w);
    car.lineTo(94, 225 + w);
    car.lineTo(65, 268 + w);
    car.lineTo(64, 267 + w);
    car.fillStyle="#fbb100";
    car.fill();
    car.closePath();

    // Front Shadow fix
    car.beginPath();
    car.moveTo(94, 224 + w);
    car.lineTo(96, 228 + w);
    car.lineTo(68, 275 + w);
    car.lineTo(64, 266 + w);
    car.lineTo(94, 223 + w);
    car.fillStyle="#fbb100";
    car.fill();
    car.closePath();

    // Side Shadows
    var gradientSide = car.createLinearGradient(482, 228 + w, 485, 300 + w);
    gradientSide.addColorStop(0, "#fbb100");
    gradientSide.addColorStop(1, "yellow");
    car.beginPath();
    car.moveTo(598, 198 + w);
    car.lineTo(627, 172 + w);
    car.lineTo(622, 204 + w);
    car.lineTo(609, 242 + w);
    car.lineTo(629, 249 + w);
    car.lineTo(641, 239 + w);
    car.lineTo(649, 223 + w);
    car.lineTo(688, 203 + w);
    car.lineTo(671, 268 + w);
    car.lineTo(509, 348 + w);
    car.lineTo(511, 337 + w);
    car.lineTo(516, 312 + w);
    car.lineTo(515, 288 + w);
    car.lineTo(514, 257 + w);
    car.lineTo(508, 246 + w);
    car.lineTo(489, 236 + w);
    car.lineTo(470, 250 + w);
    car.lineTo(460, 266 + w);
    car.lineTo(452, 288 + w);
    car.lineTo(445, 318 + w);
    car.lineTo(442, 350 + w);
    car.lineTo(440, 381 + w);
    car.lineTo(350, 405 + w);
    car.lineTo(371, 383 + w);
    car.lineTo(387, 372 + w);
    car.lineTo(342, 334 + w);
    car.lineTo(374, 323 + w);
    car.lineTo(443, 289 + w);
    car.lineTo(362, 317 + w);
    car.lineTo(462, 250 + w);
    car.lineTo(484, 230 + w);
    car.lineTo(501, 230 + w);
    car.lineTo(512, 220 + w);
    car.lineTo(519, 237 + w);
    car.lineTo(556, 210 + w);
    car.lineTo(598, 186 + w);
    car.lineTo(598, 198 + w);
    car.fillStyle=gradientSide;
    car.fill();
    car.closePath();

    // Front Shine
    var gradientFront1 = car.createLinearGradient(140, 247 + w, 188, 287 + w);
    gradientFront1.addColorStop(0, "#ffff8b");
    gradientFront1.addColorStop(1, "yellow");
    car.beginPath();
    car.moveTo(221, 205 + w);
    car.lineTo(256, 211 + w);
    car.lineTo(234, 235 + w);
    car.lineTo(196, 268 + w);
    car.lineTo(170, 299 + w);
    car.lineTo(147, 334 + w);
    car.lineTo(94, 315 + w);
    car.lineTo(104, 293 + w);
    car.lineTo(117, 274 + w);
    car.lineTo(145, 250 + w);
    car.lineTo(189, 220 + w);
    car.lineTo(221, 205 + w);
    car.fillStyle=gradientFront1;
    car.fill();
    car.closePath();

    // Front Shine 2
    var gradientFront2 = car.createLinearGradient(284, 243 + w, 336, 287 + w);
    gradientFront2.addColorStop(0, "#ffff8b");
    gradientFront2.addColorStop(1, "yellow");
    car.beginPath();
    car.moveTo(236, 337 + w);
    car.lineTo(320, 219 + w);
    car.lineTo(385, 215 + w);
    car.lineTo(385, 224 + w);
    car.lineTo(430, 220 + w);
    car.lineTo(332, 276 + w);
    car.lineTo(305, 331 + w);
    car.lineTo(267, 338 + w);
    car.lineTo(236, 337 + w);
    car.fillStyle=gradientFront2;
    car.fill();
    car.closePath();


    // Windshield
    var gradientWindShield = car.createLinearGradient(301, 107 + w, 457, 211 + w);
    gradientWindShield.addColorStop(0, "white");
    gradientWindShield.addColorStop(1, "grey");
    car.beginPath();
    car.moveTo(496, 124 + w);
    car.lineTo(300, 108 + w);
    car.lineTo(173, 178 + w);
    car.lineTo(220, 206 + w);
    car.lineTo(322, 218 + w);
    car.lineTo(383, 213 + w);
    car.lineTo(455, 210 + w);
    car.lineTo(475, 164 + w);
    car.lineTo(496, 124 + w);
    car.fillStyle=gradientWindShield;
    car.fill();
    car.closePath();

    // Light left side
    var gradientLeftLight = car.createLinearGradient(89, 217 + w, 94, 262 + w);
    gradientLeftLight.addColorStop(0, "white");
    gradientLeftLight.addColorStop(1, "grey");
    car.beginPath();
    car.moveTo(96, 222 + w);
    car.lineTo(66, 269 + w);
    car.lineTo(72, 276 + w);
    car.lineTo(98, 264 + w);
    car.lineTo(105, 254 + w);
    car.lineTo(96, 222 + w);
    car.fillStyle=gradientLeftLight;
    car.fill();
    car.closePath();

    // Light Right
    var gradientRightLight = car.createLinearGradient(322, 275 + w, 349, 297 + w);
    gradientRightLight.addColorStop(0, "white");
    gradientRightLight.addColorStop(1, "grey");
    car.beginPath();
    car.moveTo(397, 260 + w);
    car.lineTo(347, 270 + w);
    car.lineTo(307, 283 + w);
    car.lineTo(297, 291 + w);
    car.lineTo(313, 311 + w);
    car.lineTo(347, 309 + w);
    car.lineTo(397, 260 + w);
    car.fillStyle=gradientRightLight;
    car.fill();
    car.closePath();
    /**********************************************/

    // Hood Line Detail
    car.beginPath();
    car.moveTo(151, 184 + w);
    car.lineTo(124, 212 + w);
    car.lineTo(104, 244 + w);
    car.lineTo(106, 255 + w);
    car.lineTo(98, 263 + w);
    car.lineTo(119, 274 + w);
    car.lineTo(158, 288 + w);
    car.lineTo(177, 286 + w);
    car.lineTo(191, 294 + w);
    car.lineTo(269, 296 + w);
    car.lineTo(298, 292 + w);
    car.lineTo(307, 282 + w);
    car.lineTo(328, 276 + w);
    car.lineTo(384, 241 + w);
    car.lineTo(434, 217 + w);
    car.strokeStyle="black";
    car.stroke();
    car.closePath();

    // Hood Detail 2
    car.beginPath();
    car.moveTo(65, 344 + w);
    car.lineTo(58, 352 + w);
    car.lineTo(87, 381 + w);
    car.lineTo(113, 377 + w);
    car.lineTo(152, 394 + w);
    car.lineTo(242, 405 + w);
    car.lineTo(347, 407 + w);
    car.lineTo(361, 393 + w);
    car.lineTo(281, 395 + w);
    car.lineTo(240, 371 + w);
    car.lineTo(150, 363 + w);
    car.lineTo(110, 350 + w);
    car.lineTo(79, 359 + w);
    car.lineTo(65, 344 + w);
    car.fillStyle="black";
    car.fill();
    car.closePath();

    // Light Line
    car.beginPath();
    car.moveTo(347, 310 + w);
    car.lineTo(408, 291 + w);
    car.lineTo(455, 269 + w);
    car.strokeStyle="black";
    car.stroke();
    car.closePath();

    // Door Detail
    car.beginPath();
    car.moveTo(628, 169 + w);
    car.lineTo(626, 186 + w);
    car.lineTo(620, 210 + w);
    car.lineTo(611, 240 + w);
    car.lineTo(629, 251 + w);
    car.lineTo(641, 241 + w);
    car.lineTo(656, 208 + w);
    car.lineTo(668, 162 + w);
    car.lineTo(642, 159 + w);
    car.lineTo(628, 169 + w);
    car.fillStyle="black";
    car.fill();
    car.closePath();

    // Back Line
    car.beginPath();
    car.moveTo(595, 92 + w);
    car.lineTo(599, 102 + w);
    car.lineTo(621, 109 + w);
    car.lineTo(660, 124 + w);
    car.lineTo(679, 113 + w);
    car.lineTo(691, 105 + w);
    car.lineTo(595, 92 + w);
    car.strokeStyle="black";
    car.stroke();
    car.closePath();

    // Door Line
    car.beginPath();
    car.moveTo(518, 209 + w);
    car.lineTo(520, 241 + w);
    car.lineTo(523, 271 + w);
    car.lineTo(521, 312 + w);
    car.lineTo(620, 256 + w);
    car.lineTo(631, 250 + w);
    car.strokeStyle="black";
    car.stroke();
    car.closePath();

    // Door Line 2
    car.beginPath();
    car.moveTo(596, 147 + w);
    car.lineTo(635, 158 + w);
    car.lineTo(642, 159 + w);
    car.lineTo(669, 163 + w);
    car.lineTo(697, 172 + w);
    car.strokeStyle="black";
    car.stroke();
    car.closePath();

    // Grill
    car.beginPath();
    car.moveTo(70, 304 + w);
    car.lineTo(75, 323 + w);
    car.lineTo(86, 346 + w);
    car.lineTo(107, 336 + w);
    car.lineTo(160, 355 + w);
    car.lineTo(255, 361 + w);
    car.lineTo(302, 382 + w);
    car.lineTo(370, 382 + w);
    car.lineTo(387, 370 + w);
    car.lineTo(343, 331 + w);
    car.lineTo(313, 338 + w);
    car.lineTo(307, 345 + w);
    car.lineTo(343, 371 + w);
    car.lineTo(317, 375 + w);
    car.lineTo(260, 344 + w);
    car.lineTo(152, 342 + w);
    car.lineTo(99, 320 + w);
    car.lineTo(92, 318 + w);
    car.lineTo(90, 338 + w);
    car.lineTo(86, 336 + w);
    car.lineTo(84, 316 + w);
    car.lineTo(70, 304 + w);
    car.fillStyle="black";
    car.fill();
    car.closePath();

    // Front Wheel
    car.beginPath();
    car.moveTo(420, 385 + w);
    car.lineTo(440, 391 + w);
    car.lineTo(464, 390 + w);
    car.lineTo(483, 383 + w);
    car.lineTo(490, 377 + w);
    car.lineTo(495, 370 + w);
    car.lineTo(501, 361 + w);
    car.lineTo(506, 349 + w);
    car.lineTo(511, 332 + w);
    car.lineTo(513, 319 + w);
    car.lineTo(515, 308 + w);
    car.lineTo(515, 289 + w);
    car.lineTo(512, 273 + w);
    car.lineTo(509, 261 + w);
    car.lineTo(501, 252 + w);
    car.lineTo(494, 247 + w);
    car.lineTo(486, 244 + w);
    car.lineTo(473, 247 + w);
    car.lineTo(468, 252 + w);
    car.lineTo(460, 263 + w);
    car.lineTo(452, 279 + w);
    car.lineTo(448, 290 + w);
    car.lineTo(444, 307 + w);
    car.lineTo(442, 320 + w);
    car.lineTo(441, 335 + w);
    car.lineTo(439, 351 + w);
    car.lineTo(439, 368 + w);
    car.lineTo(438, 378 + w);
    car.lineTo(420, 385 + w);
    car.fillStyle="black";
    car.fill();
    car.closePath();


    // Back Wheel
    car.beginPath();
    car.moveTo(671, 268 + w);
    car.lineTo(686, 275 + w);
    car.lineTo(705, 274 + w);
    car.lineTo(717, 268 + w);
    car.lineTo(726, 253 + w);
    car.lineTo(732, 236 + w);
    car.lineTo(735, 226 + w);
    car.lineTo(737, 217 + w);
    car.lineTo(738, 199 + w);
    car.lineTo(738, 186 + w);
    car.lineTo(736, 175 + w);
    car.lineTo(731, 161 + w);
    car.lineTo(724, 151 + w);
    car.lineTo(715, 149 + w);
    car.lineTo(705, 156 + w);
    car.lineTo(700, 167 + w);
    car.lineTo(694, 180 + w);
    car.lineTo(691, 196 + w);
    car.lineTo(687, 211 + w);
    car.lineTo(684, 230 + w);
    car.lineTo(671, 265 + w);
    car.fillStyle="black";
    car.fill();
    car.closePath();

    // Front Rims
    var gradientFrontRims = car.createLinearGradient(464, 276 + w, 502, 350 + w);
    gradientFrontRims.addColorStop(0, "grey");
    gradientFrontRims.addColorStop(1, "#2f2f2f");
    car.beginPath();
    car.moveTo(494, 259 + w);
    car.lineTo(504, 268 + w);
    car.lineTo(509, 279 + w);
    car.lineTo(510, 289 + w);
    car.lineTo(511, 302 + w);
    car.lineTo(510, 314 + w);
    car.lineTo(507, 329 + w);
    car.lineTo(503, 348 + w);
    car.lineTo(498, 358 + w);
    car.lineTo(490, 370 + w);
    car.lineTo(483, 374 + w);
    car.lineTo(474, 377 + w);
    car.lineTo(465, 374 + w);
    car.lineTo(459, 365 + w);
    car.lineTo(455, 352 + w);
    car.lineTo(452, 341 + w);
    car.lineTo(451, 323 + w);
    car.lineTo(454, 311 + w);
    car.lineTo(456, 298 + w);
    car.lineTo(459, 287 + w);
    car.lineTo(464, 276 + w);
    car.lineTo(469, 268 + w);
    car.lineTo(475, 262 + w);
    car.lineTo(485, 259 + w);
    car.lineTo(494, 259 + w);
    car.fillStyle=gradientFrontRims;
    car.fill();
    car.closePath();

    // Back Rims
    var gradientBackRims = car.createLinearGradient(702, 181 + w, 737, 224 + w);
    gradientBackRims.addColorStop(0, "grey");
    gradientBackRims.addColorStop(1, "#2f2f2f");
    car.beginPath();
    car.moveTo(718, 163 + w);
    car.lineTo(727, 167 + w);
    car.lineTo(731, 177 + w);
    car.lineTo(733, 191 + w);
    car.lineTo(733, 206 + w);
    car.lineTo(733, 219 + w);
    car.lineTo(730, 234 + w);
    car.lineTo(726, 244 + w);
    car.lineTo(722, 255 + w);
    car.lineTo(714, 263 + w);
    car.lineTo(706, 261 + w);
    car.lineTo(699, 253 + w);
    car.lineTo(696, 243 + w);
    car.lineTo(695, 228 + w);
    car.lineTo(695, 217 + w);
    car.lineTo(695, 206 + w);
    car.lineTo(698, 193 + w);
    car.lineTo(702, 182 + w);
    car.lineTo(709, 169 + w);
    car.lineTo(719, 162 + w);
    car.fillStyle=gradientBackRims;
    car.fill();
    car.closePath();

    // Emblem
    car.beginPath();
    car.moveTo(159, 298 + w);
    car.lineTo(173, 300 + w);
    car.lineTo(168, 309 + w);
    car.lineTo(158, 313 + w);
    car.lineTo(156, 306 + w);
    car.lineTo(159, 298 + w);
    car.fillStyle="black";
    car.fill();
    car.closePath();


    }