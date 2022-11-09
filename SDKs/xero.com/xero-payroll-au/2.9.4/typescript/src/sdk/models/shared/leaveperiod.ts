import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LeavePeriodStatusEnum } from "./leaveperiodstatusenum";


export class LeavePeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=LeavePeriodStatus" })
  leavePeriodStatus?: LeavePeriodStatusEnum;

  @Metadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;

  @Metadata({ data: "json, name=PayPeriodEndDate" })
  payPeriodEndDate?: string;

  @Metadata({ data: "json, name=PayPeriodStartDate" })
  payPeriodStartDate?: string;
}
