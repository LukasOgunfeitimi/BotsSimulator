# IO Game Bot Simulator

Simulates bots for multiple `.io` games by reverse engineering their client-side code (Javascript and WebAssembly)

# Games and their protections

- [Ryuten.io](./core/auth.js) - WebAssembly encryption transplied to Javascript
- [Tricksplit.io](./core/tricksplit.js) - WebAssembly Virtual Machine transpiled to Javascript
- [Vanis.io](./core/auth.js#L59) - ASM.JS encrypion transplied to Javasript
- [Gota.io](./protocols/gota.js#L66) - CAPTCHA protection