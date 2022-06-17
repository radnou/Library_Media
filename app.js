class Media {
    constructor (title){
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
    get title(){
      return this._title
    }
    get ratings(){
      return this._ratings
    }
    get isCheckedOut(){
      return this._isCheckedOut
    }
    set isCheckedOut(val){
      this._isCheckedOut = val;
      }
    
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating(){
      let ratingSum = this._ratings.reduce((acc,val) =>{
        return acc + val;
      },0);
     // console.log(ratingSum)
      return ratingSum / this.ratings.length
    }
    addRating(rate){
      this._ratings.push(rate);
    }
  }
  
  class Book extends Media {
    constructor(title,author,pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get page(){
      return this._pages;
    }
  }
  
  class Movie extends Media  {
    constructor(title,director,runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
  }
  
  
  const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544);
  
  historyOfEverything.toggleCheckOutStatus()
  //console.log(historyOfEverything.isCheckedOut)
  
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  //console.log(historyOfEverything.getAverageRating())
  
  
  
  const speed = new Movie('Speed','Jan de Bont',116)
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut)
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log(speed)
  console.log(speed.getAverageRating())
  
  
  
  