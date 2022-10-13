package shared

import (
	"time"
)

type DeviceChargingStationStateEnum string

const (
	DeviceChargingStationStateEnumBooting             DeviceChargingStationStateEnum = "Booting"
	DeviceChargingStationStateEnumReadyNoCarConnected DeviceChargingStationStateEnum = "ReadyNoCarConnected"
	DeviceChargingStationStateEnumReadyCarConnected   DeviceChargingStationStateEnum = "ReadyCarConnected"
	DeviceChargingStationStateEnumStartedWaitForCar   DeviceChargingStationStateEnum = "StartedWaitForCar"
	DeviceChargingStationStateEnumCharging            DeviceChargingStationStateEnum = "Charging"
	DeviceChargingStationStateEnumOffline             DeviceChargingStationStateEnum = "Offline"
)

type DeviceDeviceEnergyTypeEnum string

const (
	DeviceDeviceEnergyTypeEnumMeterTypeUnknown       DeviceDeviceEnergyTypeEnum = "MeterTypeUnknown"
	DeviceDeviceEnergyTypeEnumMeterTypeElectricity   DeviceDeviceEnergyTypeEnum = "MeterTypeElectricity"
	DeviceDeviceEnergyTypeEnumMeterTypeWater         DeviceDeviceEnergyTypeEnum = "MeterTypeWater"
	DeviceDeviceEnergyTypeEnumMeterTypeGas           DeviceDeviceEnergyTypeEnum = "MeterTypeGas"
	DeviceDeviceEnergyTypeEnumMeterTypeHeat          DeviceDeviceEnergyTypeEnum = "MeterTypeHeat"
	DeviceDeviceEnergyTypeEnumMeterTypeHca           DeviceDeviceEnergyTypeEnum = "MeterTypeHCA"
	DeviceDeviceEnergyTypeEnumMeterTypeAllMeters     DeviceDeviceEnergyTypeEnum = "MeterTypeAllMeters"
	DeviceDeviceEnergyTypeEnumMeterTypeTemperature   DeviceDeviceEnergyTypeEnum = "MeterTypeTemperature"
	DeviceDeviceEnergyTypeEnumMeterTypeMBusGateway   DeviceDeviceEnergyTypeEnum = "MeterTypeMBusGateway"
	DeviceDeviceEnergyTypeEnumMeterTypeRs485Gateway  DeviceDeviceEnergyTypeEnum = "MeterTypeRS485Gateway"
	DeviceDeviceEnergyTypeEnumMeterTypeCustomDevice  DeviceDeviceEnergyTypeEnum = "MeterTypeCustomDevice"
	DeviceDeviceEnergyTypeEnumMeterTypeCompressedAir DeviceDeviceEnergyTypeEnum = "MeterTypeCompressedAir"
	DeviceDeviceEnergyTypeEnumMeterTypeSolarLog      DeviceDeviceEnergyTypeEnum = "MeterTypeSolarLog"
	DeviceDeviceEnergyTypeEnumMeterTypeVirtualMeter  DeviceDeviceEnergyTypeEnum = "MeterTypeVirtualMeter"
	DeviceDeviceEnergyTypeEnumMeterTypeWmBusGateway  DeviceDeviceEnergyTypeEnum = "MeterTypeWMBusGateway"
)

type DeviceFamilyTypeEnum string

