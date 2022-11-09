import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SupportedCurrencyV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=maxPaymentAmount" })
  maxPaymentAmount?: number;
}
