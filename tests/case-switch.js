
// using switch / case
function handleStatus(status) {
    switch (status) {
        case 'success':
            return 'Operation successful'
        case 'error':
            return 'An error occurred'
        case 'loading':
            return 'Loading ...'
        default:
            return 'Unknown status'
    }
}

// using TS-pattern
import { match } from 'ts-pattern'

function handlestatus(status) {
    return match(status)
        .with('success', () => 'Operation successful')
        .with('error', () => 'An error occured')
        .with('loading', () => 'Loading ...')
        .otherwise(() => 'Unknown status')
}