let resume = `# 胡炳良
15982262587 | 15982262587@163.com | 成都
Github: https://github.com/carrotemis/
19届毕业生 | 前端开发工程师

## 专业技能
- HTML5, CSS3 & JavaScript
    - 能够使用原生 JavaScript 独立制作精美网页
    - 掌握 HTML5 如 canvas 、 audio 等语义化标签及 WebStorage API 等
    - 掌握 CSS3 \`动画\`、\`过渡\`、\`弹性盒子布局\`、\`媒体查询\`等响应式设计常用技术
- Vue 
    - Vue 开发经验，熟练使用Vue, 熟悉Vue的常见功能及命令，如组件，Vue-Router，Vuex,生命周期，Axios请求，
    能够快速理解Vue官方文档, 对MVVM,MVC设计模式有深入了解，
    了解Eliment-Ui组件库，Echart.js,Three.js。
- 移动端开发
  - 小程序开发经验，已发布上线。熟悉 WXML 模版/事件、 JS 逻辑交互及常用 API 、常用组件的使用等，掌握 JSON 配置。
  - 会使用 REM 、  媒体查询等技术制作适配手机设备的页面
- 其他
    - 熟悉 Git 常用命令、代码仓库协同工作流程等
    - 熟悉 jQuery 常用 API ，如 DOM 操作、特效、事件等。曾使用原生 JavaScript 封装简易版的 $.ajax()
    - 掌握 Scss 、 Less 的使用，理解嵌套规则、父选择器 & 、变量、混合等的使用
    - 理解 MVC 、 MVVM 思想，掌握 HTTP 基础等
    - 使用 Node.js 搭配 Express 和 Socket.IO 开发在线聊天室，并已将项目部署上线
    - 使用 Webpack 打包项目的经验，了解其管理资源的方法，如 css-loader 、 file-loader 等

## 工作经历

### 联联周边游有限公司
2018/6 - 2018/9
- 职位：前端开发（实习）
- 主要技术：\`组件\`，\`Vue-Router\`，\`Vuex\`,\`生命周期\`，\`Axios请求\`
- 工作内容：配合公司需要，开发公司的官方网站。

### 成都崇信大数据服务有限公司
2018/10 - 2019/3
- 职位：前端开发
- 主要技术：\`Vue\`、\`Vue Router\`、\`Vuex\`
- 工作内容：开发智能英语学习平台。老师端中负责 1.1 版本的所有更新和优化；
学生端中负责休息浮窗组件、弹窗对话框组件及学生信息页等的开发。 UI 组件自造轮子或使用 Ant Design 。


## 项目经验
### 简历生成器
- 关键词：\`JavaScript\`、、\`变速\`、\`过渡动画\`、\`盒阴影\`
- 描述：该项目实现了一个 Markdown 简历的制作过程，在原生 JS 中使用 Promise 处理异步操作，利用 CSS3 实现过渡、动画、阴影和弹性布局等。
- [源码链接](https://github.com/Caijialinxx/animating-resume/blob/master/main.js) | [预览链接](https://caijialinxx.github.io/animating-resume/)



### 彩色涂鸦
- 关键词：\`HTML5\`、\`Canvas\`、\`ES6\`、\`JavaScript\`
- 描述：使用 HTML5 的 Canvas 元素及其相关 API ，实现支持多指同时画图（可选色/粗细）、橡皮擦、一键清空、保存至本地的功能。
- [源码链接](https://github.com/carrotemis/Canvas) | [预览链接](https://carrotemis.github.io/Canvas/)

### 在线翻译小程序
   - 关键词：\`了解微信开发者平台一些接口的引用\`、\`ES6\`、\`JavaScript\`
   - 项目介绍：一款提供翻译功能的微信小程序，遍历有浏览所有翻译历史之意。
    该项目以百度翻译 API 为服务器域名提供支持，主要包含翻译首页、语言列表页和翻译历史页。
    项目逻辑简单，页面清新，提供了近 20 种语言选择，欢迎尝试。
    浏览项目：微信搜索小程序——遍历翻译即可使用
- [源码链接](https://github.com/carrotemis/mini-programs-master) 

## 教育经历
### 成都文理学院
2015/9 - 2019/6
- 专业学历：计算机科学与技术 大学本科
- GPA：3.4 / 4.0
- 荣誉：校二、三奖学金、优秀学生（2014-2015、2016-2017共两学年）、优秀学生干部（2016-2017共一学年）
- 相关课程：网络应用开发（JAVA）、数据结构与算法、数据库系统原理、计算机网络等
`

