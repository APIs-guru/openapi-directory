from dataclasses import dataclass, field
from typing import Enum,List,Optional
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
    meter_sub_type: DevicesBySubTypeGetMeterSubTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'meterSubType', 'style': 'form', 'explode': True }})
    

@dataclass
class DevicesBySubTypeGetRequest:
    query_params: DevicesBySubTypeGetQueryParams = field(default=None)
    

@dataclass
class DevicesBySubTypeGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    devices: Optional[List[shared.Device]] = field(default=None)
    status_code: int = field(default=None)
    
