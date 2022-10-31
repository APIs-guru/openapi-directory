package shared

import (
	"time"
)

type JobInfoJobInfoErrors struct {
	Error []string `json:"Error,omitempty"`
}

type JobInfoJobInfoJobStatusEnum string

const (
	JobInfoJobInfoJobStatusEnumNew        JobInfoJobInfoJobStatusEnum = "New"
	JobInfoJobInfoJobStatusEnumPending    JobInfoJobInfoJobStatusEnum = "Pending"
	JobInfoJobInfoJobStatusEnumInProgress JobInfoJobInfoJobStatusEnum = "InProgress"
	JobInfoJobInfoJobStatusEnumSuccess    JobInfoJobInfoJobStatusEnum = "Success"
	JobInfoJobInfoJobStatusEnumFailed     JobInfoJobInfoJobStatusEnum = "Failed"
	JobInfoJobInfoJobStatusEnumOnHold     JobInfoJobInfoJobStatusEnum = "OnHold"
)

type JobInfoJobInfo struct {
	Created     *time.Time                   `json:"Created,omitempty"`
	EmployerKey *string                      `json:"EmployerKey,omitempty"`
	Errors      *JobInfoJobInfoErrors        `json:"Errors,omitempty"`
	HoldingDate *time.Time                   `json:"HoldingDate,omitempty"`
	JobID       *string                      `json:"JobId,omitempty"`
	JobStatus   *JobInfoJobInfoJobStatusEnum `json:"JobStatus,omitempty"`
	JobType     *string                      `json:"JobType,omitempty"`
	LastUpdated *time.Time                   `json:"LastUpdated,omitempty"`
	Progress    *float64                     `json:"Progress,omitempty"`
}

type JobInfo struct {
	JobInfo *JobInfoJobInfo `json:"JobInfo,omitempty"`
}
