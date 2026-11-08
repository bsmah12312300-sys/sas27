// إعدادات الربط السحابي (Firebase) الخاصة بمشروعك
const firebaseConfig = {
    apiKey: "AIzaSyBu0xsgWFQ-3WghF9lk9pfCYqzyu7lXfdg",
    authDomain: "fir-a-s-e67bc.firebaseapp.com",
    databaseURL: "https://fir-a-s-e67bc-default-rtdb.firebaseio.com",
    projectId: "fir-a-s-e67bc",
    storageBucket: "fir-a-s-e67bc.firebasestorage.app",
    messagingSenderId: "881874099558",
    appId: "1:881874099558:web:f89911f961aa6aca9e3ca7",
    measurementId: "G-D5ECT5TNHQ"
};

// تهيئة الاتصال بقاعدة البيانات السحابية
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const defaultClassData = {
    "3-1": [
        { name: "ابرار امير حمزه", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ارين محمد جميل", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "اسراء امير حمزه", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "اغادير محمد الدوسري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "اميره محمد طالب", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ايلاف عبد الرحمن المالكي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تالا امين السيد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تاليا عبد الاله الوافي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تالين عبد الله الزهراني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تولين عبد الله مليباري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جنى فرج باعامر", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جود جسن الصليمي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حلا محمد ابوزر", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حنين طارق قايد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حنين فيصل حامد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "راما حسن الخرماني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رتاج عمار علي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رغد اجمد بامدحن", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رغد عادل الحربي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريتال طارق شمسان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريماس بنت عصام الوفي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "زينب نافذ المزين", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "سندس خالد خولاني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "شهد طارق محمد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "عزيزه علي محمد زين", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لمار النعمان يوسف", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لين جهاد افيوني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "نوف فيصل الرايقي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] }
    ],
    "3-2": [
        { name: "أماني محمد طاهر", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "أميرة علي الفارسي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "أميره ماجد عمران", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "بيلسان عبدالمجيد الغامدي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تولين اديب دراو", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تولين هاني الهاجري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جنى بشار الحجه", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جودي محمد السويد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جوري فهد بوقاسم", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حور محمد الحربي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حنين حداد عبدالغني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حنين عبدالرحمن العولقي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حنين يحي عثمان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "خوله مجاهد القيسي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رحمه حازم نصر", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رغد عبدالعزيز عبده", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رهف رائد عسيري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رهف مروان حسن", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رواء محمد المولد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريان احمد حمال", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريتال بندر المطيري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريتال فهد الحودي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريناد احمد علوه", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "شهد جارالله المالكي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "طفلة احمد الدهان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لجين محمد عثمان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لمياء عبدالرحمن محمود", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لميس فواز شعبان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ليان زياد امين", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ليان محمد الخواجه", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لين نوزت الغنوم", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لينه علي المالكي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ميار ماجد بيت المال", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "هوازن فواز بن زكي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] }
    ],
    "3-3": [
        { name: "تاله عماد الوافي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جوان عيسى قصادي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جودي جهاد الجهني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حنين محمد الغامدي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حنين يوسف ابراهيم", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حور محمد الحربي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "دلال شعبان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رفيف شعبان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "روان محمد الرميثه", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "روحيه ثامر بركه", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "روعه عبد الرزاق المولي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رويده علي ابراهيم", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريتاج بن سعد خان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريتال اسامه باقلاقل", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريتال مازن غالب", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "عاليه هشام بامسق", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "عيده صالح الخيبري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "غلا ابكر حامد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "غنى ضيف الله الزهراني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لمار علي اليافعي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ليان نبيل ديان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "مرام محمد عبد الله", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "مشاعل لطف قحطان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "مها محمد محسن", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "نجوى عبدالله باقسماطي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "نسمه احمد محمود", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "نفيسه كرات خليل", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "هيا محمد المليكي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "هيفاء نصر الدين", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "وسن نايف شراحيلي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "يارا بدر سيفياني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] }
    ],
    "3-4": [
        { name: "احلام محمد البكير", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "اسيل احمد محمد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "الين اسعد البخاري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تالا احمد الزنبقي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جنى تامرابوالهدى", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جنى محمد ابوحيه", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جودي سيف الدين عثمان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جودي مثنه الاسود", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حنين احمد العلوي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حنين طارق قايد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حنين فيصل يوسف", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "دلال محمد الغامدي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رتيل احمد العماري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رزان احمد الغامدي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رزان عبدالله سلطان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رغد احمد بامدحن", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رفيف عبدالله الرهيف", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رهف عماد ابو طالب", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "روان ابراهيم عثمان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "روان عبدالله سلطان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريماس فهد المزعل", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "سديم عبدالله المزروعي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "سندس خالد الخولاني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "غزل صالح باحداد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "غزل عبدالمالك الاشقر", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "غلا ياسر عميرات", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لانا حسين الغامدي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لانا محمد علي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لليام احمد هوساوي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ليلك معاذ الديري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "نورة محمد نديم", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "هدى يوسف الحربي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "هديل احمد شعيب", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "وسن حامد الزهراني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] }
    ],
    "3-5": [
        { name: "البتول عبد الله الحامد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "انتصار عيسى العولقي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تالا حسين رشوان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تالا مهدي العريشي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جنى احمد ابوبكر", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جوان بنت علي الغامدي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حنان وائل نحاس", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "دانة عبدالعزيز التركي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "دانه محمد العوض", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "روئ هاشم العيدروس", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رفيف ياسر بن بشر", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "روان عماد علي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريماس خالد المطيري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "زينب ابراهيم الشمس", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "سارة اسماعيل حامد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "سارة امير سعيد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "شيماء صالح علوي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "عاليه هشام بامسق", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "عبير سالم محمد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "غيداء عبدالرحمن العمودي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لمار سعيد باطرفي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لمار عمر سلوم", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لميس ممدوح الافغاني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لليان فادي بشير", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ماريا ابراهيم المولد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "مريم محمد حكمي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ملكة مجدي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "هناء فيصل ناصر", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] }
    ],
    "3-6": [
        { name: "ابتهال غوني كافياتا", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "أسيل عبدالفتاح", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "المى علي الشهري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "الوتين احمد الزهراني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ايلاف عبدالله ال زيد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تالين عبدالله الزهراني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تالين علي الغامدي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تولين محمد بيك", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جميلة مروان الخطيب", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جود محمد حمال", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "دانة فايز الشهري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رنا ماجد العوفي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رهف دخيل الله الجهني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رهف عبدالرحمن النجار", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "روناء سعيد بابكير", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريتاج فؤاد عبدالكريم", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريماس خالد الأسمري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريماس محمد حسيكي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريم موسى", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "سديم ابراهيم الخليفي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "سمهر منصور اليهيبي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "شهد ايراهيم بادريك", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "عيشه عوض العولقي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "فاطة مبارك المري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "فرح عادل الحداد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "فرح محمد قدواي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "مريم علي بامدحن", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "مريم مختار", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "منى محمد علي غنيم", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ميار خالد الجحدلي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ميار ماجد تاج بيت المال", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "نوران ياسر الهمص", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] }
    ],
    "3-7": [
        { name: "أمل طالب سعيد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "إيلاف جلال محمد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ايناس حنيف", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "باسمه ماهر عسيري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "بسمه احمد العامودي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تولين حمد مقبول", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جنى احمد الغامدي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "دالينا رامي علاف", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "دانا فهد القرني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "دانه عبد الله عسيري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "رهف فايزالمرواني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "سميه مطلق المالكي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "شروق حسن الظاهري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "شوق عبدالله السليمان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "صديقه فيض الله", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "عبير عبدالله الشريف", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "غلا محمد العمري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "غنى زامل عفش", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "غيداء لؤي الصائغ", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لمى محمد الزهراني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ليان صالح خليفي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لين سليم محمود", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ماريا طارق الخنبشي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "مسفرة مطلق المالكي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ملك علي الجكمي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ميار محمد بابكير", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "هيفاء طاهر مؤمن", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "وريف مشهور الغامدي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "يارا محمود عمر", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "يارا منير النهدي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "يولا محمود عمر", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] }
    ],
    "3-8": [
        { name: "أحلام محمد الكيال", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ألين الزهراني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "بتول محمد المرواني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "بيسان بسام العليان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "تولين طارق المطرفي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جنا عمر عطوان", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "جود حمد قعوز", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حلا عبد الرحمن قبيع", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "حنين حداد عباس", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "خديجه عبدالله بن محفوظ", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "خيرية سلطان طه", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "دانا امين الغامدي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "دانه وليد الحربي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ديمه خليل الناشري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريم بسام الاحمدي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريمه محمد صديق", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ريمه مرعي الكعبي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "شهد طارق عبد الحميد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "غلا ابكر جدو", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ليان موسى الحرتاني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "لين ياسين مغربي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "مروه مشعل الحارثي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "مريم احمد", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "منيرعلي غالب", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ميار بندر الحازمي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "ميار محمد السدة", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "نغم نواف المرامحي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "هاله عبد الرحمن كتبي", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "هبه نور ادم", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "هيا نائف بامعوضه", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "وصايف متعب الزهراني", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] },
        { name: "يارا عبدالله العمري", status: "حاضرة", time: "", date: "", lateCount: 0, absenceCount: 0, lateRecords: [], absenceRecords: [] }
    ]
};

