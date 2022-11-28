from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetTimezoneAreaLocationRegionTxtPathParams:
    area: str = field(metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    location: str = field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    region: str = field(metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaLocationRegionTxtRequest:
    path_params: GetTimezoneAreaLocationRegionTxtPathParams = field()
    

@dataclass
class GetTimezoneAreaLocationRegionTxtResponse:
    content_type: str = field()
    status_code: int = field()
    date_time_text_response: Optional[str] = field(default=None)
    error_text_response: Optional[str] = field(default=None)
    
