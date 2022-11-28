from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetMapVersionNumberCopyrightsFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    XML = "xml"


@dataclass
class GetMapVersionNumberCopyrightsFormatPathParams:
    format: GetMapVersionNumberCopyrightsFormatFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapVersionNumberCopyrightsFormatQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMapVersionNumberCopyrightsFormatRequest:
    path_params: GetMapVersionNumberCopyrightsFormatPathParams = field()
    query_params: GetMapVersionNumberCopyrightsFormatQueryParams = field()
    

@dataclass
class GetMapVersionNumberCopyrightsFormatResponse:
    content_type: str = field()
    status_code: int = field()
    
