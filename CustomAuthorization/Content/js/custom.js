
//live time and date
function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date();
    let year = x.getFullYear();
    let mon = ("0" + (x.getMonth() + 1)).slice(-2);
    let date = ("0" + (x.getDate())).slice(-2);
    let h = ("0" + (x.getHours())).slice(-2);
    let m = ("0" + (x.getMinutes())).slice(-2);
    let s = ("0" + (x.getSeconds())).slice(-2);
    //凌晨3點重新載入畫面
    if (h == '03' && m == '00' && s == '00') {
        location.reload();
    }
    document.getElementById('currentDate').innerText = `現在時間 : ${year}/${mon}/${date} ${h}:${m}:${s}`;
    tt = display_c();
}

function GetSetting() {
    fromSetting = true; //從設定變更開始的異動
    clearTimeout(timer);    //清除正在進行的輪播
    settingChange = true;   //異動進行中
    //Dashboard Page
    $.ajax({
        url: '../Dashboard/GetPages',
        contentType: 'application/html ; charset:utf-8',
        type: 'GET',
        dataType: 'text',
        success: function (result) {
            //Dashboard Setting
            $.ajax({
                url: '../Dashboard/GetSetting',
                contentType: 'application/html ; charset:utf-8',
                type: 'GET',
                dataType: 'text',
                success: function (result) {
                    signalRSetting = result;
                    //初次載入不更新設定
                    if (!firstFlag) {
                        //更新設定值
                        let tempObj = JSON.parse(result);
                        let newSetting = tempObj['setting'];
                        pages = tempObj['pages'];
                        settingAlertModal = newSetting.alertModal;
                        settingAlertVoice = newSetting.alertVocie;
                        settingPlay = newSetting.play;
                        settingStopPage = newSetting.stopPage;
                        //重置輪播頁面
                        nPage = 0;
                    }
                    //設定載入完畢後載入左右兩側資料
                    GetData();
                },
                error: function (e) {
                    console.log('Setting Error');
                    ConnectionFail('連線失敗');
                }
            });
        },
        error: function (e) {
            console.log('Pages Error');
            ConnectionFail('連線失敗');
        }
    });
}

