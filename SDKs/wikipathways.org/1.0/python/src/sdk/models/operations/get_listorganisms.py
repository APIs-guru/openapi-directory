from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetListOrganismsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetListOrganismsQueryParams:
    format: Optional[GetListOrganismsFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListOrganismsRequest:
    query_params: GetListOrganismsQueryParams = field(default=None)
    

@dataclass
class GetListOrganismsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
