(this.webpackJsonprpg=this.webpackJsonprpg||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":"start","text":"\\"Obud\u017a si\u0119!\\"","next":"start-2"},{"id":"start-2","text":"Otwierasz oczy ledwo przytomny. S\u0142yszysz \u0107wierkanie ptak\xf3w i szelest li\u015bci. Czujesz na swojej twarzy ciep\u0142e promienie s\u0142o\u0144ca. Twoje cia\u0142o le\u017cy bezw\u0142adnie na trawie.","next":"start-3"},{"id":"start-3","text":"Podnosisz si\u0119 powoli i rozgl\u0105dasz si\u0119. Widzisz przed sob\u0105 mur zaro\u015bni\u0119ty g\u0105szczami. Mur jest do\u015b\u0107 niski lecz nie wystarczaj\u0105co aby si\u0119 na niego wspi\u0105\u0107. Rozci\u0105ga si\u0119 on w obie strony tak \u017ce nie widzisz jego ko\u0144ca. Po\u015brodku stoi \u017celazna ogromna brama, kt\xf3ra jest lekko uchylona.","next":"start-4"},{"id":"start-4","text":"\\"Stoisz przed bram\u0105 labiryntu. W tych murach przewodniczy Pani Sprawiedliwo\u015bci. Ona zwa\u017cy tw\xf3j umys\u0142 w jednej r\u0119ce, twoje serce w drugiej. Je\u015bli znajdzie w tobie chciwo\u015b\u0107, \u015bmier\u0107 b\u0119dzie twoim wyrokiem. Je\u015bli uzna ci\u0119 za godnego, dostaniesz lojalno\u015b\u0107 i mi\u0142o\u015b\u0107 imperium. Wybieraj m\u0105drze. Walcz zwinnie. Zaufaj ca\u0142kowicie. I niech znajdziesz zako\u0144czenie, na kt\xf3re zas\u0142ugujesz.\\"","next":"start-5"},{"id":"start-5","text":"Rozgl\u0105dasz si\u0119 dooko\u0142a lecz nie mo\u017cesz znale\u017a\u0107 \u017ar\xf3d\u0142a g\u0142osu. Za twoimi plecami rozpo\u015bciera si\u0119 \u0142\u0105ka. W oddali mo\u017cesz dostrzec g\xf3ry.","options":[{"text":"Przejd\u017a przez bram\u0119.","next":"lab-1"},{"text":"Ucieknij w stron\u0119 g\xf3r.","next":"end-2"}]},{"id":"lab-1","text":"Podchodzisz do bramy i zaczynasz pcha\u0107 jej prawe skrzyd\u0142o. \u017belazna p\u0142yta wydaje g\u0142o\u015bny zgrzyt i stawia ogromny op\xf3r. Wida\u0107 \u017ce nie by\u0142a u\u017cywana od wielu lat. Wko\u0144cu udaje ci si\u0119 przedosta\u0107 na drug\u0105 stron\u0119.\\n\\nWn\u0119trze labiryntu wygl\u0105da r\xf3wnie antycznie jak na z\u0119wn\u0105trz. Dochodzisz do otwartej przestrzeni, lecz z powodu mur\xf3w dochodzi tu mniej \u015bwiat\u0142a. Pod twoimi stopami le\u017cy zniszczona brukowana \u015bcie\u017cka na kt\xf3rej narysowane s\u0105 symbole lecz trudno je rozpozna\u0107.","next":"lab-2"},{"id":"lab-2","text":"Na \u015brodku przestrzeni stoi kamienna rze\u017aba w postaci kobiety. Nosi ona prost\u0105 sukni\u0119 a jej oczy zawi\u0105zane s\u0105 opask\u0105. Jej r\u0119c\u0119 wyci\u0105gni\u0119te s\u0105 szeroko ku g\xf3rze i trzyma w nich po jednej p\u0142askiej misce. Jej postura wskazuje na to \u017ce por\xf3wnuje ci\u0119\u017car mi\u0119dzy zawarto\u015bciami ka\u017cdej z mis.\\n\\nZ ka\u017cdej strony jeste\u015b otoczony murami lecz dostrzegasz trzy przej\u015bcia: na zach\xf3d, na p\xf3\u0142noc oraz na wsch\xf3d. ","options":[{"text":"Przyjrzyj si\u0119 dok\u0142adnie rze\u017abie.","next":"statue"},{"text":"Id\u017a przej\u015bciem na zach\xf3d.","next":"lab-z-1"},{"text":"Id\u017a przej\u015bciem na p\xf3\u0142noc.","next":"lab-p-1"},{"text":"Id\u017a przej\u015bciem na wsch\xf3d.","next":"lab-w-1"}]},{"conditions":["clay-cup","golden-cup"],"id":"lab-z-1","text":"Wszystkie puchary zosta\u0142y przez ciebie zabrane. Na o\u0142tarzu pozosta\u0142a tylko br\u0105zowa inskrybcja.","options":[{"text":"Przeczytaj inskrybcj\u0119.","next":"inscription-1"},{"text":"Powr\xf3\u0107 do miejsca w kt\xf3rym by\u0142e\u015b","next":"lab-2"}]},{"conditions":["golden-cup"],"id":"lab-z-1","text":"Na o\u0142tarzu pozosta\u0142 gliniany puchar oraz br\u0105zowa inskrybcja.","options":[{"text":"Przeczytaj inskrybcj\u0119.","next":"inscription-1"},{"text":"We\u017a gliniany puchar.","next":"clay-cup-1","set":["clay-cup"]},{"text":"Powr\xf3\u0107 do miejsca w kt\xf3rym by\u0142e\u015b","next":"lab-2"}]},{"conditions":["clay-cup"],"id":"lab-z-1","text":"Na o\u0142tarzu pozosta\u0142 z\u0142oty puchar oraz br\u0105zowa inskrybcja.","options":[{"text":"Przeczytaj inskrybcj\u0119.","next":"inscription-1"},{"text":"We\u017a z\u0142oty puchar.","next":"golden-cup-1","set":["golden-cup"]},{"text":"Powr\xf3\u0107 do miejsca w kt\xf3rym by\u0142e\u015b","next":"lab-2"}]},{"id":"lab-z-1","text":"Dochodzisz do miejsca kt\xf3re na pierwszy rzut oka przypomina o\u0142tarz. Na murze wisi symbol przypominaj\u0105cy krzy\u017c. Wyykonany jest on z marmuru. Dooko\u0142a le\u017c\u0105 kwiaty najr\xf3\u017cniejszych gatunk\xf3w.\\n\\nNa \u015brodku o\u0142tarzu le\u017cy br\u0105zowa inskrybcja. Dostrzegasz tak\u017ce dwa puchary, ka\u017cdy z nich le\u017cy na kamiennej p\u0142ycie. Pierwszy puchar jest wykonany ze z\u0142ota i jest ozdobiony licznymi klejnotami. Drugi jest mniejszy i jest wykonany z gliny. Nie ma on \u017cadnych ozd\xf3b.","options":[{"text":"Przeczytaj inskrybcj\u0119.","next":"inscription-1"},{"text":"We\u017a z\u0142oty puchar.","next":"golden-cup-1","set":["golden-cup"]},{"text":"We\u017a gliniany puchar.","next":"clay-cup-1","set":["clay-cup"]},{"text":"Powr\xf3\u0107 do miejsca w kt\xf3rym by\u0142e\u015b","next":"lab-2"}]},{"id":"clay-cup-1","text":"Podnosisz gliniany puchar. Dostrzegasz pod nim ma\u0142\u0105 fiolke z napisem ANTIDOTUM. Wewn\u0105trz niej znajduj\u0119 si\u0119 czarna substancja.","options":[{"text":"We\u017a antidotum.","next":"lab-z-1","set":["antidote"]},{"text":"Wyrzu\u0107 antidotum.","next":"lab-z-1"}]},{"id":"golden-cup-1","text":"W momencie w kt\xf3rym podnios\u0142e\u015b z\u0142oty puchar, kamienna p\u0142yta ruszy\u0142a si\u0119. Nim zorientowa\u0142e\u015b si\u0119 co si\u0119 dzieje, ziemia zapad\u0142a si\u0119 pod twoimi stopami i zacz\u0105\u0142e\u015b spada\u0107 w przepa\u015b\u0107.\\n\\n Uderzy\u0142e\u015b o zimn\u0105 pod\u0142og\u0119. Rozgl\u0105dasz si\u0119 dooko\u0142a. Znajdujesz si\u0119 w ciemnej komnacie i ledwo dostrzegasz \u015bciany. Jedyne \u017ar\xf3d\u0142o \u015bwiat\u0142a dociera z otworu z kt\xf3rego spad\u0142e\u015b.\\n\\nNagle s\u0142yszysz zgrzyt i dostrzegasz \u017ce jedna ze \u015bcian posuwa si\u0119 powoli w twoj\u0105 stron\u0119. Je\u015bli nic nie zrobisz, zostaniesz zgnieciony!","options":[{"text":"Spr\xf3buj wspi\u0105\u0107 si\u0119 na g\xf3re.","random":[{"weight":1,"next":"golden-cup-2"},{"weight":1,"next":"golden-cup-3"}]},{"text":"Pom\xf3dl si\u0119 o cud.","next":"golden-cup-4"}]},{"id":"golden-cup-2","text":"Pr\xf3bujesz wspi\u0105\u0107 si\u0119 na g\xf3re lecz wszystkie \u015bciany s\u0105 zbyt g\u0142adkie by si\u0119 po nich wspina\u0107. Czekasz a\u017c ruchoma \u015bciana si\u0119 do ciebie zbli\u017cy, nast\u0119pnie zapieraj\u0105c si\u0119 o ni\u0105 nogami przesuwasz si\u0119 powoli ku g\xf3rze. W ostatniej chwili udaje ci si\u0119 wydosta\u0107 z pu\u0142apki i ledwo uj\u015b\u0107 z \u017cyciem!","next":"lab-z-1"},{"id":"golden-cup-3","text":"Pr\xf3bujesz wspi\u0105\u0107 si\u0119 na g\xf3re lecz wszystkie \u015bciany s\u0105 zbyt g\u0142adkie by si\u0119 po nich wspina\u0107. Czekasz a\u017c ruchoma \u015bciana si\u0119 do ciebie zbli\u017cy, nast\u0119pnie zapieraj\u0105c si\u0119 o ni\u0105 nogami przesuwasz si\u0119 powoli ku g\xf3rze. Niestety twoja noga si\u0119 po\u015blizgne\u0142a i spadasz spowrotem na sam d\xf3\u0142. Nie mo\u017cesz ju\u017c nic innego zrobi\u0107 ni\u017c czeka\u0107 na swoj\u0105 \u015bmier\u0107.","next":"game-over"},{"id":"golden-cup-4","text":"Modlisz si\u0119 o cud. Zgrzyt \u015bciany staje si\u0119 coraz g\u0142o\u015bniejszy. Modlisz si\u0119 o przebaczenie twoich grzech\xf3w. Ruchoma \u015bciana jest tu\u017c przy tobie. U\u015bwiadamiasz sobie \u017ce tw\xf3j los jest rezultatem twojej chciwo\u015bci i nie mo\u017cesz ju\u017c nic z tym zrobi\u0107.","next":"game-over"},{"id":"lab-p-1","text":"Pod\u0105\u017casz \u015bcie\u017ck\u0105 a\u017c natrafiasz na co\u015b nietypowego. Przed tob\u0105 dostrzegasz kilkadziesi\u0105t dziur w murach rozprowadzone nieregularnie na twojej wysoko\u015bci. Pod\u0142oga jest zape\u0142niona czym\u015b co wygl\u0105da jak kamienne p\u0142yty dociskowe. To chyba jest pu\u0142apka!","options":[{"text":"Uwa\u017cnie nadepnij na pierwsz\u0105 p\u0142yt\u0119 dociskow\u0105","next":"lab-p-2"},{"text":"Przebiegnij przez przej\u015bcie","random":[{"weight":1,"next":"lab-p-3"},{"weight":2,"next":"lab-p-4"}]},{"text":"Zawr\xf3\u0107","next":"lab-2"}]},{"id":"lab-p-2","text":"Nadeptujesz lekko nog\u0105 na p\u0142yt\u0119 dociskow\u0105 i natychmiast j\u0105 cofasz. Ze wszystkich dziur wystrzeliwuj\u0105 kolce. Jedne z nich upad\u0142 ku twojej nodze. Ostrosznie bierzesz go do r\u0119ki aby zbada\u0107. Na jednym ko\u0144cu dostrzegasz \u017c\xf3\u0142t\u0105 i lepk\u0105 substancj\u0119.","options":[{"text":"Przebiegnij przez przej\u015bcie","random":[{"weight":1,"next":"lab-p-3"},{"weight":2,"next":"lab-p-4"}]},{"text":"Zawr\xf3\u0107","next":"lab-2"}]},{"id":"lab-p-3","text":"Biegniesz przez przej\u015bcie i na koniec rzucasz si\u0119 na prz\xf3d. Wyl\u0105dowa\u0142e\u015b na ziemi. Obracasz si\u0119 \u017ceby zobaczy\u0107 jak wszystkie kolce wystrzeliwuj\u0105 nie natrafiaj\u0105c na \u017caden cel, lepiej nie wraca\u0107 t\u0105 drog\u0105. Ogl\u0105dasz siebie szukaj\u0105c wbitych kolc\xf3w ale wygl\u0105da na to \u017ce nic ci si\u0119 nie sta\u0142o.","next":"lab-p-7"},{"id":"lab-p-4","text":"Biegniesz przez przej\u015bcie i na koniec rzucasz si\u0119 na prz\xf3d. Wyl\u0105dowa\u0142e\u015b na ziemi. Obracasz si\u0119 \u017ceby zobaczy\u0107 jak wszystkie kolce wystrzeliwuj\u0105 nie natrafiaj\u0105c na \u017caden cel, lepiej nie wraca\u0107 t\u0105 drog\u0105. Ogl\u0105dasz siebie szukaj\u0105c wbitych kolc\xf3w i z przera\u017ceniem znajdujesz jeden na swojej stopie.","options":[{"consumes":["antidote"],"text":"Wypij antidotum","next":"lab-p-5"},{"text":"Id\u017a dalej","next":"lab-p-6"}]},{"id":"lab-p-5","text":"Wypijasz antidotum. W ustach pozosta\u0142 gorzki smak ale odrazu poczu\u0142e\u015b si\u0119 lepiej.","next":"lab-p-7"},{"id":"lab-p-6","text":"Pod\u0105\u017casz drog\u0105 dalej lecz po chwili twoje cia\u0142o zaczyna dr\u0119twie\u0107 Upadasz na ziemie i tracisz przytomno\u015b\u0107.","next":"game-over"},{"conditions":["hidden-path"],"id":"lab-p-7","text":"\u015alepy zau\u0142ek przesta\u0142 by\u0107 \u015blepym zau\u0142kiem po tym jak znalaz\u0142e\u015b ukryte przej\u015bcie. Pod \u015bcian\u0105 le\u017cy szkielet cz\u0142owieka. Jak wida\u0107 by\u0142e\u015b od niego sprytniejszy.","options":[{"text":"Przeszukaj szkielet","next":"lab-p-8"},{"text":"Przejd\u017a ukrytym przej\u015bciem","next":"lab-p-10"}]},{"id":"lab-p-7","text":"Dochodzisz do \u015blepego zau\u0142ku. Pod \u015bcian\u0105 le\u017cy szkielet cz\u0142owieka. Widocznie nie jeste\u015b pierwszy kt\xf3ry tutaj zaszed\u0142.","options":[{"text":"Przeszukaj szkielet","next":"lab-p-8"},{"text":"Odpocznij","next":"lab-p-9"}]},{"conditions":["bandages"],"id":"lab-p-8","text":"Szkielet ubrany jest w star\u0105 i zniszczon\u0105 odzie\u017c. Wzi\u0105\u0142e\u015b od niego banda\u017ce. W jego sk\xf3rzanej tunice znajduje si\u0119 ju\u017c tylko pergamin z tekstem.","options":[{"text":"Przeczytaj pergamin","next":"poem-1"},{"text":"Zostaw szkieleta.","next":"lab-p-7"}]},{"id":"lab-p-8","text":"Szkielet ubrany jest w star\u0105 i zniszczon\u0105 odzie\u017c. W jego sk\xf3rzanej tunice znajdujesz banda\u017ce oraz pergamin z tekstem.","options":[{"text":"We\u017a banda\u017ce","next":"lab-p-8","set":["bandages"]},{"text":"Przeczytaj pergamin","next":"poem-1"},{"text":"Zostaw szkieleta.","next":"lab-p-7"}]},{"id":"lab-p-9","text":"Nie maj\u0105c pomys\u0142u nad dalszym rozwi\u0105zaniem siadasz na ziemii opieraj\u0105c si\u0119 o mur. Poczu\u0142e\u015b \u017ce jedna z cegie\u0142 nie jest przymocowana do muru i le\u017cy lu\u017ano. Naciskasz j\u0105.\\n\\nS\u0142yszysz zgrzyt mechanizm\xf3w i nagle ca\u0142y fragment muru osuwa si\u0119 wg\u0142\u0105b ziemii. Ods\u0142ania on ukryte przej\u015bcie.","next":"lab-p-7","set":["hidden-path"]},{"id":"lab-p-10","text":"Idziesz ukrytym przej\u015bciem i dochodzisz z powrotem do punktu startowego. Zrobi\u0142e\u015b okr\u0105\u017cenie!","next":"lab-2"},{"conditions":["blade-blocking"],"id":"lab-w-1","text":"Id\u0105c \u015bcie\u017ck\u0105 natrafi\u0142e\u015b na ogromne ostrze kt\xf3re utkne\u0142o w szkielecie. Przej\u015bcie jest zablokowane!","options":[{"not":["stone-key"],"text":"Podnie\u015b kamienny klucz.","next":"lab-w-9","set":["stone-key"]},{"not":["sword"],"text":"We\u017a miecz od szkieleta.","next":"lab-w-8","set":["sword"]},{"text":"Zawr\xf3\u0107","next":"lab-2"}]},{"id":"lab-w-1","text":"Id\u0105c \u015bcie\u017ck\u0105 natrafi\u0142e\u015b na ogromne ostrze blokuj\u0105ce przej\u015bcie, kt\xf3re za pomoc\u0105 mechanizmu podnosi si\u0119 i spada bez przerwy. Uderzenie takiego ostrza wydaj\u0119 si\u0119 by\u0107 bardzo zab\xf3jcze lecz podnosi si\u0119 wolno przez co daje du\u017c\u0105 szanse na przej\u015bcie.","options":[{"text":"Spr\xf3buj przej\u015b\u0107 pod ostrzem.","next":"lab-w-2"},{"text":"Zawr\xf3\u0107","next":"lab-2"}]},{"id":"lab-w-2","text":"Udaje ci si\u0119 przeskoczy\u0107 na drug\u0105 stron\u0119 w jednym kawa\u0142ku tu\u017c zanim ostrze opad\u0142o. Pod\u0105\u017casz dalej \u015bcie\u017ck\u0105.","next":"lab-w-3"},{"conditions":["stone-key"],"id":"lab-w-3","text":"Dochodzisz do miejsca gdzie sta\u0142 szkielet lecz jego ju\u017c nie ma. Zamiast tego znajdujesz pergamin le\u017c\u0105cy na ziemi.","options":[{"text":"Przyczytaj pergamin","next":"note-1"},{"text":"Zawr\xf3c","next":"lab-2"}]},{"id":"lab-w-3","text":"Na ko\u0144cu \u015bcie\u017cki spotykasz stoj\u0105cego szkieleta. Nosi on czarn\u0105 poniszczon\u0105 zbroje oraz jednor\u0119czny miecz. W miejsce jego oczu widzisz ma\u0142e czerwone p\u0142omyki. Na tw\xf3j widok wyci\u0105gn\u0105\u0142 miecz w twoj\u0105 stron\u0119 i orzek\u0142:\\n\\n\\"Zm\u0119czony w\u0119drowca zbli\u017ca si\u0119 do ko\u0144ca swojej \u015bcie\u017cki. Odpowiedz mi uwa\u017cnie albowiem twoja odpowied\u017a przes\u0105dzi o twoim losie. Co jest potomstwem cierpienia i czasu?\\"","options":[{"text":"\\"Natura\\"","next":"lab-w-5"},{"text":"\\"Pycha\\"","next":"lab-w-5"},{"text":"\\"Rozs\u0105dek\\"","next":"lab-w-4","set":["stone-key"]},{"text":"\\"O co ci chodzi?\\"","next":"lab-w-5"}]},{"id":"lab-w-4","text":"Szkielet wydaje si\u0119 zadowolony z twojej odpowiedzi. Chowa sw\xf3j miecz i przekazuje ci kamienny klucz, dodaj\u0105c \\"Tylko kamienny klucz mo\u017ce otworzy\u0107 kamienne drzwi\\"","options":[{"text":"\\"Czy mog\u0119 te\u017c wzi\u0105\u0107 tw\xf3j miecz?\\"","next":"lab-w-5"},{"text":"Wr\xf3\u0107 do miejsca z kamienn\u0105 rze\u017ab\u0105","next":"lab-2"}]},{"id":"lab-w-5","text":"Ognie w oczach szkieleta zapali\u0142y si\u0119 w gniewie. Natychmiast przymierza si\u0119 on aby odci\u0105\u0107 ci g\u0142ow\u0119 jednym ci\u0119ciem miecza.","options":[{"text":"\\"Hej, st\xf3j! Mo\u017cemy si\u0119 jeszcze dogada\u0107!\\"","next":"lab-w-12"},{"text":"Uciekaj","random":[{"weight":3,"next":"lab-w-6"},{"weight":1,"next":"lab-w-7"}]}]},{"conditions":["stone-key"],"id":"lab-w-6","text":"Obracasz si\u0119 by uciec gdy nagle poczu\u0142e\u015b mocne uderzenie na plecach. Przez adrenalin\u0119 nie czujesz \u017cadnego b\xf3lu, twoim jedynym celem jest prze\u017cycie.\\n\\nZrywasz si\u0119 do ucieczki. Biegniesz przej\u015bciem z kt\xf3rego przyszed\u0142e\u015b a\u017c natrafiasz na znajome ogromne ostrze. Nie zastanawiaj\u0105c si\u0119 d\u0142u\u017cej, przeskakujesz pod nim. Sekund\u0119 p\xf3\u017cniej s\u0142yszysz g\u0142o\u015bny zgrzyt ko\u015bci. Obracasz si\u0119 aby ujrze\u0107 ogromn\u0105 mas\u0119 metalu kt\xf3ra opad\u0142a na goni\u0105cego ci\u0119 szkieleta. Wydaje si\u0119 on by\u0107 martwy. \\n\\n Gdy zagro\u017cenie mine\u0142o, dopiero teraz poczu\u0142e\u015b silny b\xf3l w plecach. Czujesz jak ciep\u0142a kew sp\u0142ywa ci po sk\xf3rze. Je\u015bli nic nie zrobisz to wykrwawisz si\u0119 na \u015bmier\u0107!","set":["bleeding","blade-blocking"],"options":[{"text":"We\u017a miecz od szkieleta.","next":"lab-w-10"},{"consumes":["bandages"],"text":"U\u017cyj banda\u017cu","next":"lab-w-11"},{"text":"Powr\xf3\u0107 do punktu z kamienn\u0105 rze\u017ab\u0105","next":"lab-w-10"}]},{"id":"lab-w-6","text":"Obracasz si\u0119 by uciec gdy nagle poczu\u0142e\u015b mocne uderzenie na plecach. Przez adrenalin\u0119 nie czujesz \u017cadnego b\xf3lu, twoim jedynym celem jest prze\u017cycie.\\n\\nZrywasz si\u0119 do ucieczki. Biegniesz przej\u015bciem z kt\xf3rego przyszed\u0142e\u015b a\u017c natrafiasz na znajome ogromne ostrze. Nie zastanawiaj\u0105c si\u0119 d\u0142u\u017cej, przeskakujesz pod nim. Sekund\u0119 p\xf3\u017cniej s\u0142yszysz g\u0142o\u015bny zgrzyt ko\u015bci. Obracasz si\u0119 aby ujrze\u0107 ogromn\u0105 mas\u0119 metalu kt\xf3ra opad\u0142a na goni\u0105cego ci\u0119 szkieleta. Wydaje si\u0119 on by\u0107 martwy. Z jego r\u0119ki wypad\u0142 kamienny klucz.\\n\\n Gdy zagro\u017cenie mine\u0142o, dopiero teraz poczu\u0142e\u015b silny b\xf3l w plecach. Czujesz jak ciep\u0142a kew sp\u0142ywa ci po sk\xf3rze. Je\u015bli nic nie zrobisz to wykrwawisz si\u0119 na \u015bmier\u0107!","set":["blade-blocking"],"options":[{"text":"Podnie\u015b kamienny klucz.","next":"lab-w-10"},{"text":"We\u017a miecz od szkieleta.","next":"lab-w-10"},{"consumes":["bandages"],"text":"U\u017cyj banda\u017cu","next":"lab-w-11"},{"text":"Powr\xf3\u0107 do punktu z kamienn\u0105 rze\u017ab\u0105","next":"lab-w-10"}]},{"conditions":["stone-key"],"id":"lab-w-7","text":"Zrywasz si\u0119 do ucieczki. Biegniesz przej\u015bciem z kt\xf3rego przyszed\u0142e\u015b a\u017c natrafiasz na znajome ogromne ostrze. Nie zastanawiaj\u0105c si\u0119 d\u0142u\u017cej, przeskakujesz pod nim. Sekund\u0119 p\xf3\u017cniej s\u0142yszysz g\u0142o\u015bny zgrzyt ko\u015bci. Obracasz si\u0119 aby ujrze\u0107 ogromn\u0105 mas\u0119 metalu kt\xf3ra opad\u0142a na goni\u0105cego ci\u0119 szkieleta. Wydaje si\u0119 on by\u0107 martwy.","set":["blade-blocking"],"options":[{"text":"Podnie\u015b kamienny klucz.","next":"lab-w-9","set":["stone-key"]},{"text":"We\u017a miecz od szkieleta.","next":"lab-w-8","set":["sword"]},{"text":"Powr\xf3\u0107 do punktu z kamienn\u0105 rze\u017ab\u0105","next":"lab-2"}]},{"id":"lab-w-7","text":"Zrywasz si\u0119 do ucieczki. Biegniesz przej\u015bciem z kt\xf3rego przyszed\u0142e\u015b a\u017c natrafiasz na znajome ogromne ostrze. Nie zastanawiaj\u0105c si\u0119 d\u0142u\u017cej, przeskakujesz pod nim. Sekund\u0119 p\xf3\u017cniej s\u0142yszysz g\u0142o\u015bny zgrzyt ko\u015bci. Obracasz si\u0119 aby ujrze\u0107 ogromn\u0105 mas\u0119 metalu kt\xf3ra opad\u0142a na goni\u0105cego ci\u0119 szkieleta. Wydaje si\u0119 on by\u0107 martwy. Z jego r\u0119ki wypad\u0142 kamienny klucz.","set":["blade-blocking"],"options":[{"text":"We\u017a miecz od szkieleta.","next":"lab-w-8","set":["sword"]},{"text":"Powr\xf3\u0107 do punktu z kamienn\u0105 rze\u017ab\u0105","next":"lab-2"}]},{"id":"lab-w-8","text":"Podnosisz miecz. Mimo \u017ce jest antyczny, wydaje si\u0119 by\u0107 bardzo ostry.","options":[{"not":["stone-key"],"text":"Podnie\u015b kamienny klucz.","next":"lab-w-9","set":["stone-key"]},{"text":"Powr\xf3\u0107 do punktu z kamienn\u0105 rze\u017ab\u0105","next":"lab-2"}]},{"id":"lab-w-9","text":"Bierzesz do r\u0119ki wykuty kamienny klucz.","options":[{"not":["sword"],"text":"We\u017a miecz od szkieleta.","next":"lab-w-8","set":["sword"]},{"text":"Powr\xf3\u0107 do punktu z kamienn\u0105 rze\u017ab\u0105","next":"lab-2"}]},{"id":"lab-w-10","text":"Mocny b\xf3l uniemo\u017cliwia ci wykonanie tej czynno\u015bci. Opadasz na ziemi\u0119. Nie masz si\u0142y wsta\u0107. Pozostajesz w takim stanie jeszcze przez kilka godzin a\u017c wko\u0144cu tracisz przytomno\u015b\u0107.","next":"game-over"},{"id":"lab-w-11","text":"Owijasz banda\u017c wok\xf3\u0142 twojego tu\u0142owia, mocna zaciskaj\u0105c ran\u0119. Czujesz si\u0119 o wiele lepiej.","options":[{"text":"Podnie\u015b kamienny klucz.","next":"lab-w-9","set":["stone-key"]},{"text":"We\u017a miecz od szkieleta.","next":"lab-w-8","set":["sword"]},{"text":"Powr\xf3\u0107 do punktu z kamienn\u0105 rze\u017ab\u0105","next":"lab-2"}]},{"id":"lab-w-12","text":"Zanim sko\u0144czy\u0142e\u015b wymawia\u0107 zdanie, szkielet odci\u0105\u0142 ci g\u0142ow\u0119.","next":"game-over"},{"id":"statue","text":"Na podstawie rze\u017aby dostrzegasz wykuty i ledwo czytelny napis. Udaje ci si\u0119 odczyta\u0107 zdanie \\"Bogini Sprawiedliwo\u015bci Patrzy\\".\\n\\nPo drugiej stronie rze\u017aby znajdujesz co\u015b co przypomina dziur\u0119 do klucza.","options":[{"consumes":["stone-key"],"text":"W\u0142\xf3\u017c kamienny klucz do otworu.","next":"ghost-1"},{"text":"Wr\xf3\u0107.","next":"lab-2"}]},{"conditions":["introduced"],"id":"ghost-1","text":"M\u0119\u017cczyzna kiwa g\u0142ow\u0105, daj\u0105c ci znak na kontynuowanie konwersacji.","options":[{"not":["who"],"text":"\\"Kim jeste\u015b?\\"","next":"ghost-2","set":["who"]},{"not":["what"],"text":"\\"Co ty tu robisz?\\"","next":"ghost-5","set":["what"]},{"not":["where"],"text":"\\"Co to za miejsce?\\"","next":"ghost-13","set":["where"]}]},{"id":"ghost-1","text":"S\u0142yszysz zgrzyt mechanizm\xf3w i nagle rze\u017aba odsuwa si\u0119 powoli od\u0142aniaj\u0105c schody do podziemnej komnaty. Na \u015bcianach wisz\u0105 liczne zapalone pochodnie..\\n\\nWchodzisz do \u015brodka i dostrzegasz m\u0119\u017cczyzn\u0119 siedz\u0105cego na kamiennej \u0142awie. Ubrany jest on w szlachecki str\xf3j. Nie zauwa\u017casz przy nim \u017cadnej broni.\\n\\n M\u0119\u017cczyzna podni\xf3s\u0142 wzrok na tw\xf3j widok i orzek\u0142: \\"Na siebem niebiostw! Wko\u0144cu jaka\u015b \u017cywa dusza!\\"","set":["introduced"],"options":[{"not":["who"],"text":"\\"Kim jeste\u015b?\\"","next":"ghost-2","set":["who"]},{"not":["what"],"text":"\\"Co ty tu robisz?\\"","next":"ghost-5","set":["what"]},{"not":["where"],"text":"\\"Co to za miejsce?\\"","next":"ghost-13","set":["where"]}]},{"id":"ghost-2","text":"\\"Ah! Gdzie moje maniery! M\xf3w mi Caspiro. Tak, ten s\u0142ynny poszukiwacz skarb\xf3w.","options":[{"text":"\\"Nigdy o tobie nie s\u0142ysza\u0142em...\\"","next":"ghost-3"},{"text":"\\"Mam inne pytanie...\\"","next":"ghost-1"}]},{"id":"ghost-3","text":"\\"Huh? Niespotykane. Nie ma miejsca w ca\u0142ym imperium gdzie s\u0142owo o moich dokonaniach jeszcze nie dosz\u0142o... W\u0142a\u015bciwie to nie wygl\u0105dasz mi na Ezomyjczyka. Kim jeste\u015b?\\"","options":[{"text":"\\"To nie jest wa\u017cne.\\"","next":"ghost-4"},{"text":"\\"Trafi\u0142em tu przez przypadek.\\"","next":"ghost-4"},{"text":"\\"Mam na imi\u0119 Izaro, jestem cesarzem imperium.\\"","next":"ghost-4"}]},{"id":"ghost-4","text":"\\"Jak nie chcesz to nie m\xf3w. Uwielbiam tajemnice!\\"","next":"ghost-1"},{"id":"ghost-5","text":"\\"To samo co ty, szukam szybkiego zarobku. Legenda g\u0142osi \u017ce ukryte s\u0105 tutaj skarby i bogactwa samego cesarza! Niestety przej\u015bcie do tej komnaty zamkne\u0142o si\u0119 za moimi plecami i tutaj utkn\u0105\u0142em. Na szcz\u0119\u015bcie znalaz\u0142em przej\u015bcie kt\xf3re mo\u017ce prowadzi\u0107 do wyj\u015bcia albo nawet do z\u0142ota! Niestety nie jestem w stanie sam tego otworzy\u0107.\\"\\n\\nM\u0119\u017cczyzna wskaza\u0142 palcem na przeciwn\u0105 \u015bcian\u0119 gdzie znajdowa\u0142a si\u0119 drewniana brama. Drewno by\u0142o zwietrza\u0142e i widoczne by\u0142y \u015blady po kornikach. Wydaj\u0119 ci si\u0119 \u017ce jeden m\u0119\u017cczyzna mo\u017ce z \u0142atwo\u015bci\u0105 j\u0105 wywa\u017cy\u0107.","options":[{"text":"\\"Pomog\u0119 ci otworzy\u0107 bram\u0119!\\"","next":"ghost-9"},{"text":"\\"Jak d\u0142ugo by\u0142e\u015b tutaj uwi\u0119ziony?\\"","next":"ghost-6"},{"text":"\\"Jak dok\u0142adnie tutaj si\u0119 dosta\u0142e\u015b?\\"","next":"ghost-7"}]},{"id":"ghost-6","text":"\\"Ju\u017c dawno straci\u0142em rachub\u0119 czasu. Czuje jakby to by\u0142a wieczno\u015b\u0107!\\"","options":[{"text":"\\"Wi\u0119c pora si\u0119 wko\u0144cu st\u0105d wydosta\u0107! Pomog\u0119 ci otworzy\u0107 bram\u0119!\\"","next":"ghost-9"},{"text":"\\"Jak dok\u0142adnie tutaj si\u0119 dosta\u0142e\u015b?\\"","next":"ghost-7"}]},{"id":"ghost-7","text":"\\"Co to za pytanie?? Tak samo jak ty!\\"","options":[{"text":"\\"Wybacz! Pomog\u0119 ci otworzy\u0107 ta bram\u0119!\\"","next":"ghost-9"},{"text":"\\"Chce zna\u0107 ca\u0142a histori\u0119 ze szczeg\xf3\u0142ami!\\"","next":"ghost-8"}]},{"id":"ghost-8","text":"\\"Hmm... Niech pomy\u015bl\u0119... Po drodz\u0119 musia\u0142em rozwi\u0105za\u0107 kilka zagadek z symbolami. Nast\u0119pnie znalaz\u0142em ukryt\u0105 d\u017awignie kt\xf3ra ods\u0142oni\u0142a przej\u015bcie do tej komnaty.\\"","options":[{"text":"\\"To brzmi prawid\u0142owo. Pomog\u0119 ci otworzy\u0107 t\u0105 bram\u0119!\\"","next":"ghost-9"},{"text":"\\"Co\u015b si\u0119 chyba nie zgadza...\\"","next":"ghost-10"}]},{"id":"ghost-9","text":"Podchodzisz do bramy i dostrzegasz metalow\u0105 klamk\u0119. Naciskasz j\u0105. Brama nie stawia wi\u0119kszego oporu. Za bram\u0105 ujawnia si\u0119 czarna otch\u0142a\u0144. Po plecach przechodzi ci dreszcz. Nagle twarz m\u0119\u017cczyzny sta\u0142a si\u0119 bia\u0142a jak \u015bnieg i wydaje g\u0142o\u015bny i nienaturalny krzyk:\\n\\n\\"MOI PRZODKOWIE! PRZYJMIJCI\u0118 T\u0104 OTO OFIAR\u0118 KT\xd3R\u0104 WAM SK\u0141ADAM! B\u0141AGAM WAS O PRZEBACZENIE!\\"\\n\\nW mgnieniu oka komnata wype\u0142ni\u0142a si\u0119 strasznymi upiorami kt\xf3re rozszarpa\u0142y ci\u0119 na kawa\u0142ki.","next":"game-over"},{"id":"ghost-10","text":"\\"Czy ty mnie o co\u015b oskar\u017casz?\\"\\n\\n M\u0119\u017cczyzna wstaje wyra\u017anie rozgniewany i idzie w twoim kierunku z zaci\u015bni\u0119tymi pi\u0119\u015bniami.","options":[{"text":"\\"Nie mia\u0142em nic z\u0142ego na my\u015bli.\\"","next":"ghost-11"},{"text":"Rzu\u0107 si\u0119 na m\u0119\u017cczyzn\u0119","next":"ghost-12"},{"conditions":["sword"],"text":"Wbij miecz w serce m\u0119\u017cczyzny","next":"ghost-14"}]},{"id":"ghost-11","text":"M\u0119\u017cczyzna z\u0142apa\u0142 ci\u0119 za szyj\u0119 i podni\xf3s\u0142 do g\xf3ry. Probujesz si\u0119 wyrwa\u0107 jednak jego ucisk jest nienaturnie silny. Zosta\u0142e\u015b uduszony.","next":"game-over"},{"id":"ghost-12","text":"Rzucasz si\u0119 na m\u0119\u017cczyzn\u0119 lecz chybiasz. Wydaje ci si\u0119 \u017ce przez przelecia\u0142e\u015b prosto przez niego jakby by\u0142 powietrzem. Nim zorientowa\u0142e\u015b si\u0119 co si\u0119 sta\u0142o, m\u0119\u017cczyzna z\u0142apa\u0142 ci\u0119 za szyj\u0119 i podni\xf3s\u0142 do g\xf3ry. Probujesz si\u0119 wyrwa\u0107 jednak jego ucisk jest nienaturnie silny. Zosta\u0142e\u015b uduszony.","next":"game-over"},{"id":"ghost-13","text":"\\"To jest Pa\u0144ski Labirynt! Zosta\u0142 stworzony po to aby wybra\u0107 godnego nast\u0119pce tronu. Ci kt\xf3rzy nie s\u0105 jego godni, gin\u0105 w m\u0119czarniach... uh.. przynajmniej tak g\u0142osz\u0105 legendy. Jak tutaj trafi\u0142e\u015b nie wiedz\u0105c co to za miejsce!\\"","options":[{"text":"\\"Mam inne pytanie...\\"","next":"ghost-1"}]},{"id":"ghost-14","text":"Wbijasz miecz w serce m\u0119\u017cczyzny. Miecz przechodzi w cia\u0142o m\u0119\u017cczyzny bez \u017cadnego oporu. Nie dostrzegasz \u017cadnej krwi, jednak m\u0119\u017cczyzna wyda\u0142 g\u0142o\u015bny i nienaturalny krzyk tak \u017ce instynktownie zas\u0142aniasz swoje uszy. M\u0119\u017cczyzna sta\u0142 si\u0119 bia\u0142y jak \u015bnieg i nagle... wyparowa\u0142 w powietrze. Tak jakby go nigdy nie by\u0142o.\\n\\n Zamiast niego pojawi\u0142o si\u0119 ber\u0142o. Nie mia\u0142o prawie \u017cadnych ozd\xf3b ale z jakiego\u015b powodu emanowa\u0142o pot\u0119g\u0105. Nagle us\u0142ysza\u0142e\u015b znajomy g\u0142os w swojej g\u0142owie, ten sam g\u0142os kt\xf3ry przywita\u0142 ci\u0119 przed wej\u015bciem do labiryntu:\\n\\n\\"To w\u0142adca wzmacnia ber\u0142o. Nie na odwr\xf3t.\\"","next":"end-1"},{"id":"end-1","text":"Nagle wszystko znikne\u0142o. Nie ma ju\u017c komnaty. Nie ma ju\u017c labiryntu.\\n\\nZnalaz\u0142e\u015b si\u0119 w znajomym miejscu, twoim domu. Zastanawiasz si\u0119 czy to wszystko to by\u0142 sen. Co\u015b ci\u0105\u017cy ci na d\u0142oni. Jest to ber\u0142o. To jednak nie by\u0142 sen. U\u015bmiechasz si\u0119 my\u015bl\u0105c jak\u0105 wspania\u0142\u0105 przygod\u0119 w\u0142a\u015bnie prze\u017cy\u0142e\u015b.","next":"game-end"},{"id":"end-2","text":"Wyruszasz w stron\u0119 g\xf3r. Idziesz tak przez oko\u0142o godzin\u0119. Martwisz si\u0119 czy dotrzesz do cywilizacji. Nagle sceneria przed oczami si\u0119 zmieni\u0142a. Znajdujesz si\u0119 w znajomym miejscu, twoim domie. Wnioskujesz \u017ce musia\u0142e\u015b niechc\u0105cy przysn\u0105\u0107 i to wszystko to by\u0142 tylko sen.","options":[{"text":"Zagraj jeszcze raz.","next":"start"}]},{"id":"inscription-1","text":"\\"Zwyczaj Pa\u0144skiej pr\xf3by by\u0142 podtrzymywany przez lata przez za\u0142o\u017cycielskie Imperium. Nast\u0119pca Veruso, Caspiro, by\u0142 nisko urodzonym legionist\u0105, samotnym ocala\u0142ym z labiryntu, kt\xf3ry odebra\u0142 \u017cycie ka\u017cdemu wysoko urodzonemu przeciwnikowi, w tym jedynemu synowi Veruso.\\n\\nCaspiro okaza\u0142 si\u0119 by\u0107 w ka\u017cdym calu tym cesarzem, kt\xf3rym by\u0142 Veruso.\\n\\nNiestety, Pa\u0144ski Labirynt zosta\u0142 skorumpowany przez tych, kt\xf3rzy z pr\xf3\u017cno\u015bci\u0105 uwa\u017cali, \u017ce ich krew jest cenniejsza ni\u017c ich imperium. Samolubna krew rodzi samolubne czasy, a Imperium zap\u0142aci\u0142o za to swoj\u0105 w\u0142asn\u0105 krwi\u0105. Noc\u0105 tysi\u0105ca wst\u0105\u017cek.\\n\\nTo ju\u017c koniec. Ja, Izaro Phrecius, oddam nas w r\u0119ce sprawiedliwo\u015bci. Zbuduj\u0119 najwi\u0119kszy Labirynt Pa\u0144ski w historii Azmerii, a m\xf3j nast\u0119pca zostanie wybrany przez sam\u0105 Bogini\u0119.\\n\\nTylko wtedy, gdy Pa\u0144ski Labirynt b\u0119dzie zalany samolubn\u0105 krwi\u0105, prawdziwy przyw\xf3dca mo\u017ce wst\u0105pi\u0107 na tron.\\"\\n\\n- Cesarz Izaro Phrecius","options":[{"text":"Wr\xf3\u0107.","next":"lab-z-1"}]},{"id":"poem-1","text":"\\"Syn Ezomira spotka\u0142 Syna Sarn.\\nNa drodze do tronu cesarskiego.\\nWieczny zaoferowa\u0142 sw\xf3j spryt,\\nJego oczy i uszy, kupione i op\u0142acone.\\nEzomyjczyk zaoferowa\u0142 swoj\u0105 si\u0142\u0119,\\nJego miecz, zdobyty na arenie.\\nPakt zosta\u0142 zawarty,\\nZ Labiryntem jako \u015bwiadkiem.\\nDw\xf3ch m\u0119\u017cczyzn rozdzielonych krwi\u0105.\\nDw\xf3ch ludzi zwi\u0105zanych nadziej\u0105.\\nDw\xf3ch ludzi, i tylko jeden cesarz.\\"","options":[{"text":"Wr\xf3\u0107.","next":"lab-p-8"}]},{"id":"note-1","text":"Noc tysi\u0105ca wst\u0105\u017cek\\nAby przypomnie\u0107 sobie dzie\u0144 tysi\u0105ca p\u0142omieni\\nKiedy Sarn spali\u0142 si\u0119\\nI narodzi\u0142 si\u0119 ponownie.","options":{"text":"Wr\xf3\u0107.","next":"lab-w-3"}},{"id":"game-over","text":"Zgin\u0105\u0142e\u015b \u015bmierci\u0105 tragiczn\u0105. Widocznie to jest zako\u0144czenie na kt\xf3re zaslugujesz.","options":[{"text":"Spr\xf3buj zagra\u0107 jeszcze raz.","next":"start"}]},{"id":"game-end","text":"Przeszed\u0142e\u015b gr\u0119. Gratulacje!","options":[{"text":"Zagraj jeszcze raz.","next":"start"}]},{"id":"todo","text":"Je\u015bli tu doszed\u0142e\u015b to oznacza to \u017ce tu powinna by\u0107 historia ale jej jeszcze nie ma!","next":"start"}]')},,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),n=a(7),s=a.n(n),z=(a(15),a(9)),r=a(2),c=a(3),d=a(1),y=a(5),w=a(4),l=(a(16),a(17),function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={originalText:"",counter:0},i}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t=e.state.counter+1,a=e.state.originalText;e.props.text!==e.state.originalText&&(a=e.props.text,t=0),e.setState({originalText:a,counter:t})}),10)}},{key:"render",value:function(){return o.a.createElement("span",{id:"story-text"},this.state.originalText.slice(0,this.state.counter))}}]),a}(o.a.Component)),p=(a(18),function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).handleClick=i.handleClick.bind(Object(d.a)(i)),i}return Object(c.a)(a,[{key:"handleClick",value:function(e){var t=this;if(e.set&&e.set.forEach((function(e){t.props.onSetFlag(e)})),e.consumes&&e.consumes.forEach((function(e){t.props.onRemoveFlag(e)})),e.next)this.props.onNext(e.next);else if(e.random){var a=0;e.random.forEach((function(e){a+=e.weight}));var i=Math.random()*a;a=0,console.log(i),e.random.some((function(e){return a+=e.weight,i<a&&(t.props.onNext(e.next),!0)}))}}},{key:"checkFlags",value:function(e){var t=this;return!e.some((function(e){return!t.props.checkFlag(e)}))}},{key:"shouldShow",value:function(e){return!(e.conditions&&!this.checkFlags(e.conditions))&&((!e.not||!this.checkFlags(e.not))&&!(e.consumes&&!this.checkFlags(e.consumes)))}},{key:"render",value:function(){var e,t=this;return null==this.props.options?e=[o.a.createElement("span",{className:"option",onClick:this.props.onContinue},"Kontynuuj.")]:(e=[],this.props.options.forEach((function(a,i){t.shouldShow(a)&&e.push(o.a.createElement("span",{key:i,className:"option",onClick:function(){t.handleClick(a)}},a.text))}))),o.a.createElement("div",{id:"options"},e)}}]),a}(o.a.Component)),m=a(8),u=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={node:i.findNode("start"),flags:[]},i.continue=i.continue.bind(Object(d.a)(i)),i.setNode=i.setNode.bind(Object(d.a)(i)),i.setFlag=i.setFlag.bind(Object(d.a)(i)),i.removeFlag=i.removeFlag.bind(Object(d.a)(i)),i.checkFlag=i.checkFlag.bind(Object(d.a)(i)),i}return Object(c.a)(a,[{key:"setNode",value:function(e){var t=this,a=this.findNode(e);a.set&&a.set.forEach((function(e){t.setFlag(e)})),this.setState((function(t){return t.node=a,"start"===e&&(t.flags=[]),t}))}},{key:"findNode",value:function(e){var t=this;return m.find((function(a){return a.id===e&&t.checkConditions(a)}))}},{key:"checkConditions",value:function(e){var t=this;return!e.conditions||!e.conditions.some((function(e){return!t.checkFlag(e)}))}},{key:"setFlag",value:function(e){if(!this.checkFlag(e)){var t=this.state.flags.concat([e]);this.setState((function(e){return e.flags=t,e}))}}},{key:"removeFlag",value:function(e){var t=Object(z.a)(this.state.flags),a=t.indexOf(e);t.splice(a,1),this.setState((function(e){return e.flags=t,e}))}},{key:"checkFlag",value:function(e){return null!=this.state.flags.find((function(t){return t===e}))}},{key:"continue",value:function(){this.state.node.next?this.setNode(this.state.node.next):console.error("Next index not found!")}},{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement("h2",null,"Labirynt RPG"),o.a.createElement(l,{text:this.state.node.text}),o.a.createElement(p,{options:this.state.node.options,onContinue:this.continue,onNext:this.setNode,onSetFlag:this.setFlag,onRemoveFlag:this.removeFlag,checkFlag:this.checkFlag}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.3feeec51.chunk.js.map