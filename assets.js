 export const styles = `
    .widget__container * {
        box-sizing: border-box !important;
    }        

    h3, p, input {
        margin: 0 !important;
        padding: 0 !important;
    }

    .widget__container {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1) !important, 0 0 32px 32px rgba(0, 0, 0, 0.08) !important;
        width: 500px !important;
        overflow: auto !important;
        overflow-y: scroll !important;
        right: -25px !important;
        bottom: 75px !important;
        position: absolute !important;
        transition: max-height .2s ease !important;
        font-family: Helvetica, Arial ,sans-serif !important;
        background-color: #e6e6e6 !important;
        border-radius: 10px !important;
        box-sizing: border-box !important;
    }

    .widget__icon {
        cursor: pointer !important;
        width: 60% !important;
        position: absolute !important;
        top: 18px !important;
        left: 16px !important;
        transition: transform .3s ease !important;
    }

    .widget__hidden {
        transform: scale(0) !important;
    }
    .button__container {
        border: none !important;
        margin: auto !important;
        background-color: #1a535c !important;
        width: 60px !important;
        height: 60px !important;
        border-radius: 50% !important;
        cursor: pointer !important;
        z-index: 10000 !important;
    }

    .widget__container.hidden {
        max-height: 0px !important;
    }

    .widget__header {
        padding: 1rem 2rem 1.5rem !important;
        background-color: #1a535c !important;
        color: #fff !important;
        border-top-left-radius: 10px !important;
        border-top-right-radius: 10px !important;
        text-align: center !important;
    }

    .widget__header h3 {
        font-size: 24px !important;
        font-weight: 400 !important;
        margin-bottom: 8px !important;
    }

    form {
        padding: 2rem 1rem 1.5rem !important;
    }

    form .form__field {
        margin-bottom: 1.5rem !important;
        display: flex !important;
        flex-direction: column !important;
    }

    .form__field label {
        margin-bottom: 8px !important;
        font-size: 14px !important;
    }

    .form__field input,
    .form__field textarea {
        border: 1px solid #1a535c !important;
        border-radius: 3px !important;
        padding: 8px 10px !important;
        background-color: #fff !important;
    }

    .form__field input {
        height: 48px !important;
    }

    .form__field textarea::placeholder {
        font-family: Helvetica, Arial ,sans-serif !important;
    }

    form button {
        height: 48px !important;
        border-radius: 6px !important;
        font-size: 18px !important;
        background-color: #1a535c !important;
        color: #fff !important;
        border: 0 !important;
        width: 100% !important;
        cursor: pointer !important;
    }

    form button:hover {
        background-color: rgba(0, 0, 0, 95%) !important;
    }
    
    .crisis__message {
        font-size: 0.8rem !important;
        border-radius: 15px !important;
        padding: 5px !important;
        margin-bottom: 2rem !important;
        background-color: #ea868e9e !important;
        border: 1px solid #842029 !important;
    }
    .wrapper {
        padding: 3rem !important;
        display: flex !important;
        justify-content: center !important;
        flex-direction: column !important;
        align-content: center !important;
        align-items: center !important;
    }
    .crisis-link__title {
        text-align: center !important;
        font-weight: 500 !important;
        font-size: 1.2rem !important;
        margin-bottom: 1rem !important;
    }
    .crisislink__stepone-wrapper {
        display: flex !important;
        justify-content: center !important;
        grid-gap: 4rem !important;
        margin-bottom: 4rem !important;
    }

    .crisislink__stepone-card {
      cursor: pointer;
        display: flex !important;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px !important,
        rgb(209, 213, 219) 0px 0px 0px 1px inset !important;
        justify-content: center !important;
        align-items: center !important;
        flex-direction: column !important;
        background-color: #fff !important;
        padding: 3rem !important;
        border-radius: 5px !important;
        width: 200px !important;
        height: 100px !important;
    }

    .crisislink__stepone-card:hover {
        box-shadow: rgba(3, 135, 158, 0.569) 0px 0px 0px 3px !important;
    }

    .crisislink__stepone-text {
        display: inline-block !important;
        font-size: 0.9rem !important;
        color: #41496b !important;
    }

    .crisislink__stepone-icon {
        display: inline-block !important;
        font-size: 5rem !important;
        color: #41496b !important;
    }
    .crisis-link__footer-text {
        font-size: 0.9rem !important;
        color: #8390a2 !important;
        line-height: 1.5 !important;
        text-align: center !important;
        a {
            color: #1a535c !important;
        }
    }


    .wcidn-section-header {
        margin-bottom: .5rem !important;
    }
    .map-card {
        display: flex !important;
        background-color: #edf2f7 !important;
         cursor: pointer;
    }

    .right {
        padding-top: 2rem !important;
        padding-left: 2rem !important;
    }
  iframe {
        border: none !important;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px !important;
        border-radius: 5px !important;
        height: 250px !important;
    }

    .welcome__container {
        display: flex !important;
        justify-content: center !important;
        align-content: center !important;
        align-items: center !important;
        flex-direction: column !important;
    }

    .resource__wrapper {
        display: flex !important;
        flex-direction: column !important;
    }

    .crisis-link__title {
        text-align: center !important;
        font-weight: 500 !important;
        font-size: 1.6rem !important;
    }

    .crisis-link__subtitle {
        display: flex !important;
        text-align: center !important;
        color: #5e6367 !important;
        font-size: 0.9rem !important;
        justify-content: center !important;
        align-content: center !important;
        align-items: center !important;
    }

    .wcidn-title {
        font-weight: 700 !important;
        color: #41496b !important;
        margin-bottom: 3rem !important;
        display: inline-block !important;
        margin-top: 2rem !important;
        font-size: 1.1rem !important;
    }

    .wcidn-card {
        padding: 2rem !important;
        box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px !important;
        border-radius: 5px !important;
        margin-bottom: 2rem !important;
        background-color: white !important;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset !important;
    }

    .wcidn-name {
        color: #41496b !important;
        font-weight: 700 !important;
        font-size: .9rem !important;
        margin-bottom: 1rem !important;
        display: inline-block !important;
    }

    .wcidn-number {
        display: inline-block !important;
        margin-bottom: 1rem !important;
    }

    .crisislink__footer-button-container {
        margin-bottom: 3.5rem !important;
        display: flex !important;
        justify-content: space-around !important;
        align-items: center !important;
    }

    .hidden {
        display: none !important;
    }

    .button {
        width: 140px !important;
        cursor: pointer !important;
        padding: .5em !important;
        border-radius: 0.2em !important;
        border: none !important;
        color: white !important;
        font-weight: bold !important;
        font-size: 1em !important;
        transition: all 0.5s ease !important;
        background-color: #1e99ac !important;
    }

    .button:hover {
        background-color: #1e99ac !important;
    }

    .button.disabled {
        opacity: 0.5 !important;
    }

    .button.disabled:hover {
        background-color: #1e99ac !important;
    }

    .form .progress-bar {
        width: 100% !important;
        list-style-type: none !important;
        display: flex !important;
        padding: 0 !important;
        justify-content: center !important;
        margin-bottom: 3.5em !important;
    }

    .form .progress-bar li.progress-bar__dot {
        display: block !important;
        width: 0.6em !important;
        border-radius: 1000em !important;
        height: 0.6em !important;
        border: 0.2em solid #1e99ac !important;
        background-color: white !important;
        cursor: pointer !important;
        transition: all 0.5s ease !important;
    }

    .form .progress-bar li.progress-bar__dot.full {
        background-color: #1e99ac !important;
    }

    .form .progress-bar li.progress-bar__connector {
        display: block !important;
        width: 5em !important;
        border-radius: 1000em !important;
        height: 0.1em !important;
        background-color: #1e99ac !important;
        margin-top: 0.45em !important;
    }

    .form label {
        font-weight: bold !important;
        font-size: 1.2em !important;
    }

    .form input {
        width: 100% !important;
        padding: 1.3em !important;
        margin-bottom: 3em !important;
        box-sizing: border-box !important;
        margin-top: 1em !important;
        border: none !important;
        border-radius: 0.5em !important;
        background-color: #e6e6e6 !important;
        font-size: 1em !important;
        font-family: "Raleway", sans-serif !important;
    }

    .form input:focus {
        border: none !important;
    }

    .form .button-group {
        width: 100% !important;
        display: flex !important;
        justify-content: space-between !important;
        margin-top: 50px !important;
    }

    .form button#validate {
        margin: auto !important;
        background-color: #1A936F !important;
        width: 12em !important;
    }

    .form button#validate:hover {
        background-color: #12684e !important;
    }

    a.button {
        -webkit-appearance: button !important;
        -moz-appearance: button !important;
        appearance: button !important;

        text-decoration: none !important;
        color: #1a535c !important;

        height: 48px !important;
        border-radius: 6px !important;
        font-size: 18px !important;
        background-color: #1a535c !important;
        color: #fff !important;
        border: 0 !important;
        width: 100% !important;
        cursor: pointer !important;
        text-align: center !important;
    
}
`;


export const THE_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 32" fill="none" stroke="#FFFFFF"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
`;

export const CLOSE_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF" stroke="#FFFFFF"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`;
