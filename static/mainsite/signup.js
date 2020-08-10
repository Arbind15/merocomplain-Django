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
},
    
    "Province no 2": {
                    "Parsha": ["Sakhuwa Prasauni", "Jagarnath", "Chhipaharmai", "Bindabasini", "Paterwa Sugauli", "Jira Bhavani", "Kalikamai", "Pakaha Manipur", "Thori", "Dhobini", "Birjung", "Bahudarmai", "Parshagadi", "Pokhariya", "Alau", "Amarpatti", "Auraha", "Bagahi", "Bagbana", "Bageshwari", "Bahauri Pidari", "Bahuarba Bhatha", "Basadilwa", "Basantapur", "Belwa Parsauni", "Beriya Birta", "Bhawanipur", "Bhedihari", "Bhisawa", "Bijbaniya", "Bindyabasini", "Biranchibarba", "Biruwa Guthi", "Bisrampur", "Charani", "Deukhana", "Dhaubini", "Gadi", "Gamhariya", "Ghoddauda Pipra", "Ghore", "Govindapur", "Hariharpur", "Hariharpur Birta", "Harapataganj", "Harpur", "Jagarnathpur Sira", "Jaimanglapur", "Janikatala", "Jhauwa Guthi", "Jitpur", "Kauwa Ban Kataiya", "Lahawarthakari", "Lakhanpur", "Lal Parsa", "Langadi", "Lipani Birta", "Madhuban Mathaul", "Mahadevpatti", "Mahuwan", "Mainiyari", "Mainpur", "Mikhampur", "Mirjapur", "Mosihani", "Mudali", "Nagardaha", "Nirchuta", "Nirmal Basti", "Pancharukhi", "Parsauni Birta", "Parsauni Matha", "Patbari Tola-Warwa", "Paterwa Sugauli", "Pidariguthi", "Pokhariya", "Prasurampur", "Ramgadhawa", "Ramnagari", "Sabaithawa", "Sakhuwa Parsauni", "Samjhauta", "Shankar Saraiya", "Sapauli", "Sedhawa", "Shiva Worga", "Sirsiya Khalwatola", "Sonbarsa", "Srisiya", "Subarnapur", "Sugauli Birta", "Sugauli Partewa", "Surjaha", "Thori", "Tulsi Barba", "Udayapur Dhurmi", "Vauratar"],
                    "Bara": ["Subarna", "Adarsha Kotwal", "Baragadhi", "Pheta", "Karaiyamai", "Prasauni", "Bishrampur", "Devtal", "Parawanipur", "Kalaiya", "Jitpur Simara", "Mahagadhimai", "Simraungadh", "Kolhabi", "Nijgadh", "Pachrauta", "Amarpatti, Amlekhganj", "Amritganj", "Avab", "Babuain", "Bachhanpurwa", "Badaki Phulbariya", "Bagadi", "Bahuari", "Balirampur", "Bandhuwan", "Banjariya", "Barainiya", "Bariyarpur", "Basantapur", "Batara", "Beldari", "Benauli", "Bhagwanpur", "Bhaluwai Arwaliya", "Bhatauda", "Bhaudaha", "Bhuluhi Marwaliya", "Bishnupur", "Bishnupurwa", "Bishrampur", "Biswambharpur", "Brahmapuri", "Buniyad", "Chhatawa", "Dahiyar", "Dewapur", "Dharmanagar", "Dohari", "Gadhahal", "Ganj Bhawanipur", "Golaganj", "Haraiya", "Hardiya", "Hariharpur", "Inarwamal", "Inarwasira", "Itiyahi", "Jhitakaiya", "Jitpur", "Kabahigoth", "Kabahijabdi", "Kachorwa", "Karaiya", "Khopawa", "Khutwajabdi", "Kudawa", "Lakshmipur Kotwali", "Lipanimal", "Madhurijabdi", "Mahendra Adarsha", "Maheshpur", "Maini", "Majhariya", "Manaharwa", "Matiarwa", "Motisar", "Naktuwa", "Narahi", "Pakadiya Chikani", "Parsurampur", "Paterwa", "Patharhati", "Pathora", "Pheta", "Piparpati Ek", "Piparpati Dui", "Piparpati Jabdi", "Piparpati Parchrauwa", "Pipra Basantapur", "Piprabirta", "Pipradhi Goth", "Prasauni", "Prastoka", "Purainiya", "Raghunathpur", "Rampur Tokani", "Rampurwa", "Rauwahi", "Srinagar Bairiya", "Sihorwa", "Sinhasani", "Sisahaniya", "Tedhakatti", "Telkuwa", "Terariya", "Uchidiha", "Umarjan",
                     "Pipara Simara", "Jitpur Bhawanipur", "Chhata Pipra", "Phattepur", "Dumbarwana", "Ratnapuri", "Bharatganj Singaul", "Kakadi", "Kolhabi", "Prasona", "Sapahi"],

                    "Rautahat": ["Durga Bhagwati", "Yamunamai", "Chandrapur", "Garuda", "Gujara", "Brindaban", "Ishnath", "Rajpur", "Gadhimai", "Paroha", "Phatuwa Bijayapur", "Baudhimai", "Madhav Narayan", "Gaur", "Dewahi Gonahi", "Rajdevi", "Ajagabi", "Akolawa", "Auraiya", "Badharwa", "Bagahi", "Bahuwa Madanpur", "Bairiya", "Banjaraha", "Bariyarpur", "Basantapatti", "Basantapur", "Basbiti Jingadiya", "Bhalohiya", "Bhediyahi", "Birtipraskota", "Bishrampur", "Bisunpurwa Manpur", "Brahmapuri", "Debahi", "Dharampur", "Dharhari", "Dipahi", "Dumriya", "Balchanpur", "Gadhi", "Gamhariya Birta", "Gamhariya Parsa", "Gangapipra", "Garuda Bairiya", "Gedahiguthi", "Gunahi", "Hajminiya", "Hardiya Paltuwa", "Harsaha", "Hathiyahi", "Inarbari Jyutahi", "Inaruwa", "Jatahare", "Jayanagar", "Jethrahiya", "Jhunkhunma", "Jingadawa Belbichhwa", "Jingadiya", "Jowaha", "Judibela", "Kakanpur", "Karkach Karmaiya", "Karuniya", "Katahariya", "Khesarhiya", "Lakshminiya", "Lakshmipur", "Lakshmipur Belbichhawa", "Lokaha", "Madanpur", "Madhopur", "Mahamadpur", "Malahi", "Maryadpur", "Masedawa", "Mathiya", "Matsari", "Mithuawa", "Mudwalawa", "Narkatiya Guthi", "Pacharukhi", "Pataura", "Pathara Budharampur", "Paurai", "Phatuha Maheshpur", "Pipariya", "Pipra Bhagwanpur", "Pipra Pokhariya", "Pipra Rajbara", "Pothiyahi", "Pratappur Paltuwa", "Prempur Gunahi", "Purainawma", "Raghunathpur", "Rajdevi", "Rajpur Pharhadawa", "Rajpur Tulsi", "Ramoli Bairiya", "Rampur Khap", "Rangapur", "Sakhuwa", "Sakhuwa Dhamaura", "Samanpur", "Sangrampur", "Santapur", "Santpur", "Sarmujawa", "Saruatha", "Saunaraniya", "Sawagada", "Shitalpur Bairgania", "Simara Bhawanipur", "Sirsiya", "Tejapakar", "Tengraha", "Tikuliya"],
                    "Sarlahi": ["Chandranagar", "Bramhapuri", "Ramnagar", "Chakraghatta", "Kaudena", "Dhankaul", "Bishnu", "Basbariya", "Parsa", "Barahathwa", "Ishwarpur", "Lalbandi", "Malangwa", "Balara", "Hariwan", "Kabilasi", "Bagmati", "Haripur", "Haripurwa", "Achalgadh", "Arnaha", "Aurahi", "Babarganj", "Bagdaha", "Bahadurpur", "Balara", "Bara Udhoran", "Basantapur", "Batraul", "Bela", "Belhi", "Belwajabdi", "Bhadsar", "Bhagawatipur", "Bhawanipur", "Brahmapuri", "Chandra Nagar", "Chhataul", "Chhatona", "Dhana Palbhawari", "Dhanakaul Purba", "Dhangada", "Dumariya", "Gadahiyabairi", "Gamhariya", "Godeta", "Gaurishankar", "Harakthawa", "Haripur", "Haripurwa", "Hathiyol", "Hempur", "Jamuniya", "Janaki Nagar", "Jingadawa", "Kabilasi", "Kalinjor", "Khaiharwa", "Khoriya", "Kisanpur", "Kodena", "Lakshmipur Kodraha", "Lakshmipur Su", "Madhubangoth", "Madhubani", "Mahinathpur", "Mailhi", "Manpur", "Masaili", "Mirjapur", "Mohanpur", "Motipur", "Musauli", "Narayan Khola", "Narayanpur", "Netraganj", "Naukailawa", "Parsa", "Parwanipur", "Pharahadawa", "Phulparasi", "Pidari", "Pidariya", "Pipariya", "Ramnagar Bahaur", "Ranban", "Raniganj", "Rohuwa", "Sakraula","Salempur", "Sangrampur", "Shahorwa", "Shreepur", "Sikhauna", "Simara", "Sisautiya", "Sisaut", "Shankarpur", "Sohadawa", "Sudama", "Sundarpur", "Sundarpur Choharwa", "Tribhuwannagar"],
                    "Siraha": ["Laksmipur Patari", "Bariyarpatti", "Aaurahi",  "Arnama", "Bhagawanpur", "Naraha", "Nawarajpur", "Sakhuwanankarkatti", "Bishnupur", "Lahan", "Siraha", "Golbazar", "Mirchaiya", "Kalyanpur", "Dhangadimai", "Sukhipur", "karjanha", "Sukhipur", "Arnama Lalpur", "Arnama Rampur", "Aurahi", "Badharamal", "Barchhawa", "Bariyarpatti", "Basbita", "Bastipur", "Belaha", "Bhadaiya", "Bhagawanpur", "Bhagawatipur", "Bhawanpur Kalabanchar", "Bhokraha", "Bishnupur Pra. Ma", "Bishnupur Pra. Ra", "Brahmagaughadi", "Chandra Ayodhyapur", "Chatari", "Chikana", "Devipur", "Dhodhana", "Dumari", "Durgapur", "Gadha", "Gauripur", "Gautari", "Govindapur Malahanama", "Govindpur Taregana", "Hakpara", "Hanuman Nagar", "Harakathi", "Inarwa", "Itarhawa", "Itari Parsahi", "Itatar", "Janakinagar", "Jighaul", "Kabilasi", "Kachanari", "Kalyanpur Jabadi", "Kalyanpur Kalabanchar", "Karjanha", "Kharukyanhi", "Khirauna", "Krishnapur Birta", "Lagadi Gadiyani", "Lagadigoth", "Lakshminiya", "Lakshmipur (Pra. Ma.)", "Lakshmipur Patari", "Madar", "Mahadewa Portaha", "Mahanaur", "Maheshpur Patari", "Majhauliya", "Majhaura", "Makhanaha", "Malhaniya Gamharia", "Mauwahi", "Media", "Nahara Rigaul", "Naraha Balkawa", "Navarajpur", "Padariya Tharutol", "Pipra Pra. Dha", "Pipra Pra. Pi", "Pokharbhinda", "Rajpur", "Sakhuwanankarkatti", "Sanhaitha", "Sarashwar", "Sikron", "Sisawani", "Sonmati Majhaura", "Sothayan", "Sukhachina", "Tenuwapati", "Thalaha Kataha", "Thegahi", "Tulsipur"],
                    "Dhanusha": ["Laksminiya", "Mukhiyapatti Musaharmiya", "Janak Nandini", "Aaurahi", "Bateshwar", "Dhanauji", "Janakpurdham", "Sabaila", "Dhanushadham", "Mithila", "Shahidnagar", "Kshireshwarnath", "Hansapur", "Kamala", "Ganeshman Charnath", "Nagarain", "Mithila Bihari", "Bideha", "Andupatti", "Aurahi", "Baphai", "Bagchaura", "Baheda Bala", "Bahuarba", "Bhatauliya", "Balabakhar", "Balaha Kathal", "Balaha Sadhara", "Ballagoth", "Baniniya", "Basahiya", "Basbitti", "Bateshwar", "Bega Shivapur", "Begadawar", "Bhuchakrapur", "Bhutahi Paterwa", "Bindhi", "Bisarbhora", "Chakkar", "Chora Koilpur", "Debadiha", "Deuri Parbaha", "Devpura Rupetha", "Dhabauli", "Dhanauji", "Dubarikot Hathalekha", "Duhabi", "Ekarahi", "Ghodghans", "Giddha", "Gopalpur", "Goth Kohelpur", "Hansapur Kathpula", "Harine", "Hathipur Harbara", "Inarwa", "Itaharwa", "Jhatiyahi", "Jhojhi Kataiya", "Kachuri Thera", "Kajara Ramaul", "Kanakpatti", "Khajuri Chanha", "Khariyani", "Kurtha", "Lagmamdha Guthi", "Lakhauri", "Lakkad", "Lakshminibas", "Lakshmipur Bagewa", "Lohana Bahbangama", "Machijhitakaiya", "Mahuwa (Pra. Ko)", "Mahuwa (Pra. Khe)", "Mansingpatti", "Mithileshwar Nikash", "Mithileshwar Mauwahi", "Mukhiyapatti Mushargiya", "Nagarain", "Nauwakhor Prashahi", "Nunpatti", "Pachaharwa", "Papikleshwar", "Patanuka", "Paterwa", "Paudeshwar", "Phulgama", "Pushpawlpur", "Raghunathpur", "Rampur Birta", "Sapahi", "Shantipur", "Siddha", "Singyahi Maidan", "Sinurjoda", "Sonigama", "Suga Madhukarahi", "Suganikash", "Tarapatti Sirsiya", "Thadi Jhijha", "Tulsi Chauda", "Tulsiyahi Nikas", "Tulsiyani Jabdi", "Yadukuha"],
                    "Saptari": ["Tilathi Koiladi", "Belhi Chapena", "Chhinnamasta", "Mahadeva", "Aagnisaira Krishnasawaran", "Rupani", "Balan-Bihul", "Bishnupur", "Tirhut", "Rajbiraj", "Hanumannagar Kankalini", "Khadak", "Dakneshwari", "Surunga", "Bodebarsain", "Shambhunath", "Kanchanrup", "Saptakoshi", "Arnaha", "Aurahi", "Bainiya", "Bairawa", "Bakdhauwa", "Bamangamakatti", "Banarjhula", "Banaula", "Banauli", "Barhmapur", "Barsain", "Basbiti", "Bathnaha", "Belhi", "Belhi Chapena", "Bhagawatpur", "Bhardaha", "Bhutahi", "Birpur Barahi", "Bishariya", "Budebarsaien", "Boriya", "Brahmapur", "Chhinnamasta", "Dauda", "Daulatpur", "Deuri", "Deurimaruwa", "Dhanagadi", "Didhawa", "Diman", "Gamhariya Parwaha", "Goithi", "Hardiya", "Hariharpur", "Haripur", "Inarwa Phulbariya", "Itahari Bishnupur", "Jamuni Madhapura", "Jandaul", "Jhutaki", "Kabilash", "Kachan", "Kalyanpur", "Kataiya", "Khadgapur", "Khojpur", "Ko. Madhepura", "Kochabakhari", "Koiladi", "Kushaha", "Lalapati", "Launiya", "Lohajara", "Madhawapur", "Madhupati", "Mahadeva", "Maina Kaderi", "Maina Sahasrabahu", "Malekpur", "Maleth", "Malhanama", "Malhaniya", "Manraja", "Mauwaha", "Nargho", "Negada", "Pakari", "Pansera", "Parasbani", "Paterwa", "Pato", "Patthargada", "Phakira", "Pharseth", "Phulkahi", "Pipra (West)", "Portaha", "Ramnagar", "Rampur Malhaniya", "Rautahat", "Rayapur", "Sankarpura", "Sarashwar", "Simraha Sigiyaun", "Siswa Beihi", "Sitapur", "Tarahi", "Terahota", "Tikuliya", "Tilathi", "Trikola"],
                    "Mahottari": ["Sonama", "Pipara", "Samsi", "Ekdara", "Mahottari", "Gaushala", "Bardibas", "Jaleshwar", "Manara Shisawa", "Bhangaha", "Balawa", "Loharpatti", "Aurahi", "Matihani", "Ramgopalpur", "Anakar", "Aurahi", "Bagada", "Bagiya Banchauri", "Bairjiya Lakshminiya", "Balawa", "Banauli Donauli", "Banauta", "Basabitti", "Bathnaha", "Belgachhi", "Bharatpur", "Bhatauliya", "Bijayalpura", "Bramarpura", "Damhi Marai", "Dhamaura", "Dharmapur", "Dhirapur", "Ekadarabela", "Ekarahiya", "Etaharwakatti", "Gaidaha Bhelpur", "Gonarpura", "Halkhori", "Hariharpur Harinagari", "Hathilet", "Hatisarwa", "Khairbanni", "Khakhana", "Khaya Mara", "Khopi", "Khuttapipradhi", "Kolhusa Bagaiya", "Lakshminiya", "Loharpatti", "Mahadaiyatapanpur", "Majhora Bishnupur", "Manara", "Matihani", "Meghanath Gorhanna", "Nainhi", "Padaul", "Parsa Pateli", "Parsadewadh", "Pashupatinagar", "Phulahatta Parikauli", "Phulakaha", "Pigauna", "Pipra", "Pokharibhinda Samgrampur", "Raghunathpur", "Ramgopalpur", "Ratauli", "Sahasaula", "Sahorawa", "Samdha", "Sarpallo", "Shamsi", "Sripur", "Simardahi", "Singyahi", "Sisawakataiya", "Sonama", "Sonamar", "Sonaum", "Suga Bhawani", "Sundarpur", "Vangaha pariya"],
},

}


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

