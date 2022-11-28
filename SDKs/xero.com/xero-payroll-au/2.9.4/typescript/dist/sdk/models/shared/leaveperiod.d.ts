import { SpeakeasyBase } from "../../../internal/utils";
import { LeavePeriodStatusEnum } from "./leaveperiodstatusenum";
export declare class LeavePeriod extends SpeakeasyBase {
    leavePeriodStatus?: LeavePeriodStatusEnum;
    numberOfUnits?: number;
    payPeriodEndDate?: string;
    payPeriodStartDate?: string;
}
