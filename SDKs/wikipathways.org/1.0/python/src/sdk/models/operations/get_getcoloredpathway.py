from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class GetGetColoredPathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetColoredPathwayQueryParams:
    color: List[Any] = field(metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': False }})
    file_type: str = field(metadata={'query_param': { 'field_name': 'fileType', 'style': 'form', 'explode': True }})
    graph_id: List[Any] = field(metadata={'query_param': { 'field_name': 'graphId', 'style': 'form', 'explode': False }})
    pw_id: str = field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    revision: str = field(metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    format: Optional[GetGetColoredPathwayFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetColoredPathwayRequest:
    query_params: GetGetColoredPathwayQueryParams = field()
    

@dataclass
class GetGetColoredPathwayResponse:
    content_type: str = field()
    status_code: int = field()
    
