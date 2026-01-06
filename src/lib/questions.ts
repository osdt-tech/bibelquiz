export type CategoryColor = 'rot' | 'orange' | 'gelb' | 'gruen' | 'blau' | 'weiss'

export type Difficulty = 1 | 2 | 3

export interface Question {
  id: string
  category: CategoryColor
  difficulty: Difficulty
  question: string
  answer: string
}

export interface Category {
  name: string
  color: CategoryColor
  colorValue: string
  textColor: string
  icon: string
}

export const CATEGORIES: Category[] = [
  {
    name: 'Wer sagte',
    color: 'rot',
    colorValue: 'oklch(0.55 0.22 25)',
    textColor: 'oklch(0.98 0 0)',
    icon: '💬'
  },
  {
    name: 'Namen',
    color: 'orange',
    colorValue: 'oklch(0.65 0.18 50)',
    textColor: 'oklch(0.98 0 0)',
    icon: '👤'
  },
  {
    name: 'A-Z',
    color: 'gelb',
    colorValue: 'oklch(0.85 0.15 95)',
    textColor: 'oklch(0.25 0.01 280)',
    icon: '🔤'
  },
  {
    name: 'Geographie',
    color: 'gruen',
    colorValue: 'oklch(0.60 0.18 150)',
    textColor: 'oklch(0.98 0 0)',
    icon: '🌍'
  },
  {
    name: 'Zahlen',
    color: 'blau',
    colorValue: 'oklch(0.55 0.20 250)',
    textColor: 'oklch(0.98 0 0)',
    icon: '🔢'
  },
  {
    name: "Wo steht's",
    color: 'weiss',
    colorValue: 'oklch(0.98 0.01 0)',
    textColor: 'oklch(0.25 0.01 280)',
    icon: '📖'
  }
]

