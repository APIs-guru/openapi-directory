from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class XPingFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class XPingPathParams:
    format: XPingFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    seconds: str = field(metadata={'path_param': { 'field_name': 'seconds', 'style': 'simple', 'explode': False }})
    

@dataclass
class XPingRequest:
    path_params: XPingPathParams = field()
    

@dataclass
class XPingResponse:
    content_type: str = field()
    status_code: int = field()
    x_ping_200_application_json_any: Optional[Any] = field(default=None)
    
