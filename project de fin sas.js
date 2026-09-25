let prompt = require('prompt-sync')();
const candidats = [
    {
        cin: "AA184725",
        nom: "El Idrissi",
        prenom: "Ayoub",
        partiPolitique: "Rassemblement National des Indépendants",
        age: 42,
        electeurs: ["yrufjf","yryfhjfj"]
    },
    {
        cin: "Vm19610",
        nom: "Ait Lahcen",
        prenom: "Salma",
        partiPolitique: "Rassemblement National des Indépendants",
        age: 34,
        electeurs: []
    },
    {
        cin: "CC376924",
        nom: "Bennani",
        prenom: "Othmane",
        partiPolitique: "Rassemblement National des Indépendants",
        age: 51,
        electeurs: []
    },
    {
        cin: "DD487315",
        nom: "Amrani",
        prenom: "Imane",
        partiPolitique: "Parti Authenticité et Modernité",
        age: 29,
        electeurs: []
    },
    {
        cin: "EE518637",
        nom: "Tazi",
        prenom: "Youssef",
        partiPolitique: "Parti Authenticité et Modernité",
        age: 46,
        electeurs: []
    },
    {
        cin: "FF629841",
        nom: "Alaoui",
        prenom: "Hind",
        partiPolitique: "Parti Authenticité et Modernité",
        age: 37,
        electeurs: []
    },
    {
        cin: "GG731526",
        nom: "Fassi",
        prenom: "Hamza",
        partiPolitique: "Parti de l'Istiqlal",
        age: 41,
        electeurs: []
    },
    {
        cin: "HH842913",
        nom: "Kettani",
        prenom: "Meryem",
        partiPolitique: "Parti de l'Istiqlal",
        age: 26,
        electeurs: []
    },
    {
        cin: "JJ953724",
        nom: "Berrada",
        prenom: "Mehdi",
        partiPolitique: "Parti de l'Istiqlal",
        age: 39,
        electeurs: []
    },
    {
        cin: "KK164835",
        nom: "Rami",
        prenom: "Nour",
        partiPolitique: "Union Socialiste des Forces Populaires",
        age: 32,
        electeurs: []
    },
    {
        cin: "LL275946",
        nom: "Chakir",
        prenom: "Anas",
        partiPolitique: "Union Socialiste des Forces Populaires",
        age: 45,
        electeurs: []
    },
    {
        cin: "MM386157",
        nom: "Tahiri",
        prenom: "Sara",
        partiPolitique: "Union Socialiste des Forces Populaires",
        age: 28,
        electeurs: []
    },
    {
        cin: "NN497268",
        nom: "Ouazzani",
        prenom: "Hamza",
        partiPolitique: "Parti du Progrès et du Socialisme",
        age: 36,
        electeurs: []
    },
    {
        cin: "PP518379",
        nom: "Bouzid",
        prenom: "Nadia",
        partiPolitique: "Parti du Progrès et du Socialisme",
        age: 43,
        electeurs: []
    },
    {
        cin: "QQ629481",
        nom: "Mansouri",
        prenom: "Karim",
        partiPolitique: "Mouvement Populaire",
        age: 48,
        electeurs: []
    },
    {
        cin: "RR731592",
        nom: "Sebti",
        prenom: "Ikram",
        partiPolitique: "Mouvement Populaire",
        age: 31,
        electeurs: []
    },

    // Candidats indépendants
    {
        cin: "SS842613",
        nom: "El Mansouri",
        prenom: "Reda",
        partiPolitique: "Indépendant",
        age: 33,
        electeurs: []
    },
    {
        cin: "TT953724",
        nom: "Bennacer",
        prenom: "Aya",
        partiPolitique: "Indépendant",
        age: 27,
        electeurs: []
    },
    {
        cin: "UU164835",
        nom: "Lahlou",
        prenom: "Omar",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: []
    },
    {
        cin: "VV275946",
        nom: "Naciri",
        prenom: "Sara",
        partiPolitique: "Indépendant",
        age: 35,
        electeurs: []
    }
];

function AjouterunNouveauCandidat() {
    let NVcandidat = {
        cin: "",
        nom: "",
        prenom: "",
        partiPolitique: "",
        age: 0,
        electeurs: []
    }
    NVcandidat.cin = prompt("entre votre CIN :");
    NVcandidat.nom = prompt("entre votre NOM :");
    NVcandidat.prenom = prompt("entre votre PRENOM :");
    NVcandidat.partiPolitique = prompt("entre votre PARTIPOLITIAUE :");
    NVcandidat.age = prompt("entre votre AGE :");
    candidats.push(NVcandidat);
}
function Ajouterplusieurscandidatsalafois() {
    let nombercandudat = +prompt("entre le nomber des candidats :")
    for (let i = 1; i <= nombercandudat; i++) {
        console.log("===================== Candidat" + i + "========================")
        AjouterunNouveauCandidat()
    }
}
function Afficherlalistedescandidats() {
    /*console.log("cin\t\tnom\t\tprenom\t\tage\t\tpartipolitique")
    console.log("===\t\t===\t\t=======\t\t===\t\t=============")
        for (let i = 0 ; i < candidats.length ; i++)
        {
            console.log(candidats[i].cin,"\t",candidats[i].nom,"\t",candidats[i].prenom,"\t\t",candidats[i].age,"\t\t",candidats[i].partiPolitique
            )
        }*/
    console.table(candidats)
    // Identifiant, nom, prénom, Parti politique, Âge
}
// function Voterpouruncandidat() {
//     let dejavoter = false;
//     lelecteurCIN = prompt("votre CIN :");
//     for (let i = 0; i < candidats.length; i++) {
//         for (let j = 0; j < candidats[i].electeurs.length; j++) {
//             if (lelecteurCIN == candidats[i].electeurs[j]) {
//                 dejavoter = true;
//                 break;
//             }

//         } if (dejavoter)
//             break;

//     }
//     if(dejavoter)
//         console.log("tu as deja voter !!!");
//     if (!(dejavoter))
//     {
//          let votersur = prompt("enter le CIN de candidat : ");
//          let exist = false;
//          for(let i = 0; i < candidats.length ; i++)
//          {
//             if (votersur == candidats[i].cin)
//                 exist = true;
//             break;
//          }
//          if(exist)
//             candidats[i].electeurs.push(lelecteurCIN)
// console.log(candidats)
//     }
// }
//4. Voter pour un candidat :
//Demander à l’électeur de saisir sa propre CIN.
//Vérifier si l’électeur a le droit de voter (si sa CIN n’existe dans aucune des listes de votes d’un candidat)
//Demander l'identifiant ou la CIN du candidat, puis ajouter la CIN de l’électeur à la liste des votes du candidat.
Afficherlalistedescandidats()