
const chatBody = document.querySelector(".chat_body")
const inputText= document.querySelector("#textinput")
const send = document.querySelector(".send")
send.addEventListener("click",()=> renderUserMessage());
textinput.addEventListener("keyup",(event)=>{
    if(event.keyCode ===13){
        renderUserMessage();
    }
})
const renderUserMessage =()=>{
    const userInput = textinput.value;
    rendermessageEle(userInput);
    textinput.value="";
    renderChatBotResponse(userInput);
};
const renderChatBotResponse=(userInput) =>{
    const res = getChatBotResPonse(userInput);
    rendermessageEle(res);
}
const rendermessageEle =(txt)=>{
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add("user-message");
    messageEle.append(txtNode);
    chatBody.append(messageEle);
}
const getChatBotResPonse = (userInput)=>{
    console.log(userInput);

    let resptxt = resObject[userInput]==undefined?"please try something else":resObject[userInput];
    return resptxt

}