let html5QrcodeScanner = null;
let currentSelectedMonth = 'all';
let currentAbsentMonth = 'all';

function updateClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.innerText = `${hours}:${minutes}:${seconds}`;
    }
}

function getClassData(className, callback) {
    db.ref(`classes/${className}`).once('value', (snapshot) => {
        let data = snapshot.val();
        if (!data) {
            data = defaultClassData[className] || [];
            db.ref(`classes/${className}`).set(data);
        }
        callback(data);
    });
}

function saveClassData(className, students, callback) {
    db.ref(`classes/${className}`).set(students, () => {
        if (callback) callback();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateClock();
    setInterval(updateClock, 1000);

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    const currentClass = localStorage.getItem('selectedClass') || "3-7";

    ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8"].forEach(c => {
        db.ref(`classes/${c}`).once('value', (snapshot) => {
            if (!snapshot.val()) {
                db.ref(`classes/${c}`).set(defaultClassData[c]);
            }
        });
    });

    ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8"].forEach(c => {
        db.ref(`classes/${c}`).on('value', (snapshot) => {
            const updatedClass = localStorage.getItem('selectedClass') || "3-7";
            if (document.getElementById('studentsList') && c === updatedClass) {
                renderStudentsList(c);
            }
            if (document.getElementById('lateStudentsList')) {
                renderAllClassesLateStudents();
            }
            if (document.getElementById('absentStudentsList') && c === updatedClass) {
                renderAbsentStudentsList(c);
            }
            if (document.getElementById('dailyLogStudentsList') && c === updatedClass) {
                renderDailyLogStudentsList(c);
            }
        });
    });

    if (document.getElementById('studentsList')) {
        const classTitle = document.getElementById('classTitle');
        if (classTitle) classTitle.innerText = "تحضير فصل " + currentClass;
        renderStudentsList(currentClass);
    }

    if (document.getElementById('lateStudentsList')) {
        renderAllClassesLateStudents();
    }

    if (document.getElementById('absentStudentsList')) {
        const absentTitle = document.getElementById('absentClassTitle');
        if (absentTitle) absentTitle.innerText = "سجل الغائبات - فصل " + currentClass;
        renderAbsentStudentsList(currentClass);
    }

    if (document.getElementById('dailyLogStudentsList')) {
        const dailyTitle = document.getElementById('dailyClassTitle');
        if (dailyTitle) dailyTitle.innerText = "سجل التحضير اليومي - فصل " + currentClass;
        renderDailyLogStudentsList(currentClass);
    }
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

