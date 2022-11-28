from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetPathwayHistoryFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetPathwayHistoryQueryParams:
    pw_id: str = field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    format: Optional[GetGetPathwayHistoryFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetPathwayHistoryRequest:
    query_params: GetGetPathwayHistoryQueryParams = field()
    

@dataclass
class GetGetPathwayHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    
