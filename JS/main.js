class Game{
    constructor(){
        this.turnCounter = "X";
        this.score = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }
    
    addListeners(){
        document.querySelectorAll('.col').forEach(a => a.addEventListener('click', (e) => this.userSelectActions(e)))
        document.querySelector('button').addEventListener('click', (e) => this.resetTic(e))
    }

    userSelectActions(click){
       
        if(this.checkSelected(click) == true){
            return
        } 
        this.updateScore(click)
        this.addDisplay(click)
        this.checkForWinner();
        this.changeTurn();
    }

    checkSelected(click){
        if(this.score[click.target.dataset.key] == "X" || this.score[click.target.dataset.key] == "O"){
            alert("That square is taken! Choose another")
            return true
        }
    }

    addDisplay(click){
        if(this.turnCounter == "X"){
            click.target.innerHTML = '<p class="box-content">X</p>'
        } else if (this.turnCounter == "O"){
            click.target.innerHTML = '<p class="box-content">O</p>'
        }
    }
    
    changeTurn(){
        this.turnCounter == "X" ? this.turnCounter = "O" : this.turnCounter = "X";
    }

    updateScore(click){
        if(this.turnCounter == "X"){
            this.score[click.target.dataset.key] = "X"
        } else if(this.turnCounter == "O"){
            this.score[click.target.dataset.key] = "O"
        }
    }

    checkForWinner(){
     
        if(this.score[0] == this.score[1] && this.score[0] == this.score[2] || this.score[0] == this.score[3] && this.score[0] == this.score[6] || this.score[0] == this.score[4] && this.score[0] == this.score[8]){
            alert(`${this.score[0]} has won the game! Press reset to try again!`)
        } else if(this.score[2] == this.score[5] && this.score[2] == this.score[8] || this.score[2] == this.score[4] && this.score[2] == this.score[6]){
            alert(`${this.score[2]} has won the game! Press reset to try again!`)
        } else if(this.score[4] == this.score[5] && this.score[4] == this.score[3] || this.score[4] == this.score[1] && this.score[4] == this.score[7]){
            alert(`${this.score[4]} has won the game! Press reset to try again!`)
        }
    }
    resetTic(){
        this.turnCounter = "X";
        this.score = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        document.querySelectorAll('.col').forEach(a => a.innerText = "")
    }
}

let ticObj = new Game();
ticObj.addListeners();