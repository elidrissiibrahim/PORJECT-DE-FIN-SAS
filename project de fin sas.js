let prompt = require('prompt-sync')();
const candidats = [
    {
        cin: "AA184725",
        nom: "El Idrissi",
        prenom: "Ayoub",
        partiPolitique: "Rassemblement National des Indépendants",
        age: 42,
        electeurs: [
            "AB123456", "CD789012", "EF345678", "GH901234",
            "IJ567890", "KL123789", "MN456123", "OP789456"
        ]
    },
    {
        cin: "Vm19610",
        nom: "Ait Lahcen",
        prenom: "Salma",
        partiPolitique: "Rassemblement National des Indépendants",
        age: 34,
        electeurs: [
            "QR123654", "ST456789", "UV987321", "WX654987",
            "YZ321654", "AB456789", "CD987321"
        ]
    },
    {
        cin: "CC376924",
        nom: "Bennani",
        prenom: "Othmane",
        partiPolitique: "Rassemblement National des Indépendants",
        age: 51,
        electeurs: [
            "EF654987", "GH321654", "IJ789456", "KL456123",
            "MN987654", "OP321789"
        ]
    },

    {
        cin: "DD487315",
        nom: "Amrani",
        prenom: "Imane",
        partiPolitique: "Parti Authenticité et Modernité",
        age: 29,
        electeurs: [
            "QR654321", "ST789123", "UV456987", "WX123789",
            "YZ654123", "AB987456", "CD321789"
        ]
    },
    {
        cin: "EE518637",
        nom: "Tazi",
        prenom: "Youssef",
        partiPolitique: "Parti Authenticité et Modernité",
        age: 46,
        electeurs: [
            "EF789321", "GH456987", "IJ123654", "KL987321",
            "MN654789", "OP321456"
        ]
    },
    {
        cin: "FF629841",
        nom: "Alaoui",
        prenom: "Hind",
        partiPolitique: "Parti Authenticité et Modernité",
        age: 37,
        electeurs: [
            "QR456789", "ST123456", "UV789654", "WX321987",
            "YZ987123", "AB654789"
        ]
    },

    {
        cin: "GG731526",
        nom: "Fassi",
        prenom: "Hamza",
        partiPolitique: "Parti de l'Istiqlal",
        age: 41,
        electeurs: [
            "CD456789", "EF123987", "GH789654", "IJ321456",
            "KL654123", "MN987456", "OP123789"
        ]
    },
    {
        cin: "HH842913",
        nom: "Kettani",
        prenom: "Meryem",
        partiPolitique: "Parti de l'Istiqlal",
        age: 26,
        electeurs: [
            "QR789456", "ST321789", "UV654123", "WX987654",
            "YZ456321", "AB123987"
        ]
    },
    {
        cin: "JJ953724",
        nom: "Berrada",
        prenom: "Mehdi",
        partiPolitique: "Parti de l'Istiqlal",
        age: 39,
        electeurs: [
            "CD789321", "EF456789", "GH123456", "IJ987654",
            "KL321987", "MN654321"
        ]
    },

    {
        cin: "KK164835",
        nom: "Rami",
        prenom: "Nour",
        partiPolitique: "Union Socialiste des Forces Populaires",
        age: 32,
        electeurs: [
            "OP456789", "QR123789", "ST654987", "UV321654",
            "WX789123", "YZ456987", "AB321456"
        ]
    },
    {
        cin: "LL275946",
        nom: "Chakir",
        prenom: "Anas",
        partiPolitique: "Union Socialiste des Forces Populaires",
        age: 45,
        electeurs: [
            "CD123654", "EF987321", "GH654789", "IJ456123",
            "KL789654", "MN321456"
        ]
    },
    {
        cin: "MM386157",
        nom: "Tahiri",
        prenom: "Sara",
        partiPolitique: "Union Socialiste des Forces Populaires",
        age: 28,
        electeurs: [
            "OP789321", "QR456123", "ST987654", "UV123456",
            "WX654321", "YZ789456"
        ]
    },

    {
        cin: "NN497268",
        nom: "Ouazzani",
        prenom: "Hamza",
        partiPolitique: "Parti du Progrès et du Socialisme",
        age: 36,
        electeurs: [
            "AB456123", "CD987654", "EF321789", "GH789123",
            "IJ654987", "KL123456", "MN456789"
        ]
    },
    {
        cin: "PP518379",
        nom: "Bouzid",
        prenom: "Nadia",
        partiPolitique: "Parti du Progrès et du Socialisme",
        age: 43,
        electeurs: [
            "OP654321", "QR987456", "ST123789", "UV456123",
            "WX789654", "YZ321456"
        ]
    },

    {
        cin: "QQ629481",
        nom: "Mansouri",
        prenom: "Karim",
        partiPolitique: "Mouvement Populaire",
        age: 48,
        electeurs: [
            "AB789654", "CD321456", "EF654123", "GH987321",
            "IJ456789", "KL123987", "MN789456"
        ]
    },
    {
        cin: "RR731592",
        nom: "Sebti",
        prenom: "Ikram",
        partiPolitique: "Mouvement Populaire",
        age: 31,
        electeurs: [
            "OP321654", "QR654789", "ST987123", "UV456789",
            "WX123456", "YZ654987"
        ]
    },

    // Candidats indépendants : aucun électeur
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
    }];

