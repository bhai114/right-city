const cityIds = ["shanghai", "beijing", "hangzhou", "chengdu", "shenzhen", "dali"];

const cities = {
  shanghai: {
    name: "上海",
    image: "assets/shanghai.jpg",
    imageAlt: "上海浦东夜景与城市天际线",
    subtitle: "让野心、审美与日常效率，在同一条街道上相遇。",
    fit: "上海适合愿意主动连接资源，也愿意为丰富选择支付更高生活成本的人。",
    reasons: [
      ["机会密度", "你期待工作带来更大的视野与流动性，上海的行业跨度和国际连接会放大这种期待。"],
      ["城市审美", "展览、演出、街区与餐饮选择足够密集，适合把文化体验放进普通工作日。"],
      ["高效移动", "成熟的公共交通和高度集中的城市服务，能减少日常安排里的摩擦。"],
    ],
    idealDay: "早上沿街买咖啡，通勤时处理工作。晚上临时决定去看展或见朋友，一天的选择很多，但大多触手可及。",
    tradeoff: "住房成本、通勤距离和持续竞争感会消耗精力。你需要主动保护休息时间。",
    altCopy: "如果你想保留高密度机会与文化生活，上海仍是最直接的选项。",
    creditName: "上海浦东全景，Rodrigo.Argenton，CC BY-SA 4.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Shanghai_skyline_2018(cropped).jpg",
  },
  beijing: {
    name: "北京",
    image: "assets/beijing.jpg",
    imageAlt: "北京故宫建筑与远处城市天际线",
    subtitle: "在历史纵深、公共议题与专业理想之间，建立自己的坐标。",
    fit: "北京更适合对知识、公共文化和专业影响力有持续兴趣，也能接受强烈季节与城市尺度的人。",
    reasons: [
      ["专业纵深", "你不只关心职位，也在意一件事能否做深。北京的研究、内容与公共资源更容易形成长期积累。"],
      ["文化浓度", "历史空间、现场演出和持续发生的讨论，让你的精神生活不必只依赖消费。"],
      ["清晰四季", "你对季节变化有感受，也愿意让生活跟着气候转换节奏。"],
    ],
    idealDay: "上午专注完成一段工作，午后在树荫或旧街区走一段路，晚上听一场讲座或演出，再和朋友聊到很晚。",
    tradeoff: "城市跨度大，冬季干冷，通勤与住房选择需要更谨慎地平衡。",
    altCopy: "如果你重视专业深度、公共文化和思想碰撞，北京会给你很长的跑道。",
    creditName: "北京故宫与城市天际线，Daniel Case，CC BY-SA 3.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Eastern_Beijing_skyline_from_Forbidden_City.jpg",
  },
  hangzhou: {
    name: "杭州",
    image: "assets/hangzhou.jpg",
    imageAlt: "杭州西湖水面、游船与远山",
    subtitle: "把成长放在山水旁边，让快与慢不必二选一。",
    fit: "杭州适合仍然看重职业成长，但希望自然、居住感和个人节奏能进入日常的人。",
    reasons: [
      ["成长与松弛", "你想继续向前，但不愿把全部生活交给工作。杭州能在产业机会和休闲空间之间提供折中。"],
      ["自然可达", "湖、山与绿道并非周末远行，短时间就能把你从高强度的信息里抽离出来。"],
      ["轻巧日常", "骑行、步行和相对集中的生活半径，适合建立稳定又有变化的个人习惯。"],
    ],
    idealDay: "上午高效工作，傍晚绕湖或沿河骑行。周末不用做复杂计划，就能在山、水和街区之间切换。",
    tradeoff: "热门区域成本不低，湿热气候与快速变化的互联网工作节奏未必适合所有人。",
    altCopy: "如果你要的是职业机会、自然距离和生活松弛感的平衡，杭州很接近答案。",
    creditName: "杭州西湖，Jakub Hałun，CC BY-SA 3.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:20090524_Hangzhou_West_Lake_7531.jpg",
  },
  chengdu: {
    name: "成都",
    image: "assets/chengdu.jpg",
    imageAlt: "成都锦江夜景与城市灯光",
    subtitle: "把日子过得有味道，也给关系和兴趣留出余地。",
    fit: "成都适合重视生活内容、朋友关系与消费性价比，不愿长期处在紧绷状态的人。",
    reasons: [
      ["生活优先", "你愿意认真工作，但更希望工作服务于生活。成都更容易让吃饭、见面和休息成为稳定日常。"],
      ["关系温度", "你重视熟悉的社交网络和自然发生的相处，城市的开放感会降低建立关系的门槛。"],
      ["文化活力", "从现场音乐到社区小店，丰富体验不必建立在很高的预算上。"],
    ],
    idealDay: "工作结束后约朋友吃饭，沿河散步，再去听一场小型演出。周末可以睡晚一点，也可以临时出发去近郊。",
    tradeoff: "阴雨天气较多，部分行业的高阶机会不如一线城市集中，需要确认你的职业路径。",
    altCopy: "如果你更在意生活滋味、关系温度和可持续的节奏，成都值得长期停留。",
    creditName: "成都锦江夜景，Prcmise，CC BY-SA 4.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:%E9%94%A6%E6%B1%9F%E5%A4%9C%E6%99%AF.jpg",
  },
  shenzhen: {
    name: "深圳",
    image: "assets/shenzhen.jpg",
    imageAlt: "远眺深圳城市天际线",
    subtitle: "用务实、速度和新机会，换一条更直接的上升路径。",
    fit: "深圳适合行动导向、相信能力可以快速兑换成机会，也偏爱年轻城市规则的人。",
    reasons: [
      ["结果导向", "你希望投入和回报之间的关系更清晰。深圳务实的工作文化更容易让行动被看见。"],
      ["新的可能", "你对新行业、新工具和快速变化保持开放，不太依赖传统身份与旧有路径。"],
      ["温暖海风", "偏暖气候、滨海空间和更长的户外季节，能延展你的日常活动范围。"],
    ],
    idealDay: "早上快速进入工作，傍晚去公园跑步或看海。你愿意认识来自不同地方的人，也习惯用行动建立新的圈子。",
    tradeoff: "城市历史感相对较弱，工作节奏可能很快，夏季湿热也需要适应。",
    altCopy: "如果你相信快速行动和新行业会打开生活，深圳能给你直接反馈。",
    creditName: "深圳天际线，Sparktour，CC BY-SA 4.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Skyline_of_Shenzhen_from_Hong_Kong.jpg",
  },
  dali: {
    name: "大理",
    image: "assets/dali.jpg",
    imageAlt: "大理洱海、树木与远山",
    subtitle: "让时间重新变宽，把真正重要的事放回每天。",
    fit: "大理适合重视自由、自然和自主时间，且工作地点或收入结构相对灵活的人。",
    reasons: [
      ["自主节奏", "你不想让统一的上下班时间定义每一天，更愿意围绕精力和真正重要的事安排生活。"],
      ["自然陪伴", "你需要的不只是周末旅行，而是抬头就能看到山水，让自然成为稳定的情绪背景。"],
      ["低密度关系", "你偏爱松散但真诚的连接，也能享受一个人工作、散步和思考。"],
    ],
    idealDay: "上午在安静的房间里完成工作，午后沿洱海走一段，买菜做饭。晚上的安排很少，但时间属于自己。",
    tradeoff: "岗位和公共服务选择有限，旅游旺季会改变生活成本与社区节奏，远程收入很重要。",
    altCopy: "如果你最想守住自由时间、自然距离和内在秩序，大理会很有吸引力。",
    creditName: "大理洱海，Pixabay 用户 4537668，CC0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:%E6%B4%B1%E6%B5%B7-2064559.jpg",
  },
};