function selectClass(className) {
    localStorage.setItem('selectedClass', className);
    window.location.href = './classroom.html';
}

function selectClassForAbsent(className) {
    localStorage.setItem('selectedClass', className);
    const absentTitle = document.getElementById('absentClassTitle');
    if (absentTitle) absentTitle.innerText = "سجل الغائبات - فصل " + className;
    renderAbsentStudentsList(className);
}

function selectClassForDailyLog(className) {
    localStorage.setItem('selectedClass', className);
    const dailyTitle = document.getElementById('dailyClassTitle');
    if (dailyTitle) dailyTitle.innerText = "سجل التحضير اليومي - فصل " + className;
    renderDailyLogStudentsList(className);
}

function goToLatePage() { window.location.href = './late.html'; }
function goToAbsentPage() { window.location.href = './absent.html'; }
function goToDailyLogPage() { window.location.href = './daily-log.html'; }
function goToClassLatePage() { window.location.href = './class-late.html'; }
function goHome() { window.location.href = './index.html'; }
function goToClassPage() { window.location.href = './classroom.html'; }

function finishAttendance() {
    const confirmExport = confirm("تم إنهاء التحضير وحفظ البيانات بنجاح!\nهل ترغبين في تصدير التقرير الحالي كملف PDF الآن؟");
    if (confirmExport) {
        exportToPDF();
    }
}

