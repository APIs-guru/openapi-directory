from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTimezoneAreaLocationRegionTxtPathParams:
    area: str = field(default=None, metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    location: str = field(default=None, metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    region: str = field(default=None, metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaLocationRegionTxtRequest:
    path_params: GetTimezoneAreaLocationRegionTxtPathParams = field(default=None)
    

@dataclass
class GetTimezoneAreaLocationRegionTxtResponse:
    content_type: str = field(default=None)
    date_time_text_response: Optional[str] = field(default=None)
    error_text_response: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
