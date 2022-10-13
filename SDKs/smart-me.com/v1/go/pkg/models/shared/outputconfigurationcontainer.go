package shared

type OutputConfigurationContainerDigitalOutputNoConnectionActionEnum string

const (
	OutputConfigurationContainerDigitalOutputNoConnectionActionEnumNothing     OutputConfigurationContainerDigitalOutputNoConnectionActionEnum = "Nothing"
	OutputConfigurationContainerDigitalOutputNoConnectionActionEnumTurnOff     OutputConfigurationContainerDigitalOutputNoConnectionActionEnum = "TurnOff"
	OutputConfigurationContainerDigitalOutputNoConnectionActionEnumTurnOn      OutputConfigurationContainerDigitalOutputNoConnectionActionEnum = "TurnOn"
	OutputConfigurationContainerDigitalOutputNoConnectionActionEnumSetPwmValue OutputConfigurationContainerDigitalOutputNoConnectionActionEnum = "SetPwmValue"
)

type OutputConfigurationContainerS0PulseValueEnum string

const (
	OutputConfigurationContainerS0PulseValueEnumPulseValue1000Kwh  OutputConfigurationContainerS0PulseValueEnum = "PulseValue1000Kwh"
	OutputConfigurationContainerS0PulseValueEnumPulseValue10000Kwh OutputConfigurationContainerS0PulseValueEnum = "PulseValue10000Kwh"
)

type OutputConfigurationContainerTypeEnum string

const (
	OutputConfigurationContainerTypeEnumImpulseOutputActiveEnergy       OutputConfigurationContainerTypeEnum = "ImpulseOutputActiveEnergy"
	OutputConfigurationContainerTypeEnumImpulseOutputActiveEnergyImport OutputConfigurationContainerTypeEnum = "ImpulseOutputActiveEnergyImport"
	OutputConfigurationContainerTypeEnumImpulseOutputActiveEnergyExport OutputConfigurationContainerTypeEnum = "ImpulseOutputActiveEnergyExport"
	OutputConfigurationContainerTypeEnumImpulseOutputReactiveEnergy     OutputConfigurationContainerTypeEnum = "ImpulseOutputReactiveEnergy"
	OutputConfigurationContainerTypeEnumDigitalOutput                   OutputConfigurationContainerTypeEnum = "DigitalOutput"
	OutputConfigurationContainerTypeEnumAnalogPwmSignalOutput           OutputConfigurationContainerTypeEnum = "AnalogPwmSignalOutput"
	OutputConfigurationContainerTypeEnumDisabled                        OutputConfigurationContainerTypeEnum = "Disabled"
)

type OutputConfigurationContainer struct {
	DigitalOutputNoConnectionAction *OutputConfigurationContainerDigitalOutputNoConnectionActionEnum `json:"DigitalOutputNoConnectionAction"`
	Name                            *string                                                          `json:"Name"`
	Number                          *int32                                                           `json:"Number"`
	S0PulseValue                    *OutputConfigurationContainerS0PulseValueEnum                    `json:"S0PulseValue"`
	Type                            *OutputConfigurationContainerTypeEnum                            `json:"Type"`
}
