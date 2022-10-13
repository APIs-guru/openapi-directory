package shared

import (
	"time"
)

type TrainResponseStatusEnum string

const (
	TrainResponseStatusEnumQueued            TrainResponseStatusEnum = "QUEUED"
	TrainResponseStatusEnumRunning           TrainResponseStatusEnum = "RUNNING"
	TrainResponseStatusEnumSucceeded         TrainResponseStatusEnum = "SUCCEEDED"
	TrainResponseStatusEnumFailed            TrainResponseStatusEnum = "FAILED"
	TrainResponseStatusEnumKilled            TrainResponseStatusEnum = "KILLED"
	TrainResponseStatusEnumFailedWithRetries TrainResponseStatusEnum = "FAILED_WITH_RETRIES"
)

type TrainResponse struct {
	Algorithm        *string                 `json:"algorithm"`
	CreatedAt        *time.Time              `json:"createdAt"`
	DatasetID        int64                   `json:"datasetId"`
	DatasetVersionID int64                   `json:"datasetVersionId"`
	Epochs           *int32                  `json:"epochs"`
	FailureMsg       *string                 `json:"failureMsg"`
	Language         string                  `json:"language"`
	LearningRate     *float64                `json:"learningRate"`
	ModelID          string                  `json:"modelId"`
	ModelType        *string                 `json:"modelType"`
	Name             string                  `json:"name"`
	Object           *string                 `json:"object"`
	Progress         float64                 `json:"progress"`
	QueuePosition    *int32                  `json:"queuePosition"`
	Status           TrainResponseStatusEnum `json:"status"`
	TrainParams      *string                 `json:"trainParams"`
	TrainStats       *string                 `json:"trainStats"`
	UpdatedAt        *time.Time              `json:"updatedAt"`
}
