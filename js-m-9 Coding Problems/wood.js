/**
 * chair --> 3 cft
 * table --> 10cft
 * khat ----> 50 cft
 */
function woodcalculator(chairQuantity,tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const pertableWood = 10;
    const perbedWood = 50;

    const perChairWoodCost = 10;
    const pertableWoodCost = 50;
    const perbedWoodCost = 100;

    const chairwood = chairQuantity * perChairWood;
    const tablewood = tableQuantity * pertableWood;
    const bedwood = bedQuantity * perbedWood;


    const chairWoodCostInTaka = chairQuantity * perChairWood * perChairWoodCost;
    const tableWoodCostInTaka = tableQuantity * pertableWood * pertableWoodCost;
    const bedWoodCostInTaka = bedQuantity * perbedWoodCost * perbedWood;

    const totalWoodCost = chairWoodCostInTaka + tableWoodCostInTaka + bedWoodCostInTaka;
    console.log(totalWoodCost);

    const totalwood = chairwood + bedwood + tablewood;
//     console.log('chair needed :',chairQuantity,'pices.',
//    "Table needed:" ,tableQuantity,"pices.","bed needed:",bedQuantity,"pices.");
    return totalwood;
    
}

const totalCost = woodcalculator(6,2,2)
console.log('total wood required:',totalCost);