document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Capturando os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const genero = document.querySelector('input[name="genero"]:checked') ? document.querySelector('input[name="genero"]:checked').value : '';
    const pais = document.getElementById('pais').value;
    const comentarios = document.getElementById('comentarios').value;
  
    // Validação simples
    if (nome === '' || email === '' || senha === '') {
      alert('Por favor, preencha os campos obrigatórios.');
      return;
    }
  
    // Alterar conteúdo do h1
    document.querySelector('h1').textContent = "Formulário Enviado com Sucesso!";
  
    // Exibir os dados no h2
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p><strong>Nome:</strong> ${nome}</p>
                           <p><strong>Email:</strong> ${email}</p>
                           <p><strong>Gênero:</strong> ${genero}</p>
                           <p><strong>País:</strong> ${pais}</p>
                           <p><strong>Comentários:</strong> ${comentarios}</p>`;
  
    // Adicionar estilo dinâmico ao formulário
    document.getElementById('meuFormulario').style.backgroundColor = '#dff0d8';
  });
  