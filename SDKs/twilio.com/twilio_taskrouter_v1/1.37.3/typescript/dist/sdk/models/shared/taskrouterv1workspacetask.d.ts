import { SpeakeasyBase } from "../../../internal/utils";
import { TaskEnumStatusEnum } from "./taskenumstatusenum";
export declare class TaskrouterV1WorkspaceTask extends SpeakeasyBase {
    accountSid?: string;
    addons?: string;
    age?: number;
    assignmentStatus?: TaskEnumStatusEnum;
    attributes?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    links?: Map<string, any>;
    priority?: number;
    reason?: string;
    sid?: string;
    taskChannelSid?: string;
    taskChannelUniqueName?: string;
    taskQueueEnteredDate?: Date;
    taskQueueFriendlyName?: string;
    taskQueueSid?: string;
    timeout?: number;
    url?: string;
    workflowFriendlyName?: string;
    workflowSid?: string;
    workspaceSid?: string;
}
