'use strict';


function submit() {
  var inputFormat = parseInt(document.querySelector('#inputFormat').value);
  var outputFormat = parseInt(document.querySelector('#outputFormat').value);
  var input = document.querySelector('#input').value;
  var output;
  var displayOut;

  if (input == '') {
    output = 'Input Required';
  } else if (inputFormat == outputFormat) {
    output = input;
  } else {
    output = format(input, inputFormat, outputFormat);
  }
  displayOut = displayInfo(inputFormat,outputFormat);
  document.querySelector('.info').innerHTML = displayOut;
  document.querySelector('#output').value = output;
}

function swap() {
  var inputFormat = document.querySelector('#inputFormat').value;
  var outputFormat = document.querySelector('#outputFormat').value;
  document.querySelector('#inputFormat').value = outputFormat;
  document.querySelector('#outputFormat').value = inputFormat;
}

function format(input, inputFormat, outputFormat) {
  var temp, output;
  switch (inputFormat) {
    case 1:
      temp = parseInt(input, 2);
      break;
    case 2:
      temp = parseInt(input, 8);
      break;
    case 3:
      temp = parseInt(input, 10);
      break;
    case 4:
      temp = parseInt(input, 16);
      break;
  }
  switch (outputFormat) {
    case 1:
      output = temp.toString(2);
      break;
    case 2:
      output = temp.toString(8);
      break;
    case 3:
      output = temp.toString(10);
      break;
    case 4:
      output = temp.toString(16);
      break;
  }
  return output;
}

function displayInfo(inputFormat,outputFormat) {
  var temp;
  switch (inputFormat) {
    case 1:
        temp = binaryConversion(outputFormat);
      break;
    case 2:
        temp = octalConversion(outputFormat);
      break;
    case 3:
      temp = dectoHex(outputFormat);
      break;
    case 4:
        switch(outputFormat) {
          case 1:
            temp = hexToBinary();
            break;
          case 2:
            temp = hexToOct() ;
            break;
          case 3:
            temp = `<h4>How to convert from hex to decimal</h4 >
            <div>Multiply each digit of the hex number with its corresponding power of 16 and sum:</div>
  
            <div>decimal = dn-1×16^n-1 + . . . + d3×16^3 + d2×16^2 + d1×16^1+d0×16^0</div>
            <div><div>Example:</div>
            3B in base 16 is equal to each digit multiplied with its corresponding 16^n:
            
            <div>3B = 3×16^1 + 11×16^0 = 48 + 11 = 59</div></div>
        </div>`;
            break;
          case 4:
            temp = `<h4>How to convert from hex to decimal</h4 >
            <div>Multiply each digit of the hex number with its corresponding power of 16 and sum:</div>
  
            <div>decimal = dn-1×16^n-1 + . . . + d3×16^3 + d2×16^2 + d1×16^1+d0×16^0</div>
            <div><div>Example:</div>
            3B in base 16 is equal to each digit multiplied with its corresponding 16^n:
            
            <div>3B = 3×16^1 + 11×16^0 = 48 + 11 = 59</div></div>
        </div>`;
            break;
        }
      break;
  }
  return temp;
}