const questions = [
  {
    kicker: "早晨的城市",
    title: "理想的一天，应该怎样开始？",
    context: "你对早晨的选择，往往藏着真正想要的生活速度。",
    options: [
      option("早一点进入状态", "通勤、咖啡、清单，城市越快我越清醒。", { shanghai: 3, shenzhen: 3, beijing: 2 }, ["效率", "成长"]),
      option("先看见一点自然", "散步、骑行或晒太阳，再开始工作。", { hangzhou: 3, dali: 3, chengdu: 1 }, ["自然", "松弛"]),
      option("慢慢醒来就好", "不赶时间，给自己留一顿完整早餐。", { chengdu: 3, dali: 3, hangzhou: 1 }, ["松弛", "日常感"]),
      option("被新鲜事叫醒", "新展览、新项目或新朋友都能让我出门。", { shanghai: 3, beijing: 3, shenzhen: 1 }, ["文化", "探索"]),
    ],
  },
  {
    kicker: "工作的意义",
    title: "现在的你，更想从工作中得到什么？",
    context: "城市的机会结构，会长期影响一个人看待工作的方式。",
    options: [
      option("更高的平台", "行业密度、收入上限和履历都很重要。", { shanghai: 3, beijing: 2, shenzhen: 3 }, ["成长", "机会"]),
      option("专业上的深度", "我想把一件事做久、做透，也产生影响。", { beijing: 3, shanghai: 2, hangzhou: 1 }, ["专业", "文化"]),
      option("稳定的成长", "工作要向前，但不能吞掉全部生活。", { hangzhou: 3, chengdu: 2, shenzhen: 1 }, ["平衡", "成长"]),
      option("更多自主权", "地点、时间和路径最好由我自己安排。", { dali: 3, chengdu: 2, hangzhou: 1 }, ["自由", "松弛"]),
    ],
  },
  {
    kicker: "周末半径",
    title: "没有计划的周末，你更可能去哪里？",
    context: "不需要提前安排的去处，才是城市真正提供给你的日常。",
    options: [
      option("展览或演出", "我需要稳定的新内容和观点刺激。", { shanghai: 3, beijing: 3, chengdu: 1 }, ["文化", "探索"]),
      option("山边或水边", "自然比商业空间更能让我恢复。", { dali: 3, hangzhou: 3, shenzhen: 1 }, ["自然", "恢复"]),
      option("街巷和小店", "边走边吃，顺便和朋友坐很久。", { chengdu: 3, shanghai: 1, hangzhou: 2 }, ["日常感", "关系"]),
      option("运动或学习", "休息也可以是更新自己的一种方式。", { shenzhen: 3, hangzhou: 2, beijing: 2 }, ["成长", "行动"]),
    ],
  },
  {
    kicker: "人与人之间",
    title: "你期待怎样的社交距离？",
    context: "同一座城市，会因为关系密度不同而呈现完全不同的面貌。",
    options: [
      option("不断认识新的人", "跨行业、跨文化的连接让我保持兴奋。", { shanghai: 3, shenzhen: 3, beijing: 2 }, ["连接", "探索"]),
      option("有几个稳定的圈子", "可以常见面，也保留彼此的空间。", { chengdu: 3, hangzhou: 2, beijing: 1 }, ["关系", "稳定"]),
      option("独处也很舒服", "低密度关系让我更有能量。", { dali: 3, hangzhou: 2, chengdu: 1 }, ["自由", "安静"]),
      option("因兴趣自然相遇", "我更喜欢围绕内容和共同爱好建立联系。", { beijing: 3, shanghai: 2, chengdu: 2 }, ["文化", "连接"]),
    ],
  },
  {
    kicker: "气候偏好",
    title: "哪一种天气，更像你的生活背景？",
    context: "气候会改变情绪、穿衣、出行，也会改变一年中的生活节拍。",
    options: [
      option("四季分明", "冷暖变化会让我感到时间在流动。", { beijing: 3, shanghai: 2, hangzhou: 1 }, ["季节", "秩序"]),
      option("温暖而有阳光", "我想尽可能多地待在户外。", { shenzhen: 3, dali: 2, chengdu: 1 }, ["户外", "行动"]),
      option("湿润有绿意", "雨水没有关系，我在意植物和空气。", { hangzhou: 3, chengdu: 2, shanghai: 1 }, ["自然", "细腻"]),
      option("凉爽且干净", "清透的空气和舒适体感最重要。", { dali: 3, beijing: 1, hangzhou: 1 }, ["自然", "安静"]),
    ],
  },
  {
    kicker: "生活成本",
    title: "你愿意怎样交换城市资源？",
    context: "预算不只是数字，也代表你愿意为哪些体验做长期取舍。",
    options: [
      option("高成本换高密度", "只要机会和体验足够多，我接受更高开支。", { shanghai: 3, beijing: 2, shenzhen: 2 }, ["机会", "效率"]),
      option("成本与机会平衡", "不追求最低，但希望住得舒服、发展也不错。", { hangzhou: 3, chengdu: 2, shenzhen: 1 }, ["平衡", "稳定"]),
      option("日常性价比更重要", "房租和消费不该挤压休息与兴趣。", { chengdu: 3, dali: 2, hangzhou: 1 }, ["日常感", "松弛"]),
      option("可以缩小物质需求", "如果时间更自由、环境更好，我愿意少消费。", { dali: 3, chengdu: 1, hangzhou: 1 }, ["自由", "自然"]),
    ],
  },
  {
    kicker: "移动方式",
    title: "怎样的城市尺度，会让你觉得轻松？",
    context: "通勤与移动方式，决定了每天有多少时间真正属于自己。",
    options: [
      option("轨道交通连接一切", "远一点没关系，重要的是到达稳定。", { shanghai: 3, beijing: 3, shenzhen: 2 }, ["效率", "连接"]),
      option("骑车就能完成日常", "工作、吃饭和散步最好在同一片区域。", { hangzhou: 3, chengdu: 2, dali: 1 }, ["轻巧", "平衡"]),
      option("步行可达的小城感", "我更在意熟悉、缓慢和随时停下来。", { dali: 3, chengdu: 2, hangzhou: 1 }, ["安静", "日常感"]),
      option("道路清晰、行动直接", "新城区的秩序和效率让我更安心。", { shenzhen: 3, shanghai: 2, hangzhou: 1 }, ["行动", "秩序"]),
    ],
  },
  {
    kicker: "未来三年",
    title: "你最想守住的，是什么？",
    context: "适合的城市不是永远的答案，只需要接住你现在最重要的事。",
    options: [
      option("向上的可能", "我想看看自己的能力究竟能走多远。", { shanghai: 3, shenzhen: 3, beijing: 2 }, ["机会", "成长"]),
      option("长期的积累", "我想建立专业、关系和更稳定的根基。", { beijing: 3, hangzhou: 2, chengdu: 1 }, ["专业", "稳定"]),
      option("完整的生活", "工作以外，我还要有朋友、兴趣与休息。", { chengdu: 3, hangzhou: 3, dali: 1 }, ["平衡", "关系"]),
      option("真正的自由", "我想把时间还给自己，重新定义成功。", { dali: 3, chengdu: 1, shenzhen: 1 }, ["自由", "安静"]),
    ],
  },
];

