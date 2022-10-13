from dataclasses import dataclass, field
from typing import Enum,Optional

class GetFindPathwaysByLiteratureFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetFindPathwaysByLiteratureQueryParams:
    format: Optional[GetFindPathwaysByLiteratureFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFindPathwaysByLiteratureRequest:
    query_params: GetFindPathwaysByLiteratureQueryParams = field(default=None)
    

@dataclass
class GetFindPathwaysByLiteratureResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
