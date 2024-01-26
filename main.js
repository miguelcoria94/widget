import { CLOSE_ICON, THE_ICON, styles } from "./assets.js";

class GHNWidget {
  constructor(position = "bottom-right") {
    this.position = this.getPosition(position);
    this.open = false;
    this.initialize();
    this.injectStyles();
  }

  position = "";
  open = false;
  widgetContainer = null;

  getPosition(position) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: "30px",
      [horizontal]: "30px",
    };
  }

  async initialize() {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.zIndex = "10000";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);

    const buttonContainer = document.createElement("button");
    buttonContainer.classList.add("button__container");

    const widgetIconElement = document.createElement("span");
    widgetIconElement.innerHTML = THE_ICON;
    widgetIconElement.classList.add("widget__icon");
    this.widgetIcon = widgetIconElement;

    const closeIconElement = document.createElement("span");
    closeIconElement.innerHTML = CLOSE_ICON;
    closeIconElement.classList.add("widget__icon", "widget__hidden");
    this.closeIcon = closeIconElement;

    buttonContainer.appendChild(this.widgetIcon);
    buttonContainer.appendChild(this.closeIcon);
    buttonContainer.addEventListener("click", this.toggleOpen.bind(this));

    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__hidden", "widget__container");

    this.createWidgetContent();

    container.appendChild(this.widgetContainer);
    container.appendChild(buttonContainer);
  }

  createWidgetContent() {
    this.widgetContainer.innerHTML = `
    <form id="stepByStepForm" class="form">
    <div class="step step1"zz>
        <div class="wrapper">
        <div class="welcome__container">
            <h3 class="crisis-link__title">
            Who is having a Mental Health Crisis?
            </h3>
        </div>
        <div class="crisislink__stepone-wrapper">
            <div id="me-card">
            <span class="crisislink__stepone-card">
                <span class="las la-user crisislink__stepone-icon"></span>
                <p class="crisislink__stepone-text">Me</p>
            </span>
            </div>

            <div id="someoneelse-card">
            <span class="crisislink__stepone-card">
                <span class="las la-users crisislink__stepone-icon"></span>

                <p class="crisislink__stepone-text">Someone Else</p>
            </span>
            </div>
        </div>
        </div>
    </div>

    <section class="step step3 hidden">
      <div class="wrapper">
        <div>
          <h3 class="crisis-link__title" style="text-align: center">Ask Questions and Be Direct</h3>
        </div>
        
        <p>It’s okay to ask the following questions and be direct when talking about suicide. Contact one of the crisis services numbers if someone you know is suicidal and remember you don’t have to deal with this alone.


        </p>
        <div class="modal__question-container">
            <div class="modal__question question-left">
                <p>"Are you thinking about suicide or taking your own life?"</p>
            </div>
            <div class="modal__question question-right">
                <p>"Do you have a plan to hurt yourself or take your own life?"</p>
            </div>
            <div class="modal__question question-left">
                <p>"Have you thought about when you would do it (today, tomorrow, next week)?"</p>
            </div>
            <div class="modal__question question-right">
                <p>"Have you thought about what method you would use?"</p>
            </div>
        </div>
      </div>
    </section>


    <div class="step step4 hidden">
        <div class="wrapper">
        <div class="welcome__container">
            <h3 class="crisis-link__title">
            What can you do to help?
            </h3>
        </div>
        <div class="crisislink__stepone-wrapper">
            <div id="contact-crisis-services">
            <span class="crisislink__stepone-card">
                <span class="las la-user crisislink__stepone-icon"></span>
                <p class="crisislink__stepone-text" style="text-align: center">Contact Crisis Services</p>
            </span>
            </div>

            <div id="ask-questions" >
            <span class="crisislink__stepone-card">
                <span class="las la-users crisislink__stepone-icon"></span>

                <p class="crisislink__stepone-text" style="text-align: center">Ask Questions & Be Direct</p>
            </span>
            </div>
        </div>
        </div>
    </div>

    <div class="step step2 hidden" style="height: 60vh;">
            <div class="wrapper">
                <div class="welcome__container">
                  <h3 class="crisis-link__title">What can I do now?</h3>
                  <div class="crisis-link__subtitle">
                    <p>
                      If you are in crisis or would like emotional support, you can talk
                      to the following support services at any time.
                    </p>
                  </div>
                </div>

                <div>
                  <div class="wcidn-card">
                    <div class="wcidn-section-header">
                      <span class="wcidn-name">Local Emergency Services</span> <br />
                      <a class="wcidn-number button" href="tel:911">Call 911</a>
                    </div>
                    <div class="wcidn-section-body">
                      <span class="wcidn-section-text small-text">
                        Dial 911 to communicate about where you are and send someone to
                        support you immediately. On the Phone ask for someone who is on
                        the Crisis Intervention Team (CIT).
                      </span>
                    </div>
                  </div>
                  <div class="wcidn-card">
                    <div class="wcidn-section-header small-text">
                      <span class="wcidn-name">National Suicide Prevention Lifeline</span>
                      <br />
                      <button class="wcidn-number" href="tel:988">
                        Call 988
                      </button>
                    </div>
                    <div class="wcidn-section-body">
                      <span class="wcidn-section-text small-text">
                        Dial 988 to reach the National Suicide Prevention Lifeline.
                        Trained professionals are on call 24/7 to speak with individuals
                        who are in crisis.
                      </span>
                    </div>
                  </div>
                  <div class="wcidn-card">
                    <div class="wcidn-section-header">
                      <span class="wcidn-name">Crisis Text Line </span> <br />
                      <button class="wcidn-number btn main" href="sms:741741">Text 741-741</button>
                    </div>
                    <div class="wcidn-section-body">
                      <span class="wcidn-section-text small-text">
                        Text "hello" to 741-741 to reach the Crisis Text Line. Trained
                        professionals are available 24/7 to text message with individuals
                        who are in crisis.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </form>
    `;
    setTimeout(() => {
      this.attachEventListeners();
    }, 0);
  }

  attachEventListeners() {
    const meCard = document.getElementById("me-card");
    const someoneElseCard = document.getElementById("someoneelse-card");
    const submitButton = document.getElementById("validate");
    const seResources = document.getElementById("contact-crisis-services");
    const askResources = document.getElementById("ask-questions");

    if (meCard) meCard.onclick = this.goToMe.bind(this);
    if (someoneElseCard)
      someoneElseCard.addEventListener(
        "click",
        this.goToSomeoneElse.bind(this)
      );
    if (seResources) seResources.onclick = this.goToMe.bind(this);
    if (askResources) askResources.onclick = this.goToQuestions.bind(this);
  }
  goToMe(e) {
    e.preventDefault();
    this.goToStep(2);
  }

  goToSomeoneElse(e) {
    e.preventDefault();
    this.goToStep(4);
  }

  goToQuestions(e) {
    e.preventDefault();
    this.goToStep(3);
  }

  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");

    document.head.appendChild(styleTag);
  }

  goToStep(stepNumber) {
    let currentStep = stepNumber;
    let inputsToHide = document.getElementsByClassName("step");
    let inputs = document.getElementsByClassName(`step${currentStep}`);

    for (let i = 0; i < inputsToHide.length; i++) {
      inputsToHide[i].classList.add("hidden");
    }

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("hidden");
    }

    // Add here any additional logic needed for enabling/disabling buttons and showing/hiding elements
  }

  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
    document.head.appendChild(styleTag);
  }

  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.widgetIcon.classList.add("widget__hidden");
      this.closeIcon.classList.remove("widget__hidden");
      this.widgetContainer.classList.remove("widget__hidden");
    } else {
      this.resetWidget();
      this.widgetIcon.classList.remove("widget__hidden");
      this.closeIcon.classList.add("widget__hidden");
      this.widgetContainer.classList.add("widget__hidden");
    }
  }

  resetWidget() {
    // Reset to initial state (Step 1)
    this.goToStep(1);

    // Optionally, if you need to reset any specific content or state, do it here
    // For example, clearing form fields, resetting variables, etc.
  }
}

function initializeWidget() {
  return new GHNWidget();
}

initializeWidget();
