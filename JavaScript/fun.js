
/*funcao para gerar as cidades atraves dos estados*/
function gerarCidades() {
    var estado = document.getElementById("estado").value; /*recebe a opcao do estado*/

    var cidade = document.getElementById("cidade");

    var option = "";

    if (estado == "") {
      limpaCombo();   /*se a opacao selecionada for '' limpa as opcoes usado a funcao limpacombo*/
    }
    


    if (estado == "SP") {
      limpaCombo();

      option = document.createElement("option");
      option.value = "1";
      option.text = "Limeira"; 
      cidade.add(option);  

      option = document.createElement("option");
      option.value = "2";
      option.text = "Campinas"; 
      cidade.add(option);  

      option = document.createElement("option");
      option.value = "3";
      option.text = "Valinhos"; 
      cidade.add(option);                  
    }

    if (estado == "MG") {
      limpaCombo();

      option = document.createElement("option");
      option.value = "1";
      option.text = "Belo Horizonte"; 
      cidade.add(option);  

      option = document.createElement("option");
      option.value = "2";
      option.text = "Varginha"; 
      cidade.add(option);  

      option = document.createElement("option");
      option.value = "3";
      option.text = "Mantimento"; 
      cidade.add(option);                  
    }    

    /*se a opacao for Rj no select de cidade tera as seguintes cidades para escolher*/
    if (estado == "RJ") {
      limpaCombo();

      option = document.createElement("option");
      option.value = "1";
      option.text = "Rio de Janeiro"; 
      cidade.add(option);  

      option = document.createElement("option");
      option.value = "2";
      option.text = "Rezende"; 
      cidade.add(option);  

      option = document.createElement("option");
      option.value = "3";
      option.text = "Angra dos Reis"; 
      cidade.add(option);          
      
      option = document.createElement("option");
      option.value = "4";
      option.text = "Maricá"; 
      cidade.add(option);   

      option = document.createElement("option");
      option.value = "5";
      option.text = "Niterói"; 
      cidade.add(option);   

      option = document.createElement("option");
      option.value = "6";
      option.text = "São Gonçalo"; 
      cidade.add(option);   

      option = document.createElement("option");
      option.value = "3";
      option.text = "Saquarema"; 
      cidade.add(option);   
    }        

    if (estado == "BA") {
        limpaCombo();
  
        option = document.createElement("option");
        option.value = "1";
        option.text = "Salvador"; 
        cidade.add(option);  
  
        option = document.createElement("option");
        option.value = "2";
        option.text = "Vitória da Conquista"; 
        cidade.add(option);  
  
        option = document.createElement("option");
        option.value = "3";
        option.text = "Barreiras"; 
        cidade.add(option);          
        
        option = document.createElement("option");
        option.value = "4";
        option.text = "Guanambi"; 
        cidade.add(option);   
  
        option = document.createElement("option");
        option.value = "5";
        option.text = "Brumado"; 
        cidade.add(option);   
  
        option = document.createElement("option");
        option.value = "6";
        option.text = "Feira de Santana"; 
        cidade.add(option);   

    }        

  }


  function limpaCombo() {
    var comboCidades = document.getElementById("cidade");
    
    while (comboCidades.length) {
      comboCidades.remove(0);
    }
  }