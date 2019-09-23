interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
  // console.log(labeledObj.size);  // this would cause error
}

// const myObj = { size: 10 }; // this would cause error
const myObj = { size: 10, label: "Size 10 Object" };

printLabel(myObj);
