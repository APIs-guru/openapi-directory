from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetWordFrequencyPathParams:
    word: str = field(default=None, metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetWordFrequencyUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclass
class GetWordFrequencyQueryParams:
    end_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endYear', 'style': 'form', 'explode': True }})
    start_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startYear', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetWordFrequencyUseCanonicalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWordFrequencyRequest:
    path_params: GetWordFrequencyPathParams = field(default=None)
    query_params: GetWordFrequencyQueryParams = field(default=None)
    

@dataclass
class GetWordFrequencyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
