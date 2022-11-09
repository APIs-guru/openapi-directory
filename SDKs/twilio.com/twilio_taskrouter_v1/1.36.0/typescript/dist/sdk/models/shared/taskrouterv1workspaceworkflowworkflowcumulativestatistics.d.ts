import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics extends SpeakeasyBase {
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
    tasksCanceled?: number;
    tasksCompleted?: number;
    tasksDeleted?: number;
    tasksEntered?: number;
    tasksMoved?: number;
    tasksTimedOutInWorkflow?: number;
    url?: string;
    waitDurationUntilAccepted?: any;
    waitDurationUntilCanceled?: any;
    workflowSid?: string;
    workspaceSid?: string;
}
