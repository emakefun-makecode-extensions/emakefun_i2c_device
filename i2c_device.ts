namespace emakefun {
  export class I2cDevice {
    private readonly i2c_address_: number = undefined

    constructor(i2c_address: number) {
      this.i2c_address_ = i2c_address;
    }

    readByte(register_address: number): number {
      pins.i2cWriteNumber(this.i2c_address_, register_address, NumberFormat.UInt8LE);
      return pins.i2cReadNumber(this.i2c_address_, NumberFormat.UInt8LE);
    }

    readBytes(register_address: number, size: number): number[] {
      pins.i2cWriteNumber(this.i2c_address_, register_address, NumberFormat.UInt8LE);
      return pins.i2cReadBuffer(this.i2c_address_, size).toArray(NumberFormat.UInt8LE);
    }

    writeByte(register_address: number, data: number) {
      return pins.i2cWriteBuffer(this.i2c_address_, Buffer.fromArray([register_address, data]));
    }

    writeBytes(register_address: number, data: number[]|Buffer) {
      if (Array.isArray(data)) {
        return pins.i2cWriteBuffer(
            this.i2c_address_, Buffer.fromArray([register_address]).concat(Buffer.fromArray(data as number[])));
      } else {
        return pins.i2cWriteBuffer(this.i2c_address_, Buffer.fromArray([register_address]).concat(data as Buffer));
      }
    }
  }
}