// canales de lista m3u https://jsfiddle.net/onigetoc/f26zuLtw/
function m3utojson(m3u) {
    return m3u
        .replace('#EXTM3U', '')
        .split('#EXTINF:-1 ')
        .slice(1)
        .map(function(str, index) {
            let channel = str.split('\n').slice(0,-1);
			if(channel[1].indexOf('m3u8') >= 0){
            /* 
                    channel[0].split('"')[0]
                        | channel[0].split('"')[1]
                        |    |   channel[0].split('"')[2]
                        |    |      |    channel[0].split('"')[3]   
                        |    |      |        |     channel[0].split('"')[4]  
                        |    |      |        |         |      channel[0].split('"')[5]          
                        |    |      |        |         |             |        channel[0].split(',')[1]    
                        __|__  |  ____|___   __|__   ____|___   _______|______    ___|__
                    |     | | |        | |     | |        | |              |  |      |
            #EXTINF:-1 tvg-id="1" tvg-name="nombre1" tvg-logo="https://foto.png", nombre1
            https://enlace.m3u8
            -------|-----------
                channel[1]

            */
                return {
                 "id": index + 1,
                 "tvg-id": channel[0].split('"')[1],
                 "title": channel[0].split('"')[3],
                 "name": channel[0].split(',')[1],
                 "m3u8_url": channel[1].replace('http://', 'https://')                        
                }
			}
        });
}



// https://www.m3u.cl/iptv-chile.php
let m3u = `
#EXTM3U
#EXTINF:-1 tvg-id="4" tvg-name="Turis Tv" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", AFYON TÜRK * | CL
https://tv.digitalbox.xyz:19360/afyonturktv/afyonturktv.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", KRAL POP TV * | CL
http://dygvideo.dygdigital.com/live/hls/kralpop
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", KRAL POP TV HD * | CL
https://dogus-live.daioncdn.net/kralpoptv/kralpoptv_720p.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", TRT MUZiK * | CL
https://tv-trtmuzik.medya.trt.com.tr/master_720.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", DREAM TURK * | CL
https://live.duhnet.tv//S2/HLS_LIVE/dreamturknp/playlist.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", TATLISES TV * | CL
https://live.artidijitalmedya.com/artidijital_tatlisestv/tatlisestv/playlist.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", NR 1 TURK * | CL
https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e187770143.smil/chunklist_b400000.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", NR 1 TV * | CL
https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/chunklist_b400000.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", POWER TURK * | CL
https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/chunklist_b5250000_sltur.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", POWER TURK SLOW * | CL
https://listen.powerapp.com.tr/pturkslow/slow.smil/playlist.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", POWER TV AKUSTiK * | CL
https://listen.powerapp.com.tr/pturkakustik/akustik.smil/playlist.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", POWER TURK TAPTAZE * | CL
https://listen.powerapp.com.tr/pturktaptaze/taptaze.smil/playlist.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", POWER DANCE * | CL
https://listen.powerapp.com.tr/dance/dance.smil/playlist.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", POWER LOVE * | CL
https://listen.powerapp.com.tr/plove/love.smil/playlist.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", POWER TV HD * | CL
https://livetv.powerapp.com.tr/powerTV/powerhd.smil/chunklist_b1428000_sltur.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", MiLYON TV * | CL
https://sosyoapp-live.cdnnew.com/sosyo/buraya-bir-isim-verin.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", SLOW KARADENIZ * | CL
https://yayin.slowkaradeniztv.com:3390/multi_web/play.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", TEMPO TV * | CL
https://live.artidijitalmedya.com/artidijital_tempotv/tempotv/playlist.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", FORTUNA TV * | CL
https://fortunacdn.socialsmart.tv/ftvturk/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", FiNEST TV * | CL
http://media.finest.tv/hls/live.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", DAMAR TV * | CL
https://tvsms.club/tv.php?kanal=damar&file=.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", ARABESK TV * | CL
https://tvsms.club/tv.php?kanal=arabeskyeni&file=.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", SILA TV * | CL
https://tvsms.club/tv.php?kanal=silatv&file=.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", ZEYNO TV * | CL
https://tvsms.club/tv.php?kanal=zeynotv&file=.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", EZO TV * | CL
https://tvsms.club/tvz.php?kanal=ezo&file=.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", TOP POP TV * | CL
https://tvsms.club/tvz.php?kanal=toppop&file=.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", AVIVA TV * | CL
https://tvsms.club/tv.php?kanal=vivatv&file=.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", ARMA TV * | CL
https://tvsms.club/tvz.php?kanal=arma&file=.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", GENC SMS * | CL
https://tvsms.club/tv.php?kanal=genctv&file=.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", EURO 90 * | CL
https://euro90tv-live.cdnnew.com/euro90tv/e9090.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Turis Tv 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", NATURAL TV  * | CL
https://edge1.socialsmart.tv/naturaltv/bant1/playlist.m3u8






















`

let parseM3u = m3utojson(m3u);