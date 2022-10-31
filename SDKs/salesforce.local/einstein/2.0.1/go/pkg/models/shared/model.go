package shared

import (
"time")


type ModelStatusEnum string

const (
    ModelStatusEnumQueued ModelStatusEnum = "QUEUED"
ModelStatusEnumRunning ModelStatusEnum = "RUNNING"
ModelStatusEnumSucceeded ModelStatusEnum = "SUCCEEDED"
ModelStatusEnumFailed ModelStatusEnum = "FAILED"
ModelStatusEnumKilled ModelStatusEnum = "KILLED"
ModelStatusEnumFailedWithRetries ModelStatusEnum = "FAILED_WITH_RETRIES"
)


type Model struct {
    Algorithm *string `json:"algorithm,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    DatasetID int64 `json:"datasetId"`
    DatasetVersionID int64 `json:"datasetVersionId"`
    FailureMsg *string `json:"failureMsg,omitempty"`
    Language *string `json:"language,omitempty"`
    ModelID string `json:"modelId"`
    ModelType *string `json:"modelType,omitempty"`
    Name string `json:"name"`
    Object *string `json:"object,omitempty"`
    Progress float64 `json:"progress"`
    Status ModelStatusEnum `json:"status"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    
}

