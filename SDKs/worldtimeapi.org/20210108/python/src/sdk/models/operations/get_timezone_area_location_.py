from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GetTimezoneAreaLocationPathParams:
    area: str = field(metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    location: str = field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaLocationRequest:
    path_params: GetTimezoneAreaLocationPathParams = field()
    

@dataclass
class GetTimezoneAreaLocationResponse:
    content_type: str = field()
    status_code: int = field()
    date_time_json_response: Optional[Any] = field(default=None)
    error_json_response: Optional[Any] = field(default=None)
    
