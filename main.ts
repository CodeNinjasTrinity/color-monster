input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.showIcon(IconNames.Surprised)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Asleep)
        basic.pause(100)
        basic.showIcon(IconNames.Angry)
        basic.pause(100)
    }
})
