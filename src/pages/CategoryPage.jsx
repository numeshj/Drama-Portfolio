import React from 'react';
import Gallery from '../components/Gallery';
import { useLanguage } from '../contexts/LanguageContext';

const descriptions = {
  costume: {
    en: `\nThe costume design was based on detailed research into Egyptian royal and common attire. Using archaeological references and historical imagery, costumes were adapted for children. The challenge was to minimize costs while retaining cultural authenticity. Discarded sarees donated by teachers and parents were repurposed into vibrant costumes—cut, layered, and reshaped for decorative trims, belts, and collar pieces. This creative reuse provided authentic yet affordable costumes that perfectly suited the play.`,
    si: `රජුන් හා කුමාරියන්ගේ රාජකීය ඇඳුම් සහ සාමාන්‍ය වැසියන්ගේ ඇඳුම් සොයා බලමින් ළමා නාට්‍යයට ගැලපෙන අයුරින් ඇඳුම් සැලසුම් කරන ලදී. පුරාවිද්‍යා රූප සහ අනාවැකි භාවිතයෙන් නිර්මාණ සකස් කළ අතර අඩු පිරිවැය තබා ගැනීම විශාල අභියෝගයක් විය. ගුරුතුමියන් හා දෙමාපියන්ගෙන් ලැබුණු පරණ සාරි කපා, කලාත්මක ලෙස නැවත සැලසුම් කර වර්ණවත් ඇඳුම් හා අලංකාර caller කොටස් සෑදූහ.`
  },
  
  'background-setup': {
    en: `\nThe stage environment was built using economical methods. Large pyramids, stylized pillars, and a Pharaoh relief were formed from layered cardboard, hardboard, and lightweight foam. Free cardboard was supplied by a local sponsor while wood offcuts came from teachers and parents. The Pharaoh’s sculpted surface was shaped with pulp and foam coating, then painted with sandstone gradients and hieroglyph accents. Fabric scraps and draped recycled sarees added depth, shadow, and movement—proving how resourcefulness can simulate grandeur.`,
    si: `අඩු පිරිවැයකින් නාට්‍යයට අවශ්‍ය කරන පසුතල නිර්මාණය සඳහා සැලසුම් සකස් කරන ලදී. එහිදී එය සකස් කිරීම සඳහා ලී, හාඩ්බෝඩ්, කාඩ්බෝඩ්, සෘජුෆෝම් අවශ්‍ය බව පැහැදිලි විය. ඊජිප්තු පිරමීඩයක හැඩය සකස් කිරීම සඳහා හාඩ්බෝඩ් සහ ලී භාවිතා කළ අතර, විශාල කණු සකස් කිරීම සඳහා කාඩ්බෝඩ් භාවිතා කරන ලදී. අවශ්‍ය කාඩ්බෝඩ් සපයා ගැනීමේදී "Econopack Industries Private Limited" ආයතනයෙන් නොමිලේ සපයන ලදී. පාසලේ ස්වාමීන් වහන්සේගේ අනුග්‍රහය ඇතිව නොමිලේ ලී ලබාගන්නට හැකි විය. වැඩිහිටි දරුවන්, ආදී ශිෂ්‍යයන් සහ දෙමාපියන්ගේ දායකත්වය ඇතිව පසුතලය සකස් කරන ලදී. පාරාවෝ රජෙකුගේ පිළිමය සෘජුෆෝම් මඟින් හැඩ ගන්වා පල්ප් මඟින් ශක්තිමත් කර කෘමීන්ගෙන් හානි වළක්වා නිරතුරුව සැලසුම් කර වර්ණ ගන්වා නිම කරන ලදී. පිරමීඩය වර්ණ ගැන්වීම රාත්‍රීන් කිහිපයක් පාසලේ රැඳී සිදු කළ අතර රංග භාණ්ඩ වර්ණ ගැන්වීමේදී සියලු දරුවන් එක්වූහ. මේ මගින් සහෝදරත්වය, නිර්මාණශීලී චින්තනය සහ කණ්ඩායම්භාවය වැඩි විය. සියල්ලෝම තම හැකියාවන් අනුව රංග පසුබිම් සාර්ථක කිරීමට දායක වීම විශිෂ්ට අත්දැකීමක් විය.`
  },
  practices: {
    en: `\nBalancing academics with rehearsal intensity required discipline. Sessions extended after school, into weekends and holidays. Dialogue timing, choreographed movement, and emotional delivery were iterated repeatedly. Parents provided evening transport and refreshments; teachers coached articulation and expression. This routine forged endurance, collaboration, and confidence across the cast.`,
    si: `අධ්‍යයනය හා වැඩිවේග පුහුණු සමතුලිත කිරීම සඳහා විශේෂිත කලමනාකරණයක් අවශ්‍ය විය. පාසල් අවසන්වූ පසු, සති අන්ත හා නිවාඩු දිනවල දී දිගු පිටවීම් සිදු කළහ. සංවාද කාලය, චාලන හා හැඟීම් නැවත නැවත පුහුණු කරමින් නිවැරදිත්වය ඉහළ දැමූහ. දෙමාපියන් ප්‍රවාහන සහන ලබා දී ගුරුතුමියන් නිවැරදි උච්චාරණය හා ප්‍රකාශනයට උපදේශන කළහ.`
  },
  preparations: {
    en: `\nThe wider preparation phase integrated logistics, artistry, research, and mentoring. Senior students assisted carpentry tasks; art-oriented learners painted architectural motifs and symbolic panels. Parents coordinated sewing assistance, prop repair, and meal rotations. Staff oversight ensured safety, historical tone, and performance quality. Each late evening added layers of polish—transforming scattered ideas into a unified production ecosystem.`,
    si: `මෙම කටයුතු කිරීමේදී පාසලේ වැඩබාලන විදුහල්පති එස්.එම්.එගොඩ ගෙදර මහතා, නියෝජ්‍ය විදුහල්පතිනී දේවිකා නිර්මලී, සහකාර විදුහල්පතිනී නිශාන්ති කුමාරරත්න මහත්මියන් මෙන්ම පාසලේ වැඩ හිඳින ගෞරවනීය ස්වාමීන් වහන්සේලා ඇතුළු සම්පූර්ණ කාර්ය මණ්ඩලයෙහි සහයෝගය ලැබුණි. දෙමාපියන් පුහුණු අවස්ථාවල දරුවන්ට ආහාර, ප්‍රවාහන සහ ඇඳුම් සකස් කිරීමට උදව් කළහ. ඇතැම් දෙමාපියන් රංගාභරණ සහ ඇඳුම් නිර්මාණයට, මැසීමට, ප්‍රවාහනයට සහ අලංකරණයට විශාල දායකත්වයක් දැක්වූහ. නිර්මාණකාරී චාමලී විජේසිංහ ගුරුතුමියගේ සහාය නාට්‍යයට අලුත් ජීවයක් ලබා දුනි. අවසානයේ සියලු දෙනාගේ දායකත්වය ගෞරවයෙන් සිහිපත් කර ස්තූතිවන්ත වෙමු. මේ දායකතාවය අනාගත පරපුර සඳහා වටිනා උදාහරණයකි.`
  },
  'fund-raising': {
    en: `\nStudent-led micro fundraising (snack kiosks, homemade sweets, miniature theme stalls) financed essential materials. Transparent allocation to costumes, background media, and transport reinforced accountability. The process nurtured entrepreneurial thinking—planning pricing, presentation, and rotation schedules—while deepening community ties among parents, teachers, and learners.`,
    si: `සිසුන්ගේ ප්‍රමුඛත්වයෙන් කුඩා ආහාර අලෙවිකර ද්‍රව්‍ය, පීනට්, මීටයි, හා කලාත්මක කුඩා බුත් මගින් අරමුදල් රැස් කළහ. ඇඳුම්, පසුබිම් හා ප්‍රවාහන වියදම්වලට විවෘතව මාරු කිරීම විශ්වාසය ගොඩනඟා ගියේය. මෙම ක්‍රියාවලිය ව්‍යාපාරික සිතීම, වටිනාකම් ගණනය සහ කාලසටහන් සංවිධානය ඉගෙනගැනීමට අවස්ථාවක් විය.`
  },
  'music-composition': {
    en: `\nOriginal music blended simplified Egyptian rhythmic patterns with accessible percussive layering. Initial plans for brass textures were replaced by indigenous drum timbres (cajón, darbuka, hand-drums) performed by talented students. Three vocalists delivered bespoke lyrical passages reinforcing dramatic mood shifts. All melodies and lyrics were freshly authored for this production—ensuring thematic unity and cultural homage without imitation.`,
    si: `මෙම නාට්‍යයේ සංගීතය ඊජිප්තු සංගීතය ඇසුරෙන් නිර්මාණය වූවකි. ඊජිප්තු වාද්‍ය භාණ්ඩ, නාද හා ස්වර රටාවන් අධ්‍යයනය කරමින් ළමා නාට්‍යයකට ගැලපෙන පරිදි සකස් කිරීම අභියෝගයක් විය. මුලදී සැක්සොෆෝනයක් භාවිත කිරීමට සැලසුම් කළද වාදකයෙකු නොමැති නිසා අත්හැර දමන ලදී. පසුව සුදුසු වාදක දරුවන් සොයා ගැනීම ද අභියෝගවත් විය. නාට්‍යයේ සියලු තනූ හා ගී පද නිර්මාණය කර අවසානයේ වෙනත් පාසලක ඉගෙනුම ලබන දියණිය විශේෂ අවසරයකින් සහභාගී විය. දක්ෂ බෙර වාදක දරුවන් දෙදෙනෙක් කහෝන් හා දර්බක වාදනය සඳහා සහභාගී වූ අතර දක්ෂ දියණියන් තිදෙනෙකු ගායනයට එක් විය. ඔවුන්ගේ දායකත්වය මඟින් නාට්‍යයේ අනන්‍ය සංගීතය අවබෝධවත් ලෙස ඉදිරිපත් කළ හැකි විය.`
  }
};

