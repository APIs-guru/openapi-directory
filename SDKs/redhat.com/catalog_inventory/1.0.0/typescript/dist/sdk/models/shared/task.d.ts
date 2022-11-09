import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TaskStateEnum {
    Pending = "pending",
    Queued = "queued",
    Running = "running",
    Timedout = "timedout",
    Completed = "completed"
}
export declare enum TaskStatusEnum {
    Ok = "ok",
    Warn = "warn",
    Unchanged = "unchanged",
    Error = "error"
}
export declare class Task extends SpeakeasyBase {
    archivedAt?: Date;
    childTaskId?: string;
    completedAt?: Date;
    controllerMessageId?: string;
    createdAt?: Date;
    id?: string;
    input?: Map<string, any>;
    message?: string;
    name?: string;
    output?: Map<string, any>;
    owner?: string;
    sourceId?: string;
    state?: TaskStateEnum;
    status?: TaskStatusEnum;
    targetSourceRef?: string;
    targetType?: string;
    type?: string;
    updatedAt?: Date;
}
