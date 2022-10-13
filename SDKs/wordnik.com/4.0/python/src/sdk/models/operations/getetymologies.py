from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetEtymologiesPathParams:
    word: str = field(default=None, metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetEtymologiesUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclass
class GetEtymologiesQueryParams:
    use_canonical: Optional[GetEtymologiesUseCanonicalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEtymologiesRequest:
    path_params: GetEtymologiesPathParams = field(default=None)
    query_params: GetEtymologiesQueryParams = field(default=None)
    

@dataclass
class GetEtymologiesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