let code_ready = `/*
 * 嗨，我是胡炳良。
 * 我想用代码给你展示一下我的个人简历～
 * 灵感来自：http://strml.net
 * 
 * 那么，我要开始啦...
 */

/* 添加一个过渡，使变化看起来更柔和 */
* {
  transition: all 0.3s;
}
/* 加个背景色 */
body {
  background: #455A64;
}
/* 给代码加个边框 */
#code_body {
  width: 100%;
  border: 1px solid #CFD8DC;
  background: #CFD8DC;
  padding: 16px;
  overflow: auto;
}

/* 让代码高亮起来 */
.token.comment, .token.punctuation {
  color: #757575;
}
.token.selector {
  color: #007400;
}
.token.property {
  color: #cf1f1f;
}

/* 
 * 给它们来个特效吧！
 * 让它们在被编辑的时候产生“呼吸”的效果
 */
.breathe {
  animation: breathe 3s ease 0s infinite;
}


/* 现在开始写简历啦！ */

/* 让代码框腾出一些的位置给我的简历框 */
#options {
  width: 32%;
}
/* 准备一个白板 */
#paper {
  flex: 1;
  background: #fdfdfd;
  margin: 16px;
  overflow: auto;
  white-space: pre-wrap;
}

/* 接下来，请看右边 */

`

let code_marked = `
/* 
 * 接下来我要使用一个优秀的库 marked.js
 * 来使我的简历变成一篇 Markdown
 * (https://github.com/markedjs/marked)
 */
`

let code_beautify_resume = `
/* 调整我的简历，让它变得再好看一点 */
#paper {
  white-space: unset;
  padding: 0 32px;
  font-size: 14px;
}
#paper a {
  color: #455A64;
}
#paper ul {
  padding-left: 20px;
}
/* 让每个模块上下间隔明显一点 */
#paper > div {
  margin: 28px 0;
}

/* 接下来是精细的调整 */

/* 首先，调整我的“基础信息”板块 */
#paper h1 {
  font-size: 22px;
  margin-bottom: 10px;
}
#information {
  text-align: center;
}
#information p {
  line-height: 24px;
  white-space: pre-wrap;
}

/* 然后是详细介绍模块 */
#paper h2 {
  font-size: 16px;
  border-bottom: 1px solid #455A64;
  padding-bottom: 6px;
  margin-bottom: 6px;
}
#paper h3 {
  display: inline-block;
  font-size: 14px;
  margin: 6px 0;
}
#skills > ul ul {
  margin: 4px 0;
}
#skills li, #works li, #education li {
  margin-bottom: 4px;
}
#jobs > .experience {
  margin-bottom: 6px;
}

/* 调整“实习经历”和“教育经历”中时间的位置 */
#jobs > .experience, #education {
  position: relative;
}
#jobs p, #education p {
  position: absolute;
  right: 0px;
}
#jobs p {
  top: 6px;
}
#education p {
  top: 40px;
}


/* 接下来添加个头像吧！ */
`

let code_photo = `
/* 把我的头像放在个人信息里 */
#information {
  position: relative;
}
#information .avatar {
  width: 90px;
  position: absolute;
  right: 0px;
  top: -10px;
}
/* 让多余的照片隐藏吧~ */
#information {
  overflow: hidden;
}

/* 
 * 好啦，我的头像出来啦~
 * 期待这张面孔出现在您的面试中
 * 
 *   —— 蔡嘉琳 2019/01 *^_^*
 */
`

var resumeInputTimeoutID, codeInputTimeoutID
writeCode(code_ready, '').then(() => {
  createResume().then(() => {
    adjustResume().then(() => {
      addAndAdjustAvatar().then(showDownloadButton)
    }, () => {
      showFinalResult()
    })
  })
})

