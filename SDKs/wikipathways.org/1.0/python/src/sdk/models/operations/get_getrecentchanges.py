from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGetRecentChangesFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetRecentChangesQueryParams:
    format: Optional[GetGetRecentChangesFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetRecentChangesRequest:
    query_params: GetGetRecentChangesQueryParams = field(default=None)
    

@dataclass
class GetGetRecentChangesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
