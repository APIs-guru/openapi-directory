from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTimezoneAreaLocationPathParams:
    area: str = field(default=None, metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    location: str = field(default=None, metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaLocationRequest:
    path_params: GetTimezoneAreaLocationPathParams = field(default=None)
    

@dataclass
class GetTimezoneAreaLocationResponse:
    content_type: str = field(default=None)
    date_time_json_response: Optional[Any] = field(default=None)
    error_json_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
