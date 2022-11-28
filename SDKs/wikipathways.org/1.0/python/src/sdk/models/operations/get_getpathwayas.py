from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetPathwayAsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetPathwayAsQueryParams:
    file_type: str = field(metadata={'query_param': { 'field_name': 'fileType', 'style': 'form', 'explode': True }})
    pw_id: str = field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetPathwayAsFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    revision: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetPathwayAsRequest:
    query_params: GetGetPathwayAsQueryParams = field()
    

@dataclass
class GetGetPathwayAsResponse:
    content_type: str = field()
    status_code: int = field()
    
