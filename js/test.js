function click1() {
    alert("Hello");
}

function getImages() {
    axios({
        url: "https://www.xiaohongshu.com/discovery/item/60a09b1a0000000021038789",
        method: 'get',
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "zh-CN,zh;q=0.9",
            "access-control-allow-origin": "*",
            "Origin": "https://www.xiaohongshu.com",
            "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
        }
    }).then(function (response){
        let js = response.data.match(/<script>window.__INITIAL_SSR_STATE__[\s\S]*?<\/script>/)[0];
        js = js.match(/\{.*\}/);
        let json = JSON.parse(js);
        let imageList = json.NoteView.content.imageList;
        for(let i=0;i<imageList.length;++i) {
            let fileId = imageList[i].fileId;
            let traceId = imageList[i].traceId;
            let width = imageList[i].width;
            let type = "png";
            let url = "https://ci.xiaohongshu.com/" + traceId + "?imageView2/2/w/" + width + "/format/" + type;
            //downloadImage(url, traceId + ".png");
            //window.open(url);
            console.log(url);
        }
    }).catch(function (error) {
        console.log(error);
    });
}