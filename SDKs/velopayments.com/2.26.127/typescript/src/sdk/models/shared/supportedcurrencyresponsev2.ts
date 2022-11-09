import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SupportedCurrencyV2 } from "./supportedcurrencyv2";


export class SupportedCurrencyResponseV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencies", elemType: shared.SupportedCurrencyV2 })
  currencies?: SupportedCurrencyV2[];
}
