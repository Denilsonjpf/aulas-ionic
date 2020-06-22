// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs).
      // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
      // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
      // useful especially with forms, though we would prefer giving the user a little more room
      // to interact with the app.
      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
      }
    });
  })
  .controller("ModalController", function ($scope, $ionicModal) {
    //Criamos a lista de contatos a ser exibida
    $scope.contatos = [
      { nome: "Denilson", email: "denilson@denilson.com.br" },
      { nome: "Sergio", email: "joedoe@joe.com.br" },
      { nome: "Thiago", email: "thiago@thiago.com" }
    ];

    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Funcão que irá realizar o cadastro do contato e adicionará na lista
    $scope.addContato = function (contato) {
      //o comando push add um novo item no final da lista
      $scope.contatos.push({ nome: contato.nome, email: contato.email });
      // limpa os campos do formulário
      contato.nome = "";
      contato.email = "";
      // fecha o modal do formulário
      $scope.modal.hide();
    };
  })