from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetTimezoneAreaLocationTxtPathParams:
    area: str = field(metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    location: str = field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaLocationTxtRequest:
    path_params: GetTimezoneAreaLocationTxtPathParams = field()
    

@dataclass
class GetTimezoneAreaLocationTxtResponse:
    content_type: str = field()
    status_code: int = field()
    date_time_text_response: Optional[str] = field(default=None)
    error_text_response: Optional[str] = field(default=None)
    
