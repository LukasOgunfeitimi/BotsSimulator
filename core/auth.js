class Ryuten { // WASM to JS port
    /** Ryuten authentication explained in order (Albion.wasm)
    *
    * It starts with the server sending 64 8bit numbers 
    * upon connection which can encrypt a message of a byte length of 64.
    * 
    * The message is encrypted by XORing each index of the same offset
    * with the message and encryption keys.
    * eg. msg[5] XOR keys[5]
    * 
    * The encrypted message is inverted by swapping the first and last 4 bits
    * eg. 01101101 --> 11010110
    *
    * Each message that is encrypted the keys are rotated by 
    * multipling it by -17 to keep randomness
    * which is also using the same inversion as encrypting messages
    */
    constructor() {
      this.keys = []
    }
    /**
     * Encrypts and prepares data ready to be sent to a Ryuten server
     * @param data Message to be encrypted
    */
    encrypt(data) {
      var encData = []
      for (var i = 0; i < data.length; i++)
        encData[i] = this.invertKey(data[i] ^ this.keys[i]) // 0x0A43A
      this.rotateKeys()
      return new Uint8Array(encData)
    }
    /**
     * Rotates encryption keys
    */
    rotateKeys() {
      for (var i = 0; i < this.keys.length; i++)
        this.keys[i] = this.invertKey(this.keys[i] * -17 & 0xFF) // 0x0A408
    }
    /**
     * Inverts a message
     * @param key Message to be inverted
    */
    invertKey(key) {
      return (key << 4 | key >> 4) & 0xFF // 0x07CB6
    }
    /**
     * Sets inital encryption keys
     * @param keys 64 8bit numbers that act as encryption keys
    */
    setKeys(keys) {
      this.keys = keys
    }
}





class Vanis { // ASM.JS to JS port
  constructor() {
    this.constants = [55, 3, 170, 32, 65, 27, 9, 128]
  }
  /**
   * Authenticate your self with a vanis server using this ASM.JS to JS port
   * @param {*} key Key sent by server
   * @returns Shifted version of the given key based of hardcoded hashes
   */
  rotateKey(key) { // credits to Aero
    const result = [];
    let last, current,
        mask = (current = key[0]) + 4 & 7;
    result.push(last = this.constants[0] ^ (current << mask | current >>> 8 - mask) & 0xFF);
    for (let i = 1; i < 8; i++) {
        mask = (current = key[i]) + 4 & 7;
        result.push(last = (current << mask | current >>> 8 - mask) & 0xFF ^ last ^ this.constants[i]);
    }

    /**
     * Create array
     */
    const seed = ~~((Math.pow(2, 32) - 1) * Math.random());
    result.push((result[0] ^ seed >>> 24) & 0xFF)
    result.push((result[1] ^ seed >>> 16) & 0xFF)
    result.push((result[2] ^ seed >>> 8) & 0xFF)
    result.push((result[3] ^ seed) & 0xFF)
    result.push((result[0] ^ 0x1F & -0x20) & 0xFF)
    return result;
  }
}
module.exports = { Ryuten, Vanis }