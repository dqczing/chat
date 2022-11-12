import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { StreamChat } from 'stream-chat'
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const chatClient = new StreamChat('n88w2dkucpq7');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZnJhZ3JhbnQtYmxvY2stOCJ9.c26N4uGT8L508PVpXb-S_URkdfV7PfiimJeSWcIBsmk';

chatClient.connectUser(
  {
    id: 'fragrant-block-8',
    name: 'fragrant-block-8',
    image: 'https://getstream.io/random_png/?id=fragrant-block-8&name=fragrant-block-8',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['fragrant-block-8'],
});

function App() {
  
  return (
    <Chat client={chatClient} theme='str-chat__theme-light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
  )
}

export default App
