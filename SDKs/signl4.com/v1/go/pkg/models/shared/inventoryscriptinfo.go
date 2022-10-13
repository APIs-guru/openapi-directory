package shared

type InventoryScriptInfo struct {
	Config                    *interface{}               `json:"config"`
	Data                      *ScriptDescriptionData     `json:"data"`
	EventPattern              *interface{}               `json:"eventPattern"`
	ScriptID                  *string                    `json:"scriptId"`
	ScriptLocalizationDetails []ScriptLocalizationDetail `json:"scriptLocalizationDetails"`
	ScriptName                *string                    `json:"scriptName"`
	Visibility                *string                    `json:"visibility"`
}
