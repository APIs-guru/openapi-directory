from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTimezoneAreaTxtPathParams:
    area: str = field(metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaTxtRequest:
    path_params: GetTimezoneAreaTxtPathParams = field()
    

@dataclass
class GetTimezoneAreaTxtResponse:
    content_type: str = field()
    status_code: int = field()
    error_text_response: Optional[str] = field(default=None)
    list_text_response: Optional[str] = field(default=None)
    
