// var stateObject = {
//     "1": {
//         "Sunsari": ["Inaruwa", "Dharan"],
//         "Morang": ["Biratnagar", "Hatimuda"],
//         "Saptrai": ["Rajbiraj", "Koshi"],
//     },
//     "2": {
//         "Janakpur": ["LOL", "XYZ"],
//         "Kathmandu": ["Koteshower", "Thamel"]
//     }, "3": {
//         "Jumla": ["Pokhara", "Wrcians"],
//         "Humla": ["Khotang", "Lukla"]
//     },
// }

var stateObject= {
   "Province no 1" : {
                    "Bhojpur": ["Bhojpur", "Shadanand", "Hatuwagadi", "Ramprasad rai", "Aamchowk", "Tyamke Maiyumn", "Arun", "Pauwadungma", "Salpasilichho", "Aamtep", "Annapurna", "Baikuntha", "Basikhola", "Basingtharpur", "Bastim", "Bhubal", "Bhulke", "Boya", "Champe", "Changre", "Charambi", "chaukidada", "Chhinamukh", "Dalgaun", "Deurali", "ewantar", "Dhodalekhani", "dobhane", "Dummana", "Gogane", "Gupteshwar", "Hasanpur", "Helauchha", "Homtang", "Jarayotar", "Khairang", "Khatamma", "Khawa", "Kot", "Kudak Kaule", "Kulunga", "Lekharka", "Mane Bhanjyang", "Nagi", "Nepaledanda", "Okhre", "Pangcha", "Patle Pani", "Pawala", "Pyauli", "Ranibas", "Sangpang", "Sano Dumba", "Shyamsila", "Siddheshwar", "Sindrang", "Syamsila", "Thidingkha", "Thulo Dumba", "Timma", "Tiwari Bhanjyang", "Walangkha", "Yaku", "Yangpang"],
                    "Khotang": ["Ainselu  Kharka", "Arkhale", "Badahare", "Badka Dipali", "Bahunidanda", "Bakachol", "Baksila", "Barahapokhari (VDC)", "Baspani", "Batase", "Bijaya Kharka", "Buipa", "Chhitapokhari", "Chhorambu", "Chipring", "Chisapani", "Chyandanda", "Chyasmitar", "Damarkhu Shivalaya", "Dandagaun", "Devisthan", "Dharapani", "Dhitung", "Dikuwa", "Diplung", "Dipsung", "Dorpa Chiuridanda", "Dubekol", "Dumre Dharapani", "Durchhim", "Hanchaur", "Indrayani Pokhari", "Jalapa", "Jyamire", "Kaule", "Kharmi", "Kharpa", "Khartamchha", "Khidima", "Khotang Bazar", "Kuvinde", "Lamidanda", "Lichki Ramche", "Linkuwa Pokhari", "Magpa", "Mahadevasthan", "Mangaltar", "Mattim Birta", "Mauwabote", "Nerpa", "Nirmalidanda", "Nunthala", "Patheka", "Pauwasera", "Phaktang", "Phedi", "Rajapani", "Rakha Bangdel", "Rakha Dipsung", "Ratancha Majhagaun", "Ribdung Jaleshwari", "Ribdung Maheshwari", "Salle", "Santeshwar Chhitapokhari", "Sapteshwar", "Saunechaur", "Sawakatahare", "Simpani", "Sungdel", "Suntale", "Woplukha", "Wopung", "Yamkhya", "Rupakot majhuwagadi", "haleshi tuwachung", "Khotehang", "diprung", "Jantedhunga" , "kepilasgadhi" , "sakela" ],
                    "Sankhuwasabha": ["Baku", "Bapha", "Basa", "Beni", "Bhakanje", "Bung", "Chaulakharka", "Chaurikharka", "Chheskam", "Deusa", "Goli", "Gorakhani", "Gudel", "Jubing", "Jubu", "Kaku", "Kangel", "Kerung", "Khumjung", "Lokhim", "Mabe", "Mukali", "Namche", "Necha Batase", "Necha Bedghari", "Nele", "Panchan", "Salyan", "Sautang", "Takasindu", "Tapting", "Tingla", "Makalu", "Silichong", "Sabhapokhari", "chichila" , "Bhot Khola" , "Chainpur", "Dharmadevi", "Panchkhapan", "madi", "khadbari"],
                    "Terathaum": ["Myanglung" , "Laliguras" , "Angdim", "Basantapur", "Chhate Dhunga", "Chuhandanda", "Dangpa", "Hamarjung", "Hawaku", "Isibu", "Jaljale", "Khamlalung", "Morahang", "Okhare", "Oyakjung", "Panchakanya Pokhari", "Phakchamara", "Phulek", "Pauthak", "Sabla", "Samdu", "Sankranti Bazar", "Simle", "Solma", "Sri Jung", "Sudap", "Sungnam", "Thoklung" , "Phedap" , "Chhathar" , "Aathrai" , "Menchayayem"],
                    "Dhankuta": [ "Sangurigadhi", "Chaubise" , "Sahidbhumi", "Chhathar jorpati" , "Ahale", "Ankhisalla", "Arkhaule Jitpur", "Basantatar", "Belhara", "Budhabare", "Bhirgaun", "Bodhe", "Budhabare", "Budi Morang", "Chanuwa", "Chhintang", "Chungmang", "Danda Bazar", "Dandagaun", "Hathikharka", "Jitpur Arkhaule", "Khoku", "Khuwaphok", "Kuruletenupa", "Leguwa", "Mahabharat", "Marek Katahare", "Maunabuthuk", "Mudebas", "Murtidhunga", "Parewadin", "Phaksib", "Raja Rani", "Tankhuwa", "Telia", "Vedatar", "dhankuta", "mahalakshmi", "Pakhribas"],
                    "Morang": ["Jahada", "Budi ganga", "Katahari", "Dhanpalthan", "Kanepokhari", "Gramthan", "Kerabari", "Milkajung", "Biratnagar", "sundar haraicha", "belbari", "pathari-shanischare", "ratuwamai", "urlabari", "rangeli", "sunwarshi", "letang bhogateni", "Amaibariyati", "Amardaha", "Babiya Birta", "Bahuni", "Banigama", "Baradanga", "Bayarban", "Bhaudaha", "Budhanagar", "Dainiya", "Dangihat", "Dangraha", "Darbairiya", "Drabesh", "Govindapur", "Hasandaha", "Hathimudha", "Hoklabari", "Itahara", "Jante", "Baijanathpur", "Jhorahat", "Jhurkiya", "Kadamaha", "Katahari", "Kathamaha", "Kerabari", "Keroun", "Lakhantari", "Madhumalla", "Mahadeva", "Majhare", "Matigachha", "Motipur", "Nocha", "Patigaun", "Pokhariya", "Rajghat", "Ramite Khola", "Sidharaha", "Sijuwa", "Sinhadevi", "Sombare", "Sisabanibadahara", "Sisawanijahada", "Sorabhaj", "Tandi", "Tankisinuwari", "Tetariya", "Thalaha", "Warangi", "Yangshila"],
                    "Solukhumbu": ["Dudhakaushika", "Necha salyan", "Dudhkhoshi", "Maha kulung", "Sotang", "Khumbu Pasang Lhamu", "Likhu Pike", "solu dhudhkunda", "Baku", "Bapha", "Basa", "Beni", "Bhakanje", "Bung", "Chaulakharka", "Chaurikharka", "Chheskam", "Deusa", "Goli", "Gorakhani", "Gudel", "Jubing", "Jubu", "Kaku", "Kangel", "Kerung", "Khumjung", "Lokhim", "Mabe", "Mukali", "Namche", "Necha Batase", "Necha Bedghari", "Nele", "Panchan", "Salyan", "Sautang", "Takasindu", "Tapting", "Tingla"],
                    "Udayapur": ["Udayapurgadhi", "Rautamai", "Tapli", "Limchungbung", "belaka", "katari", "triyuga", "Aaptar", "Balamta", "Baraha", "Barai", "Basabote", "Bhumarashuwa", "Bhuttar", "Chaudandi", "Dumre", "Hadiya", "Hardeni", "Iname", "Jalpachilaune", "Janti", "Jogidaha", "Katunjebawala", "Khanbu", "Laphagaun", "Lekhani", "Lekhgau", "Limpatar", "Mainamiani", "Myakhu", "Nametar", "Okhale", "Panchawati", "Pokhari", "Rauta", "Risku", "Rupatar", "Saune", "Shorung", "Chabise", "Sirise", "Sithdipur", "Sundarpur", "Tamlichha", "Tapeshwari", "Tawasri", "Thanagaun", "Thoksila", "Valaya Danda", "Yayankhu"],
                    "Illam": ["Phakphokthum", "Maijogmai", "Chulachuli", "Rong", "Mangsebung", "Sandakpur", "suryodhaya", "illam", "deumai", "mai", "Amchok", "Bajho", "Barbote", "Chamaita", "Chisapani", "Chulachuli", "Danabari", "Ebhang", "Ektappa", "Emang", "Erautar", "Gajurmukhi", "Godak", "Gorkhe", "Jamuna", "Jirmale", "Jitpur", "Jogmai", "Kolbung", "Lakshmipur", "Lumbe", "Mabu", "Mahamai", "Maimajhuwa", "Maipokhari", "Namsaling", "Naya Bazar", "Pashupatinagar", "Phakphok", "Phuyatappa", "Puwamajwa", "Pyang", "Sakphara", "Sakhejung", "Samalpung", "Sangrumba", "Shanti Danda", "Shantipur", "Siddhithumka", "Soyak", "Soyang", "Sri Antu", "Sulubung", "Sumbek"],
                    "Okhaldhunga": ["Manebhanjyang", "Champadevi", "Sunkoshi", "Molung", "Chisankhugadhi", "Khiji Demba", "Likhu", "siddhicharan", "Baksa", "Balakhu", "Baraneshwar", "Betini", "Bhadaure", "Bhussinga", "Bigutar", "Bilandu", "Chyanam", "Diyale", "Gamnangtar", "Harkapur", "Jantarkhani", "Kalikadevi", "Kaptigaun", "Katunje", "Ketuke", "Khiji Chandeshwari", "Khijiphalate", "Kuibhir", "Kuntadevi", "Madhavpur", "Mamkha", "Manebhanjyang", "Moli", "Mulkharka", "Narmedeshwar", "Okhaldhunga", "Palapu", "Patle", "Phediguth", "Phulbari", "Pokhare", "Pokli",
                    "Prapchan", "Ragani", "Rajadip", "Raniban", "Ratmata", "Rawadolu", "Serna",
                    "Srichaur", "Singhadevi", "Sisneri", "Taluwa", "Tarkerabari", "Thakle", "Thoksela", "Thulachhap", "Ubu", "Vadaure", "Yasam"],
                    "Sunsari": ["Koshi", "Harinagara", "Bhokraha", "Dewanganj", "Gadhi", "Barju", "duhabi", "inaruwa", "barahachhetra", "dharan", "itahari", "Aekamba", "Amaduwa", "Amahibelaha", "Aurabarni", "Babiya", "Bakalauri", "Barahachhetra", "Basantapur", "Bharaul", "Bhokraha", "Bishnupaduka", "Chadwela", "Chhitaha", "Chimdi", "Dewanganj", "Ghuski", "Dumaraha", "Gautampur", "Hanshpokhar", "Harinagar", "Haripur", "Jalpapur", "Kaptanganj", "Khanar", "Laukahi", "Madheli", "Madhesa", "Madhuwan", "Madhyeharsahi", "Mahendranagar", "Narshinhatappu", "Pakali", "Panchakanya", "Paschim Kasuha", "Prakashpur", "Purbakushaha", "Ramganj Belgachhi", "Ramganj Senuwari", "Ramnagar Bhutaha", "Sahebganj", "Santerjhora", "Simariya", "Sonapur", "Sripurjabdi", "Tanamuna"],
                    "Jhapa": ["kamal", "Buddha shanti", "Kachankawal", "jhapa", "Barhadashi", "Gaurigunj", "Haldibari", "kankai", "arjundhara", "shivasatakshi", "bhadrapur", "damak", "birtamod", "mechinagar", "Anarmani", "Bahundangi", "Baiagundhara", "Balubari", "Baniyani", "Budhabare", "Chakchaki", "Chandragadhi", "Charpane", "Dangibari", "Dhaijan", "Dharmpur", "Duhagadhi", "Garamani", "Gauriganj", "Gherabari", "Goldhhap", "Haldibari", "Jalthal", "Jyamirgadhi", "Kechana", "Khajurgachhi", "Khudunabari", "Korobari", "Kumarkhod", "Lakhanpur", "Mahabhara", "Maheshpur", "Panchganchi", "Pathabhari", "Pathariya", "Prithivinagar", "Rajgadh", "Shantinagar", "Sharanamati", "Taghanduba", "Topgachchi"," Arjundhara"],
                    "Panchthar": ["Milkajung", "Phalgunanda", "Hilihang", "Phalelung", "Yangwarak", "Kummayak", "Tumbewa", "phidim", "Ranitar", "Luwamphu", "Yangnam", "Nangin", "Lungrupa", "Ambarpur", "Panchami", "Subhang", "Bharapa", "Yasok", "Rani Gaun", "Mangjabung", "Syabarumba", "Aarubote", "Sarangdanda", "Rabi", "Kurumba", "Limba", "Durdimba", "Ektin", "Memeng", "Prangbung", "Yangnam", "Sidin", "Nawamidanda", "Imbung", "Pauwa Sartap", "Chilingdin", "Aangsarang", "Phaktep", "Aangna", "Olane", "Hangum", "Mauwa", "Chyangthapu", "Phalaicha", "Oyam", "Tharpu", "Nagi"],
                    "Taplejung": ["Pathibhara yangwarak", "Meringden", "Sidingwa", "Phaktanglung", "Maiwa khola", "Mikwa khola", "taplejung", "Ambegudin", "Ankhop", "Chaksibote", "Change", "Dhungesaghu", "Dummrise", "Ekhabu", "Hangdeva", "Hangpang", "Kalikhola", "Khamlung", "Khejenim", "Khewang", "Khokling", "Lelep", "Limbudin", "Lingtep", "Linkhim", "Liwang", "Mamangkhe", "Nalbu", "Nankholyang", "Nidhuradin", "Olangchung Gola", "Paidang","Papung", "Pedang", "Phakumba", "Phawakhola", "Phulbari", "Phurumbu", "Sadewa", "Sangu", "Santhakra", "Sawa", "Sawadin", "Sawalakhu", "Sikaicha", "Sinam", "Surumakhim", "Tapethok", "Tellok", "Thechambu", "Thinglabu", "Thukima", "Thumbedin", "Tiringe", "Yamphudin"],
},}


window.onload = function () {
    var countySel = document.getElementById("countySel"),
        stateSel = document.getElementById("stateSel"),
        districtSel = document.getElementById("districtSel");
    for (var country in stateObject) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
        stateSel.length = 1; // remove all options bar first
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        for (var state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }
    countySel.onchange(); // reset in case page is reloaded
    stateSel.onchange = function () {
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        var district = stateObject[countySel.value][this.value];
        for (var i = 0; i < district.length; i++) {
            districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
        }
    }
}