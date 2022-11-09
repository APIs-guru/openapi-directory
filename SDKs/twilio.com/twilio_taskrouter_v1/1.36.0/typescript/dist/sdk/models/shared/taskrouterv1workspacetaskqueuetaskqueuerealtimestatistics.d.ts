import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics extends SpeakeasyBase {
    accountSid?: string;
    activityStatistics?: any[];
    longestRelativeTaskAgeInQueue?: number;
    longestRelativeTaskSidInQueue?: string;
    longestTaskWaitingAge?: number;
    longestTaskWaitingSid?: string;
    taskQueueSid?: string;
    tasksByPriority?: any;
    tasksByStatus?: any;
    totalAvailableWorkers?: number;
    totalEligibleWorkers?: number;
    totalTasks?: number;
    url?: string;
    workspaceSid?: string;
}
