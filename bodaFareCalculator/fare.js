function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;
  const travelFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + travelFare;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${travelFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki!");
}
const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

const distanceInKm = prompt(5);
if ( (distanceInKm)&& distanceInKm > 4) {
  calculateBodaFare(distanceInKm);
}  {
  console.log("Tafadhali ingiza nambari halali ya kilomita.");
}
