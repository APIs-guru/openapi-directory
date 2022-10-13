from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetListPathwaysFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetListPathwaysQueryParams:
    format: Optional[GetListPathwaysFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    organism: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'organism', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListPathwaysRequest:
    query_params: GetListPathwaysQueryParams = field(default=None)
    

@dataclass
class GetListPathwaysResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
