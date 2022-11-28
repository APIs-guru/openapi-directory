from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class GetWordFrequencyPathParams:
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
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
    path_params: GetWordFrequencyPathParams = field()
    query_params: GetWordFrequencyQueryParams = field()
    

@dataclass
class GetWordFrequencyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
