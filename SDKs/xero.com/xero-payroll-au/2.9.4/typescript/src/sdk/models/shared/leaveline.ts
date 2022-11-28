import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LeaveLineCalculationTypeEnum } from "./leavelinecalculationtypeenum";
import { EmploymentTerminationPaymentTypeEnum } from "./employmentterminationpaymenttypeenum";
import { EntitlementFinalPayPayoutTypeEnum } from "./entitlementfinalpaypayouttypeenum";



export class LeaveLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnnualNumberOfUnits" })
  annualNumberOfUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=CalculationType" })
  calculationType?: LeaveLineCalculationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EmploymentTerminationPaymentType" })
  employmentTerminationPaymentType?: EmploymentTerminationPaymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EntitlementFinalPayPayoutType" })
  entitlementFinalPayPayoutType?: EntitlementFinalPayPayoutTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FullTimeNumberOfUnitsPerPeriod" })
  fullTimeNumberOfUnitsPerPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=IncludeSuperannuationGuaranteeContribution" })
  includeSuperannuationGuaranteeContribution?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LeaveTypeID" })
  leaveTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;
}
