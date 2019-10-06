/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.CustomProtocol.C2SPlayerInput', null, global);
goog.exportSymbol('proto.CustomProtocol.GameStart', null, global);
goog.exportSymbol('proto.CustomProtocol.MSG', null, global);
goog.exportSymbol('proto.CustomProtocol.PlayerInfo', null, global);
goog.exportSymbol('proto.CustomProtocol.Vec3', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CustomProtocol.PlayerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CustomProtocol.PlayerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CustomProtocol.PlayerInfo.displayName = 'proto.CustomProtocol.PlayerInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CustomProtocol.PlayerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.CustomProtocol.PlayerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CustomProtocol.PlayerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomProtocol.PlayerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    playid: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CustomProtocol.PlayerInfo}
 */
proto.CustomProtocol.PlayerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CustomProtocol.PlayerInfo;
  return proto.CustomProtocol.PlayerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CustomProtocol.PlayerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CustomProtocol.PlayerInfo}
 */
proto.CustomProtocol.PlayerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CustomProtocol.PlayerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CustomProtocol.PlayerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CustomProtocol.PlayerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomProtocol.PlayerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * required int32 playId = 1;
 * @return {number}
 */
proto.CustomProtocol.PlayerInfo.prototype.getPlayid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.CustomProtocol.PlayerInfo.prototype.setPlayid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.CustomProtocol.PlayerInfo.prototype.clearPlayid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.PlayerInfo.prototype.hasPlayid = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CustomProtocol.GameStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CustomProtocol.GameStart.repeatedFields_, null);
};
goog.inherits(proto.CustomProtocol.GameStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CustomProtocol.GameStart.displayName = 'proto.CustomProtocol.GameStart';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CustomProtocol.GameStart.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CustomProtocol.GameStart.prototype.toObject = function(opt_includeInstance) {
  return proto.CustomProtocol.GameStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CustomProtocol.GameStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomProtocol.GameStart.toObject = function(includeInstance, msg) {
  var f, obj = {
    servertick: jspb.Message.getField(msg, 1),
    playid: jspb.Message.getField(msg, 2),
    udpport: jspb.Message.getField(msg, 3),
    playerlistList: jspb.Message.toObjectList(msg.getPlayerlistList(),
    proto.CustomProtocol.PlayerInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CustomProtocol.GameStart}
 */
proto.CustomProtocol.GameStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CustomProtocol.GameStart;
  return proto.CustomProtocol.GameStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CustomProtocol.GameStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CustomProtocol.GameStart}
 */
proto.CustomProtocol.GameStart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServertick(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUdpport(value);
      break;
    case 4:
      var value = new proto.CustomProtocol.PlayerInfo;
      reader.readMessage(value,proto.CustomProtocol.PlayerInfo.deserializeBinaryFromReader);
      msg.addPlayerlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CustomProtocol.GameStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CustomProtocol.GameStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CustomProtocol.GameStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomProtocol.GameStart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPlayerlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.CustomProtocol.PlayerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * required int32 serverTick = 1;
 * @return {number}
 */
proto.CustomProtocol.GameStart.prototype.getServertick = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.CustomProtocol.GameStart.prototype.setServertick = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.CustomProtocol.GameStart.prototype.clearServertick = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.GameStart.prototype.hasServertick = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int32 playId = 2;
 * @return {number}
 */
proto.CustomProtocol.GameStart.prototype.getPlayid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.CustomProtocol.GameStart.prototype.setPlayid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.CustomProtocol.GameStart.prototype.clearPlayid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.GameStart.prototype.hasPlayid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int32 udpPort = 3;
 * @return {number}
 */
proto.CustomProtocol.GameStart.prototype.getUdpport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.CustomProtocol.GameStart.prototype.setUdpport = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.CustomProtocol.GameStart.prototype.clearUdpport = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.GameStart.prototype.hasUdpport = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated PlayerInfo playerList = 4;
 * @return {!Array.<!proto.CustomProtocol.PlayerInfo>}
 */
proto.CustomProtocol.GameStart.prototype.getPlayerlistList = function() {
  return /** @type{!Array.<!proto.CustomProtocol.PlayerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.CustomProtocol.PlayerInfo, 4));
};


/** @param {!Array.<!proto.CustomProtocol.PlayerInfo>} value */
proto.CustomProtocol.GameStart.prototype.setPlayerlistList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.CustomProtocol.PlayerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.CustomProtocol.PlayerInfo}
 */
proto.CustomProtocol.GameStart.prototype.addPlayerlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.CustomProtocol.PlayerInfo, opt_index);
};


proto.CustomProtocol.GameStart.prototype.clearPlayerlistList = function() {
  this.setPlayerlistList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CustomProtocol.Vec3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CustomProtocol.Vec3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CustomProtocol.Vec3.displayName = 'proto.CustomProtocol.Vec3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CustomProtocol.Vec3.prototype.toObject = function(opt_includeInstance) {
  return proto.CustomProtocol.Vec3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CustomProtocol.Vec3} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomProtocol.Vec3.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getField(msg, 1),
    y: jspb.Message.getField(msg, 2),
    z: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CustomProtocol.Vec3}
 */
proto.CustomProtocol.Vec3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CustomProtocol.Vec3;
  return proto.CustomProtocol.Vec3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CustomProtocol.Vec3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CustomProtocol.Vec3}
 */