function GetData() {
    dataChange = true;  //資料更新中
    connFlag = true;
    $.ajax({
        url: '../Dashboard/GetData',
        contentType: 'application/html ; charset:utf-8',
        type: 'GET',
        dataType: 'text',
        success: function (result) {
            let tempObj = JSON.parse(result);
            let alertFlag = tempObj['alert'];
            let dir = {};   //紀錄是否已經處理過群組資料；例如Fire、Leak多點時
            $('#lastUpdate').text(tempObj['lastUpdate']);
            //更新左右欄狀態資訊
            $.each(tempObj['data'], function (i, rowData) {
                switch (rowData.id) {
                    case 'PUE':
                        PUEChart.setOption(PUEGauge(s, rowData.value));
                        $('#PUE').text(rowData.value);
                        break;
                    case 'ERoomTemp':
                        ElectricalRoomTemperatureChart.setOption(Thermometer(s, rowData.value));
                        break;
                    case 'ERoomRH':
                        ElectricalRoomHumidityChart.setOption(Hygrometer(s, rowData.value));
                        break;
                    case 'ColdTemp':
                        DataCenterTemperatureChart.setOption(Thermometer(s, rowData.value));
                        break;
                    case 'ColdRH':
                        DataCenterHumidityChart.setOption(Hygrometer(s, rowData.value));
                        break;
                    case 'SysProg':
                    case 'SysConn':
                        if (rowData.value === 1) {
                            $(`#${rowData.id}`).attr('class', 'green-light-sm');
                        } else {
                            $(`#${rowData.id}`).attr('class', 'red-light-sm');
                            connFlag = false;
                        }
                        break;
                    case 'ATS':
                        if (rowData.value === 1) {
                            $(`#${rowData.id}`).attr('class', 'grey-light');
                            $(`#${rowData.id}`).closest('li').attr('class', 'list-inline-item grey-border');
                            $(`#${rowData.id}`).siblings('p').text('關閉');
                        } else {
                            $(`#${rowData.id}`).attr('class', 'green-light');
                            $(`#${rowData.id}`).closest('li').attr('class', 'list-inline-item green-border');
                            $(`#${rowData.id}`).siblings('p').text('啟動');
                        }
                        break;
                    case 'Fire':
                    case 'Leak':
                    case 'FF':
                    case 'DoorLock':
                    case 'System':
                        if (rowData.value === 0 && dir[`${rowData.id}`] === 1) {
                            dir[`${rowData.id}`] = rowData.value;
                            $(`#${rowData.id}`).attr('class', 'red-light');
                            $(`#${rowData.id}`).closest('li').attr('class', 'list-inline-item red-border');
                            $(`#${rowData.id}`).siblings('p').text('異常');
                        } else {
                            if (dir[`${rowData.id}`] === undefined) {
                                dir[`${rowData.id}`] = rowData.value;
                                if (rowData.value === 1) {
                                    $(`#${rowData.id}`).attr('class', 'green-light');
                                    $(`#${rowData.id}`).closest('li').attr('class', 'list-inline-item green-border');
                                    $(`#${rowData.id}`).siblings('p').text('正常');
                                } else {
                                    $(`#${rowData.id}`).attr('class', 'red-light');
                                    $(`#${rowData.id}`).closest('li').attr('class', 'list-inline-item red-border');
                                    $(`#${rowData.id}`).siblings('p').text('異常');
                                }
                            }
                        }
                        if (rowData.id == 'System' && rowData.value == 0) {
                            connFlag = false;
                        }
                        break;
                    case 'FireNO':
                        if (rowData.value === 1 && dir[`${rowData.id}`] === 0) {
                            dir[`${rowData.id}`] = rowData.value;
                            $(`#Fire`).attr('class', 'red-light');
                            $(`#Fire`).closest('li').attr('class', 'list-inline-item red-border');
                            $(`#Fire`).siblings('p').text('異常');
                        } else {
                            if (dir[`${rowData.id}`] === undefined) {
                                dir[`${rowData.id}`] = rowData.value;
                                if (rowData.value === 1) {
                                    $(`#Fire`).attr('class', 'red-light');
                                    $(`#Fire`).closest('li').attr('class', 'list-inline-item red-border');
                                    $(`#Fire`).siblings('p').text('異常');
                                }
                            }
                        }
                        break;
                    default:
                        if (rowData.value === 1 && dir[`${rowData.id}`] === 0) {
                            dir[`${rowData.id}`] = rowData.value;
                            $(`#${rowData.id}`).attr('class', 'red-light');
                            $(`#${rowData.id}`).closest('li').attr('class', 'list-inline-item red-border');
                            $(`#${rowData.id}`).siblings('p').text('異常');
                        } else {
                            if (dir[`${rowData.id}`] === undefined) {
                                dir[`${rowData.id}`] = rowData.value;
                                if (rowData.value === 0) {
                                    $(`#${rowData.id}`).attr('class', 'green-light');
                                    $(`#${rowData.id}`).closest('li').attr('class', 'list-inline-item green-border');
                                    $(`#${rowData.id}`).siblings('p').text('正常');
                                } else {
                                    $(`#${rowData.id}`).attr('class', 'red-light');
                                    $(`#${rowData.id}`).closest('li').attr('class', 'list-inline-item red-border');
                                    $(`#${rowData.id}`).siblings('p').text('異常');
                                }
                            }
                        }
                        break;
                }
            })
            //擷取程式連線狀態
            if (!connFlag) {
                Warning(true);
                console.log('Connect Error');
                ConnectionFail('連線失敗');
                $('#alert-modal2').modal('hide');
            } else {
                Warning(false);
                //是否告警?
                if (alertFlag) {
                    //開啟外框警告與聲音
                    Warning(true);
                    //是否開啟告警modal畫面?
                    if (settingAlertModal && s != '1920') {
                        if ($('#alert-modal2').hasClass('show')) {
                            $('#alert-modal2').trigger('show.bs.modal');
                        } else {
                            $('#alert-modal2').modal('show');
                        }
                    } else {
                        $('#alert-modal2').modal('hide');
                    }
                } else {
                    //關閉外框警告與聲音
                    Warning(false);
                    //關閉告警modal
                    $('#alert-modal2').modal('hide');
                }
            }
            //輪播資訊更新
            SetDashboardInterval()
        },
        error: function (e) {
            console.log('Data Error');
            ConnectionFail('連線失敗');
        }
    });
}

function SetDashboardInterval() {
    //開啟輪播?
    if (settingPlay) {
        let flag = s == '1920' && p != '';
        //設定更新後輪播順序重設
        if (fromSetting) {
            nPage = 0;
            let pageDetatil = pages[nPage];
            sec = pageDetatil.wait;
            if (!flag) {
                $('#playIcon').attr('class', 'far fa-play-circle');
                Timer(sec);
            }
        }
        ViewUpdate(pages[nPage].name);
    } else {
        let flag = s == '1920' && p != '';
        if (!flag) {
            $('#playIcon').attr('class', 'far fa-pause-circle');
            $('#intervalTime').text('暫停');
        }
        ViewUpdate(settingStopPage);
    }
}

