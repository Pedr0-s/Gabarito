
const exames = [       
"ANATOMO PATOLOGICO (GASTRO)",
"17 ALFA HIDROXIPROGESTERONA",
"25-HIDROXI VITAMINA D3",
"5 NUCLEOTIDASE",
"ABDOME AGUDO",
"ABDOMEN SIMPLES",
"ACIDO 5 HIDROXI INDOLACETICO",
"ACIDO FOLICO NO SORO",
"Ácido homo vanílico",
"Acido lactico (lactato)",
"Ácido mandélico (para estireno)",
"ACIDO URICO NO SORO",
"ACIDO VALPROICO - VALPROATO DE SODIO",
"ACIDO VANILMANDELICO",
"Ácidos graxos livres",
"ADENOIDES LATERAL",
"Adenovírus, IgG",
"Adrenocorticotrófico, hormônio (ACTH)",
"Aldolase",
"Aldosterona",
"ALFA FETOPROTEINA NO SORO",
"ALFA-1-ANTITRIPSINA FECAL",
"Alfa-2-macroglobulina",
"ALUMINIO NO SORO",
"AMILASE NO SORO",
"Amônia",
"ANATOMO PATOLÓGICO (PAAF)",
"ANATOMO PATOLÓGICO COMPLEMENTAR (GINECOLOGICOS)",
"ANDROSTENEDIONA",
"ANTE PE DIREITO",
"ANTE PE ESQUERDO",
"ANTEBRAÇO DIREITO",
"ANTEBRAÇO ESQUERDO",
"Anti-Sm",
"ANTIBIOGRAMA",
"ANTICORPO ANTI ILHOTA",
"ANTICORPOS IGA ANTI BETA 2 GLICOPROTEINA 1",
"Antimitocondria",
"Antimúsculo estriado",
"Antimúsculo liso",
"Antitrombina III, dosagem",
"ANUSCOPIA",
"Apolipoproteína A (Apo A)",
"Apolipoproteína B (Apo B)",
"ARTRITE REUMATOIDE (FATOR REUMATOIDE)",
"ASLO (Antiestreptolisina O)",
"AST (TGO)",
"ALT (TGP)",
"Bilirrubina total e frações",
"Beta HCG",
"Cálcio total",
"Cálcio ionizado",
"CEA (Antígeno Carcinoembrionário)",
"CK (Creatinoquinase)",
"CK-MB",
"Cloro",
"Colesterol total",
"Colesterol HDL",
"Colesterol LDL",
"Colesterol VLDL",
"Creatinina",
"Dengue IgG",
"Dengue IgM",
"DHEA-S",
"EAS (Urina tipo 1)",
"Eletroforese de proteínas",
"Eritrograma",
"Estradiol",
"Fator antinuclear (FAN)",
"Ferritina",
"Ferro sérico",
"Fibrinogênio",
"Fosfatase alcalina",
"Fósforo",
"FSH",
"Gama GT",
"Glicemia em jejum",
"Glicemia pós-prandial",
"Hemoglobina glicada (HbA1c)",
"Hemograma completo",
"Hepatite A IgG",
"Hepatite A IgM",
"Hepatite B (HBsAg)",
"Hepatite B Anti-HBs",
"Hepatite C",
"HIV 1 e 2",
"Homocisteína",
"IgA",
"IgE",
"IgG",
"IgM",
"Insulina",
"LDH",
"LH",
"Lipase",
"Magnésio",
"Parasitológico de fezes",
"PCR (Proteína C reativa)",
"Potássio",
"Progesterona",
"Prolactina",
"PSA total",
"PSA livre",
"Sódio",
"Testosterona total",
"Testosterona livre",
"TGO",
"TGP",
"Triglicerídeos",
"TSH",
"T3",
"T4 livre",
"Ureia",
"Urina 24 horas",
"Vitamina B12",
"Vitamina D"
];
   // pega os elementos
const input = document.getElementById("buscaExame");
const select = document.getElementById("exame");

// transforma em lista
const lista = exames.trim().split("\n");

// função pra mostrar exames
function mostrarLista(filtro = "") {
  select.innerHTML = "";

  const filtrados = lista.filter(exame =>
    exame.toLowerCase().includes(filtro.toLowerCase())
  );

  filtrados.forEach(exame => {
    let option = document.createElement("option");
    option.value = exame;
    option.textContent = exame;
    select.appendChild(option);
  });
}

// quando digitar
input.addEventListener("input", () => {
  mostrarLista(input.value);
});

// iniciar com tudo
mostrarLista();