function exportToPDF() {
    window.print();
}

function resetAllDataPrompt() {
    const password = prompt("أدخل كلمة السر لتصفير السجلات التراكمية للفصل الدراسي:");
    if (password === null) return;

    if (password.trim() === "2009") {
        const confirmReset = confirm("هل أنتِ متأكدة تماماً من رغبتكِ في تصفير جميع عدادات التأخير والغياب التراكمية لكل الفصول؟");
        if (confirmReset) {
            ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8"].forEach(c => {
                db.ref(`classes/${c}`).set(defaultClassData[c]);
            });
            alert("تم تصفير جميع السجلات التراكمية بنجاح لبدء فصل جديد!");
            location.reload();
        }
    } else {
        alert("كلمة السر غير صحيحة!");
    }
}

function addNewStudentPrompt() {
    const password = prompt("أدخل كلمة السر لإضافة طالبة جديدة:");
    if (password === null) return;

    if (password.trim() === "2009") {
        const studentName = prompt("أدخل الاسم الرباعي للطالبة الجديدة:");
        if (!studentName || !studentName.trim()) return;

        const currentClass = localStorage.getItem('selectedClass') || "3-7";
        getClassData(currentClass, (students) => {
            const exists = students.some(s => s.name.trim().toLowerCase() === studentName.trim().toLowerCase());
            if (exists) {
                alert("هذه الطالبة مسجلة مسبقاً في هذا الفصل!");
                return;
            }

            students.push({
                name: studentName.trim(),
                status: "حاضرة",
                time: "",
                date: "",
                lateCount: 0,
                absenceCount: 0,
                lateRecords: [],
                absenceRecords: []
            });

            students.sort((a, b) => a.name.localeCompare(b.name, 'ar'));

            saveClassData(currentClass, students, () => {
                renderStudentsList(currentClass);
                alert(`تم إضافة الطالبة (${studentName.trim()}) بنجاح إلى فصل ${currentClass}!`);
            });
        });
    } else {
        alert("كلمة السر غير صحيحة!");
    }
}

function renderStudentsList(currentClass) {
    getClassData(currentClass, (students) => {
        const tbody = document.getElementById('studentsList');
        if (!tbody) return;
        tbody.innerHTML = "";

        students.forEach((student, index) => {
            let statusClass = "present";
            if (student.status === "متاخرة") statusClass = "late";
            if (student.status === "غائبة") statusClass = "absent";

            let warningBadge = "";
            const lates = Number(student.lateCount) || 0;
            const absents = Number(student.absenceCount) || 0;

            if (lates >= 3 || absents >= 3) {
                warningBadge = `<span class="warning-badge">⚠️ تنبيه: (تأخير ${lates} | غياب ${absents})</span>`;
            } else {
                warningBadge = `<span style="color: #94a3b8; font-size: 0.85rem;">منتظمة</span>`;
            }

            tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${student.name}</td>
                    <td>
                        <span class="status ${statusClass} clickable-status" onclick="changeStatusDirectly('${student.name}')" title="اضغطي لتغيير الحالة مباشرة">
                            ${student.status} 🔽
                        </span>
                    </td>
                    <td>${warningBadge}</td>
                </tr>
            `;
        });
    });
}

function renderDailyLogStudentsList(currentClass) {
    getClassData(currentClass, (students) => {
        const tbody = document.getElementById('dailyLogStudentsList');
        if (!tbody) return;
        tbody.innerHTML = "";

        students.forEach((student, index) => {
            let statusClass = "present";
            if (student.status === "متاخرة") statusClass = "late";
            if (student.status === "غائبة") statusClass = "absent";

            const dateTimeText = student.date ? `${student.date} - ${student.time || "--:--"}` : "لم يتم التحضير بعد";

            tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${student.name}</td>
                    <td><span class="status ${statusClass}">${student.status}</span></td>
                    <td><span class="time-badge">${dateTimeText}</span></td>
                </tr>
            `;
        });
    });
}

