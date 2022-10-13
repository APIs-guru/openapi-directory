package shared

type ActionInformationActionTypeEnum string

const (
	ActionInformationActionTypeEnumOnOffAction  ActionInformationActionTypeEnum = "OnOffAction"
	ActionInformationActionTypeEnumAnalogAction ActionInformationActionTypeEnum = "AnalogAction"
)

type ActionInformation struct {
	ActionType *ActionInformationActionTypeEnum `json:"ActionType"`
	MaxValue   *float64                         `json:"MaxValue"`
	MinValue   *float64                         `json:"MinValue"`
	Name       *string                          `json:"Name"`
	ObisCode   *string                          `json:"ObisCode"`
}
