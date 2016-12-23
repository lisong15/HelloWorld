package com.helloworld;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.helloworld.IV2RN.ReactButton;
import com.helloworld.IV2RN.ReactImageManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by 1 on 2016/11/9.
 */

public class ReactPkgs implements ReactPackage
{
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext)
    {
//        List<NativeModule> modules = new ArrayList<>();
//        modules.add(new ToastModule(reactContext));
        return Arrays.<NativeModule>asList(new ToastModule(reactContext));
//        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules()
    {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext)
    {
        return Arrays.<ViewManager>asList(new ReactImageManager(), new ReactButton());
    }
}
