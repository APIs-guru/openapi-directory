from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetPhrasesPathParams:
    word: str = field(default=None, metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetPhrasesUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclass
class GetPhrasesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetPhrasesUseCanonicalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    wlmi: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'wlmi', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPhrasesRequest:
    path_params: GetPhrasesPathParams = field(default=None)
    query_params: GetPhrasesQueryParams = field(default=None)
    

@dataclass
class GetPhrasesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
