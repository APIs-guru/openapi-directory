package shared

import (
"time")

type ScriptInstanceDetails struct {
    Config *interface{} `json:"config,omitempty"`
    CustomScriptDescription *string `json:"customScriptDescription,omitempty"`
    CustomScriptName *string `json:"customScriptName,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    EventPattern *interface{} `json:"eventPattern,omitempty"`
    InstanceID *string `json:"instanceId,omitempty"`
    LastModified *time.Time `json:"lastModified,omitempty"`
    RuntimeInformation *ScriptInstanceInfoRuntimeInformationModel `json:"runtimeInformation,omitempty"`
    ScriptID *string `json:"scriptId,omitempty"`
    ScriptName *string `json:"scriptName,omitempty"`
    SubscriptionID *string `json:"subscriptionId,omitempty"`
    TeamID *string `json:"teamId,omitempty"`
    
}