export default function CategoryPage({ category, title }){
  const { t, lang } = useLanguage();
  const keyMap = {
    costume: 'nav.costume',
    'background-setup': 'nav.backgroundSetup',
    props: 'nav.props',
    practices: 'nav.practices',
    preparations: 'nav.preparations',
    'fund-raising': 'nav.fundRaising',
    'music-composition': 'nav.musicComposition'
  };
  const display = title || t(keyMap[category]) || category;
  const desc = descriptions[category]?.[lang];
  const isProps = category === 'props';
  // Merge jewelry description into props when rendering
  let mergedDesc = desc;
  if(isProps){
    const jew = {
      en: `\nIn Egyptian society, gold and beaded jewelry represented status. Budget constraints inspired recycling: discarded chains, bangles, bead strings, and trinkets were dismantled to build layered necklaces, wrist pieces, and symbolic collars. Broad chest plates were crafted from rolled paper straws painted in metallic tones and arranged into geometric bands—turning constraints into innovation while maintaining spectacle and symbolism.`,
      si: `\nඊජිප්තු සමාජයේ රන් හා මැණික් ආභරණ සමාජ තත්ත්වය නිරූපණය කළා. මුල්‍ය සීමා නිසා ඉවතලන ලද මාල, කරාබු, මැණික් කුඩු කොටස් විකලනය කර පාවිච්චි කළහ. පුළුල් උර caller සඳහා කඩදාසි බට රුළා ලෝහ වර්ණයෙන් වර්ණ ගන්වා ජ්‍යාමිතික පටි ලෙස අනුපිළිවෙලින් සකස් කළ අතර සංකේතයත් අලංකාරයත් සමබන්ධ කළ නිර්මාණාත්මක විසඳුමක් විය.`
    };
    mergedDesc = (mergedDesc || '') + jew[lang];
  }
  // Attempt to import props video statically (will be undefined if missing)
  let propsVideo;
  try {
    if(isProps){
      propsVideo = new URL('../assets/videos/props/video-props.mp4', import.meta.url).href;
    }
  } catch(e){ /* ignore */ }
  return (
    <div>
      <h2 style={{marginTop:0}}>{display}</h2>
      {mergedDesc && (
        <p style={{
          maxWidth:'1200px',
          whiteSpace:'pre-wrap',
          lineHeight:1.62,
          fontSize:'1.05rem',
          opacity:.94,
          marginTop:'0.65rem',
          textAlign:'justify',
          letterSpacing:'.15px'
        }}>{mergedDesc}</p>
      )}
      {isProps && propsVideo && (
        <div style={{margin:'1.75rem 0 1.25rem', width:'100%'}}>
          <div style={{position:'relative', width:'100%', aspectRatio:'16 / 9', background:'#000', borderRadius:'14px', overflow:'hidden', boxShadow:'0 10px 34px -12px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,0.05)'}}>
            <video
              src={propsVideo}
              ref={el => {
                if(el){
                  el.muted = true;
                  el.playsInline = true;
                  const tryPlay = () => { el.play().catch(()=>{}); };
                  if(el.readyState >= 2){ tryPlay(); } else { el.addEventListener('canplay', tryPlay, { once:true }); }
                }
              }}
              autoPlay
              muted
              playsInline
              controls
              style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      <Gallery category={category} />
    </div>
  );
}
