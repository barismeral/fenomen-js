/**
 * @author Barış MERAL
 * @since 2019.10.27
 * @version 1.0.0
 */

'use strict';

function Fenomen() {


    const URI = "https://api.radyofenomen.com/Channels/";
    const QUERY_STRING = "/?appRef=FenomenWebV2";
    const AUDIO_URI = "https://listen.radyofenomen.com/";


    this.channels = {

        FENOMEN: { url: URI+"radyofenomen"+QUERY_STRING, icecast: AUDIO_URI+"fenomen/256/icecast.audio" },
        FENOMEN_TURK: { url: URI+"fenomenturk"+QUERY_STRING, icecast: AUDIO_URI+"fenomenturk/256/icecast.audio" },
        FENOMEN_TURKCE_RAP: { url: URI+"fenomenturkcerap"+QUERY_STRING, icecast: AUDIO_URI+"fenomenturkrap/128/icecast.audio" },
        FENOMEN_K_POP: { url: URI+"fenomenkpop"+QUERY_STRING, icecast: AUDIO_URI+"fenomenkpop/128/icecast.audio" },
        FENOMEN_KARISIK: { url: URI+"fenomenkarisik"+QUERY_STRING, icecast: AUDIO_URI+"fenomenkarisik/128/icecast.audio" },
        FENOMEN_POP: { url: URI+"fenomenpop"+QUERY_STRING, icecast: AUDIO_URI+"fenomenpop/128/icecast.audio" },
        FENOMEN_DANS: { url: URI+"fenomendans"+QUERY_STRING, icecast: AUDIO_URI+"fenomendans/128/icecast.audio" }

    }


    this.get = function(channel,callback){


      fetch(channel.url).then(function (data) {

            return data.json();

        }).then(function (json) {

           let obj = {

                audio: {
                    src: channel.icecast,
                    type: "audio/mpeg"
                },

                channel: {
                    name: json.response.channel_name,
                    desc: json.response.channel_description,
                    logo: json.response.channel_logo_big.replace('?v=11', '')
                },
                song: {
                    artist: json.response.timeline[0].artistTitle,
                    title: json.response.timeline[0].songTitle,
                    lyrics: json.response.timeline[0].songLyrics,
                    status: json.response.timeline[0].songStatus,
                    albumCover: json.response.timeline[0].albumCoverIMG
                }

            }

            callback(obj);
                    
        }).catch(function (e) {
            console.log(e);
        });

    }


}
