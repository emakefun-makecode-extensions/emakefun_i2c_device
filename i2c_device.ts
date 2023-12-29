namespace emakefun {
  export class I2cDevice {
    private readonly i2c_address_: number = undefined

    constructor(i2c_address: number) {
      this.i2c_address_ = i2c_address;
    }

    i2cWrite(args: any[]): void {
      let buffer = Buffer.create(0);

      for (let arg of args) {
        if (Array.isArray(arg)) {
          buffer = buffer.concat(Buffer.fromArray(arg as number[]));
        } else if (typeof arg === 'number') {
          buffer = buffer.concat(Buffer.fromArray([arg as number]));
        } else {
          buffer = buffer.concat(arg as Buffer);
        }
      }

      pins.i2cWriteBuffer(this.i2c_address_, buffer);
    }

    i2cWriteTo(register_address: number, args: any[]): void {
      args.unshift(register_address);
      this.i2cWrite(args);
    }

    i2cWriteInt8(value: number): void {
      pins.i2cWriteNumber(this.i2c_address_, value, NumberFormat.Int8LE);
    }

    i2cWriteUint8(value: number): void {
      pins.i2cWriteNumber(this.i2c_address_, value, NumberFormat.UInt8LE);
    }

    i2cWriteInt16le(value: number): void {
      pins.i2cWriteNumber(this.i2c_address_, value, NumberFormat.Int16LE);
    }

    i2cWriteUint16le(value: number): void {
      pins.i2cWriteNumber(this.i2c_address_, value, NumberFormat.UInt16LE);
    }

    i2cWriteInt32le(value: number): void {
      pins.i2cWriteNumber(this.i2c_address_, value, NumberFormat.Int32LE);
    }

    i2cWriteUint32le(value: number): void {
      pins.i2cWriteNumber(this.i2c_address_, value, NumberFormat.UInt32LE);
    }

    i2cWriteInt16be(value: number): void {
      pins.i2cWriteNumber(this.i2c_address_, value, NumberFormat.Int16BE);
    }

    i2cWriteUint16be(value: number): void {
      pins.i2cWriteNumber(this.i2c_address_, value, NumberFormat.UInt16BE);
    }

    i2cWriteInt32be(value: number): void {
      pins.i2cWriteNumber(this.i2c_address_, value, NumberFormat.Int32BE);
    }

    i2cWriteUint32be(value: number): void {
      pins.i2cWriteNumber(this.i2c_address_, value, NumberFormat.UInt32BE);
    }

    i2cWriteInt8To(register_address: number, value: number): void {
      this.i2cWrite([register_address, Buffer.pack('b', [value])]);
    }

    i2cWriteUint8To(register_address: number, value: number): void {
      this.i2cWrite([register_address, Buffer.pack('B', [value])]);
    }

    i2cWriteInt16leTo(register_address: number, value: number): void {
      this.i2cWrite([register_address, Buffer.pack('<h', [value])]);
    }

    i2cWriteUint16leTo(register_address: number, value: number): void {
      this.i2cWrite([register_address, Buffer.pack('<H', [value])]);
    }

    i2cWriteInt32leTo(register_address: number, value: number): void {
      this.i2cWrite([register_address, Buffer.pack('<i', [value])]);
    }

    i2cWriteUint32leTo(register_address: number, value: number): void {
      this.i2cWrite([register_address, Buffer.pack('<I', [value])]);
    }

    i2cWriteInt16beTo(register_address: number, value: number): void {
      this.i2cWrite([register_address, Buffer.pack('>h', [value])]);
    }

    i2cWriteUint16beTo(register_address: number, value: number): void {
      this.i2cWrite([register_address, Buffer.pack('>H', [value])]);
    }

    i2cWriteInt32beTo(register_address: number, value: number): void {
      this.i2cWrite([register_address, Buffer.pack('>i', [value])]);
    }

    i2cWriteUint32beTo(register_address: number, value: number): void {
      this.i2cWrite([register_address, Buffer.pack('>I', [value])]);
    }

    i2cRead(count: number): number[] {
      return pins.i2cReadBuffer(this.i2c_address_, count).toArray(NumberFormat.UInt8LE);
    }

    i2cReadFrom(register_address: number, count: number): number[] {
      pins.i2cWriteNumber(this.i2c_address_, register_address, NumberFormat.UInt8LE);
      return this.i2cRead(count);
    }

    i2cReadInt8(): number {
      return pins.i2cReadNumber(this.i2c_address_, NumberFormat.Int8LE);
    }

    i2cReadUint8(): number {
      return pins.i2cReadNumber(this.i2c_address_, NumberFormat.UInt8LE);
    }

    i2cReadInt16le(): number {
      return pins.i2cReadNumber(this.i2c_address_, NumberFormat.Int16LE);
    }

    i2cReadUint16le(): number {
      return pins.i2cReadNumber(this.i2c_address_, NumberFormat.UInt16LE);
    }

    i2cReadInt32le(): number {
      return pins.i2cReadNumber(this.i2c_address_, NumberFormat.Int32LE);
    }

    i2cReadUint32le(): number {
      return pins.i2cReadNumber(this.i2c_address_, NumberFormat.UInt32LE);
    }

    i2cReadInt16be(): number {
      return pins.i2cReadNumber(this.i2c_address_, NumberFormat.Int16BE);
    }

    i2cReadUint16be(): number {
      return pins.i2cReadNumber(this.i2c_address_, NumberFormat.UInt16BE);
    }

    i2cReadInt32be(): number {
      return pins.i2cReadNumber(this.i2c_address_, NumberFormat.Int32BE);
    }

    i2cReadUint32be(): number {
      return pins.i2cReadNumber(this.i2c_address_, NumberFormat.UInt32BE);
    }

    i2cReadInt8From(register_address: number): number {
      pins.i2cWriteNumber(this.i2c_address_, register_address, NumberFormat.UInt8LE);
      return this.i2cReadInt8();
    }

    i2cReadUint8From(register_address: number): number {
      pins.i2cWriteNumber(this.i2c_address_, register_address, NumberFormat.UInt8LE);
      return this.i2cReadUint8();
    }

    i2cReadInt16leFrom(register_address: number): number {
      pins.i2cWriteNumber(this.i2c_address_, register_address, NumberFormat.UInt8LE);
      return this.i2cReadInt16le();
    }

    i2cReadUint16leFrom(register_address: number): number {
      pins.i2cWriteNumber(this.i2c_address_, register_address, NumberFormat.UInt8LE);
      return this.i2cReadUint16le();
    }

    i2cReadInt32leFrom(register_address: number): number {
      pins.i2cWriteNumber(this.i2c_address_, register_address, NumberFormat.UInt8LE);
      return this.i2cReadInt32le();
    }

    i2cReadUint32leFrom(register_address: number): number {
      pins.i2cWriteNumber(this.i2c_address_, register_address, NumberFormat.UInt8LE);
      return this.i2cReadUint32le();
    }

    i2cReadInt16beFrom(register_address: number): number {
      pins.i2cWriteNumber(this.i2c_address_, register_address, NumberFormat.UInt8LE);
      return this.i2cReadInt16be();
    }

    i2cReadUint16beFrom(register_address: number): number {
      pins.i2cWriteNumber(this.i2c_address_, register_address, NumberFormat.UInt8LE);
      return this.i2cReadUint16be();
    }

    i2cReadInt32beFrom(register_address: number): number {
      pins.i2cWriteNumber(this.i2c_address_, register_address, NumberFormat.UInt8LE);
      return this.i2cReadInt32be();
    }

    i2cReadUint32beFrom(register_address: number): number {
      pins.i2cWriteNumber(this.i2c_address_, register_address, NumberFormat.UInt8LE);
      return this.i2cReadUint32be();
    }
  }
}