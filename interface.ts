interface LabeledValue {
  label: string;
  // [propName: string]: any; // another way to get around excess type check
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
  // console.log(labeledObj.size);  // this would cause error
}

// const myObj = { size: 10 }; // this would cause error
const myObj = { size: 10, label: "Size 10 Object" };

// printLabel({ size: 10, label: "Size 10 Object" }); // excess error type check for Object literal
printLabel({ size: 11, label: "Size 11 Object" } as LabeledValue);
printLabel(myObj);
