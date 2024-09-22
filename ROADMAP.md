# ROADMAP PokeRub

## Histórias

Todas as histórias foram realizadas.

### História 1

Na página inicial do aplicativo, todos os Pokémon são listados em cards, com 20 por página, e há uma opção de paginação para navegação. Cada card exibe o nome do Pokémon, uma imagem e dois botões: um para acessar informações detalhadas e outro para verificar a evolução. Há também um botão para adicionar o Pokémon aos favoritos.
O aplicativo permite filtrar os Pokémons pelo nome(*), utilizando debounce para evitar múltiplas requisições. Ao clicar no botão de informações, um modal é exibido, apresentando detalhes completos sobre o Pokémon selecionado, como tipo, altura, peso, categoria e habilidades.

Obs (*) : A API fornecida permite apenas consultas com o nome completo e correto do Pokémon, não sendo possível pesquisar um nome parcial.

### História 2

Em cada card de Pokémon, há um botão de evolução que, ao ser clicado, abre um modal exibindo toda a cadeia de evolução do Pokémon. A partir do Pokémon escolhido, é possível clicar no botão "EVOLVE" para que ele evolua e se torne ainda mais forte.

### História 3

Ao lado dos nomes dos Pokémons na página inicial, há um botão em formato de estrela. Ao clicar nesse botão, ele se preenche, adicionando o Pokémon à lista de favoritos, que pode ser acessada pelo menu do cabeçalho. Na página de favoritos, você encontrará os cards dos seus Pokémons, que exibem a imagem e o nome de cada um.

## O que eu adicionaria se tivesse mais tempo

- Testes Unitários.
- Melhorar o visual das telas.
- Feedback de erros ao usuário.

## O que eu faria diferente se tivesse mais tempo

- Code Review para refinamentos técnicos.
- Layout mais amigável.
