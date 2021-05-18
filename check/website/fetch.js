function setup() {
    createCanvas(300, 200);
    console.log('running');

    var buttonA = select('#analyze');
    buttonA.mousePressed(analyzeThis);
  }

  function analyzeThis() {
    var txt = select('#textinput').value();
  
    var data = {
      text: txt
    };
    httpPost('coins', data, 'json', dataPosted, postErr);
  }

  function dataPosted(result) {
    var f_result = JSON.stringify(result);
    console.log(f_result);
  }
  
  function postErr(result) {
    var f_result = JSON.stringify(result);
    console.log(f_result);
  }
