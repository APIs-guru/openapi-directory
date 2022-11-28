from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetSaveOntologyTagFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetSaveOntologyTagQueryParams:
    auth: str = field(metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    pw_id: str = field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    term: str = field(metadata={'query_param': { 'field_name': 'term', 'style': 'form', 'explode': True }})
    term_id: str = field(metadata={'query_param': { 'field_name': 'termId', 'style': 'form', 'explode': True }})
    user: str = field(metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    format: Optional[GetSaveOntologyTagFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSaveOntologyTagRequest:
    query_params: GetSaveOntologyTagQueryParams = field()
    

@dataclass
class GetSaveOntologyTagResponse:
    content_type: str = field()
    status_code: int = field()
    