function Timer(sec) {
    $('#intervalTime').text(`${PadLeft(2, parseInt(sec / 60).toString())}:${PadLeft(2, (sec % 60).toString())}`);
    if (sec > 0) {
        timer = setTimeout(`Timer(${--sec})`, 1000)
    } else {
        nowPageName = pages[nPage].name;
        do {
            nPage++;
            if (nPage > pages.length - 1) {
                nPage = 0;
            }
        } while (!pages[nPage].enable); //判斷下一個顯示畫面
        ViewUpdate(pages[nPage].name);
        timer = setTimeout(`Timer(${pages[nPage].wait})`, 1000)
    }
}

function ViewUpdate(action) {
    //當畫面為1920並帶入畫面名稱則顯示固定畫面
    if (s == '1920' && p != '') {
        action = p;
    }
    let url = `../Dashboard/${action}`;
    if (s == '1920') {
        url += '?s=1920';
    }
    $.ajax({
        url: url,
        contentType: 'application/html ; charset:utf-8',
        type: 'GET',
        dataType: 'text',
        success: function (result) {
            let fadeInTimer = 1500;
            if (action != 'Video') {    //如果正在撥放影片則不進行畫面更新；除非是要替換頁面
                $('#cneterBox').empty().append($(result).hide().fadeIn(fadeInTimer));
            } else {
                if (nowPageName != action) {
                    $('#cneterBox').empty().append($(result).hide().fadeIn(fadeInTimer));
                }
            }
            let connTemp = connFlag;
            //資料載入完成關閉遮罩
            if (connFlag) {
                $('#alert-modal').modal('hide');
            }
            settingChange = false;  //設定邊更flag
            dataChange = false; //資料變更flag
            if (firstFlag && connTemp) {
                SignalRTimer(90);
            }
            firstFlag = false;  //第一次載入flag
            //載入完成後繼續計時
            //if (settingPlay && p == '') {
            //    clearTimeout(timer);    //清除正在進行的輪播
            //    sec = pages[nPage].wait;
            //    timer = setTimeout(`Timer(${sec})`, 1000)
            //}


        },
        error: function (e) {
            console.log('View Error');
            ConnectionFail('連線失敗');
        }
    });
    $(".preloader-it").delay(500).fadeOut("slow");
}

function PadLeft(lenght, str) {
    if (str.length >= lenght)
        return str;
    else
        return PadLeft("0" + str, lenght);
}

function ConnectionFail(str) {
    $(".preloader-it").delay(500).fadeOut("slow");
    $('#modelTitle').html(`<i class="fas fa-exclamation-triangle"></i>&nbsp;&nbsp;${str}`);
    $('#alert-modal').modal('show');
    Warning(true);
    //5秒後嘗試重新連線
    clearTimeout(timer);
    setTimeout('GetSetting()', 5000);
}


function Warning(warn) {
    //警告外框
    $('.red-light-frame style').remove();
    if (warn) {
        $('.red-light-frame').append('<style>.red-light-frame:before{animation-play-state:running}</style>');
        //警告聲音?
        if (settingAlertVoice) {
            document.getElementById("warningVoice").play();
        }
    } else {
        document.getElementById("warningVoice").pause();
        $('.red-light-frame').append('<style>.red-light-frame:before{animation-play-state:paused;animation: pulsate 1.6s ease-out;}</style>');
    }
}

function SignalRWatch() {
    clearTimeout(timer);
    $.connection.hub.stop();
    console.log('%c signalR斷線嘗試重新連線...', 'color:red');
    $.connection.hub.start().done(function (data) {
        signalRWatch = new Date();
        fromSetting = true;
        GetSetting();
    }).fail(function (e) {
        location.reload();
    });
}


function SignalRTimer(sec) {
    let timeCheck = (new Date() - signalRWatch) / 1000;

    $.ajax({
        url: '../Dashboard/GetSetting',
        contentType: 'application/html ; charset:utf-8',
        type: 'GET',
        dataType: 'text',
        success: function (result) {
            if (signalRSetting != result && !settingChange) {
                console.log('設定更新逾時');
                SignalRWatch();
            }
        },
        error: function (e) {
            console.log('設定更新錯誤');
            SignalRWatch();
        }
    });

    if (timeCheck > 90) {
        console.log('資料更新逾時');
        SignalRWatch();
    }
    if (sec > 0) {
        setTimeout(`SignalRTimer(${--sec})`, 1000);
    } else {
        setTimeout(`SignalRTimer(${90})`, 1000);
    }
}

