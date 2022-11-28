from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetBasicPatientDetailsPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBasicPatientDetailsRequest:
    path_params: GetBasicPatientDetailsPathParams = field()
    

@dataclass
class GetBasicPatientDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
