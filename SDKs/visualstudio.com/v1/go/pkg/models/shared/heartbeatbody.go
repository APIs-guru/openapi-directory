package shared

import (
	"time"
)

type HeartBeatBody struct {
	AgentVersion      *string         `json:"agentVersion"`
	CollectedDataList []CollectedData `json:"collectedDataList"`
	EnvironmentID     *string         `json:"environmentId"`
	ResourceID        *string         `json:"resourceId"`
	TimeStamp         *time.Time      `json:"timeStamp"`
}
