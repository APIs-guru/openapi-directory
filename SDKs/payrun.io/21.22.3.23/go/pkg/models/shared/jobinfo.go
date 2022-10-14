package shared

import (
	"time"
)

type JobInfoJobInfoErrorsErrors struct {
	Error []string `json:"Error,omitempty"`
}

type JobInfoJobInfoJobStatusJobStatusEnum string

const (
	JobInfoJobInfoJobStatusJobStatusEnumNew        JobInfoJobInfoJobStatusJobStatusEnum = "New"
	JobInfoJobInfoJobStatusJobStatusEnumPending    JobInfoJobInfoJobStatusJobStatusEnum = "Pending"
	JobInfoJobInfoJobStatusJobStatusEnumInProgress JobInfoJobInfoJobStatusJobStatusEnum = "InProgress"
	JobInfoJobInfoJobStatusJobStatusEnumSuccess    JobInfoJobInfoJobStatusJobStatusEnum = "Success"
	JobInfoJobInfoJobStatusJobStatusEnumFailed     JobInfoJobInfoJobStatusJobStatusEnum = "Failed"
	JobInfoJobInfoJobStatusJobStatusEnumOnHold     JobInfoJobInfoJobStatusJobStatusEnum = "OnHold"
)

type JobInfoJobInfoJobInfo struct {
	Created     *time.Time                            `json:"Created,omitempty"`
	EmployerKey *string                               `json:"EmployerKey,omitempty"`
	Errors      *JobInfoJobInfoErrorsErrors           `json:"Errors,omitempty"`
	HoldingDate *time.Time                            `json:"HoldingDate,omitempty"`
	JobID       *string                               `json:"JobId,omitempty"`
	JobStatus   *JobInfoJobInfoJobStatusJobStatusEnum `json:"JobStatus,omitempty"`
	JobType     *string                               `json:"JobType,omitempty"`
	LastUpdated *time.Time                            `json:"LastUpdated,omitempty"`
	Progress    *float64                              `json:"Progress,omitempty"`
}

type JobInfo struct {
	JobInfo *JobInfoJobInfoJobInfo `json:"JobInfo,omitempty"`
}
