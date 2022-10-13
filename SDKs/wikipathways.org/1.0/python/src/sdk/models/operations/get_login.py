from dataclasses import dataclass, field
from typing import Enum,Optional

class GetLoginFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetLoginQueryParams:
    format: Optional[GetLoginFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    pass_: str = field(default=None, metadata={'query_param': { 'field_name': 'pass', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLoginRequest:
    query_params: GetLoginQueryParams = field(default=None)
    

@dataclass
class GetLoginResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
