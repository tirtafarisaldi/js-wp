import {
    amp,
    megabillboard
} from '../../../zones/megabillboard'


export function homepage(platform) {
    if (platform === 'AMP') {
        amp()
    } else {
        megabillboard('IDNTimes', 'Homepage', platform)
    }
}