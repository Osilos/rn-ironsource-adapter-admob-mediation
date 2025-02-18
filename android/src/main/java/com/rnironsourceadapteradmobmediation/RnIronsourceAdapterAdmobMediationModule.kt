package com.rnironsourceadapteradmobmediation

import androidx.annotation.NonNull
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.module.annotations.ReactModule
import com.ironsource.mediationsdk.IronSource
import javax.annotation.Nonnull

@ReactModule(name = RnIronsourceAdapterAdmobMediationModule.NAME)
class RnIronsourceAdapterAdmobMediationModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun setConsent(hasConsent: Boolean) {
    IronSource.setConsent(hasConsent)
  }

  @ReactMethod
  fun setDoNotSellData() {
    IronSource.setMetaData("do_not_sell", "true")
  }

  companion object {
    const val NAME = "RnIronsourceAdapterAdmobMediation"
  }
}
