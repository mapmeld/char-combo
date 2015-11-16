// array of possible words
// CC-BY-SA Wikipedia
var words = [
"சென்னை",
"நகருக்கு",
"நீண்ட",
"வரலாறு",
"உள்ளது.",
"கி.பி.",
"-ஆம்",
"நூற்றாண்டு",
"முதல்",
"பல்லவ,",
"சோழ,",
"மற்றும்",
"விஜயநகர",
"பேரரசுகளில்",
"சென்னை",
"ஒரு",
"முக்கிய",
"இடமாக",
"விளங்கியதாகக்",
"கருதப்படுகிறது.",
"வெளிநாடுகளிலிருந்து",
"வர்த்தகர்களும்",
"மத",
"போதகர்களும்",
"சென்னை",
"கடற்கரை",
"மூலம்",
"வந்துள்ளனர்.",
"இந்தப்",
"பகுதி",
"முதலில்",
"சென்னப்பட்டணம்",
"என்ற",
"சிறிய",
"கிராமமாக",
"இருந்தது.",
"சென்னையில்",
"ஆங்கிலேயர்களால்",
"புனித",
"ஜார்ஜ்",
"கோட்டை",
"கட்டப்பட்டது,",
"தமிழக",
"வரலாற்றில்",
"ஒரு",
"முக்கிய",
"திருப்புமுனையாக",
"அமைந்தது.",
"ஆம்",
"ஆண்டு",
"ஆகஸ்ட்",
"மாதம்",
"ஆம்",
"தேதி",
"தான்",
"தமிழர்களின்",
"அடையாளங்களுள்",
"ஒன்றாகத்",
"திகழும்",
"இந்நகரம்",
"உருவானது.",
"அன்றைய",
"தினம்",
"கிழக்கிந்திய",
"கம்பெனியைச்",
"சேர்ந்த",
"பிரான்சிஸ்டே,",
"ஆண்ட்ரு",
"கோகன்",
"ஆகியோர்",
"தங்களது",
"உதவியாளர்",
"பெரிதிம்மப்பா",
"என்பவர்",
"உதவியுடன்",
"செயின்ட்",
"ஜார்ஜ்",
"கோட்டை",
"உள்ள",
"இடத்தை",
"வாங்கினார்கள்.",
"அந்த",
"இடத்தை",
"விற்ற",
"அய்யப்பன்,",
"வேங்கடப்பன்",
"ஆகியோரின்",
"தந்தை",
"சென்னப்ப",
"நாயக்கன்",
"என்பவரின்",
"நினைவாகக்",
"கோட்டைக்கு",
"வடக்கே",
"உள்ள",
"ஊர்",
"சென்னப்பட்டினம்",
"என்று",
"அழைக்கப்பட்டது.",
"ஆங்கிலேயர்கள்",
"ம்",
"ஆண்டில்[]",
"செயின்ட்",
"ஜார்ஜ்",
"கோட்டையைக்",
"கட்டியதைத்",
"தொடர்ந்துதான்",
"சென்னை",
"நகரம்",
"உருவாகி",
"வளர்ந்தது",
"என்றாலும்",
"பின்னர்",
"நகரத்தோடு",
"இணைந்த",
"திருவல்லிக்கேணி,",
"மைலாப்பூர்,",
"திருவொற்றியூர்,",
"திருவான்மியூர்",
"ஆகிய",
"பகுதிகள்",
"அதற்கு",
"மேலும்",
"பல",
"நூற்றாண்டுகள்",
"தொன்மையானவை.",
"சென்னையில்",
"உள்ள",
"மயிலாப்பூர்,",
"பல்லவ",
"அரசின்",
"முக்கிய",
"துறைமுகமாக",
"விளங்கியது.",
"புனித",
"தாமஸ்",
"இங்கு",
"கி.பி.",
"முதல்",
"வரை",
"இங்கு",
"போதித்ததாகக்",
"கருதப்படுகிறது.",
"ஆம்",
"நூற்றாண்டில்",
"இங்கு",
"வந்த",
"போர்த்துகீசியர்,",
"ஆம்",
"ஆண்டு",
"சாந்தோம்",
"என்ற",
"பெயரில்",
"ஒரு",
"துறைமுகத்தை",
"நிறுவினர்.",
"பிறகு",
"ஆம்",
"ஆண்டு",
"டச்சு",
"நாட்டவரிடம்",
"இவ்விடம்",
"கைமாறியது.",
"ஆம்",
"ஆண்டில்",
"ஆங்கிலேயே",
"கிழக்கிந்திய",
"கம்பெனியின்",
"ஏஜென்டுகளான",
"பிரான்சிஸ்",
"டே",
"மற்றும்",
"ஆண்ட்ரூ",
"கோகன்",
"ஆகியோரால்",
"ஆங்கிலேயர்களுக்கான",
"குடியிருப்பாகத்",
"தேர்வு",
"செய்யப்பட்டது.",
"ஓராண்டிற்குப்",
"பின்",
"செயின்ட்",
"ஜார்ஜ்",
"கோட்டை",
"கட்டப்பட்டது.",
"அந்தக்",
"கோட்டையை",
"மையமாகக்",
"கொண்டு",
"ஆங்கிலேயரின்",
"குடியிருப்பு",
"வளர்ச்சி",
"அடைந்தது.",
"சென்னப்பட்டணத்தை",
"ஒட்டி",
"இருந்த",
"திருவல்லிக்கேணி"
];

// these only appear after a user has solved words
// because they are hard
// and they will stop playing
var hardCombos = [];

var firstWord = "தமிழ்";
var firstOrder = "தமழ்ி";