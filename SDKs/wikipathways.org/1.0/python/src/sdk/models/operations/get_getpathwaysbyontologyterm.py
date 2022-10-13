from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGetPathwaysByOntologyTermFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetPathwaysByOntologyTermQueryParams:
    format: Optional[GetGetPathwaysByOntologyTermFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    term: str = field(default=None, metadata={'query_param': { 'field_name': 'term', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetPathwaysByOntologyTermRequest:
    query_params: GetGetPathwaysByOntologyTermQueryParams = field(default=None)
    

@dataclass
class GetGetPathwaysByOntologyTermResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
