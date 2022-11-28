from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetOntologyTermsByPathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclass
class GetGetOntologyTermsByPathwayQueryParams:
    pw_id: str = field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetOntologyTermsByPathwayFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetOntologyTermsByPathwayRequest:
    query_params: GetGetOntologyTermsByPathwayQueryParams = field()
    

@dataclass
class GetGetOntologyTermsByPathwayResponse:
    content_type: str = field()
    status_code: int = field()
    
