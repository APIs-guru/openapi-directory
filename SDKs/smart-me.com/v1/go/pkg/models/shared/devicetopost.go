package shared

import (
	"time"
)

type DeviceToPostDeviceEnergyTypeEnum string

const (
	DeviceToPostDeviceEnergyTypeEnumMeterTypeUnknown       DeviceToPostDeviceEnergyTypeEnum = "MeterTypeUnknown"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeElectricity   DeviceToPostDeviceEnergyTypeEnum = "MeterTypeElectricity"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeWater         DeviceToPostDeviceEnergyTypeEnum = "MeterTypeWater"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeGas           DeviceToPostDeviceEnergyTypeEnum = "MeterTypeGas"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeHeat          DeviceToPostDeviceEnergyTypeEnum = "MeterTypeHeat"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeHca           DeviceToPostDeviceEnergyTypeEnum = "MeterTypeHCA"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeAllMeters     DeviceToPostDeviceEnergyTypeEnum = "MeterTypeAllMeters"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeTemperature   DeviceToPostDeviceEnergyTypeEnum = "MeterTypeTemperature"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeMBusGateway   DeviceToPostDeviceEnergyTypeEnum = "MeterTypeMBusGateway"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeRs485Gateway  DeviceToPostDeviceEnergyTypeEnum = "MeterTypeRS485Gateway"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeCustomDevice  DeviceToPostDeviceEnergyTypeEnum = "MeterTypeCustomDevice"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeCompressedAir DeviceToPostDeviceEnergyTypeEnum = "MeterTypeCompressedAir"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeSolarLog      DeviceToPostDeviceEnergyTypeEnum = "MeterTypeSolarLog"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeVirtualMeter  DeviceToPostDeviceEnergyTypeEnum = "MeterTypeVirtualMeter"
	DeviceToPostDeviceEnergyTypeEnumMeterTypeWmBusGateway  DeviceToPostDeviceEnergyTypeEnum = "MeterTypeWMBusGateway"
)

type DeviceToPostMeterSubTypeEnum string

const (
	DeviceToPostMeterSubTypeEnumMeterSubTypeUnknown         DeviceToPostMeterSubTypeEnum = "MeterSubTypeUnknown"
	DeviceToPostMeterSubTypeEnumMeterSubTypeCold            DeviceToPostMeterSubTypeEnum = "MeterSubTypeCold"
	DeviceToPostMeterSubTypeEnumMeterSubTypeHeat            DeviceToPostMeterSubTypeEnum = "MeterSubTypeHeat"
	DeviceToPostMeterSubTypeEnumMeterSubTypeChargingStation DeviceToPostMeterSubTypeEnum = "MeterSubTypeChargingStation"
	DeviceToPostMeterSubTypeEnumMeterSubTypeElectricity     DeviceToPostMeterSubTypeEnum = "MeterSubTypeElectricity"
	DeviceToPostMeterSubTypeEnumMeterSubTypeWater           DeviceToPostMeterSubTypeEnum = "MeterSubTypeWater"
	DeviceToPostMeterSubTypeEnumMeterSubTypeGas             DeviceToPostMeterSubTypeEnum = "MeterSubTypeGas"
	DeviceToPostMeterSubTypeEnumMeterSubTypeElectricityHeat DeviceToPostMeterSubTypeEnum = "MeterSubTypeElectricityHeat"
	DeviceToPostMeterSubTypeEnumMeterSubTypeTemperature     DeviceToPostMeterSubTypeEnum = "MeterSubTypeTemperature"
	DeviceToPostMeterSubTypeEnumMeterSubTypeVirtualBattery  DeviceToPostMeterSubTypeEnum = "MeterSubTypeVirtualBattery"
)

type DeviceToPost struct {
	ActivePower            *float64                          `json:"ActivePower" form:"name=ActivePower"`
	CounterReading         *float64                          `json:"CounterReading" form:"name=CounterReading"`
	CounterReadingExport   *float64                          `json:"CounterReadingExport" form:"name=CounterReadingExport"`
	CounterReadingExportT1 *float64                          `json:"CounterReadingExportT1" form:"name=CounterReadingExportT1"`
	CounterReadingExportT2 *float64                          `json:"CounterReadingExportT2" form:"name=CounterReadingExportT2"`
	CounterReadingT1       *float64                          `json:"CounterReadingT1" form:"name=CounterReadingT1"`
	CounterReadingT2       *float64                          `json:"CounterReadingT2" form:"name=CounterReadingT2"`
	Current                *float64                          `json:"Current" form:"name=Current"`
	CurrentL1              *float64                          `json:"CurrentL1" form:"name=CurrentL1"`
	CurrentL2              *float64                          `json:"CurrentL2" form:"name=CurrentL2"`
	CurrentL3              *float64                          `json:"CurrentL3" form:"name=CurrentL3"`
	DeviceEnergyType       *DeviceToPostDeviceEnergyTypeEnum `json:"DeviceEnergyType" form:"name=DeviceEnergyType"`
	DigitalInput1          *bool                             `json:"DigitalInput1" form:"name=DigitalInput1"`
	ID                     *string                           `json:"Id" form:"name=Id"`
	MeterSubType           *DeviceToPostMeterSubTypeEnum     `json:"MeterSubType" form:"name=MeterSubType"`
	Name                   *string                           `json:"Name" form:"name=Name"`
	PowerFactor            *float64                          `json:"PowerFactor" form:"name=PowerFactor"`
	PowerFactorL1          *float64                          `json:"PowerFactorL1" form:"name=PowerFactorL1"`
	PowerFactorL2          *float64                          `json:"PowerFactorL2" form:"name=PowerFactorL2"`
	PowerFactorL3          *float64                          `json:"PowerFactorL3" form:"name=PowerFactorL3"`
	Serial                 *int64                            `json:"Serial" form:"name=Serial"`
	Temperature            *float64                          `json:"Temperature" form:"name=Temperature"`
	ValueDate              *time.Time                        `json:"ValueDate" form:"name=ValueDate"`
	Voltage                *float64                          `json:"Voltage" form:"name=Voltage"`
	VoltageL1              *float64                          `json:"VoltageL1" form:"name=VoltageL1"`
	VoltageL2              *float64                          `json:"VoltageL2" form:"name=VoltageL2"`
	VoltageL3              *float64                          `json:"VoltageL3" form:"name=VoltageL3"`
}
