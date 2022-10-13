from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class GetFindPathwaysByXrefFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetFindPathwaysByXrefQueryParams:
    codes: Optional[List[Any]] = field(default=None, metadata={'query_param': { 'field_name': 'codes', 'style': 'form', 'explode': False }})
    format: Optional[GetFindPathwaysByXrefFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    ids: List[Any] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    

@dataclass
class GetFindPathwaysByXrefRequest:
    query_params: GetFindPathwaysByXrefQueryParams = field(default=None)
    

@dataclass
class GetFindPathwaysByXrefResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
