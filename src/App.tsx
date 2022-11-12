import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import {
  API_KEY,
  CHAT_USER_TOKEN,
  USER_ID,
  USER_NAME,
  USER_IMAGE,
} from "./../lib/constants";
import { ChannelType } from "./../lib/enums";
import "./../styles/layout.css";

import "stream-chat-react/dist/css/v2/index.css";

const chatClient = new StreamChat(API_KEY);

chatClient.connectUser(
  {
    id: USER_ID,
    name: USER_NAME,
    image: USER_IMAGE,
  },
  CHAT_USER_TOKEN
);

const channel = chatClient.channel(ChannelType.Messaging, "custom_channel_id", {
  // add as many custom fields as you'd like
  image: "https://www.drupal.org/files/project-images/react.png",
  name: "Talk about React",
  members: ["fragrant-block-8"],
});

function App() {
  return (
    <Chat client={chatClient} theme="str-chat__theme-light">
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}

export default App;
