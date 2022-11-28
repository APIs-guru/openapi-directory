import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupportedCurrencyV2 } from "./supportedcurrencyv2";



export class SupportedCurrencyResponseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencies", elemType: SupportedCurrencyV2 })
  currencies?: SupportedCurrencyV2[];
}
