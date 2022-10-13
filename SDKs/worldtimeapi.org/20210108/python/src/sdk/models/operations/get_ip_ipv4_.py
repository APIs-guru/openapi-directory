from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetIPIpv4PathParams:
    ipv4: str = field(default=None, metadata={'path_param': { 'field_name': 'ipv4', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIPIpv4Request:
    path_params: GetIPIpv4PathParams = field(default=None)
    

@dataclass
class GetIPIpv4Response:
    content_type: str = field(default=None)
    date_time_json_response: Optional[Any] = field(default=None)
    error_json_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
