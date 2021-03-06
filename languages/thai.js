// array of possible words
// CC-BY-SA Wikipedia
var words = [
"ภาษาไทย",
"เป็นภาษาราชการของประเทศไทย",
"และภาษาแม่ของชาวไทย",
"และชนเชื้อสายอื่นในประเทศไทย",
"ภาษาไทยเป็นภาษาในกลุ่มภาษาไท",
"ซึ่งเป็นกลุ่มย่อยของตระกูลภาษาไท",
"กะได",
"สันนิษฐานว่า",
"ภาษาในตระกูลนี้มีถิ่นกำเนิดจากทางตอนใต้ของประเทศจีน",
"และนักภาษาศาสตร์บางส่วนเสนอว่า",
"ภาษาไทยน่าจะมีความเชื่อมโยงกับตระกูลภาษาออสโตร",
"เอเชียติก",
"ตระกูลภาษาออสโตรนีเซียน",
"และตระกูลภาษาจีน",
"ทิเบต",
"ภาษาไทยเป็นภาษาที่มีระดับเสียงของคำแน่นอนหรือวรรณยุกต์เช่นเดียวกับภาษาจีน",
"และออกเสียงแยกคำต่อคำ",
"ทำให้เป็นที่ลำบากของชาวต่างชาติเนื่องจากการออกเสียงวรรณยุกต์ที่เป็นเอกลักษณ์ของแต่ละคำ",
"และการสะกดคำที่ซับซ้อน",
"อักษรไทย",
"เป็นอักษรที่ใช้เขียนภาษาไทย",
"และภาษากลุ่มน้อยอื่น",
"ในประเทศไทย",
"มีพยัญชนะ",
"รูป",
"สระ",
"รูป",
"วรรณยุกต์",
"รูป",
"และเครื่องหมายอื่น",
"อีกจำนวนหนึ่ง",
"พยัญชนะไทยจะเรียงตัวไปตามแนวนอน",
"จากซ้ายไปขวา",
"ส่วนสระจะอยู่หน้า",
"บน",
"ล่าง",
"และหลังพยัญชนะประกอบคำแล้วแต่ชนิดของสระ",
"อักษรไทยไม่มีการแยกอักษรตัวใหญ่หรืออักษรตัวเล็กอย่างอักษรโรมัน",
"และไม่มีการเว้นวรรคระหว่างคำ",
"เมื่อจบหนึ่งประโยคจะลงท้ายด้วยการเว้นวรรค",
"กับมีเครื่องหมายวรรคตอนจำนวนหนึ่ง",
"ภาษาไทยมีตัวเลขเป็นของตัวเอง",
"แต่นิยมใช้เลขอารบิกเป็นส่วนใหญ่ในชีวิตประจำวัน",
"ไทยได้อพยพจากถิ่นเดิมมาตั้งภูมิลำเนาอยู่ใกล้อาณาเขตมอญ",
"ซึ่งกำลังเป็นชาติที่เจริญรุ่งเรืองในสมัยนั้น",
"เริ่มแรกคงเริ่มเลียนแบบตัวอักษรมาจากมอญ",
"ต่อมาราว",
"เมื่อขอมขยายอำนาจเข้ามาในดินแดนของคนไทยซึ่งตั้งอยู่บริเวณริมแม่น้ำยม",
"และได้ปกครองเมืองเชรียงและเมืองสุโขทัย",
"ไทยก็เริ่มดัดแปลงอักษรที่มีอยู่เดิมให้คล้ายกับอักษรขอมหวัด",
"อักษรมอญและอักษรขอมที่เรานำมาดัดแปลงใช้นั้นล้วนแปลงรูปมาจากอักษรพราหมี",
"ของพวกพราหมณ์ซึ่งแพร่หลายในอินเดียตอนเหนือ",
"และอักษรสันสกฤตในสมัยราชวงศ์ปัลลวะ",
"ซึ่งแพร่หลายบริเวณอินเดียตอนใต้",
"อักษรอินเดียทั้งคู่นี้ต่างก็รับแบบมาจากอักษรฟินิเชียนอีกชั้นหนึ่ง",
"อักษรเฟนีเซียนับได้ว่าเป็นอักษรที่เก่าแก่ที่สุด",
"และเป็นแม่แบบตัวอักษรของชาติต่างๆ",
"ทั้งในเอเชียและยุโรป",
"พ่อขุนรามคำแหงทรงประดิษฐ์อักษรไทยที่เรียกกันว่า",
"ลายสือไทย",
"ขึ้น",
"ซึ่งได้เค้ารูปจากอักษรอินเดียฝ่ายใต้",
"รวมทั้งอักษรมอญและเขมรที่มีอยู่เดิม",
"ซึ่งต่างก็ถ่ายแบบมาจากอักษรอินเดียฝ่ายใต้ทั้งสิ้น",
"ทำให้อักษรไทยมีลักษณะคล้ายคลึงกับอักษรทั้งสาม",
"แม้บางตัวจะไม่คล้ายกัน",
"แต่ก็สามารถรู้ได้ว่าดัดแปลงมาจากอักษรตัวไหน",
"อักษรไทยมีการปรับปรุงอยู่เรื่อยๆ",
"ในสมัยพญาฦๅไทราว",
"มีการแก้ไขตัวอักษรให้ผิดเพี้ยนไปบ้างเล็กน้อย",
"โดยเฉพาะการเพิ่มเชิงที่ตัว",
"ญ",
"ซึ่งใช้ติดต่อเรื่อยมาจนทุกวันนี้",
"คาดว่าน่าจะเอาอย่างมาจากเขมร",
"ในสมัยสมเด็จพระนารายณ์มหาราช",
"ตัวอักษรเริ่มมีทรวดทรงดีขึ้นแต่ก็ไม่ทิ้งเค้าเดิม",
"มีบางตัวเท่านั้นที่แก้ไขผิดไปจากเดิม",
"คือตัว",
"ฎ",
"และ",
"ธ",
"ซึ่งเหมือนกับที่ใช้อยู่ในปัจจุบัน",
"นักวิชาการจำนวนหนึ่งเชื่อว่าในสมัยสมเด็จพระนารายณ์มหาราช",
"ตัวอักษรและการใช้งานมีความคล้ายคลึงกับในปัจจุบันมากที่สุด"
];

// these only appear after a user has solved 5 words
// because they are hard
// and they will stop playing
var hardCombos = [];

var firstWord = "ภาษาไทย";
var firstOrder = "ภาทยษไ";
var maxLength = 24;