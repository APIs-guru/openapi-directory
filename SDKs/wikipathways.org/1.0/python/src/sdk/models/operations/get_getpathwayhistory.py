from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGetPathwayHistoryFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetPathwayHistoryQueryParams:
    format: Optional[GetGetPathwayHistoryFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    pw_id: str = field(default=None, metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetPathwayHistoryRequest:
    query_params: GetGetPathwayHistoryQueryParams = field(default=None)
    

@dataclass
class GetGetPathwayHistoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
