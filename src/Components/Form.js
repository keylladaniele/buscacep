import '../App.css';


function Formulario() {



    function onBlurCep(ev) {

        const { value } = ev.target;

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then(function callBack(data) {
                document.getElementById('logradouro').value = (data.logradouro);
                document.getElementById('bairro').value = (data.bairro);
                document.getElementById('localidade').value = (data.localidade);
                document.getElementById('uf').value = (data.uf);

            })


    }




    function confirmar() {
        var enderecoArray = [' ']
        var cepSave = document.getElementById('cep').value;
        var ruaSave = document.getElementById('logradouro').value;
        var bairroSave = document.getElementById('bairro').value;
        var cidadeSave = document.getElementById('localidade').value;
        var ufSave = document.getElementById('uf').value;

        let tbody = document.getElementById('tbody');





        

        for (let i = 0; i < enderecoArray.length; i++) {

            let tr = tbody.insertRow();

            let td_cep = tr.insertCell();
            let td_rua = tr.insertCell();
            let td_bairro = tr.insertCell();
            let td_cidade = tr.insertCell();
            let td_uf = tr.insertCell();

            td_cep.innerText = cepSave;
            td_rua.innerText = ruaSave;
            td_bairro.innerText = bairroSave;
            td_cidade.innerText = cidadeSave;
            td_uf.innerText = ufSave;
        }

         enderecoArray.push(cepSave, ruaSave, bairroSave, cidadeSave, ufSave);

    }

        function limpar() {
            document.getElementById('cep').value = ('');
            document.getElementById('logradouro').value = ('');
            document.getElementById('bairro').value = ('');
            document.getElementById('localidade').value = ('');
            document.getElementById('uf').value = ('');
        }










    return (
        <div className="controle">

            <h2>Consulta CEP</h2>
            <form method="get" action='.'>
                <p>Digite o CEP: <input name="cep" id="cep" onBlur={onBlurCep} className="campos"/></p>

                <p>Logradouro: <input type="text" name="logradouro" id="logradouro" className="campos"/></p>

                <p>Bairro: <input type="text" name="bairro" id="bairro" className="campos"/></p>

                <p>Cidade: <input type="text" name="cidade" id="localidade" className="campos"/></p>

                <p>Estado: <input type="text" name="estado" id="uf" className="campos"/></p>

                <p><input type="button" value="LIMPAR" onClick={limpar} className="botao"/><input type="button" value="SALVAR" onClick={confirmar} className="botao"/></p>

               



            </form>
            <div>
                <thead>
                    <td className="header">CEP</td>
                    <td className="header">RUA</td>
                    <td className="header">BAIRRO</td>
                    <td className="header">CIDADE</td>
                    <td className="header">ESTADO</td>
                </thead>
                <tbody id='tbody'>

                </tbody>
            </div>
            

        </div>

    )
}

export default Formulario