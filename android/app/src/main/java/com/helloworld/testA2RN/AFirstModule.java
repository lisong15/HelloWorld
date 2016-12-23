package com.helloworld.testA2RN;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by 1 on 2016/11/9.
 */

public class AFirstModule extends ReactContextBaseJavaModule
{
    public AFirstModule(ReactApplicationContext reactContext)
    {
        super(reactContext);
    }

    @Override
    public String getName()
    {
        return "FirstModule";
    }


    @ReactMethod
    public void toStartNativeSecond()
    {
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null)
        {
            return;
        }
        currentActivity.startActivity(new Intent(currentActivity, ASecondActivity.class));
    }
}