function ptoggle1() {
    var status=document.getElementById('password1');
    if (status.type=="password"){
        status.type="text";
        document.getElementById('pshow').style="display: none;";
        document.getElementById('phide').style="display: inline;"
    }
    else {
        status.type="password";
        document.getElementById('pshow').style="display: inline;";
        document.getElementById('phide').style="display: none;"
    }
}

function ptoggle2() {
    var status=document.getElementById('password2');
    if (status.type=="password"){
        status.type="text";
        document.getElementById('p2show').style="display: none;";
        document.getElementById('p2hide').style="display: inline;"
    }
    else {
        status.type="password";
        document.getElementById('p2show').style="display: inline;";
        document.getElementById('p2hide').style="display: none;"
    }
}

var ffile,rfile,pfile;
function FileUpPhoto() {

    var ipt=document.getElementById('photo');
    pfile=ipt.files[0].name;
    document.getElementById('ptxt').innerText="Selected: "+pfile;

    photo_Validate();

}

function FileUpFront() {

    var ipt = document.getElementById('front');
    ffile = ipt.files[0].name;
    document.getElementById('ftxt').innerText = "Selected: " + ffile;
    front_Validate();
}

function FileUpRare() {

    var ipt = document.getElementById('rare');
    rfile = ipt.files[0].name;
    document.getElementById('rtxt').innerText = "Selected: " + rfile;
    rare_Validate();
}

