/**
 * @author Barış MERAL
 * @since 2019.10.27
 * @version 2.0.0
 */

'use strict';

function Fenomen() {

    const URI = "https://api.radyofenomen.com/Channels/";
    const QUERY_STRING = "/?appRef=FenomenWebV2";
    const AUDIO_URI = "https://listen.radyofenomen.com/";
    let defaultQuality = 128;

    this.channels = {

        FENOMEN: { name: "fenomen", url: URI + "radyofenomen" + QUERY_STRING, icecast: AUDIO_URI + "fenomen/" + defaultQuality + "/icecast.audio" },
        FENOMEN_TURK: { name: "fenomenturk", url: URI + "fenomenturk" + QUERY_STRING, icecast: AUDIO_URI + "fenomenturk/" + defaultQuality + "/icecast.audio" },
        FENOMEN_TURKCE_RAP: { name: "fenomenturkcerap", url: URI + "fenomenturkcerap" + QUERY_STRING, icecast: AUDIO_URI + "fenomenturkrap/" + defaultQuality + "/icecast.audio" },
        FENOMEN_K_POP: { name: "fenomenkpop", url: URI + "fenomenkpop" + QUERY_STRING, icecast: AUDIO_URI + "fenomenkpop/" + defaultQuality + "/icecast.audio" },
        FENOMEN_KARISIK: { name: "fenomenkarisik", url: URI + "fenomenkarisik" + QUERY_STRING, icecast: AUDIO_URI + "fenomenkarisik/" + defaultQuality + "/icecast.audio" },
        FENOMEN_POP: { name: "fenomenpop", url: URI + "fenomenpop" + QUERY_STRING, icecast: AUDIO_URI + "fenomenpop/" + defaultQuality + "/icecast.audio" },
        FENOMEN_DANS: { name: "fenomendans", url: URI + "fenomendans" + QUERY_STRING, icecast: AUDIO_URI + "fenomendans/" + defaultQuality + "/icecast.audio" },
        FENOMEN_CLUBBIN: { name: "fenomenclubbin", url: URI + "fenomenclubbin" + QUERY_STRING, icecast: AUDIO_URI + "fenomenclubbin/" + defaultQuality + "/icecast.audio" },
        FENOMEN_RAP: { name: "fenomenrap", url: URI + "fenomenrap" + QUERY_STRING, icecast: AUDIO_URI + "fenomenrap/" + defaultQuality + "/icecast.audio" },
        FENOMEN_AKUSTIK: { name: "fenomenakustik", url: URI + "fenomenakustik" + QUERY_STRING, icecast: AUDIO_URI + "fenomenakustik/" + defaultQuality + "/icecast.audio" },
        FENOMEN_ORIENTAL: { name: "fenomenoriental", url: URI + "fenomenoriental" + QUERY_STRING, icecast: AUDIO_URI + "fenomenoriental/" + defaultQuality + "/icecast.audio" }

    }

	/**
	* Returns the desired radio channel as an object
	* @param {function} callback  callback function
	* @param {object} channel channel name
	* @param {number} quality sound quality default=128 	
	*/
    this.get = function (callback, channel, quality = 128) {

        if (quality != 64 && quality != 128 && quality != 256) {

            quality = 128;
        }

        if ((quality == 256) && (channel != this.channels.FENOMEN || channel != this.channels.FENOMEN_TURK)) {

            quality = 128;
        }

        fetch(channel.url).then(function (data) {

            return data.json();
        
        }).then(function (json) {

            let obj = {

                audio: {
                    src: AUDIO_URI + channel.name + "/" + quality + "/icecast.audio",
                    type: "audio/mpeg",
                    quality: quality
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