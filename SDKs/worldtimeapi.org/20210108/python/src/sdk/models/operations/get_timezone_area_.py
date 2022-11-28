from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetTimezoneAreaPathParams:
    area: str = field(metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaRequest:
    path_params: GetTimezoneAreaPathParams = field()
    

@dataclass
class GetTimezoneAreaResponse:
    content_type: str = field()
    status_code: int = field()
    error_json_response: Optional[Any] = field(default=None)
    list_json_response: Optional[List[str]] = field(default=None)
    
