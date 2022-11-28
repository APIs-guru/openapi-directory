from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class GetDeviceEnergyUsagePathParams:
    device_id: int = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    
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
    path_params: GetDeviceEnergyUsagePathParams = field()
    query_params: GetDeviceEnergyUsageQueryParams = field()
    

@dataclass
class GetDeviceEnergyUsageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
