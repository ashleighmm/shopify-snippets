//  Select a plan data structure
let plansObj = {
  basicPlan: {
    name: "Basic Shopify",
    payment: "",
    monthlyPrice: "29",
    creditCardRates: {
      online: "",
      inPerson: ""
    },
    transactionFees: "None"
  },
  shopify: {
    name: "Shopify",
    payment: "",
    monthlyPrice: "79",
    creditCardRates: {
      online: "",
      inPerson: ""
    },
    transactionFees: "None"
  },
  advancedShopify: {
    name: "Advanced Shopify",
    payment: "",
    monthlyPrice: "299",
    creditCardRates: {
      online: "",
      inPerson: ""
    },
    transactionFees: "None"
  },
  shopifyPlus: {
    name: "Shopify Plus",
    payment: "",
    monthlyPrice: "2000",
    creditCardRates: {
      online: "",
      inPerson: ""
    },
    transactionFees: "None"
  }
};
/* --  Nav pills in plan selector -- */
var plansMonthly = document.getElementById("plansMonthly");
var plansAnnual = document.getElementById("plansAnnual");
var plansBiennial = document.getElementById("plansBiennial");
var planDiscount = 0;
var tabEl = document.querySelectorAll('a[data-bs-toggle="tab"]');

for (var i = 0; i < tabEl.length; i++) {
  tabEl[i].addEventListener("click", function (e) {
    e.preventDefault();
    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";

    if (this.id === "plansMonthly") {
      planDiscount = 0;
    } else if (this.id === "plansAnnual") {
      planDiscount = 10;
    } else if (this.id === "plansBiennial") {
      planDiscount = 20;
    }
    //Update plans with plan discount
    updatePlans(avgOrderPriceRange, avgOrdersMonthlyRange);
  });
}

let avgOrderPrice = document.getElementById("avgOrderPrice");
let avgOrdersMonthly = document.getElementById("avgOrdersMonthly");
var sliders = document.querySelectorAll(".form-range");

// Plan cards
let basicPlanPayment = document.getElementById("basicPlanPayment");
let shopifyPlanPayment = document.getElementById("shopifyPlanPayment");
let shopifyAdvancedPlanPayment = document.getElementById(
  "shopifyAdvancedPlanPayment"
);
let shopifyPlusPlanPayment = document.getElementById("shopifyPlusPlanPayment");

// Update the current slider value (each time you drag the slider handle)
var avgOrdersMonthlyRange = "";
var avgOrderPriceRange = "";
for (var i = 0; i < sliders.length; i++) {
  sliders[i].oninput = function () {
    //console.log(this.id);
    avgOrderPrice.innerHTML = sliders[0].value;
    avgOrdersMonthly.innerHTML = sliders[1].value;
    avgOrderPriceRange = sliders[0].value;
    avgOrdersMonthlyRange = sliders[1].value;
    updatePlans(avgOrderPriceRange, avgOrdersMonthlyRange);
    //calculateBasicPlan(avgOrderPriceRange, avgOrdersMonthlyRange);
  };
}

let calculateBasicPlan = (avgOrderPriceRange, avgOrdersMonthlyRange) => {
  var payment = avgOrderPriceRange * avgOrdersMonthlyRange;
  //Update plan with plan discount
  payment = payment - (payment / 100) * planDiscount;
  return payment.toFixed(0);
};
let calculateShopifyPlan = (avgOrderPriceRange, avgOrdersMonthlyRange) => {
  var payment = avgOrderPriceRange * avgOrdersMonthlyRange - 200;
  //Update plan with plan discount
  payment = payment - (payment / 100) * planDiscount;
  return payment.toFixed(0);
};
let calculateShopifyAdvancedPlan = (
  avgOrderPriceRange,
  avgOrdersMonthlyRange
) => {
  var payment = avgOrderPriceRange * avgOrdersMonthlyRange - 500;
  //Update plan with plan discount
  payment = payment - (payment / 100) * planDiscount;
  return payment.toFixed(0);
};
let calculateShopifyPlusPlan = (avgOrderPriceRange, avgOrdersMonthlyRange) => {
  var payment = avgOrderPriceRange * avgOrdersMonthlyRange - 800;
  //Update plan with plan discount
  payment = payment - (payment / 100) * planDiscount;
  return payment.toFixed(0);
};

let updatePlans = (avgOrderPriceRange, avgOrdersMonthlyRange) => {
  // Update Basic Plan (obj) payment
  plansObj.basicPlan.payment = calculateBasicPlan(
    avgOrderPriceRange,
    avgOrdersMonthlyRange
  );
  basicPlanPayment.innerHTML = plansObj.basicPlan.payment;

  // Update Shopify Plan (obj) payment
  plansObj.shopify.payment = calculateShopifyPlan(
    avgOrderPriceRange,
    avgOrdersMonthlyRange
  );
  shopifyPlanPayment.innerHTML = plansObj.shopify.payment;

  // Update Shopify Advanced Plan (obj) payment
  plansObj.advancedShopify.payment = calculateShopifyAdvancedPlan(
    avgOrderPriceRange,
    avgOrdersMonthlyRange
  );
  shopifyAdvancedPlanPayment.innerHTML = plansObj.advancedShopify.payment;

  // Update Shopify Plus Plan (obj) payment
  plansObj.shopifyPlus.payment = calculateShopifyPlusPlan(
    avgOrderPriceRange,
    avgOrdersMonthlyRange
  );
  shopifyPlusPlanPayment.innerHTML = plansObj.shopifyPlus.payment;
};
