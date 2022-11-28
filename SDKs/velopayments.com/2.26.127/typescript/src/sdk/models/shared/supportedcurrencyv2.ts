import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SupportedCurrencyV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=maxPaymentAmount" })
  maxPaymentAmount?: number;
}
