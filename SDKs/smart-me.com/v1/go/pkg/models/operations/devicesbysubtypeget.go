package operations

import (
	"openapi/pkg/models/shared"
)

type DevicesBySubTypeGetMeterSubTypeEnum string

const (
	DevicesBySubTypeGetMeterSubTypeEnumMeterSubTypeUnknown         DevicesBySubTypeGetMeterSubTypeEnum = "MeterSubTypeUnknown"
	DevicesBySubTypeGetMeterSubTypeEnumMeterSubTypeCold            DevicesBySubTypeGetMeterSubTypeEnum = "MeterSubTypeCold"
	DevicesBySubTypeGetMeterSubTypeEnumMeterSubTypeHeat            DevicesBySubTypeGetMeterSubTypeEnum = "MeterSubTypeHeat"
	DevicesBySubTypeGetMeterSubTypeEnumMeterSubTypeChargingStation DevicesBySubTypeGetMeterSubTypeEnum = "MeterSubTypeChargingStation"
	DevicesBySubTypeGetMeterSubTypeEnumMeterSubTypeElectricity     DevicesBySubTypeGetMeterSubTypeEnum = "MeterSubTypeElectricity"
	DevicesBySubTypeGetMeterSubTypeEnumMeterSubTypeWater           DevicesBySubTypeGetMeterSubTypeEnum = "MeterSubTypeWater"
	DevicesBySubTypeGetMeterSubTypeEnumMeterSubTypeGas             DevicesBySubTypeGetMeterSubTypeEnum = "MeterSubTypeGas"
	DevicesBySubTypeGetMeterSubTypeEnumMeterSubTypeElectricityHeat DevicesBySubTypeGetMeterSubTypeEnum = "MeterSubTypeElectricityHeat"
	DevicesBySubTypeGetMeterSubTypeEnumMeterSubTypeTemperature     DevicesBySubTypeGetMeterSubTypeEnum = "MeterSubTypeTemperature"
	DevicesBySubTypeGetMeterSubTypeEnumMeterSubTypeVirtualBattery  DevicesBySubTypeGetMeterSubTypeEnum = "MeterSubTypeVirtualBattery"
)

type DevicesBySubTypeGetQueryParams struct {
	MeterSubType DevicesBySubTypeGetMeterSubTypeEnum `queryParam:"style=form,explode=true,name=meterSubType"`
}

type DevicesBySubTypeGetRequest struct {
	QueryParams DevicesBySubTypeGetQueryParams
}

type DevicesBySubTypeGetResponse struct {
	Body        []byte
	ContentType string
	Devices     []shared.Device
	StatusCode  int64
}