var e_flg=false;
var u_flg=false;

function validate() {
    Is_Unique_Username();
    Is_Unique_Email();
    console.log(u_flg);
    console.log(e_flg);


    if(!(username_validate()&email_validate()&password1_validate()&password2_validate()&dob_validate()&gender_validate()
    &phone_number_validate()&doc_num_validate()&term_con()&vdc_validate()&tole_validate()&ward_validate()&postal_validate()
    &photo_Validate()&front_Validate()&rare_Validate()&Dtype_validate()&e_flg&u_flg))
    {
        return false;
    }
    else
    {
        var btn=document.getElementById('signup_btn');
        btn.setAttribute('disabled','true');
        var spnr=document.createElement('div');
        spnr.className='btn_spinner';
        spnr.id='div_spinner_signup';
        spnr.style='margin-top: -20px;'
        btn.appendChild(spnr);

        PopConfirm();
        return true;
    }
}

function username_validate() {
    var username=document.getElementById('full_name').value;
    var user_regx=/^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
    if(!(user_regx.test(username)))
    {
        document.getElementById('username_error').style.display='block';
        return false;
    }
    else {
        document.getElementById('username_error').style.display='none';
        return true;
    }
}

function email_validate() {
    var email=document.getElementById('email').value;
    var email_regx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!(email_regx.test(email)))
    {
        document.getElementById('email_error').style.display='block;';
        return false;
    }
    else {
        document.getElementById('email_error').style.display='none';
        return true;
    }

}
function Is_Unique_Email() {

  var eml=document.getElementById('email').value;
  var xhttp = new XMLHttpRequest();
  var url = '/email_validate?email='+eml ;
  xhttp.open("GET", url, true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var rtxt = (xhttp.responseText);
      // console.log(rtxt);
      if(rtxt=='false'){
          document.getElementById('same_email_error').style.display='block';
          e_flg=false;
      }
      else {
          document.getElementById('same_email_error').style.display='none';
          e_flg=true;
      }
    }
  };


}

