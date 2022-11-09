import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PayLinePayLinePayCodeTypeEnum {
    NotSet = "NotSet"
,    Payment = "Payment"
,    Deduction = "Deduction"
}


export class PayLinePayLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=Calculator" })
  calculator?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Generated" })
  generated?: Date;

  @Metadata({ data: "json, name=PayCode" })
  payCode?: string;

  @Metadata({ data: "json, name=PayCodeType" })
  payCodeType?: PayLinePayLinePayCodeTypeEnum;

  @Metadata({ data: "json, name=PayRunSequence" })
  payRunSequence?: number;

  @Metadata({ data: "json, name=PaymentDate" })
  paymentDate?: Date;

  @Metadata({ data: "json, name=TaxPeriod" })
  taxPeriod?: number;

  @Metadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}


export class PayLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=PayLine" })
  payLine?: PayLinePayLine;
}
