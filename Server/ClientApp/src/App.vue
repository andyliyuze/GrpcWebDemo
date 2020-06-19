<template>
  <div>
    <h2>gRPC-Web ASP.NET Core example</h2>
    <div>
      <span>CORS:</span>
      <select v-model="cors">
        <option value="same">Same Origin</option>
        <option value="different">Different Origin</option>
      </select>
      <span>Hello:</span>
      <input type="text" v-model="name" />
      <input type="button" value="Send unary" v-bind:disabled="streamingCall" @click="sendUnary()" />
      <input type="button" v-model="streamingButtonText" @click="sendServerStream()" />
      <input type="button" value='GetBytes' @click="getBytes()" />
    </div>
    <div>
      <p v-if="result">{{result}}</p>
      <p v-for="item in streamResults" :key="item">{{item}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GreeterClient, HelloRequest } from "./generated/greet_grpc_web_pb";

function getDifferentOrigin() {
  const schema = window.location.protocol as "http:" | "https:";
  const differentSchema = schema === "http:" ? "https" : "http";
  // when port is omitted
  if (!window.location.port) {
    return `${differentSchema}://${window.location.host}`;
  }

  const port = parseInt(window.location.port);

  let differentPort: number;
  if (port === 80) {
    differentPort = 443;
  } else if (port === 443) {
    differentPort = 80;
  } else {
    // handle aspnet dev server
    differentPort = schema === "http:" ? port + 1 : port - 1;
  }

  return `${differentSchema}://${window.location.hostname}:${differentPort}`;
}

@Component({})
export default class GrpcWebDemo extends Vue {
  private defaultClient = new GreeterClient(window.location.origin, null, null);
  private corsClient = new GreeterClient(getDifferentOrigin(), null, null);
  get client() {
    return this.cors === "same" ? this.defaultClient : this.corsClient;
  }
  cors: "same" | "different" = "same";
  name = "";
  result = "";
  streamingButtonText = "Start server stream";
  streamResults: string[] = [];   
  streamingCall: any = null;

  sendUnary() {
    this.result = "";
    this.streamResults = [];

    const request = new HelloRequest().setName(this.name);
    this.client.sayHello(request, {}, (err, response) => {
      this.result = response.getMessage();
    });
  }

  getBytes(){
   const request = new HelloRequest().setName(this.name);
      this.streamingCall = this.client.getBytes(request, {});
       var streamResults: string[] = [];  
     
      this.streamingCall.on("data", response => {
        let  result = response.getMessage();
       streamResults.push(result);
       // console.log(result);
      });
      var _this =this;
      this.streamingCall.on("end", function() {
         let blob =new Blob(streamResults,{ type: "text/plain" });
        const blobUrl = window.URL.createObjectURL(blob);
        _this.Hello(blobUrl,'config.txt');
      });
  }
 
  sendServerStream() {         
    if (!this.streamingCall) {
      this.streamingButtonText = "Stop server stream";
      this.result = "";
      this.streamResults = [];

      const request = new HelloRequest().setName(this.name);

      this.streamingCall = this.client.sayHellos(request, {});
      this.streamingCall.on("data", response => {
        const result = response.getMessage();
        this.streamResults.push(result);
      });
      this.streamingCall.on("end", function() {});
    } else {
      this.streamingButtonText = "Start server stream";
      this.streamingCall.cancel();
      this.streamingCall = null;
    }
  }
  
  Hello(blobUrl:string,filename:string ) {   
      const eleLink = document.createElement('a')
      eleLink.download = filename
      eleLink.style.display = 'none'
      eleLink.href = blobUrl
      // 触发点击
      document.body.appendChild(eleLink)
      eleLink.click()
      // 然后移除
      document.body.removeChild(eleLink)
      }


  mounted() {}
}
</script>

<style lang="scss" scoped>
</style>
