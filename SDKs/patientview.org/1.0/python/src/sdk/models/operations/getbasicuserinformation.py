from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetBasicUserInformationPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBasicUserInformationRequest:
    path_params: GetBasicUserInformationPathParams = field()
    

@dataclass
class GetBasicUserInformationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
