from dataclasses import dataclass, field
from typing import Enum

class GetClientClientIDTokenKindKindEnum(str, Enum):
    REGISTRATION_ = "'registration'"
    SELFIE_ = "'selfie'"
    PLAIN_ = "'plain'"


@dataclass
class GetClientClientIDTokenKindPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    kind: GetClientClientIDTokenKindKindEnum = field(default=None, metadata={'path_param': { 'field_name': 'kind', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetClientClientIDTokenKindRequest:
    path_params: GetClientClientIDTokenKindPathParams = field(default=None)
    

@dataclass
class GetClientClientIDTokenKindResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
