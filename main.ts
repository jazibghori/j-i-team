let light_state = 0
input.onPinPressed(TouchPin.P0, function () {
    if (light_state == 0) {
        light_state = 1
    } else {
        light_state = 0
    }
})
basic.forever(function () {
    if (light_state == 1) {
        pins.analogWritePin(AnalogPin.P2, pins.analogReadPin(AnalogPin.P1))
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
