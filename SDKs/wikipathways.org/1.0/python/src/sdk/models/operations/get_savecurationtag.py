from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSaveCurationTagFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetSaveCurationTagQueryParams:
    auth: str = field(default=None, metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    format: Optional[GetSaveCurationTagFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    pw_id: str = field(default=None, metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    revision: int = field(default=None, metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    tag_name: str = field(default=None, metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    text: str = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    username: str = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSaveCurationTagRequest:
    query_params: GetSaveCurationTagQueryParams = field(default=None)
    

@dataclass
class GetSaveCurationTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
