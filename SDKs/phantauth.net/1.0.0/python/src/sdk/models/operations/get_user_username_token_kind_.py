from dataclasses import dataclass, field
from typing import Enum,Optional

class GetUserUsernameTokenKindKindEnum(str, Enum):
    ACCESS_ = "'access'"
    REFRESH_ = "'refresh'"
    AUTHORIZATION_ = "'authorization'"
    ID_ = "'id'"
    SELFIE_ = "'selfie'"
    PLAIN_ = "'plain'"


@dataclass
class GetUserUsernameTokenKindPathParams:
    kind: GetUserUsernameTokenKindKindEnum = field(default=None, metadata={'path_param': { 'field_name': 'kind', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserUsernameTokenKindQueryParams:
    scope: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserUsernameTokenKindRequest:
    path_params: GetUserUsernameTokenKindPathParams = field(default=None)
    query_params: GetUserUsernameTokenKindQueryParams = field(default=None)
    

@dataclass
class GetUserUsernameTokenKindResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
