from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetUserByOrcidFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetUserByOrcidQueryParams:
    orcid: str = field(metadata={'query_param': { 'field_name': 'orcid', 'style': 'form', 'explode': True }})
    format: Optional[GetGetUserByOrcidFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetUserByOrcidRequest:
    query_params: GetGetUserByOrcidQueryParams = field()
    

@dataclass
class GetGetUserByOrcidResponse:
    content_type: str = field()
    status_code: int = field()
    
