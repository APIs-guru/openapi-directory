package shared

import (
"time")

type IssueDelegatePlanAccessTokenBody struct {
    EnvironmentIds []string `json:"environmentIds,omitempty"`
    Expiration *time.Time `json:"expiration,omitempty"`
    Identity *DelegateIdentity `json:"identity,omitempty"`
    Scope *string `json:"scope,omitempty"`
    
}

