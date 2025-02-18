import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  setConsent(a: boolean): void;
  setDoNotSellData(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'RnIronsourceAdapterAdmobMediation'
);
