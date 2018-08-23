var electron = require('electron');
var fs = require('fs');
var shell = require('shelljs');
//const smalltalk = require('smalltalk/native');
// shell.config.execPath = process.execPath;

$("#compile").click(function(){
    shell.exec('echo Start compiling and uploading',{async:true}).stdout;
    shell.exec('make -C ./arduino_files/test_led/ ',{async:true}).stdout;
    shell.exec('/Applications/Arduino.app/Contents/Java/hardware/tools/avr/bin/avrdude -C/Applications/Arduino.app/Contents/Java/hardware/tools/avr/etc/avrdude.conf -v -pm328p -carduino -b115200  -P/dev/cu.usbserial-AI06B9PO -Uflash:w:./arduino_files/test_led/build-uno/test_led.hex:i -carduino',{async:true}).stdout;
    shell.exec('echo upload successfully',{async:true}).stdout;

    var code = Blockly.Kidtronics.workspaceToCode(workspace);
    $('#codeArea').val(code);

    fs.writeFile('./arduino_files/test_led/test_led.ino', code); 
});

$("#devices_list").click(function(){
    console.log("hi");
    $('#devices_list').empty();
    var files = shell.ls('-A','/dev');
    var count = 0;
    for(var i = 0; i < files.length; i++){
        var subStr = files[i].substring(0,6);
        if(subStr === 'cu.usb')
        {
            count++;
            $('#devices_list').append('<option>'+files[i]+'</option>');
        }
    }
    if(count == 0){
        $('#devices_list').append('<option>'+'No device detected'+'</option>');
    }
});
