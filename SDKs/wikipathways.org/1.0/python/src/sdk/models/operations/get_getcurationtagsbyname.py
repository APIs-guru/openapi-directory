from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetCurationTagsByNameFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetCurationTagsByNameQueryParams:
    tag_name: str = field(metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    format: Optional[GetGetCurationTagsByNameFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetCurationTagsByNameRequest:
    query_params: GetGetCurationTagsByNameQueryParams = field()
    

@dataclass
class GetGetCurationTagsByNameResponse:
    content_type: str = field()
    status_code: int = field()
    
