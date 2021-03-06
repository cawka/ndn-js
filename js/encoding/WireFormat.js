/**
 * @author: Jeff Thompson
 * See COPYING for copyright and distribution information.
 * This class represents Interest Objects
 */

/**
 * Create a WireFormat base class where the encode and decode methods throw an error. You should use a derived class like BinaryXmlWireFormat.
 * @constructor
 */
var WireFormat = function WireFormat() {
};

/**
 * The override method in the derived class should encode the interest and return a Uint8Array.
 * @param {Interest} interest
 * @returns {UInt8Array}
 * @throws Error This always throws an "unimplemented" error. The derived class should override.
 */
WireFormat.prototype.encodeInterest = function(interest) {
  throw new Error("encodeInterest is unimplemented in the base WireFormat class.  You should use a derived class.");
};

/**
 * The override method in the derived class should decode the input and put the result in interest.
 * @param {Interest} interest
 * @param {Uint8Array} input
 * @throws Error This always throws an "unimplemented" error. The derived class should override.
 */
WireFormat.prototype.decodeInterest = function(interest, input) {
  throw new Error("decodeInterest is unimplemented in the base WireFormat class.  You should use a derived class.");
};

/**
 * The override method in the derived class should encode the contentObject and return a Uint8Array. 
 * @param {ContentObject} contentObject
 * @returns {Uint8Array}
 * @throws Error This always throws an "unimplemented" error. The derived class should override.
 */
WireFormat.prototype.encodeContentObject = function(contentObject) {
  throw new Error("encodeContentObject is unimplemented in the base WireFormat class.  You should use a derived class.");
};

/**
 * The override method in the derived class should decode the input and put the result in contentObject.
 * @param {ContentObject} contentObject
 * @param {Uint8Array} input
 * @throws Error This always throws an "unimplemented" error. The derived class should override.
 */
WireFormat.prototype.decodeContentObject = function(contentObject, input) {
  throw new Error("decodeContentObject is unimplemented in the base WireFormat class.  You should use a derived class.");
};


