basic.forever(function on_forever() {
    if (input.soundLevel() > 100) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        basic.pause(500)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
    
})
