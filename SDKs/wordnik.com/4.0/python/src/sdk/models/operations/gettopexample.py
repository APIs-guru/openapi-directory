from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class GetTopExamplePathParams:
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetTopExampleUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclass
class GetTopExampleQueryParams:
    use_canonical: Optional[GetTopExampleUseCanonicalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTopExampleRequest:
    path_params: GetTopExamplePathParams = field()
    query_params: GetTopExampleQueryParams = field()
    

@dataclass
class GetTopExampleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
