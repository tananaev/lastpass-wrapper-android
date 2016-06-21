package com.tananaev.lastpass;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        WebView webView = (WebView) findViewById(R.id.webView);

        webView.setWebChromeClient(new WebChromeClient());

        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);

        webView.loadUrl("https://lastpass.com/mobile/");

        /*InputStream is = getResources().openRawResource(R.raw.tweaks);
        String js = new Scanner(is).useDelimiter("\\A").next();
        webView.loadUrl("javascript:" + js);*/
    }

}
