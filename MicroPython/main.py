"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *
import neopixel

# variables
neopixel_strip = neopixel.NeoPixel(pin16, 8)
amount_of_light = 0

display.clear()
display.show(Image.Heart)
display.pause(1000)

neopixel_strip[0] = (0, 0, 0)
neopixel_strip[1] = (0, 0, 0)
neopixel_strip[2] = (0, 0, 0)
neopixel_strip[3] = (0, 0, 0)
print(neopixel_strip[0])
print(neopixel_strip[1])
print(neopixel_strip[2])
print(neopixel_strip[3])
neopixel_strip.show()

while True:

    if button_a.is_pressed():
        amount_of_light = display.read_light_level()

        if amount_of_light <= 51():
            neopixel_strip[0] = (0, 0, 0)
            neopixel_strip[1] = (0, 0, 0)
            neopixel_strip[2] = (0, 0, 0)
            neopixel_strip[3] = (0, 0, 0)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            print(neopixel_strip[3])
            neopixel_strip.show()

        if amount_of_light >= 52():
            neopixel_strip[0] = (255, 0, 0)
            neopixel_strip[1] = (0, 0, 0)
            neopixel_strip[2] = (0, 0, 0)
            neopixel_strip[3] = (0, 0, 0)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            print(neopixel_strip[3])
            neopixel_strip.show()

        if amount_of_light > 104():
            neopixel_strip[0] = (255, 0, 0)
            neopixel_strip[1] = (255, 0, 0)
            neopixel_strip[2] = (0, 0, 0)
            neopixel_strip[3] = (0, 0, 0)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            print(neopixel_strip[3])
            neopixel_strip.show()

        if amount_of_light > 156():
            neopixel_strip[0] = (255, 0, 0)
            neopixel_strip[1] = (255, 0, 0)
            neopixel_strip[2] = (255, 0, 0)
            neopixel_strip[3] = (0, 0, 0)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            print(neopixel_strip[3])
            neopixel_strip.show()

        if amount_of_light > 208():
            neopixel_strip[0] = (255, 0, 0)
            neopixel_strip[1] = (255, 0, 0)
            neopixel_strip[2] = (255, 0, 0)
            neopixel_strip[3] = (255, 0, 0)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            print(neopixel_strip[3])
            neopixel_strip.show()
