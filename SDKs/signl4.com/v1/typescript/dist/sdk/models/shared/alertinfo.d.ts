import { SpeakeasyBase } from "../../../internal/utils";
import { AlertAnnotationInfo } from "./alertannotationinfo";
import { AlertAttachment } from "./alertattachment";
import { AlertHistoryInfoDetailed } from "./alerthistoryinfodetailed";
import { EventParameterInfo } from "./eventparameterinfo";
export declare class AlertInfo extends SpeakeasyBase {
    annotations?: AlertAnnotationInfo[];
    attachments?: AlertAttachment[];
    category?: string;
    categoryId?: string;
    eventId?: string;
    eventSourceId?: string;
    eventSourceType?: number;
    flags?: number;
    history?: AlertHistoryInfoDetailed;
    id?: string;
    lastModified?: Date;
    parameters?: EventParameterInfo[];
    severity?: number;
    status?: number;
    subscriptionId?: string;
    teamId?: string;
    text?: string;
    title?: string;
}
