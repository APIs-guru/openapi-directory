from dataclasses import dataclass, field
from enum import Enum

class GetClientClientIDTokenKindKindEnum(str, Enum):
    REGISTRATION_ = "'registration'"
    SELFIE_ = "'selfie'"
    PLAIN_ = "'plain'"


@dataclass
class GetClientClientIDTokenKindPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    kind: GetClientClientIDTokenKindKindEnum = field(metadata={'path_param': { 'field_name': 'kind', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetClientClientIDTokenKindRequest:
    path_params: GetClientClientIDTokenKindPathParams = field()
    

@dataclass
class GetClientClientIDTokenKindResponse:
    content_type: str = field()
    status_code: int = field()
    
