package shared

type ScriptLocalizationDetail struct {
	ConfigMetadata *interface{}           `json:"configMetadata"`
	Data           *ScriptDescriptionData `json:"data"`
	Language       *string                `json:"language"`
}