const (
	DeviceFamilyTypeEnumMeterFamilyTypeUnknown                               DeviceFamilyTypeEnum = "MeterFamilyTypeUnknown"
	DeviceFamilyTypeEnumMeterFamilyTypeSmartMeConnectV1                      DeviceFamilyTypeEnum = "MeterFamilyTypeSmartMeConnectV1"
	DeviceFamilyTypeEnumMeterFamiliyTypeSmartMeMeter                         DeviceFamilyTypeEnum = "MeterFamiliyTypeSmartMeMeter"
	DeviceFamilyTypeEnumMeterFamiliyTypeSmartMeMeterWithSwitch               DeviceFamilyTypeEnum = "MeterFamiliyTypeSmartMeMeterWithSwitch"
	DeviceFamilyTypeEnumMeterFamilyTypeMBusGatewayV1                         DeviceFamilyTypeEnum = "MeterFamilyTypeMBusGatewayV1"
	DeviceFamilyTypeEnumMeterFamilyTypeRs485GatewayV1                        DeviceFamilyTypeEnum = "MeterFamilyTypeRS485GatewayV1"
	DeviceFamilyTypeEnumMeterFamilyTypeKamstrupModule                        DeviceFamilyTypeEnum = "MeterFamilyTypeKamstrupModule"
	DeviceFamilyTypeEnumMeterFamilyTypeSmartMe3PhaseMeter80A                 DeviceFamilyTypeEnum = "MeterFamilyTypeSmartMe3PhaseMeter80A"
	DeviceFamilyTypeEnumMeterFamilyTypeSmartMe3PhaseMeter32A                 DeviceFamilyTypeEnum = "MeterFamilyTypeSmartMe3PhaseMeter32A"
	DeviceFamilyTypeEnumMeterFamilyTypeSmartMe3PhaseTelstarTransformer       DeviceFamilyTypeEnum = "MeterFamilyTypeSmartMe3PhaseTelstarTransformer"
	DeviceFamilyTypeEnumMeterFamilyTypeLandisGyrModule                       DeviceFamilyTypeEnum = "MeterFamilyTypeLandisGyrModule"
	DeviceFamilyTypeEnumMeterFamilyTypeFnnOpticalModule                      DeviceFamilyTypeEnum = "MeterFamilyTypeFnnOpticalModule"
	DeviceFamilyTypeEnumMeterFamilyTypeSmartMe3PhaseTelstar80AWiFi           DeviceFamilyTypeEnum = "MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi"
	DeviceFamilyTypeEnumMeterFamilyTypeSmartMe3PhaseTelstar80AMobile         DeviceFamilyTypeEnum = "MeterFamilyTypeSmartMe3PhaseTelstar80AMobile"
	DeviceFamilyTypeEnumMeterFamilyTypeSmartMe1PhaseMeter80Av2WiFi           DeviceFamilyTypeEnum = "MeterFamilyTypeSmartMe1PhaseMeter80AV2WiFi"
	DeviceFamilyTypeEnumMeterFamilyTypeSmartMe1PhaseMeter32Av2WiFi           DeviceFamilyTypeEnum = "MeterFamilyTypeSmartMe1PhaseMeter32AV2WiFi"
	DeviceFamilyTypeEnumMeterFamilyTypeSmartMe1PhaseMeter80AGprs             DeviceFamilyTypeEnum = "MeterFamilyTypeSmartMe1PhaseMeter80AGprs"
	DeviceFamilyTypeEnumMeterFamilyTypeSmartMe1PhaseMeter32AGprs             DeviceFamilyTypeEnum = "MeterFamilyTypeSmartMe1PhaseMeter32AGprs"
	DeviceFamilyTypeEnumMeterFamilyTypeWmBusGatewayV1                        DeviceFamilyTypeEnum = "MeterFamilyTypeWMBusGatewayV1"
	DeviceFamilyTypeEnumMeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile DeviceFamilyTypeEnum = "MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile"
	DeviceFamilyTypeEnumMeterFamilyTypeMithralHallV1                         DeviceFamilyTypeEnum = "MeterFamilyTypeMithralHallV1"
	DeviceFamilyTypeEnumMeterFamilyTypeRestAPIMeter                          DeviceFamilyTypeEnum = "MeterFamilyTypeRestApiMeter"
	DeviceFamilyTypeEnumMeterFamilyTypeVirtualBillingMeter                   DeviceFamilyTypeEnum = "MeterFamilyTypeVirtualBillingMeter"
)

type DeviceMeterSubTypeEnum string

