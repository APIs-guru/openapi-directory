from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetPathwaysByOntologyTermFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetPathwaysByOntologyTermQueryParams:
    term: str = field(metadata={'query_param': { 'field_name': 'term', 'style': 'form', 'explode': True }})
    format: Optional[GetGetPathwaysByOntologyTermFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetPathwaysByOntologyTermRequest:
    query_params: GetGetPathwaysByOntologyTermQueryParams = field()
    

@dataclass
class GetGetPathwaysByOntologyTermResponse:
    content_type: str = field()
    status_code: int = field()
    
