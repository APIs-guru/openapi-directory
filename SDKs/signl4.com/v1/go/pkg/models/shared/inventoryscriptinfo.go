package shared



type InventoryScriptInfo struct {
    Config *interface{} `json:"config,omitempty"`
    Data *ScriptDescriptionData `json:"data,omitempty"`
    EventPattern *interface{} `json:"eventPattern,omitempty"`
    ScriptID *string `json:"scriptId,omitempty"`
    ScriptLocalizationDetails []ScriptLocalizationDetail `json:"scriptLocalizationDetails,omitempty"`
    ScriptName *string `json:"scriptName,omitempty"`
    Visibility *string `json:"visibility,omitempty"`
    
}