const traitLabels = {
  效率: "高效直接",
  成长: "持续成长",
  自然: "亲近自然",
  松弛: "松弛节奏",
  日常感: "重视日常",
  文化: "文化浓度",
  探索: "喜欢探索",
  机会: "机会密度",
  专业: "专业纵深",
  平衡: "工作生活平衡",
  自由: "自主自由",
  恢复: "需要恢复空间",
  关系: "关系温度",
  行动: "行动导向",
  连接: "开放连接",
  稳定: "稳定积累",
  安静: "偏爱安静",
  季节: "四季感受",
  秩序: "清晰秩序",
  户外: "户外生活",
  细腻: "感受细腻",
  轻巧: "轻巧半径",
};

function option(title, description, weights, traits) {
  return { title, description, weights, traits };
}

const state = {
  screen: "intro",
  questionIndex: 0,
  answers: Array(questions.length).fill(null),
  result: null,
};

const app = document.querySelector("#app");
const headerNote = document.querySelector("#headerNote");
const brandButton = document.querySelector("#brandButton");
const toast = document.querySelector("#toast");
let toastTimer;

brandButton.addEventListener("click", () => {
  if (state.screen === "intro") return;
  const shouldReset = window.confirm("返回首页会清空当前选择，确认返回吗？");
  if (shouldReset) resetQuiz();
});

