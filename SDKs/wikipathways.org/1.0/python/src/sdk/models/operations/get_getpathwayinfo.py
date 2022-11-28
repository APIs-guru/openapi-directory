from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetPathwayInfoFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetPathwayInfoQueryParams:
    pw_id: str = field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetPathwayInfoFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetPathwayInfoRequest:
    query_params: GetGetPathwayInfoQueryParams = field()
    

@dataclass
class GetGetPathwayInfoResponse:
    content_type: str = field()
    status_code: int = field()
    
