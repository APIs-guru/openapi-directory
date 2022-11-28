from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetPathwaysByParentOntologyTermFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetPathwaysByParentOntologyTermQueryParams:
    term: str = field(metadata={'query_param': { 'field_name': 'term', 'style': 'form', 'explode': True }})
    format: Optional[GetGetPathwaysByParentOntologyTermFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetPathwaysByParentOntologyTermRequest:
    query_params: GetGetPathwaysByParentOntologyTermQueryParams = field()
    

@dataclass
class GetGetPathwaysByParentOntologyTermResponse:
    content_type: str = field()
    status_code: int = field()
    
