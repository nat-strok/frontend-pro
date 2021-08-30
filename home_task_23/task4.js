"use strict";
document.addEventListener('DOMContentLoaded', () => {

    class Calc {
        #theNum;
        #oldNum;

        static el(el) {
            if (el.charAt(0) === "#") {
                return document.querySelector(el);
            }
            return document.querySelectorAll(el);
        }

        constructor() {
            this.viewer = Calc.el("#viewer");
            this.equals = Calc.el("#equals");
            this.nums = Calc.el(".num");
            this.ops = Calc.el(".ops");
            this.resultNum = '';
            this.operator = '';
            this.#theNum = '';
            this.#oldNum = '';

            this.nums.forEach(num => num.addEventListener('click', e => this.setNum(e)));
            this.ops.forEach(op => op.addEventListener('click', e => this.moveNum(e)));
            this.equals.addEventListener('click', () => this.displayNum());
            Calc.el("#clear").addEventListener('click', () => this.clearAll());
            Calc.el("#reset").addEventListener('click', () => window.location.reload());
        }

        setNum(e) {
            if (this.resultNum) {
                this.#theNum = e.target.getAttribute('data-num');
                this.resultNum = "";
            } else {
                this.#theNum += e.target.getAttribute('data-num');
            }
            this.viewer.innerHTML = this.#theNum;
        };

        moveNum(e) {
            this.#oldNum = this.#theNum;
            this.#theNum = "";
            this.operator = e.target.getAttribute('data-ops');
            this.equals.setAttribute("data-result", "");
        };

        displayNum() {
            this.#oldNum = parseFloat(this.#oldNum);
            this.#theNum = parseFloat(this.#theNum);

            switch (this.operator) {
                case "plus":
                    this.resultNum = this.#oldNum + this.#theNum;
                    break;
                case "minus":
                    this.resultNum = this.#oldNum - this.#theNum;
                    break;
                case "times":
                    this.resultNum = this.#oldNum * this.#theNum;
                    break;
                case "divided by":
                    this.resultNum = this.#oldNum / this.#theNum;
                    break;
                default:
                    this.resultNum = this.#theNum;
            }

            if (!isFinite(this.resultNum)) {
                if (isNaN(this.resultNum)) {
                    this.resultNum = "You broke it!";
                } else {
                    this.resultNum = "Look at what you've done";
                    Calc.el('#calculator').classList.add("broken");
                    Calc.el('#reset').classList.add("show");
                }
            }

            this.viewer.innerHTML = this.resultNum;
            this.equals.setAttribute("data-result", this.resultNum);
            this.#oldNum = 0;
            this.#theNum = this.resultNum;
        };

        clearAll() {
            this.#oldNum = "";
            this.#theNum = "";
            this.viewer.innerHTML = "0";
            this.equals.setAttribute("data-result", this.resultNum);
        };
    }

    let calc = new Calc();
});