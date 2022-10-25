from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTimezoneAreaTxtPathParams:
    area: str = field(default=None, metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaTxtRequest:
    path_params: GetTimezoneAreaTxtPathParams = field(default=None)
    

@dataclass
class GetTimezoneAreaTxtResponse:
    content_type: str = field(default=None)
    error_text_response: Optional[str] = field(default=None)
    list_text_response: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
