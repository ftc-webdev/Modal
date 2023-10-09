'use strict'

import { insertCSS } from "/js/modules/css.js"

const modalInsertCSS = () => {
    let style = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Inter", sans-serif;
        }

        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #222;
            position: relative;
            min-height: 100vh;
        }
        .modal {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.4rem;
            width: 450px;
            padding: 1.3rem;
            min-height: 250px;
            position: absolute;
            top: 20%;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 15px;
            z-index: 2;
        }

        .modal .flex {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .modal input {
            padding: 0.7rem 1rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 0.9em;
        }

        .modal p {
            font-size: 0.9rem;
            color: #777;
            margin: 0.4rem 0 0.2rem;
        }

        button {
            cursor: pointer;
            border: none;
            font-weight: 600;
        }

        .btn {
            display: inline-block;
            padding: 0.8rem 1.4rem;
            font-weight: 700;
            background-color: black;
            color: white;
            border-radius: 5px;
            text-align: center;
            font-size: 1em;
        }

        .btn-open {
            position: absolute;
            bottom: 150px;
        }

        .btn-close {
            transform: translate(10px, -20px);
            padding: 0.5rem 0.7rem;
            background: #eee;
            border-radius: 50%;
        }
        .overlay {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(3px);
            z-index: 1;
        }
        .hidden {
            display: none;
        }    
    `
    insertCSS(style)
}

const insertHTML = (modalContainerId, modalContent) => {

    const html = `
        <section id="modal" class="modal hidden">

            <div class="flex">
                <img src="user.png" width="50px" height="50px" alt="user" />
                <button class="btn-close">⨉</button>
            </div>
            <div>
                <!-- this is the modal contant. should come from an external module -->
                ${modalContent}
            </div>
            
            <input type="email" id="email" placeholder="brendaneich@js.com" />
            <button class="btn">Submit</button>

        </section>
        <div class="overlay hidden"></div>
        <!-- this is the "activation" section -->
        <button class="btn btn-open">Open Modal</button>    
    `
    document.getElementById(modalContainerId).innerHTML = html

}
const init = (modalContainerId, modalContent) => {
    
    modalInsertCSS()

    insertHTML(modalContainerId, modalContent)

    const openModal = function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }

    const closeModal = function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    };
      

    const modal = document.querySelector("#modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".btn-open");
    const closeModalBtn = document.querySelector(".btn-close");

    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
          modalClose();
        }
    });
}


export {
    init,
}
  