function cloneTemplate(id) {
  return document.querySelector(id).content.cloneNode(true);
}

function renderIntro() {
  state.screen = "intro";
  headerNote.textContent = "8 道生活方式选择题";
  app.replaceChildren(cloneTemplate("#introTemplate"));
  document.querySelector("#startButton").addEventListener("click", startQuiz);
}

function startQuiz() {
  state.screen = "quiz";
  state.questionIndex = 0;
  state.answers.fill(null);
  state.result = null;
  renderQuestion();
}

function renderQuestion() {
  state.screen = "quiz";
  const current = questions[state.questionIndex];
  const selected = state.answers[state.questionIndex];
  const fragment = cloneTemplate("#quizTemplate");

  fragment.querySelector("#progressCurrent").textContent = String(state.questionIndex + 1).padStart(2, "0");
  fragment.querySelector("#questionKicker").textContent = current.kicker;
  fragment.querySelector("#questionTitle").textContent = current.title;
  fragment.querySelector("#questionContext").textContent = current.context;
  fragment.querySelector("#backButton").innerHTML = state.questionIndex === 0
    ? '<span aria-hidden="true">←</span> 首页'
    : '<span aria-hidden="true">←</span> 上一题';

  const ticks = fragment.querySelector("#progressTicks");
  questions.forEach((_, index) => {
    const tick = document.createElement("span");
    tick.className = "progress-tick";
    if (index < state.questionIndex) tick.classList.add("is-complete");
    if (index === state.questionIndex) tick.classList.add("is-current");
    tick.setAttribute("aria-label", `第 ${index + 1} 题${index < state.questionIndex ? "，已完成" : index === state.questionIndex ? "，当前" : ""}`);
    ticks.append(tick);
  });

  const grid = fragment.querySelector("#optionsGrid");
  current.options.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", selected === index ? "true" : "false");
    button.dataset.index = String(index);
    button.innerHTML = `
      <span class="option-index" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
      <span>
        <span class="option-title">${answer.title}</span>
        <span class="option-description">${answer.description}</span>
      </span>
    `;
    button.addEventListener("click", () => selectAnswer(index));
    button.addEventListener("keydown", handleOptionKeys);
    grid.append(button);
  });

  const nextButton = fragment.querySelector("#nextButton");
  nextButton.disabled = selected === null;
  nextButton.firstChild.textContent = state.questionIndex === questions.length - 1 ? "查看结果 " : "继续 ";

  app.replaceChildren(fragment);
  headerNote.textContent = `第 ${state.questionIndex + 1} 题，共 ${questions.length} 题`;

  document.querySelector("#backButton").addEventListener("click", goBack);
  document.querySelector("#nextButton").addEventListener("click", goNext);
}

