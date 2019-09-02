var shape = {
    name: "rectangle",
    popup: function() {

        console.log('This inside popup(): ' + this.name);


        setTimeout( () => {
            console.log('This inside setTimeout():' + this.name);
            console.log('I am a ' + this.name + "!");
        }, 3000);

    }
};

shape.popup();