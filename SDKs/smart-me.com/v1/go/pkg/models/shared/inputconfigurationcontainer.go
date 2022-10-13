package shared

type InputConfigurationContainerTypeEnum string

const (
	InputConfigurationContainerTypeEnumTariffInput  InputConfigurationContainerTypeEnum = "TariffInput"
	InputConfigurationContainerTypeEnumDigitalInput InputConfigurationContainerTypeEnum = "DigitalInput"
)

type InputConfigurationContainer struct {
	Name    *string                              `json:"Name"`
	Number  *int32                               `json:"Number"`
	OffText *string                              `json:"OffText"`
	OnText  *string                              `json:"OnText"`
	Type    *InputConfigurationContainerTypeEnum `json:"Type"`
}
