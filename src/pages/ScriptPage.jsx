import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Static bilingual content supplied by user
const english = `Script Description – The Secret Dance (රහස් නැටුම)
\nThe drama unfolds around Ram, a young boy whose desires, temptations, and eventual transformation drive the story. The narrative blends royalty, ministers, villagers, and mystical elements, revealing the dangers of selfishness and the power of compassion.
\nAct 1 – The Temptation
\nThe play opens with Ram humming a tune, holding a stick, and reflecting alone. Two ministers approach and engage him in conversation. Through sly persuasion, they tempt him with sweets and delicacies, symbolizing material temptations. The ministers probe about a hidden performance (“the secret dance”) and the princess, hinting at forbidden knowledge. This establishes Ram’s weakness for pleasure and his growing curiosity about secrets.
\nAct 2 – The Whispered Secret
\nAs the ministers leave, Ram secretly shares something with them, exchanging words for treats. This moment sets the stage for betrayal, showing how personal gain can lead to the revealing of dangerous knowledge. Meanwhile, the chorus introduces lyrical verses, reinforcing the theme of hidden truths and moral conflict.
\nAct 3 – The Princess and the Struggle
\nThe princess (ල=ුරිය) enters with her companions, debating virtue, loyalty, and the responsibilities of leadership. Their conversations reflect the eternal conflict between self-indulgence and duty. Villagers and attendants appear, raising questions about morality and the balance of justice. Through poetic dialogues, the play shows how greed and ignorance corrupt society.
\nAct 4 – The Unveiling
\nAs more characters—friends, villagers, and guards—confront Ram, the “secret dance” begins to symbolize deeper truths: life’s hidden responsibilities, the consequences of betrayal, and the test of human character. Ram’s indulgence in sweets becomes an allegory for choosing short-term pleasure over long-term values. The princess and wise leaders highlight the destructive nature of such actions, urging collective responsibility.
\nAct 5 – The Realization
\nConfronted by the princess, Ram realizes his mistakes. He understands that by valuing only his own hunger and pleasure, he neglected others’ well-being. His transformation begins when he admits guilt and asks for forgiveness. This turning point conveys the central message: true happiness comes not from selfish pleasure, but from empathy, sacrifice, and thinking of others.
\nClimax and Ending
\nIn the climax, the princess emphasizes that mercy and forgiveness, not punishment, can transform people. Ram is forgiven, marking his rebirth as a responsible human being. The script ends with poetic verses that highlight compassion, community, and the eternal moral:
\nSelfishness leads to destruction.
\nSharing, caring, and compassion lead to harmony.
\nThemes and Significance
\nMoral Education: The drama emphasizes values important for students and society—generosity, empathy, and accountability.
\nSymbolism: Sweets represent temptations, the “secret dance” symbolizes forbidden or hidden truths, and the princess symbolizes wisdom and justice.
\nCultural Value: With traditional dialogue, songs, and symbolic roles, the play reflects Sri Lankan dramatic tradition while carrying a universal message.
\nMessage for Audience: “The Secret Dance” reminds us that leadership and humanity are rooted in selflessness, not selfish desires.`;

