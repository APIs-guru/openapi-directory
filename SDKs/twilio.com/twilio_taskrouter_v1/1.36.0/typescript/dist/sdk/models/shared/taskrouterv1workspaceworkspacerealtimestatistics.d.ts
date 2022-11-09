import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TaskrouterV1WorkspaceWorkspaceRealTimeStatistics extends SpeakeasyBase {
    accountSid?: string;
    activityStatistics?: any[];
    longestTaskWaitingAge?: number;
    longestTaskWaitingSid?: string;
    tasksByPriority?: any;
    tasksByStatus?: any;
    totalTasks?: number;
    totalWorkers?: number;
    url?: string;
    workspaceSid?: string;
}
