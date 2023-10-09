'use strict'

import { init as modalInit } from "./modules/modal/index.js"

const modalContent = () => {
    return `
        <h3>Stay in touch</h3>
        <p>
        This is a dummy newsletter form so don't bother trying to test it. Not
        that I expect you to, anyways. :)
        </p>
    `
}

document.addEventListener("DOMContentLoaded", () => {


    modalInit("modal-container", modalContent())


})