from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetUserUsernameTokenKindKindEnum(str, Enum):
    ACCESS_ = "'access'"
    REFRESH_ = "'refresh'"
    AUTHORIZATION_ = "'authorization'"
    ID_ = "'id'"
    SELFIE_ = "'selfie'"
    PLAIN_ = "'plain'"


@dataclass
class GetUserUsernameTokenKindPathParams:
    kind: GetUserUsernameTokenKindKindEnum = field(metadata={'path_param': { 'field_name': 'kind', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserUsernameTokenKindQueryParams:
    scope: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserUsernameTokenKindRequest:
    path_params: GetUserUsernameTokenKindPathParams = field()
    query_params: GetUserUsernameTokenKindQueryParams = field()
    

@dataclass
class GetUserUsernameTokenKindResponse:
    content_type: str = field()
    status_code: int = field()
    
