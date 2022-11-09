import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManualTaxTypeEnum } from "./manualtaxtypeenum";


export class TaxLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount?: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LiabilityAccount" })
  liabilityAccount?: string;

  @Metadata({ data: "json, name=ManualTaxType" })
  manualTaxType?: ManualTaxTypeEnum;

  @Metadata({ data: "json, name=PayslipTaxLineID" })
  payslipTaxLineId?: string;

  @Metadata({ data: "json, name=TaxTypeName" })
  taxTypeName?: string;
}
