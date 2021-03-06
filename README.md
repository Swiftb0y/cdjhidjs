# CDJHIDJS

A Javascript library used to communicate with newer PioneerDJ devices (in
particular the CDJ-2000NXS2). A language independent documentation can be
found on my website: https://mixb.me/CDJHidProtocol/hid-analysis/

Newer PioneerDJ Devices seem to implement some sort of
challenge-response-authentication to keep unauthorized software from
communicating. This library implements all the logic necessary
to deal with that semi-automatically. Moreover, the library also provides
functionality for interfacing with some more device specific features such
filling the devices library information, sending track metadata and 
soon setting waveform and hotcue data as well.

## Design goals

The primary purpose of this library is to be included in the open source DJ
Software [Mixxx](https://mixxx.org/), thus there have been some limitations
imposed on the design of this library:

1. No complicated toolchains for building
2. Minimal external runtime dependencies (testing framework is allowed)
3. ES6 import/exports only
4. V4 compatibility:
Since Mixxx is based on Qt (v5.12 at the time of writing) and uses QJSEngine/V4
as its Javascript interpreter,
we are limited to ES7 (and no transpilation using Babel because of the first
limitation) and can't assume the presence of a NodeJS or Browser-like
environment. 
5. Synchronous code only:
Since we are limited to ES7, there is no `async`/`await` syntax. Using Promises
with callback chains gets complicated and can lead to difficult to debug
bugs very fast. Apart from that, this library doesn't contain much code that
could benefit from using Promises. For this reason, all code in this library is
entirely promise-free.