proto.CustomProtocol.Vec3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setZ(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CustomProtocol.Vec3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CustomProtocol.Vec3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CustomProtocol.Vec3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomProtocol.Vec3.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * required int64 x = 1;
 * @return {number}
 */
proto.CustomProtocol.Vec3.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.CustomProtocol.Vec3.prototype.setX = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.CustomProtocol.Vec3.prototype.clearX = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.Vec3.prototype.hasX = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 y = 2;
 * @return {number}
 */
proto.CustomProtocol.Vec3.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.CustomProtocol.Vec3.prototype.setY = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.CustomProtocol.Vec3.prototype.clearY = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.Vec3.prototype.hasY = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 z = 3;
 * @return {number}
 */
proto.CustomProtocol.Vec3.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.CustomProtocol.Vec3.prototype.setZ = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.CustomProtocol.Vec3.prototype.clearZ = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.Vec3.prototype.hasZ = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CustomProtocol.C2SPlayerInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CustomProtocol.C2SPlayerInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CustomProtocol.C2SPlayerInput.displayName = 'proto.CustomProtocol.C2SPlayerInput';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.toObject = function(opt_includeInstance) {
  return proto.CustomProtocol.C2SPlayerInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CustomProtocol.C2SPlayerInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomProtocol.C2SPlayerInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    isup: jspb.Message.getField(msg, 1),
    isright: jspb.Message.getField(msg, 2),
    isleft: jspb.Message.getField(msg, 3),
    isdown: jspb.Message.getField(msg, 4),
    hashcode: jspb.Message.getField(msg, 5),
    tick: jspb.Message.getField(msg, 6),
    pos: (f = msg.getPos()) && proto.CustomProtocol.Vec3.toObject(includeInstance, f),
    playerid: jspb.Message.getField(msg, 8)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CustomProtocol.C2SPlayerInput}
 */
proto.CustomProtocol.C2SPlayerInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CustomProtocol.C2SPlayerInput;
  return proto.CustomProtocol.C2SPlayerInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CustomProtocol.C2SPlayerInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CustomProtocol.C2SPlayerInput}
 */
proto.CustomProtocol.C2SPlayerInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsup(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsright(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsleft(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdown(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHashcode(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTick(value);
      break;
    case 7:
      var value = new proto.CustomProtocol.Vec3;
      reader.readMessage(value,proto.CustomProtocol.Vec3.deserializeBinaryFromReader);
      msg.setPos(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CustomProtocol.C2SPlayerInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CustomProtocol.C2SPlayerInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomProtocol.C2SPlayerInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPos();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.CustomProtocol.Vec3.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * required bool isUp = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.getIsup = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.CustomProtocol.C2SPlayerInput.prototype.setIsup = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.CustomProtocol.C2SPlayerInput.prototype.clearIsup = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.hasIsup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required bool isRight = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.getIsright = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.CustomProtocol.C2SPlayerInput.prototype.setIsright = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.CustomProtocol.C2SPlayerInput.prototype.clearIsright = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.hasIsright = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required bool isLeft = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.getIsleft = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.CustomProtocol.C2SPlayerInput.prototype.setIsleft = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.CustomProtocol.C2SPlayerInput.prototype.clearIsleft = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.hasIsleft = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required bool isDown = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.getIsdown = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.CustomProtocol.C2SPlayerInput.prototype.setIsdown = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.CustomProtocol.C2SPlayerInput.prototype.clearIsdown = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.hasIsdown = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required int64 hashCode = 5;
 * @return {number}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.getHashcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.CustomProtocol.C2SPlayerInput.prototype.setHashcode = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.CustomProtocol.C2SPlayerInput.prototype.clearHashcode = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.hasHashcode = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required int32 tick = 6;
 * @return {number}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.getTick = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.CustomProtocol.C2SPlayerInput.prototype.setTick = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.CustomProtocol.C2SPlayerInput.prototype.clearTick = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.hasTick = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * required Vec3 pos = 7;
 * @return {!proto.CustomProtocol.Vec3}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.getPos = function() {
  return /** @type{!proto.CustomProtocol.Vec3} */ (
    jspb.Message.getWrapperField(this, proto.CustomProtocol.Vec3, 7, 1));
};


/** @param {!proto.CustomProtocol.Vec3} value */
proto.CustomProtocol.C2SPlayerInput.prototype.setPos = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.CustomProtocol.C2SPlayerInput.prototype.clearPos = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.hasPos = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * required int32 playerId = 8;
 * @return {number}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.getPlayerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.CustomProtocol.C2SPlayerInput.prototype.setPlayerid = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.CustomProtocol.C2SPlayerInput.prototype.clearPlayerid = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CustomProtocol.C2SPlayerInput.prototype.hasPlayerid = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * @enum {number}
 */
proto.CustomProtocol.MSG = {
  MSGID_GAMESTART: 1,
  MSGID_SERVERFRAME: 2
};

goog.object.extend(exports, proto.CustomProtocol);
