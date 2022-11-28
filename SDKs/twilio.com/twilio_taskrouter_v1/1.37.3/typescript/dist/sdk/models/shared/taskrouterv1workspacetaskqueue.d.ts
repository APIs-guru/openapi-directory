import { SpeakeasyBase } from "../../../internal/utils";
import { TaskQueueEnumTaskOrderEnum } from "./taskqueueenumtaskorderenum";
export declare class TaskrouterV1WorkspaceTaskQueue extends SpeakeasyBase {
    accountSid?: string;
    assignmentActivityName?: string;
    assignmentActivitySid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    links?: Map<string, any>;
    maxReservedWorkers?: number;
    reservationActivityName?: string;
    reservationActivitySid?: string;
    sid?: string;
    targetWorkers?: string;
    taskOrder?: TaskQueueEnumTaskOrderEnum;
    url?: string;
    workspaceSid?: string;
}
