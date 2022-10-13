package shared

type ScriptInstanceCustomUserData struct {
	CustomScriptDescription *string `json:"customScriptDescription"`
	CustomScriptName        *string `json:"customScriptName"`
	InstanceID              *string `json:"instanceId"`
	ScriptID                *string `json:"scriptId"`
}