function hexToOct(){
  var textToBeDisplayed = `<h4>How to convert hex to octal</h4>
  <div>Convert every hex digit to 4 binary digits, with this table:</div>
  <div class="div-info">
  <table class="table-info">
  <thead><tr><th class="table-info">Hex</th><th class="table-info">Binary</th></tr></thead>
  <tbody><tr><td class="table-info">0</td><td class="table-info">0000</td></tr><tr><td class="table-info">1</td><td class="table-info">000</td></tr>
  <tr><td class="table-info">2</td><td class="table-info">0010</td></tr><tr><td class="table-info">3</td><td class="table-info">0011</td></tr>
  <tr><td class="table-info">4</td><td class="table-info">0100</td></tr><tr><td class="table-info">5</td><td class="table-info">0101</td></tr>
  <tr><td class="table-info">6</td><td class="table-info">0110</td></tr><tr><td class="table-info">7</td><td class="table-info">0111</td></tr></tbody>
  </table>
  <table class="table-info">
        <thead><tr><th class="table-info">Hex</th><th class="table-info">Binary</th></tr></thead>
        <tbody>
            <tr><td class="table-info">8</td><td class="table-info">1000</td></tr>
            <tr><td class="table-info">9</td><td class="table-info">1001</td></tr>
            <tr><td class="table-info">A</td><td class="table-info">1010</td></tr>
            <tr><td class="table-info">B</td><td class="table-info">1011</td></tr>
            <tr><td class="table-info">C</td><td class="table-info">1100</td></tr>
            <tr><td class="table-info">D</td><td class="table-info">1101</td></tr>
            <tr><td class="table-info">E</td><td class="table-info">1110</td></tr>
            <tr><td class="table-info">F</td><td class="table-info">1111</td></tr>
        </tbody>
    </table>
  </div>
  <div>Then convert every 3 binary digits from bit 0 to 1 octal digit, with this table:</div>
  <div><table class="table-info">
  <thead><tr><th>Binary</th><th>Octal</th></tr></thead>
  <tbody>
      <tr><td class="table-info">000</td><td class="table-info">0</td></tr>
      <tr><td class="table-info">001</td><td class="table-info">1</td></tr>
      <tr><td class="table-info">010</td><td class="table-info">2</td></tr>
      <tr><td class="table-info">011</td><td class="table-info">3</td></tr>
      <tr><td class="table-info">100</td><td class="table-info">4</td></tr>
      <tr><td class="table-info">101</td><td class="table-info">5</td></tr>
      <tr><td class="table-info">110</td><td class="table-info">6</td></tr>
      <tr><td class="table-info">111</td><td class="table-info">7</td></tr>
  </tbody>
</table></div>
<div>Example: Convert hex 6C to octal:</div>
<div>6C = 6 C = 110 1100 = 1101100</div>
<div>1101100 = 1 101 100 = 1 5 4 = 154</div>`;
return textToBeDisplayed;
}

function hexToBinary(){
  return `<h4>How to convert hex to octal</h4>
  <div>Convert every hex digit to 4 binary digits, with this table:</div>
  <div class="div-info">
  <table class="table-info">
  <thead><tr><th class="table-info">Hex</th><th class="table-info">Binary</th></tr></thead>
  <tbody><tr><td class="table-info">0</td><td class="table-info">0000</td></tr><tr><td class="table-info">1</td><td class="table-info">000</td></tr>
  <tr><td class="table-info">2</td><td class="table-info">0010</td></tr><tr><td class="table-info">3</td><td class="table-info">0011</td></tr>
  <tr><td class="table-info">4</td><td class="table-info">0100</td></tr><tr><td class="table-info">5</td><td class="table-info">0101</td></tr>
  <tr><td class="table-info">6</td><td class="table-info">0110</td></tr><tr><td class="table-info">7</td><td class="table-info">0111</td></tr></tbody>
  </table>
  <table class="table-info">
        <thead><tr><th class="table-info">Hex</th><th class="table-info">Binary</th></tr></thead>
        <tbody>
            <tr><td class="table-info">8</td><td class="table-info">1000</td></tr>
            <tr><td class="table-info">9</td><td class="table-info">1001</td></tr>
            <tr><td class="table-info">A</td><td class="table-info">1010</td></tr>
            <tr><td class="table-info">B</td><td class="table-info">1011</td></tr>
            <tr><td class="table-info">C</td><td class="table-info">1100</td></tr>
            <tr><td class="table-info">D</td><td class="table-info">1101</td></tr>
            <tr><td class="table-info">E</td><td class="table-info">1110</td></tr>
            <tr><td class="table-info">F</td><td class="table-info">1111</td></tr>
        </tbody>
    </table></div>
    <div>Example: Convert hex 6C to Binary:</div>
<div>6C = 6 C = 110 1100 = 1101100</div>`;
}

