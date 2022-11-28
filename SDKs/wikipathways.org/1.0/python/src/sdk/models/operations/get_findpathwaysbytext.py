from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetFindPathwaysByTextFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetFindPathwaysByTextQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    format: Optional[GetFindPathwaysByTextFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    species: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'species', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFindPathwaysByTextRequest:
    query_params: GetFindPathwaysByTextQueryParams = field()
    

@dataclass
class GetFindPathwaysByTextResponse:
    content_type: str = field()
    status_code: int = field()
    