function Is_Unique_Username() {
  var num=document.getElementById('dnum').value;
  var xhttp = new XMLHttpRequest();
  var url = '/user_validate?num='+num ;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var rtxt = (xhttp.responseText);
      // console.log(rtxt);
      if(rtxt=='false'){
          document.getElementById('same_dnum_error').style.display='block';
          // document.getElementById('signup_btn').setAttribute('disabled','true');
          u_flg=false;
      }
      else {
          document.getElementById('same_dnum_error').style.display='none';
          // document.getElementById('signup_btn').removeAttribute('disabled');
          u_flg=true;
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}


function password1_validate() {
    var password1=document.getElementById('password1').value;
    var password1_regx=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if(!(password1_regx.test(password1)))
    {
        document.getElementById('password1_error').style.display='block';
        return false;
    }
    else {
        document.getElementById('password1_error').style.display='none';
        return true;
    }
}
function password2_validate() {
     var password2=document.getElementById('password2').value;
     var password1=document.getElementById('password1').value;
    if(!(password1==password2))
    {
        document.getElementById('password2_error').style.display='block';
        return false;
    }
    else {
        document.getElementById('password2_error').style.display='none';
        return true;
    }
}

function phone_number_validate() {
    var number=document.getElementById('mobile').value;
    var number_regx=/^(\+([0-9]{3}))?[-. ]?([0-9]{2})([0-9]{4})[-. ]?([0-9]{4})$/;
    if(!(number_regx.test(number)))
    {
        document.getElementById('phone_error').style.display='block';
        return false;
    }
    else {
        document.getElementById('phone_error').style.display='none';
        return true;
    }
}

function gender_validate() {
    var gender=document.querySelector('input[name="gender"]:checked');
    if (gender==null){
        document.getElementById('gender_error').style.display="block";
        return false;
    }
    else {
        document.getElementById('gender_error').style.display="none";
        return true;
    }

}
function gndhid() {
    document.getElementById('gender_error').style.display="none";
}

function dob_validate() {
    var dob=document.getElementById('dob').value;
    if (dob==''){
        document.getElementById('dob_error').style.display="block";
        return false;
    }
    else {
        document.getElementById('dob_error').style.display="none";
        return true;
    }
}
function dhid() {
    document.getElementById('dob_error').style.display="none";
}

function doc_num_validate() {
    var dob=document.getElementById('dnum').value.trim();
    var doc=document.getElementById('document').value;
    if (doc=='null'){
        document.getElementById('doc_error').style.display="block";
        return false;
    }
    else if(dob==''){
        document.getElementById('dnum_error').style.display="block";
        return false;
    }
    else {
        document.getElementById('dnum_error').style.display="none";
        return true;
    }
}

function term_con() {
    var chk=document.getElementById('agrrmt').checked;
    if(chk){
        document.getElementById('terms_error').style.display="none";
        return true
    }
    else {
        document.getElementById('terms_error').style.display="block";
        return false;
    }
}

function vdc_validate() {
    var vdc=document.getElementById('districtSel').value;
    if (vdc=='null'){
        document.getElementById('vdc_error').style.display="block";
        return false;
    }
    else {
        document.getElementById('vdc_error').style.display="none";
        return true;
    }
}

function tole_validate() {
    var username=document.getElementById('chowk').value;
    var user_regx=/^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
    if(!(user_regx.test(username)))
    {
        document.getElementById('tole_error').style.display='block';
        return false;
    }
    else {
        document.getElementById('tole_error').style.display='none';
        return true;
    }
}

function ward_validate() {
    var vdc=document.getElementById('ward').value;
    if (vdc=='null'){
        document.getElementById('ward_error').style.display="block";
        return false;
    }
    else {
        document.getElementById('ward_error').style.display="none";
        return true;
    }
}


function postal_validate() {
    var username=document.getElementById('pcode').value;
    var user_regx=/^([0-9]{5})$/;
    if(!(user_regx.test(username)))
    {
        document.getElementById('postal_error').style.display='block';
        return false;
    }
    else {
        document.getElementById('postal_error').style.display='none';
        return true;
    }
}

function photo_Validate() {
    var ipt=document.getElementById('photo');
    if(ipt.files[0]==undefined){
        document.getElementById('photo_error').style.display='block';
        return false;
    }
    else {
        document.getElementById('photo_error').style.display='none';
        return true;
    }

}

function front_Validate() {
    var ipt=document.getElementById('front');
    if(ipt.files[0]==undefined){
        document.getElementById('front_error').style.display='block';
        return false;
    }
    else {
        document.getElementById('front_error').style.display='none';
        return true;
    }

}

function rare_Validate() {
    var ipt=document.getElementById('rare');
    if(ipt.files[0]==undefined){
        document.getElementById('rare_error').style.display='block';
        return false;
    }
    else {
        document.getElementById('rare_error').style.display='none';
        return true;
    }

}
 function Dtype_validate() {
    var doc=document.getElementById('document').value;
    if (doc=='null'){
        document.getElementById('doc_error').style.display="block";
        return false;
    }
    else {
        document.getElementById('doc_error').style.display="none";
        return true;
    }
 }

function PopConfirm() {

    document.getElementById('popConfirm').style.display="block";

    var name=document.getElementById('full_name').value;
    var email=document.getElementById('email').value;
    var dob=document.getElementById('dob').value;
    var gender=document.querySelector('input[name="gender"]:checked').value;
    var mobile=document.getElementById('mobile').value;
    var country=document.getElementById('country').value;
    var provience=document.getElementById('countySel').value;
    var district=document.getElementById('stateSel').value;
    var vdc=document.getElementById('districtSel').value;
    var tole=document.getElementById('chowk').value;
    var ward=document.getElementById('ward').value;
    var pcode=document.getElementById('pcode').value;
    var photo=document.getElementById('photo').value;
    var documentt=document.getElementById('document').value;
    var front=document.getElementById('front').value;
    var rare=document.getElementById('rare').value;
    var docnum=document.getElementById('dnum').value;

    // var datalist=[name,email,dob,gender,mobile,country,provience,district,vdc,tole,ward,pcode]
    var popData=document.getElementById('popData');

    popData.innerHTML='';

    // var itm;
    // for(itm of datalist ){
    //     var ptag=document.createElement('p');
    //     var txt=document.createTextNode()
    // }

    var ptag=document.createElement('br');
    popData.appendChild(ptag);
    var ptag=document.createElement('p');
    var txt=document.createTextNode("Document No:/User ID:  "+docnum);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Full Name: "+name);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Email: "+email);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Date of Birth: "+dob);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Gender: "+gender);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Mobile: "+mobile);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Country: "+country);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Provience: "+provience);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("District: "+district);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Muncipal/VDC: "+vdc);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Tole/Chowk: "+tole);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Ward No.: "+ward);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Postal Code: "+pcode);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Document Type: "+documentt);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var lin=document.createElement('hr');
    popData.appendChild(lin)

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Photo: "+pfile);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Document Front: "+ffile);
    ptag.appendChild(txt);
    popData.appendChild(ptag);

    var ptag=document.createElement('p');
    var txt=document.createTextNode("Document Rare: "+rfile);
    ptag.appendChild(txt);
    popData.appendChild(ptag);






}

