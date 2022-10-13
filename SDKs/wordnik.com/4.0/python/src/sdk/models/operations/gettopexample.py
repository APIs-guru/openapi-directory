from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetTopExamplePathParams:
    word: str = field(default=None, metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetTopExampleUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclass
class GetTopExampleQueryParams:
    use_canonical: Optional[GetTopExampleUseCanonicalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTopExampleRequest:
    path_params: GetTopExamplePathParams = field(default=None)
    query_params: GetTopExampleQueryParams = field(default=None)
    

@dataclass
class GetTopExampleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
