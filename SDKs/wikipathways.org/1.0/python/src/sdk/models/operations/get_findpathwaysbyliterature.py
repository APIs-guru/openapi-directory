from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetFindPathwaysByLiteratureFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetFindPathwaysByLiteratureQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    format: Optional[GetFindPathwaysByLiteratureFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFindPathwaysByLiteratureRequest:
    query_params: GetFindPathwaysByLiteratureQueryParams = field()
    

@dataclass
class GetFindPathwaysByLiteratureResponse:
    content_type: str = field()
    status_code: int = field()
    
