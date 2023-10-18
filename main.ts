/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophie
 * Created on: Oct 2023
 * This program reads in the amount of light
*/

// variables
let amountOfLight: number =0
let neopixelStrip: neopixel.Strip = null

basic.clearScreen()
basic.showIcon(IconNames.Ghost)
basic.pause(1000)

neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

input.onButtonPressed(Button.A, function () {
  amountOfLight = input.lightLevel()
  basic.clearScreen()

  //amount of light <= 51
  if (amountOfLight <= 51) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
  }
  
  //amount of light >= 52
  if (amountOfLight >= 52) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
  }

  //amount of light > 104
  if (amountOfLight > 104) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
  }

  //amount of light > 156
  if (amountOfLight > 156) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
  }

  //amount of light > 208
  if (amountOfLight > 208) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.show()
  }
})

input.onButtonPressed(Button.B, function() {
  basic.clearScreen()

  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()

})
