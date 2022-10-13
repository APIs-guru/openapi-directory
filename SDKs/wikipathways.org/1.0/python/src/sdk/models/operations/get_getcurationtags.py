from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGetCurationTagsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetCurationTagsQueryParams:
    format: Optional[GetGetCurationTagsFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    pw_id: str = field(default=None, metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetCurationTagsRequest:
    query_params: GetGetCurationTagsQueryParams = field(default=None)
    

@dataclass
class GetGetCurationTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
