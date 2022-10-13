from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetDeviceEnergyUsagePathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    
class GetDeviceEnergyUsageBasisEnum(str, Enum):
    MONTHLY = "MONTHLY"
    DAILY = "DAILY"
    HOURLY = "HOURLY"

class GetDeviceEnergyUsageRollPeriodEnum(str, Enum):
    ONE_DAY = "ONE_DAY"
    ONE_WEEK = "ONE_WEEK"
    ONE_MONTH = "ONE_MONTH"
    SIX_MONTHS = "SIX_MONTHS"
    ONE_YEAR = "ONE_YEAR"


@dataclass
class GetDeviceEnergyUsageQueryParams:
    basis: Optional[GetDeviceEnergyUsageBasisEnum] = field(default=None, metadata={'query_param': { 'field_name': 'basis', 'style': 'form', 'explode': True }})
    roll_period: Optional[GetDeviceEnergyUsageRollPeriodEnum] = field(default=None, metadata={'query_param': { 'field_name': 'rollPeriod', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceEnergyUsageRequest:
    path_params: GetDeviceEnergyUsagePathParams = field(default=None)
    query_params: GetDeviceEnergyUsageQueryParams = field(default=None)
    

@dataclass
class GetDeviceEnergyUsageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
