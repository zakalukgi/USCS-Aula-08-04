     // Função que realiza o cálculo da soma

     function converterTempC() {

        // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
        var temp = parseFloat(document.getElementById("temp").value);

        // Criação da variável 'soma' para armazenar o resultado da soma de 'num1' e 'num2'
        var res = temp * 1.8 + 32;

        // Verificação para garantir que os valores são números válidos
        if (isNaN(res)) {
            // Exibe mensagem de erro se os valores não forem numéricos
            document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
        } else {
            // Atualiza o parágrafo com o resultado da soma
            document.getElementById("resultado").innerHTML = "A soma é: " + res;
        }
    }
    function converterTempF() {

        // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
        var temp = parseFloat(document.getElementById("temp").value);

        // Criação da variável 'soma' para armazenar o resultado da soma de 'num1' e 'num2'
        var res = (temp-32)/1.8;

        // Verificação para garantir que os valores são números válidos
        if (isNaN(res)) {
            // Exibe mensagem de erro se os valores não forem numéricos
            document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
        } else {
            // Atualiza o parágrafo com o resultado da soma
            document.getElementById("resultado").innerHTML = "A soma é: " + res;
        }
    }