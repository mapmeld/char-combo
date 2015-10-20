// array of possible words
// CC-BY-SA Wikipedia
var words = [
"नेपाली",
"भाषा",
"नेपालको",
"राष्ट्रभाषा",
"सम्पर्क",
"भाषा",
"तथा",
"भारत,",
"भुटान",
"बर्माको",
"केही",
"भागमा",
"मातृभाषाको",
"रूपमा",
"बोलिने",
"भाषा",
"हो",
"यो",
"भाषा",
"भारोपेली",
"भाषा",
"परिवार",
"समूहमा",
"पर्दछ",
"यो",
"भाषा",
"नेपाल",
"भारतको",
"आधिकारीक",
"सरकारी",
"काम",
"काजको",
"भाषा",
"हो",
"नेपालका",
"करिब",
"आधा",
"जनसंख्याले",
"आफ्नो",
"मातृभाषाको",
"रूपमा",
"यो",
"भाषा",
"बोल्ने",
"गर्दछन्",
"देवनागरी",
"लिपिमा",
"लेखिने",
"यो",
"भाषामा",
"किसिमका",
"वर्णमाला",
"छन्",
"स्वरवर्णमा",
"व्यञ्जनवर्णमा",
"वटा",
"वर्णहरू",
"रहेका",
"छन्",
"अक्षरको",
"लेखन",
"उच्चारण",
"एउटै",
"हुने",
"यो",
"भाषा",
"सिक्न",
"असाध्यै",
"सजिलो",
"भएका",
"कारण",
"यसको",
"लोकप्रियता",
"बढेको",
"हो",
"नेपाली",
"भाषा",
"विभिन्न",
"समयमा",
"विभिन्न",
"नामले",
"चिनिन्थ्यो",
"खस",
"कुरा,",
"पर्वते",
"भाषा",
"तथा",
"गोर्खाली",
"भाषा",
"आदि",
"यी",
"मध्ये",
"खस",
"कुरा",
"सबैभन्दा",
"पुरानो",
"नाम",
"हो",
"खस",
"जातिहरूले",
"बोल्ने",
"भाषा",
"भएको",
"हुनाले",
"यसलाई",
"खस",
"भाषा",
"भनिएको",
"हो",
"यो",
"भाषा",
"पश्चिम",
"नेपालको",
"कर्णाली",
"क्षेत्रमा",
"विकसित",
"भएर",
"पूर्वतर्फ",
"फैलदै",
"गएको",
"हो",
"खस",
"कुरा",
"पश्चिम",
"नेपालको",
"मगर",
"जातीहरूले",
"बोल्ने",
"भाषा",
"खाम",
"कुरा",
"सँगै",
"विकसित",
"भएर",
"अगाडि",
"बढेको",
"मानिन्छ"
];

// these only appear after a user has solved 5 words
// because they are hard
// and they will stop playing
var hardCombos = [];

var firstWord = "नेपाली";
var firstOrder = "नपलेाी";