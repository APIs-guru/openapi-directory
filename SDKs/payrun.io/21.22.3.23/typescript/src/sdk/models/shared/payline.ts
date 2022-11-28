import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PayLinePayLinePayCodeTypeEnum {
    NotSet = "NotSet",
    Payment = "Payment",
    Deduction = "Deduction"
}


export class PayLinePayLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Calculator" })
  calculator?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Generated" })
  generated?: Date;

  @SpeakeasyMetadata({ data: "json, name=PayCode" })
  payCode?: string;

  @SpeakeasyMetadata({ data: "json, name=PayCodeType" })
  payCodeType?: PayLinePayLinePayCodeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PayRunSequence" })
  payRunSequence?: number;

  @SpeakeasyMetadata({ data: "json, name=PaymentDate" })
  paymentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TaxPeriod" })
  taxPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}


export class PayLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PayLine" })
  payLine?: PayLinePayLine;
}
