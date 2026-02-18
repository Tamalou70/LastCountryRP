/* rdr2-rp dossier — données + stockage (localStorage)
   Tu peux aussi exporter/importer en JSON depuis l'éditeur.
*/
const STORAGE_KEY = "rdr2_rp_dossier_v1";

const DEFAULT_DATA = {
  "meta": {
    "version": 1,
    "title": "Dossier RP — RDR2",
    "updated_at": "2026-02-17 19:28"
  },
  "regions": [
    {
      "id": "new_hanover",
      "name": "Comté New Hanover",
      "cities": [
        {
          "id": "van_horn",
          "name": "Van Horn",
          "image": "assets/banner.svg",
          "content": "🍺 SALOON\nPatron : Ammadiilio Tores\nCo patron : ......................\nEmployé : ......................\n\n🎣 PECHERIE\nPatron : ......................\nCo patron : ......................\nEmployé : MIKE\n\n🌾 FERME / AGRICULTURE\nPatron : Black Harper\nCo patron : ......................\nEmployé : Ethan (Lurny)\n\n💀 HORS LA LOI\nGang : Gunslinger BOy\nChef : ......................\nMembre : ......................\n\n👤 CITOYENS IMPORTANTS\nChristian Arlane (Chuck)\nMarcus\nJean"
        },
        {
          "id": "valentine",
          "name": "Valentine",
          "image": "assets/banner.svg",
          "content": "🏛️ GOUVERNEMENT\nMaire : ......................\nMaire Adjoint : ......................\n\n🏥 MEDICAL\nMédecin : ......................\nInfirmière : ......................\n\n🔫 ARMURERIE\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n🍺 SALOON\nPatron : ......................\nCo patron : ......................\nEmployé : Billy\n\n⚒️ ARTISANS / TRAVAIL\nForgeron : ......................\nMarchand Général : ......................\n\n💀 HORS LA LOI\nGang : ......................\nChef : ......................\nMembre : ......................\n\n👤 CITOYENS IMPORTANTS\nBarthelemy Boswell\nDecklan Bagwell\nThomas Fersson"
        },
        {
          "id": "annesburg",
          "name": "Annesburg",
          "image": "assets/banner.svg",
          "content": "🏛️ GOUVERNEMENT\nMaire : ......................\nMaire Adjoint : ......................\n\n🏥 MEDICAL\nMédecin : ......................\nInfirmière : ......................\n\n🔫 ARMURERIE\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n🍺 SALOON\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n⛏️ INDUSTRIE - MINE\nPatron : Athena Carter\nCo patron : ......................\nEmployé : ......................\n\n💰 COMMERCE\nRevente Pépite : Kent Lucky"
        },
        {
          "id": "limpany",
          "name": "Limpany",
          "image": "assets/banner.svg",
          "content": "🍺 SALOON\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n⚒️ ARTISANS / TRAVAIL\nForgeron : ......................\nMarchand Général : ......................\n\n💀 HORS LA LOI\nGang : ......................\nChef : ......................\nMembre : ......................\n\n👤 CITOYENS IMPORTANTS\n......................"
        }
      ]
    },
    {
      "id": "west_elisabeth",
      "name": "Comté West Elizabeth",
      "cities": [
        {
          "id": "blackwater",
          "name": "Blackwater",
          "image": "assets/blackwater.svg",
          "content": "🏛️ GOUVERNEMENT\nMaire : Steve Warning\nMaire Adjoint : Westwood John\n\n🏥 MEDICAL\nMédecin : ......................\nInfirmière : ......................\n\n🔫 ARMURERIE\nPatron : ......................\nCo patron : ......................\nEmployé : Ethan\n\n🍺 SALOON\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n⚒️ ARTISANS / TRAVAIL\nForgeron : ......................\nMarchand Général : ......................\n\n💀 HORS LA LOI\nGang : ......................\nChef : ......................\nMembre : ......................\n\n👤 CITOYENS IMPORTANTS\n......................"
        },
        {
          "id": "strawberry",
          "name": "Strawberry",
          "image": "assets/strawberry.svg",
          "content": "🏛️ GOUVERNEMENT\nMaire : Steve Warning (Mirenda Toplksey)\nMaire Adjoint : Westwood John (Edgar Blackwood)\n\n🏥 MEDICAL\nMédecin : ......................\nInfirmière : Elena D'Ecroville\n\n🪚 MENUISERIE\nPatron : Miss Warning Leonore\nCo patron : ......................\nEmployé : Wilfried Riggins\nEmployé : Theobold Beauclair\nEmployé : Horas\nEmployé : Kuba\nEmployé : Jessy\nEmployé : Susan Mc Coy\n\n🚂 TRANSPORT\nTrain : Mike\nTrain : Lexa\n\n💀 HORS LA LOI\nGang : ......................\nChef : ......................\nMembre : ......................\n\n👤 CITOYENS IMPORTANTS\nIsaac Paterson\nMenso eur Thomas\nJeffrey StoneFall"
        },
        {
          "id": "manzanita_post",
          "name": "Manzanita Post",
          "image": "assets/manzanita_post.svg",
          "content": "🏹 FEDERATION DE CHASSE\nResponsable : BUD\nCo Responsable : AGUILLA\nMembre : Bob Carter"
        }
      ]
    },
    {
      "id": "lemoyne",
      "name": "Comté de Lemoyne",
      "cities": [
        {
          "id": "saint_denis",
          "name": "Saint Denis",
          "image": "assets/saint_denis.svg",
          "content": "🏛️ GOUVERNEMENT\nMaire : Dean Warning\nMaire Adjoint : ......................\n\n🏥 MEDICAL\nDirecteur Santé : Joe Meiller\nMédecin : ......................\nInfirmière : Ivy Meiller\n\n🔫 ARMURERIE\nPatron : ......................\nCo patron : ......................\nEmployé : Louise Hawkings\n\n🍺 SALOON\nPatron : ......................\nCo patron : ......................\nEmployé : Elias Crow\n\n🚂 TRANSPORT\nTrain : Mike et Lexa (Vikings)\n\n💀 HORS LA LOI\nGang : Tzigane\nChef : ......................\nMembre : ......................\n\n👤 CITOYENS IMPORTANTS\nGro Norbert Crowne\nuyju"
        },
        {
          "id": "rhodes",
          "name": "Rhodes",
          "image": "assets/rhodes.svg",
          "content": "🏛️ GOUVERNEMENT\nMaire : ......................\nMaire Adjoint : ......................\n\n🏥 MEDICAL\nMédecin : ......................\nInfirmière : ......................\n\n🔫 ARMURERIE\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n🍺 SALOON\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n💀 HORS LA LOI\nGang : ......................\nChef : ......................\nMembre : ......................\n\n👤 CITOYENS IMPORTANTS\nJohn Ma Cave\nJulio Ortega\nGerard \"Moustique\""
        }
      ]
    },
    {
      "id": "new_austin",
      "name": "Comté New Austin",
      "cities": [
        {
          "id": "armadillo",
          "name": "Armadillo",
          "image": "assets/armadillo.svg",
          "content": "🏛️ GOUVERNEMENT\nMaire : ......................\nMaire Adjoint : ......................\n\n🏥 MEDICAL\nMédecin : Madame Aguilla\nApothicaire : Moragne Jinton\nCo-Apothicaire : Judith Carter\n\n🔫 ARMURERIE\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n🍺 SALOON\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n👤 CITOYENS IMPORTANTS\nLaury Adams"
        },
        {
          "id": "tumbleweed",
          "name": "Tumbleweed",
          "image": "assets/tumbleweed.svg",
          "content": "🏛️ GOUVERNEMENT\nMaire : ......................\nMaire Adjoint : ......................\n\n🏥 MEDICAL\nMédecin : ......................\nInfirmière : ......................\n\n🔫 ARMURERIE\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n🍺 SALOON\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n💀 HORS LA LOI\nGang : ......................\nChef : ......................\nMembre : ......................\n\n👤 CITOYENS IMPORTANTS\nJohn Wallas"
        }
      ]
    },
    {
      "id": "guarma",
      "name": "Guarma",
      "cities": [
        {
          "id": "guarma",
          "name": "Guarma",
          "image": "assets/guarma.svg",
          "content": "🍬 SUCRERIE\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n🍺 SALOON\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n🥃 DISTILLERIE\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\n🏥 DISPENSAIRE\nPatron : ......................\nCo patron : ......................\nEmployé : ......................\n\nBANDE\nUNA\nMembre : Mr John\nMembre : Mr James (frère)"
        }
      ]
    }
  ]
};

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return deepClone(DEFAULT_DATA);
    const parsed = JSON.parse(raw);
    // Merge léger: si structure manque, fallback
    if (!parsed || !Array.isArray(parsed.regions)) return deepClone(DEFAULT_DATA);
    return parsed;
  } catch (e) {
    console.warn("loadData failed:", e);
    return deepClone(DEFAULT_DATA);
  }
}

function saveData(data) {
  data.meta = data.meta || {};
  data.meta.updated_at = new Date().toISOString().slice(0,16).replace("T"," ");
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data, null, 2));
}

function findCity(data, cityId) {
  for (const r of data.regions) {
    for (const c of r.cities) {
      if (c.id === cityId) return { region: r, city: c };
    }
  }
  return null;
}

function listCities(data) {
  const out = [];
  for (const r of data.regions) {
    for (const c of r.cities) {
      out.push({ regionId: r.id, regionName: r.name, ...c });
    }
  }
  return out;
}

function slugify(s) {
  return (s || "")
    .toString()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function downloadJSON(filename, dataObj) {
  const blob = new Blob([JSON.stringify(dataObj, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result || ""));
    r.onerror = () => reject(r.error || new Error("FileReader error"));
    r.readAsText(file, "utf-8");
  });
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
