import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LeavePeriodStatusEnum } from "./leaveperiodstatusenum";



export class LeavePeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LeavePeriodStatus" })
  leavePeriodStatus?: LeavePeriodStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=PayPeriodEndDate" })
  payPeriodEndDate?: string;

  @SpeakeasyMetadata({ data: "json, name=PayPeriodStartDate" })
  payPeriodStartDate?: string;
}
