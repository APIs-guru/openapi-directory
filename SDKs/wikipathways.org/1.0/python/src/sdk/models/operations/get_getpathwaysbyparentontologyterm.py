from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGetPathwaysByParentOntologyTermFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetPathwaysByParentOntologyTermQueryParams:
    format: Optional[GetGetPathwaysByParentOntologyTermFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    term: str = field(default=None, metadata={'query_param': { 'field_name': 'term', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetPathwaysByParentOntologyTermRequest:
    query_params: GetGetPathwaysByParentOntologyTermQueryParams = field(default=None)
    

@dataclass
class GetGetPathwaysByParentOntologyTermResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