function SBack() {
    document.getElementById('popConfirm').style.display="none";
    var btn=document.getElementById('signup_btn');
    btn.removeAttribute('disabled');
    var spnr=document.getElementById('div_spinner_signup');
    btn.removeChild(spnr);
}


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function SendData() {

    // document.getElementById('main_pbar').style='display: block;';

    var btn=document.getElementById('proceed_btn');
    btn.setAttribute('disabled','true');
    var spnr=document.createElement('div');
    spnr.className='btn_spinner';
    spnr.style='margin-top: -20px;'
    btn.appendChild(spnr);

    var name=document.getElementById('full_name').value;
    var email=document.getElementById('email').value;
    var dob=document.getElementById('dob').value;
    var gender=document.querySelector('input[name="gender"]:checked').value;
    var mobile=document.getElementById('mobile').value;
    var country=document.getElementById('country').value;
    var provience=document.getElementById('countySel').value;
    var district=document.getElementById('stateSel').value;
    var vdc=document.getElementById('districtSel').value;
    var tole=document.getElementById('chowk').value;
    var ward=document.getElementById('ward').value;
    var pcode=document.getElementById('pcode').value;
    var documentt=document.getElementById('document').value;
    var docnum=document.getElementById('dnum').value;
    var pass1=document.getElementById('password1').value;

    var Files=[];
    var ipt=document.getElementById('photo');
    Files[0]=ipt.files[0];
    ipt=document.getElementById('front');
    Files[1]=ipt.files[0];
    ipt=document.getElementById('rare');
    Files[2]=ipt.files[0];
    // alert(file);

    var data = new FormData();

    var req = new XMLHttpRequest();
    var url='/SaveUser/';
    var csrftoken = getCookie('csrftoken');

    data.append('photo', Files[0]);
    data.append('front', Files[1]);
    data.append('rare', Files[2]);

    data.append('name',name);
    data.append('email',email);
    data.append('dob',dob);
    data.append('gender',gender);
    data.append('mobile',mobile);
    data.append('country',country);
    data.append('provience',provience);
    data.append('district',district);
    data.append('vdc',vdc);
    data.append('tole',tole);
    data.append('ward',ward);
    data.append('pcode',pcode);
    data.append('dtype',documentt);
    data.append('docnum',docnum);
    data.append('pass1',pass1);

    req.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             // alert(document.getElementsByTagName('body')[0])
             document.getElementsByTagName('body')[0].innerHTML=req.response;
         }
    };

    req.open("post", url, true);
    req.setRequestHeader("X-CSRFToken", csrftoken);

    // req.upload.addEventListener('progress', function(e) {
    //     var percent_complete = (e.loaded / e.total)*100;
    //     // Percentage of upload completed
    //     var p_sts=document.getElementsByClassName('p_status')[0];
    //     var p_lbl=document.getElementById('p_lbl');
    //     p_lbl.innerText='Uploading...'+Math.round(percent_complete).toPrecision()+'%';
    //     p_sts.style='width: '+Math.round(percent_complete)+'%;font-size: 15px;';
    //     // alert(p_sts);
    //
    //     // console.log(percent_complete);
    // });

    // req.addEventListener('load', function(e) {
    //     // HTTP status message
    //     // console.log(req.status);
    //     document.getElementById('main_pbar').style='display: none';
    //     var p_sts=document.getElementsByClassName('p_status')[0];
    //     var p_lbl=document.getElementById('p_lbl');
    //     p_lbl.innerText='';
    //     p_sts.style='width: '+0+'%;font-size: 15px;';
    //     // request.response will hold the response from the server
    //     // console.log(req.response);
    // });
    req.send(data);

}

