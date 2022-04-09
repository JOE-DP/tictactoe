/* constructor ideas - 

turn = true/false


this.one = true/false or 0/1;

this = [0, 0, 0, 0, 0, 0, 0, 0, 0];
if this.doc-qs-val = 1 - return "invalid" 
   
    else if (turn = 0) return doc.qs.inner T = X -- 1 = o - mrthod?
    this[value] = 1;
   
    turn = !turn; -- method
*/

class Game{
    constructor(){
        this.turnCounter = "X";
        this.score = [ , , , , , , , , , ]
    }
    
    addListeners(){
        document.querySelectorAll('.col').forEach(a => a.addEventListener('click', (e) => this.userSelectActions(e)))
        // add reset
    }

    userSelectActions(click){
       
        if(this.checkSelected(click) == true){
            return
        } 
        this.addDisplay(click)
        this.updateScore(click)
        this.checkForWinner();
        this.changeTurn();
        // add reset
       
        
    }

    checkSelected(click){
        if(click.target.innerText == "X" || click.target.innerText == "O"){
            alert("That square is taken! Choose another")
            return true
        }
    }

    addDisplay(click){
        if(this.turnCounter == "X"){
            click.target.innerText = "X"
        } else if (this.turnCounter == "O"){
            click.target.innerText = "O"
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
            console.log(this.score[0])
        } else if(this.score[2] == this.score[5] && this.score[2] == this.score[8] || this.score[2] == this.score[4] && this.score[2] == this.score[6]){
            console.log(this.score[2])
        } else if(this.score[4] == this.score[5] && this.score[4] == this.score[3] || this.score[4] == this.score[1] && this.score[4] == this.score[7]){
            console.log(this.score[4])
        }
    }
    resetTic(){
        
    }
}

let ticObj = new Game();
ticObj.addListeners();
//click.target.dataset.key - the dataset key