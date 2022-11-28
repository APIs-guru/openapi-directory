from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class PostCreatePathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class PostCreatePathwayQueryParams:
    auth: str = field(metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    gpml: str = field(metadata={'query_param': { 'field_name': 'gpml', 'style': 'form', 'explode': True }})
    username: str = field(metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    format: Optional[PostCreatePathwayFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCreatePathwayRequest:
    query_params: PostCreatePathwayQueryParams = field()
    

@dataclass
class PostCreatePathwayResponse:
    content_type: str = field()
    status_code: int = field()
    
