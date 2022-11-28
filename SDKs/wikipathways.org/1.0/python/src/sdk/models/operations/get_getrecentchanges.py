from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetRecentChangesFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetRecentChangesQueryParams:
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    format: Optional[GetGetRecentChangesFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetRecentChangesRequest:
    query_params: GetGetRecentChangesQueryParams = field()
    

@dataclass
class GetGetRecentChangesResponse:
    content_type: str = field()
    status_code: int = field()
    
