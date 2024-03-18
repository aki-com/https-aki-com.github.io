fetch("/html_temp/shere.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("field_shere").innerHTML = html;

        // fetchリクエストが完了した後にシェアボタンの設定を行う
        var title = document.title;
        var currentPageURL = window.location.href;
        document.getElementById("twitter-share").href = "https://twitter.com/share?url=" + encodeURIComponent(currentPageURL) + "&text=" + encodeURIComponent(title) + "&hashtags=ぷなリスト,IT&via=rre_zwihander&related=rre_zwihander";
        document.getElementById("line-share").href = "https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(currentPageURL);
        document.getElementById("facebook-share").href = "http://www.facebook.com/share.php?u=" + encodeURIComponent(currentPageURL);
        document.getElementById("hatena-share").href = "http://b.hatena.ne.jp/add?mode=confirm&url=" + encodeURIComponent(currentPageURL) + "&title=" + encodeURIComponent(title);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
