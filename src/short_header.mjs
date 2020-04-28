"use strict";

export const shortHeader = (type, deck=0) => ([(deck&0xF)<<4, type&0xFF])