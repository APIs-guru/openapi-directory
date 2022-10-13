from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class DriverDetailsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class DriverDetailsPathParams:
    driverid: str = field(default=None, metadata={'path_param': { 'field_name': 'driverid', 'style': 'simple', 'explode': False }})
    format: DriverDetailsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriverDetailsRequest:
    path_params: DriverDetailsPathParams = field(default=None)
    

@dataclass
class DriverDetailsResponse:
    content_type: str = field(default=None)
    driver: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
