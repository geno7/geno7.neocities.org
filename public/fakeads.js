  /*
  Random Image Script- By JavaScript Kit (http://www.javascriptkit.com) 
  Over 400+ free JavaScripts here!
  Keep this notice intact please
  */
 function random_imglink(){
    var myimages=new Array()
    //specify random images below. You can have as many as you wish
    myimages[1]="https://web.archive.org/web/20010625102217/http://www.geocities.com:80/SiliconValley/Network/1123/moneybanner207kb.gif"
    myimages[2]="https://web.archive.org/web/20060207205428/http://www.geocities.com/services1900/makemoneyanim.gif"
    myimages[3]="https://web.archive.org/web/20090729224604/http://www.geocities.com/affie_bj/Make_Money_Now.gif"
    myimages[4]="https://web.archive.org/web/20041210220648/http://www.geocities.com:80/alex_yeunghw/makemoney.gif"
    myimages[5]="https://web.archive.org/web/20090829182640/http://geocities.com/Area51/Aurora/1030/money1.gif"
    myimages[6]="https://web.archive.org/web/20091027052215/http://geocities.com/money_world.geo/images/banner_clickdough.gif"
    myimages[7]="https://web.archive.org/web/20091027080515/http://geocities.com/ezine1012001/addesign12.gif"
    myimages[8]="https://web.archive.org/web/20090901211631/http://geocities.com/egoldplus/addesignn.gif"
    myimages[9]="https://web.archive.org/web/20091021125040/http://www.geocities.com/cube_haven/addesign.gif"
    myimages[10]="https://web.archive.org/web/20090808095439/http://www.geocities.com/frank_verdonck/addesign.gif"
    myimages[11]="https://web.archive.org/web/20091021191838/http://www.geocities.com/lilyquinnlilacjill/addesign-roadsign.gif"
    myimages[12]="https://web.archive.org/web/20090727120430/http://uk.geocities.com/adsites@btinternet.com/gbanner.gif"
    myimages[13]="https://web.archive.org/web/20090831053435/http://geocities.com/patialaonline/images/adforwebsite.gif"
    myimages[14]="https://web.archive.org/web/20090830120511/http://geocities.com/chevist1/ad-005.gif"
    myimages[15]="https://web.archive.org/web/20091024170731/http://www.geocities.com/zifonex/yourad.gif"
    myimages[16]="https://web.archive.org/web/20091027013213/http://geocities.com/hminus_2000/images/yourad.gif"
    myimages[17]="https://web.archive.org/web/20090829140903/http://geocities.com/christianwitnessesforjehovah/addesign.gif"
    myimages[18]="https://web.archive.org/web/20091021155506/http://www.geocities.com/fse80214/VirtualCasinoSMALLAd.gif"
    myimages[19]="https://web.archive.org/web/20091019141819/http://www.geocities.com/justicepeacedemocracy/addesigntellbushno.gif"
    myimages[20]="https://web.archive.org/web/20090901232609/http://www.geocities.com/mizingdijitz/addesign-OldiesMusicNewBand.gif"
    myimages[21]="https://web.archive.org/web/20091019151550/http://www.geocities.com/govconspiracytheory/addesign2.gif"
    myimages[22]="https://web.archive.org/web/20090901231301/http://www.geocities.com/pro_teen12/addesign2.gif"
    myimages[23]="https://web.archive.org/web/20090831203803/http://www.geocities.com/lisanfl/addesign.gif"
    myimages[24]="https://pbs.twimg.com/media/DQ3EhJoUIAEvoVG.jpg"
    myimages[25]="http://geoshities.com/dipstick/waligieweb_icon_master_file_v2_FINAL.gif"
    
    var ry=Math.floor(Math.random()*myimages.length)
    if (ry==0)
    ry=1
    document.write('<img src="'+myimages[ry]+'" style="max-width: 100%" border=0>')
    }
    random_imglink()
    //-->