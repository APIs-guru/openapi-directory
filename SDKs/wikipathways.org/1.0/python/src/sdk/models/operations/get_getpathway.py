from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGetPathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetPathwayQueryParams:
    format: Optional[GetGetPathwayFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    pw_id: str = field(default=None, metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    revision: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetPathwayRequest:
    query_params: GetGetPathwayQueryParams = field(default=None)
    

@dataclass
class GetGetPathwayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
