/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophie
 * Created on: Oct 2023
 * This program reads in the amount of light
*/

// variables
let amountOfLight: number
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

  if (amountOfLight <= 51) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
  }
  if (amountOfLight >= 52) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
  }
  if (amountOfLight > 104) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
  }
  if (amountOfLight > 156) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
  }
  if (amountOfLight > 208) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.show()
  }
})
