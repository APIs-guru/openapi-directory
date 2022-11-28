from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class GetEtymologiesPathParams:
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetEtymologiesUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclass
class GetEtymologiesQueryParams:
    use_canonical: Optional[GetEtymologiesUseCanonicalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEtymologiesRequest:
    path_params: GetEtymologiesPathParams = field()
    query_params: GetEtymologiesQueryParams = field()
    

@dataclass
class GetEtymologiesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
