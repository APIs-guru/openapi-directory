package shared

type InputConfigurationContainerTypeEnum string

const (
	InputConfigurationContainerTypeEnumTariffInput  InputConfigurationContainerTypeEnum = "TariffInput"
	InputConfigurationContainerTypeEnumDigitalInput InputConfigurationContainerTypeEnum = "DigitalInput"
)

// InputConfigurationContainer
// Configuration for the input of a meter (digital inputs)
type InputConfigurationContainer struct {
	Name    *string                              `json:"Name,omitempty"`
	Number  *int32                               `json:"Number,omitempty"`
	OffText *string                              `json:"OffText,omitempty"`
	OnText  *string                              `json:"OnText,omitempty"`
	Type    *InputConfigurationContainerTypeEnum `json:"Type,omitempty"`
}
