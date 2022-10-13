package shared

type OutputInformationActionTypeEnum string

const (
	OutputInformationActionTypeEnumOnOffAction  OutputInformationActionTypeEnum = "OnOffAction"
	OutputInformationActionTypeEnumAnalogAction OutputInformationActionTypeEnum = "AnalogAction"
)

type OutputInformation struct {
	ActionType *OutputInformationActionTypeEnum `json:"ActionType"`
	Name       *string                          `json:"Name"`
	Number     *int32                           `json:"Number"`
	ObisCode   *string                          `json:"ObisCode"`
}
