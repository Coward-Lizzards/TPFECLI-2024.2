document.getElementById('cep').addEventListener('blur', function () {
    const cep = this.value.replace(/\D/g, '');
    const errorDiv = document.getElementById('error');
  
    if (cep.length !== 8) {
      errorDiv.textContent = 'CEP inválido. Por favor, insira um CEP com 8 dígitos.';
      return;
    }
  
    errorDiv.textContent = ''; // Limpa erros anteriores
  
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar o CEP');
        }
        return response.json();
      })
      .then(data => {
        if (data.erro) {
          throw new Error('CEP não encontrado');
        }
  
        // Preenche os campos do formulário
        document.getElementById('logradouro').value = data.logradouro || '';
        document.getElementById('complemento').value = data.complemento || '';
        document.getElementById('bairro').value = data.bairro || '';
        document.getElementById('cidade').value = data.localidade || '';
        document.getElementById('estado').value = data.uf || '';
      })
      .catch(error => {
        errorDiv.textContent = error.message;
      });
  });
  