import {
    leaderboard
} from '../../../zones/leaderboard'
import {
    amp,
    megabillboard
} from '../../../zones/megabillboard'


export function homepage(platform) {
    if (platform === 'AMP') {
        amp()
    } else {
        megabillboard('IDNTimes', 'Homepage', platform)
        leaderboard('IDNTimes', 'Homepage', platform)
    }
}