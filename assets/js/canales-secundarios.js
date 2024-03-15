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































`

let parseM3u = m3utojson(m3u);