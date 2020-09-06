import React, { useEffect } from 'react'

const Video = (props) => {
    const { RTCPeerConnection, RTCSessionDescription } = window;
    const peerConnection = new RTCPeerConnection();
    useEffect(()=>{
        window.navigator.getUserMedia(
            { video: true, audio: true },
            stream => {
              const localVideo = document.getElementById("local-video");
              if (localVideo) {
                localVideo.srcObject = stream;
              }
            },
            error => {
              console.warn(error.message);
            }
           );
    },[])
    useEffect(()=>{
        props.socket.on("call-made", async data => {
            await peerConnection.setRemoteDescription(
              new RTCSessionDescription(data.offer)
            );
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(new RTCSessionDescription(answer));
            
            props.socket.emit("make-answer", {
              answer,
              to: data.props.socket
            });
           });
    },[])
    async function callUser(socketId) {
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(new RTCSessionDescription(offer));
        
        props.socket.emit("call-user", {
          offer,
          to: socketId
        });
       }
    return (
        <div class="content-container">
        <div class="active-users-panel" id="active-user-container">
          <h3 class="panel-title">Active Users:</h3>
        </div>
        <div class="video-chat-container">
          <h2 class="talk-info" id="talking-with-info"> 
            Select active user on the left menu.
          </h2>
          <div class="video-container">
            <video autoplay class="remote-video" id="remote-video"></video>
            <video autoplay muted class="local-video" id="local-video"></video>
          </div>
        </div>
      </div>
    )
}

export default Video