package shared



type ScriptLocalizationDetail struct {
    ConfigMetadata *interface{} `json:"configMetadata,omitempty"`
    Data *ScriptDescriptionData `json:"data,omitempty"`
    Language *string `json:"language,omitempty"`
    
}

