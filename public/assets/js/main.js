const input = document.getElementById("search-input");
const result = document.getElementById("result");

function showResult(message, type) {
  result.innerHTML = message;
  result.className = `result ${type}`;
}

async function handleCepSearch() {
  const rawCep = input.value.replace(/\D/g, "");

  if (rawCep.length != 8) {
    showResult("Ops! Esse CEP parece estar incompleto. Use 8 números (ex: 12380234).", "error");
  } else {
    showResult("Consultando CEP...", "loading");

    try {
      const response = await fetch(`https://viacep.com.br/ws/${rawCep}/json/`);

      if (!response.ok) {
        showResult("Falha no serviço.", "error");
      } else {
        const data = await response.json();

        if (data.erro) {
          showResult("CEP não encontrado.", "error");
        } else {
          const message = `
            <p><strong>CEP:</strong> ${data.cep}</p>
            <p><strong>Logradouro:</strong> ${data.logradouro || "N/A"}</p>
            <p><strong>Bairro:</strong> ${data.bairro || "N/A"}</p>
            <p><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>
            <p><strong>Região:</strong> ${data.regiao}</p>
            <p><strong>DDD:</strong> ${data.ddd}</p>
          `;
          showResult(message, "success");
        }
      }
    } catch (e) {
      showResult("Erro ao conectar na API.", "error");
    }
  }
}

input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    handleCepSearch();
  }
});

input.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  
  if (value.length > 5) {
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  }
  
  e.target.value = value;

  if (!input.value.trim()) {
    result.innerHTML = "";
    result.className = "result";
  }
});