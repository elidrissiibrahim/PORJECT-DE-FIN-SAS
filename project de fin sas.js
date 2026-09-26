let prompt = require('prompt-sync')();
let candidats = [
    {
        cin: "VM19610",
        nom: "El Idrissi",
        prenom: "IBRAHIM",
        partiPolitique: "R.N.I",
        age: 22,
        electeurs: [
            "AB123456"
        ]
    },
    {
        cin: "Vm19611",
        nom: "Ait Lahcen",
        prenom: "Salma",
        partiPolitique: "R.N.I",
        age: 34,
        electeurs: [
            "QR123654", "ST456789", "UV987321", "WX654987",
            "YZ321654", "AB456789"
        ]
    },
    {
        cin: "CC376924",
        nom: "Bennani",
        prenom: "Othmane",
        partiPolitique: "R.N.I",
        age: 51,
        electeurs: [
            "EF654987", "GH321654", "IJ789456", "KL456123",
            "MN987654",
        ]
    },

    {
        cin: "DD487315",
        nom: "Amrani",
        prenom: "Imane",
        partiPolitique: "P.A.M",
        age: 29,
        electeurs: [
            "QR654321", "ST789123", "UV456987"
        ]
    },
    {
        cin: "EE518637",
        nom: "Tazi",
        prenom: "Youssef",
        partiPolitique: "P.A.M",
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
        partiPolitique: "P.A.M",
        age: 37,
        electeurs: [
            "YZ987123", "AB654789"
        ]
    },

    {
        cin: "GG731526",
        nom: "Fassi",
        prenom: "Hamza",
        partiPolitique: "Istiqlal",
        age: 41,
        electeurs: [
            "KL654123", "MN987456", "OP123789"
        ]
    },
    {
        cin: "HH842913",
        nom: "Kettani",
        prenom: "Meryem",
        partiPolitique: "Istiqlal",
        age: 26,
        electeurs: [
            "QR789456", "ST321789",
        ]
    },
    {
        cin: "JJ953724",
        nom: "Berrada",
        prenom: "Mehdi",
        partiPolitique: "Istiqlal",
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
        partiPolitique: "U.S.F.P",
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
        partiPolitique: "U.S.F.P",
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
        partiPolitique: "U.S.F.P",
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
        partiPolitique: "P.P.S",
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
        partiPolitique: "P.P.S",
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
        partiPolitique: "M.P",
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
        partiPolitique: "M.P",
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
            case 4:
                Voterpouruncandidat()
                break;
            case 5:
                Modifierlesinformationsduncandidat()
                break;
            case 6:
                Supprimeruncandidat()
                break;
            case 7:
                Rechercherdescandidats()
                break;
            case 8:
                Statistiquesdelelection()
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
        console.log("Bonjour[", NVcandidat.cin, "] entre les autre informations  ")
        console.log("==============================================")
        NVcandidat.nom = prompt("- entre votre NOM :");
        NVcandidat.prenom = prompt("- entre votre PRENOM :");
        NVcandidat.partiPolitique = prompt("- entre votre PARTIPOLITIAUE et [0] is Indépendant :");
        if (NVcandidat.partiPolitique == '0')
            NVcandidat.partiPolitique = "Indépendant";
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
        console.log("===================== Candidat [" + i + "]========================")
        AjouterunNouveauCandidat()
    }
}
function Afficherlalistedescandidats() {

    console.log("[1]-trie par les voltes ")
    console.log("[2]-tire par l'apartie politique")
    console.log("[0]-menu principale")
    let trie = +prompt("trie par :");
    switch (trie) {
        case 1:
            trieparnomberdesvote()
            break;
        case 2:
            trieparlapartiepolique()
            break;
        case 0:
            listprincipal()
            break;

    }

    function trieparlapartiepolique() {
        console.log("les partie plitique qui ont dans la list :");
        console.log("R.N.I");
        console.log("P.A.M");
        console.log("Istiqlal");
        console.log("U.S.F.P");
        console.log("P.P.S");
        console.log("M.P");
        console.log("Indépendant");
        let choix = prompt("enter le nom de partie politique :")

        let newlist = [];
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].partiPolitique == choix) {
                newlist.push(candidats[i]);
            }
        }
        console.table(newlist)

    }

    function trieparnomberdesvote() {
        for (let i = 0; i < candidats.length; i++) {
            for (let j = i + 1; j < candidats.length; j++) {
                if (candidats[i].electeurs.length < candidats[j].electeurs.length) {
                    let swap = candidats[i];
                    candidats[i] = candidats[j];
                    candidats[j] = swap;
                }
            }
        }
        let newlist = {};
        for (let i = 0; i < candidats.length; i++) {
            newlist[i + 1] = {
                cin: candidats[i].cin,
                nom: candidats[i].nom,
                prenom: candidats[i].prenom,
                partiPolitique: candidats[i].partiPolitique,
                votes: candidats[i].electeurs.length
            }
        }
        console.table(newlist)
    }

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
        let indexcandidat = null;
        for (let i = 0; i < candidats.length; i++) {
            if (votersur == candidats[i].cin)
                exist = true;
            indexcandidat = i;
        }
        if (exist) {
            candidats[indexcandidat].electeurs.push(lelecteurCIN)
            console.log("votre vote enregistre");
        }
        else {
            console.log("============ candidat introvable ===============");
            AjouterunNouveauCandidat()
        }
    }
}
function Supprimeruncandidat() {
    let inliste = false;
    let cin = prompt("enter le cin de candidat pour le suprime : ");
    let clean = [];
    indexcandidat = null;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin == cin) {
            inliste = true;
            candidatindex = i;
            break;
        }
    }
    if (inliste) {
        for (let i = 0; i < candidats.length; i++) {
            if (i != candidatindex)
                clean.push(candidats[i])
        }
    }
    candidats = clean;

}
function Modifierlesinformationsduncandidat() {
    let verfcandidat = false;
    let cin = prompt("enter votre CIN pour modifie tes information :");
    let candidatindex = null;

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin == cin) {
            verfcandidat = true;
            candidatindex = i;
        }
        break;
    }
    if (verfcandidat) {
        console.log("modifie les information de ", cin);
        candidats[candidatindex].age = prompt("modifie votre age :")
        candidats[candidatindex].partiPolitique = prompt("entre votre novelle partie plotique :")
        candidats[candidatindex].electeurs.length = 0;


    }
    else
        console.log("tu pas dans les listes !")
}
function Rechercherdescandidats() {
    inliste = false;
    nomlist = [];
    let nom = prompt("entre votre nom :");
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].nom.toLowerCase() == nom.toLowerCase()) {
            inliste = true;
            indexcandidat = i;
            nomlist.push(candidats[i])
        }
    }
    if (inliste) {
        console.table(nomlist)
    }
    else
        console.log("pas de candidat avec ce nom ")

}
function Statistiquesdelelection() {
    console.log("[1]- Afficher le nombre total de candidats")
    console.log("[2]- Afficher le Top 3 des candidats ")
    console.log("[3]- Afficher le nombre de candidats par parti politique")
    //Afficher le nombre total de votes exprimés dans toute l'élection.
    //Afficher le Top 3 des candidats ayant le plus de votes.
    //Afficher le nombre de candidats par parti politique
    let choix = +prompt("entre une choix : ")
    switch (choix) {
        case 1:
            nombretotaldevotes()
            break;
        case 2:
            Top3descandidats()
            break;
        case 3:
            nombredecandidatsparpartipolitique();
            break;

    }

    function nombretotaldevotes() {
        let votetotale = 0;
        for (let i = 0; i < candidats.length; i++) {
            {
                votetotale += candidats[i].electeurs.length;
            }
        }
        console.log("nombers des votes est : ", votetotale, "votes");
    }
    function Top3descandidats() {
        for (let i = 0; i < candidats.length; i++) {
            for (let j = i + 1; j < candidats.length; j++) {
                if (candidats[i].electeurs.length < candidats[j].electeurs.length) {
                    let swap = candidats[i];
                    candidats[i] = candidats[j];
                    candidats[j] = swap;
                }
            }
        }
        for (let top = 0; top < 3; top++) {
            console.log(`======> top ${top + 1} est le candidat ${candidats[top].nom} ${candidats[top].prenom} de CIN : ${candidats[top].cin} dans ${candidats[top].partiPolitique} avec [${candidats[top].electeurs.length}] votes `)
        }

    }
    function nombredecandidatsparpartipolitique() {
        let number = 0;
        let compteur = {};
        for (let i = 0; i < candidats.length; i++) {
            let parti = candidats[i].partiPolitique;
            if (compteur[parti]) {
                compteur[parti]++;
            }
            else {
                compteur[parti] = 1;
            }

        }
        console.table(compteur)
    }

}
listprincipal();