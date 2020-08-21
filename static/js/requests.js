
xx.requests = axios.create({
    timeout: 10000,
});


xx.requests.interceptors.request.use(function (config) {
    console.log("requests.interceptors.request.use:", config);
    return config
}, function (error) {
    return Promise.reject(error)
});


xx.requests.interceptors.response.use(
    response => {
        console.log("requests.interceptors.response.use response:", response);
        const res = response.data;
        if (res.code !== 200) {
            //return Promise.reject(new Error(res.message || "Error"))
            console.log("请求错误");
            if(res.msg)
                ga.show_error(res.msg);
            if(res.description)
                ga.show_error(res.description);
            return  Promise.reject(response);
        } else {
            if(res.msg)
                ga.show_success(res.msg);
            return res;
        }
    }, error => {
        // 判断error的status代码，并将对应的信息告知用户
        let text = "";
        let err = JSON.parse(JSON.stringify(error));
        console.log("xx.requests.interceptors.response.use err:",err);
        if (err.response.status) {
            switch (error.response.status) {
                case 400:
                    text = "请求错误(400)，请重新申请";
                    break;
                case 401:
                    text = "登录错误(401)，请重新登录";
                    return this.$router.replace("/login");
                case 403:
                    text = "拒绝访问(403)";
                    break;
                case 404:
                    text = "请求出错(404)";
                    break;
                case 408:
                    text = "请求超时(408)";
                    break;
                case 500:
                    text = "服务器错误(500)，请重启软件或切换功能页！";
                    break;
                case 501:
                    text = "服务未实现(501)";
                    break;
                case 502:
                    text = "网络错误(502)";
                    break;
                case 503:
                    text = "服务不可用(503)";
                    break;
                case 504:
                    text = "网络超时(504)";
                    break;
                case 505:
                    text = "HTTP版本不受支持(505)";
                    break;
                default:
                    text = "网络连接出错";
            }
        } else {
            text = "连接服务器失败,请退出重试!";
        }
        Message({
            showClose: true,
            message: text,
            type: "error"
        });
        return Promise.reject(error);
    }
);
