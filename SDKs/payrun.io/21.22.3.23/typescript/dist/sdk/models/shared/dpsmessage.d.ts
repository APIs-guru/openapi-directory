import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DpsMessageDpsMessageMessageStatusEnum {
    Retrieved = "Retrieved",
    Applied = "Applied",
    Unresolved = "Unresolved",
    Ignored = "Ignored",
    Information = "Information"
}
export declare class DpsMessageDpsMessage extends SpeakeasyBase {
    formType?: string;
    issueDate?: Date;
    lastUpdated?: Date;
    message?: string;
    messageStatus?: DpsMessageDpsMessageMessageStatusEnum;
    messageType?: string;
    processingResult?: string;
    retrieveDate?: Date;
    sequenceNumber?: number;
}
export declare class DpsMessage extends SpeakeasyBase {
    dpsMessage?: DpsMessageDpsMessage;
}