function dectoHex(outputFormat){
  var outputType;
  var outputBase;
  var example;
  var exampleValue;
  var exampleOutput;
  if(outputFormat === 1){
    outputType = 'Binary';
    outputBase = 2;
    example = `<table class="table-info">
                <thead>
                    <tr><th class="table-info">Division by 2</th><th class="table-info">Quotient</th><th class="table-info">Remainder</th><th class="table-info">Bit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="table-info">13/2</td><td class="table-info">6</td><td class="table-info">1</td><td class="table-info">0</td>
                    </tr>
                    <tr><td class="table-info">6/2</td><td class="table-info">3</td><td class="table-info">0</td><td class="table-info">1</td>
                    </tr>
                    <tr><td class="table-info">3/2</td><td class="table-info">1</td><td class="table-info">1</td><td class="table-info">2</td>
                    </tr>
                    <tr><td class="table-info">1/2</td><td class="table-info">0</td><td class="table-info">1</td><td class="table-info">3</td>
                    </tr>
                </tbody>
              </table>`;
    exampleValue = 13;
    exampleOutput = `So 13 = 1101`;
  }else if(outputFormat === 2){
    outputType = 'Octal';
    outputBase = 8;
    exampleOutput = `So 7562 = 16612`;
    exampleValue = 7562;
    example = `<table class="table-info">
                  <thead>
                      <tr><th class="table-info">Division by 8</th><th class="table-info">Quotient</th><th class="table-info">Remainder</th><th class="table-info">Digit</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr><td class="table-info">7562/8</td><td class="table-info">945</td><td class="table-info">2</td><td class="table-info">0</td>
                      </tr>
                      <tr><td class="table-info">945/8</td ><td class="table-info">118</td><td class="table-info">1</td><td class="table-info">1</td>
                      </tr>
                      <tr><td class="table-info">118/8</td><td class="table-info">14</td><td class="table-info">6</td><td class="table-info">2</td>
                      </tr>
                      <tr><td class="table-info">14/8</td><td class="table-info">1</td><td class="table-info">6</td><td class="table-info">3</td>
                      </tr>
                      <tr><td class="table-info">1/8</td><td class="table-info">0</td><td class="table-info">1</td><td class="table-info">4</td>
                      </tr>
                  </tbody>
                </table>`;
  }else {
    outputType = 'Hex';
    outputBase = 16;
    exampleOutput = `So 7562 = 1D8A`;
    exampleValue = 7562;
    example = `<table class="table-info">
    <thead>
        <tr><th class="table-info">Division by 16</th><th class="table-info">Quotient</th><th class="table-info">Remainder<div>(decima)</div></th><th class="table-info">Remainder<div>(hex)</div></th><th class="table-info">Digit</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="table-info">7562/16</td><td class="table-info">472</td><td class="table-info">10</td><td class="table-info">A</td><td class="table-info">0</td>
        </tr>
        <tr><td class="table-info">472/16</td ><td class="table-info">29</td><td class="table-info">8</td><td class="table-info">8</td><td class="table-info">1</td>
        </tr>
        <tr><td class="table-info">29/16</td><td class="table-info">1</td><td class="table-info">13</td><td class="table-info">D</td><td class="table-info">2</td>
        </tr>
        <tr><td class="table-info">1/16</td><td class="table-info">0</td><td class="table-info">1</td><td class="table-info">1</td><td class="table-info">3</td>
        </tr>
    </tbody>
  </table>`;
  }

  return `<h4>How to convert from Decimal to ${outputType}</h4>
  <h6>Conversion steps:</h6>
  <div>
    <ol>
      <li>Divide the number by ${outputBase}.</li>
      <li>Get the integer quotient for the next iteration.</li>
      <li>Get the remainder for the ${outputType} digit.</li>
      <li>Repeat the steps until the quotient is equal to 0.</li>
    </ol>
  </div>
  <div>Convert ${exampleValue} to ${outputType}:
  ${example}
  <div>${exampleOutput}</div>`
}

