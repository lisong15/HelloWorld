package com.helloworld.testA2RN;

import android.content.Intent;
import android.graphics.Rect;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import com.facebook.react.BuildConfig;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;
import com.helloworld.MainActivity;
import com.helloworld.R;

/**
 * Created by 1 on 2016/11/9.
 */

public class AFirstActivity extends AppCompatActivity
        implements View.OnClickListener, DefaultHardwareBackBtnHandler
{
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;
    private Button btn;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager =
                ReactInstanceManager.builder().setApplication(getApplication()).setBundleAssetName(
                        "index.android.bundle").setJSMainModuleName("index.android").addPackage(
                        new MainReactPackage()).setUseDeveloperSupport(
                        BuildConfig.DEBUG).setInitialLifecycleState(LifecycleState.RESUMED).build();
        mReactRootView.startReactApplication(mReactInstanceManager, "HelloNative");

        setContentView(mReactRootView);
        initRes();
//        Rect rect = new Rect();
//        getWindow().getDecorView().getWindowVisibleDisplayFrame(rect);
//        int top = rect.top;
    }

    private void initRes()
    {
        btn = (Button) findViewById(R.id.button);
        btn.setOnClickListener(this);
    }

    @Override
    public void onClick(View v)
    {
        startActivity(new Intent(this, MainActivity.class));
    }

    @Override
    public void invokeDefaultOnBackPressed()
    {
        super.onBackPressed();
    }

    @Override
    protected void onResume()
    {
        super.onResume();
        if (mReactInstanceManager != null)
        {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    protected void onPause()
    {
        super.onPause();
        if (mReactInstanceManager != null)
        {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected void onDestroy()
    {
        super.onDestroy();
        if (mReactInstanceManager != null)
        {
            mReactInstanceManager.onHostDestroy(this);
        }
    }

    @Override
    public void onBackPressed()
    {
        if (mReactInstanceManager != null)
        {
            mReactInstanceManager.onBackPressed();
        }
        else
        {
            super.onBackPressed();
        }
    }
}