var speedCode = 1, duration = 80
$('#speed_btn').click(() => {
  speedCode += 1
  if (speedCode > 3) {
    speedCode = 1
  }
  switch (speedCode) {
    case 1:
      speed_status.innerText = '🚲'
      description.innerText = '开小车车快点吧~'
      duration = 70
      break
    case 2:
      speed_status.innerText = '🚗'
      description.innerText = '太废话了，我要最快！'
      duration = 30
      break
    case 3:
      speed_status.innerText = '🚀'
      description.innerText = '我眼花了！慢一点~'
      duration = 0
      break
    default:
      return 0
  }
})

function writeCode(code, origin) {
  let n = 1
  return new Promise(resolve => {
    codeInputTimeoutID = setTimeout(write, duration)
    function write() {
      code_body.innerHTML = Prism.highlight(origin + code.substr(0, n), Prism.languages.css, 'css');
      code_style.innerHTML = origin + code.substr(0, n)
      code_body.scrollTop = code_body.scrollHeight
      n++
      if (n === code.length) {
        window.clearTimeout(codeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(codeInputTimeoutID)
        codeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}
function writeResume() {
  let n = 1
  return new Promise(resolve => {
    resumeInputTimeoutID = setTimeout(write, duration)
    function write () {
      paper.innerHTML = resume.substr(0, n)
      paper.scrollTop = paper.scrollHeight
      n++
      if (n === resume.length) {
        window.clearTimeout(resumeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(resumeInputTimeoutID)
        resumeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}

function createResume() {
  return new Promise(resolve => {
    $('#paper').addClass('breathe')
    $('#code_body').removeClass('breathe')
    writeResume().then(resolve)
    setTimeout(() => {
      $('#skip_inputResume').show()
      $('#skip_inputResume').click(() => {
        skipResumeInput().then(resolve)
      })
    }, 1000)
  })
}
function adjustResume() {
  return new Promise((resolve, reject) => {
    $('#code_body').addClass('breathe')
    $('#paper').removeClass('breathe')
    writeCode(code_marked, code_ready).then(() => {
      structureResume()
      $('#paper')[0].scrollTop = 0
      writeCode(code_beautify_resume, code_ready + code_marked).then(resolve)
      setTimeout(() => {
        $('#skip_all').show()
        $('#skip_all').click(() => {
          skipAll().then(reject)
        })
      }, 1000)
    })
  })
}
function structureResume() {
  $('#paper')[0].innerHTML = marked(resume)
  $('#paper').prepend('<div id="information"></div>', '<div id="skills"></div>', '<div id="jobs"></div>', '<div id="works"></div>', '<div id="education"></div>')
  $('#information').append($('h1'), $('p').first())
  $('#skills').append($('h2:contains("技能")'), $('ul').first())
  $('#education').append($('h2:contains("教育")'), $('h3:contains("学院")'), $('p').last(), $('ul').last())
  $('#jobs').append($('h2:contains("工作")'))
  $('h3:contains("公司")').each((index, element) => {
    $('<div class="experience"></div>').append($(element), $('#paper > p').first(), $('#paper > ul').first()).appendTo($('#jobs'))
  })
  $('#works').append($('h2:contains("项目")'), $('#paper').children().not($('div')))
  $('a[href="./images/qrcode.png"]').addClass('qrcode-trigger').append($('img.qrcode'))
}
function addAndAdjustAvatar() {
  return new Promise(resolve => {
    $('#information').append($('img.avatar'))
    writeCode(code_photo, code_ready + code_marked + code_beautify_resume).then(() => {
      $('#paper').addClass('breathe')
      $('#code_body').removeClass('breathe')
      $('.skipper').remove()
      setTimeout(resolve, 1000)
    })
  })
}
function showDownloadButton() {
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}

function skipResumeInput() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(resumeInputTimeoutID)
      paper.innerHTML = resume
      paper.scrollTop = paper.scrollHeight
      resolve()
      $('#skip_inputResume').remove()
    }, 0)
  })
}
function skipAll() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(codeInputTimeoutID)
      resolve()
      $('.skipper').remove()
    }, 0)
  })
}
function showFinalResult() {
  $('#paper').addClass('breathe')
  $('#code_body').removeClass('breathe')
  $('#information').append($('img.avatar'))
  code_body.innerHTML = Prism.highlight(code_ready + code_marked + code_beautify_resume + code_photo, Prism.languages.css, 'css');
  code_style.innerHTML = code_ready + code_marked + code_beautify_resume + code_photo
  code_body.scrollTop = code_body.scrollHeight
  window.clearTimeout(codeInputTimeoutID)
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}