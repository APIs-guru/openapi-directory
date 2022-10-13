from dataclasses import dataclass, field
from typing import Enum,Optional

class GetRemoveCurationTagFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetRemoveCurationTagQueryParams:
    auth: str = field(default=None, metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    format: Optional[GetRemoveCurationTagFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    pw_id: str = field(default=None, metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    tag_name: str = field(default=None, metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    username: str = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRemoveCurationTagRequest:
    query_params: GetRemoveCurationTagQueryParams = field(default=None)
    

@dataclass
class GetRemoveCurationTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
