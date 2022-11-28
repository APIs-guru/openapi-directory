from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetCurationTagHistoryFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetCurationTagHistoryQueryParams:
    pw_id: str = field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetCurationTagHistoryFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    timestamp: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetCurationTagHistoryRequest:
    query_params: GetGetCurationTagHistoryQueryParams = field()
    

@dataclass
class GetGetCurationTagHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    
