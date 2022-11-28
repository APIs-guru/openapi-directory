from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GetTimezoneAreaLocationRegionPathParams:
    area: str = field(metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    location: str = field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    region: str = field(metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaLocationRegionRequest:
    path_params: GetTimezoneAreaLocationRegionPathParams = field()
    

@dataclass
class GetTimezoneAreaLocationRegionResponse:
    content_type: str = field()
    status_code: int = field()
    date_time_json_response: Optional[Any] = field(default=None)
    error_json_response: Optional[Any] = field(default=None)
    
