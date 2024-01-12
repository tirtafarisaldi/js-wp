import {
    homepage
} from './channels/Homepage'

export function idntimes(channel, platform) {
    switch (channel) {
        case 'Homepage':
            homepage(platform);
            break;
        default:
            console.warn(`No handler defined for Channel`);
    }
}