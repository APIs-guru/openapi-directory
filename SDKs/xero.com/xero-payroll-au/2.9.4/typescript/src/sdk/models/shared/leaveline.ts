import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LeaveLineCalculationTypeEnum } from "./leavelinecalculationtypeenum";
import { EmploymentTerminationPaymentTypeEnum } from "./employmentterminationpaymenttypeenum";
import { EntitlementFinalPayPayoutTypeEnum } from "./entitlementfinalpaypayouttypeenum";


export class LeaveLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnnualNumberOfUnits" })
  annualNumberOfUnits?: number;

  @Metadata({ data: "json, name=CalculationType" })
  calculationType?: LeaveLineCalculationTypeEnum;

  @Metadata({ data: "json, name=EmploymentTerminationPaymentType" })
  employmentTerminationPaymentType?: EmploymentTerminationPaymentTypeEnum;

  @Metadata({ data: "json, name=EntitlementFinalPayPayoutType" })
  entitlementFinalPayPayoutType?: EntitlementFinalPayPayoutTypeEnum;

  @Metadata({ data: "json, name=FullTimeNumberOfUnitsPerPeriod" })
  fullTimeNumberOfUnitsPerPeriod?: number;

  @Metadata({ data: "json, name=IncludeSuperannuationGuaranteeContribution" })
  includeSuperannuationGuaranteeContribution?: boolean;

  @Metadata({ data: "json, name=LeaveTypeID" })
  leaveTypeId?: string;

  @Metadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;
}
