//Class to manage card creation and actions
class CardManager{

    // Attributes
    flippedCards = new Set();
    urlFactory;

// Constructor
constructor(factory){
    this.urlFactory = factory
}
    
// Generate new card based in the hero number
gen(heroNumber){
    let template = document.getElementById("cardTemplate");
    let clone = template.content.cloneNode(true);
    clone.children[0].addEventListener('click',
        event => this.onClick(event)
);
    return clone; // Return the modified clone

}
onClick(event){
    this.flip(event.target);
}

flip(cardNode){
    cardNode.children[0].classList.add('selected');
    this.flippedCards.add(cardNode);
}

unFlip(cardNode){
    cardNode.children[0].classList.remove('selected');
}

disable(cardNode){
    cardNode.children[0].classList.add('matched');
    this.unFlip(cardNode);
}






}