function octalConversion(outputFormat){
  var binArr = ['0000','0001','0010','0011','0100','0101','0110','0111','1000','1001','1010','1011',
                  '1100','1101','1110','1111'];
  let octTable = "";
  let binTable = "";
  var displayTable;
  var outputType;
  var example;
  for(var i=0;i<8;i++){
    octTable = octTable + `<tr><td class="table-info">${i}</td><td class="table-info">${binArr[i].slice(1)}</td></tr>`;
    binTable = binTable + `<tr><td class="table-info">${binArr[i]}</td><td class="table-info">${i}</td></tr>`;
  }
  for(var i=8;i<16;i++){
    binTable = binTable + `<tr><td class="table-info">${binArr[i]}</td><td class="table-info">${i.toString(16).toUpperCase()}</td></tr>`;
  }

  if(outputFormat === 1){
    outputType = 'Binary';
    displayTable = `<div>Convert every octal digit to 3 binary digits, with this table:</div>
    <table class="table-info">
        <thead>
            <tr><th class="table-info">Octal</th><th class="table-info">Binary</th></tr>
        </thead>
        <tbody>
            ${octTable}
        </tbody>
    </table>`;
    example = `<div>Convert octal 154 to binary:</div>
                <div>154 = 1 5 4 = 1 101 100 = 1101100</div>`
  } else if(outputFormat === 3){
    outputType = 'Decimal';
    displayTable = `<div>Multiply each digit of the hex number with its corresponding power of 8 and sum:</div>
                    <div> decimal = dn-1×8^n-1 + . . . + d3×8^3 + d2×8^2 + d1×8^1+d0×8^0</div>`;
    example = `<div>Convert octal 37 to decimal:</div>
    <div>37 = 3×8^1 + 7×8^0 = 24 + 7 = 31</div>`
  } else {
    outputType = 'Hex';
    displayTable = `<div>Convert every octal digit to 3 binary digits, with this table:</div>
      <table class="table-info">
          <thead>
              <tr><th class="table-info">Octal</th><th class="table-info">Binary</th></tr>
          </thead>
          <tbody>
              ${octTable}
          </tbody>
      </table>
      <div>Then convert every 4 binary digits from bit0 to 1 hex digit, with this table:</div>
      <table class="table-info">
          <thead>
              <tr><th class="table-info">Binary</th><th class="table-info">Hex</th></tr>
          </thead>
          <tbody>
              ${binTable}
          </tbody>
      </table>`;
      example = `<div>Convert octal 154 to hex:</div>
                  <div>154 = 001 101 100 = 001101100</div>
                  <div>001101100 = 0110 1100 = 6C</div>`
  }
  
  return `<h4>How to convert octal to ${outputType}</h4> ${displayTable} <div>Example:</div> ${example}`;
}

function binaryConversion(outputFormat){
    var binArr = ['0000','0001','0010','0011','0100','0101','0110','0111','1000','1001','1010','1011',
                  '1100','1101','1110','1111'];
    var binTable = "";
    var octTable = "";
    var outputType;
    var displayTable;
    var example;

      for(var i=0;i<16;i++){
        binTable = binTable + `<tr><td class="table-info">${binArr[i]}</td><td class="table-info">${i.toString(16).toUpperCase()}</td></tr>`;
      }
      for(var i=0;i<8;i++){
        octTable = octTable + `<tr><td class="table-info">${binArr[i].slice(1)}</td><td class="table-info">${i}</td></tr>`;
      }

    if(outputFormat === 2){
        outputType = "Octal";
        example = `<div>Convert binary 1101100 to octal:</div>
                    <div>Convert every 3 binary bits (from bit0) to octal digit:</div>
                    <div>1101100 = 1 101 100 = 1 5 4 = 154</div>`;
        displayTable = `<div>Convert every 3 binary digits octal digit, with this table:</div>
        <table class="table-info">
            <thead>
                <tr><th class="table-info">Binary</th><th class="table-info">Octal</th></tr>
            </thead>
            <tbody>
                ${octTable}
            </tbody>
        </table>`
    }else if(outputFormat === 3){
        outputType = "Decimal";
        example = `<div>Convert binary 111001 to decimal:</div>
                    <div>111001 = 1x2^5 + 1x2^4 + 1x2^3 + 0x2^2 + 0x2^1 + 1x2^0 = 57</div>`
        displayTable = `<div>The decimal number is equal to the sum of binary digits (dn) times their power of 2 (2^n):</div>
                      <div>decimal = dn-1x2^n-1 + . . . + d2x2^2 + d1x2^1 + d0x2^0</div>`
    }else{
        outputType = "Hex";
        example = `<div>Convert binary 1101100 to hex:</div>
                  <div>Convert every 4 binary bits (from bit0) to hex digit:</div>
                  <div>1101100 = 110 1100 = 6 C = 6C</div>`
        displayTable = `<div>Convert every 4 binary digits (start from bit 0) to 1 hex digit, with this table:</div>
        <table class="table-info">
            <thead>
                <tr><th class="table-info">Binary</th><th class="table-info">Hex</th></tr>
            </thead>
            <tbody>
                ${binTable}
            </tbody>
        </table>`
    }

    return `<h4>How to convert octal to ${outputType}</h4> ${displayTable} <div>Example:</div> ${example}`;
}