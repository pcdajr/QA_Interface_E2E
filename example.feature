# language: pt
@login
Funcionalidade: Login no sistema
  Como um usuário registrado
  Quero realizar login na plataforma
  Para acessar minha área restrita

  Contexto:
    Dado que eu esteja na página de login

  Cenário: Login com sucesso
    [Quando] eu insiro o usuário "admin@teste.com" e a senha "123456"
    E clico no botão de login
    Então eu devo ser redirecionado para a página inicial
    E devo ver a mensagem "Bem-vindo, Admin"

  Cenário: Tentativa de login com senha inválida
    Quando eu insiro o usuário "admin@teste.com" e a senha "senha_errada"
    E clico no botão de login
    Então eu devo ver uma mensagem de erro "Senha incorreta"
