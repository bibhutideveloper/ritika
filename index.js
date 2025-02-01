function display(){
    var alphabet=document.getElementById("alpha").value.toLowerCase();
    console.log(alphabet);
    switch(alphabet){
        case 'a':{
            console.log("working");
            document.getElementById("name").innerHTML="APPLE";
            document.getElementById("image").src="images/apple.jpg";
            break;
        }
        case 'b':{
            console.log("working");
            document.getElementById("name").innerHTML="BALL";
            document.getElementById("image").src="images/ball.jpg";
            break;
        }
        case 'c':{
            console.log("working");
            document.getElementById("name").innerHTML="CAT";
            document.getElementById("image").src="images/cat.jpg";
            break;
        }
        case 'd':{
            console.log("working");
            document.getElementById("name").innerHTML="DOG";
            document.getElementById("image").src="images/dog.jpg";
            break;
        }
        case 'e':{
            console.log("working");
            document.getElementById("name").innerHTML="ELEPHANT";
            document.getElementById("image").src="images/elephant.jpg";
            break;
        }
        case 'f':{
            console.log("working");
            document.getElementById("name").innerHTML="FISH";
            document.getElementById("image").src="images/fish.jpg";
            break;
        }
        case 'g':{
            console.log("working");
            document.getElementById("name").innerHTML="GRAPES";
            document.getElementById("image").src="images/grapes.jpg";
            break;
        }
        case 'h':{
            console.log("working");
            document.getElementById("name").innerHTML="HORSE";
            document.getElementById("image").src="images/horse.jpg";
            break;
        }
        case 'i':{
            console.log("working");
            document.getElementById("name").innerHTML="ICE-CREAM";
            document.getElementById("image").src="images/ice-cream.jpg";
            break;
        }
        case 'j':{
            console.log("working");
            document.getElementById("name").innerHTML="JELLYFISH";
            document.getElementById("image").src="images/jellyfish.jpg";
            break;
        }
        case 'k':{
            console.log("working");
            document.getElementById("name").innerHTML="KIWI";
            document.getElementById("image").src="images/kiwi.jpg";
            break;
        }
        case 'l':{
            console.log("working");
            document.getElementById("name").innerHTML="LION";
            document.getElementById("image").src="images/lion.jpg";
            break;
        }
        case 'm':{
            console.log("working");
            document.getElementById("name").innerHTML="MANGO";
            document.getElementById("image").src="images/mango.jpg";
            break;
        }
        case 'n':{
            console.log("working");
            document.getElementById("name").innerHTML="NEST";
            document.getElementById("image").src="images/nest.jpg";
            break;
        }
        case 'o':{
            console.log("working");
            document.getElementById("name").innerHTML="ORANGE";
            document.getElementById("image").src="images/orange.jpg";
            break;
        }
        case 'p':{
            console.log("working");
            document.getElementById("name").innerHTML="PEACOCK";
            document.getElementById("image").src="images/peacock.jpg";
            break;
        }
        case 'q':{
            console.log("working");
            document.getElementById("name").innerHTML="QUEEN";
            document.getElementById("image").src="images/queen.jpg";
            break;
        }
        case 'r':{
            console.log("working");
            document.getElementById("name").innerHTML="RAT";
            document.getElementById("image").src="images/rat.jpg";
            break;
        }
        case 's':{
            console.log("working");
            document.getElementById("name").innerHTML="SNAKE";
            document.getElementById("image").src="images/snake.jpg";
            break;
        }
        case 't':{
            console.log("working");
            document.getElementById("name").innerHTML="TREE";
            document.getElementById("image").src="images/tree.jpg";
            break;
        }
        case 'u':{
            console.log("working");
            document.getElementById("name").innerHTML="UMBRELLA";
            document.getElementById("image").src="images/umbrella.jpg";
            break;
        }
        case 'v':{
            console.log("working");
            document.getElementById("name").innerHTML="VAN";
            document.getElementById("image").src="images/van.jpg";
            break;
        }
        case 'w':{
            console.log("working");
            document.getElementById("name").innerHTML="WATCH";
            document.getElementById("image").src="images/watch.jpg";
            break;
        }
        case 'x':{
            console.log("working");
            document.getElementById("name").innerHTML="X-MAS";
            document.getElementById("image").src="images/xmas.jpg";
            break;
        }
        case 'y':{
            console.log("working");
            document.getElementById("name").innerHTML="YAK";
            document.getElementById("image").src="images/yak.jpg";
            break;
        }
        case 'z':{
            console.log("working");
            document.getElementById("name").innerHTML="ZEBRA";
            document.getElementById("image").src="images/zebra.jpg";
            break;
        }
        default:{
            console.log("not working");
            document.getElementById("name").innerHTML="Wrong Entry..!!";
            document.getElementById("image").src="images/error.jpg";
        }
    }
}
