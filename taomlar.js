let taomlar = [
	{
		id: 1,
		nom: "Quymoq",
		tur: "nonushta",
		narx: 2500,
		rasm: "https://zira.uz/wp-content/uploads/2019/03/blini-prostokvawino.jpg",
		matn: "Ko’pchilik uchun yupqa va yengil quymoqlardan tayyorlash muammo hisoblanadi. Shu sababdan ham bizlar quyidagi retseptimizni sizlar bilan bo’lishishga qaror qildik. "
	},
	{
        id: 2,
		nom: "Teftel",
		tur: "kechki ovqat",
		narx: 24000,
		rasm: "https://zira.uz/wp-content/uploads/2019/07/tefteli-v-souse-1.jpg",
		matn: "Pomidorli qaylada pishirilgan teftellar bu ko’pchilik sevib iste’mol qiladigan taomlardan biridir. Shuningdek, uning tayyorlash jarayoni juda ham oson bo’lib, bunda hech qanday qiyinchilikka uchramaysiz."
    },
    {
        id: 3,
		nom: "Qovoqli manti",
		tur: "tushlik",
		narx: 5000,
		rasm: "https://zira.uz/wp-content/uploads/2018/10/manti-s-tikvoy-2.jpg",
		matn: "Qovoqlarning ayni mavsumida ulardan tayyorlangan, yumshoqina, og’izda erib ketuvchi mantilarga nima deysiz?! Bunday taom juda to’yimli bo’lib, tayyorlash jarayoni ham unchalik qiyinchilik tug’dirmaydi."
    },
    {
        id: 4,
		nom: "Qozon kabob",
		tur: "tushlik",
		narx: 60000,
		rasm: "https://zira.uz/wp-content/uploads/2021/05/kazan-kebab-coca-cola-2.jpg",
		matn: "Go’sht isi va va ziravorlar bilan to’yinib pishgan yangi chiqqan kartoshkadan mazaliroq taom bo’lmasa kerak. Ushbu taom ortiqcha urinishlarni talab etmasa ham, juda mazali bo’lib chiqadi."
    },
    {
        id: 5,
		nom: "Dimlama",
		tur: "kechki ovqat",
		narx: 85000,
		rasm: "https://zira.uz/wp-content/uploads/2021/05/dimlama-coca-cola.jpg",
		matn: "Dimlama – bu O’zbekistondagi eng mashhur taomlardan biri. U ko’p miqdordagi sabzavot va go’shtdan tayyorlanadi, ular qatlamlarga yig’ilib, uzoq vaqt davomida dimlanadi. Ushbu taom nafaqat juda mazali, balki foydali hisoblanadi. Axir, sabzavotlarda ko’p miqdordagi vitaminlar mavjud, go’sht esa, oqsil manbai hisoblanadi."
    },
    {
        id: 6,
		nom: "Blinchik",
		tur: "nonushta",
		narx: 3000,
		rasm: "https://zira.uz/wp-content/uploads/2021/03/blinchiki-v-goroshek.jpg",
		matn: "«Nuqta-nuqta»ga ega noodatiy blinchiklar – istalgan nachinka bilan mos keladigan ajoyib desertdir. Ushbu blinchiklar har doim o’xshab chiqadi. Mana shunday yorqin blinchiklar tayyorlab, oila a’zolaringizni xursand qilishingizni maslahat beramiz. "
    },
    {
        id: 7,
		nom: "Bulochka",
		tur: "nonushta",
		narx: 1500,
		rasm: "https://zira.uz/wp-content/uploads/2020/11/bulochki-kak-v-sadike.jpg",
		matn: "Xushbo’y oshirma xamirdan tayyorlangan bulochkalarning ajoyib retsepti. Bunday mazali va shirin bulochkalarni bolalar bog’chalarida tayyorlab, sut bilan dasturxonga tortishar edi. Ushbu bulochkalardan hech qanday bolakay bosh tortmaydi. Shunday ekan, tezroq tayyorlaylik. "
    },
    {
        id: 8,
		nom: "Goluptsi",
		tur: "kechki ovqat",
		narx: 20000,
		rasm: "https://zira.uz/wp-content/uploads/2019/06/farshirovanniy-perec-9.jpg",
		matn: "Yozning eng xaridorgir mahsulotlaridan biri albatta bu bulg’orilar bo’lib, ulardan hozir to’yib olish juda zarurdir. Bunda esa qiyma va guruch solib pishirilgan do’lmalar juda qo’l keladi. Bizning retsept asosida pishirilgan bu do’lmalar juda sersuv bo’lib pishadi."
    },
    {
        id: 9,
		nom: "Non-palov",
		tur: "tushlik",
		narx: 15000,
		rasm: "https://zira.uz/wp-content/uploads/2020/09/non-palov.jpg",
		matn: "Ushbu taom juda mazali va xushbo’y bo’lib chiqadi. O’zbek xalqi azaldan nonga juda ehtiyotkorlik bilan munosabatda bo’lgan va mazali taomlar to’g’risida ko’p narsalarni bilgan, shuning uchun agar sizning nonlaringizning biroz suvi qochib qolgan bo’lsa, unda ushbu taomni tayyorlashning vaqti keldi."
    },
    {
        id: 10,
		nom: "Osh (palov)",
		tur: "tushlik",
		narx: 22000,
		rasm: "https://zira.uz/wp-content/uploads/2021/02/prazdnichnyi---plov-ai--ran-grohe-2.jpg",
		matn: "Palovni mazali qilb pishirish uchun siz bir nechta sirlarni bilib olishingiz kerak. Hamma biladigan qoidalarga qo’shimcha ravishda, masalan, go’sht, guruch va sabzi teng miqdorda bo’lishi kerak. Palov ta’mida suv juda katta rol o’ynaydi, suv qanchalik toza va mazali bo’lsa, bizning palovimiz shunchalik mazali bo’lib chiqadi."
    },
    {
        id: 11,
		nom: "Qaynatna sho’rva",
		tur: "kechki ovqat",
		narx: 27000,
		rasm: "https://zira.uz/wp-content/uploads/2020/08/kai--natma-shurpa.jpg",
		matn: "Uyda barcha qoidalarga rioya qilgan holda juda mazali qaynatma sho’rva tayyorlashni maslahat beramiz. Ushbu sho’rva qo’y go’shti, sersuv sabzavotlar va xushbo’y ziravorlardan tashkil topgan. Bunday sho’rva qovurilmay tayyorlanadi, bu sho’rvaga o’zgacha maza taqdim etadi."
    },
    {
        id: 12,
		nom: "Jarkop",
		tur: "kechki ovqat",
		narx: 26000,
		rasm: "https://zira.uz/wp-content/uploads/2019/04/jarkoe-iz-govyadini-4.jpg",
		matn: "Xushbo’y, qaynoqina kratoshka va go’sht bilan tayyorlangan jarkop juda to’yimli taomlarimizdan biri hisoblanadi."
    },
    {
        id: 13,
		nom: "Somsa",
		tur: "tushlik",
		narx: 8000,
		rasm: "https://zira.uz/wp-content/uploads/2022/07/milter_sloenaya_tandyr_samsa_v_dukhovke.jpg",
		matn: "Albatta, hech nima tandirda pishirilgan somsaga yetmaydi. Ammo pechda ham unga o’xshash somsa pishirish mumkin. Pishirish jarayonida patnis aylantirilishi sababli, somsa suvliroq va boshqacha shirin bo’lib pishadi."
    },
    {
        id: 14,
		nom: "Tuxumli bifshteks",
		tur: "nonushta",
		narx: 12000,
		rasm: "https://zira.uz/wp-content/uploads/2018/03/bifshteks-1.jpg",
		matn: "Bifshteks ko’pchilikning sevimli taomlaridan biri bo’lib, mazali bo’libgina qolmasdan juda to’yimli hamdir. Chunki unda qiymadan tashqari qovurilgan tuxum ham mavjud. Bu bifshtekslarni eritilgan sariyog’da pishirsangiz, ta’mi juda ham ajoyib chiqadi."
    },
    {
        id: 15,
		nom: "Kotlet",
		tur: "tushlik",
		narx: 9000,
		rasm: "https://zira.uz/wp-content/uploads/2018/04/kotleti-1.jpg",
		matn: "Mol go’shtidan tayyorlanilgan kotletlar, ko’pchilikning sevimli taomi sanaladi. Kotletlarni tayyorlash unchalik ham qiyin emas, faqatgina qiyma, bir-necha sabzavotlar va eng asosiysi mehr bilan pishirish!"
    },
    {
        id: 16,
		nom: "Pentuza",
		tur: "salat",
		narx: 18000,
		rasm: "https://zira.uz/wp-content/uploads/2020/01/funchozy.jpg",
		matn: "Pentuza – koreyscha salat bo’lib, unga ishlatiladigan asosiy masalliq sabzavot va go’sht bilan ajoyib tarzda uyg’unlashgan ingichka guruch lapshasi hisoblanadi. Bunday salat har kunlik taomnomangizga xilma-xillik kiritadi."
    },
    {
        id: 17,
		nom: "Sezar",
		tur: "salat",
		narx: 28000,
		rasm: "https://zira.uz/wp-content/uploads/2019/03/salat-cezar-4.jpg",
		matn: "«Sezar» salati butun dunyo bo’yicha mashhur salatlardan biri bo’lib, bugun ana shu salat retseptini taqdim etamiz. Buning uchun esa bizlar hamma yerdan xarid qilish mumkin bo’lgan mahsulotlardan foydalandik."
    },
    {
        id: 18,
		nom: "Olivye",
		tur: "salat",
		narx: 25000,
		rasm: "https://zira.uz/wp-content/uploads/2020/10/olive-ichnya-2-2.jpg",
		matn: "Olivye salati hech qachon o’z ommabopligini yo’qotmaydi. Ushbu salatni qishda ham, yozda ham, tug’ilgan kunlarda, bayramlarda, ayniqsa yangi yil bayramida sevib iste’mol qilishadi. Yashil no’xat sifatiga alohida e’tibor berilishi kerak, salatning ta’mi uning ta’mi va sifatiga bog’liq bo’ladi."
    },
    {
        id: 19,
		nom: "Mujskoy kapriz",
		tur: "salat",
		narx: 32000,
		rasm: "https://zira.uz/wp-content/uploads/2018/01/mujskoy-kapriz.jpg",
		matn: "Mujskoy kapriz salati resatoran-u kafelarda eng ko’p buyurtma beriladigan, ko’pchilikka sevimli bo’lgan salatlaridan biridir. Ko’pi bilan 15 daqiqa vaqtingizni oluvchi bu salatni biz bilan birga tayyorlang!"
    },
];
