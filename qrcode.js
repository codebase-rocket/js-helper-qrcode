// Info: Boilerplate library. Contains functions related to Generation of QR Code
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib = {};

// Exclusive Dependencies
var CONFIG = require('./config'); // Loader can override it with Custom-Config

// For lazy loading of QR-Code Library
let QRCode;

/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function(shared_libs, config){

    // Shared Dependencies (Must be loaded in memory already)
    Lib.Utils = shared_libs.Utils;
    Lib.Debug = shared_libs.Debug;
    Lib.Instance = shared_libs.Instance;

    // Override default configuration
    if( !Lib.Utils.isNullOrUndefined(config) ){
      Object.assign(CONFIG, config); // Merge custom configuration with defaults
    }

  };

//////////////////////////// Module-Loader END /////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return QrCode;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const QrCode = { // Public functions accessible by other modules

  /********************************************************************
  Generates a QR code for a given URL in SVG format

  @param {reference} instance - Request Instance object reference
  @param {requestCallback} cb - Callback function

  @param {String} url - URL of which QR Code is to be Generated

  @return - Thru Callback

  @callback(err, svg_string) - Request Callback.
  * @callback {Error} err - Database Error
  * @callback {String} svg_string - Generated QrCode SVG String
  *********************************************************************/
  generateQrCodeSvg: function(
    instance, cb,
    url
  ){

    // Initialize QR-Code Library if not already Initialized
    _QrCode.initIfNot();

    // Initialize Options
    var options = {
      'type': 'svg',
      'errorCorrectionLevel': 'M' // Medium (Error resistance)
    };


    // Generate SVG String
    QRCode.toString( url, options, function (err, svg_string){

      // Database Error
      if(err){
        return cb(err); // Return error and exit
      }


      // Reach here means all Good

      // Return, generated SVG string
      return cb(
        null,
        svg_string
      );

    });

  }

};///////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _QrCode = { // Private functions accessible within this modules only

  /********************************************************************
  Initialize QR-Code library - Only if not already initialized

  @return - None
  *********************************************************************/
  initIfNot: function(){

    // Initialize only if 'qrcode' object is not already Initialized
    if( !Lib.Utils.isNullOrUndefined(QRCode) ){
      return; // Do not proceed since already initalized
    }


    // Dependency - QR-Code Library
    QRCode = require('qrcode');

  },

};/////////////////////////Private Functions END////////////////////////////////
