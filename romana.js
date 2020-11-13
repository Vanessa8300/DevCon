var intrebari= [
    {
        prompt: "Ce este metafora? \n (a)Metafora este o figură de stil de nivel lexico-semantic care constă în folosirea unui termen impropriu, dar plastic, evocator sau sugestiv, în locul termenului propriu.\n (b) Metafora este o figură de stil de nivel sintactic care constă în alăturarea unui cuvânt calificativ la altul, pentru a obține o valoare estetică. \n (c)Metafora este o figură de stil de nivel sintactic în care doi termeni, aflați în relație de asemănare, sunt puși în paralel, pentru a scoate în evidență caracteristicile unuia dintre ei.",
        answer: "a"
    },
    {
        prompt:"Romanul 'Ion' scris de Liviu Rebreanu este un roman: \n (a) traditional \n (b)modern \n (c)balzacian",
        answer: "b"

    },
    {
        prompt: "Care era locul lui Ilie Moromete la masa?\n (a) Locul lui era pragul celei de-a doua odai\n (b) Locul lui era langa soba \n(c) Locul lui era langa usa ",
        answer: "a"
    },
    {
        prompt:"Cine a scris opera Plumb:\n(a) Camil Petrescu \n(b) Ion Creanga \n(c) George Bacovia",
        answer: "c"

    },
    {
        prompt:"Cum il caracterizeaza pe Lica Samadaul:\n(a) ca pe un prieten pentru Ghita \n(b) ca pe un stapan absolut peste oameni si locuri \n(c) ca pe un om de rand",
        answer: "b"

    },
    {
        prompt:"De ce este determinata intriga in O scrisoare pierduta:\n(a) Intriga este reprezentată de pierderea scrisorii de dragoste adresată lui Zoe Trahanache și semnată de către însuși prefectul \n(b) Gasirea scrisorii de catre Cetateanul Turmentat \n(c) Sosirea de la Bucuresti a unei telegrame prin care cei din provincie sunt somati sa-l desemneze si sa-l aleaga pe Agamemnon Dandanache",
        answer: "a"

    },
    {
        prompt:"Care este tema operei Luceafarul:\n(a) moartea  \n(b) natura \n(c) problematica geniului in raport cu lumea, iubirea si cunoasterea ",
        answer: "c"

    },
    {
        prompt:":\n(a) \n(b) \n(c) ",
        answer: ""

    },
    {
        prompt:":\n(a) \n(b) \n(c) ",
        answer: ""

    },
    {
        prompt:":\n(a) \n(b) \n(c) ",
        answer: ""

    },
]
var nr_intrebari=0;
for(var i=0; i<questions.length;i++)
{
    var response = window.prompt(questions[i].prompt)
    if(response == questions[i].answer)
    {
        snr_intrebari++;
        alert("Corect!");
    } else {
        alert("Gresit!");
    }
}
alert("Ai obtinut" + nr_intrebari + "/" + questions.length);