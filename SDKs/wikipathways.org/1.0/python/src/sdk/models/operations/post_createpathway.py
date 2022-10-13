from dataclasses import dataclass, field
from typing import Enum,Optional

class PostCreatePathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class PostCreatePathwayQueryParams:
    auth: str = field(default=None, metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    format: Optional[PostCreatePathwayFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    gpml: str = field(default=None, metadata={'query_param': { 'field_name': 'gpml', 'style': 'form', 'explode': True }})
    username: str = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCreatePathwayRequest:
    query_params: PostCreatePathwayQueryParams = field(default=None)
    

@dataclass
class PostCreatePathwayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
