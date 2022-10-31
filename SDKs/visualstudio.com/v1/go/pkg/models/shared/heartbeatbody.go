package shared

import (
	"time"
)

type HeartBeatBody struct {
	AgentVersion      *string         `json:"agentVersion,omitempty"`
	CollectedDataList []CollectedData `json:"collectedDataList,omitempty"`
	EnvironmentID     *string         `json:"environmentId,omitempty"`
	ResourceID        *string         `json:"resourceId,omitempty"`
	TimeStamp         *time.Time      `json:"timeStamp,omitempty"`
}
