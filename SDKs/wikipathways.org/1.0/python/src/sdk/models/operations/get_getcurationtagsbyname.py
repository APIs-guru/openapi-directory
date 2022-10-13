from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGetCurationTagsByNameFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetCurationTagsByNameQueryParams:
    format: Optional[GetGetCurationTagsByNameFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    tag_name: str = field(default=None, metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetCurationTagsByNameRequest:
    query_params: GetGetCurationTagsByNameQueryParams = field(default=None)
    

@dataclass
class GetGetCurationTagsByNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
