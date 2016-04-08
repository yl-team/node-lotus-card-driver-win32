/**
 * Created by wu on 2016/3/30.
 */


var lt = require('./lib');


var test=function(){
    var nHandle=lt.LotusCardOpenDevice('',0,0,0,200,null);
    for (var i=0;i<1;i++)
        console.log(nHandle);
    var wt = lt.writeData(nHandle,'123456789');
    console.log('write :',wt);
    try{
    var card =  lt.readUserCard(nHandle);
    console.log('card:',card);
    console.log('card_no:',card.card_no);
    console.log('card_token:',card.token);
    }catch(ex){}
    readData(nHandle);
    //lt.Request(nHandle,0x52,);
    //try {
    //    var ret = lt.LotusCardBeep(nHandle, 200);
    //    console.log(ret);
    //}catch(ex) {
    //    console.log(ex);
    //}
    lt.LotusCardCloseDevice(nHandle);

};

test();
