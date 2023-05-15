# Notificações Saúde Web
## (Finalizado) - 03/05/2023
### Este projeto é um site que permite enviar mensagens personalizadas para um celular que tenha instalado o aplicativo do Saúde App!

Foi criado um protótipo de aplicativo para o Saúde App, acessível em:
https://github.com/

[Screens do celular](/assets/SS.png)

Este site estará rodando na Vercel acessível em:


![Site](/assets/home.png)

Para fazer a comunicação junto a este aplicativo, um funcionário pode localizar um segurado e enviar uma mensagem específica, por exemplo, se o boleto venceu, ou quando necessário iniciar uma conversa, enviando [mensagens](/assets/enviado.png) para este segurado!

Todas as informações ficam salvas no [BD do Firebase](/assets/firebase.png), onde guardamos a mensagens, suas respostas e suas datas de envio.
Fizemos uma verificação onde somente os funcionários do financeiro podem enviar as mensagens, o site permite criar contas teste e consultar a situação dos funcionários, seus dados e suas mensagens!

<div align="center">
<img src="/assets/resposta.png">
</div>

É importante ressaltar que algumas informações são sigilosas e não foram enviadas para o Git! As configurações (credenciais) do FB são específicas para cada usuário! Se vc deseja clonar este projeto é importante saber que estes arquivos precisam ser alterados!

- [x] firebase.js
- [x] messaging.js

Abaixo, mantive o histórico do desenvolvimento:

Estamos criando um Web Client para conectar com as notificações de um App! Este site estará rodando na Vercel acessível em:


Nesse momento adicionei o TailWind para configurar o CSS e criei uma página de Inscrição!
Nos próximos passos, preciso arrumar o formulário para criar contas no FB, a partir disso, montar o acesso dos usuários para só então conectar com o Not!!!

14/02 - Tive alguns problemas tentando fazer as conexões com o FCM, provavelmente instalei coisas desnecessárias como firebase admin e hosting, talvez tire em outro momento!
Agora estou acompanhando um vídeo bem completo da própria equipe do FB:
https://www.youtube.com/watch?v=P51dI2y7QHA

Um possível problema é o firebase deploy nos 16 min!!

23/02 - O novo código consegue enviar as mensagens escritas no input! Adicionei um Alert que pede a confirmação antes de enviar a mensagem, vou limpar o código e colocar no git!
IMPORTANTE:
Percebi alguns erros q precisam ser corrigidos, talvez por usar tsx ou copiar o exemplo!!
Tanto a matricula quanto o input estão vindo na forma de array, sendo necessário acessar matricula.matricula!!
Apesar de estar escrito Matricula, na vdd estamos consultando o uid do firebase, modificar usando o "where"!
Acessar as últimas mensagens enviadas? Para isso precisamos modificar a ordem das coisas no FB?!

24/02 - Ajuste de algumas coisas e deleção de outras! Importante dizer q o dashboard e old_index são exemplos e n deve ser deletado! Testar quais páginas podem ser retiradas...
por exemplo .firebase, out, podem ser removidas ou desinstalar pelo npm?
Para Segunda: Construir um Objeto mensagem! Pode ser no Context ou no converter, igual as tasks.... a mensagem.date é o "nome do documento" e 4 campos no objeto:
pergunta, horario, resposta null e horario null!

27/02 - Objeto criado! Vamos ajustar as informações redundantes como matricula.matricula! Tbm precisamos criar o useEffect para montar os Objetos já criados!
Formatamos a data!

28/02 - Tentar refatorar as coisas, tirar código inutil. Melhorar as mensagens para algo visual como os selects!
No signUp nós criamos um usuário/funcionário! Existe um novo banco de dados no FB para eles!! Precisamos ajustar as funções do FB, tentar usar os códigos do Joao de base!!
Boa parte do código foi limpado! Fica a sugestão de utilizar a pasta functions dentro de Firebase dentro de components para fazer o envio das mensagens e coisas do banco!

01/03 - Usar as Busca email como parâmetro para substituir nas páginas de alert, signup, login ....
02/03 - Ajustamos algumas funções novas, talvez ainda falte o login, tbm percebemos que pesquisa poderia ser um componente montado numa página de home!
Isso quer dizer, podemos melhorar o acesso e o push das rotas dependendo do cargo da pessoa!
Falta montar as mensagens como um select!

03/03 - Hoje o SignIn é feito fora do ADMIN!! Nesse momento criamos um busca funcionário e dependendo do usuário ela gera uma página ou outra!

03/05 - Revisão e finalização do projeto!