export const QUESTIONS: Question[] = [
  // Rot - Wer sagte (50 questions)
 


{ id: "rot-1-1", category: "rot", difficulty: 1, question: "Wer sagte: »Wenn dich die bösen Buben locken, so folge nicht.«?", answer: "Salomo (Spr. 1, 10)" },
{ id: "rot-1-2", category: "rot", difficulty: 1, question: "Wer sagte: »Ich finde keine Schuld an diesem Menschen.«?", answer: "Pilatus (Luk. 23, 4)" },
{ id: "rot-1-3", category: "rot", difficulty: 1, question: "Wer sagte: »Steig eilend hernieder, denn ich muß heute in deinem Hause einkehren.«?", answer: "Jesus (Luk. 19, 5)" },
{ id: "rot-1-4", category: "rot", difficulty: 1, question: "Wer sagte: »Ihr könnt nicht Gott dienen und dem Mammon.«?", answer: "Jesus (Matth. 6, 24)" },
{ id: "rot-1-5", category: "rot", difficulty: 1, question: "Wer sagte: »Gehet hin in alle Welt und prediget das Evangelium aller Kreatur.«?", answer: "Jesus (Mark. 16, 15)" },
{ id: "rot-1-6", category: "rot", difficulty: 1, question: "Wer sagte: »Tut Buße, denn das Himmelreich ist nahe herbeigekommen.«?", answer: "Johannes der Täufer (Matth. 3, 2) / Jesus (Matth. 4, 17)" },
{ id: "rot-2-7", category: "rot", difficulty: 2, question: "Wer sagte: »Alle eure Sorge werft auf ihn, denn er sorgt für euch.«?", answer: "Petrus (1. Petr. 5, 7)" },
{ id: "rot-2-8", category: "rot", difficulty: 2, question: "Wer sagte: »Darum sollt ihr vollkommen sein, gleichwie euer Vater im Himmel vollkommen ist.«?", answer: "Jesus (Matth. 5, 48)" },
{ id: "rot-2-9", category: "rot", difficulty: 2, question: "Wer sagte: »Mein Herr und mein Gott.«?", answer: "Thomas (Joh. 20, 28)" },
{ id: "rot-2-10", category: "rot", difficulty: 2, question: "Wer sagte: »Verwirf mich nicht von deinem Angesicht, und nimm deinen heiligen Geist nicht von mir.«?", answer: "David (Ps. 51, 13)" },
{ id: "rot-2-11", category: "rot", difficulty: 2, question: "Wer sagte: »Wer den Sohn Gottes hat, der hat das Leben. Wer den Sohn Gottes nicht hat, der hat das Leben nicht.«?", answer: "Johannes (1. Joh. 5, 12)" },
{ id: "rot-2-12", category: "rot", difficulty: 2, question: "Wer sagte: »Ihr wißt, daß ihr nicht mit vergänglichem Silber oder Gold erlöst seid, ...«?", answer: "Petrus (1. Petr. 1, 18)" },
{ id: "rot-2-13", category: "rot", difficulty: 2, question: "Wer sagte: »Tritt nicht herzu, zieh deine Schuhe von deinen Füßen, denn der Ort, darauf du stehst, ist heiliges Land.«?", answer: "Gott (2. Mose 3, 5)" },
{ id: "rot-2-14", category: "rot", difficulty: 2, question: "Wer sagte: »Siehe, ich stehe vor der Tür und klopfe an ...«?", answer: "Jesus (Offb. 3, 20)" },
{ id: "rot-2-15", category: "rot", difficulty: 2, question: "Wer sagte: »Es geschieht nichts Neues unter der Sonne.«?", answer: "Salomo (Pred. 1, 9)" },
{ id: "rot-2-16", category: "rot", difficulty: 2, question: "Wer sagte: »Fürchtet euch nicht! Siehe, ich verkündige euch große Freude, die allem Volk widerfahren wird.«?", answer: "Der Engel des Herrn (Luk. 2, 10)" },
{ id: "rot-2-17", category: "rot", difficulty: 2, question: "Wer sagte: »Unser Glaube ist der Sieg, der die Welt überwunden hat.«?", answer: "Johannes (1. Joh. 5, 4)" },
{ id: "rot-2-18", category: "rot", difficulty: 2, question: "Wer sagte: »Mein Gott, mein Gott, warum hast du mich verlassen?«?", answer: "David (Ps. 22, 2) / Jesus (Matth. 27, 46)" },
{ id: "rot-2-19", category: "rot", difficulty: 2, question: "Wer sagte: »Meine Seele erhebt den Herrn, und mein Geist freuet sich Gottes, meines Heilandes.«?", answer: "Maria (Luk. 1, 46.47)" },
{ id: "rot-2-20", category: "rot", difficulty: 2, question: "Wer sagte: »Freut euch in dem Herrn allezeit, und abermals sage ich: Freut euch!«?", answer: "Paulus (Phil. 4, 4)" },
{ id: "rot-2-21", category: "rot", difficulty: 2, question: "Wer sagte: »Bleibe bei uns, denn es will Abend werden, und der Tag hat sich geneiget.«?", answer: "Die Emmausjünger (Luk. 24, 29)" },
{ id: "rot-2-22", category: "rot", difficulty: 2, question: "Wer sagte: »Es ist in keinem andern Heil, ist auch kein anderer Name unter dem Himmel den Menschen gegeben, darin wir sollen selig werden.«?", answer: "Petrus (Apg. 4, 12)" },
{ id: "rot-2-23", category: "rot", difficulty: 2, question: "Wer sagte: »Du bist Christus, des lebendigen Gottes Sohn.«?", answer: "Petrus (Matth. 16, 16)" },
{ id: "rot-2-24", category: "rot", difficulty: 2, question: "Wer sagte: »Es fehlt nicht viel, so wirst du mich noch dazu überreden, als Christ aufzutreten.«?", answer: "König Agrippa (= Herodes Agrippa II.) (Apg. 26, 28)" },
{ id: "rot-2-25", category: "rot", difficulty: 2, question: "Wer sagte: »Ich aber und mein Haus wollen dem Herrn dienen.«?", answer: "Josua (Jos. 24, 15)" },
{ id: "rot-3-26", category: "rot", difficulty: 3, question: "Wer sagte: »Lehre uns bedenken, daß wir sterben müssen, auf daß wir klug werden.«?", answer: "Mose (Ps. 90, 12)" },
{ id: "rot-2-27", category: "rot", difficulty: 2, question: "Wer sagte: »Und wenn sie alle an dir Ärgernis nehmen, so doch ich nicht.«?", answer: "Petrus (Matth. 26, 33)" },
{ id: "rot-2-28", category: "rot", difficulty: 2, question: "Wer sagte: »Herr, du fragst nicht danach, daß mich meine Schwester läßt alleine dienen?«?", answer: "Martha (Luk. 10, 40)" },
{ id: "rot-2-29", category: "rot", difficulty: 2, question: "Wer sagte: »Wo du hingehst, da will ich auch hingehen.«?", answer: "Ruth zu ihrer Schwiegermutter Naemi (Ruth 1, 16)" },
{ id: "rot-2-30", category: "rot", difficulty: 2, question: "Wer sagte: »Ich vermag alles durch den, der mich mächtig macht, Christus.«?", answer: "Paulus (Phil. 4, 13)" },
{ id: "rot-2-31", category: "rot", difficulty: 2, question: "Wer sagte: »Bin ich denn ein Hund, daß du mit Stecken zu mir kommst?«?", answer: "Goliath (1. Sam. 17, 43)" },
{ id: "rot-2-32", category: "rot", difficulty: 2, question: "Wer sagte: »Habe deine Lust am Herrn, der wird dir geben, was dein Herz wünscht.«?", answer: "David (Ps. 37, 4)" },
{ id: "rot-2-33", category: "rot", difficulty: 2, question: "Wer sagte: »Ich schäme mich des Evangeliums von Christus nicht.«?", answer: "Paulus (Röm. 1, 16)" },
{ id: "rot-3-34", category: "rot", difficulty: 3, question: "Wer sagte: »Jesus, du Sohn Davids, erbarm dich über mich!«?", answer: "Der Blinde von Jericho (Luk. 18, 38)" },
{ id: "rot-3-35", category: "rot", difficulty: 3, question: "Wer sagte: »Gott ist unsere Zuversicht und Stärke, eine Hilfe in den großen Nöten, die uns getroffen haben.«?", answer: "Die Söhne Korah (levitische Sängergruppe) (Ps. 46, 2)" },
{ id: "rot-3-36", category: "rot", difficulty: 3, question: "Wer sagte: »Ich will mich freuen des Herrn und fröhlich sein in Gott, meinem Heil.«?", answer: "Habakuk (Hab. 3, 18)" },
{ id: "rot-3-37", category: "rot", difficulty: 3, question: "Wer sagte: »Seinetwegen lasse keiner den Mut sinken.«?", answer: "David (1. Sam. 17, 32)" },
{ id: "rot-3-38", category: "rot", difficulty: 3, question: "Wer sagte: »Wie der Hirsch lechzt nach frischem Wasser, so schreit meine Seele, Gott, zu dir.«?", answer: "Söhne Korah (Ps. 42)" },
{ id: "rot-3-39", category: "rot", difficulty: 3, question: "Wer sagte: »Heile du mich, Herr, so werde ich heil, hilf du mir, so ist mir geholfen.«?", answer: "Jeremia (Jer. 17, 14)" },
{ id: "rot-3-40", category: "rot", difficulty: 3, question: "Wer sagte: »Richtet unser Gesetz auch einen Menschen, ehe man ihn verhört hat und weiß, was er tut?«?", answer: "Nikodemus (Joh. 7, 51)" },
{ id: "rot-3-41", category: "rot", difficulty: 3, question: "Wer sagte: »Dreimal hast du mich getäuscht und mir nicht gesagt, worin deine große Kraft liegt.«?", answer: "Delila (Rich. 16, 15)" },
{ id: "rot-3-42", category: "rot", difficulty: 3, question: "Wer sagte: »Speise ging aus vom Fresser und Süßigkeit vom Starken.«?", answer: "Simson (Rich. 14, 14)" },
{ id: "rot-3-43", category: "rot", difficulty: 3, question: "Wer sagte: »Deine Gnade reicht, so weit der Himmel ist, und deine Treue, so weit die Wolken gehen.«?", answer: "David (Ps. 108, 5)" },
{ id: "rot-3-44", category: "rot", difficulty: 3, question: "Wer sagte: »Wahrlich, dieser ist Gottes Sohn gewesen!«?", answer: "Der Hauptmann unter dem Kreuz (Matth. 27, 54)" },
{ id: "rot-3-45", category: "rot", difficulty: 3, question: "Wer sagte: »Geh wieder hin und lege dich schlafen, und wenn du gerufen wirst, so sprich: Rede, Herr, denn dein Knecht hört.«?", answer: "Eli (1. Sam. 3, 9)" },
{ id: "rot-3-46", category: "rot", difficulty: 3, question: "Wer sagte: »Dein Wort ward meine Speise, sooft ich's empfing …«?", answer: "Jeremia (Jer. 15, 16)" },
{ id: "rot-3-47", category: "rot", difficulty: 3, question: "Wer sagte: »Ich weiß, daß mein Erlöser lebt.«?", answer: "Hiob (Hiob 19, 25)" },
{ id: "rot-3-48", category: "rot", difficulty: 3, question: "Wer sagte: »Wir haben nichts in die Welt gebracht, darum werden wir auch nichts hinausbringen.«?", answer: "Paulus (1. Tim. 6, 7)" },
{ id: "rot-3-49", category: "rot", difficulty: 3, question: "Wer sagte: »Was habe ich dir getan, daß du mich nun dreimal geschlagen hast?«?", answer: "Bileams Esel (4. Mose 22, 28)" },
{ id: "rot-2-50", category: "rot", difficulty: 2, question: "Wer sagte: »Der Mensch lebt nicht vom Brot allein, sondern von einem jeglichen Wort, das durch den Mund Gottes geht.«?", answer: "Jesus (Matth. 4, 4) / Mose (5. Mose 8, 3)" },

 
  // Orange - Namen (50 questions)
{ id: "orange-1-1", category: "orange", difficulty: 1, question: "Wie hieß die Frau, mit der David Ehebruch beging?", answer: "Bathseba (2. Samuel 11)" },
{ id: "orange-1-2", category: "orange", difficulty: 1, question: "Wie hieß der erste Mensch?", answer: "Adam (1. Mose 4, 1)" },
{ id: "orange-1-3", category: "orange", difficulty: 1, question: "Wie hieß der Vater von Jakobus, des Alphäus Sohn?", answer: "Alphäus (Matth. 10, 3)" },
{ id: "orange-1-4", category: "orange", difficulty: 1, question: "Wer hatte den Beinamen »der Thisbiter«?", answer: "Elia (1. Kön. 17, 1)" },
{ id: "orange-1-5", category: "orange", difficulty: 1, question: "Wie hieß der Vorgänger König Salomos?", answer: "David (1. Kön. 2, 12)" },
{ id: "orange-1-6", category: "orange", difficulty: 1, question: "Wie hieß Marthas und Marias Bruder?", answer: "Lazarus (Joh. 11, 1–45)" },
{ id: "orange-1-7", category: "orange", difficulty: 1, question: "Wie hieß der Vater Josuas?", answer: "Nun (2. Mose 33, 11)" },
{ id: "orange-2-8", category: "orange", difficulty: 2, question: "Wie hieß die Schwester Moses, die aussätzig wurde?", answer: "Mirjam (4. Mose 26, 59; 12, 10)" },
{ id: "orange-2-9", category: "orange", difficulty: 2, question: "Wie hieß der Prophet, der nach Tarsis fuhr, statt nach Ninive zu gehen?", answer: "Jona (Jona 1)" },
{ id: "orange-2-10", category: "orange", difficulty: 2, question: "Wie hieß der Vater von Methuschelach?", answer: "Henoch (1. Mose 5, 21)" },
{ id: "orange-2-11", category: "orange", difficulty: 2, question: "Wer wurde Nachfolger des Judas Ischarioth im Apostelamt?", answer: "Matthias (Apg. 1, 26)" },
{ id: "orange-2-12", category: "orange", difficulty: 2, question: "Wie hieß die Frau, die dem Richter Simson zum Verhängnis wurde?", answer: "Delila (Richter 16)" },
{ id: "orange-2-13", category: "orange", difficulty: 2, question: "Wie hießen die Großeltern von Isai?", answer: "Ruth und Boas (Ruth 4, 13–22)" },
{ id: "orange-2-14", category: "orange", difficulty: 2, question: "Wer legte Paulus in Damaskus die Hände auf, daß er wieder sehen konnte?", answer: "Ananias (Apg. 9, 17)" },
{ id: "orange-2-15", category: "orange", difficulty: 2, question: "Wie hieß der älteste Sohn Jakobs?", answer: "Ruben (1. Mose 35, 23)" },
{ id: "orange-2-16", category: "orange", difficulty: 2, question: "Auf wen geht die Erfindung von Saiten- und Blasinstrumenten zurück?", answer: "Jubal (1. Mose 4, 21)" },
{ id: "orange-2-17", category: "orange", difficulty: 2, question: "Welche römischen Kaiser regierten zu Lebzeiten Jesu?", answer: "Augustus und Tiberius (Luk. 2, 1; Luk. 3, 1)" },
{ id: "orange-2-18", category: "orange", difficulty: 2, question: "Welcher Hohepriester lehrte König Joas?", answer: "Jojada (2. Könige 12, 3)" },
{ id: "orange-2-19", category: "orange", difficulty: 2, question: "Wer stand von 26 bis 36 n. Chr. der römischen Provinz Judäa als Prokurator vor?", answer: "Pontius Pilatus (Luk. 3, 1)" },
{ id: "orange-2-20", category: "orange", difficulty: 2, question: "Wie hieß der Vater des Königs David?", answer: "Isai (Ruth 4, 17)" },
{ id: "orange-2-21", category: "orange", difficulty: 2, question: "Wie hieß der babylonische Herrscher, der im Jahre 597 v. Chr. Jerusalem eroberte?", answer: "Nebukadnezar (Dan. 1, 1–2)" },
{ id: "orange-2-22", category: "orange", difficulty: 2, question: "Wie hieß der Prophet, der den König David wegen seines Ehebruchs zur Rede stellte?", answer: "Nathan (2. Sam. 12; Ps. 51)" },
{ id: "orange-2-23", category: "orange", difficulty: 2, question: "Wie hießen die Eltern Johannes’ des Täufers?", answer: "Zacharias und Elisabeth (Luk. 1)" },
{ id: "orange-2-24", category: "orange", difficulty: 2, question: "Wer war zur Zeit der Geburt Jesu „Landpfleger“ in der römischen Provinz Syrien?", answer: "Quirinius (Cyrenius) (Luk. 2, 2)" },
{ id: "orange-2-25", category: "orange", difficulty: 2, question: "Wer wurde am selben Tag frei, an dem Jesus verurteilt wurde?", answer: "Barabbas (Matth. 27, 15–26)" },
{ id: "orange-3-26", category: "orange", difficulty: 3, question: "Welche Bedeutung hat der Name Benjamin?", answer: "Sohn des Glücks (Glückskind, Sohn der rechten Hand)" },
{ id: "orange-3-27", category: "orange", difficulty: 3, question: "Wem gab Abraham nach der Niederwerfung der Könige (Hebr. 7, 1) den Zehnten?", answer: "Melchisedek (1. Mose 14, 18 f)" },
{ id: "orange-3-28", category: "orange", difficulty: 3, question: "Wie hieß die Mutter von Thubal-Kain?", answer: "Zilla (1. Mose 4, 22)" },
{ id: "orange-3-29", category: "orange", difficulty: 3, question: "Wie hieß der Vetter und Heerführer König Sauls?", answer: "Abner (1. Sam. 14, 50)" },
{ id: "orange-3-30", category: "orange", difficulty: 3, question: "Wie hieß die Tochter Ephraims, die Gründerin der Ortschaft Beth-Horon?", answer: "Scheera (1. Chron. 7, 24)" },
{ id: "orange-3-31", category: "orange", difficulty: 3, question: "Was bedeutet der Name „Elia“?", answer: "Mein Gott ist der Herr (= Jahwe)" },
{ id: "orange-3-32", category: "orange", difficulty: 3, question: "Wie hieß die jüngste Tochter Hiobs?", answer: "Keren-Happuch (Hiob 42, 14)" },
{ id: "orange-3-33", category: "orange", difficulty: 3, question: "Wie hieß der Sohn der Eunike?", answer: "Timotheus (2. Tim. 1, 2)" },
{ id: "orange-3-34", category: "orange", difficulty: 3, question: "Wie hieß Moses Schwiegervater?", answer: "Reguel (2. Mose 2, 18) / Jethro (2. Mose 3, 1)" },
{ id: "orange-3-35", category: "orange", difficulty: 3, question: "Wie hieß der israelitische König, dem Elia entgegentrat?", answer: "Ahab (1. Kön. 17)" },
{ id: "orange-3-36", category: "orange", difficulty: 3, question: "Der Name welches Propheten bedeutet „Umarmer, Umklammerer“?", answer: "Habakuk" },
{ id: "orange-3-37", category: "orange", difficulty: 3, question: "Wie hieß die einzige Richterin Israels, die uns bekannt ist?", answer: "Debora (Richter 4, 4)" },
{ id: "orange-3-38", category: "orange", difficulty: 3, question: "Wie hieß Rebekkas Vater?", answer: "Bethuel (1. Mose 24, 15)" },
{ id: "orange-3-39", category: "orange", difficulty: 3, question: "Unter wessen Leitung wurden die Mauern Jerusalems wieder aufgebaut?", answer: "Nehemia (Buch Nehemia)" },
{ id: "orange-1-40", category: "orange", difficulty: 1, question: "Wie hieß Abraham ursprünglich?", answer: "Abram (1. Mose 17, 5)" },
{ id: "orange-1-41", category: "orange", difficulty: 1, question: "Wer amtierte zur Zeit der Kreuzigung Jesu als Hoherpriester?", answer: "Kaiphas (Matth. 26, 57)" },
{ id: "orange-1-42", category: "orange", difficulty: 1, question: "Wie hieß der Sohn von Elisabeth, die in Lukas 1 genannt wird?", answer: "Johannes der Täufer" },
{ id: "orange-1-43", category: "orange", difficulty: 1, question: "Wie hieß die Mutter Samuels?", answer: "Hanna (1. Sam. 1, 20)" },
{ id: "orange-1-44", category: "orange", difficulty: 1, question: "Wie hieß die jüdische Frau, die Königin von Persien wurde und ihre Landsleute vor der Vernichtung rettete?", answer: "Esther (Buch Esther)" },
{ id: "orange-1-45", category: "orange", difficulty: 1, question: "Wie hieß der Vater von Jakobus und Johannes, den Jüngern Jesu?", answer: "Zebedäus (Matth. 4, 21)" },
{ id: "orange-1-46", category: "orange", difficulty: 1, question: "Wie hieß der erste Hohepriester Israels?", answer: "Aaron (2. Mose 28)" },
{ id: "orange-2-47", category: "orange", difficulty: 2, question: "Welcher Mann half Joseph von Arimathia, Jesus zu begraben?", answer: "Nikodemus (Joh. 19, 39)" },
{ id: "orange-2-48", category: "orange", difficulty: 2, question: "Wie hieß Lots Onkel?", answer: "Abram (1. Mose 11, 27)" },
{ id: "orange-2-49", category: "orange", difficulty: 2, question: "Wie hieß der Bruder des Simon Petrus?", answer: "Andreas (Mark. 1, 16)" },
{ id: "orange-2-50", category: "orange", difficulty: 2, question: "Wie hieß der Vater von Jesaja?", answer: "Amoz (Jes. 1, 1)" },






  // Gelb - A-Z (50 questions)
{ id: "gelb-1-1", category: "gelb", difficulty: 1, question: "Welchen Beruf hatte Lukas?", answer: "Arzt (Kol. 4, 14)" },
{ id: "gelb-1-2", category: "gelb", difficulty: 1, question: "Mit welcher Bewaffnung trat David dem Riesen Goliath entgegen?", answer: "Stab, Schleuder, 5 Steine (1. Sam. 17, 40)" },
{ id: "gelb-1-3", category: "gelb", difficulty: 1, question: "Mit welchem Samenkorn verglich Jesus das Reich Gottes?", answer: "Mit einem Senfkorn (Matth. 13, 31; Lukas 13,18.19)" },
{ id: "gelb-1-4", category: "gelb", difficulty: 1, question: "Wie heißt das erste Buch der Bibel?", answer: "1. Mose (griechisch = Genesis; hebräisch = Bereschit)" },
{ id: "gelb-3-5", category: "gelb", difficulty: 3, question: "Paulus war in Korinth bei einem Zeltmacher aus Pontus. Wie hieß dieser?", answer: "Aquila (Apostelgeschichte 18, 1.2)" },
{ id: "gelb-1-6", category: "gelb", difficulty: 1, question: "Wie heißt das letzte Buch der Bibel?", answer: "Offenbarung des Johannes" },
{ id: "gelb-2-7", category: "gelb", difficulty: 2, question: "Unter welchem Regenten wurde Daniel in die Löwengrube geworfen?", answer: "Darius aus Medien (Dan. 6, 1)" },
{ id: "gelb-1-8", category: "gelb", difficulty: 1, question: "Welchen Beruf hatte Paulus?", answer: "Zeltmacher (Apg. 18, 3)" },
{ id: "gelb-1-9", category: "gelb", difficulty: 1, question: "Welcher Psalm ist der längste?", answer: "Psalm 119" },
{ id: "gelb-2-10", category: "gelb", difficulty: 2, question: "In welcher familiären Beziehung standen David und Saul?", answer: "David war Sauls Schwiegersohn (1. Sam. 18, 27)" },
{ id: "gelb-2-11", category: "gelb", difficulty: 2, question: "Welches Evangelium hat die meisten Kapitel?", answer: "Matthäus (28 Kapitel)" },
{ id: "gelb-2-12", category: "gelb", difficulty: 2, question: "Welches Tier bauten die Israeliten?", answer: "Das goldene Kalb (2. Mose 32, 1–6)" },
{ id: "gelb-2-13", category: "gelb", difficulty: 2, question: "Wo wurde Rahel begraben?", answer: "Am Wege nach Ephratha = Bethlehem (1. Mose 35, 19.20)" },
{ id: "gelb-2-14", category: "gelb", difficulty: 2, question: "Wie hieß der erste Mensch, der ermordet wurde?", answer: "Abel (1. Mose 4, 8)" },
{ id: "gelb-2-15", category: "gelb", difficulty: 2, question: "Wie heißt das letzte Buch des Alten Testaments?", answer: "Maleachi" },
{ id: "gelb-2-16", category: "gelb", difficulty: 2, question: "Was geschah mit Malchus, als Jesus verraten wurde?", answer: "Petrus schlug ihm mit seinem Schwert das Ohr ab, und Jesus heilte es wieder. (Joh. 18, 10; Luk. 22, 50.51)" },
{ id: "gelb-2-17", category: "gelb", difficulty: 2, question: "Welchen Baum ließ Jesus vor Jerusalem verdorren?", answer: "Feigenbaum (Matth. 21, 18–22)" },
{ id: "gelb-2-18", category: "gelb", difficulty: 2, question: "Was führte zur Beendigung der Richterzeit?", answer: "Das Verlangen des Volkes nach einem König, dem Samuel auf Befehl Gottes nachgeben mußte. (1. Samuel 8, 5–9)" },
{ id: "gelb-2-19", category: "gelb", difficulty: 2, question: "Was war Abel von Beruf?", answer: "Schafhirte (1. Mose 4, 2)" },
{ id: "gelb-2-20", category: "gelb", difficulty: 2, question: "War der Prophet Jesaja verheiratet?", answer: "Ja (Jes. 7, 3; 8, 3.18)" },
{ id: "gelb-2-21", category: "gelb", difficulty: 2, question: "Von wem stammen die Edomiter ab?", answer: "Von Esau (1. Mose 36, 9)" },
{ id: "gelb-2-22", category: "gelb", difficulty: 2, question: "Bei welchem Ereignis zerriß der Vorhang im Tempel?", answer: "Tod Jesu (Mark. 15, 37–38)" },
{ id: "gelb-3-23", category: "gelb", difficulty: 3, question: "Welchem Berufsstand gehörte der Prophet Jeremia (durch Geburt) an?", answer: "Priester (Jer. 1, 1)" },
{ id: "gelb-2-24", category: "gelb", difficulty: 2, question: "Aus welchem Material war die Schlange, die Mose in der Wüste aufrichtete?", answer: "Die »Eherne Schlange« war aus Metall (Kupfer oder Bronze) (2. Könige 18, 4 heißt sie »Nehuschtan« = kupferne Schlange)" },
{ id: "gelb-2-25", category: "gelb", difficulty: 2, question: "Was war Petrus von Beruf?", answer: "Fischer (Matth. 4, 18)" },
{ id: "gelb-2-26", category: "gelb", difficulty: 2, question: "Was war Kain von Beruf?", answer: "Bauer (1. Mose 4, 2)" },
{ id: "gelb-2-27", category: "gelb", difficulty: 2, question: "Was war Zachäus von Beruf?", answer: "Zöllner (Luk. 19, 2)" },
{ id: "gelb-3-28", category: "gelb", difficulty: 3, question: "Welche Engel werden mit vier Flügeln geschildert?", answer: "Cherubim (Hes. 1 und 10)" },
{ id: "gelb-3-29", category: "gelb", difficulty: 3, question: "Welche Gruppe von Büchern kennzeichnete Martin Luther als »der Heiligen Schrift nicht gleichgehalten, und doch nützlich und gut zu lesen«?", answer: "Die Apokryphen" },
{ id: "gelb-3-30", category: "gelb", difficulty: 3, question: "Nenne die zweite und dritte Plage Ägyptens!", answer: "Frösche und Stechmücken (2. Mose 7, 26 – 8, 15)" },
{ id: "gelb-3-31", category: "gelb", difficulty: 3, question: "Von wem wird gesagt, daß er ein junger, schöner Mann sei ... eines Hauptes länger als alles Volk?", answer: "Saul (1. Sam. 9, 2)" },
{ id: "gelb-3-32", category: "gelb", difficulty: 3, question: "In welcher Verwandtschaftsbeziehung stand Esther zu Mardochai?", answer: "Cousine (Esther 2, 5–7)" },
{ id: "gelb-3-33", category: "gelb", difficulty: 3, question: "Wer erweckte – außer Jesus – im Neuen Testament Tote?", answer: "Petrus und Paulus (Apg. 9, 36–43; 20, 7–12)" },
{ id: "gelb-3-34", category: "gelb", difficulty: 3, question: "Was ließ Jesaja auf die kranke Stelle am Körper König Hiskias legen?", answer: "Pflaster aus Feigen, das auf das Geschwür gelegt wurde. (2. Kön. 20, 7; Jes. 38, 21)" },
{ id: "gelb-3-35",  category: "gelb", difficulty: 3, question: "Nenne zwei Flüsse von Damaskus!", answer: "Abana und Parpar (2. Kön. 5, 12)" },
{ id: "gelb-3-36", category: "gelb", difficulty: 3, question: "Welche Engel werden mit sechs Flügeln geschildert?", answer: "Seraphim (Jes. 6, 1–7)" },
{ id: "gelb-3-37", category: "gelb", difficulty: 3, question: "Welcher israelitische Stamm erhält kein Land zugeteilt, sondern nur Städte?", answer: "Levi (5. Mose 10, 9)" },
{ id: "gelb-3-38", category: "gelb", difficulty: 3, question: "Welche biblischen Bücher werden als »synoptisch« oder »Synoptiker« bezeichnet?", answer: "Die Evangelien nach Matthäus, Markus, Lukas, die in ihren Berichten weitgehend übereinstimmen. Synopsis, griechisch = Zusammenschau." },
{ id: "gelb-3-39", category: "gelb", difficulty: 3, question: "Wie hieß Josua ursprünglich?", answer: "Hosea (4. Mose 13, 16)" },
{ id: "gelb-3-40", category: "gelb", difficulty: 3, question: "Weshalb durfte Mose nicht ins verheißene Land?", answer: "Wegen seines Ungehorsams gegen das Wort des Herrn (er schlug gegen den Felsen, anstatt zu ihm zu reden). (4. Mose 20, 2–13)" },
{ id: "gelb-3-41", category: "gelb", difficulty: 3, question: "Wie viele neutestamentliche Briefe haben nur ein Kapitel?", answer: "4 (Philemon, 2. Johannes-Brief, 3. Johannes-Brief, Judas)" },
{ id: "gelb-3-42", category: "gelb", difficulty: 3, question: "Nenne die siebte und achte Plage Ägyptens!", answer: "Hagel und Heuschrecken (2. Mose 9,13 – 10,20)" },
{ id: "gelb-3-43", category: "gelb", difficulty: 3, question: "Wer zerstörte die Schlange, die Mose in der Wüste aufgerichtet hatte?", answer: "Hiskia (2. Kön. 18,4)" },
{ id: "gelb-1-44", category: "gelb", difficulty: 1, question: "Welcher Psalm ist der kürzeste", answer: "Psalm 117" },
{ id: "gelb-3-45", category: "gelb", difficulty: 3, question: "Wie hieß der Mann, der für Mardochai einen Galgen aufgerichtet hatte, an den er dann selbst gehängt wurde?", answer: "Haman (Esther 7, 1–10)" },
{ id: "gelb-3-46", category: "gelb", difficulty: 3, question: "Welches alttestamentliche Buch hat nur ein Kapitel?", answer: "Obadja" },
{ id: "gelb-3-47", category: "gelb", difficulty: 3, question: "Wie lange baute Salomo am Tempel?", answer: "Ca. 7 1/2 Jahre (1. Kön. 6,37f; Vers 38: 7 Jahre)" },
{ id: "gelb-3-48", category: "gelb", difficulty: 3, question: "Was bedeutet die lateinische Abkürzung: INRI?", answer: "»Jesus von Nazareth, König der Juden« (Luk. 23,38)" },
{ id: "gelb-3-49", category: "gelb", difficulty: 3, question: "Zu wem sagte Jesus: »Ich bin der Weg, die Wahrheit und das Leben«?", answer: "Thomas (Joh. 14,5.6)" },
{ id: "gelb-3-50", category: "gelb", difficulty: 3, question: "Aus welchem Material war die Bundeslade?", answer: "Akazienholz mit Gold überzogen (2. Mose 25,10ff)" },









  // Grün - Geographie (50 questions)
{ id: "gruen-1-1", category: "gruen", difficulty: 1, question: "Wo wohnte Lot, nachdem er sich von Abraham getrennt hatte?", answer: "In Sodom (1. Mose 13,12)" },
{ id: "gruen-1-2", category: "gruen", difficulty: 1, question: "Wo lagen Sodom und Gomorra?", answer: "Dort, wo heute das Tote Meer (Salzmeer) ist. (1. Mose 14,3)" },
{ id: "gruen-1-3", category: "gruen", difficulty: 1, question: "In welcher Stadt wuchs Jesus nach dem Tode Herodes' des Großen auf?", answer: "Nazareth (Matth. 2,22–23)" },
{ id: "gruen-1-4", category: "gruen", difficulty: 1, question: "Wo wirkte Jesus sein erstes Wunder?", answer: "In Kana (Joh. 2,1–11)" },
{ id: "gruen-1-5", category: "gruen", difficulty: 1, question: "Wo arbeitete Jakob für Laban?", answer: "In Haran (1. Mose 27,43ff)" },
{ id: "gruen-1-6", category: "gruen", difficulty: 1, question: "In welcher Stadt ist Jesus geboren?", answer: "Bethlehem (Luk. 2,1–7; Matth. 2,1)" },
{ id: "gruen-1-7", category: "gruen", difficulty: 1, question: "Auf welchem See wandelte Petrus?", answer: "Genezareth (Matth. 14,28ff)" },
{ id: "gruen-1-8", category: "gruen", difficulty: 1, question: "In welcher Stadt reinigte Jesus den Tempel?", answer: "In Jerusalem (Joh. 2,13–16)" },
{ id: "gruen-1-9", category: "gruen", difficulty: 1, question: "Wo wurde Jesus gefangengenommen?", answer: "Im Garten Gethsemane (Matth. 26,36.47ff)" },
{ id: "gruen-1-10", category: "gruen", difficulty: 1, question: "Wo wurde Jesus getauft?", answer: "Im Jordan (Matth. 3,13–17)" },
{ id: "gruen-1-11", category: "gruen", difficulty: 1, question: "Wo stand das Kreuz Jesu?", answer: "Auf Golgatha (Matth. 27,33)" },
{ id: "gruen-1-12", category: "gruen", difficulty: 1, question: "Wo empfing Israel die 10 Gebote?", answer: "Am Sinai (2. Mose 19,11)" },
{ id: "gruen-1-13", category: "gruen", difficulty: 1, question: "Wohin flohen Joseph und Maria mit dem neugeborenen Jesus?", answer: "Nach Ägypten (Matth. 2,14)" },
{ id: "gruen-2-14", category: "gruen", difficulty: 2, question: "Wo stand der Tempel, den Serubabel baute?", answer: "In Jerusalem (Esra 3,8)" },
{ id: "gruen-2-15", category: "gruen", difficulty: 2, question: "Wie heißt der Ort, an dem Jakob den Traum mit der Himmelsleiter hatte?", answer: "Bethel (1. Mose 28,10–22)" },
{ id: "gruen-2-16", category: "gruen", difficulty: 2, question: "Aus welcher Stadt stammt der Apostel Paulus?", answer: "Tarsus in Zilizien (Apg. 9,11)" },
{ id: "gruen-2-17", category: "gruen", difficulty: 2, question: "Wo befand sich der Teich Bethesda?", answer: "In Jerusalem (beim Schaftor) (Joh. 5,2)" },
{ id: "gruen-2-18", category: "gruen", difficulty: 2, question: "Welcher Fluß fließt durch den See Genezareth?", answer: "Jordan" },
{ id: "gruen-2-19", category: "gruen", difficulty: 2, question: "In welche Stadt floh Jakob vor Esau?", answer: "Haran (1. Mose 27,43)" },
{ id: "gruen-2-20", category: "gruen", difficulty: 2, question: "Wie hieß der Ort, an dem Gott den Jordan staute?", answer: "Adam (Josua 3,16)" },
{ id: "gruen-2-21", category: "gruen", difficulty: 2, question: "Wo heilte Jesus den blinden Bartimäus?", answer: "In der Nähe von Jericho (Mark. 10,46–52)" },
{ id: "gruen-2-22", category: "gruen", difficulty: 2, question: "Wo stand die Stiftshütte zur Zeit Samuels?", answer: "In Silo (1. Sam 1,9)" },
{ id: "gruen-2-23", category: "gruen", difficulty: 2, question: "Wohin floh Mose, nachdem er den Ägypter getötet hatte?", answer: "Nach Midian (2. Mose 2,15)" },
{ id: "gruen-2-24", category: "gruen", difficulty: 2, question: "Wo schrieb Johannes die Offenbarung?", answer: "Auf der Insel Patmos (Offb. 1,9)" },
{ id: "gruen-2-25", category: "gruen", difficulty: 2, question: "Man nenne zwei der vier Flüsse, die im Garten Eden ihre gemeinsame Quelle hatten.", answer: "Pischon, Gihon, Tigris, Euphrat (1. Mose 2,10–14)" },
{ id: "gruen-2-26", category: "gruen", difficulty: 2, question: "Welche Stadt war seit König Omri Hauptstadt des Nordreiches Israel?", answer: "Samaria (1. Kön. 16,24.28.29)" },
{ id: "gruen-2-27", category: "gruen", difficulty: 2, question: "Wo endet der Jordan?", answer: "Im Toten Meer" },
{ id: "gruen-2-28", category: "gruen", difficulty: 2, question: "Auf welchem Berg sollte Abraham den Isaak opfern?", answer: "Auf einem Berg im Lande Morija (1. Mose 22,2), der nach jüdischer Tradition mit dem Berg Morija, dem Tempelberg (2. Chron. 3,1) identisch ist." },
{ id: "gruen-2-29", category: "gruen", difficulty: 2, question: "Wo fand das Gespräch Jesu mit der Samariterin statt?", answer: "Am Jakobsbrunnen, in der Nähe der Stadt Sychar (Joh. 4,5.6)" },
{ id: "gruen-2-30", category: "gruen", difficulty: 2, question: "Wo wohnte Lazarus, den Jesus von den Toten auferweckte?", answer: "Bethanien (Joh. 11)" },
{ id: "gruen-2-31", category: "gruen", difficulty: 2, question: "Aus welcher Stadt stammt Abraham?", answer: "Ur in Chaldäa (1. Mose 11,31)" },
{ id: "gruen-2-32", category: "gruen", difficulty: 2, question: "Aus welchem Fluß wurde Mose gezogen?", answer: "Nil (2. Mose 2,3.5)" },
{ id: "gruen-2-33", category: "gruen", difficulty: 2, question: "Auf welchem Gebirge landete die Arche Noahs?", answer: "Ararat (1. Mose 8,4)" },
{ id: "gruen-2-34", category: "gruen", difficulty: 2, question: "Wo fand das Apostelkonzil statt?", answer: "In Jerusalem (Apg. 15)" },
{ id: "gruen-3-35", category: "gruen", difficulty: 3, question: "Welche Stadt eroberte Israel beim Einzug ins gelobte Land nach Überschreitung des Jordans als erste?", answer: "Jericho (Josua 6)" },
{ id: "gruen-3-36", category: "gruen", difficulty: 3, question: "Wo traf Petrus mit dem Hauptmann Kornelius zusammen?", answer: "In dessen Haus in Cäsarea (Apg. 10,1 ff)" },
{ id: "gruen-3-37", category: "gruen", difficulty: 3, question: "In welchem Gebirge hat Saul sich nach schwerer Verwundung ins eigene Schwert gestürzt?", answer: "Gilboa (1. Sam. 31)" },
{ id: "gruen-3-38", category: "gruen", difficulty: 3, question: "In welchem Teil Ägyptens wohnten Jakob und seine Söhne?", answer: "Gosen (1. Mose 47,6)" },
{ id: "gruen-3-39", category: "gruen", difficulty: 3, question: "Wo begegnete Gott dem Abraham, um ihm Isaak zu verheißen?", answer: "Im Hain Mamre (1. Mose 17,15 ff; 1. Mose 18,1)" },
{ id: "gruen-3-40", category: "gruen", difficulty: 3, question: "In welcher Stadt wohnte Esther als Königin?", answer: "Susa (Esther 4,16)" },
{ id: "gruen-3-41", category: "gruen", difficulty: 3, question: "Wie hieß die Stadt an der Ostküste Zyperns, in der Paulus das Evangelium verkündigte?", answer: "Salamis (Apg. 13,5)" },
{ id: "gruen-3-42", category: "gruen", difficulty: 3, question: "Wo lag die Höhle, in der David den Saul verschonte?", answer: "Bei En-Gedi (1. Sam. 24,1)" },
{ id: "gruen-3-43", category: "gruen", difficulty: 3, question: "Wo begann die dritte Missionsreise des Paulus?", answer: "Antiochia in Syrien (Apg. 18,18–23)" },
{ id: "gruen-3-44", category: "gruen", difficulty: 3, question: "Welche Stadt verließ Paulus in einem Korb?", answer: "Damaskus (Apg. 9,25)" },
{ id: "gruen-3-45", category: "gruen", difficulty: 3, question: "Woher stammt der Prophet Elia?", answer: "Aus Thisbe in Gilead (1. Kön. 17,1)" },
{ id: "gruen-3-46", category: "gruen", difficulty: 3, question: "Wo machte Mose durch Gottes Hilfe mit einem Holzstück aus bitterem Wasser süßes?", answer: "In Mara (2. Mose 15,23–25)" },
{ id: "gruen-3-47", category: "gruen", difficulty: 3, question: "Wo residierte der König David während seiner ersten Regierungsjahre?", answer: "Hebron (2. Sam. 2,1–4.11)" },
{ id: "gruen-3-48", category: "gruen", difficulty: 3, question: "Wo begann die erste Missionsreise des Paulus?", answer: "Antiochia in Syrien (Apg. 13)" },
{ id: "gruen-3-49", category: "gruen", difficulty: 3, question: "Wo wohnte der Prophet Samuel?", answer: "In Rama (1. Sam. 7,17)" },
{ id: "gruen-3-50", category: "gruen", difficulty: 3, question: "Wo begegneten sich Paulus und Timotheus zum ersten Mal?", answer: "In Lystra (Apg. 16,1)" },

  // Blau - Zahlen (50 questions)







  // Kategorie: Zahlen (blau)
{ id: "blau-1-1", category: "blau", difficulty: 1, question: "Was erhielt Judas Ischarioth dafür, daß er Jesus verriet?", answer: "30 Silberlinge (Matth. 26,15)" },
{ id: "blau-1-2", category: "blau", difficulty: 1, question: "Wie lange dauerte der Wüstenzug?", answer: "40 Jahre (2. Mose 16,35)" },
{ id: "blau-1-3", category: "blau", difficulty: 1, question: "Wie viele Söhne hatte Jakob?", answer: "12 (1. Mose 29,31–30,24; 1. Mose 35,16–26)" },
{ id: "blau-1-4", category: "blau", difficulty: 1, question: "Wie viele Psalmen stehen im Psalter?", answer: "150" },
{ id: "blau-2-5", category: "blau", difficulty: 2, question: "In welchem Turnus kehrt das Sabbatjahr wieder?", answer: "Alle 7 Jahre (3. Mose 25,1–7)" },
{ id: "blau-2-6", category: "blau", difficulty: 2, question: "Am wievielten Schöpfungstag machte Gott den Menschen?", answer: "Am sechsten Tag (1. Mose 1,26–31)" },
{ id: "blau-2-7", category: "blau", difficulty: 2, question: "Wie viele Apostel hat Jesus vor seiner Himmelfahrt berufen?", answer: "12 (Luk. 6,13)" },
{ id: "blau-2-8", category: "blau", difficulty: 2, question: "Wie viele Totenauferweckungen durch Jesus berichtet das Neue Testament?", answer: "3 (Jüngling zu Nain, Tochter des Jairus, Lazarus)" },
{ id: "blau-2-9", category: "blau", difficulty: 2, question: "Wie alt war Mose, als er starb?", answer: "120 Jahre (5. Mose 34,7)" },
{ id: "blau-2-10", category: "blau", difficulty: 2, question: "Welche Zahl ist in der Offenbarung dem Antichristen (dem »Tier«) zugeordnet?", answer: "666 (Offb. 13,18)" },
{ id: "blau-2-11", category: "blau", difficulty: 2, question: "Wie oft verleugnete Petrus den Herrn im Hof des Hohenpriesters?", answer: "Dreimal (Matth. 26,69–75; Mark. 14,66–72; Luk. 22,56–62; Joh. 18,17–27)" },
{ id: "blau-2-12", category: "blau", difficulty: 2, question: "Wie viele Menschen überlebten die Sintflut?", answer: "8 (1. Petr. 3,20)" },
{ id: "blau-2-13", category: "blau", difficulty: 2, question: "Wie viele Jünger waren Zeugen der Verklärung Jesu?", answer: "3 – Petrus, Jakobus, Johannes (Matth. 17,1–13; Mark. 9,2–13; Luk. 9,28–36)" },
{ id: "blau-2-14", category: "blau", difficulty: 2, question: "Wie lange hielt sich Jesus vor seinem Wirken in der Wüste auf, bevor er vom Satan versucht wurde?", answer: "40 Tage (Matth. 4)" },
{ id: "blau-2-15", category: "blau", difficulty: 2, question: "Über welchen Zeitraum ließ sich Jesus von seiner Auferstehung bis zur Himmelfahrt sehen?", answer: "40 Tage (Apg. 1,3)" },
{ id: "blau-2-16", category: "blau", difficulty: 2, question: "Wie viele Körbe voll Brotbrocken wurden nach der Speisung der 5000 aufgesammelt?", answer: "12 (Matth. 14,13–21)" },
{ id: "blau-2-17", category: "blau", difficulty: 2, question: "Wie lange wurde Mose von seiner Mutter versteckt, ehe sie ihn im Schilf aussetzte?", answer: "3 Monate (2. Mose 2,2)" },
{ id: "blau-2-18", category: "blau", difficulty: 2, question: "Wie viele Frauen darf nach dem ersten Timotheus-Brief ein Bischof haben?", answer: "Eine (1. Tim. 3,2)" },
{ id: "blau-2-19", category: "blau", difficulty: 2, question: "Wie viele Menschen speiste Jesus einmal mit 5 Broten und 2 Fischen?", answer: "5000 (Matth. 14,13–21; Mark. 6,30–44; Luk. 9,10–17; Joh. 6,1–13)" },
{ id: "blau-2-20", category: "blau", difficulty: 2, question: "In welchem Turnus kehrt das Halljahr, Freijahr oder Jubeljahr wieder?", answer: "Alle 50 Jahre (3. Mose 25,8–12)" },
{ id: "blau-2-21", category: "blau", difficulty: 2, question: "Mit wie vielen Broten speiste Jesus die 4000?", answer: "Mit 7 (Matth. 15,32–39; Mark. 8,1–10)" },
{ id: "blau-2-22", category: "blau", difficulty: 2, question: "Wie viele Siegel hat das Buch, das in der Offenbarung dem Lamm übergeben wird, um es zu öffnen?", answer: "7 (Offb. 5,1–10)" },
{ id: "blau-2-23", category: "blau", difficulty: 2, question: "Wie viele Menschen kamen aufgrund der Pfingstpredigt des Petrus zum Glauben?", answer: "Ca. 3000 (Apg. 2,41)" },
{ id: "blau-3-24", category: "blau", difficulty: 3, question: "Wie viele Cherubsfiguren standen im Allerheiligsten des salomonischen Tempels?", answer: "2 (1. Kön. 6,23; vgl. Vers 19)" },
{ id: "blau-3-25", category: "blau", difficulty: 3, question: "In wie viele Abteilungen wurden die levitischen Sänger unter König David eingeteilt?", answer: "In 24 (1. Chron. 25)" },
{ id: "blau-3-26", category: "blau", difficulty: 3, question: "Wie alt wurde Methuschelach, der Sohn Henochs?", answer: "969 Jahre (1. Mose 5,25–27)" },
{ id: "blau-3-27", category: "blau", difficulty: 3, question: "Wie viele neutestamentliche Bücher nennen Petrus als ihren Verfasser?", answer: "2 (1. und 2. Petrus-Brief)" },
{ id: "blau-3-28", category: "blau", difficulty: 3, question: "Wie lange war David König über Israel?", answer: "40 Jahre (1. Kön. 2,11)" },
{ id: "blau-3-29", category: "blau", difficulty: 3, question: "Wie viele wehrfähige Männer hatte Israel bei der Zählung im zweiten Jahr des Auszugs aus Ägypten?", answer: "603.550 (4. Mose 1,46)" },
{ id: "blau-3-30", category: "blau", difficulty: 3, question: "Wie viele Bücher des Neuen Testaments werden zu den sogenannten »Geschichtsbüchern« gezählt?", answer: "5 (Die 4 Evangelien und die Apostelgeschichte)" },
{ id: "blau-3-31", category: "blau", difficulty: 3, question: "Wie viele Verse hat das längste Kapitel der Bibel?", answer: "176 Verse (Psalm 119)" },
{ id: "blau-3-32", category: "blau", difficulty: 3, question: "Wie viele Plagen ließ Gott um Israels willen über Ägypten kommen, bevor sein Volk von dort ausziehen konnte?", answer: "10 (2. Mose 7–12)" },
{ id: "blau-3-33", category: "blau", difficulty: 3, question: "Wie viele Gemeinden werden als Empfänger der Sendschreiben am Anfang der Offenbarung genannt?", answer: "7 (Offb. 1,11; vgl. Kap. 2–3)" },
{ id: "blau-3-34", category: "blau", difficulty: 3, question: "Wie viele Kapitel hat die Apostelgeschichte?", answer: "28" },
{ id: "blau-3-35", category: "blau", difficulty: 3, question: "Wie viele Cherubsfiguren befanden sich auf dem Gnadenthron?", answer: "2 (2. Mose 37,6)" },
{ id: "blau-3-36", category: "blau", difficulty: 3, question: "Wie viele Briefe des Neuen Testaments nennen Paulus als ihren Verfasser?", answer: "13" },
{ id: "blau-3-37", category: "blau", difficulty: 3, question: "Wie viele Jahre nennt Jeremia in seinem Brief an die verschleppten Juden als Gesamtdauer der babylonischen Gefangenschaft?", answer: "70 Jahre (Jer. 29,10)" },
{ id: "blau-3-38", category: "blau", difficulty: 3, question: "Wie viele Bücher hat das Neue Testament?", answer: "27" },
{ id: "blau-3-39", category: "blau", difficulty: 3, question: "Mit wieviel Männern schlug Gideon die Midianiter?", answer: "300 (Richter 7,7)" },
{ id: "blau-3-40", category: "blau", difficulty: 3, question: "Wie viele Söhne hatte der Richter Gideon (ca.)?", answer: "70 (Richter 8,30)" },
{ id: "blau-3-41", category: "blau", difficulty: 3, question: "Welches Alter erreichte Abraham?", answer: "175 Jahre (1. Mose 25,7)" },
{ id: "blau-3-42", category: "blau", difficulty: 3, question: "Wie viele Bücher des Alten Testaments werden zu den sogenannten »Kleinen Propheten« gezählt?", answer: "12" },
{ id: "blau-3-43", category: "blau", difficulty: 3, question: "Wie viele Söhne hatte Hiob vor seinem Leid?", answer: "7 (Hiob 1,2.18.19)" },
{ id: "blau-3-44", category: "blau", difficulty: 3, question: "Wie viele Freistädte wurden in Israel eingerichtet, um einem Totschläger Schutz vor dem Bluträcher zu geben?", answer: "6 (4. Mose 35,9–14)" },
{ id: "blau-3-45", category: "blau", difficulty: 3, question: "Womit entlohnt der Weinbergsbesitzer im Gleichnis die Arbeiter im Weinberg?", answer: "Mit 1 Silbergroschen (Matth. 20,1–16)" },
{ id: "blau-3-46", category: "blau", difficulty: 3, question: "Wie viele Älteste sieht Johannes in der Offenbarung um den Thron im Himmel sitzen?", answer: "24 (Offb. 4,4)" },
{ id: "blau-3-47", category: "blau", difficulty: 3, question: "Wie viele Söhne hatte Abraham?", answer: "8: Ismael (1. Mose 16); Isaak (1. Mose 21,1–7); Simran, Jokschan, Medan, Midian, Jischbak, Schuach (1. Mose 25,1–2)" },
{ id: "blau-3-48", category: "blau", difficulty: 3, question: "Wie oft rufen die Seraphim in der Berufungsvision Jesajas das Wort »Heilig« aus?", answer: "Dreimal (Jes. 6,3)" },
{ id: "blau-3-49", category: "blau", difficulty: 3, question: "Wie viele Lampen trug der goldene Leuchter in der Stiftshütte?", answer: "7 (2. Mose 25,37)" },
{ id: "blau-3-50", category: "blau", difficulty: 3, question: "Wie groß war der Riese Goliath?", answer: "6 Ellen und 1 Handbreit = ca. 2,70 m (1. Sam. 17,4)" },









  // Weiß - Wo steht's (50 questions)
{ id: "weiss-1-1", category: "weiss", difficulty: 1, question: "»Es begab sich zu der Zeit, daß ein Gebot ausging von dem Kaiser Augustus …«", answer: "Lukas 2,1" },
{ id: "weiss-1-2", category: "weiss", difficulty: 1, question: "»Gehe hin zur Ameise, du Fauler, sieh an ihr Tun und lerne von ihr!«", answer: "Sprüche 6,6" },
{ id: "weiss-1-3", category: "weiss", difficulty: 1, question: "Wo stehen die Zehn Gebote?", answer: "2. Mose 20,1–17 (vgl. 5. Mose 5,6–21)" },
{ id: "weiss-1-4", category: "weiss", difficulty: 1, question: "»Wie viele ihn (Jesus) aber aufnahmen, denen gab er die Macht, Gottes Kinder zu sein.«", answer: "Johannes 1,12" },
{ id: "weiss-1-5", category: "weiss", difficulty: 1, question: "»Rufe mich an in der Not, so will ich dich erretten, und du sollst mich preisen.«", answer: "Psalm 50,15" },
{ id: "weiss-1-6", category: "weiss", difficulty: 1, question: "Wo steht das Gleichnis vom verlorenen Sohn?", answer: "Lukas 15,11–32" },
{ id: "weiss-1-7", category: "weiss", difficulty: 1, question: "Wo steht das »Hohelied der Liebe« (»Die Liebe ist langmütig und freundlich, …«)?", answer: "1. Korinther 13" },
{ id: "weiss-1-8", category: "weiss", difficulty: 1, question: "»Der Herr ist mein Hirte, mir wird nichts mangeln.«", answer: "Psalm 23,1" },
{ id: "weiss-1-9", category: "weiss", difficulty: 1, question: "»Wohl dem, der nicht wandelt im Rat der Gottlosen, noch tritt auf den Weg der Sünder, …«", answer: "Psalm 1,1" },
{ id: "weiss-1-10", category: "weiss", difficulty: 1, question: "»Jesus spricht: Ich bin der Weg und die Wahrheit und das Leben; niemand kommt zum Vater denn durch mich.«", answer: "Johannes 14,6" },
{ id: "weiss-2-11", category: "weiss", difficulty: 2, question: "»Bittet, so wird euch gegeben, sucht, so werdet ihr finden, klopft an, so wird euch aufgetan.«", answer: "Matthäus 7,7" },
{ id: "weiss-2-12", category: "weiss", difficulty: 2, question: "»Fürchte dich nicht, Abram! Ich bin dein Schild und dein sehr großer Lohn.«", answer: "1. Mose 15,1" },
{ id: "weiss-2-13", category: "weiss", difficulty: 2, question: "»Gott legt uns eine Last auf, aber er hilft uns auch.«", answer: "Psalm 68,20" },
{ id: "weiss-2-14", category: "weiss", difficulty: 2, question: "»Jesus spricht: Ich bin das Brot des Lebens.«", answer: "Johannes 6,35" },
{ id: "weiss-2-15", category: "weiss", difficulty: 2, question: "»Trachtet zuerst nach dem Reich Gottes und nach seiner Gerechtigkeit, so wird euch das alles zufallen.«", answer: "Matthäus 6,33" },
{ id: "weiss-2-16", category: "weiss", difficulty: 2, question: "Wo steht der Missionsbefehl?", answer: "Matthäus 28,18–20 / Markus 16,15–18" },
{ id: "weiss-2-17", category: "weiss", difficulty: 2, question: "»Die Ernte ist groß, aber es sind nur wenige Arbeiter da. Darum bittet den Herrn der Ernte, …«", answer: "Matthäus 9,37.38" },
{ id: "weiss-2-18", category: "weiss", difficulty: 2, question: "»Seine Barmherzigkeit hat noch kein Ende, sondern sie ist alle Morgen neu.«", answer: "Klagelieder 3,22–23" },
{ id: "weiss-2-19", category: "weiss", difficulty: 2, question: "»Dein Wort ist meines Fußes Leuchte und ein Licht auf meinem Wege.«", answer: "Psalm 119,105" },
{ id: "weiss-2-20", category: "weiss", difficulty: 2, question: "»Jesus spricht: Ich bin die Auferstehung und das Leben. Wer an mich glaubt, der wird leben, selbst wenn er stirbt.«", answer: "Johannes 11,25.26a" },
{ id: "weiss-2-21", category: "weiss", difficulty: 2, question: "»Alles, was Odem hat, lobe den Herrn!«", answer: "Psalm 150,6" },
{ id: "weiss-2-22", category: "weiss", difficulty: 2, question: "»Der Vater, der sie mir gegeben hat, ist größer als alles, und niemand kann sie aus meines Vaters Hand reißen.«", answer: "Johannes 10,29" },
{ id: "weiss-2-23", category: "weiss", difficulty: 2, question: "»Der Mensch lebt nicht vom Brot allein, sondern von jedem Wort, das aus Gottes Mund kommt.«", answer: "Matthäus 4,4" },
{ id: "weiss-2-24", category: "weiss", difficulty: 2, question: "»Gott ist Liebe; und wer in der Liebe bleibt, der bleibt in Gott und Gott in ihm.«", answer: "1. Johannes 4,16b" },
{ id: "weiss-2-25", category: "weiss", difficulty: 2, question: "»Das Wollen habe ich wohl, aber das Gute vollbringen kann ich nicht.«", answer: "Römer 7,18" },
{ id: "weiss-2-26", category: "weiss", difficulty: 2, question: "»Und das Wort ward Fleisch und wohnte unter uns...«", answer: "Johannes 1,14" },
{ id: "weiss-2-27", category: "weiss", difficulty: 2, question: "»Jesus spricht: Kommet her zu mir alle, die ihr mühselig und beladen seid, ich will euch erquicken.«", answer: "Matthäus 11,28" },
{ id: "weiss-2-28", category: "weiss", difficulty: 2, question: "Wo steht die Bergpredigt?", answer: "Matthäus 5–7" },
{ id: "weiss-2-29", category: "weiss", difficulty: 2, question: "»Das ist mein Gebot, daß ihr euch untereinander liebet, gleichwie ich euch liebe.«", answer: "Johannes 15,12" },
{ id: "weiss-2-30", category: "weiss", difficulty: 2, question: "»Denn uns ist ein Kind geboren, ein Sohn ist uns gegeben,...«", answer: "Jesaja 9,5" },
{ id: "weiss-2-31", category: "weiss", difficulty: 2, question: "Wo steht Christi Leidenspsalm?", answer: "Psalm 22" },
{ id: "weiss-2-32", category: "weiss", difficulty: 2, question: "»Jesus spricht: Ich bin der gute Hirte. Der gute Hirte lässt sein Leben für die Schafe.«", answer: "Johannes 10,11" },
{ id: "weiss-2-33", category: "weiss", difficulty: 2, question: "»Fürchte dich nicht, denn ich habe dich erlöst, ich habe dich bei deinem Namen gerufen, du bist mein.«", answer: "Jesaja 43,1b" },
{ id: "weiss-2-34", category: "weiss", difficulty: 2, question: "»Jesus spricht: Ich bin das Licht der Welt. Wer mir nachfolgt, der wird nicht in der Finsternis bleiben, sondern wird das Licht des Lebens haben.«", answer: "Johannes 8,12" },
{ id: "weiss-2-35", category: "weiss", difficulty: 2, question: "»Jesus spricht: Wenn jemand nicht von neuem geboren wird, kann er das Reich Gottes nicht sehen.«", answer: "Johannes 3,3" },
{ id: "weiss-2-36", category: "weiss", difficulty: 2, question: "»Glaubt ihr nicht, so bleibt ihr nicht.«", answer: "Jesaja 7,9" },
{ id: "weiss-3-37", category: "weiss", difficulty: 3, question: "»Alle haben gesündigt und die Herrlichkeit verloren, die Gott ihnen zugedacht hatte...«", answer: "Römer 3,23" },
{ id: "weiss-3-38", category: "weiss", difficulty: 3, question: "»Furcht ist nicht in der Liebe, sondern die völlige Liebe treibt die Furcht aus.«", answer: "1. Johannes 4,18" },
{ id: "weiss-3-39", category: "weiss", difficulty: 3, question: "»Darin ist erschienen die Liebe Gottes unter uns, daß Gott seinen eingeborenen Sohn gesandt hat in die Welt,...«", answer: "1. Johannes 4,9" },
{ id: "weiss-3-40", category: "weiss", difficulty: 3, question: "»Alles nun, was ihr wollt, daß euch die Leute tun sollen, das tut ihnen auch!«", answer: "Matthäus 7,12a" },
{ id: "weiss-3-41", category: "weiss", difficulty: 3, question: "»Der Herr lasse sein Angesicht leuchten über dir und sei dir gnädig.«", answer: "4. Mose 6,25" },
{ id: "weiss-3-42", category: "weiss", difficulty: 3, question: "Wo steht die Feldrede (Feldpredigt)?", answer: "Lukas 6,20-49" },
{ id: "weiss-3-43", category: "weiss", difficulty: 3, question: "»Ich habe mehr Einsicht als alle meine Lehrer...«", answer: "Psalm 119,99" },
{ id: "weiss-3-44", category: "weiss", difficulty: 3, question: "»Dann werden die Gerechten leuchten wie die Sonne in ihres Vaters Reich.«", answer: "Matthäus 13,43" },
{ id: "weiss-3-45", category: "weiss", difficulty: 3, question: "»Die da lehren, werden leuchten wie des Himmels Glanz...«", answer: "Daniel 12,3" },
{ id: "weiss-3-46", category: "weiss", difficulty: 3, question: "»Niemand kann zwei Herren dienen, entweder wird er den einen hassen und den andern lieben, oder er wird an dem einen hängen und den andern verachten.«", answer: "Matthäus 6,24" },
{ id: "weiss-3-47", category: "weiss", difficulty: 3, question: "Wo steht das Vaterunser?", answer: "Matthäus 6,9–13 / Lukas 11,2–4" },
{ id: "weiss-3-48", category: "weiss", difficulty: 3, question: "»Denn es ist nicht ein leeres Wort an euch, sondern es ist euer Leben.«", answer: "5. Mose 32,47" },
{ id: "weiss-3-49", category: "weiss", difficulty: 3, question: "»Jesus spricht: Ich bin gekommen, die Sünder zu rufen und nicht die Gerechten.«", answer: "Matthäus 9,13" },
{ id: "weiss-3-50", category: "weiss", difficulty: 3, question: "»Wer nun mich bekennet vor den Menschen, den will auch ich bekennen vor meinem himmlischen Vater.«", answer: "Matthäus 10,32" },


]