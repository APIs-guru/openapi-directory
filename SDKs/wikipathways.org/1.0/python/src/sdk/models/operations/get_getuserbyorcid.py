from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGetUserByOrcidFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetUserByOrcidQueryParams:
    format: Optional[GetGetUserByOrcidFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    orcid: str = field(default=None, metadata={'query_param': { 'field_name': 'orcid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetUserByOrcidRequest:
    query_params: GetGetUserByOrcidQueryParams = field(default=None)
    

@dataclass
class GetGetUserByOrcidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
