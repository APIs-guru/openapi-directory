from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetSaveCurationTagFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetSaveCurationTagQueryParams:
    auth: str = field(metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    pw_id: str = field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    revision: int = field(metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    tag_name: str = field(metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    text: str = field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    username: str = field(metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    format: Optional[GetSaveCurationTagFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSaveCurationTagRequest:
    query_params: GetSaveCurationTagQueryParams = field()
    

@dataclass
class GetSaveCurationTagResponse:
    content_type: str = field()
    status_code: int = field()
    
