package com.helloworld;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.view.Gravity;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.IllegalViewOperationException;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by 1 on 2016/11/9.
 */

public class ToastModule extends ReactContextBaseJavaModule
{

    private Toast mToast;
    private static final String DURATION_SHORT = "SHORT";
    private static final String DURATION_LONG = "LONG";
    private Promise mPromise;

    private final BaseActivityEventListener listener = new BaseActivityEventListener()
    {
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data)
        {
            if (requestCode == 1)
            {
                if (mPromise != null)
                {
                    if (resultCode == Activity.RESULT_CANCELED)
                    {
                        mPromise.reject("E_PICKER_CANCELLED", "Image picker was cancelled");
                    }
                    else if (resultCode == Activity.RESULT_OK)
                    {
                        Uri uri = data.getData();

                        if (uri == null)
                        {
                            mPromise.reject("E_NO_IMAGE_DATA_FOUND", "No image data found");
                        }
                        else
                        {
                            mPromise.resolve(uri.toString());
                        }
                    }

                    mPromise = null;
                }
            }
        }
    };

    public ToastModule(ReactApplicationContext reactContext)
    {
        super(reactContext);
        reactContext.addActivityEventListener(listener);
    }

    @Override
    public String getName()
    {
        return "ToastUtil";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants()
    {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT, 5000);
        constants.put(DURATION_LONG, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String message, int duration, Promise promise)
    {
        if (mToast == null)
        {
            mToast = Toast.makeText(getReactApplicationContext(), message, duration);
        }
        mToast.setText(message);
        mToast.setGravity(Gravity.CENTER, 0, 0);
        mToast.setDuration(duration);
        mToast.show();
        try
        {
            WritableMap map = Arguments.createMap();
            map.putString("msg", message);
            map.putDouble("time", duration);
//        promise.resolve("原生执行成功了，YAHO！");
            promise.resolve(map);
        }
        catch (IllegalViewOperationException e)
        {
            promise.reject("abc", e.getMessage());
        }
    }


    @ReactMethod
    public void pickImage(final Promise promise)
    {
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null)
        {
            promise.reject("-1 ", "activity is not exists");
            return;
        }
        mPromise = promise;

        try
        {
            final Intent galleryIntent = new Intent(Intent.ACTION_PICK);

            galleryIntent.setType("image/*");

            final Intent chooserIntent = Intent.createChooser(galleryIntent, "Pick an image");

            currentActivity.startActivityForResult(chooserIntent, 1);
//            currentActivity.startActivity(new Intent(currentActivity, ASecondActivity.class));
        }
        catch (Exception e)
        {
            mPromise.reject("-2", e);
            mPromise = null;
        }
    }

}
