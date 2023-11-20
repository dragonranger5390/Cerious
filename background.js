// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//       target: {tabId: tab.id},
//       func: contentScriptFunc,
//       args: ['action'],
//     });
//   });
  
//   function contentScriptFunc(name) {
//     alert(`"${name}" executed`);
//   }
  
//   // This callback WILL NOT be called for "_execute_action"
//   chrome.commands.onCommand.addListener((command) => {
//     console.log(`Command "${command}" called`);
//   });


//   chrome.contextMenus.create({
//     id: 'foo',
//     title: 'first',
//     contexts: ['action']
//   })
  
//   function contextClick(info, tab) {
//     const { menuItemId } = info
  
//     if (menuItemId === 'foo') {
//       // do something
//       newTab("https://translate.google.ru/")
//     }
//   }
  
//   chrome.contextMenus.onClicked.addListener(contextClick)



chrome.contextMenus.create({
  id: "Main",
  title : "You selected \"%s\"",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "meaningRuBtn",
  parentId: "Main",
  title : "ЗНАЧЕНИЕ \"%s\"",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "synoBtn",
  parentId: "Main",
  title : "СИНОНИМЫ \"%s\"",
  contexts : ["selection"]
});

chrome.contextMenus.create({
  id: "compBtn",
  parentId: "Main",
  title : "СОЧЕТАЕМОСТЬ \"%s\"",
  contexts : ["selection"]
});

chrome.contextMenus.create({
  id: "assosBtn",
  parentId: "Main",
  title : "АССОЦИАЦИИ \"%s\"",
  contexts : ["selection"]
});
chrome.contextMenus.create({
  id: "ruEnBtn",
  parentId: "Main",
  title : "RU-EN \"%s\"",
  contexts : ["selection"]
});
chrome.contextMenus.create({
  id: "enRuBtn",
  parentId: "Main",
  title : "EN-RU \"%s\"",
  contexts : ["selection"]
});


chrome.contextMenus.onClicked.addListener((info, tab)=>{
  if (info.menuItemId === "ruEnBtn") {
    const selected = info.selectionText
    chrome.tabs.create({url : `https://translate.google.ru/?sl=en&tl=ru&text=${selected}&op=translate`})
  }
  if (info.menuItemId === "enRuBtn") {
    const selected = info.selectionText
    chrome.tabs.create({url : `https://translate.google.ru/?sl=ru&tl=en&text=${selected}&op=translate`})
  }
  if (info.menuItemId === "meaningRuBtn") {
    const selected = info.selectionText
    chrome.tabs.create({url : `https://kartaslov.ru/значение-слова/${selected}`})
  }
  if (info.menuItemId === "synoBtn") {
    const selected = info.selectionText
    chrome.tabs.create({url : `https://kartaslov.ru/синонимы-к-слову/${selected}`})
  }
  if (info.menuItemId === "compBtn") {
    const selected = info.selectionText
    chrome.tabs.create({url : `https://kartaslov.ru/сочетаемость-слова/${selected}`})
  }
  if (info.menuItemId === "assosBtn") {
    const selected = info.selectionText
    chrome.tabs.create({url : `https://kartaslov.ru/ассоциации-к-слову/${selected}`})
  }
  if (info.menuItemId === "ruEnBtn") {
    const selected = info.selectionText
    chrome.tabs.create({url : `https://translate.google.ru/?sl=ru&tl=en&text=${selected}&op=translate`})
  } 
  if (info.menuItemId === "enRuBtn") {
    const selected = info.selectionText
    chrome.tabs.create({url : `https://translate.google.ru/?sl=en&tl=ru&text=${selected}&op=translate`})
  } 
})