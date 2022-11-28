from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class GetExamplesPathParams:
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetExamplesIncludeDuplicatesEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"

class GetExamplesUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclass
class GetExamplesQueryParams:
    include_duplicates: Optional[GetExamplesIncludeDuplicatesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'includeDuplicates', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetExamplesUseCanonicalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExamplesRequest:
    path_params: GetExamplesPathParams = field()
    query_params: GetExamplesQueryParams = field()
    

@dataclass
class GetExamplesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
