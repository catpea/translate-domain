#!/usr/bin/env node
import assert from 'node:assert';

import TranslateDomain from './TranslateDomain.js';

const basicDomain = new TranslateDomain([0, 100], [0, 1]);
const nonZeroBased = new TranslateDomain([100, 200], [1, 2]);
const macroDomain = new TranslateDomain([0, 1], [0,500]);

assert.equal( basicDomain.translate(50), .5)
assert.equal( basicDomain.invert(50), .5)

assert.equal( nonZeroBased.translate(150), 1.5)
assert.equal( nonZeroBased.invert(150), 1.5)

assert.equal( macroDomain.translate(.50), 250)
assert.equal( macroDomain.invert(.75), 500-(500/4))
