from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetFindInteractionsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetFindInteractionsQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    format: Optional[GetFindInteractionsFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFindInteractionsRequest:
    query_params: GetFindInteractionsQueryParams = field()
    

@dataclass
class GetFindInteractionsResponse:
    content_type: str = field()
    status_code: int = field()
    
