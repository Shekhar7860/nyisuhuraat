package com.aasanhain;

import com.facebook.react.ReactActivity;
import android.content.Intent;     // <--- import
import android.os.Bundle;

// import com.facebook.CallbackManager;
// import com.facebook.FacebookSdk;
// import com.facebook.reactnative.androidsdk.FBSDKPackage;
public class MainActivity extends ReactActivity {
 // CallbackManager mCallbackManager;
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "sizzerz";
    }
     @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }
   
}
