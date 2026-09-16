import { duplex185, cottage228, type ProductId } from './products';

// Discount confirmed by the project owner on 2026-09-16.
// No end date, base price or stacking with financing has been confirmed.
export const offer = {
  discountPerM2Usd: 50,
} as const;

export function residenceOffer(id: ProductId) {
  const product = id === 'duplex-185' ? duplex185 : cottage228;
  return { product, savingUsd: product.areaM2 * offer.discountPerM2Usd };
}
export const formatUsd = (value: number) => new Intl.NumberFormat('uk-UA').format(value);