function selectAnswer(index) {
  state.answers[state.questionIndex] = index;
  const options = [...document.querySelectorAll(".option-button")];
  options.forEach((button, buttonIndex) => {
    button.setAttribute("aria-checked", buttonIndex === index ? "true" : "false");
  });
  document.querySelector("#nextButton").disabled = false;
  document.querySelector("#selectionError").textContent = "";
}

function handleOptionKeys(event) {
  if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(event.key)) return;
  event.preventDefault();
  const options = [...document.querySelectorAll(".option-button")];
  const currentIndex = options.indexOf(event.currentTarget);
  const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
  const nextIndex = (currentIndex + direction + options.length) % options.length;
  options[nextIndex].focus();
  selectAnswer(nextIndex);
}

function goBack() {
  if (state.questionIndex === 0) {
    resetQuiz();
    return;
  }
  state.questionIndex -= 1;
  renderQuestion();
}

function goNext() {
  if (state.answers[state.questionIndex] === null) {
    document.querySelector("#selectionError").textContent = "请先选择一个更接近你的答案。";
    return;
  }

  if (state.questionIndex < questions.length - 1) {
    state.questionIndex += 1;
    renderQuestion();
    requestAnimationFrame(() => document.querySelector("#questionTitle").focus?.());
    return;
  }

  showLoading();
}

function showLoading() {
  state.screen = "loading";
  headerNote.textContent = "正在生成城市画像";
  app.replaceChildren(cloneTemplate("#loadingTemplate"));
  window.setTimeout(() => {
    state.result = calculateResult();
    renderResult();
  }, 950);
}

