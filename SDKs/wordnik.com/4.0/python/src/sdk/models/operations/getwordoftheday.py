from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetWordOfTheDayQueryParams:
    date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWordOfTheDayRequest:
    query_params: GetWordOfTheDayQueryParams = field(default=None)
    

@dataclass
class GetWordOfTheDayResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
