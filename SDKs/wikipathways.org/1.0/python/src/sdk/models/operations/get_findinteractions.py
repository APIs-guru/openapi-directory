from dataclasses import dataclass, field
from typing import Enum,Optional

class GetFindInteractionsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetFindInteractionsQueryParams:
    format: Optional[GetFindInteractionsFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFindInteractionsRequest:
    query_params: GetFindInteractionsQueryParams = field(default=None)
    

@dataclass
class GetFindInteractionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
