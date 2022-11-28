from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class DevicesByEnergyGetMeterEnergyTypeEnum(str, Enum):
    METER_TYPE_UNKNOWN = "MeterTypeUnknown"
    METER_TYPE_ELECTRICITY = "MeterTypeElectricity"
    METER_TYPE_WATER = "MeterTypeWater"
    METER_TYPE_GAS = "MeterTypeGas"
    METER_TYPE_HEAT = "MeterTypeHeat"
    METER_TYPE_HCA = "MeterTypeHCA"
    METER_TYPE_ALL_METERS = "MeterTypeAllMeters"
    METER_TYPE_TEMPERATURE = "MeterTypeTemperature"
    METER_TYPE_M_BUS_GATEWAY = "MeterTypeMBusGateway"
    METER_TYPE_RS485_GATEWAY = "MeterTypeRS485Gateway"
    METER_TYPE_CUSTOM_DEVICE = "MeterTypeCustomDevice"
    METER_TYPE_COMPRESSED_AIR = "MeterTypeCompressedAir"
    METER_TYPE_SOLAR_LOG = "MeterTypeSolarLog"
    METER_TYPE_VIRTUAL_METER = "MeterTypeVirtualMeter"
    METER_TYPE_WM_BUS_GATEWAY = "MeterTypeWMBusGateway"


@dataclass
class DevicesByEnergyGetQueryParams:
    meter_energy_type: DevicesByEnergyGetMeterEnergyTypeEnum = field(metadata={'query_param': { 'field_name': 'meterEnergyType', 'style': 'form', 'explode': True }})
    

@dataclass
class DevicesByEnergyGetRequest:
    query_params: DevicesByEnergyGetQueryParams = field()
    

@dataclass
class DevicesByEnergyGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    devices: Optional[List[shared.Device]] = field(default=None)
    
