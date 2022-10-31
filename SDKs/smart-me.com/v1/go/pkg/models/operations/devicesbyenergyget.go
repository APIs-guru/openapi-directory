package operations

import (
"openapi/pkg/models/shared")


type DevicesByEnergyGetMeterEnergyTypeEnum string

const (
    DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeUnknown DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeUnknown"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeElectricity DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeElectricity"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeWater DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeWater"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeGas DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeGas"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeHeat DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeHeat"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeHca DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeHCA"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeAllMeters DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeAllMeters"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeTemperature DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeTemperature"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeMBusGateway DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeMBusGateway"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeRs485Gateway DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeRS485Gateway"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeCustomDevice DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeCustomDevice"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeCompressedAir DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeCompressedAir"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeSolarLog DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeSolarLog"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeVirtualMeter DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeVirtualMeter"
DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeWmBusGateway DevicesByEnergyGetMeterEnergyTypeEnum = "MeterTypeWMBusGateway"
)


type DevicesByEnergyGetQueryParams struct {
    MeterEnergyType DevicesByEnergyGetMeterEnergyTypeEnum `queryParam:"style=form,explode=true,name=meterEnergyType"`
    
}

type DevicesByEnergyGetRequest struct {
    QueryParams DevicesByEnergyGetQueryParams 
    
}

type DevicesByEnergyGetResponse struct {
    Body []byte 
    ContentType string 
    Devices []shared.Device 
    StatusCode int64 
    
}

