import { SpeakeasyBase } from "../../../internal/utils";
import { AlertDeliveryStatusInfo } from "./alertdeliverystatusinfo";
import { AlertAnnotationInfo } from "./alertannotationinfo";
import { AlertHistoryInfoDetailed } from "./alerthistoryinfodetailed";
export declare class OverviewAlert extends SpeakeasyBase {
    alertDeliveryStatus?: AlertDeliveryStatusInfo;
    annotations?: AlertAnnotationInfo[];
    categoryId?: string;
    eventId?: string;
    flags?: number;
    historyDetailed?: AlertHistoryInfoDetailed;
    id?: string;
    lastModified?: Date;
    requiredAcknowledgements?: number;
    status?: number;
    subscriptionId?: string;
    teamId?: string;
    text?: string;
    title?: string;
}
