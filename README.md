# Devops Projet 2023 

Repository des labs faits toutes les semaines au cours du semestre: 
https://github.com/ryanbagot/Lab_gr5_Devops

## Travail effectué
1. Creation d'une application web, avec node.js
2. Utilisation des methodes GET et POST
3. Intégration continue avec GitHub 
4. Livraison continue avec Azure
5. Utilisation de Vagrant pour l'IAC, Ansible a permis de provisionner les machines virtuelles
6. Creation d'une image Docker et pousser vers Docker Hub
7. Orchestration Docker à l'aider de docker-compose.yml
8. Realisation d'une orchestration Docker avec Kubernetes (installation de de k8s avec minikube)
9. Creation de fichier deployement.yaml, service.yaml, redis-deployment.yaml, redis-service.yaml, persistent-volume.yaml, persistent-volume-claim.yaml
10. Creation service mesh istio
11. Implémentation de surveillance (Grafana et Prométheus)

## Instruction
- Pour installation, dans un premier temps il est nécessaire de faire cette commande :
```
git clone https://github.com/ryanbagot/Devops_Projet_2023.git
```

- Par la suite, il faut installer les dépendances du projet, grâce à cette commande :
```
npm install
```

- Pour exécuter cette application dans un conteneur Docker, suivez les étapes ci-dessous :
```
docker pull ryanbag/devops-projet-fall-2023:latest
```

```
docker run -d -p 8080:80 --name nom-conteneur ryanbag/devops-projet-fall-2023:latest
```

- Pour déployer cette application sur un cluster Docker Compose, vous devrez effectuer cette commande:
```
docker-compose up -d
```

- Pour déployer cette application sur un cluster Kubernetes (K8s):
```
kubectl apply -f k8s/
```

## Liens nécessaire: 
- Application web : https://portal.azure.com/#@poce.onmicrosoft.com/resource/subscriptions/89de088a-3931-45a0-82a0-b8a6cae9efa3/resourceGroups/Devops_gr_5/providers/Microsoft.Web/sites/Projet-Devops-Fall-2023/appServices
  
- Azure Cache pour Redis: https://portal.azure.com/#@poce.onmicrosoft.com/resource/subscriptions/89de088a-3931-45a0-82a0-b8a6cae9efa3/resourceGroups/Devops_gr_5/providers/Microsoft.Cache/Redis/projetdevopsing4gr5/overview
  
- Docker hub: https://hub.docker.com/r/ryanbag/devops-projet-fall-2023

## Auteur
- Ryan BAGOT : ryan.bagot@edu.ece.fr
- Gregoire PETIET

## Information supplémentaire
Les captures d'ecrans sont disponibles dans le dossier image


  






