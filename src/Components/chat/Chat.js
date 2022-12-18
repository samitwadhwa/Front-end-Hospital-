// import "./styles.css";
import { StreamChat } from "stream-chat";
import "stream-chat-react/dist/css/index.css";
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  LoadingIndicator,
  ChannelList
} from "stream-chat-react";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;

// const token = process.env.REACT_APP_TOKEN;
const user = {
  id: "jane",
  name: "Jane Doe",
  role: "admin",
  image: "https://getstream.io/random_svg/?id=jane-doe&name=Jane+Doe"
};
// const user = {
//   id:"jane",
//   name:"jane",
//   image:""
// }
const filter = { type: "messaging", members: { $in: [user.id] } };
const sort = { last_message_at: -1 };
export default function App() {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);
  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(API_KEY, { timeout: 6000 });
      // const token = chatClient.devToken(user.id);
      await chatClient.connectUser(
        user,
       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiamFuZSJ9.HAIxqZLd9IE_-r0Udx4fvpP8ICOcfwzchm-uNchG_mc"
      );

      // const channel = chatClient.channel("messaging", "med-talk-1");
      // await channel.watch();
      const channel2 = chatClient.channel("messaging", "med-talk-3");
      await channel2.watch();
      setClient(chatClient);
      setChannel(channel);
    }
    init();
    if (client) return () => client.disconnectUser();
  }, []);
  if (!client) return <LoadingIndicator />;
  return (
    <Chat client={client} theme="messaging light">
      <ChannelList filters={filter} sort={sort} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
          <Thread />
        </Window>
      </Channel>
    </Chat>
  );
}
