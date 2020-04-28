'use strict';
import { shortHeader } from "../src/short_header.mjs";

import { strict as assert } from "assert";

describe("a shortHeader", ()=>{
    it("is all null", function() {
        const header = shortHeader(0,0);
        assert.deepEqual(header, [0,0])
    })
    it("has a type", () => {
        const header = shortHeader(0xf0,0);
        assert.equal(header[1], 0xf0)
    })
    it("is destined for deck 1", () => {
        const header = shortHeader(0,1);
        assert.equal(header[0]>>4,1);
    })
})