import forceNumber from 'force-number'

export default function hello(numberStr) {
  return 'Hello, ' + forceNumber(numberStr) + '!'
}
