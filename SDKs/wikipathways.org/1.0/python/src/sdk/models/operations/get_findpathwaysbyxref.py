from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class GetFindPathwaysByXrefFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetFindPathwaysByXrefQueryParams:
    ids: List[Any] = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    codes: Optional[List[Any]] = field(default=None, metadata={'query_param': { 'field_name': 'codes', 'style': 'form', 'explode': False }})
    format: Optional[GetFindPathwaysByXrefFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFindPathwaysByXrefRequest:
    query_params: GetFindPathwaysByXrefQueryParams = field()
    

@dataclass
class GetFindPathwaysByXrefResponse:
    content_type: str = field()
    status_code: int = field()
    
