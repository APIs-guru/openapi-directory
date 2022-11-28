from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetPathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetPathwayQueryParams:
    pw_id: str = field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetPathwayFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    revision: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetPathwayRequest:
    query_params: GetGetPathwayQueryParams = field()
    

@dataclass
class GetGetPathwayResponse:
    content_type: str = field()
    status_code: int = field()
    
