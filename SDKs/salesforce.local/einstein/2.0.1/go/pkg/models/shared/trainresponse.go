package shared

import (
"time")


type TrainResponseStatusEnum string

const (
    TrainResponseStatusEnumQueued TrainResponseStatusEnum = "QUEUED"
TrainResponseStatusEnumRunning TrainResponseStatusEnum = "RUNNING"
TrainResponseStatusEnumSucceeded TrainResponseStatusEnum = "SUCCEEDED"
TrainResponseStatusEnumFailed TrainResponseStatusEnum = "FAILED"
TrainResponseStatusEnumKilled TrainResponseStatusEnum = "KILLED"
TrainResponseStatusEnumFailedWithRetries TrainResponseStatusEnum = "FAILED_WITH_RETRIES"
)


type TrainResponse struct {
    Algorithm *string `json:"algorithm,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    DatasetID int64 `json:"datasetId"`
    DatasetVersionID int64 `json:"datasetVersionId"`
    Epochs *int32 `json:"epochs,omitempty"`
    FailureMsg *string `json:"failureMsg,omitempty"`
    Language string `json:"language"`
    LearningRate *float64 `json:"learningRate,omitempty"`
    ModelID string `json:"modelId"`
    ModelType *string `json:"modelType,omitempty"`
    Name string `json:"name"`
    Object *string `json:"object,omitempty"`
    Progress float64 `json:"progress"`
    QueuePosition *int32 `json:"queuePosition,omitempty"`
    Status TrainResponseStatusEnum `json:"status"`
    TrainParams *string `json:"trainParams,omitempty"`
    TrainStats *string `json:"trainStats,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    
}