function filterByMonth(month) {
    currentSelectedMonth = month;
    const buttons = document.querySelectorAll('#monthFilterContainer .btn-month');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    const titleSpan = document.getElementById('monthTitleText');
    const printTitleLate = document.getElementById('printTitleLate');
    
    if (titleSpan) {
        if (month === 'all') {
            titleSpan.innerText = "الشامل لجميع الشهور";
            if (printTitleLate) printTitleLate.innerText = "سجل التأخير الشامل";
        } else {
            titleSpan.innerText = `لشهر ${month}`;
            if (printTitleLate) printTitleLate.innerText = `سجل التأخير لشهر ${month}`;
        }
    }
    renderAllClassesLateStudents();
}

function filterAbsentByMonth(month) {
    currentAbsentMonth = month;
    const monthBtns = document.querySelectorAll('.month-filter-buttons .btn-month');
    monthBtns.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    const currentClass = localStorage.getItem('selectedClass') || "3-7";
    renderAbsentStudentsList(currentClass);
}

function matchHijriMonth(dateStr, targetMonth) {
    if (!dateStr) return false;
    const converted = dateStr.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
    const numbers = converted.match(/\d+/g);
    if (!numbers) return false;

    for (let i = 0; i < numbers.length; i++) {
        const num = Number(numbers[i]);
        if (num === Number(targetMonth)) {
            if (num >= 1 && num <= 12) {
                return true;
            }
        }
    }
    return false;
}