function calculateResult() {
  const scores = Object.fromEntries(cityIds.map((id) => [id, 0]));
  const traits = {};

  state.answers.forEach((answerIndex, questionIndex) => {
    const answer = questions[questionIndex].options[answerIndex];
    Object.entries(answer.weights).forEach(([city, weight]) => {
      if (scores[city] !== undefined) scores[city] += weight;
    });
    answer.traits.forEach((trait) => {
      traits[trait] = (traits[trait] || 0) + 1;
    });
  });

  const ranked = cityIds
    .map((id) => ({ id, score: scores[id] }))
    .sort((a, b) => b.score - a.score || cityIds.indexOf(a.id) - cityIds.indexOf(b.id));
  const topTraits = Object.entries(traits)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([trait]) => traitLabels[trait] || trait);
  const maxScore = questions.length * 3;

  return {
    ranked,
    topTraits,
    match: Math.round((ranked[0].score / maxScore) * 100),
  };
}

function renderResult() {
  state.screen = "result";
  const fragment = cloneTemplate("#resultTemplate");
  const winner = state.result.ranked[0];
  const city = cities[winner.id];

  fragment.querySelector("#resultImage").src = city.image;
  fragment.querySelector("#resultImage").alt = city.imageAlt;
  fragment.querySelector("#resultTitle").textContent = city.name;
  fragment.querySelector("#resultSubtitle").textContent = city.subtitle;
  fragment.querySelector("#matchScore").textContent = `${state.result.match}%`;
  fragment.querySelector("#resultIntro").textContent = `你的选择反复指向“${state.result.topTraits[0]}”和“${state.result.topTraits[1]}”。${city.fit}`;
  fragment.querySelector("#idealDay").textContent = city.idealDay;
  fragment.querySelector("#tradeoff").textContent = city.tradeoff;

  const traitList = fragment.querySelector("#traitList");
  state.result.topTraits.forEach((trait) => {
    const span = document.createElement("span");
    span.className = "trait";
    span.textContent = trait;
    traitList.append(span);
  });

  const reasonGrid = fragment.querySelector("#reasonGrid");
  city.reasons.forEach(([title, copy]) => {
    const article = document.createElement("article");
    article.className = "reason-item";
    article.innerHTML = `<h3>${title}</h3><p>${copy}</p>`;
    reasonGrid.append(article);
  });

  const alternativesList = fragment.querySelector("#alternativesList");
  state.result.ranked.slice(1, 3).forEach((item) => {
    const alternative = cities[item.id];
    const match = Math.round((item.score / (questions.length * 3)) * 100);
    const article = document.createElement("article");
    article.className = "alternative-item";
    article.innerHTML = `
      <img src="${alternative.image}" alt="${alternative.imageAlt}" />
      <div class="alternative-copy">
        <div class="alternative-heading">
          <h3>${alternative.name}</h3>
          <strong>${match}%</strong>
        </div>
        <p>${alternative.altCopy}</p>
      </div>
    `;
    alternativesList.append(article);
  });

  const creditsList = fragment.querySelector("#creditsList");
  Object.values(cities).forEach((item) => {
    const link = document.createElement("a");
    link.href = item.creditUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = `${item.creditName}，Wikimedia Commons`;
    creditsList.append(link);
  });

  app.replaceChildren(fragment);
  headerNote.textContent = `匹配结果：${city.name}`;
  document.querySelector("#restartButton").addEventListener("click", startQuiz);
  document.querySelector("#shareButton").addEventListener("click", shareResult);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function shareResult() {
  const city = cities[state.result.ranked[0].id];
  const text = `我的城市适配结果是${city.name}，生活方式重合度 ${state.result.match}%。${city.subtitle}`;

  try {
    if (navigator.share) {
      await navigator.share({ title: "城市适配测试", text });
      return;
    }
    await navigator.clipboard.writeText(text);
    showToast("结果已复制，可以发给朋友了。 ");
  } catch (error) {
    if (error.name !== "AbortError") showToast("未能自动分享，请稍后再试。 ");
  }
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message.trim();
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function resetQuiz() {
  state.questionIndex = 0;
  state.answers.fill(null);
  state.result = null;
  window.scrollTo({ top: 0, behavior: "auto" });
  renderIntro();
}

renderIntro();
