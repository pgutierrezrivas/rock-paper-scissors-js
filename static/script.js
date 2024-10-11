//funcion para obtener la eleccion de la maquina
function get_computer_choice() {
    const options = ["piedra", "papel", "tijera", "lagarto", "spock"];
    const random_choice = Math.round(Math.random() * 2.49);
    return options[random_choice];
}
//funcion para determinar ganador
function determinate_winner(user_choice, computer_choice) {
    if (user_choice === computer_choice) {
        return "Empate";
    } 
    else if ((user_choice == "tijera" && computer_choice == "papel") || 
        (user_choice == "papel" && computer_choice == "piedra") || 
        (user_choice == "piedra" && computer_choice == "lagarto") ||
        (user_choice == "lagarto" && computer_choice == "spock") ||
        (user_choice == "spock" && computer_choice == "tijera") ||
        (user_choice == "tijera" && computer_choice == "lagarto") ||
        (user_choice == "lagarto" && computer_choice == "papel") ||
        (user_choice == "papel" && computer_choice == "spock") ||
        (user_choice == "spock" && computer_choice == "piedra") ||
        (user_choice == "piedra" && computer_choice == "tijera")) {
            return "¡Ganaste!";
        } 
    else {
        return "Perdiste";
    }
}

//funcion empezar la partida
function game() {

    const user_choice = document.getElementById('choice').value;
    const computer_choice = get_computer_choice();

    //muestro las elecciones en el HTML
    document.getElementById('user_choice').textContent = `Tú elegiste: ${user_choice}`;
    document.getElementById('computer_choice').textContent = `La computadora eligió: ${computer_choice}`;

    const box_result = determinate_winner(user_choice, computer_choice);
    document.getElementById('result').textContent = box_result;

    return false; // Evitar recarga del formulario

}






