from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class GetGetColoredPathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetColoredPathwayQueryParams:
    color: List[Any] = field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': False }})
    file_type: str = field(default=None, metadata={'query_param': { 'field_name': 'fileType', 'style': 'form', 'explode': True }})
    format: Optional[GetGetColoredPathwayFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    graph_id: List[Any] = field(default=None, metadata={'query_param': { 'field_name': 'graphId', 'style': 'form', 'explode': False }})
    pw_id: str = field(default=None, metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    revision: str = field(default=None, metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetColoredPathwayRequest:
    query_params: GetGetColoredPathwayQueryParams = field(default=None)
    

@dataclass
class GetGetColoredPathwayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
