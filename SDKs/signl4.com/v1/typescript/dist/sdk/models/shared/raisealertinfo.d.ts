import { SpeakeasyBase } from "../../../internal/utils";
import { AlertAttachment } from "./alertattachment";
import { EventParameterInfo } from "./eventparameterinfo";
export declare class RaiseAlertInfo extends SpeakeasyBase {
    attachments?: AlertAttachment[];
    category?: string;
    externalId?: string;
    flags?: number;
    parameters?: EventParameterInfo[];
    severity?: number;
    text?: string;
    title?: string;
}
