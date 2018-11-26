// PubSub standard function including:
  // 1. publish function
    //takes in the channel being listened for and the guts of the channel (payload)
     // console logs the channel being listened to
     // Makes a new event which returns the payload
     // dispatches the event back to be displayed through one of the views
  // 2. subscribe function
    // takes in the channel being listened to and the callbck function
    // console logs the channel being listened to
     // adds an event listener to the document to listen to the channel and execute the callback

const PubSub = {
 publish: function(channel, payload){
   console.log(`published on channel: ${channel}. payload: ${payload}`);
   const event = new CustomEvent(channel, {
     detail: payload
   });
   document.dispatchEvent(event);
 },

 subscribe: function(channel, callback){
   console.log(`subscribed to channel: ${channel}`);
   document.addEventListener(channel, callback);
 }
};

// export PubSub functions

module.exports = PubSub;
