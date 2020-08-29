window.xx = {};

function navigateToUrl(url, newwindow = true) {
    var f = document.createElement("FORM");
    f.action = url;
    if (newwindow) {
        f.target = '_blank';
    }
    var indexQM = url.indexOf("?");
    if (indexQM >= 0) {
        // the URL has parameters => convert them to hidden form inputs
        var params = url.substring(indexQM + 1).split("&");
        for (var i = 0; i < params.length; i++) {
            var keyValuePair = params[i].split("=");
            var input = document.createElement("INPUT");
            input.type = "hidden";
            input.name = keyValuePair[0];
            input.value = keyValuePair[1];
            f.appendChild(input);
        }
    }
    document.body.appendChild(f);
    f.submit();
}


getUrlVars = function (url) {
    var vars = [],
        hash;
    url = url || window.location.href
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
    }
    return vars;
};

function toThousands(num) {
    var num = (num || 0).toString(), result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) {
        result = num + result;
    }
    return result;
}


function updateQueryStringParameter(uri, key, value) {
    if (!value) {
        return uri;
    }
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        return uri + separator + key + "=" + value;
    }
}

function getDateDiff(dateTimeStamp) {
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
    if (diffValue < 0) {
        return;
    }
    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;
    if (monthC >= 1) {
        result = "" + parseInt(monthC) + "月前";
    } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
    } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
    } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
    } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
    } else
        result = "刚刚";
    return result;
}

function getdate(timestamp) {
    timestamp = parseInt(timestamp);
    var now = new Date(timestamp),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
    return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
}

update_lazy = function () {
    if (!xx.lazyLoadInstance) {
        xx.lazyLoadInstance = new LazyLoad({
            elements_selector: ".lazy",
            threshold: 888
        });
    } else {
        xx.lazyLoadInstance.update();
    }
};


var showDate = function (timestamp) {
    var dtime = xx.init_data.now_time - timestamp;
    if (dtime > 60 * 60 * 24 * 7) {
        return xx.getdate(timestamp * 1000);
    }
    return xx.getDateDiff(timestamp * 1000)
}

var generate_avatar_url = function (userdata) {
    if (userdata.updated_avatar) {
        var nid = userdata.updated_avatar['nid'];
        var host = xx.imghosts[nid][0];
        return "https://" + host + "/avatar/" + userdata.uid;
    }
    return xx.config.defalut_avatar;
}


xx.navigateToUrl = navigateToUrl;
xx.getdate = getdate;
xx.getDateDiff = getDateDiff;
xx.getUrlVars = getUrlVars;
xx.update_lazy = update_lazy;
xx.toThousands = toThousands;
xx.showDate = showDate;

xx.login_success = function (userdata) {
    console.log('save userdata:', userdata);
    ga.userdata = userdata;
}


xx.get_vip_conf = function (vip_degree) {
    var vip_conf = xx.vip_degree[vip_degree];
    console.log("vip_conf:", vip_conf);
    return vip_conf;
}


xx.generate_avatar_url = generate_avatar_url;

var userdata_object = {
    delimiters: ['{[', ']}'],
    data() {
        return {
            init_data: xx.init_data,
            userdata: xx.user_data,
            message_notify: {}
        };
    },
    methods: {
        update_user_info: function () {
            xx.requests.get('/app/user/info', {
                params: {}
            }).then((response) => {
                var message_notify = response.data.message_notify;
                if (message_notify) {
                    num = parseInt(message_notify.num);
                }
                console.log("message_notify:", message_notify);
                this.message_notify = message_notify;
                if (this.message_notify.num <= 0) {
                    this.message_notify.num = undefined;
                }
            }).catch(function (error) {

            });
        },
        is_login: function () {
            return this.userdata && this.userdata.username;
        },
        buy_discount: function () {
            if (ga.is_login()) {
                var vip_degree = xx.vip_degree[ga.userdata.vip_degree];
                if (vip_degree) {
                    return vip_degree;
                }
            }
        },
        this_vip_degree() {
            if (xx.vip_degree) {
                var vip_conf = xx.vip_degree[this.userdata.vip_degree];
                return vip_conf;
            }
            return {
                "name": "未开通VIP",
                "discount": 1,
                'degree': "vip0"
            };
        },
    },
    created: function () {
        if (!this.userdata)
            this.userdata = {};

        this.userdata.is_vip = false;
        if (this.userdata.vip && this.userdata.vip > this.init_data.now_time) {
            this.userdata.is_vip = true;
        } else {
            this.userdata.vip_degree = 'vip0';
        }
        if (!this.userdata.gold) {
            this.userdata.gold = 0;
        }
    }
};
