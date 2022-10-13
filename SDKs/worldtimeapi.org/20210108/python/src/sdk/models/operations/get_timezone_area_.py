from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetTimezoneAreaPathParams:
    area: str = field(default=None, metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaRequest:
    path_params: GetTimezoneAreaPathParams = field(default=None)
    

@dataclass
class GetTimezoneAreaResponse:
    content_type: str = field(default=None)
    error_json_response: Optional[Any] = field(default=None)
    list_json_response: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    
