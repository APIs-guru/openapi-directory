from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTimezoneAreaLocationRegionPathParams:
    area: str = field(default=None, metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    location: str = field(default=None, metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    region: str = field(default=None, metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaLocationRegionRequest:
    path_params: GetTimezoneAreaLocationRegionPathParams = field(default=None)
    

@dataclass
class GetTimezoneAreaLocationRegionResponse:
    content_type: str = field(default=None)
    date_time_json_response: Optional[Any] = field(default=None)
    error_json_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
