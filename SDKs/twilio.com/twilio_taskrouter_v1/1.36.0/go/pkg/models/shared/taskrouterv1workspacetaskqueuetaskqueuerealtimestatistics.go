package shared

type TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics struct {
	AccountSid                    *string       `json:"account_sid"`
	ActivityStatistics            []interface{} `json:"activity_statistics"`
	LongestRelativeTaskAgeInQueue *int64        `json:"longest_relative_task_age_in_queue"`
	LongestRelativeTaskSidInQueue *string       `json:"longest_relative_task_sid_in_queue"`
	LongestTaskWaitingAge         *int64        `json:"longest_task_waiting_age"`
	LongestTaskWaitingSid         *string       `json:"longest_task_waiting_sid"`
	TaskQueueSid                  *string       `json:"task_queue_sid"`
	TasksByPriority               *interface{}  `json:"tasks_by_priority"`
	TasksByStatus                 *interface{}  `json:"tasks_by_status"`
	TotalAvailableWorkers         *int64        `json:"total_available_workers"`
	TotalEligibleWorkers          *int64        `json:"total_eligible_workers"`
	TotalTasks                    *int64        `json:"total_tasks"`
	URL                           *string       `json:"url"`
	WorkspaceSid                  *string       `json:"workspace_sid"`
}
