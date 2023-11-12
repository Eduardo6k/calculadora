function CriarCalculadora() {
    return {
        //atributos
        display: document.querySelector(".display"),
    

        //metodos
        iniciar: function () {
            this.clique();
        },

        clique: function () {
            const self = this;
            document.addEventListener("click", function (e) {
                const elemento = e.target;
                if (elemento.classList.contains("btn-num")) {
                    self.btnForDisplay(elemento.innerText);
                }
                if(elemento.classList.contains("btn-clear")){
                    this.clearDisplay();
                }
                if(elemento.classList.contains("btn-del")){
                    this.deletar();
                }
                if(elemento.classList.contains("btn-equal")){
                    this.equals();
                }
            }.bind(this));

        },

        btnForDisplay: function (valor) {
            this.display.value += valor;

        },

        clearDisplay: function(){
            this.display.value = "";
        },
        deletar : function(){
            this.display.value = this.display.value.slice(0, -1);
        },
        equals: function(){
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if(!conta){
                    alert("conta invalida");
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert("conta invalida");
                return;
                
            }
        }
    }
}


const calculadora = CriarCalculadora();
calculadora.iniciar();

