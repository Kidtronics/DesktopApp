/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

goog.provide('Blockly.Kidtronics.core');

goog.require('Blockly.Kidtronics');


Blockly.Kidtronics.core_delay = function() {
  var delay_time = Blockly.Kidtronics.valueToCode(this, 'DELAY_TIME', Blockly.Kidtronics.ORDER_ATOMIC) || '1000'
  var code = 'delay(' + delay_time + ');\n';
  return code;
};