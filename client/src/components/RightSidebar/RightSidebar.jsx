import React from "react";
import "./RightSidebar.css";
// import Widget from "./Widget";
// import WidgetTags from "./WidgetTags";
import ChatbotEmbed from "../Chatbot/Chatbot";

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      {/* <Widget /> */}
      {/* <WidgetTags /> */}

      <ChatbotEmbed/>



    </aside>
    
  );
};

export default RightSidebar;
