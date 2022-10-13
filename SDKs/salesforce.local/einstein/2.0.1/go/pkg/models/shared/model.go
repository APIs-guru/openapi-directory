package shared

import (
	"time"
)

type ModelStatusEnum string

const (
	ModelStatusEnumQueued            ModelStatusEnum = "QUEUED"
	ModelStatusEnumRunning           ModelStatusEnum = "RUNNING"
	ModelStatusEnumSucceeded         ModelStatusEnum = "SUCCEEDED"
	ModelStatusEnumFailed            ModelStatusEnum = "FAILED"
	ModelStatusEnumKilled            ModelStatusEnum = "KILLED"
	ModelStatusEnumFailedWithRetries ModelStatusEnum = "FAILED_WITH_RETRIES"
)

type Model struct {
	Algorithm        *string         `json:"algorithm"`
	CreatedAt        *time.Time      `json:"createdAt"`
	DatasetID        int64           `json:"datasetId"`
	DatasetVersionID int64           `json:"datasetVersionId"`
	FailureMsg       *string         `json:"failureMsg"`
	Language         *string         `json:"language"`
	ModelID          string          `json:"modelId"`
	ModelType        *string         `json:"modelType"`
	Name             string          `json:"name"`
	Object           *string         `json:"object"`
	Progress         float64         `json:"progress"`
	Status           ModelStatusEnum `json:"status"`
	UpdatedAt        *time.Time      `json:"updatedAt"`
}
