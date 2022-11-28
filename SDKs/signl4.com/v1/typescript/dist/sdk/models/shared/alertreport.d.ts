import { SpeakeasyBase } from "../../../internal/utils";
import { AlertCounts } from "./alertcounts";
export declare class AlertReport extends SpeakeasyBase {
    last24Hours?: AlertCounts;
    subscriptionId?: string;
    teamCurrentDuty?: AlertCounts;
    teamId?: string;
    teamLastDuty?: AlertCounts;
    userId?: string;
    userLastDutyChange?: AlertCounts;
}