function listprincipal() {
    let choix;
    do {
        console.log("==============================================");
        console.log("[1]. Ajouter un nouveau candidat              |");
        console.log("[2]. Ajouter plusieurs candidats à la fois    |")
        console.log("[3]. Afficher la liste des candidats          |")
        console.log("[4]. Voter pour un candidat                   |")
        console.log("[5]. Modifier les informations d'un candidat  |")
        console.log("[6]. Supprimer un candidat                    |")
        console.log("[7]. Rechercher des candidats                 |")
        console.log("[8]. Statistiques de l'élection               |")
        console.log("[0]. Quitter                                  |")
        console.log("==============================================");
        choix = +prompt("===> entre une nomber : ")

        switch (choix) {
            case 1:
                AjouterunNouveauCandidat()
                break;
            case 2:
                Ajouterplusieurscandidatsalafois()
                break;
            case 3:
                Afficherlalistedescandidats()
                break;
            default:
                console.log("choix invalid !!");
        }
    }
    while (choix != 0);

}
function AjouterunNouveauCandidat() {
    let exist = false;
    let NVcandidat = {
        cin: "",
        nom: "",
        prenom: "",
        partiPolitique: "",
        age: 0,
        electeurs: []
    }
    NVcandidat.cin = prompt("entre votre CIN :");
    for (let i = 0; i < candidats.length; i++) {
        if (NVcandidat.cin == candidats[i].cin) {
            exist = true;
            break;
        }
    }
    if (exist == false) {
        console.log("==============================================")
        console.log(NVcandidat.cin, "entre les autre informations  ")
        console.log("==============================================")
        NVcandidat.nom = prompt("- entre votre NOM :");
        NVcandidat.prenom = prompt("- entre votre PRENOM :");
        NVcandidat.partiPolitique = prompt("- entre votre PARTIPOLITIAUE et [0] :");
        if(NVcandidat.partiPolitique == '0')
            NVcandidat.partiPolitique="Indépendant"; 
        NVcandidat.age = + prompt("- entre votre AGE :");
        if (NVcandidat.age < 18) {
            console.log("== tu pas le drois de voter ==")
            return;
        }
        candidats.push(NVcandidat);
    }
    else {
        console.log("=======================================")
        console.log("== votre nom est deja dans les liste ==")
        console.log("=======================================")
    }


}
function Ajouterplusieurscandidatsalafois() {
    let nombercandudat = +prompt("entre le nomber des candidats :")
    for (let i = 1; i <= nombercandudat; i++) {
        console.log("===================== Candidat" + i + "========================")
        AjouterunNouveauCandidat()
    }
}
function Afficherlalistedescandidats() {
// console.log("cin\t\tnom\t\tprenom\t\tage\t\tpartipolitique")
// console.log("===\t\t===\t\t=======\t\t===\t\t=============")
//    for (let i = 0 ; i < candidats.length ; i++)
//   {
//       console.log(candidats[i].cin,"\t",candidats[i].nom,"\t",candidats[i].prenom,"\t\t",candidats[i].age,"\t\t",candidats[i].partiPolitique
//       )
//}

    console.table(candidats)

}
function Voterpouruncandidat() {
    let dejavoter = false;
    lelecteurCIN = prompt("votre CIN :");
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {
            if (lelecteurCIN == candidats[i].electeurs[j]) {
                dejavoter = true;
                break;
            }

        } if (dejavoter)
            break;

    }
    if (dejavoter)
        console.log("tu as deja voter !!!");
    if (!(dejavoter)) {
        let votersur = prompt("enter le CIN de candidat : ");
        let exist = false;
        for (let i = 0; i < candidats.length; i++) {
            if (votersur == candidats[i].cin)
                exist = true;
            break;
        }
        if (exist)
            candidats[i].electeurs.push(lelecteurCIN)
        console.log(candidats)
    }
}
//4. Voter pour un candidat :
//Demander à l’électeur de saisir sa propre CIN.
//Vérifier si l’électeur a le droit de voter (si sa CIN n’existe dans aucune des listes de votes d’un candidat)
//Demander l'identifiant ou la CIN du candidat, puis ajouter la CIN de l’électeur à la liste des votes du candidat.
listprincipal();