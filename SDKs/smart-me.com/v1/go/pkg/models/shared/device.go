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

// Device
// Container Class for the Web API
type Device struct {
	ActivePower                 *float64                        `json:"ActivePower,omitempty"`
	ActivePowerL1               *float64                        `json:"ActivePowerL1,omitempty"`
	ActivePowerL2               *float64                        `json:"ActivePowerL2,omitempty"`
	ActivePowerL3               *float64                        `json:"ActivePowerL3,omitempty"`
	ActivePowerUnit             *string                         `json:"ActivePowerUnit,omitempty"`
	ActiveTariff                *int32                          `json:"ActiveTariff,omitempty"`
	AdditionalMeterSerialNumber *string                         `json:"AdditionalMeterSerialNumber,omitempty"`
	AnalogOutput1               *int32                          `json:"AnalogOutput1,omitempty"`
	AnalogOutput2               *int32                          `json:"AnalogOutput2,omitempty"`
	ChargingStationState        *DeviceChargingStationStateEnum `json:"ChargingStationState,omitempty"`
	CounterReading              *float64                        `json:"CounterReading,omitempty"`
	CounterReadingExport        *float64                        `json:"CounterReadingExport,omitempty"`
	CounterReadingImport        *float64                        `json:"CounterReadingImport,omitempty"`
	CounterReadingT1            *float64                        `json:"CounterReadingT1,omitempty"`
	CounterReadingT2            *float64                        `json:"CounterReadingT2,omitempty"`
	CounterReadingT3            *float64                        `json:"CounterReadingT3,omitempty"`
	CounterReadingT4            *float64                        `json:"CounterReadingT4,omitempty"`
	CounterReadingUnit          *string                         `json:"CounterReadingUnit,omitempty"`
	Current                     *float64                        `json:"Current,omitempty"`
	CurrentL1                   *float64                        `json:"CurrentL1,omitempty"`
	CurrentL2                   *float64                        `json:"CurrentL2,omitempty"`
	CurrentL3                   *float64                        `json:"CurrentL3,omitempty"`
	DeviceEnergyType            *DeviceDeviceEnergyTypeEnum     `json:"DeviceEnergyType,omitempty"`
	DigitalInput1               *bool                           `json:"DigitalInput1,omitempty"`
	DigitalInput2               *bool                           `json:"DigitalInput2,omitempty"`
	DigitalOutput1              *bool                           `json:"DigitalOutput1,omitempty"`
	DigitalOutput2              *bool                           `json:"DigitalOutput2,omitempty"`
	FamilyType                  *DeviceFamilyTypeEnum           `json:"FamilyType,omitempty"`
	FlowRate                    *float64                        `json:"FlowRate,omitempty"`
	ID                          *string                         `json:"Id,omitempty"`
	MeterSubType                *DeviceMeterSubTypeEnum         `json:"MeterSubType,omitempty"`
	Name                        *string                         `json:"Name,omitempty"`
	PowerFactor                 *float64                        `json:"PowerFactor,omitempty"`
	PowerFactorL1               *float64                        `json:"PowerFactorL1,omitempty"`
	PowerFactorL2               *float64                        `json:"PowerFactorL2,omitempty"`
	PowerFactorL3               *float64                        `json:"PowerFactorL3,omitempty"`
	Serial                      *int64                          `json:"Serial,omitempty"`
	SwitchOn                    *bool                           `json:"SwitchOn,omitempty"`
	SwitchPhaseL1On             *bool                           `json:"SwitchPhaseL1On,omitempty"`
	SwitchPhaseL2On             *bool                           `json:"SwitchPhaseL2On,omitempty"`
	SwitchPhaseL3On             *bool                           `json:"SwitchPhaseL3On,omitempty"`
	Temperature                 *float64                        `json:"Temperature,omitempty"`
	ValueDate                   *time.Time                      `json:"ValueDate,omitempty"`
	Voltage                     *float64                        `json:"Voltage,omitempty"`
	VoltageL1                   *float64                        `json:"VoltageL1,omitempty"`
	VoltageL2                   *float64                        `json:"VoltageL2,omitempty"`
	VoltageL3                   *float64                        `json:"VoltageL3,omitempty"`
}
