import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowanceTypeEnum } from "./allowancetypeenum";
import { EarningsTypeEnum } from "./earningstypeenum";
import { EmploymentTerminationPaymentTypeEnum } from "./employmentterminationpaymenttypeenum";
import { RateTypeEnum } from "./ratetypeenum";



export class EarningsRateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountCode" })
  accountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=AccrueLeave" })
  accrueLeave?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AllowanceType" })
  allowanceType?: AllowanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrentRecord" })
  currentRecord?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EarningsRateID" })
  earningsRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=EarningsType" })
  earningsType?: EarningsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EmploymentTerminationPaymentType" })
  employmentTerminationPaymentType?: EmploymentTerminationPaymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IsExemptFromSuper" })
  isExemptFromSuper?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsExemptFromTax" })
  isExemptFromTax?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsReportableAsW1" })
  isReportableAsW1?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Multiplier" })
  multiplier?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RatePerUnit" })
  ratePerUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=RateType" })
  rateType?: RateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TypeOfUnits" })
  typeOfUnits?: string;
}


export class EarningsRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountCode" })
  accountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=AccrueLeave" })
  accrueLeave?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AllowanceType" })
  allowanceType?: AllowanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrentRecord" })
  currentRecord?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EarningsRateID" })
  earningsRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=EarningsType" })
  earningsType?: EarningsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EmploymentTerminationPaymentType" })
  employmentTerminationPaymentType?: EmploymentTerminationPaymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IsExemptFromSuper" })
  isExemptFromSuper?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsExemptFromTax" })
  isExemptFromTax?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsReportableAsW1" })
  isReportableAsW1?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Multiplier" })
  multiplier?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RatePerUnit" })
  ratePerUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=RateType" })
  rateType?: RateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TypeOfUnits" })
  typeOfUnits?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;
}
