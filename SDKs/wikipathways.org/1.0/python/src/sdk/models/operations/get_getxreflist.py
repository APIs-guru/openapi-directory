from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetXrefListFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetXrefListQueryParams:
    code: str = field(metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    pw_id: str = field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetXrefListFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetXrefListRequest:
    query_params: GetGetXrefListQueryParams = field()
    

@dataclass
class GetGetXrefListResponse:
    content_type: str = field()
    status_code: int = field()
    
