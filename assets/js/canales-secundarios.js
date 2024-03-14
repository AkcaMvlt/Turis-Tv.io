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
#EXTINF:-1 tvg-id="4" tvg-name="KRAL POP" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", KRAL POP * | CL
https://dogus-live.daioncdn.net/kralpoptv/kralpoptv.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="MAVI KARADENIZ" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", MAVI KARADENIZ * | CL
https://live.artidijitalmedya.com/artidijital_mavikaradeniz/mavikaradeniz/chunks.m3u8
#EXTINF:-1 tvg-id="465" tvg-name="MILJON TV" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", MILJON TV* | CL
https://sosyoapp-live.cdnnew.com/sosyo/buraya-bir-isim-verin.m3u8
#EXTINF:-1 tvg-id="1160" tvg-name="MUZ TV" tvg-logo="https://i2.paste.pics/99cc893c37784a17aac9a95ac3c7e5c8.png", MUZ TV* | CL
https://az2.canlitvplayer.com/azerbaijan/muztv/chunks.m3u8
#EXTINF:-1 tvg-id="1255" tvg-name="POWER DANCE" tvg-logo="https://i2.paste.pics/355ba171055dd0e6747131673432cc18.png", POWER DANCE * | CL
https://livetv.powerapp.com.tr/dance/dance.smil/playlist.m3u8
#EXTINF:-1 tvg-id="31" tvg-name="POWER LOVE" tvg-logo="https://i2.paste.pics/6abc319563c207c4ba1fb2c199fedd86.png", POWER LOVE* | CL
https://livetv.powerapp.com.tr/plove/love.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1436" tvg-name="POWER TV" tvg-logo="https://i2.paste.pics/eee2cbc0f52cbb9c7c73ee13f72c0b96.png", POWER TV * | CL
https://livetv.powerapp.com.tr/powerTV/powerhd.smil/chunklist.m3u8
#EXTINF:-1 tvg-id="1058" tvg-name="POWER TÛRK AKUSTIK" tvg-logo="https://i2.paste.pics/e3cde58abf314e0e6b17b595c357936a.png", POWER TÛRK AKUSTIK * | CL
https://listen.powerapp.com.tr/pturkakustik/akustik.smil/playist.m3u8
#EXTINF:-1 tvg-id="1112" tvg-name="POWER TÛRK SLOW" tvg-logo="https://i2.paste.pics/5d6d67c298360548fd41a897f987628c.png", POWER TÛRK SLOW * | CL
https://listen.powerapp.com.tr/pturkslow/slow.smil/chunklist_b1028000_sltur.m3u8?nimblesessionid=1382128269
#EXTINF:-1 tvg-id="947" tvg-name="POWER TÛRK TAPTAZE" tvg-logo="https://i2.paste.pics/5efe361b75000b6eb6104bf22a0880fe.png", POWER TÛRK TAPTAZE * | CL
https://listen.powerapp.com.tr/pturktaptaze/taptaze.smil/playist.m3u8
#EXTINF:-1 tvg-id="1266" tvg-name="EnerGeek Radio" tvg-logo="https://i.paste.pics/4a15cf6d76aaf3246f3a6cedd48e0ac9.png", EnerGeek Radio * | CL
https://stream.wifiexpert.cl/energeek/radio/playlist.m3u8
#EXTINF:-1 tvg-id="1300" tvg-name="POWER TÜRK" tvg-logo="https://i2.paste.pics/dad53a17aceb11d80b7ec90ec2398f2f.png", POWER TÜRK * | CL
https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/chunklist.m3u8
#EXTINF:-1 tvg-id="1420" tvg-name="RIZE TÛRK" tvg-logo="https://i2.paste.pics/3d543690d890b9a5918a8025aebcf2bc.png",RIZE TÛRK* | CL
https://yayin.rizeturk.com:3777/multi_web/play.m3u8
#EXTINF:-1 tvg-id="13" tvg-name="TATLISES" tvg-logo="https://i2.paste.pics/004835d0c1a19dd14fa643dd18897d4d.png", TATLISES * | CL
https://live.artidijitalmedya.com/artidijital_tatlisestv/tatlisestv/chunks.m3u8
#EXTINF:-1 tvg-id="1312" tvg-name="TRT MÛZIK" tvg-logo="https://i.paste.pics/8504c462729d61af6e1f0b59323f9a85.png", TRT MÛZIK* | CL
https://tv-trtmuzik.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="996" tvg-name="YANSIMA MÛZIK" tvg-logo="https://i2.paste.pics/f5a6133c6b0fcec076105dfd2508549c.png", YANSIMA MÛZIK * | CL
https://ssh101.bozztv.com/ssh101/yansiimamuziktv/chunks.m3u8
#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", VOSTOK TV* | CL
http://911play.ru:3456/live/VostokSite/cdnVostaoc911tv123456/489.m3u8




