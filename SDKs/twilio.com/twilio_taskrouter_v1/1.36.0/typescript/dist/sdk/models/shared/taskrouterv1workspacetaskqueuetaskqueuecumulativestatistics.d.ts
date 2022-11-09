import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics extends SpeakeasyBase {
    accountSid?: string;
    avgTaskAcceptanceTime?: number;
    endTime?: Date;
    reservationsAccepted?: number;
    reservationsCanceled?: number;
    reservationsCreated?: number;
    reservationsRejected?: number;
    reservationsRescinded?: number;
    reservationsTimedOut?: number;
    splitByWaitTime?: any;
    startTime?: Date;
    taskQueueSid?: string;
    tasksCanceled?: number;
    tasksCompleted?: number;
    tasksDeleted?: number;
    tasksEntered?: number;
    tasksMoved?: number;
    url?: string;
    waitDurationInQueueUntilAccepted?: any;
    waitDurationUntilAccepted?: any;
    waitDurationUntilCanceled?: any;
    workspaceSid?: string;
}
