/**
 * @fileoverview gRPC-Web generated client stub for greet
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.greet = require('./greet_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.greet.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.greet.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.HelloRequest,
 *   !proto.greet.HelloReply>}
 */
const methodDescriptor_Greeter_SayHello = new grpc.web.MethodDescriptor(
  '/greet.Greeter/SayHello',
  grpc.web.MethodType.UNARY,
  proto.greet.HelloRequest,
  proto.greet.HelloReply,
  /**
   * @param {!proto.greet.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.greet.HelloRequest,
 *   !proto.greet.HelloReply>}
 */
const methodInfo_Greeter_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.greet.HelloReply,
  /**
   * @param {!proto.greet.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.HelloReply.deserializeBinary
);


/**
 * @param {!proto.greet.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.greet.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello,
      callback);
};


/**
 * @param {!proto.greet.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.HelloReply>}
 *     A native promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.HelloRequest,
 *   !proto.greet.HelloReply>}
 */
const methodDescriptor_Greeter_SayHellos = new grpc.web.MethodDescriptor(
  '/greet.Greeter/SayHellos',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.greet.HelloRequest,
  proto.greet.HelloReply,
  /**
   * @param {!proto.greet.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.greet.HelloRequest,
 *   !proto.greet.HelloReply>}
 */
const methodInfo_Greeter_SayHellos = new grpc.web.AbstractClientBase.MethodInfo(
  proto.greet.HelloReply,
  /**
   * @param {!proto.greet.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.HelloReply.deserializeBinary
);


/**
 * @param {!proto.greet.HelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.greet.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.sayHellos =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/greet.Greeter/SayHellos',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHellos);
};


/**
 * @param {!proto.greet.HelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.greet.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterPromiseClient.prototype.sayHellos =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/greet.Greeter/SayHellos',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHellos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.HelloRequest,
 *   !proto.greet.ByteReply>}
 */
const methodDescriptor_Greeter_GetBytes = new grpc.web.MethodDescriptor(
  '/greet.Greeter/GetBytes',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.greet.HelloRequest,
  proto.greet.ByteReply,
  /**
   * @param {!proto.greet.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.ByteReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.greet.HelloRequest,
 *   !proto.greet.ByteReply>}
 */
const methodInfo_Greeter_GetBytes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.greet.ByteReply,
  /**
   * @param {!proto.greet.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.ByteReply.deserializeBinary
);


/**
 * @param {!proto.greet.HelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.greet.ByteReply>}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.getBytes =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/greet.Greeter/GetBytes',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetBytes);
};


/**
 * @param {!proto.greet.HelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.greet.ByteReply>}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterPromiseClient.prototype.getBytes =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/greet.Greeter/GetBytes',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetBytes);
};


module.exports = proto.greet;

