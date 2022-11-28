import { SpeakeasyBase } from "../../../internal/utils";
import { AlertHistoryInfoEntry } from "./alerthistoryinfoentry";
export declare class AlertHistoryInfoDetailed extends SpeakeasyBase {
    acknowledged?: Date;
    acknowledgedgements?: string[];
    closed?: Date;
    closedBy?: string;
    created?: Date;
    historyEntries?: AlertHistoryInfoEntry[];
}
