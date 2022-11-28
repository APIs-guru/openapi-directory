from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetErrorsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetErrorsIDRequest:
    path_params: GetErrorsIDPathParams = field()
    

@dataclass
class GetErrorsIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
