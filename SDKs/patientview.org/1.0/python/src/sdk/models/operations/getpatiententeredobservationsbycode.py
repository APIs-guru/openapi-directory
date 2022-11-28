from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPatientEnteredObservationsByCodePathParams:
    code: str = field(metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    user_id: int = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientEnteredObservationsByCodeRequest:
    path_params: GetPatientEnteredObservationsByCodePathParams = field()
    

@dataclass
class GetPatientEnteredObservationsByCodeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
