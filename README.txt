Dossier RP — RDR2 (Viewer + Éditeur)
===================================

Contenu du ZIP
- viewer.html  : page de lecture (tu cliques une ville → tu lis tes infos)
- editor.html  : page d'édition (tu modifies facilement + export/import JSON)
- data.js      : données par défaut + fonctions de stockage local
- assets/      : tes images (SVG) + banner.svg (fallback)

Utilisation
1) Dézippe le dossier.
2) Ouvre viewer.html (ou editor.html) dans ton navigateur.
3) Modifie dans editor.html puis reviens dans viewer.html.

Sauvegarde / partage
- Dans editor.html → "Exporter JSON" : tu récupères un fichier rdr2_rp_dossier.json
- Plus tard, "Importer JSON" : tu recharges tes infos.

Ajouter des images
- Mets tes fichiers dans assets/
- Dans l'éditeur, mets le chemin : assets/ton_image.svg

Note
- Tout est local (localStorage). Si tu changes de navigateur/PC, pense à exporter ton JSON.
