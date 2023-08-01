let device = new emakefun.I2cDevice(0x30)

basic.showNumber(device.readByte(0x0))