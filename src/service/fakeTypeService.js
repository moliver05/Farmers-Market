export const types = [
  { _id: '1', name: 'Meat' },
  { _id: '2', name: 'Fruits' },
  { _id: '3', name: 'Veggies' }
];

export function getTypes() {
  return types.filter(g => g);
}
