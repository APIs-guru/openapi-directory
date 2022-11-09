import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AllowanceTypeEnum } from "./allowancetypeenum";
import { EarningsTypeEnum } from "./earningstypeenum";
import { EmploymentTerminationPaymentTypeEnum } from "./employmentterminationpaymenttypeenum";
import { RateTypeEnum } from "./ratetypeenum";


export class EarningsRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountCode" })
  accountCode?: string;

  @Metadata({ data: "json, name=AccrueLeave" })
  accrueLeave?: boolean;

  @Metadata({ data: "json, name=AllowanceType" })
  allowanceType?: AllowanceTypeEnum;

  @Metadata({ data: "json, name=Amount" })
  amount?: number;

  @Metadata({ data: "json, name=CurrentRecord" })
  currentRecord?: boolean;

  @Metadata({ data: "json, name=EarningsRateID" })
  earningsRateId?: string;

  @Metadata({ data: "json, name=EarningsType" })
  earningsType?: EarningsTypeEnum;

  @Metadata({ data: "json, name=EmploymentTerminationPaymentType" })
  employmentTerminationPaymentType?: EmploymentTerminationPaymentTypeEnum;

  @Metadata({ data: "json, name=IsExemptFromSuper" })
  isExemptFromSuper?: boolean;

  @Metadata({ data: "json, name=IsExemptFromTax" })
  isExemptFromTax?: boolean;

  @Metadata({ data: "json, name=IsReportableAsW1" })
  isReportableAsW1?: boolean;

  @Metadata({ data: "json, name=Multiplier" })
  multiplier?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RatePerUnit" })
  ratePerUnit?: string;

  @Metadata({ data: "json, name=RateType" })
  rateType?: RateTypeEnum;

  @Metadata({ data: "json, name=TypeOfUnits" })
  typeOfUnits?: string;

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;
}
