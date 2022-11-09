import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceEnumQueueOrderEnum } from "./workspaceenumqueueorderenum";
export declare class TaskrouterV1Workspace extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    defaultActivityName?: string;
    defaultActivitySid?: string;
    eventCallbackUrl?: string;
    eventsFilter?: string;
    friendlyName?: string;
    links?: Map<string, any>;
    multiTaskEnabled?: boolean;
    prioritizeQueueOrder?: WorkspaceEnumQueueOrderEnum;
    sid?: string;
    timeoutActivityName?: string;
    timeoutActivitySid?: string;
    url?: string;
}