const sinhala = `නාට්‍ය විස්තරය – රහස් නැටුම
\nආරම්භය – ආකර්ෂණය
\nනාට්‍යය ඇරඹෙන්නේ රම් නම් කුඩා කොල්ලාගේ චරිතයෙනි. ඔහු ගායනය කරමින්, පියවරක් පියවරට සිතූ සිතුවිලි තුළ ගමන් කරයි. මේ අවස්ථාවේදී අමාත්‍යවරුන් දෙදෙනෙක් ඔහු සොයා එයි. ඔවුන් රම් වෙත මඳහසු ආකර්ෂණ සහිතව ආවරණාත්මක කතා කරන අතර, මුරණ්ඩු සහ ආහාර විශේෂ මඟින් ඔහුගේ සිත ගනු ලබයි. මෙය ලොල්භාවය හා ආකර්ෂණය නාට්‍යය තුළ ගොඩනගන මුල් මොහොත වේ.
\nරහස හෙළි කිරීම
\nඉන්පසු, රම් අමාත්‍යවරුන්ට ගුප්ත කථා විස්තර කරමින්, කුඩා ආහාර හා මනෝරාජ්‍ය සඳහා ඔහුගේ රහස විකිණීමට අකමැත්තෙන් එකඟ වෙයි. මේ මොහොත නාට්‍යයේ දූෂණය හා විශ්වාසභංගය නිරූපණය කරන මූලික අවස්ථාවකි.
\nඅරමුණ සහ සටන
\nඅරගලය උත්සන්න වෙන්නේ රාජකීය කුමරිය (ලුරිය) සහ ඇයගේ පිරිස මතු වූ විටයි. ඇය සහ ඇයගේ මිතුරියන් ගුණය, විශ්වාසය සහ නායකත්ව වගකීම පිළිබඳව ගැඹුරු සංවාදයක යොමුවෙති. ගම්වැසියන් සහ අනුගාමිකයන් මෙන්ම ආරක්ෂකයන් ද මෙයට එකතු වන අතර, සමාජයේ නෛතික ගැටලු සහ සමාජ සාධාරණය පිළිබඳ තරගකාරී සංවාද සිදුවේ.
\nරහස නිරාවරණය
\n“රහස් නැටුම” යනු නාට්‍යය තුළ ජීවිතයේ ගුප්ත වගකීම් සහ විශ්වාස භංගයෙන් ඇතිවන ප්‍රතිවිපාක නිරූපණය කරන සංකේතයකි. රම් විසින් ලැබෙන මීතයින් හා ආහාර අඩු කාලීන සතුට නිරූපණය කරන අතර, ඒ මඟින් ඔහුගේ අනාගතය හා අන් අයගේ මංගලය විනාශ වෙයි. කුමරිය සහ ගැඹුරු නායකත්වය නියෝජනය කරන චරිතයන් මෙය හඳුනා ගෙන දඬුවම වෙනුවට කරුණාව හා වගකීම මගින් විසඳුම් සොයති.
\nපරිවර්තනය හා අවසානය
\nඅවසානයේදී රම් තම දෝෂය පිළිගනිමින් සමාව ඉල්ලයි. ඔහුගේ ලොල්භාවය හා ස්වයං ආශ්‍රිතත්වය වෙනස් වී, අන් අයගේ කලාතුරකින් සතුට හා අනුකම්පාව පිළිගන්නා පුද්ගලයෙකු බවට පත් වෙයි.\nනැවතී සිටින කුමරිය ඔහුට සමාව ලබා දී පිරිසක් සමග එකට ජීවත් වීමට අවශ්‍ය අගයන් යළිම උගන්වයි.
\nනාට්‍යයේ තේමාවන් සහ වැදගත්කම
\nනෛතික පාඩම් – රහස් නැටුම නාට්‍යය මගින් සමාජය තුළ ඇති අන් අයෙකුට කරදර නොකරමින්, අන් අය ගැන සිතමින් ජීවත් වීම ප්‍රමුඛත්වයට ගෙන එයි.
\nසංකේතයන් – මීතයින් ආකර්ෂණය සහ ස්වයං ආශාව නිරූපණය කරන අතර, “රහස් නැටුම” ගුප්ත සත්‍යය හා වගකීම් නිරූපණය කරයි.
\nසංස්කෘතික අගය – නාට්‍යයේ සංවාද හා ගීත ශ්‍රී ලාංකීය නාට්‍ය සම්ප්‍රදාය නව පරම්පරාවට යළිම ගෙන එයි.
\nපරිණාමය – දඬුවමට වඩා කරුණාව සහ සමාව මඟින් පුද්ගලයෙකු වෙනස් කළ හැකි බව මෙම කෘතිය පැහැදිලියි.`;

export default function ScriptPage(){
  const { t, lang } = useLanguage();
  const isSinhala = lang === 'si';
  const content = isSinhala ? sinhala : english;
  const heading = isSinhala ? t('') : t('');
  
  // Import script video
  let scriptVideo;
  try {
    scriptVideo = new URL('../assets/videos/script/play.mp4', import.meta.url).href;
  } catch(e){ /* ignore */ }
  
  return (
    <div className="script-page single">
      <h2 className="gradient-text" style={{marginTop:0}}>{t('script.title')}</h2>
      <p style={{opacity:.8, marginTop:'.25rem'}}>{t('script.subtitle')}</p>
      
      {scriptVideo && (
        <div style={{margin:'1.75rem 0 1.25rem', width:'100%'}}>
          <div style={{position:'relative', width:'100%', aspectRatio:'16 / 9', background:'#000', borderRadius:'14px', overflow:'hidden', boxShadow:'0 10px 34px -12px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,0.05)'}}>
            <video
              src={scriptVideo}
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
      
      <div className="script-panels single">
        <section className="script-panel">
          <h3>{heading}</h3>
          <pre className={`script-text ${isSinhala?'si-text':''}`}>{content}</pre>
        </section>
      </div>
    </div>
  );
}
