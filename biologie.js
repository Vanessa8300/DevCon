var intrebari= [
    {
        prompt:"Tibia este os al scheletului:\n(a) capului \n(b) membrului inferior \n(c) membrului superior",
        answer:"b"
    },
    {
        prompt:"La realizarea functiilor de nutritie ale organismului uman participa sistemul:\n(a) excretor \n(b) muscular \n(c) nervos \n(d) osos",
        answer:"a"
    },
    {
        prompt:"Sangele oxigenat din ventriculul stang al inimii trece in:\n(a) artera aorta \n(b) artera pulmonara \n(c) venele cave \n(d) venele pulmonare",
        answer: "a"

    },
    {
        prompt:"Oase ale membrelor inferioare sunt:\n(a) carpienele \n(b) claviculele \n(c) metacarpienele \n(d) tarsienele",
        answer: "d"

    },
    {
        prompt:"Componenta a sistemului reproducator feminin este:\n(a) ovarul \n(b) uretra \n(c) testiculul \n(d) prostata",
        answer: "a"

    },
    {
        prompt:"Scleroza in placi este boala a sistemului:\n(a) digestiv \n(b) excretor \n(c) nervos central \n(d) reproducator masculin",
        answer: "c"

    },
    {
        prompt:"Rinichii:\n(a) au in structura lor nefroni \n(b) realizeaza functia  de relatia \n(c) sunt localizati in cavitatea toracica \n(d) sunt lipsiti de vascularizatie",
        answer: "a"

    },
    {
        prompt:"Din regnul Fungi fac parte:\n(a) Ascomicetele \n(b) Angiospermele \n(c) Celenteratele \n(d) Gimnospermele",
        answer: "a"

    },
    {
        prompt:"La eucariote, sediul respiratie aerobe este:\n(a) aparatul Golgi \n(b) cloroplastul \n(c) mitocondria \n(d) reticulul endoplasmatic",
        answer: "c"

    },
    {
        prompt:"Celulele cu conuri sunt:\n(a) absente in pata galbena \n(b) componentele nervului optic \n(c) localizate in coroida \n(d) receptori vizuali",
        answer: "d"

    },
    {
        
        prompt:"Cel mai lung segment al tubului digestiv la mamifere este:\n(a) faringele \n(b) esofagul \n(c) intestinul subtire \n(d) intestinul gros",
        answer: "c"

    },
    {
        
        prompt:"Lizozomii:\n(a) sunt alcatuiti din ARN si enzime \n(b) au rol in digestia intracelulara \n(c) sunt canalicule intracitoplasmatice \n(d) au, la periferie, o membrana dubla",
        answer: "b"

    },
    {
        
        prompt:"Este o lege mendeliana a ereditatii:\n(a) polenizarea incrucisata a plantelor hibride din prima generatie \n(b) schimbul nereciproc de gene intre cromozomii pereche \n(c) impuritatea gametilor din prima generatie \n(d) segregarea independenta a perechilor de caractere",
        answer: "d"

    },
    {
        
        prompt:"Miscare orientata a unui organ vegetativ este:\n(a) fotonastia \n(b) seismonastia \n(c) chimiotactismul \n(d) geotropismul",
        answer: "d"

    },
    {
        prompt:"Mamiferele au:\n(a) inima tricamerala \n(b) rinichi lipsiti de glomeruli \n(c) plamani cu alveole pulmonare \n(d) cavitate buco-faringiana",
        answer: "c"

    },
    {
        prompt:"Bila se varsa in:\n(a) cecum \n(b) duoden \n(c) colon \n(d) stomac",
        answer: "b"

    },
    {
        prompt:"Tropismele:\n(a) sunt miscari ale celulelor libere \n(b) se observa la fructele coniferelor \n(c) sunt miscari orientate ale organelor vegetale \n(d) au loc in interiorul celulelor somatice",
        answer: "c"

    },
    {
        prompt:"Nutrimentele rezultate din digestia amidonului sunt:\n(a) acizi grasi \n(b) aminoacizi \n(c) monozaharide \n(d) peptide",
        answer: "c"

    },
    {
        prompt:"Hipotalamusul intra in alcatuirea:\n(a) diencefalului \n(b) cerebelului \n(c) trunchiului cerebral \n(d) mezencefalului",
        answer: "a"

    },
    {
        prompt:"Tesutul cartilaginos este un tesut:\n(a) conjunctiv \n(b) epitelial \n(c) muscular \n(d) nervos",
        answer: "a"

    },
    {
        prompt:"Celulele formate prin diviziunea mitotica a unei celule -mama cu 2n=20 cromozomi prezinta:\n(a) n=10 cromozomi  \n(b) n=20 cromozomi \n(c) 2n=10cromozomi \n(d) 2n=20 cromozomi",
        answer: "d"

    },
    {
        prompt:"Globulele rosii:\n(a) asigura transportul substantelor nutritive \n(b) au rol in imunitatea organismului \n(c) realizeaza coagularea sangelui \n(d) transporta gazele respiratorii",
        answer: "d"

    },
    {
        prompt:"Unitatea structurala si functionala a rinichiului este:\n(a) capsula renala \n(b) lobul renal \n(c) nefronul \n(d) neuronul",
        answer: "c"

    },
  
]
var nr_intrebari=0;
for(var i=0; i<questions.length;i++)
{
    var response = window.prompt(questions[i].prompt)
    if(response == questions[i].answer)
    {
        nr_intrebari++;
        alert("Corect!");
    } else {
        alert("Gresit!");
    }
}
alert("Ai obtinut" + nr_intrebari + "/" + questions.length);