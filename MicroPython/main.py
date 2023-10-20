"""
Created by: Sophie
Created on: Oct 2023
This module is a Micro:bit MicroPython program that detects amount of light
"""

from microbit import *
import neopixel

# variables
neopixel_strip = neopixel.NeoPixel(pin16, 8)
amount_of_light = 0

# setup
display.clear()
display.show(Image.HEART)
sleep(1000)

neopixel_strip[0] = (0, 0, 0)
neopixel_strip[1] = (0, 0, 0)
neopixel_strip[2] = (0, 0, 0)
neopixel_strip[3] = (0, 0, 0)
print(neopixel_strip[0])
print(neopixel_strip[1])
print(neopixel_strip[2])
print(neopixel_strip[3])
neopixel_strip.show()

# loop
while True:
    if button_a.is_pressed():
        display.clear()
        amount_of_light = display.read_light_level()

        # amount of light <= 51
        if amount_of_light <= 51:
            neopixel_strip[0] = (0, 0, 0)
            neopixel_strip[1] = (0, 0, 0)
            neopixel_strip[2] = (0, 0, 0)
            neopixel_strip[3] = (0, 0, 0)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            print(neopixel_strip[3])
            neopixel_strip.show()

        # amount of light >= 52
        if amount_of_light >= 52:
            neopixel_strip[0] = (255, 0, 0)
            neopixel_strip[1] = (0, 0, 0)
            neopixel_strip[2] = (0, 0, 0)
            neopixel_strip[3] = (0, 0, 0)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            print(neopixel_strip[3])
            neopixel_strip.show()

        # amount of light > 104
        if amount_of_light > 104:
            neopixel_strip[0] = (255, 0, 0)
            neopixel_strip[1] = (255, 0, 0)
            neopixel_strip[2] = (0, 0, 0)
            neopixel_strip[3] = (0, 0, 0)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            print(neopixel_strip[3])
            neopixel_strip.show()

        # amount of light > 156
        if amount_of_light > 156:
            neopixel_strip[0] = (255, 0, 0)
            neopixel_strip[1] = (255, 0, 0)
            neopixel_strip[2] = (255, 0, 0)
            neopixel_strip[3] = (0, 0, 0)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            print(neopixel_strip[3])
            neopixel_strip.show()

        # amount of light > 208
        if amount_of_light > 208:
            neopixel_strip[0] = (255, 0, 0)
            neopixel_strip[1] = (255, 0, 0)
            neopixel_strip[2] = (255, 0, 0)
            neopixel_strip[3] = (255, 0, 0)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            print(neopixel_strip[3])
            neopixel_strip.show()

    # reset screen
    if button_b.is_pressed():
        display.clear()
        neopixel_strip[0] = (0, 0, 0)
        neopixel_strip[1] = (0, 0, 0)
        neopixel_strip[2] = (0, 0, 0)
        neopixel_strip[3] = (0, 0, 0)
        print(neopixel_strip[0])
        print(neopixel_strip[1])
        print(neopixel_strip[2])
        print(neopixel_strip[3])
        neopixel_strip.show()