const (
	DeviceMeterSubTypeEnumMeterSubTypeUnknown         DeviceMeterSubTypeEnum = "MeterSubTypeUnknown"
	DeviceMeterSubTypeEnumMeterSubTypeCold            DeviceMeterSubTypeEnum = "MeterSubTypeCold"
	DeviceMeterSubTypeEnumMeterSubTypeHeat            DeviceMeterSubTypeEnum = "MeterSubTypeHeat"
	DeviceMeterSubTypeEnumMeterSubTypeChargingStation DeviceMeterSubTypeEnum = "MeterSubTypeChargingStation"
	DeviceMeterSubTypeEnumMeterSubTypeElectricity     DeviceMeterSubTypeEnum = "MeterSubTypeElectricity"
	DeviceMeterSubTypeEnumMeterSubTypeWater           DeviceMeterSubTypeEnum = "MeterSubTypeWater"
	DeviceMeterSubTypeEnumMeterSubTypeGas             DeviceMeterSubTypeEnum = "MeterSubTypeGas"
	DeviceMeterSubTypeEnumMeterSubTypeElectricityHeat DeviceMeterSubTypeEnum = "MeterSubTypeElectricityHeat"
	DeviceMeterSubTypeEnumMeterSubTypeTemperature     DeviceMeterSubTypeEnum = "MeterSubTypeTemperature"
	DeviceMeterSubTypeEnumMeterSubTypeVirtualBattery  DeviceMeterSubTypeEnum = "MeterSubTypeVirtualBattery"
)

type Device struct {
	ActivePower                 *float64                        `json:"ActivePower"`
	ActivePowerL1               *float64                        `json:"ActivePowerL1"`
	ActivePowerL2               *float64                        `json:"ActivePowerL2"`
	ActivePowerL3               *float64                        `json:"ActivePowerL3"`
	ActivePowerUnit             *string                         `json:"ActivePowerUnit"`
	ActiveTariff                *int32                          `json:"ActiveTariff"`
	AdditionalMeterSerialNumber *string                         `json:"AdditionalMeterSerialNumber"`
	AnalogOutput1               *int32                          `json:"AnalogOutput1"`
	AnalogOutput2               *int32                          `json:"AnalogOutput2"`
	ChargingStationState        *DeviceChargingStationStateEnum `json:"ChargingStationState"`
	CounterReading              *float64                        `json:"CounterReading"`
	CounterReadingExport        *float64                        `json:"CounterReadingExport"`
	CounterReadingImport        *float64                        `json:"CounterReadingImport"`
	CounterReadingT1            *float64                        `json:"CounterReadingT1"`
	CounterReadingT2            *float64                        `json:"CounterReadingT2"`
	CounterReadingT3            *float64                        `json:"CounterReadingT3"`
	CounterReadingT4            *float64                        `json:"CounterReadingT4"`
	CounterReadingUnit          *string                         `json:"CounterReadingUnit"`
	Current                     *float64                        `json:"Current"`
	CurrentL1                   *float64                        `json:"CurrentL1"`
	CurrentL2                   *float64                        `json:"CurrentL2"`
	CurrentL3                   *float64                        `json:"CurrentL3"`
	DeviceEnergyType            *DeviceDeviceEnergyTypeEnum     `json:"DeviceEnergyType"`
	DigitalInput1               *bool                           `json:"DigitalInput1"`
	DigitalInput2               *bool                           `json:"DigitalInput2"`
	DigitalOutput1              *bool                           `json:"DigitalOutput1"`
	DigitalOutput2              *bool                           `json:"DigitalOutput2"`
	FamilyType                  *DeviceFamilyTypeEnum           `json:"FamilyType"`
	FlowRate                    *float64                        `json:"FlowRate"`
	ID                          *string                         `json:"Id"`
	MeterSubType                *DeviceMeterSubTypeEnum         `json:"MeterSubType"`
	Name                        *string                         `json:"Name"`
	PowerFactor                 *float64                        `json:"PowerFactor"`
	PowerFactorL1               *float64                        `json:"PowerFactorL1"`
	PowerFactorL2               *float64                        `json:"PowerFactorL2"`
	PowerFactorL3               *float64                        `json:"PowerFactorL3"`
	Serial                      *int64                          `json:"Serial"`
	SwitchOn                    *bool                           `json:"SwitchOn"`
	SwitchPhaseL1On             *bool                           `json:"SwitchPhaseL1On"`
	SwitchPhaseL2On             *bool                           `json:"SwitchPhaseL2On"`
	SwitchPhaseL3On             *bool                           `json:"SwitchPhaseL3On"`
	Temperature                 *float64                        `json:"Temperature"`
	ValueDate                   *time.Time                      `json:"ValueDate"`
	Voltage                     *float64                        `json:"Voltage"`
	VoltageL1                   *float64                        `json:"VoltageL1"`
	VoltageL2                   *float64                        `json:"VoltageL2"`
	VoltageL3                   *float64                        `json:"VoltageL3"`
}
