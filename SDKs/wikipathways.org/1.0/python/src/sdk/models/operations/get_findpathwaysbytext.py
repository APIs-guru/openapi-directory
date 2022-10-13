from dataclasses import dataclass, field
from typing import Enum,Optional

class GetFindPathwaysByTextFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetFindPathwaysByTextQueryParams:
    format: Optional[GetFindPathwaysByTextFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    species: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'species', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFindPathwaysByTextRequest:
    query_params: GetFindPathwaysByTextQueryParams = field(default=None)
    

@dataclass
class GetFindPathwaysByTextResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
