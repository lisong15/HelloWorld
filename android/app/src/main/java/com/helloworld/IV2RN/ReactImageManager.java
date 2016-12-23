package com.helloworld.IV2RN;

import android.graphics.Color;
import android.net.Uri;
import android.support.annotation.Nullable;
import android.widget.ImageView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by 1 on 2016/11/9.
 */

public class ReactImageManager extends SimpleViewManager<ImageView>
{
    @Override
    public String getName()
    {
        return "RCTImageViews";
    }

    @Override
    protected ImageView createViewInstance(ThemedReactContext reactContext)
    {
        return new ImageView(reactContext);
    }

    @ReactProp(name = "path")
    public void setUri(ImageView view, @Nullable String path)
    {
        System.out.println("ReactImageManager.setUri in " + path);
        view.setImageURI(Uri.parse(path));
    }

    @ReactProp(name = "color", defaultInt = 0xffffff)
    public void setColor(ImageView view, String color)
    {
        view.setBackgroundColor(Color.parseColor(color));
        System.out.println("ReactImageManager.setColor in " + color);
    }

    @ReactProp(name = "alpha")
    public void setAlpha(ImageView view, int alpha)
    {
        view.setImageAlpha(alpha);
    }
}
