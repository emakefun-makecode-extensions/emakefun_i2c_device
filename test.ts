let device = new emakefun.I2cDevice(0x30)

basic.showNumber(device.i2cReadUint8From(0x0))