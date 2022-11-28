from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetLoginFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetLoginQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    pass_: str = field(metadata={'query_param': { 'field_name': 'pass', 'style': 'form', 'explode': True }})
    format: Optional[GetLoginFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLoginRequest:
    query_params: GetLoginQueryParams = field()
    

@dataclass
class GetLoginResponse:
    content_type: str = field()
    status_code: int = field()
    
