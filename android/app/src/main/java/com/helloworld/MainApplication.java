package com.helloworld;

import android.app.Application;

import com.facebook.react.ReactApplication;

import cn.reactnative.modules.update.UpdateContext;
import cn.reactnative.modules.update.UpdatePackage;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Nullable;

public class MainApplication extends Application implements ReactApplication
{
    @Override
    public void onCreate()
    {
        super.onCreate();

    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this)
    {
        @Override
        protected boolean getUseDeveloperSupport()
        {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages()
        {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new UpdatePackage(),
                    new ReactPkgs()
            );
        }

        @Nullable @Override protected String getJSBundleFile()
        {
            return UpdateContext.getBundleUrl(MainApplication.this);
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost()
    {
        return mReactNativeHost;
    }
}
