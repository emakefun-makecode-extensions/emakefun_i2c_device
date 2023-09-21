# MakeCode Extension For Emakefun I2C Device Library

## Introduction

This project implements a MakeCode extension for Microbit facilitate the use of I2C

## Example

```block
let device = new emakefun.I2cDevice(0x30)

basic.showNumber(device.readByte(0x0))
```

## Supported targets

* for PXT/microbit

## License

MIT
