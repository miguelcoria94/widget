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
    /**
     * Create and append a div element to the document body
     */
    const container = document.createElement("div");
    container.style.position = "fixed";
    // miguel change
    container.style.zIndex = "10000";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);

    /**
     * Create a button element and give it a class of button__container
     */
    const buttonContainer = document.createElement("button");
    buttonContainer.classList.add("button__container");

    /**
     * Create a span element for the widget icon, give it a class of 'widget__icon', update it's innerHTML property to an icon which would serve as the widget icon.
     */
    const widgetIconElement = document.createElement("span");
    // widgetIconElement.innerHTML = `<span style="color: white; text-align: center;">GHN</span>`;
    widgetIconElement.innerHTML = THE_ICON;
    widgetIconElement.classList.add("widget__icon");
    this.widgetIcon = widgetIconElement;

    /**
     * Create a span element for the close icon, give it a class of 'widget__icon' and 'widget__hidden' which would be removed whenever the widget is closed, update it's innerHTML property to an icon which would serve as the widget icon during that state.
     */
    const closeIconElement = document.createElement("span");
    closeIconElement.innerHTML = CLOSE_ICON;
    closeIconElement.classList.add("widget__icon", "widget__hidden");
    this.closeIcon = closeIconElement;

    /**
     * Append both icons created to the button element and add a `click` event listener on the button to toggle the widget open and close.
     */
    buttonContainer.appendChild(this.widgetIcon);
    buttonContainer.appendChild(this.closeIcon);
    buttonContainer.addEventListener("click", this.toggleOpen.bind(this));

    /**
     * Create a container for the widget and add the following classes:- "widget__hidden", "widget__container"
     */
    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__hidden", "widget__container");

    /**
     * Invoke the `createWidget()` method
     */
    this.createWidgetContent();

    /**
     * Append the widget's content and the button to the container
     */
    container.appendChild(this.widgetContainer);
    container.appendChild(buttonContainer);

    // const previousButton = document.getElementById("previous")
    // const nextButton = document.getElementById("next")
    const meCard = document.getElementById("me-card")
    const someoneElseCard = document.getElementById("someoneelse-card")
    const submitButton = document.getElementById('validate')
    const form = document.getElementById('stepByStepForm')
    // const dots = document.getElementsByClassName('progress-bar__dot')
    const numberOfSteps = 3
    let currentStep = 1

    // previousButton.onclick = goPrevious
    // nextButton.onclick = goNext
    meCard.onclick = goToMe

    someoneElseCard.addEventListener("click", goToSomeoneElse.bind(this));

    function goNext(e) {
      console.log("next")
      e.preventDefault()
      currentStep += 1
      goToStep(currentStep)
    }

    function goToMe(e) {
      console.log("me")
      e.preventDefault()
      goToStep(2)
    }

    function goToSomeoneElse(e) {
      console.log("someone else")
      e.preventDefault()
      goToStep(4)
    }


      function goPrevious(e) {
      e.preventDefault()
      currentStep -= 1
      goToStep(currentStep)
    }

    function goToStep(stepNumber){
      currentStep = stepNumber

      let inputsToHide = document.getElementsByClassName('step')
      let inputs = document.getElementsByClassName(`step${currentStep}`)

      //hide all input
      for (let i = 0; i < inputsToHide.length; ++i) {
        hide(inputsToHide[i])
      }

      //only show the right one
      for (let i = 0; i < inputs.length; ++i) {
        show(inputs[i])
      }

      //if we reached final step
      if(currentStep === numberOfSteps){
        // enable(previousButton)
        // disable(nextButton)
        show(submitButton)
      }

      //else if first step
      else if(currentStep === 1){
        // disable(previousButton)
        // enable(next)
        hide(submitButton)
      }

      else {
        // enable(previousButton)
        // enable(next)
        // hide(submitButton)
      }
    }

    function enable(elem) {
      elem.classList.remove("disabled");
      elem.disabled = false;
    }

    function disable(elem) {
      elem.classList.add("disabled");
      elem.disabled = true;
    }

    function show(elem){
      elem.classList.remove('hidden')
    }

    function hide(elem){
      elem.classList.add('hidden')
    }
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
                <p class="crisislink__stepone-text">Contact Crisis Services</p>
            </span>
            </div>

            <div id="ask-questions">
            <span class="crisislink__stepone-card">
                <span class="las la-users crisislink__stepone-icon"></span>

                <p class="crisislink__stepone-text">Ask Questions & Be Direct</p>
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
      this.createWidgetContent();
      this.widgetIcon.classList.remove("widget__hidden");
      this.closeIcon.classList.add("widget__hidden");
      this.widgetContainer.classList.add("widget__hidden");
    }
  }
}

function initializeWidget() {
  return new GHNWidget();
}

initializeWidget();
