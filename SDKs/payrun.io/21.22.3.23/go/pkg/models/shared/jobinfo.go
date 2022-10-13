package shared

import (
	"time"
)

type JobInfoJobInfoErrorsErrors struct {
	Error []string `json:"Error"`
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
	Created     *time.Time                            `json:"Created"`
	EmployerKey *string                               `json:"EmployerKey"`
	Errors      *JobInfoJobInfoErrorsErrors           `json:"Errors"`
	HoldingDate *time.Time                            `json:"HoldingDate"`
	JobID       *string                               `json:"JobId"`
	JobStatus   *JobInfoJobInfoJobStatusJobStatusEnum `json:"JobStatus"`
	JobType     *string                               `json:"JobType"`
	LastUpdated *time.Time                            `json:"LastUpdated"`
	Progress    *float64                              `json:"Progress"`
}

type JobInfo struct {
	JobInfo *JobInfoJobInfoJobInfo `json:"JobInfo"`
}