#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", KRAL POP TV FHD* | CL
http://dygvideo.dygdigital.com/live/hls/kralpop

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",KRAL POP TV HD* | CL
https://dogus-live.daioncdn.net/kralpoptv/kralpoptv_720p.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",TRT MUZiK HD* | CL
https://tv-trtmuzik.medya.trt.com.tr/master_720.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",DREAM TURK HD* | CL
https://live.duhnet.tv//S2/HLS_LIVE/dreamturknp/playlist.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",TATLISES TV HD* | CL
https://live.artidijitalmedya.com/artidijital_tatlisestv/tatlisestv/playlist.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",NR 1 TURK HD* | CL
https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e187770143.smil/chunklist_b400000.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",NR 1 DAMAR HD* | CL
https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e19877b340.smil/chunklist_b400000.m3u8?md5=api5VtN5dEXl5cvRHMQBNQ&expires=1696713505

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",NR 1 TV HD* | CL
https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/chunklist_b400000.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",POWER TURK HD* | CL
https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/chunklist_b5250000_sltur.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",POWER TURK SLOW* | CL
https://listen.powerapp.com.tr/pturkslow/slow.smil/playlist.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",POWER TV AKUSTiK* | CL
https://listen.powerapp.com.tr/pturkakustik/akustik.smil/playlist.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",POWER TURK TAPTAZE* | CL
https://listen.powerapp.com.tr/pturktaptaze/taptaze.smil/playlist.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",POWER DANCE HD* | CL
https://listen.powerapp.com.tr/pturkslow/slow.smil/playlist.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",POWER LOVE HD* | CL
https://listen.powerapp.com.tr/plove/love.smil/playlist.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",POWER TV HD* | CL
https://livetv.powerapp.com.tr/powerTV/powerhd.smil/chunklist_b1428000_sltur.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",MiLYON TV* | CL
https://sosyoapp-live.cdnnew.com/sosyo/buraya-bir-isim-verin.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",SLOW KARADENIZ TV HD* | CL
https://yayin.slowkaradeniztv.com:3390/multi_web/play.m3u8
#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",FORTUNA TV* | CL
https://fortunacdn.socialsmart.tv/ftvturk/bant1/playlist.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",BALKAN TÜRK   * | CL
https://vdo.digitalbox.xyz:3248/live/brukselturktvlive.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",FiNEST TV   * | CL
http://media.finest.tv/hls/live.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", DAMAR TV  * | CL
https://tvsms.club/tv.php?kanal=damar&file=.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", ARABESK TV  * | CL
https://tvsms.club/tv.php?kanal=arabeskyeni&file=.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", SILA TV  * | CL
https://tvsms.club/tv.php?kanal=silatv&file=.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", ZEYNO TV  * | CL
https://tvsms.club/tv.php?kanal=zeynotv&file=.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png",  DOST TV * | CL
https://tvsms.club/tvz.php?kanal=dost&file=.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", EZO TV  * | CL
https://tvsms.club/tvz.php?kanal=ezo&file=.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", TOP POP TV  * | CL
https://tvsms.club/tvz.php?kanal=toppop&file=.m3u8

#EXTINF:-1 tvg-id="1014" tvg-name="VOSTOK TV " tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", TOP POP TV  * | CL
https://tvsms.club/tv.php?kanal=vivatv&file=.m3u8










































`

let parseM3u = m3utojson(m3u);