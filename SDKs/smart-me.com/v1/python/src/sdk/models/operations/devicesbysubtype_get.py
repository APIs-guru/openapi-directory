from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class DevicesBySubTypeGetMeterSubTypeEnum(str, Enum):
    METER_SUB_TYPE_UNKNOWN = "MeterSubTypeUnknown"
    METER_SUB_TYPE_COLD = "MeterSubTypeCold"
    METER_SUB_TYPE_HEAT = "MeterSubTypeHeat"
    METER_SUB_TYPE_CHARGING_STATION = "MeterSubTypeChargingStation"
    METER_SUB_TYPE_ELECTRICITY = "MeterSubTypeElectricity"
    METER_SUB_TYPE_WATER = "MeterSubTypeWater"
    METER_SUB_TYPE_GAS = "MeterSubTypeGas"
    METER_SUB_TYPE_ELECTRICITY_HEAT = "MeterSubTypeElectricityHeat"
    METER_SUB_TYPE_TEMPERATURE = "MeterSubTypeTemperature"
    METER_SUB_TYPE_VIRTUAL_BATTERY = "MeterSubTypeVirtualBattery"


@dataclass
class DevicesBySubTypeGetQueryParams:
    meter_sub_type: DevicesBySubTypeGetMeterSubTypeEnum = field(metadata={'query_param': { 'field_name': 'meterSubType', 'style': 'form', 'explode': True }})
    

@dataclass
class DevicesBySubTypeGetRequest:
    query_params: DevicesBySubTypeGetQueryParams = field()
    

@dataclass
class DevicesBySubTypeGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    devices: Optional[List[shared.Device]] = field(default=None)
    
