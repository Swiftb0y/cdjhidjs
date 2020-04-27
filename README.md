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
2. Minimal external dependencies
3. V4 compatibility:
Since Mixxx is based on Qt (v5.12 at the time of writing) and uses QJSEngine/V4
as its Javascript interpreter,
we are limited to ES7 (and no transpilation using Babel because of the first
limitation) and can't assume the presence of a NodeJS or Browser-like
environment. 