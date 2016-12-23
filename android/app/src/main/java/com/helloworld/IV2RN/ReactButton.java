package com.helloworld.IV2RN;

import android.widget.Button;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by 1 on 2016/11/10.
 */

public class ReactButton extends SimpleViewManager<Button>
{
    @Override
    public String getName()
    {
        return "RCTAButton";
    }

    @Override
    protected Button createViewInstance(ThemedReactContext reactContext)
    {
        return new Button(reactContext);
    }

    @ReactProp(name = "text")
    public void setText(Button btn, String abc)
    {
        btn.setText(abc);
    }
}
