package shared

type TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics struct {
	AccountSid                    *string       `json:"account_sid,omitempty"`
	ActivityStatistics            []interface{} `json:"activity_statistics,omitempty"`
	LongestRelativeTaskAgeInQueue *int64        `json:"longest_relative_task_age_in_queue,omitempty"`
	LongestRelativeTaskSidInQueue *string       `json:"longest_relative_task_sid_in_queue,omitempty"`
	LongestTaskWaitingAge         *int64        `json:"longest_task_waiting_age,omitempty"`
	LongestTaskWaitingSid         *string       `json:"longest_task_waiting_sid,omitempty"`
	TaskQueueSid                  *string       `json:"task_queue_sid,omitempty"`
	TasksByPriority               *interface{}  `json:"tasks_by_priority,omitempty"`
	TasksByStatus                 *interface{}  `json:"tasks_by_status,omitempty"`
	TotalAvailableWorkers         *int64        `json:"total_available_workers,omitempty"`
	TotalEligibleWorkers          *int64        `json:"total_eligible_workers,omitempty"`
	TotalTasks                    *int64        `json:"total_tasks,omitempty"`
	URL                           *string       `json:"url,omitempty"`
	WorkspaceSid                  *string       `json:"workspace_sid,omitempty"`
}
