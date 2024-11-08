# Eco Bliss Bath / Automatisation de test

## Description

Ce projet de d'automatisation de test a été réalisé dans le cadre de la préparation d'un site de vente en ligne pour notre boutique.

## 📋 Table des matières

- [Description](#Description)
- [Prérequis](#prérequis)
- [Installation du projet](#installation-du-projet)
- [Lancement des tests (Via ligne de commande)](#lancement-des-tests-via-ligne-de-commande)
- [Lancement des tests (Via interface graphique)](#lancement-des-tests-via-interface-graphique)
- [Génération du rapport](#génération-du-rapport)
- [Documentation Cypress](#documentation-cypress)

## Prérequis

Installation de :

- [NodeJS](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [npm](https://docs.npmjs.com/about-npm)
- [Cypress](https://www.cypress.io/)

## Installation du projet

1. Téléchargez ou clonez le dépôt
2. Depuis un terminal ouert dans le dossier du projet, lancer la commande : `docker-compose up --build`
3. Ouvrez le site depuis la page http://localhost:8080

## Lancement des tests (Via ligne de commande)

1. npx cypress run pour lancer tous les tests en ligne de commande

## Lancement des tests (Via interface graphique)

Pour ouvrir l'interface graphique de Cypress et exécuter les tests en mode interactif, suivez ces étapes :

1. Lancez la commande npx cypress open dans votre terminal.
2. Cypress va ouvrir une fenêtre dédiée. Dans cette fenêtre, cliquez sur l'onglet "E2E Testing".
3. Cypress vous demandera de choisir un navigateur pour exécuter les tests. Sélectionnez le navigateur souhaité (par exemple Chrome ou Firefox).
4. Une fois le navigateur sélectionné, une nouvelle page s'ouvrira, affichant la liste des fichiers de tests dans le dossier cypress/e2e.
5. Cliquez sur le fichier de test que vous voulez exécuter. Cypress lancera alors le test sélectionné dans le navigateur, permettant de suivre son déroulement en temps réel.

## Génération du rapport

1. npx cypress run pour lancer tous les tests en ligne de commande
2. A la fin de l'execution de tous les test un rapport est généré.

## Documentation Cypress

[Lien vers la document Cypress](https://www.cypress.io/)
