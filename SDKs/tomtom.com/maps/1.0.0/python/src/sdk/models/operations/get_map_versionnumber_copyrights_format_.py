from dataclasses import dataclass, field
from typing import Enum,Optional

class GetMapVersionNumberCopyrightsFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    XML = "xml"


@dataclass
class GetMapVersionNumberCopyrightsFormatPathParams:
    format: GetMapVersionNumberCopyrightsFormatFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapVersionNumberCopyrightsFormatQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMapVersionNumberCopyrightsFormatRequest:
    path_params: GetMapVersionNumberCopyrightsFormatPathParams = field(default=None)
    query_params: GetMapVersionNumberCopyrightsFormatQueryParams = field(default=None)
    

@dataclass
class GetMapVersionNumberCopyrightsFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
