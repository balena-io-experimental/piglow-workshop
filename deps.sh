#!/bin/bash

# Activate i2c required by the PiGlow module
modprobe i2c-dev && echo 'PiGlow: activating i2c-dev'
