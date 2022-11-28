from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetObservationsByCodePathParams:
    code: str = field(metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    user_id: int = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObservationsByCodeRequest:
    path_params: GetObservationsByCodePathParams = field()
    

@dataclass
class GetObservationsByCodeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
