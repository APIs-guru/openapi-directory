import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An Story Event object
**/
export declare class Event extends SpeakeasyBase {
    attributes?: string;
    chatPrompt?: string;
    conversationId?: string;
    createdAt?: Date;
    createdBy?: string;
    domSelectors?: string;
    id?: string;
    isChatHidden?: boolean;
    isNotifyEnabled?: boolean;
    name?: string;
    updatedAt?: Date;
    updatedBy?: string;
}
