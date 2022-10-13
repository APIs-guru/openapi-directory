from dataclasses import dataclass, field
from typing import Enum,Optional

class GetUpdatePathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetUpdatePathwayQueryParams:
    auth: str = field(default=None, metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    description: str = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    format: Optional[GetUpdatePathwayFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    gpml: str = field(default=None, metadata={'query_param': { 'field_name': 'gpml', 'style': 'form', 'explode': True }})
    pw_id: str = field(default=None, metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    revision: int = field(default=None, metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    username: str = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdatePathwayRequest:
    query_params: GetUpdatePathwayQueryParams = field(default=None)
    

@dataclass
class GetUpdatePathwayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
