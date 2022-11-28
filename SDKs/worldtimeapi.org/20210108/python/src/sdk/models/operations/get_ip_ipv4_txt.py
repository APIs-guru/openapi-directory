from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetIPIpv4TxtPathParams:
    ipv4: str = field(metadata={'path_param': { 'field_name': 'ipv4', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIPIpv4TxtRequest:
    path_params: GetIPIpv4TxtPathParams = field()
    

@dataclass
class GetIPIpv4TxtResponse:
    content_type: str = field()
    status_code: int = field()
    date_time_text_response: Optional[str] = field(default=None)
    error_text_response: Optional[str] = field(default=None)
    
