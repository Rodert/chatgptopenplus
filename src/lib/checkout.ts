import { site, type CheckoutKey } from '../config/site'

export function openCheckout(key: CheckoutKey = 'plus') {
  const target = site.checkout[key].url
  window.open(target, '_blank', 'noopener,noreferrer')
}
