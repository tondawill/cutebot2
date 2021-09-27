cuteBot.forward()
basic.forever(function () {
    if (input.lightLevel() < 10) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 225, 225, 225)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 225, 225, 225)
    } else {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
    }
    basic.pause(1000)
})
