package shared

import (
	"time"
)

type IssueDelegatePlanAccessTokenBody struct {
	EnvironmentIds []string          `json:"environmentIds"`
	Expiration     *time.Time        `json:"expiration"`
	Identity       *DelegateIdentity `json:"identity"`
	Scope          *string           `json:"scope"`
}
