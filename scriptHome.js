fetch('projet.json')
  .then(response => response.json())
  .then(data => {
    document.querySelectorAll('.tableau').forEach(card => {
      console.log(card);
      const index = card.dataset.index;
      console.log(index);
      const project = data.projet[index];
      console.log();

      // Ajouter un événement de clic sur la carte
      card.addEventListener('click', () => {
        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');

        // Remplir la modal avec les données du JSON
        modalBody.innerHTML = `
  <h3 class="project-title">${project.title}</h3>
  <p class="project-description">${project.description}</p>
  <p class="project-details">${project.details}</p>
  <p><a class="project-link" href=${project.link}>Essayer</a></p>
`;



        // Afficher la modal
        modal.style.display = 'flex';
      });
    });

    

    // Bouton de fermeture
    document.querySelector('.close').addEventListener('click', () => {
      const modal = document.getElementById('project-modal');
      modal.style.display = 'none';
    });

    // Fermer la modal en cliquant en dehors du contenu
    window.addEventListener('click', (event) => {
      const modal = document.getElementById('project-modal');
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  })
  .catch(error => console.error('Erreur lors du chargement des données JSON:', error));


  document.getElementById('button').addEventListener('click', function() {
    fetch('Quentin_Le_Forestier_Cv.pdf')  // Remplacez cette URL par votre endpoint API
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();  // Récupérer le fichier sous forme de blob
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);  // Créer un URL temporaire pour le fichier
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Quentin_Le_Forestier_CV.pdf';  
        document.body.appendChild(a);
        a.click();  // Télécharger le fichier
        document.body.removeChild(a);  // Supprimer le lien temporaire
      })
      .catch(error => console.error('Error downloading document:', error));
  });