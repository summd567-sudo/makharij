// Real recitation audio for the example words.
// Word audio: Quran.com word-by-word recordings. Full ayah: Sheikh Mahmoud Khalil Al-Husary, Al-Mushaf Al-Mu'allim (EveryAyah.com).
window.QA=(function(){
  var DATA=[[["قَالَ",2,30,2],["يَقُولُ",2,8,4],["قِيلَ",2,11,2]],[["ءَأَنذَرْتَهُمْ",2,6,6],["يُؤْمِنُونَ",2,3,2]],[["ٱهْدِنَا",1,6,1],["جِبَاهُهُمْ",9,35,9]],[["نَعْبُدُ",1,5,2],["ٱلْعَـٰلَمِينَ",1,2,4]],[["ٱلْحَمْدُ",1,2,1],["فَٱصْفَحْ",43,89,1],["فَسَبِّحْهُ",50,40,3]],[["غَيْرِ",1,7,5],["تُزِغْ",3,8,3]],[["خَـٰلِدِينَ",2,162,1],["يَخْرُجُ",55,22,1]],[["قُلْ",112,1,1],["وَيَقْطَعُونَ",2,27,8],["خَلَقَ",113,2,4]],[["ٱلْكِتَـٰبُ",2,2,2],["إِيَّاكَ",1,5,1]],[["ٱجْتَبَىٰهُ",16,121,3],["وَٱلْفَجْرِ",89,1,1]],[["ٱلشَّيْطَـٰنُ",2,36,2],["شَهْرُ",2,185,1]],[["يَوْمِ",1,4,2],["عَلَيْهِمْ",1,7,4]],[["ٱلضَّآلِّينَ",1,7,9],["ٱلْأَرْضِ",2,11,7]],[["ٱللَّهِ",1,1,2],["قُلْ",37,18,1]],[["أَنْعَمْتَ",1,7,3],["نَسْتَعِينُ",1,5,4]],[["ٱلرَّحْمَـٰنِ",1,1,3],["رِجَالٌۭ",9,108,17]],[["ٱلصِّرَٰطَ",1,6,2],["مَطْلَعِ",97,5,4]],[["ٱلدِّينِ",1,4,3],["قَدْ",23,1,1]],[["أَنْعَمْتَ",1,7,3],["فِتْنَةٌۭ",2,102,32]],[["ٱلصِّرَٰطَ",1,6,2],["وَٱلْعَصْرِ",103,1,1]],[["زُيِّنَ",3,14,1],["ٱلزَّكَوٰةَ",2,43,4]],[["ٱلْمُسْتَقِيمَ",1,6,3],["نَسْتَعِينُ",1,5,4]],[["ٱلظَّـٰلِمِينَ",2,35,18],["عَظِيمٌۭ",2,7,12]],[["ٱلَّذِينَ",1,7,2],["ذَٰلِكَ",2,2,1]],[["ثُمَّ",2,28,7],["ٱلْكَوْثَرَ",108,1,3]],[["ٱلْفَلَقِ",113,1,4],["يُنفِقُونَ",2,3,8]],[["بِسْمِ",1,1,1],["وَتَبَّ",111,1,5]],[["ٱلْحَمْدُ",1,2,1],["ثُمَّ",2,28,7]],[["وَٱلضُّحَىٰ",93,1,1],["يَوْمِ",1,4,2]]];
  var SURA={1:'الفاتحة',2:'البقرة',3:'آل عمران',9:'التوبة',16:'النحل',23:'المؤمنون',37:'الصافات',43:'الزخرف',50:'ق',55:'الرحمن',89:'الفجر',93:'الضحى',97:'القدر',103:'العصر',108:'الكوثر',111:'المسد',112:'الإخلاص',113:'الفلق'};
  function pad(n,l){n=String(n);while(n.length<l)n='0'+n;return n;}
  function wordUrl(e){return 'https://audio.qurancdn.com/wbw/'+pad(e[1],3)+'_'+pad(e[2],3)+'_'+pad(e[3],3)+'.mp3';}
  function ayahUrl(e){return 'https://everyayah.com/data/Husary_Muallim_128kbps/'+pad(e[1],3)+pad(e[2],3)+'.mp3';}
  function ref(e){return (SURA[e[1]]||('سورة '+e[1]))+': '+e[2];}
  var on=true; try{on=localStorage.getItem('makharij-sound')!=='off';}catch(x){}
  var audio=new Audio(); audio.crossOrigin='anonymous'; audio.preload='auto';
  var token=0, queue=[], done=null, listeners=[], lastUrls=[], unlocked=false, banner=null;
  var SILENT='data:audio/wav;base64,UklGRmQGAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YUAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
  // Phones (iOS Safari especially) only allow sound that starts from a tap. Prime the players on the first tap
  // so later scene audio can start on its own, and ignore the ringer switch where the browser allows it.
  function prime(el){try{el.src=SILENT; var p=el.play(); if(p&&p.then)p.then(function(){if(el.src===SILENT)el.pause();},function(){});}catch(x){}}
  function unlock(){
    if(unlocked)return; unlocked=true;
    try{if(navigator.audioSession)navigator.audioSession.type='playback';}catch(x){}
    if(!api.playingUrl)prime(audio);
  }
  ['pointerdown','touchend','click','keydown'].forEach(function(ev){document.addEventListener(ev,unlock,{capture:true,passive:true});});
  function showBanner(){
    if(banner){banner.hidden=false;return;}
    banner=document.createElement('button'); banner.type='button'; banner.textContent='اضغط هنا لتشغيل الصوت';
    banner.style.cssText='position:fixed;left:50%;transform:translateX(-50%);bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:1000;font:600 15px "IBM Plex Sans Arabic",sans-serif;padding:12px 20px;border-radius:999px;border:0;background:#0F7F6B;color:#fff;box-shadow:0 6px 20px rgba(0,0,0,.25);cursor:pointer';
    banner.onclick=function(){banner.hidden=true; unlocked=false; unlock(); play(lastUrls,null);};
    document.body.appendChild(banner);
  }
  function emit(){listeners.forEach(function(f){try{f(api.playingUrl);}catch(x){}});}
  function finish(my,blocked){ if(my!==token)return; var d=done; done=null; api.playingUrl=null; emit(); if(d)d(blocked); }
  function next(my){
    if(my!==token)return;
    if(!queue.length){finish(my,false);return;}
    var u=queue.shift(); api.playingUrl=u; emit(); audio.src=u;
    audio.onended=function(){setTimeout(function(){next(my);},350);};
    audio.onerror=function(){next(my);};
    var p=audio.play(); if(p&&p.catch)p.catch(function(e){ if(my!==token)return; queue=[]; if(e&&e.name==='NotAllowedError')showBanner(); finish(my,true); });
  }
  function play(urls,cb){stop(); token++; lastUrls=urls.slice(); queue=urls.slice(); done=cb||null; if(banner)banner.hidden=true; next(token);}
  function stop(){token++; queue=[]; done=null; try{audio.pause();}catch(x){} if(api.playingUrl){api.playingUrl=null; emit();}}
  var api={data:DATA,wordUrl:wordUrl,ayahUrl:ayahUrl,ref:ref,play:play,stop:stop,playingUrl:null,
    onChange:function(f){listeners.push(f);},
    prime:prime, showBanner:showBanner,
    isOn:function(){return on;},
    setOn:function(v){on=!!v; try{localStorage.setItem('makharij-sound',on?'on':'off');}catch(x){} if(!on)stop();}};
  return api;
})();
