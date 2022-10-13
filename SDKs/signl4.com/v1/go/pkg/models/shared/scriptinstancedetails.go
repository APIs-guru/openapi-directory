package shared

import (
	"time"
)

type ScriptInstanceDetails struct {
	Config                  *interface{}                               `json:"config"`
	CustomScriptDescription *string                                    `json:"customScriptDescription"`
	CustomScriptName        *string                                    `json:"customScriptName"`
	Enabled                 *bool                                      `json:"enabled"`
	EventPattern            *interface{}                               `json:"eventPattern"`
	InstanceID              *string                                    `json:"instanceId"`
	LastModified            *time.Time                                 `json:"lastModified"`
	RuntimeInformation      *ScriptInstanceInfoRuntimeInformationModel `json:"runtimeInformation"`
	ScriptID                *string                                    `json:"scriptId"`
	ScriptName              *string                                    `json:"scriptName"`
	SubscriptionID          *string                                    `json:"subscriptionId"`
	TeamID                  *string                                    `json:"teamId"`
}
