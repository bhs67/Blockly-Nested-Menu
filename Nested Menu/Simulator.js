'use strict';
// Block Factory - https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
// ... Names have been changed to clarify which are nemes
// ... Comments have been added to clarify actions
Blockly.defineBlocksWithJsonArray
([
  {
    // "typeSimulator" is the name for javascript.javascriptGenerator.forBlock{}
    "type": "typeSimulator",
    // The word "Simulator" is displayed on Block screen
    "message0": "Simulator %1 %2 %3 %4 %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_label_serializable",
        // "initializationBlocksName" is in javascript.javascriptGenerator.forBlock{}
        "name": "initializationBlocksName",
        // "The words "... Put initialization blocks here" are displayed on the Block screen
        "text": "... Put initialization blocks here"
      },
      {
        "type": "input_statement",
        // "initializationBlocksName" is in javascript.javascriptGenerator.forBlock{}
        "name": "initializationBlocksName"
      },
      {
        "type": "field_label_serializable",
        // "runBlocksName" is in javascript.javascriptGenerator.forBlock{}
        "name": "runBlocksName",
        // The words "... Put run blocks here" are displayed on the Block screen
        "text": "... Put run blocks here"
      },
      {
        "type": "input_statement",
        // "runBlocksName" is in javascript.javascriptGenerator.forBlock{}
        "name": "runBlocksName "
      },
    ],
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  }]);

// Used to generate and run JavaScript
javascript.javascriptGenerator.forBlock['typeSimulator'] = function(block, generator) {
  // Put initialization blocks here
  var field_initializationblocks = block.getFieldValue('initializationBlocksName');
  var statements_initializationblocks = generator.statementToCode(block, 'initializationBlocksName');
  // Put run blocks here
  var field__runblocks_ = block.getFieldValue('runBlocksName');
  var statements_runblocks_ = generator.statementToCode(block, 'runBlocksName ');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};