package shared

type OutputInformationActionTypeEnum string

const (
	OutputInformationActionTypeEnumOnOffAction  OutputInformationActionTypeEnum = "OnOffAction"
	OutputInformationActionTypeEnumAnalogAction OutputInformationActionTypeEnum = "AnalogAction"
)

// OutputInformation
// Informations about the Outputs of a Meter or Folder
type OutputInformation struct {
	ActionType *OutputInformationActionTypeEnum `json:"ActionType,omitempty"`
	Name       *string                          `json:"Name,omitempty"`
	Number     *int32                           `json:"Number,omitempty"`
	ObisCode   *string                          `json:"ObisCode,omitempty"`
}
