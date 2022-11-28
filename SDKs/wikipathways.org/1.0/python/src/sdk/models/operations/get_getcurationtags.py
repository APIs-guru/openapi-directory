from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetCurationTagsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetCurationTagsQueryParams:
    pw_id: str = field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetCurationTagsFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetCurationTagsRequest:
    query_params: GetGetCurationTagsQueryParams = field()
    

@dataclass
class GetGetCurationTagsResponse:
    content_type: str = field()
    status_code: int = field()
    
