# Pet Shop

Sistema para gerenciar funcionários de uma loja de Pet Shop.

Este é front-end do sistema, desenvolvido com VueJs,
O mesmo funciona em conjunto com a api <a href="https://github.com/Ailson12/api-pet-shop" target="_blank">api-pet-shop</a>

<a href="https://creathus-pet-shop.herokuapp.com" target="_blank">Demonstração Online</a>

## Tecnologias do projeto
 - Vuejs
 - Vue-Cli(Linha de comando do VueJs)
 - Vue-Router(para SPA)
 - Node-Sass(Compilador sass)
 - Bootstrap-vue(estilização)
 - Axios(requisições ajax)
 - Coreui (Dashboard admin template)
 - Coreui/vue-chartjs (Trabalhar com gráficos)
 - Vue-datetime (Para campos do tipo date)
 - VueIzitoast (Para exibir alerts)

## Requisitos do sistema
  - Npm
  - NodeJs

## Instalação
  - Fazer o clone do projeto
  ```
    git clone https://github.com/Ailson12/pet-shop
  ```
  - Abrir a pasta do projeto e instalar os módulos da aplicação.
  ```
    npm install
  ```

## Configurações do projeto
  As configurações do projeto estão no arquivo env.js, que está na raiz do projeto, aonde possui duas variaveis de configurações:
 - APP_NAME que será utilizado para setar a logo da empresa, o padrão é "Mimo canino".
 - HOST_API defini o endereço da api que será consumido os dados, por padrão, o host é https://ailson-api-pet-shop.herokuapp.com/.
   
   Se necessário, altere estas variáveis de ambiente para se adequar ao cenário de sua infraestrutura.
   
## Build e Desenvolvimento

Para testar o sistema, execute o comando abaixo para executar o modo de desenvolvimento.

```
  npm run serve
```

Para gerar o buil de produção execute
```
  npm run build
```