function renderAllClassesLateStudents() {
    const tbody = document.getElementById('lateStudentsList');
    if (!tbody) return;
    tbody.innerHTML = "";

    const classesList = ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8"];
    let loadedCount = 0;
    let allLatesCombined = [];

    classesList.forEach(className => {
        getClassData(className, (students) => {
            const classLates = students.filter(s => (s.lateCount && s.lateCount > 0) || s.status === "متاخرة");
            classLates.forEach(student => {
                allLatesCombined.push({
                    ...student,
                    className: className
                });
            });

            loadedCount++;
            if (loadedCount === classesList.length) {
                let filteredList = allLatesCombined;
                if (currentSelectedMonth !== 'all') {
                    filteredList = allLatesCombined.filter(s => matchHijriMonth(s.date, currentSelectedMonth));
                }

                if (filteredList.length === 0) {
                    tbody.innerHTML = `<tr><td colspan="6" class="no-lates-msg">لا يوجد طالبات متأخرات للشهر المحدد في أي من الفصول.</td></tr>`;
                    return;
                }

                tbody.innerHTML = "";
                filteredList.forEach((student, index) => {
                    const count = Number(student.lateCount) || 1;
                    const warning = count >= 3 ? `<span class="warning-badge">⚠️ تجاوزت 3 مرات</span>` : "";

                    tbody.innerHTML += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${student.name}</td>
                            <td><span class="time-badge">فصل ${student.className}</span></td>
                            <td>${student.date || "اليوم"}</td>
                            <td><span class="time-badge">${student.time || "--:--"}</span></td>
                            <td>
                                <span class="count-badge" onclick="showStudentDetails('${student.name}', 'late')" style="cursor:pointer; color:#0284c7; text-decoration:underline;" title="اضغطي لعرض سجل التأخير بالتفصيل">
                                    ${count} مرة 🔽
                                </span> ${warning}
                            </td>
                        </tr>
                    `;
                });
            }
        });
    });
}

function renderAbsentStudentsList(currentClass) {
    getClassData(currentClass, (students) => {
        let absents = students.filter(s => (s.absenceCount && s.absenceCount > 0) || s.status === "غائبة");
        
        if (currentAbsentMonth !== 'all') {
            absents = absents.filter(s => matchHijriMonth(s.date, currentAbsentMonth));
        }

        const tbody = document.getElementById('absentStudentsList');
        if (!tbody) return;
        tbody.innerHTML = "";

        const printTitleAbsent = document.getElementById('printTitleAbsent');
        if (printTitleAbsent) {
            printTitleAbsent.innerText = currentAbsentMonth === 'all' ? `سجل الغياب - فصل ${currentClass}` : `سجل الغياب لشهر ${currentAbsentMonth} - فصل ${currentClass}`;
        }

        if (absents.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" class="no-absent-msg">لا يوجد طالبات غائبات للشهر المحدد في هذا الفصل.</td></tr>`;
            return;
        }

        absents.forEach((student, index) => {
            const count = Number(student.absenceCount) || 1;
            const warning = count >= 3 ? `<span class="warning-badge">⚠️ تجاوزت 3 مرات</span>` : "";

            tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${student.name}</td>
                    <td><span class="status absent">${student.status === "غائبة" ? "غائبة" : "مسجل غياب"}</span></td>
                    <td>
                        <span class="absence-badge" onclick="showStudentDetails('${student.name}', 'absent')" style="cursor:pointer; color:#0284c7; text-decoration:underline;" title="اضغطي لعرض سجل الغياب بالتفصيل">
                            ${count} مرات 🔽
                        </span> ${warning}
                    </td>
                </tr>
            `;
        });
    });
}

function showStudentDetails(studentName, type) {
    localStorage.setItem('viewStudentName', studentName);
    localStorage.setItem('viewStudentType', type);
    window.location.href = './student-log.html';
}

function changeStatusDirectly(studentName) {
    const statusChoice = prompt(`اختر الحالة الجديدة للطالبة (${studentName}):\n1 : حاضرة\n2 : متاخرة\n3 : غائبة`);
    if (statusChoice === null) return;

    let statusText = "";
    if (statusChoice === "1") statusText = "حاضرة";
    else if (statusChoice === "2") statusText = "متاخرة";
    else if (statusChoice === "3") statusText = "غائبة";
    else {
        alert("اختيار غير صحيح، يجب إدخال 1 أو 2 أو 3");
        return;
    }

    updateStudentStatus(studentName, statusText);
}

function manualAttendance() {
    const studentName = prompt("أدخل اسم الطالبة المراد تحضيرها:");
    if (!studentName || !studentName.trim()) return;

    const statusChoice = prompt("اختر رقم الحالة:\n1 : حاضرة\n2 : متاخرة\n3 : غائبة");
    if (statusChoice === null) return;

    let statusText = "";
    if (statusChoice === "1") statusText = "حاضرة";
    else if (statusChoice === "2") statusText = "متاخرة";
    else if (statusChoice === "3") statusText = "غائبة";
    else {
        alert("يرجى اختيار 1 أو 2 أو 3");
        return;
    }

    updateStudentStatus(studentName.trim(), statusText);
}

function updateStudentStatus(searchName, status) {
    const currentClass = localStorage.getItem('selectedClass') || "3-7";
    getClassData(currentClass, (students) => {
        let found = false;
        
        const now = new Date();
        const dateString = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        }).format(now);

        const timeString = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

        const cleanSearch = searchName.trim().toLowerCase();

        let targetIndex = students.findIndex(s => s.name.trim().toLowerCase() === cleanSearch);
        if (targetIndex === -1) {
            targetIndex = students.findIndex(s => s.name.trim().toLowerCase().includes(cleanSearch));
        }

        if (targetIndex !== -1) {
            found = true;
            let student = students[targetIndex];
            
            if (!student.lateRecords) student.lateRecords = [];
            if (!student.absenceRecords) student.absenceRecords = [];
            
            if (status === "متاخرة") {
                student.lateRecords.push({ date: dateString, time: timeString });
                student.lateCount = student.lateRecords.length;
            } else if (status === "غائبة") {
                student.absenceRecords.push({ date: dateString, time: timeString });
                student.absenceCount = student.absenceRecords.length;
            }

            students[targetIndex] = {
                ...student,
                status: status,
                time: timeString,
                date: dateString
            };
        }

        if (found) {
            saveClassData(currentClass, students, () => {
                const studentObj = students[targetIndex];
                const countMsg = status === "متاخرة" 
                    ? `(إجمالي التأخير التراكمي: ${studentObj.lateCount} مرة)` 
                    : status === "غائبة" 
                    ? `(إجمالي الغياب التراكمي: ${studentObj.absenceCount} مرة)` 
                    : "";
                    
                alert(`تم تسجيل حالة الطالبة (${studentObj.name}) إلى: [${status}] بنجاح! ${countMsg}`);
            });
        } else {
            alert("لم يتم العثور على اسم الطالبة، تأكدي من كتابة الاسم بصورة صحيحة.");
        }
    });
}

function transferStudentPrompt() {
    const password = prompt("أدخل كلمة السر لنقل الطالبة:");
    if (password === null) return;

    if (password.trim() === "2009") {
        const currentClass = localStorage.getItem('selectedClass') || "3-7";
        const studentName = prompt("أدخل اسم الطالبة المراد نقلها:");
        if (!studentName || !studentName.trim()) return;

        const targetClass = prompt(`أدخل الفصل المراد نقل الطالبة إليه (3-1, 3-2, 3-3, 3-4, 3-5, 3-6, 3-7, 3-8):`);
        if (!targetClass || !targetClass.trim()) return;

        const cleanTarget = targetClass.trim();
        const validClasses = ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8"];
        if (!validClasses.includes(cleanTarget)) {
            alert("اسم الفصل غير صحيح! الفصول المتاحة هي: 3-1, 3-2, 3-3, 3-4, 3-5, 3-6, 3-7, 3-8");
            return;
        }

        if (cleanTarget === currentClass) {
            alert("الطالبة موجودة بالفعل في هذا الفصل!");
            return;
        }

        executeStudentTransfer(currentClass, cleanTarget, studentName.trim());
    } else {
        alert("كلمة السر غير صحيحة!");
    }
}

function executeStudentTransfer(fromClass, toClass, studentName) {
    getClassData(fromClass, (sourceStudents) => {
        getClassData(toClass, (targetStudents) => {
            const cleanSearch = studentName.toLowerCase();
            let targetIndex = sourceStudents.findIndex(s => s.name.trim().toLowerCase() === cleanSearch);
            if (targetIndex === -1) {
                targetIndex = sourceStudents.findIndex(s => s.name.trim().toLowerCase().includes(cleanSearch));
            }

            if (targetIndex !== -1) {
                let studentObj = sourceStudents.splice(targetIndex, 1)[0];
                
                targetStudents.push(studentObj);
                targetStudents.sort((a, b) => a.name.localeCompare(b.name, 'ar'));

                saveClassData(fromClass, sourceStudents, () => {
                    saveClassData(toClass, targetStudents, () => {
                        alert(`تم نقل الطالبة (${studentObj.name}) بنجاح من فصل ${fromClass} إلى فصل ${toClass}!`);
                    });
                });
            } else {
                alert("لم يتم العثور على اسم الطالبة في هذا الفصل، تأكدي من كتابة الاسم بصورة صحيحة.");
            }
        });
    });
}

async function toggleScanner() {
    const readerDiv = document.getElementById('qr-reader');
    if (!readerDiv) return;

    if (readerDiv.style.display === "none" || readerDiv.style.display === "") {
        readerDiv.style.display = "block";
        if (!html5QrcodeScanner) {
            html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
        }
        html5QrcodeScanner.render(onScanSuccess);
    } else {
        await stopScanner();
    }
}

async function stopScanner() {
    const readerDiv = document.getElementById('qr-reader');
    if (readerDiv) readerDiv.style.display = "none";
    if (html5QrcodeScanner) {
        try {
            await html5QrcodeScanner.clear();
        } catch (err) {
            console.error("خطأ عند إيقاف الماسح:", err);
        } finally {
            html5QrcodeScanner = null;
        }
    }
}

async function onScanSuccess(decodedText) {
    const now = new Date();
    const isLate = now.getHours() >= 8; 
    const status = isLate ? "متاخرة" : "حاضرة";
    
    await stopScanner();
    updateStudentStatus(decodedText.trim(), status);
}