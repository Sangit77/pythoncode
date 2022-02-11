def on_forever():
    if input.sound_level() > 100:
        DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 50)
        basic.pause(500)
    else:
        DFRobotMaqueenPlus.motot_stop(Motors.ALL)
basic.forever(on_forever)
