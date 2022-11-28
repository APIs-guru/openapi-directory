import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManualTaxTypeEnum } from "./manualtaxtypeenum";



export class TaxLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LiabilityAccount" })
  liabilityAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=ManualTaxType" })
  manualTaxType?: ManualTaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PayslipTaxLineID" })
  payslipTaxLineId?: string;

  @SpeakeasyMetadata({ data: "json, name=TaxTypeName" })
  taxTypeName?: string;
}
