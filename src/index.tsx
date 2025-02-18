import RnIronsourceAdapterAdmobMediation from './NativeRnIronsourceAdapterAdmobMediation';

export const IronSourceAdapter = {
  setConsent(consent: boolean) {
    RnIronsourceAdapterAdmobMediation.setConsent(consent);
  },
  setDoNotSellData() {
    RnIronsourceAdapterAdmobMediation.setDoNotSellData();
  },
};
