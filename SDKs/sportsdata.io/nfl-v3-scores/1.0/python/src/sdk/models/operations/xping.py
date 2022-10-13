from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class XPingFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class XPingPathParams:
    format: XPingFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    seconds: str = field(default=None, metadata={'path_param': { 'field_name': 'seconds', 'style': 'simple', 'explode': False }})
    

@dataclass
class XPingRequest:
    path_params: XPingPathParams = field(default=None)
    

@dataclass
class XPingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    x_ping_200_application_json_any: Optional[Any] = field(default=None)
    
