from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetRemoveOntologyTagFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetRemoveOntologyTagQueryParams:
    auth: str = field(metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    pw_id: str = field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    term_id: str = field(metadata={'query_param': { 'field_name': 'termId', 'style': 'form', 'explode': True }})
    user: str = field(metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    format: Optional[GetRemoveOntologyTagFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRemoveOntologyTagRequest:
    query_params: GetRemoveOntologyTagQueryParams = field()
    

@dataclass
class GetRemoveOntologyTagResponse:
    content_type: str = field()
    status_code: int = field()
    
