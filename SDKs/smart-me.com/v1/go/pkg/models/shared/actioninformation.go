package shared

type ActionInformationActionTypeEnum string

const (
	ActionInformationActionTypeEnumOnOffAction  ActionInformationActionTypeEnum = "OnOffAction"
	ActionInformationActionTypeEnumAnalogAction ActionInformationActionTypeEnum = "AnalogAction"
)

type ActionInformation struct {
	ActionType *ActionInformationActionTypeEnum `json:"ActionType,omitempty"`
	MaxValue   *float64                         `json:"MaxValue,omitempty"`
	MinValue   *float64                         `json:"MinValue,omitempty"`
	Name       *string                          `json:"Name,omitempty"`
	ObisCode   *string                          `json:"ObisCode,omitempty"`
}
