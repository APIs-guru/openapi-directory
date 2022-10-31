package shared




type InputConfigurationContainerTypeEnum string

const (
    InputConfigurationContainerTypeEnumTariffInput InputConfigurationContainerTypeEnum = "TariffInput"
InputConfigurationContainerTypeEnumDigitalInput InputConfigurationContainerTypeEnum = "DigitalInput"
)


type InputConfigurationContainer struct {
    Name *string `json:"Name,omitempty"`
    Number *int32 `json:"Number,omitempty"`
    OffText *string `json:"OffText,omitempty"`
    OnText *string `json:"OnText,omitempty"`
    Type *InputConfigurationContainerTypeEnum `json:"Type,omitempty"`
    
}

