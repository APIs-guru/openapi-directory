from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetIPIpv4TxtPathParams:
    ipv4: str = field(default=None, metadata={'path_param': { 'field_name': 'ipv4', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIPIpv4TxtRequest:
    path_params: GetIPIpv4TxtPathParams = field(default=None)
    

@dataclass
class GetIPIpv4TxtResponse:
    content_type: str = field(default=None)
    date_time_text_response: Optional[str] = field(default=None)
    error_text_response: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
