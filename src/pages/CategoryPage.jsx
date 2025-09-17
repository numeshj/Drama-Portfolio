import React from 'react';
import Gallery from '../components/Gallery';
import { useLanguage } from '../contexts/LanguageContext';

const descriptions = {
  costume: {
    en: `Our team took a creative approach to minimize expenses on costumes. Instead of buying ready-made outfits, we designed them using available school resources and contributions from parents. Old sarees, curtain cloth, and unused materials were repurposed and transformed into regal attire fit for ancient characters. Students helped decorate accessories with beads, glitter, and cardboard, creating ownership and pride.`,
    si: `ඇඳුම් සම්බන්ධයෙන් අපි ගත් ක්‍රියාමාර්ග විශේෂයෙන්ම නිර්මාණශීලී විය. නව ඇඳුම් මිලදී ගැනීමට වෙනුවට පාසලේ තිබූ අමුද්‍රව්‍ය හා දෙමාපියන්ගේ සහාය යොදා පරණ සාරි, තිර බත්ත සහ භාවිතා නොකළ ද්‍රව්‍ය නැවත සැලසුම් කර රජකෙනෙකුට ගැළපෙන ඇඳුම් බවට පත් කළෙමු. දරුවන්ම මැණික්, තාරකාව, කඩදාසි පැල ආදියෙන් අලංකරණය කරමින් ආරක්ෂක භාවයක් හා ගෞරවයක් ලබාගත්තහ.`
  },
  props: {
    en: `Every stage property was a product of innovation—crowns, jewelry, spears, and thrones were made from cardboard, plastic bottles, leftover wood, and colored papers. With guidance from art teachers and parents, students transformed everyday objects into striking props, reducing cost while boosting creativity and teamwork.`,
    si: `වේදිකා උපකරණ සියල්ල නිර්මාණශීලීත්වයෙන් සම්පූර්ණ කරන ලදී. කඩදාසි පත්‍ර, ප්ලාස්ටික් බෝතල්, ඉතිරි වී තිබූ ලී සහ වර්ණිත කඩදාසි භාවිතයෙන් කැඩිලි, අභරණ, කඩු, අසුනොළුව සෑදූහ. ගුරු මහතුන් සහ දෙමාපියන්ගේ මඟ පෙන්වීමෙන් දරුවන් සාමාන්‍ය වස්තු අගනා උපකරණ බවට පරිවර්තනය කළහ.`
  },
  'background-setup': {
    en: `The stage background was crafted in-house. Borrowed wooden panels were painted after school; reused fabrics like old sarees and cloth pieces added depth. This resourceful approach produced a grand palace and temple ambience with almost no extra expense.`,
    si: `වේදිකා පසුබිම පාසල් අවසන්වූ පසු දරුවන්ගේ අතින්ම අඳින ලදී. ණයවා ලබාගත් ලී පැනල්, පරණ සාරි හා පාවිච්චි නොකළ රෙද්ද යොදා ග ගැඹුරු සහ තරලත්වයක් ලබාදෙමින් රාජ මාලිගාවක් හා දේවස්ථානයක් සමාන පසුබිමක් උපායශීලීව පිළියෙළ විය.`
  },
  practices: {
    en: `Rehearsals demanded sacrifice—after school, weekends, and holidays. Parents supported with refreshments and transport. Students balanced exams and rehearsals, staying late to perfect dialogue, movement, and timing—proving discipline and teamwork were core to success.`,
    si: `පුහුණු සහ කැපවීම පාඩම් හා චරිත රචනා අතර සමතුලිත කිරීම විය. පාසල් අවසානයෙන් පසුව, සති අන්ත හා නිවාඩු දිනවලදී පවතින පුහුණු වලට දෙමාපියන් ආහාර, ගමන් බස සහ ආරක්ෂාවෙන් සහාය වූහ. කාලය නිසිලෙස කළමනාකරණය කරමින් දරුවන් අවසන් වන තුරු රැඳී සිට සංවාද හා චාලකතා නිවැරදි කළහ.`
  },
  preparations: {
    en: `Preparation for the competition was not limited to practices and costumes. It was a collective journey where every member of the team contributed something unique. Stage sets were built with the help of senior students with carpentry skills, while art-loving students spent hours painting pyramids, temples, and palaces. Teachers guided and reviewed every detail to reach a professional standard. Parents supported with meals, transport, and even artistic help for stage decoration. The preparation period was filled with late evenings, laughter, challenges, and above all—teamwork that built lasting friendships and unforgettable experiences.`,
    si: `මෙම තරඟය සඳහා වූ සූදානම පුහුණු වලට හා ඇඳුම් සකස් කිරීමට පමණක් සීමා නොවීය. එක්වූ සෑම දරුවකු, ගුරුතුමියකු සහ දෙමාපියකුම තමන්ට හැකි අයුරින් දායක විය. දක්ෂ සිසුන් විසින් වේදිකා සැකසුම් සඳහා ලී වැඩ නිර්මාණය කරන අතර, රූප සම්මත සිසුන් පැය ගණනාවක් වැය කරමින් පිරමීඩ, දේවස්ථාන සහ මාලිගා අඳින ලදී. ගුරුවරුන් ප්‍රතිචාර දක්වමින් සියලු විස්තර පරීක්ෂා කළහ. දෙමාපියන් ආහාර සහන, ගමන් බස, සහ වේදිකා සැරසිලි සඳහා නියමිත කල අපගේ උත්සාහයට දායක විය. සූදානම් කාලය හිනා, අභියෝග සහ එක්සත් කණ්ඩායම්භාවයෙන් පිරුණු අමරණීය මතකයක් වී තිබුණි.`
  },
  'fund-raising': {
    en: `Drama production costs required creative fundraising. Students organized small food stalls and micro-events inside the school. Local snacks, homemade sweets, and short eats prepared by parents were sold. This helped cover costumes, props, and transport while teaching responsibility and unity. Fundraising became a symbol of collaboration—teachers, parents, and students working hand-in-hand to bring the production to life.`,
    si: `නාට්‍ය නිෂ්පාදනයේ වියදම් නිසා අපට නව නිර්මාණාත්මක අරමුදල් රැස් කිරීමේ ක්‍රම භාවිතා කළ යුතු විය. සිසුන් පාසල් පරිශ්‍රයේ කුඩා ආහාර අලෙවි ස්ථාන සංවිධානය කළහ. දෙමාපියන් සකස් කළ ගෘහ නිර්මාණ ආහාර, මීටයි සහ කෙටි කාල ආහාර විකිණීමෙන් ඇඳුම්, උපකරණ හා ගමන් බස් වියදම් ආවරණය කළහ. මෙය වගකීම් සහ ඒකාබද්ධත්වය ඉගෙනගත් අවස්ථාවක් විය. අරමුදල් රැස් කිරීම මුදල් එකතු කිරීම පමණක් නොව – ගුරුවරුන්, දෙමාපියන් සහ දරුවන් එකට කළ එකමුතු කාර්යයක ප්‍රතිඵලයකි.`
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
    'fund-raising': 'nav.fundRaising'
  };
  const display = title || t(keyMap[category]) || category;
  const desc = descriptions[category]?.[lang];
  return (
    <div>
      <h2 style={{marginTop:0}}>{display}</h2>
      {desc && (
        <p style={{maxWidth:'980px', lineHeight:1.58, fontSize:'1rem', opacity:.92, marginTop:'0.55rem'}}>{desc}</p>
      )}
      <Gallery category={category} />
    </div>
  );
}
