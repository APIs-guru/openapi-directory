from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GetIPIpv4PathParams:
    ipv4: str = field(metadata={'path_param': { 'field_name': 'ipv4', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIPIpv4Request:
    path_params: GetIPIpv4PathParams = field()
    

@dataclass
class GetIPIpv4Response:
    content_type: str = field()
    status_code: int = field()
    date_time_json_response: Optional[Any] = field(default=None)
    error_json_response: Optional[Any] = field(default=None)
    
