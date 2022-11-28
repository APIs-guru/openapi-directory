from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class DriverDetailsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class DriverDetailsPathParams:
    driverid: str = field(metadata={'path_param': { 'field_name': 'driverid', 'style': 'simple', 'explode': False }})
    format: DriverDetailsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriverDetailsRequest:
    path_params: DriverDetailsPathParams = field()
    

@dataclass
class DriverDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    driver: Optional[Any] = field(default=None)
    
