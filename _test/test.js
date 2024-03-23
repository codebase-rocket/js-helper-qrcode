// Info: Test Cases
'use strict';

const fs = require('fs')

// Shared Dependencies
var Lib = {};


// Dependencies
Lib.Utils = require('js-helper-utils');
Lib.Debug = require('js-helper-debug')(Lib);
Lib.Instance = require('js-helper-instance')(Lib);
const QrCode = require('js-helper-qrcode')(Lib);

////////////////////////////SIMILUTATIONS//////////////////////////////////////

function output_handler(err, response){ // Result are from previous function

  if(err){ // If error
    Lib.Debug.log('err:', JSON.stringify(err) );
  }
  else{

    fs.writeFile("output.js", response, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
      console.log("JSON file has been saved.");
    });
    // Lib.Debug.log('response:', response );
  }

};

///////////////////////////////////////////////////////////////////////////////


/////////////////////////////STAGE SETUP///////////////////////////////////////

// Initialize 'instance'
var instance = Lib.Instance.initialize();

///////////////////////////////////////////////////////////////////////////////


/////////////////////////////////TESTS/////////////////////////////////////////

// Test generateQrCodeSvg()
// QrCode.generateQrCodeSvg(
//   instance,
//   output_handler,
//   // 'http://example.com/' // url
//   'http://restroworks.com/' // url
//   // 'http://www.example.net/foo/bar.html' // url
//   // 'http://www.example.org' // url
//   // 'https://www.qrcode-monkey.com' // url
//   // 'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=Hello%20world' // url
// );
